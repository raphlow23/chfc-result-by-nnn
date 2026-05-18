const KLEAGUE_ORIGIN = "https://www.kleague.com";
const playerStatsCache = new Map();
const PLAYER_STATS_CACHE_MS = 10 * 60 * 1000;
const CHEONGJU_TEAM_ID = "K37";
const KLEAGUE_LEAGUE_IDS = ["1", "2"];

async function postKLeagueJson(path, data) {
  const response = await fetch(`${KLEAGUE_ORIGIN}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Referer: `${KLEAGUE_ORIGIN}/schedule.do?leagueId=2`,
      "User-Agent": "Mozilla/5.0"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`K League request failed: ${response.status}`);
  }

  return response.json();
}

async function postKLeagueForm(path, data) {
  const response = await fetch(`${KLEAGUE_ORIGIN}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: `${KLEAGUE_ORIGIN}/match.do`,
      "User-Agent": "Mozilla/5.0"
    },
    body: new URLSearchParams(data)
  });

  if (!response.ok) {
    throw new Error(`K League form request failed: ${response.status}`);
  }

  return response.json();
}

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

function toNumber(value) {
  if (value === undefined || value === null || value === "-") return 0;
  const numeric = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function toPlayerPosition(value = "") {
  const normalized = String(value || "").toUpperCase();
  if (normalized.includes("GK") || normalized.includes("GOALKEEPER")) return "GK";
  if (normalized.includes("DF") || normalized.includes("DEFENDER")) return "DF";
  if (normalized.includes("FW") || normalized.includes("FORWARD") || normalized.includes("STRIKER")) return "FW";
  if (normalized.includes("MF") || normalized.includes("MIDFIELDER")) return "MF";
  return "MF";
}

function normalizePlayerName(value = "") {
  return String(value || "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function parsePlayerSeasonStats(text = "", season = "") {
  const compact = stripHtml(text);
  const info = compact.match(/Player Information\s+([\s\S]*?)\s+Summary/)?.[1] || compact;
  const position = toPlayerPosition(info.match(/Position\s+(GK|DF|MF|FW|Goalkeeper|Defender|Midfielder|Forward)\b/i)?.[1] || info.match(/No\.\s*[^\s]+\s+.+?\s+(GK|DF|MF|FW|Goalkeeper|Defender|Midfielder|Forward)\b/i)?.[1] || "");
  const isGoalkeeper = position === "GK";
  const seasonSection = compact.match(/Season Record\s+([\s\S]*?)\s+Team Record/)?.[1] || "";
  const seasonLines = seasonSection
    .split(/(?=\b(?:19|20)\d{2}\s+)/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith(season));
  const targetLine = seasonLines.find((line) => line.includes("충북청주") || line.toLowerCase().includes("cheongju")) || seasonLines[0] || "";
  const lineMatch = targetLine.match(/^((?:19|20)\d{2})\s+(.+?)\s+((?:-|\d+)(?:\s+(?:-|\d+))+)/);

  if (!lineMatch) {
    return {
      appearances: 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      yellowCards: 0,
      redCards: 0
    };
  }

  const values = lineMatch[3].trim().split(/\s+/);
  const totals = values.slice(-3);
  const appearances = toNumber(totals[0]);
  const secondValue = toNumber(totals[1]);
  const thirdValue = toNumber(totals[2]);

  const playerName = info.match(/No\.\s*[^\s]+\s+(.+?)\s+(GK|DF|MF|FW)\b/i)?.[1]?.trim() || "";

  return {
    name: playerName,
    appearances,
    goals: isGoalkeeper ? 0 : secondValue,
    assists: isGoalkeeper ? 0 : thirdValue,
    cleanSheets: isGoalkeeper ? thirdValue : 0,
    yellowCards: 0,
    redCards: 0,
    seasonRecords: [
      {
        season,
        appearances,
        goals: isGoalkeeper ? 0 : secondValue,
        assists: isGoalkeeper ? 0 : thirdValue
      }
    ]
  };
}

function parsePlayerRankPage(text = "") {
  const tableRows = [...text.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((row) => [...row[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map((cell) => stripHtml(cell[1])))
    .filter((cells) => cells.length >= 5);
  const header = tableRows.find((cells) => {
    const joined = cells.join(" ").toUpperCase();
    return joined.includes("PLAYER") && joined.includes("GOAL") && joined.includes("ASSIST");
  }) || [];
  const headerText = header.map((cell) => cell.toUpperCase());
  const indexOfHeader = (labels, fallback) => {
    const index = headerText.findIndex((cell) => labels.some((label) => cell.includes(label)));
    return index >= 0 ? index : fallback;
  };
  const tableRowsParsed = [];
  const nameIndex = indexOfHeader(["PLAYER NAME", "NAME", "선수"], 1);
  const clubIndex = indexOfHeader(["CLUB", "TEAM", "구단"], 2);
  const goalIndex = indexOfHeader(["GOAL", "득점"], 3);
  const assistIndex = indexOfHeader(["ASSIST", "도움"], 4);
  const yellowIndex = indexOfHeader(["YELLOW", "경고"], 12);
  const redIndex = indexOfHeader(["SENDING", "RED", "퇴장"], 13);
  const appearancesIndex = indexOfHeader(["GAMES", "MATCH", "출장", "출전"], 15);

  tableRows.forEach((cells) => {
    const club = cells[clubIndex] || "";
    const joined = cells.join(" ");
    const isCheongju = /CHUNGBUK|CHEONGJU|충북청주/.test(joined.toUpperCase()) || club.includes("충북청주");
    const name = cells[nameIndex] || "";

    if (!isCheongju || !name || /PLAYER|선수/.test(name.toUpperCase())) return;

    tableRowsParsed.push({
      name,
      goals: toNumber(cells[goalIndex]),
      assists: toNumber(cells[assistIndex]),
      yellowCards: toNumber(cells[yellowIndex]),
      redCards: toNumber(cells[redIndex]),
      appearances: toNumber(cells[appearancesIndex])
    });
  });

  if (tableRowsParsed.length) return tableRowsParsed;

  const compact = stripHtml(text);
  const body = compact.split("Rank Player Name Club Goal Assist")[1]?.split("라이트 모드")[0] || "";
  const rows = [];
  const rowRegex = /(?:^|\s)(\d{1,3})\s+(.+?)\s+(CHUNGBUK CHEONGJU|충북청주)\s+((?:-|\d+)(?:\s+(?:-|\d+)){13,})/g;
  let match;

  while ((match = rowRegex.exec(body)) !== null) {
    const values = match[4].trim().split(/\s+/);
    rows.push({
      name: match[2].trim(),
      goals: toNumber(values[0]),
      assists: toNumber(values[1]),
      yellowCards: toNumber(values[9]),
      redCards: toNumber(values[10]),
      appearances: toNumber(values[12])
    });
  }

  return rows;
}

function getKLeagueStatus(item) {
  return item.gameStatus === "FE" || item.endYn === "Y" ? "finished" : "scheduled";
}

async function getKLeagueSchedules(season) {
  const schedules = [];

  for (const leagueId of KLEAGUE_LEAGUE_IDS) {
    for (let month = 1; month <= 12; month += 1) {
      const data = await postKLeagueJson("/getScheduleList.do", {
        leagueId,
        teamId: null,
        ticketStatus: null,
        year: Number(season),
        month: String(month).padStart(2, "0"),
        ticketYn: null
      }).catch(() => null);

      schedules.push(...(data?.data?.scheduleList || []));
    }
  }

  return [...new Map(schedules.map((item) => [`${item.year}-${item.meetSeq}-${item.gameId}`, item])).values()]
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID);
}

function timelineRows(matchInfo) {
  return [
    ...(matchInfo?.data?.firstHalf || []),
    ...(matchInfo?.data?.secondHalf || []),
    ...(matchInfo?.data?.EfirstHalf || []),
    ...(matchInfo?.data?.EsecondHalf || [])
  ];
}

function eventText(event) {
  return [
    event.eventName,
    event.eventNm,
    event.eventCode,
    event.eventCd,
    event.eventType,
    event.type,
    event.kind
  ].map((value) => String(value || "").toUpperCase()).join(" ");
}

function eventPlayerId(event, secondary = false) {
  return String(
    secondary
      ? event.playerId2 || event.playerID2 || event.PLAYER_ID2 || event.assistPlayerId || ""
      : event.playerId || event.playerID || event.PLAYER_ID || ""
  );
}

function isGoalEvent(event) {
  const text = eventText(event);
  return text.includes("득점") || text.includes("골") || text.includes("GOAL") || text.includes("SCORE");
}

function isYellowEvent(event) {
  const text = eventText(event);
  return text.includes("경고") || text.includes("YELLOW");
}

function isRedEvent(event) {
  const text = eventText(event);
  return text.includes("퇴장") || text.includes("RED") || text.includes("SENDING");
}

async function getEventStatsByPlayerId(season, playerIds) {
  const playerIdSet = new Set(playerIds);
  const stats = new Map(playerIds.map((playerId) => [playerId, {
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0
  }]));
  const matches = await getKLeagueSchedules(season);

  await mapLimit(matches, 5, async (match) => {
    const matchInfo = await postKLeagueForm("/api/ddf/match/matchInfo.do", {
      year: String(match.year || season),
      meetSeq: String(match.meetSeq || ""),
      gameId: String(match.gameId || "")
    }).catch(() => null);

    timelineRows(matchInfo).forEach((event) => {
      const playerId = eventPlayerId(event);
      const assistPlayerId = eventPlayerId(event, true);

      if (playerIdSet.has(playerId)) {
        const row = stats.get(playerId);
        if (isGoalEvent(event)) row.goals += 1;
        if (isYellowEvent(event)) row.yellowCards += 1;
        if (isRedEvent(event)) row.redCards += 1;
      }

      if (playerIdSet.has(assistPlayerId) && isGoalEvent(event)) {
        stats.get(assistPlayerId).assists += 1;
      }
    });
  });

  return stats;
}

async function mapLimit(items, limit, mapper) {
  const results = [];
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex]);
    }
  });

  await Promise.all(workers);
  return results;
}

export default async function handler(request, response) {
  const season = String(request.query.season || "").trim();
  const playerIds = String(request.query.playerIds || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!season || !playerIds.length) {
    response.status(400).json({ error: "season and playerIds are required" });
    return;
  }

  try {
    const cacheKey = `v2:${season}:${playerIds.join(",")}`;
    const cached = playerStatsCache.get(cacheKey);
    if (cached && Date.now() - cached.savedAt < PLAYER_STATS_CACHE_MS) {
      response.setHeader("Cache-Control", "no-store");
      response.status(200).json(cached.data);
      return;
    }

    const [rankHtml, detailPlayers, eventStatsById] = await Promise.all([
      fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/record/player.do?leagueId=2&year=${encodeURIComponent(season)}&teamId=K37`).catch(() => ""),
      mapLimit(playerIds, 5, async (playerId) => {
      const html = await fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/record/playerDetail.do?playerId=${encodeURIComponent(playerId)}`);
      return {
        playerId,
        ...parsePlayerSeasonStats(html, season)
      };
      }),
      getEventStatsByPlayerId(season, playerIds).catch(() => new Map())
    ]);
    const rankRows = parsePlayerRankPage(rankHtml);
    const rankByName = new Map(rankRows.map((row) => [normalizePlayerName(row.name), row]));
    const players = detailPlayers.map((player) => {
      const rank = rankByName.get(normalizePlayerName(player.name));
      const eventStats = eventStatsById.get(player.playerId) || {};
      if (!rank) {
        return {
          ...player,
          goals: eventStats.goals ?? player.goals,
          assists: eventStats.assists ?? player.assists,
          yellowCards: eventStats.yellowCards ?? player.yellowCards,
          redCards: eventStats.redCards ?? player.redCards,
          seasonRecords: [
            {
              season,
              appearances: player.appearances,
              goals: eventStats.goals ?? player.goals,
              assists: eventStats.assists ?? player.assists
            }
          ]
        };
      }

      return {
        ...player,
        goals: eventStats.goals || rank.goals,
        assists: eventStats.assists || rank.assists,
        appearances: rank.appearances || player.appearances,
        yellowCards: eventStats.yellowCards ?? rank.yellowCards,
        redCards: eventStats.redCards ?? rank.redCards,
        seasonRecords: [
          {
            season,
            appearances: rank.appearances || player.appearances,
            goals: eventStats.goals || rank.goals,
            assists: eventStats.assists || rank.assists
          }
        ]
      };
    });

    response.setHeader("Cache-Control", "no-store");
    const data = { players };
    playerStatsCache.set(cacheKey, { savedAt: Date.now(), data });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message || "Failed to fetch player stats" });
  }
}
