const KLEAGUE_ORIGIN = "https://www.kleague.com";
const playerDetailCache = new Map();
const PLAYER_DETAIL_CACHE_MS = 10 * 60 * 1000;

async function fetchKLeagueHtml(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html",
      "User-Agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    throw new Error(`K League HTML request failed: ${response.status}`);
  }

  return response.text();
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function firstText(...values) {
  return values.find((value) => typeof value === "string" && value.trim())?.trim() || "";
}

function firstNumberText(...values) {
  const found = values.find((value) => value !== undefined && value !== null && String(value).trim());
  return found === undefined || found === null ? "" : String(found).trim();
}

function toNumber(value) {
  if (value === undefined || value === null || value === "-") return 0;
  const numeric = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function toPlayerPosition(value = "") {
  const normalized = String(value || "").toUpperCase();
  if (normalized.includes("GK") || normalized.includes("GOALKEEPER")) return "GK";
  if (normalized.includes("DF") || normalized.includes("DEFENDER")) return "DF";
  if (normalized.includes("FW") || normalized.includes("FORWARD") || normalized.includes("STRIKER")) return "FW";
  if (normalized.includes("MF") || normalized.includes("MIDFIELDER")) return "MF";
  if (normalized.includes("COACH") || normalized.includes("MANAGER")) return "STAFF";
  return "MF";
}

function parsePlayerDetailPage(text = "", season = "") {
  const compact = stripHtml(text);
  const infoMatch = compact.match(/Player Information\s+([\s\S]*?)\s+Summary/);
  const info = infoMatch?.[1] || compact;
  const noMatch = info.match(/No\.\s*([^\s]+)\s+(.+?)\s+(GK|DF|MF|FW|Goalkeeper|Defender|Midfielder|Forward)\b/i);
  const clubMatch = info.match(/Club\s+(.+?)\s+Position\s+(GK|DF|MF|FW)\b/i);
  const positionMatch = info.match(/Position\s+(GK|DF|MF|FW|Goalkeeper|Defender|Midfielder|Forward)\b/i);
  const backNumberMatch = info.match(/Back Number\s+([^\s]+)\s+Nationality\s+(.+?)\s+Height/i);
  const physicalMatch = info.match(/Height\s+([^\s]+)\s+Weight\s+([^\s]+)/i);
  const birthMatch = info.match(/Birth Date\s+([0-9./-]+)/i);
  const rawPosition = firstText(positionMatch?.[1], noMatch?.[3], clubMatch?.[2]);
  const position = toPlayerPosition(rawPosition);
  const isGoalkeeper = position === "GK";
  const seasonSection = compact.match(/Season Record\s+([\s\S]*?)\s+Team Record/);
  const seasonLines = (seasonSection?.[1] || "")
    .split(/(?=\b(?:19|20)\d{2}\s+)/)
    .map((line) => line.trim())
    .filter((line) => /^(?:19|20)\d{2}\s+/.test(line));
  const seasonRecords = [];
  const previousClubs = [];
  const nextClubs = [];
  let joinedYear = "";
  let currentSeasonStats = null;

  seasonLines.forEach((line) => {
    const lineMatch = line.match(/^((?:19|20)\d{2})\s+(.+?)\s+((?:-|\d+)(?:\s+(?:-|\d+))+)/);
    if (!lineMatch) return;

    const recordSeason = lineMatch[1];
    const team = lineMatch[2].trim();
    const values = lineMatch[3].trim().split(/\s+/);
    const totals = values.slice(-3);
    const appearances = toNumber(totals[0]);
    const secondValue = toNumber(totals[1]);
    const thirdValue = toNumber(totals[2]);
    const record = {
      season: recordSeason,
      appearances,
      goals: isGoalkeeper ? 0 : secondValue,
      assists: isGoalkeeper ? 0 : thirdValue,
      cleanSheets: isGoalkeeper ? thirdValue : 0,
      team
    };

    seasonRecords.push(record);

    if (team.includes("충북청주") && (!joinedYear || Number(recordSeason) < Number(joinedYear))) {
      joinedYear = recordSeason;
    }

    if (recordSeason === season) {
      currentSeasonStats = record;
    } else if (Number(recordSeason) < Number(season)) {
      previousClubs.push(team);
    } else if (Number(recordSeason) > Number(season)) {
      nextClubs.push(team);
    }
  });

  return {
    number: firstNumberText(noMatch?.[1], backNumberMatch?.[1]),
    name: noMatch?.[2]?.trim() || "",
    position,
    nationality: backNumberMatch?.[2]?.trim() || "",
    birthDate: birthMatch?.[1]?.replaceAll("/", "-") || "",
    height: physicalMatch?.[1] ? `${physicalMatch[1]}cm` : "",
    weight: physicalMatch?.[2] ? `${physicalMatch[2]}kg` : "",
    joinedYear,
    appearances: currentSeasonStats?.appearances || 0,
    goals: currentSeasonStats?.goals || 0,
    assists: currentSeasonStats?.assists || 0,
    cleanSheets: currentSeasonStats?.cleanSheets || 0,
    seasonRecords: seasonRecords.map((record) => ({
      season: record.season,
      appearances: record.appearances,
      goals: record.goals,
      assists: record.assists
    })),
    previousClubs: uniqueValues(previousClubs),
    nextClubs: uniqueValues(nextClubs)
  };
}

export default async function handler(request, response) {
  const playerId = String(request.query.playerId || "").trim();
  const season = String(request.query.season || "").trim();

  if (!playerId || !season) {
    response.status(400).json({ error: "playerId and season are required" });
    return;
  }

  try {
    const cacheKey = `${season}:${playerId}`;
    const cached = playerDetailCache.get(cacheKey);
    if (cached && Date.now() - cached.savedAt < PLAYER_DETAIL_CACHE_MS) {
      response.setHeader("Cache-Control", "no-store");
      response.status(200).json(cached.data);
      return;
    }

    const html = await fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/record/playerDetail.do?playerId=${encodeURIComponent(playerId)}`);
    const detail = parsePlayerDetailPage(html, season);
    playerDetailCache.set(cacheKey, { savedAt: Date.now(), data: detail });
    response.setHeader("Cache-Control", "no-store");
    response.status(200).json(detail);
  } catch (error) {
    response.status(500).json({ error: error.message || "Failed to fetch player detail" });
  }
}
