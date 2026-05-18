const SOFASCORE_API = "https://api.sofascore.com/api/v1";
const KLEAGUE_ORIGIN = "https://www.kleague.com";

const cheongjuPlayerKo = {
  "NOH DONGGEON": "노동건",
  "DONGGEON NOH": "노동건",
  "Sunghoon CHO": "조성훈",
  "SUNGHOON CHO": "조성훈",
  "Seongbin CHO": "조성빈",
  "SEONGBIN CHO": "조성빈",
  "Yoonsung CHO": "조윤성",
  "YOONSUNG CHO": "조윤성",
  "Keonwoo BAK": "박건우",
  "KEONWOO BAK": "박건우",
  "Juyoung CHO": "조주영",
  "JUYOUNG CHO": "조주영",
  "Yunseok YOUN": "윤석영",
  "YUNSEOK YOUN": "윤석영",
  "EUIBIN KANG": "강의빈",
  "KANGHAN LEE": "이강한",
  "CHANGHOON LEE": "이창훈",
  "SEONMIN KIM": "김선민",
  "SEUNGCHAN HEO": "허승찬",
  "DONGWON LEE": "이동원",
  "JIHOON MIN": "민지훈",
  "JINWOO JEONG": "정진우",
  "NAMOO JOO": "주나무",
  "Irakli BUGHRIJZE": "이라클리",
  "IRAKLI BUGHRIJZE": "이라클리",
  "ENZO": "엔조",
  "Mender GARCIA": "가르시아",
  "MENDER GARCIA": "가르시아",
  "Mender GARCIA TORRES": "가르시아",
  "MENDER GARCIA TORRES": "가르시아",
  "Jungwoo HA": "하정우",
  "JUNGWOO HA": "하정우",
  "WILLYAN DA SILVA BARBOSA": "윌리안",
  "MATHEUS HENRIQUE FRIZZO": "프리조",
  "Jaemin SEO": "서재민",
  "JAEMIN SEO": "서재민",
  "Enzo Eduardo MONTEIRO DE CASTRO BEFRRA": "엔조",
  "ENZO EDUARDO MONTEIRO DE CASTRO BEFRRA": "엔조",
  "Enzo Eduardo MONTEIRO DE CASTRO BECERRA": "엔조",
  "ENZO EDUARDO MONTEIRO DE CASTRO BECERRA": "엔조",
  "JONGEON LEE": "이종언",
  "JAEWON SEO": "서재원",
  "CHANGSEOK SONG": "송창석",
  "YOUNGBIN YANG": "양영빈",
  "YUNHWAN LEE": "이윤환",
  "DONGJIN LEE": "이동진",
  "SEOKJUN HONG": "홍석준",
  "Finley Paul WELCH": "웰치",
  "FINLEY PAUL WELCH": "웰치",
  "Rafael BANDEIRA": "반데이라",
  "RAFAEL BANDEIRA": "반데이라",
  "RAFAEL ALEXANDRE BANDEIRA FONSECA": "반데이라",
  "Sangmin LEE": "이상민",
  "SANGMIN LEE": "이상민",
  "Minho YOON": "윤민호",
  "MINHO YOON": "윤민호",
  "Juyeong JO": "조주영",
  "JUYEONG JO": "조주영",
  "Sukyoung YUN": "윤석영",
  "SUKYOUNG YUN": "윤석영",
  "YOUNGBEEN YANG": "양영빈",
  "Youngbeen YANG": "양영빈",
  "Seok jun HONG": "홍석준",
  "SEOK JUN HONG": "홍석준",
  "Seokjun HONG": "홍석준",
  "SEOKJUN HONG": "홍석준"
};

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

async function postKLeague(path, data) {
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
    throw new Error(`K League request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html",
      "User-Agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    throw new Error(`HTML request failed: ${response.status}`);
  }

  return response.text();
}

function statValue(value) {
  if (typeof value === "number") return value;
  if (!value) return undefined;
  const numeric = Number(String(value).replace("%", ""));
  return Number.isFinite(numeric) ? numeric : undefined;
}

function findStat(items, names) {
  const target = items.find((item) => names.some((name) => item.name?.toLowerCase().includes(name)));
  return {
    home: statValue(target?.home),
    away: statValue(target?.away)
  };
}

function stripTags(value = "") {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanPlayerName(value = "") {
  const withoutSub = value.replace(/<span[\s\S]*?<\/span>/gi, "");
  const cleaned = stripTags(withoutSub)
    .replace(/\([^)]*\)/g, "")
    .replace(/[☆★↑↓]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return cheongjuPlayerKo[cleaned] || cheongjuPlayerKo[cleaned.toUpperCase()] || cleaned;
}

function hasKorean(value = "") {
  return /[가-힣]/.test(value);
}

function isUsableKoreanName(value = "") {
  const name = String(value || "").trim();
  return hasKorean(name) && !/[A-Za-z]/.test(name) && name.length <= 20;
}

async function fetchKLeaguePlayerName({ year, meetSeq, gameId, teamId, playerId }) {
  if (!year || !meetSeq || !gameId || !teamId || !playerId) return "";

  const data = await postKLeague("/api/ddf/match/getMatchRecordPlayerDetail.do", {
    MEET_YEAR: year,
    MEET_SEQ: meetSeq,
    GAME_ID: gameId,
    TEAM_ID: teamId,
    PLAYER_ID: playerId
  }).catch(() => null);
  const candidates = [
    data?.data?.playerDetail?.playerName,
    data?.data?.playerDetail?.player_NAME,
    data?.data?.playerDetail?.name,
    data?.data?.timeEvent?.find((item) => isUsableKoreanName(item?.player_NAME || ""))?.player_NAME,
    data?.data?.timeEvent?.find((item) => isUsableKoreanName(item?.playerName || ""))?.playerName
  ];

  return candidates.find((name) => isUsableKoreanName(name || "")) || "";
}

async function buildTimelinePlayerNameMap(rows, playerNameMap, context) {
  const missing = new Map();

  rows.forEach((item) => {
    [
      { playerId: item.playerId, teamId: item.teamId },
      { playerId: item.playerId2, teamId: item.teamId }
    ].forEach(({ playerId, teamId }) => {
      if (playerId && teamId && !isUsableKoreanName(playerNameMap[playerId] || "")) {
        missing.set(`${teamId}:${playerId}`, { teamId, playerId });
      }
    });
  });

  const resolved = await Promise.all(
    [...missing.values()].map(async ({ teamId, playerId }) => {
      const name = await fetchKLeaguePlayerName({ ...context, teamId, playerId });
      return [playerId, name];
    })
  );

  return Object.fromEntries(resolved.filter(([, name]) => isUsableKoreanName(name || "")));
}

function extractPlayerRows(tableHtml = "") {
  return [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((row) => {
      const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => cell[1]);
      const idMatch = row[0].match(/playerDetailPop\('[^']+',\s*'([^']+)'\)/) || row[0].match(/player_(\d+)/);
      return {
        id: idMatch?.[1] || "",
        name: cells.length >= 3 ? cleanPlayerName(cells[2]) : ""
      };
    })
    .filter((player) => player.name)
    .filter((player) => player.name.toLowerCase() !== "manager");
}

function extractRows(tableHtml = "") {
  return extractPlayerRows(tableHtml).map((player) => player.name);
}

function extractTeamPlayerIds(html = "", teamId = "") {
  if (!teamId) return [];

  return [...html.matchAll(/playerDetailPop\('([^']+)',\s*'([^']+)'\)/g)]
    .filter((match) => match[1] === teamId)
    .map((match) => match[2]);
}

function buildPlayerNameMap(entryHtml, homeTeamId, awayTeamId, homeLineup, awayLineup, homeSubstitutes, awaySubstitutes) {
  const map = {};
  const assign = (ids, names) => {
    ids.slice(0, names.length).forEach((id, index) => {
      if (id && names[index]) {
        map[id] = names[index];
      }
    });
  };
  const homeIds = extractTeamPlayerIds(entryHtml, homeTeamId);
  const awayIds = extractTeamPlayerIds(entryHtml, awayTeamId);

  assign(homeIds, [...homeLineup, ...homeSubstitutes]);
  assign(awayIds, [...awayLineup, ...awaySubstitutes]);

  return map;
}

function extractTablesByTitle(html, title) {
  const regex = new RegExp(`<p>${title}</p>\\s*<table[\\s\\S]*?<\\/table>`, "gi");
  return [...html.matchAll(regex)].map((match) => match[0]);
}

function parseKLeagueLineups(html, homeTeamId = "", awayTeamId = "") {
  const entryStart = html.indexOf("<h3 class=\"title-box\">Entry</h3>");
  const entryHtml = entryStart >= 0 ? html.slice(entryStart) : html;
  const startingTables = extractTablesByTitle(entryHtml, "STARTING LINEUP");
  const benchTables = extractTablesByTitle(entryHtml, "BENCH");
  const homeLineup = extractRows(startingTables[0] || "");
  const awayLineup = extractRows(startingTables[1] || "");
  const homeSubstitutes = extractRows(benchTables[0] || "");
  const awaySubstitutes = extractRows(benchTables[1] || "");
  const tablePlayerNameMap = Object.fromEntries(
    [...startingTables, ...benchTables]
      .flatMap((table) => extractPlayerRows(table))
      .filter((player) => player.id)
      .map((player) => [player.id, player.name])
  );

  return {
    homeLineup,
    awayLineup,
    homeSubstitutes,
    awaySubstitutes,
    playerNameMap: {
      ...tablePlayerNameMap,
      ...buildPlayerNameMap(entryHtml, homeTeamId, awayTeamId, homeLineup, awayLineup, homeSubstitutes, awaySubstitutes)
    }
  };
}

function timelineRows(matchInfo) {
  return [
    ...(matchInfo?.data?.firstHalf || []),
    ...(matchInfo?.data?.secondHalf || []),
    ...(matchInfo?.data?.EfirstHalf || []),
    ...(matchInfo?.data?.EsecondHalf || [])
  ];
}

async function parseKLeagueEvents(matchInfo, playerNameMap = {}, context = {}) {
  const rows = timelineRows(matchInfo);
  const timelinePlayerNameMap = await buildTimelinePlayerNameMap(rows, playerNameMap, context);
  const mergedPlayerNameMap = { ...playerNameMap, ...timelinePlayerNameMap };
  const getName = (item, fallback, secondary = false) => {
    const playerId = secondary ? item.playerId2 : item.playerId;
    const playerName = secondary ? item.playerName2 : item.playerName;
    return mergedPlayerNameMap[playerId] || cleanPlayerName(playerName || fallback);
  };
  const withTime = (item, fallback) => `${getName(item, fallback)}${item.timeMin ? ` ${item.timeMin}'` : ""}`;
  const homeTeamId = context.homeTeamId || "";
  const awayTeamId = context.awayTeamId || "";
  const goalRows = rows.filter((item) => String(item.eventName || "").includes("득점") || String(item.eventName || "").includes("자책"));
  const assistRows = rows.filter((item) => item.playerName2 && String(item.eventName || "").includes("득점"));
  const yellowRows = rows.filter((item) => String(item.eventName || "").includes("경고"));
  const redRows = rows.filter((item) => String(item.eventName || "").includes("퇴장"));
  const teamFilter = (teamId) => (item) => !teamId || item.teamId === teamId;

  return {
    scorers: goalRows.map((item) => withTime(item, "득점")),
    assists: assistRows.map((item) => getName(item, "도움", true)).filter(Boolean),
    yellowCards: yellowRows.map((item) => withTime(item, "경고")),
    redCards: redRows.map((item) => withTime(item, "퇴장")),
    homeScorers: goalRows.filter(teamFilter(homeTeamId)).map((item) => withTime(item, "득점")),
    awayScorers: goalRows.filter(teamFilter(awayTeamId)).map((item) => withTime(item, "득점")),
    homeAssists: assistRows.filter(teamFilter(homeTeamId)).map((item) => getName(item, "도움", true)).filter(Boolean),
    awayAssists: assistRows.filter(teamFilter(awayTeamId)).map((item) => getName(item, "도움", true)).filter(Boolean),
    homeCards: [
      ...yellowRows.filter(teamFilter(homeTeamId)).map((item) => `경고 ${withTime(item, "경고")}`),
      ...redRows.filter(teamFilter(homeTeamId)).map((item) => `퇴장 ${withTime(item, "퇴장")}`)
    ],
    awayCards: [
      ...yellowRows.filter(teamFilter(awayTeamId)).map((item) => `경고 ${withTime(item, "경고")}`),
      ...redRows.filter(teamFilter(awayTeamId)).map((item) => `퇴장 ${withTime(item, "퇴장")}`)
    ]
  };
}

async function fetchKLeagueDetails(query) {
  const year = String(query.year || "");
  const meetSeq = String(query.meetSeq || "");
  const gameId = String(query.gameId || "");
  const leagueId = String(query.leagueId || "2");
  const homeTeamId = String(query.homeTeamId || "");
  const awayTeamId = String(query.awayTeamId || "");
  const roundId = String(query.roundId || "");

  if (!year || !meetSeq || !gameId) return null;

  const matchUrl = `${KLEAGUE_ORIGIN}/match.do?year=${encodeURIComponent(year)}&leagueId=${encodeURIComponent(leagueId)}&gameId=${encodeURIComponent(gameId)}&meetSeq=${encodeURIComponent(meetSeq)}&startTabNum=2`;
  const [html, matchInfo, matchRecord] = await Promise.all([
    fetchText(matchUrl).catch(() => ""),
    postKLeague("/api/ddf/match/matchInfo.do", { year, meetSeq, gameId }).catch(() => null),
    postKLeague("/api/ddf/match/matchRecord.do", { year, meetSeq, gameId }).catch(() => null)
  ]);
  const lineups = parseKLeagueLineups(html, homeTeamId, awayTeamId);
  const { playerNameMap, ...lineupNames } = lineups;
  const events = await parseKLeagueEvents(matchInfo, playerNameMap, { year, meetSeq, gameId, homeTeamId, awayTeamId });
  const homeRecord = matchRecord?.data?.home || {};
  const awayRecord = matchRecord?.data?.away || {};

  return {
    ...lineupNames,
    startingLineup: [...lineupNames.homeLineup, ...lineupNames.awayLineup],
    substitutes: [...lineupNames.homeSubstitutes, ...lineupNames.awaySubstitutes],
    ...events,
    stats: {
      shots: homeRecord.attempts,
      shotsAgainst: awayRecord.attempts,
      possession: homeRecord.possession,
      corners: homeRecord.corners,
      fouls: homeRecord.fouls
    },
    kLeague: { year, leagueId, meetSeq, gameId, homeTeamId, awayTeamId, roundId }
  };
}

async function fetchSofaDetails(eventId) {
  const [lineups, incidents, statistics] = await Promise.all([
    fetchJson(`${SOFASCORE_API}/event/${eventId}/lineups`).catch(() => null),
    fetchJson(`${SOFASCORE_API}/event/${eventId}/incidents`).catch(() => null),
    fetchJson(`${SOFASCORE_API}/event/${eventId}/statistics`).catch(() => null)
  ]);
  const incidentRows = incidents?.incidents || [];
  const goals = incidentRows.filter((item) => item.incidentType === "goal");
  const cards = incidentRows.filter((item) => item.incidentType === "card");
  const allStats = statistics?.statistics?.flatMap((stat) => stat.groups?.flatMap((group) => group.statisticsItems || []) || []) || [];
  const shots = findStat(allStats, ["total shots", "shots"]);
  const possession = findStat(allStats, ["ball possession", "possession"]);
  const corners = findStat(allStats, ["corner"]);
  const fouls = findStat(allStats, ["foul"]);
  const homeLineup = (lineups?.home?.players || []).filter((item) => !item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const awayLineup = (lineups?.away?.players || []).filter((item) => !item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const homeSubstitutes = (lineups?.home?.players || []).filter((item) => item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const awaySubstitutes = (lineups?.away?.players || []).filter((item) => item.substitute).map((item) => item.player?.name || "").filter(Boolean);

  return {
    homeLineup,
    awayLineup,
    homeSubstitutes,
    awaySubstitutes,
    startingLineup: [...homeLineup, ...awayLineup],
    substitutes: [...homeSubstitutes, ...awaySubstitutes],
    scorers: goals.map((item) => `${item.player?.name || "득점"}${item.time ? ` ${item.time}'` : ""}`),
    assists: goals.map((item) => item.assist1?.name || "").filter(Boolean),
    yellowCards: cards
      .filter((item) => item.incidentClass === "yellow")
      .map((item) => `${item.player?.name || "경고"}${item.time ? ` ${item.time}'` : ""}`),
    redCards: cards
      .filter((item) => item.incidentClass === "red")
      .map((item) => `${item.player?.name || "퇴장"}${item.time ? ` ${item.time}'` : ""}`),
    homeScorers: [],
    awayScorers: [],
    homeAssists: [],
    awayAssists: [],
    homeCards: [],
    awayCards: [],
    stats: {
      shots: shots.home,
      shotsAgainst: shots.away,
      possession: possession.home,
      corners: corners.home,
      fouls: fouls.home
    }
  };
}

export default async function handler(request, response) {
  const eventId = String(request.query.eventId || "");

  try {
    const kLeagueDetails = await fetchKLeagueDetails(request.query).catch(() => null);
    const details = kLeagueDetails || (eventId ? await fetchSofaDetails(eventId) : null);

    if (!details) {
      response.status(400).json({ error: "eventId or K League match params are required" });
      return;
    }

    response.setHeader("Cache-Control", "no-store");
    response.status(200).json(details);
  } catch (error) {
    response.status(500).json({ error: error.message || "Failed to fetch match detail" });
  }
}
