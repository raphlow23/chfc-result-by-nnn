const SOFASCORE_TOURNAMENT_ID = 777;
const SOFASCORE_API = "https://api.sofascore.com/api/v1";
const KLEAGUE_ORIGIN = "https://www.kleague.com";
const KLEAGUE_LEAGUE_ID = "2";
const KLEAGUE_LEAGUE_IDS = ["2"];
const CHEONGJU_TEAM_ID = "K37";
const archiveCache = new Map();
const ARCHIVE_CACHE_MS = 30 * 60 * 1000;

const teamNameKo = {
  "Chungbuk Cheongju FC": "충북청주 FC",
  "Cheongju FC": "충북청주 FC",
  "Suwon FC": "수원 FC",
  "Seongnam FC": "성남 FC",
  "Gyeongnam FC": "경남 FC",
  "Ansan Greeners FC": "안산 그리너스",
  "Busan I Park": "부산 아이파크",
  "Busan IPark": "부산 아이파크",
  "Suwon Samsung Bluewings": "수원 삼성",
  "Cheonan City FC": "천안 시티",
  "Cheonan City": "천안 시티",
  "Gimhae FC": "김해 FC",
  "Gimhae City FC": "김해 FC",
  "Gimhae City": "김해 FC",
  "Gimhae": "김해 FC",
  "Chungnam Asan FC": "충남아산 FC",
  "Paju Citizen FC": "파주 프런티어",
  "Paju": "파주 프런티어",
  "Gimpo FC": "김포 FC",
  "Jeonnam Dragons": "전남 드래곤즈",
  "Hwaseong FC": "화성 FC",
  "Seoul E-Land FC": "서울 이랜드",
  "Seoul E-Land": "서울 이랜드",
  "Daegu FC": "대구 FC",
  "Yongin City FC": "용인 FC",
  "Yongin FC": "용인 FC",
  "Bucheon FC 1995": "부천 FC",
  "FC Anyang": "FC 안양",
  "Gangwon FC": "강원 FC",
  "Gwangju FC": "광주 FC",
  "Daejeon Hana Citizen": "대전 하나시티즌",
  "Jeju SK FC": "제주 SK",
  "Jeonbuk Hyundai Motors": "전북 현대",
  "Pohang Steelers": "포항 스틸러스",
  "Ulsan HD": "울산 HD",
  "FC Seoul": "FC 서울",
  "Incheon United": "인천 유나이티드",
  "Gimcheon Sangmu FC": "김천 상무"
};

const competitionKo = {
  "K-League 2": "K리그2",
  "K League 2": "K리그2",
  "K-League 2, South Korea": "K리그2"
};

const kLeagueTeamKo = {
  "CHUNGBUK CHEONGJU": "충북청주 FC",
  "GIMHAE": "김해 FC",
  "ANSAN": "안산 그리너스",
  "SUWON FC": "수원 FC",
  "SUWON": "수원 삼성",
  "SEONGNAM": "성남 FC",
  "GYEONGNAM": "경남 FC",
  "CHEONAN": "천안 시티",
  "CHUNGNAM ASAN": "충남아산 FC",
  "PAJU": "파주 프런티어",
  "GIMPO": "김포 FC",
  "JEONNAM": "전남 드래곤즈",
  "HWASEONG": "화성 FC",
  "SEOUL E-LAND": "서울 이랜드",
  "DAEGU": "대구 FC",
  "YONGIN": "용인 FC",
  "BUCHEON": "부천 FC",
  "BUSAN": "부산 아이파크"
};

const kLeagueStadiumKo = {
  Cheongju: "청주종합운동장",
  "Tancheon Stadium": "탄천종합운동장",
  "Suwon Worldcup": "수원월드컵경기장",
  Paju: "파주스타디움",
  "Gimhae Stadium": "김해종합운동장",
  "Ansan Wa Stadium": "안산와스타디움",
  "Mokdong Stadium": "목동종합운동장",
  "Gwangyang Stadium": "광양축구전용구장",
  "Changwon Football Center": "창원축구센터",
  "Gimpo Salter Soccer Field": "김포솔터축구장",
  "Busan Gudeok Stadium": "부산구덕운동장",
  "Cheonan Stadium": "천안종합운동장",
  "Asan Yi Sun-sin Stadium": "이순신종합운동장",
  "Hwaseong Sports Complex": "화성종합경기타운",
  "Yongin Mireu Stadium": "용인미르스타디움",
  "DGB Daegu Bank Park": "대구iM뱅크PARK"
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

async function postKLeagueJson(path, data) {
  const response = await fetch(`${KLEAGUE_ORIGIN}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Referer: `${KLEAGUE_ORIGIN}/schedule.do?leagueId=${KLEAGUE_LEAGUE_ID}`,
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

function hasKorean(value = "") {
  return /[\uac00-\ud7a3]/.test(String(value || ""));
}

function firstText(...values) {
  return values.find((value) => typeof value === "string" && value.trim())?.trim() || "";
}

function firstNumberText(...values) {
  const found = values.find((value) => value !== undefined && value !== null && String(value).trim());
  return found === undefined || found === null ? "" : String(found).trim();
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

function toNumber(value) {
  if (value === undefined || value === null || value === "-") return 0;
  const numeric = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function isCheongjuTeam(team) {
  const name = `${team?.name || ""} ${team?.shortName || ""}`.toLowerCase();
  return name.includes("cheongju") || name.includes("청주") || name.includes("chungbuk");
}

function compactName(team) {
  return `${team?.name || ""} ${team?.shortName || ""}`.replace(/[-\s.]/g, "").toLowerCase();
}

function toKoreanTeamName(team) {
  const rawName = team?.name || team?.shortName || "";
  const direct = teamNameKo[team?.name] || teamNameKo[team?.shortName];
  const compact = compactName(team);

  if (direct) return direct;
  if (compact.includes("gimhae")) return "김해 FC";
  if (compact.includes("gimpo")) return "김포 FC";
  if (compact.includes("cheonan")) return "천안 시티";
  if (compact.includes("asan")) return "충남아산 FC";
  if (compact.includes("paju")) return "파주 프런티어";
  if (compact.includes("hwaseong")) return "화성 FC";
  if (compact.includes("seouleland")) return "서울 이랜드";
  if (compact.includes("yongin")) return "용인 FC";
  if (compact.includes("daegu")) return "대구 FC";
  if (compact.includes("bucheon")) return "부천 FC";
  if (compact.includes("jeonnam")) return "전남 드래곤즈";
  if (compact.includes("ansan")) return "안산 그리너스";
  if (compact.includes("busan")) return "부산 아이파크";
  if (compact.includes("seongnam")) return "성남 FC";
  if (compact.includes("gyeongnam")) return "경남 FC";
  if (compact.includes("suwonfc")) return "수원 FC";
  if (compact.includes("suwonsamsung")) return "수원 삼성";
  if (compact.includes("cheongju") || compact.includes("chungbuk")) return "충북청주 FC";

  return rawName;
}

function getCompetitionType(name = "") {
  const normalized = name.toLowerCase();
  if (normalized.includes("cup") || name.includes("컵")) return "fa";
  if (normalized.includes("friendly") || name.includes("친선")) return "friendly";
  return "league";
}

function getTeamLogoById(teamId) {
  return `https://img.sofascore.com/api/v1/team/${teamId}/image`;
}

function toDate(timestamp) {
  if (!timestamp) return "";
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

async function getSeasonId(season) {
  const data = await fetchJson(`${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/seasons`);
  const found = (data.seasons || []).find((item) => item.year === season || item.name.includes(season));

  if (!found) {
    throw new Error(`${season} season not found`);
  }

  return found.id;
}

async function getEvents(seasonId) {
  const events = [];
  const fetchPages = async (direction) => {
    for (let page = 0; page < 12; page += 1) {
      const data = await fetchJson(`${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/season/${seasonId}/events/${direction}/${page}`);
      events.push(...(data.events || []));
      if (!data.hasNextPage) break;
    }
  };

  await fetchPages("last");
  await fetchPages("next");

  return [...new Map(events.map((event) => [event.id, event])).values()].sort((a, b) => a.startTimestamp - b.startTimestamp);
}

function buildMatches(events, season) {
  return events
    .filter((event) => isCheongjuTeam(event.homeTeam) || isCheongjuTeam(event.awayTeam))
    .map((event) => {
      const finished = event.status?.type === "finished";
      const date = new Date(event.startTimestamp * 1000);
      const competition = competitionKo[event.tournament?.name] || event.tournament?.name || "K리그2";

      return {
        id: `${season}-auto-${event.id}`,
        sourceEventId: String(event.id),
        seasonId: season,
        date: date.toISOString().slice(0, 10),
        time: date.toISOString().slice(11, 16),
        competition,
        competitionType: getCompetitionType(competition),
        round: event.roundInfo?.round ? `${event.roundInfo.round}R` : "",
        homeTeam: toKoreanTeamName(event.homeTeam),
        awayTeam: toKoreanTeamName(event.awayTeam),
        homeLogoUrl: getTeamLogoById(event.homeTeam.id),
        awayLogoUrl: getTeamLogoById(event.awayTeam.id),
        homeScore: finished ? event.homeScore?.current ?? null : null,
        awayScore: finished ? event.awayScore?.current ?? null : null,
        stadium: event.venue?.stadium?.name || event.venue?.name || "",
        status: finished ? "finished" : "scheduled",
        scorers: [],
        assists: [],
        yellowCards: [],
        redCards: [],
        startingLineup: [],
        substitutes: [],
        stats: {},
        articleLinks: [],
        memo: "자동 업데이트 데이터"
      };
    });
}

function ensureRow(table, team) {
  const row = table.get(team.id);
  if (row) return row;

  const nextRow = {
    teamId: team.id,
    teamName: team.name,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0
  };
  table.set(team.id, nextRow);
  return nextRow;
}

function applyEvent(table, event) {
  const homeScore = event.homeScore?.current ?? 0;
  const awayScore = event.awayScore?.current ?? 0;
  const home = ensureRow(table, event.homeTeam);
  const away = ensureRow(table, event.awayTeam);

  home.played += 1;
  away.played += 1;
  home.goalsFor += homeScore;
  home.goalsAgainst += awayScore;
  away.goalsFor += awayScore;
  away.goalsAgainst += homeScore;

  if (homeScore > awayScore) {
    home.wins += 1;
    away.losses += 1;
    home.points += 3;
  } else if (homeScore < awayScore) {
    away.wins += 1;
    home.losses += 1;
    away.points += 3;
  } else {
    home.draws += 1;
    away.draws += 1;
    home.points += 1;
    away.points += 1;
  }
}

function getRank(table, teamId) {
  const sortedRows = [...table.values()].sort((a, b) => {
    const aDiff = a.goalsFor - a.goalsAgainst;
    const bDiff = b.goalsFor - b.goalsAgainst;
    return b.points - a.points || bDiff - aDiff || b.goalsFor - a.goalsFor || a.teamName.localeCompare(b.teamName);
  });
  return sortedRows.findIndex((row) => row.teamId === teamId) + 1;
}

function buildRankHistory(events, season, teamId) {
  const table = new Map();
  const points = [];

  events
    .filter((event) => event.status?.type === "finished")
    .filter((event) => typeof event.homeScore?.current === "number" && typeof event.awayScore?.current === "number")
    .forEach((event) => {
      const hasCheongju = event.homeTeam.id === teamId || event.awayTeam.id === teamId;
      applyEvent(table, event);
      if (hasCheongju) {
        const rank = getRank(table, teamId);
        if (rank > 0) {
          points.push({
            seasonId: season,
            matchId: String(event.id),
            round: event.roundInfo?.round ? `${event.roundInfo.round}R` : `${points.length + 1}`,
            date: toDate(event.startTimestamp),
            rank
          });
        }
      }
    });

  return points;
}

async function getStanding(seasonId, season) {
  const data = await fetchJson(`${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/season/${seasonId}/standings/total`);
  const rows = (data.standings || []).flatMap((standing) => standing.rows || []);
  const row = rows.find((item) => isCheongjuTeam(item.team));

  if (!row) return [];

  return [{
    seasonId: season,
    rank: `${row.position}위`,
    wins: row.wins,
    draws: row.draws,
    losses: row.losses,
    goalsFor: row.scoresFor,
    goalsAgainst: row.scoresAgainst,
    points: row.points,
    homeRecord: "-",
    awayRecord: "-",
    longestWinningRun: "-",
    longestWinlessRun: "-",
    highestScoringMatch: "-"
  }];
}

function toKLeagueTeamName(name = "") {
  const raw = String(name || "").trim();
  const upper = raw.toUpperCase();

  if (upper.includes("CHUNGBUK") || upper.includes("CHEONGJU")) return "충북청주 FC";
  if (upper.includes("GIMHAE")) return "김해 FC";
  if (upper.includes("CHEONAN")) return "천안 시티";
  if (upper.includes("CHUNGNAM") || upper.includes("ASAN")) return "충남아산 FC";
  if (upper.includes("ANSAN")) return "안산 그리너스";
  if (upper.includes("GIMPO")) return "김포 FC";
  if (upper.includes("JEONNAM")) return "전남 드래곤즈";
  if (upper.includes("HWASEONG")) return "화성 FC";
  if (upper.includes("SEOUL E-LAND")) return "서울 이랜드";
  if (upper.includes("BUCHEON")) return "부천 FC";
  if (upper.includes("BUSAN")) return "부산 아이파크";
  if (upper.includes("SEONGNAM")) return "성남 FC";
  if (upper.includes("GYEONGNAM")) return "경남 FC";
  if (upper.includes("SUWON FC")) return "수원 FC";
  if (upper.includes("SUWON")) return "수원 삼성";
  if (upper.includes("YONGIN")) return "용인 FC";
  if (upper.includes("DAEGU")) return "대구 FC";

  return kLeagueTeamKo[raw] || kLeagueTeamKo[upper] || raw;
}

function getKLeagueLogo(teamId) {
  return `${KLEAGUE_ORIGIN}/assets/images/emblem/emblem_${teamId}.png`;
}

function koDisplayTeamName(name = "") {
  const upper = String(name || "").toUpperCase();
  if (upper.includes("INCHEON")) return "인천 유나이티드";
  if (upper.includes("ANYANG")) return "FC 안양";
  if (upper.includes("JEJU")) return "제주 SK";
  if (upper.includes("DAEJEON")) return "대전 하나시티즌";
  if (upper.includes("GWANGJU")) return "광주 FC";
  if (upper.includes("GANGWON")) return "강원 FC";
  if (upper.includes("JEONBUK")) return "전북 현대";
  if (upper.includes("ULSAN")) return "울산 HD";
  if (upper.includes("POHANG")) return "포항 스틸러스";
  if (upper.includes("GIMCHEON")) return "김천 상무";
  return toKLeagueTeamName(name);
}

function koDisplayStadiumName(name = "") {
  const raw = String(name || "");
  const upper = raw.toUpperCase();
  if (upper.includes("INCHEON FOOTBALL")) return "인천축구전용경기장";
  if (upper.includes("INCHEON")) return "인천축구전용경기장";
  if (upper.includes("BUCHEON")) return "부천종합운동장";
  if (upper.includes("GWANGYANG")) return "광양축구전용구장";
  return kLeagueStadiumKo[raw] || raw;
}

function getKLeagueDate(value = "") {
  return value.replaceAll(".", "-");
}

function getKLeagueStatus(item) {
  return item.gameStatus === "FE" || item.endYn === "Y" ? "finished" : "scheduled";
}

async function getKLeagueSchedules(season) {
  const requests = KLEAGUE_LEAGUE_IDS.flatMap((leagueId) =>
    Array.from({ length: 12 }, (_, index) => ({ leagueId, month: String(index + 1).padStart(2, "0") }))
  );
  const results = await Promise.all(
    requests.map(({ leagueId, month }) =>
      postKLeagueJson("/getScheduleList.do", {
        leagueId,
        teamId: null,
        ticketStatus: null,
        year: Number(season),
        month,
        ticketYn: null
      }).catch(() => null)
    )
  );
  const schedules = results.flatMap((data) => data?.data?.scheduleList || []);

  return [...new Map(schedules.map((item) => [`${item.year}-${item.meetSeq}-${item.gameId}`, item])).values()]
    .sort((a, b) => `${a.gameDate} ${a.gameTime}`.localeCompare(`${b.gameDate} ${b.gameTime}`));
}

function buildKLeagueMatches(schedules, season) {
  const rows = schedules
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID)
    .map((item) => {
      const status = getKLeagueStatus(item);

      return {
        id: `${season}-kleague-${item.gameId}`,
        seasonId: season,
        kLeague: {
          year: String(item.year || season),
          leagueId: String(item.leagueId || KLEAGUE_LEAGUE_ID),
          meetSeq: String(item.meetSeq || ""),
          gameId: String(item.gameId || ""),
          homeTeamId: String(item.homeTeam || ""),
          awayTeamId: String(item.awayTeam || ""),
          roundId: String(item.roundId || "")
        },
        date: getKLeagueDate(item.gameDate),
        time: item.gameTime || "",
        competition: item.meetName || "K리그2",
        competitionType: "league",
        round: item.roundId ? `${item.roundId}R` : "",
        homeTeam: koDisplayTeamName(item.homeTeamName),
        awayTeam: koDisplayTeamName(item.awayTeamName),
        homeLogoUrl: getKLeagueLogo(item.homeTeam),
        awayLogoUrl: getKLeagueLogo(item.awayTeam),
        homeScore: status === "finished" ? item.homeGoal ?? null : null,
        awayScore: status === "finished" ? item.awayGoal ?? null : null,
        stadium: koDisplayStadiumName(item.fieldNameFull || item.fieldName || ""),
        status,
        scorers: [],
        assists: [],
        yellowCards: [],
        redCards: [],
        startingLineup: [],
        substitutes: [],
        stats: {},
        articleLinks: [],
        memo: "K리그 공식 데이터"
      };
    });
  const merged = new Map();

  rows.forEach((match) => {
    const key = [
      match.date,
      String(match.round || "").replace(/\s+/g, ""),
      String(match.homeTeam || "").replace(/\s+/g, "").toUpperCase(),
      String(match.awayTeam || "").replace(/\s+/g, "").toUpperCase()
    ].join("|");
    const current = merged.get(key);
    if (!current || (current.status !== "finished" && match.status === "finished") || (current.homeScore === null && match.homeScore !== null)) {
      merged.set(key, match);
    }
  });

  return [...merged.values()].sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`));
}

function extractKLeagueEntryPlayers(html = "", teamId = "") {
  if (!html || !teamId) return [];

  return [...html.matchAll(/<tr[^>]*playerDetailPop\('([^']+)'\s*,\s*'([^']+)'\)[^>]*>[\s\S]*?<\/tr>/g)]
    .filter((match) => match[1] === teamId)
    .map((match) => {
      const cells = [...match[0].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => stripHtml(cell[1]));
      return {
        playerId: match[2],
        number: cells[0] || "",
        position: cells[1] || "",
        name: cells[2] || ""
      };
    })
    .filter((player) => player.playerId && player.name && player.name.toLowerCase() !== "manager");
}

function extractKLeagueActiveRosterPlayers(html = "", teamId = "") {
  if (!html || !teamId) return [];

  const rows = [];
  const seen = new Set();
  const playerBlocks = [...html.matchAll(/playerDetailPop\('([^']+)'\s*,\s*'([^']+)'\)([\s\S]{0,1400}?)(?=playerDetailPop\('|<\/li>|<\/div>\s*<div|$)/g)];

  playerBlocks.forEach((match) => {
    if (match[1] !== teamId || seen.has(match[2])) return;

    const text = stripHtml(match[3]);
    const noMatch = text.match(/No\.?\s*([0-9]+)/i);
    const nameMatch = text.match(/(?:^|\s)([가-힣A-Za-z][가-힣A-Za-z\s.'-]*?)\s+(?:충북청주|Chungbuk Cheongju)/i);
    const name = (nameMatch?.[1] || "").replace(/^Image\s*/i, "").trim();

    if (!name || /Manager|Coach|코치|감독|피지컬|전력분석/i.test(text)) return;

    seen.add(match[2]);
    rows.push({
      playerId: match[2],
      number: noMatch?.[1] || "",
      position: "",
      name
    });
  });

  return rows;
}

async function fetchKLeaguePlayerProfile({ season, meetSeq, gameId, teamId, playerId }) {
  if (!season || !meetSeq || !gameId || !teamId || !playerId) return null;

  const data = await postKLeagueForm("/api/ddf/match/getMatchRecordPlayerDetail.do", {
    MEET_YEAR: season,
    MEET_SEQ: meetSeq,
    GAME_ID: gameId,
    TEAM_ID: teamId,
    PLAYER_ID: playerId
  }).catch(() => null);

  const detail = data?.data?.playerDetail || {};
  const timeEvent = Array.isArray(data?.data?.timeEvent) ? data.data.timeEvent : [];
  const koreanEvent = timeEvent.find((item) => hasKorean(item?.player_NAME || item?.playerName || ""));
  const rawName = firstText(
    detail.playerName,
    detail.player_NAME,
    detail.name,
    koreanEvent?.player_NAME,
    koreanEvent?.playerName
  );

  return {
    name: rawName,
    number: firstNumberText(detail.backNo, detail.back_NO, detail.backNumber, koreanEvent?.back_NO),
    position: firstText(detail.playerPosition, detail.playerPos, detail.position, detail.positionName)
  };
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
  const seasonSection = compact.match(/Season Record\s+([\s\S]*?)\s+Team Record/);
  const seasonLines = (seasonSection?.[1] || "")
    .split(/(?=\b(?:19|20)\d{2}\s+)/)
    .map((line) => line.trim())
    .filter((line) => /^(?:19|20)\d{2}\s+/.test(line));
  const seasonRecords = [];
  const clubsBefore = [];
  const clubsAfter = [];
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
    const isGoalkeeper = toPlayerPosition(positionMatch?.[1] || clubMatch?.[2] || noMatch?.[3] || "") === "GK";
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
      clubsBefore.push(team);
    } else if (Number(recordSeason) > Number(season)) {
      clubsAfter.push(team);
    }
  });

  return {
    name: noMatch?.[2]?.trim() || "",
    number: firstNumberText(noMatch?.[1], backNumberMatch?.[1]),
    position: firstText(positionMatch?.[1], noMatch?.[3], clubMatch?.[2]),
    nationality: backNumberMatch?.[2]?.trim() || "",
    birthDate: birthMatch?.[1]?.replaceAll("/", "-") || "",
    height: physicalMatch?.[1] ? `${physicalMatch[1]}cm` : "",
    weight: physicalMatch?.[2] ? `${physicalMatch[2]}kg` : "",
    joinedYear,
    currentSeasonStats,
    seasonRecords: seasonRecords.map((record) => ({
      season: record.season,
      appearances: record.appearances,
      goals: record.goals,
      assists: record.assists
    })),
    previousClubs: uniqueValues(clubsBefore),
    nextClubs: uniqueValues(clubsAfter)
  };
}

async function fetchKLeaguePlayerDetailPage(playerId, season) {
  if (!playerId) return null;
  const html = await fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/record/playerDetail.do?playerId=${encodeURIComponent(playerId)}`).catch(() => "");
  return html ? parsePlayerDetailPage(html, season) : null;
}

async function mapLimit(items, limit, mapper) {
  const results = [];
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  });

  await Promise.all(workers);
  return results;
}

async function getKLeaguePlayersFromMatches(schedules, season) {
  const cheongjuMatches = schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID)
    .sort((a, b) => `${a.gameDate} ${a.gameTime}`.localeCompare(`${b.gameDate} ${b.gameTime}`));

  const playerMap = new Map();
  const rosterHtml = await fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/player.do?leagueId=2&teamId=${CHEONGJU_TEAM_ID}&type=active`).catch(() => "");
  const activeRosterPlayers = extractKLeagueActiveRosterPlayers(rosterHtml, CHEONGJU_TEAM_ID);

  activeRosterPlayers.forEach((row) => {
    playerMap.set(row.playerId, {
      playerId: row.playerId,
      name: row.name,
      number: row.number,
      position: row.position,
      appearances: 0,
      firstContext: null,
      seenMatches: new Set()
    });
  });

  if (!cheongjuMatches.length && !playerMap.size) return [];

  const rosterSourceMatches = cheongjuMatches.length > 24
    ? [...cheongjuMatches.slice(0, 12), ...cheongjuMatches.slice(-12)]
    : cheongjuMatches;

  await mapLimit(rosterSourceMatches, 4, async (item) => {
    const leagueId = String(item.leagueId || KLEAGUE_LEAGUE_ID);
    const meetSeq = String(item.meetSeq || "");
    const gameId = String(item.gameId || "");
    if (!meetSeq || !gameId) return;

    const url = `${KLEAGUE_ORIGIN}/match.do?year=${encodeURIComponent(season)}&leagueId=${encodeURIComponent(leagueId)}&gameId=${encodeURIComponent(gameId)}&meetSeq=${encodeURIComponent(meetSeq)}&startTabNum=2`;
    const html = await fetchKLeagueHtml(url).catch(() => "");
    const rows = extractKLeagueEntryPlayers(html, CHEONGJU_TEAM_ID);

    rows.forEach((row) => {
      const existing = playerMap.get(row.playerId) || {
        playerId: row.playerId,
        name: row.name,
        number: row.number,
        position: row.position,
        appearances: 0,
        firstContext: {
          season,
          meetSeq,
          gameId,
          teamId: CHEONGJU_TEAM_ID,
          playerId: row.playerId
        },
        seenMatches: new Set()
      };

      if (!existing.firstContext) {
        existing.firstContext = {
          season,
          meetSeq,
          gameId,
          teamId: CHEONGJU_TEAM_ID,
          playerId: row.playerId
        };
      }

      if (!existing.seenMatches.has(gameId)) {
        existing.seenMatches.add(gameId);
        existing.appearances += 1;
      }

      if (!existing.number && row.number) existing.number = row.number;
      if (!existing.position && row.position) existing.position = row.position;
      if ((!hasKorean(existing.name) || existing.name.length > row.name.length) && row.name) existing.name = row.name;
      playerMap.set(row.playerId, existing);
    });
  });

  const rows = [...playerMap.values()];
  const resolvedRows = await mapLimit(rows, 5, async (row) => {
    const [profile, detailPage] = await Promise.all([
      row.firstContext ? fetchKLeaguePlayerProfile(row.firstContext) : null,
      fetchKLeaguePlayerDetailPage(row.playerId, season)
    ]);
    const profileName = profile?.name || "";
    const name = hasKorean(profileName) ? profileName : detailPage?.name || row.name;
    const number = detailPage?.number || profile?.number || row.number || "";
    const position = detailPage?.position || profile?.position || row.position || "";

    return {
      id: `${season}-kleague-player-${row.playerId}`,
      seasonId: season,
      number,
      name,
      position: toPlayerPosition(position),
      nationality: detailPage?.nationality || "",
      appearances: row.appearances || 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      yellowCards: 0,
      redCards: 0,
      seasonRecords: [
        {
          season,
          appearances: row.appearances || 0,
          goals: 0,
          assists: 0
        }
      ],
      previousClubs: detailPage?.previousClubs || [],
      nextClubs: detailPage?.nextClubs || []
    };
  });

  return resolvedRows
    .filter((player) => player.name)
    .sort((a, b) => {
      const positionOrder = { GK: 0, DF: 1, MF: 2, FW: 3, STAFF: 4 };
      const numberA = Number(a.number || 999);
      const numberB = Number(b.number || 999);
      return positionOrder[a.position] - positionOrder[b.position] || numberA - numberB || a.name.localeCompare(b.name);
    });
}

function normalizePlayerName(value = "") {
  return String(value || "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

const cheongjuPlayerNameAliases = {
  "DONGWON LEE": "이동원",
  "LEE DONGWON": "이동원",
  "LIM JUNYOUNG": "임준영",
  "JUNYOUNG LIM": "임준영",
  "KIM YUNHWAN": "김윤환",
  "YUNHWAN KIM": "김윤환"
};

const cheongjuKnownPlayerNames = new Set([
  "노동건", "조성훈", "조성빈", "조윤성", "박건우", "조주영", "윤석영", "강의빈", "이강한", "이창훈",
  "김선민", "허승찬", "이동원", "민지훈", "정진우", "주나무", "이라클리", "엔조", "가르시아",
  "이종언", "서재원", "송창석", "양영빈", "이윤환", "이동진", "홍석준", "웰치", "반데이라",
  "김윤환", "임준영", "김병석", "김연준", "김영진", "루이 퀸타", "박준상", "셀소", "송선호",
  "이종현", "조르지 필립", "최상현", "칸디도"
].map(playerNameKey));

function playerNameKey(value = "") {
  const normalized = normalizePlayerName(value);
  return normalizePlayerName(cheongjuPlayerNameAliases[normalized] || value);
}

function parseKLeaguePlayerRankPage(html = "", season = "") {
  const tableRows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((row) => [...row[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map((cell) => stripHtml(cell[1])))
    .filter((cells) => cells.length >= 6);
  const tableParsedRows = [];

  tableRows.forEach((cells) => {
    const clubIndex = cells.findIndex((cell) => /CHUNGBUK|CHEONGJU/i.test(cell) || cell.includes("충북청주"));
    if (clubIndex <= 0) return;

    const name = cells[clubIndex - 1] || "";
    const values = cells.slice(clubIndex + 1);
    if (!name || /PLAYER|선수/i.test(name) || values.length < 10) return;

    tableParsedRows.push({
      rank: toNumber(cells[0]),
      name,
      goals: toNumber(values[0]),
      assists: toNumber(values[1]),
      yellowCards: toNumber(values[9]),
      redCards: toNumber(values[10]),
      appearances: toNumber(values[12] ?? values[values.length - 1]),
      seasonId: season
    });
  });

  if (tableParsedRows.length) return tableParsedRows;

  const text = stripHtml(html);
  const body = text.split("Rank Player Name Club Goal Assist")[1]?.split("라이트 모드")[0] || "";
  const rows = [];
  const rowRegex = /(?:^|\s)(\d{1,3})\s+(.+?)\s+(CHUNGBUK CHEONGJU|충북청주)\s+((?:-|\d+)(?:\s+(?:-|\d+)){13,})/g;
  let match;

  while ((match = rowRegex.exec(body)) !== null) {
    const values = match[4].trim().split(/\s+/);
    rows.push({
      rank: toNumber(match[1]),
      name: match[2].trim(),
      goals: toNumber(values[0]),
      assists: toNumber(values[1]),
      yellowCards: toNumber(values[9]),
      redCards: toNumber(values[10]),
      appearances: toNumber(values[12]),
      seasonId: season
    });
  }

  return rows;
}

async function getKLeaguePlayerStats(season, leagueId = KLEAGUE_LEAGUE_ID) {
  const urls = [
    `${KLEAGUE_ORIGIN}/record/player.do?year=${encodeURIComponent(season)}&leagueId=${encodeURIComponent(leagueId)}&teamId=${CHEONGJU_TEAM_ID}`,
    `${KLEAGUE_ORIGIN}/record/player.do?leagueId=${encodeURIComponent(leagueId)}&teamId=${CHEONGJU_TEAM_ID}&year=${encodeURIComponent(season)}`,
    `${KLEAGUE_ORIGIN}/record/player.do?leagueId=${encodeURIComponent(leagueId)}&year=${encodeURIComponent(season)}`
  ];
  const merged = new Map();

  for (const url of urls) {
    const html = await fetchKLeagueHtml(url).catch(() => "");
    const rows = parseKLeaguePlayerRankPage(html, season);
    rows.forEach((row) => {
      const key = playerNameKey(row.name);
      const existing = merged.get(key) || {};
      merged.set(key, {
        ...existing,
        ...row,
        goals: Math.max(existing.goals || 0, row.goals || 0),
        assists: Math.max(existing.assists || 0, row.assists || 0),
        appearances: Math.max(existing.appearances || 0, row.appearances || 0),
        yellowCards: Math.max(existing.yellowCards || 0, row.yellowCards || 0),
        redCards: Math.max(existing.redCards || 0, row.redCards || 0)
      });
    });

    if (merged.size >= 5) break;
  }

  return [...merged.values()];
}

function mergeKLeaguePlayerStats(players, stats, season) {
  if (!stats.length) return players;

  const statsByName = new Map(stats.map((row) => [playerNameKey(row.name), row]));

  return players.map((player) => {
    const stat = statsByName.get(playerNameKey(player.name));
    if (!stat) return player;

    return {
      ...player,
      appearances: stat.appearances || player.appearances || 0,
      goals: stat.goals || 0,
      assists: stat.assists || 0,
      yellowCards: stat.yellowCards || 0,
      redCards: stat.redCards || 0,
      seasonRecords: [
        {
          season,
          appearances: stat.appearances || player.appearances || 0,
          goals: stat.goals || 0,
          assists: stat.assists || 0
        }
      ]
    };
  });
}

function parseKLeagueMatchPdfPlayerStats(html = "", season = "") {
  const text = stripHtml(html);
  const rows = [];
  const rowRegex = /(?:^|\s)(\d{1,3})\s+(GK|DF|MF|FW)\s+([가-힣A-Za-z\s.'-]+?)\(\d{2}\)[^0-9-]*((?:-|\d+(?:\.\d+)?)(?:\s+(?:-|\d+(?:\.\d+)?)){12})/g;
  let match;

  while ((match = rowRegex.exec(text)) !== null) {
    const values = match[4].trim().split(/\s+/);
    const name = match[3].trim();
    if (!name || /감독|코치/.test(name) || values.length < 9) continue;

    rows.push({
      seasonId: season,
      number: match[1],
      position: toPlayerPosition(match[2]),
      name,
      appearances: toNumber(values[4]),
      goals: toNumber(values[5]),
      assists: toNumber(values[6]),
      yellowCards: toNumber(values[7]),
      redCards: toNumber(values[8])
    });
  }

  return rows;
}

async function getLatestKLeaguePdfPlayerStats(schedules, season) {
  const finishedMatches = schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID)
    .sort((a, b) => `${b.gameDate} ${b.gameTime}`.localeCompare(`${a.gameDate} ${a.gameTime}`));

  const merged = new Map();

  for (const match of finishedMatches) {
    const html = await fetchKLeagueHtml(`${KLEAGUE_ORIGIN}/match/pdfDownload.do?gameId=${encodeURIComponent(match.gameId)}&meetSeq=${encodeURIComponent(match.meetSeq)}&year=${encodeURIComponent(season)}`).catch(() => "");
    const rows = parseKLeagueMatchPdfPlayerStats(html, season);
    const cheongjuRows = rows.filter((row) => {
      const matchingPlayer = row.number
        ? rows.find((candidate) => candidate.number === row.number && candidate.name !== row.name)
        : null;
      return !matchingPlayer || playerNameKey(row.name) !== playerNameKey(matchingPlayer.name);
    });

    cheongjuRows.forEach((row) => {
      const key = playerNameKey(row.name);
      const current = merged.get(key);
      if (!current || Number(row.appearances || 0) >= Number(current.appearances || 0)) {
        merged.set(key, row);
      }
    });
  }

  return [...merged.values()];
}

function appendKLeaguePdfOnlyPlayers(players, stats, season) {
  const playerKeys = new Set(players.map((player) => playerNameKey(player.name)));
  const nextPlayers = [...players];

  stats.forEach((row) => {
    const key = playerNameKey(row.name);
    if (!key || playerKeys.has(key) || !cheongjuKnownPlayerNames.has(key)) return;

    playerKeys.add(key);
    nextPlayers.push({
      id: `${season}-kleague-pdf-${key.toLowerCase()}`,
      seasonId: season,
      number: row.number || "",
      name: row.name,
      position: row.position || "MF",
      nationality: "대한민국",
      appearances: row.appearances || 0,
      goals: row.goals || 0,
      assists: row.assists || 0,
      cleanSheets: 0,
      yellowCards: row.yellowCards || 0,
      redCards: row.redCards || 0,
      seasonRecords: [
        {
          season,
          appearances: row.appearances || 0,
          goals: row.goals || 0,
          assists: row.assists || 0
        }
      ],
      previousClubs: [],
      nextClubs: []
    });
  });

  return nextPlayers;
}

function mergeKLeaguePdfStats(players, stats, season) {
  if (!stats.length) return players;

  const statsByName = new Map(stats.map((row) => [playerNameKey(row.name), row]));

  return players.map((player) => {
    const stat = statsByName.get(playerNameKey(player.name));
    if (!stat) return player;

    const appearances = Math.max(Number(player.appearances || 0), Number(stat.appearances || 0));
    const goals = Math.max(Number(player.goals || 0), Number(stat.goals || 0));
    const assists = Math.max(Number(player.assists || 0), Number(stat.assists || 0));

    return {
      ...player,
      number: player.number || stat.number,
      position: player.position || stat.position,
      appearances,
      goals,
      assists,
      yellowCards: Math.max(Number(player.yellowCards || 0), Number(stat.yellowCards || 0)),
      redCards: Math.max(Number(player.redCards || 0), Number(stat.redCards || 0)),
      seasonRecords: [
        {
          season,
          appearances,
          goals,
          assists
        }
      ]
    };
  });
}

function getSeasonCoaches(season) {
  const coachMap = {
    "2026": [
      { name: "마누엘 레이스", role: "감독", period: "2026" }
    ],
    "2025": [
      { name: "권오규", role: "감독", period: "2025" }
    ],
    "2024": [
      { name: "최윤겸", role: "감독", period: "2024" }
    ],
    "2023": [
      { name: "최윤겸", role: "감독", period: "2023" }
    ]
  };

  return (coachMap[season] || []).map((coach, index) => ({
    id: `${season}-coach-${index + 1}`,
    seasonId: season,
    ...coach
  }));
}

async function getKLeagueStanding(season, leagueId = KLEAGUE_LEAGUE_ID) {
  const response = await fetch(`${KLEAGUE_ORIGIN}/record/teamRank.do?leagueId=${leagueId}&year=${encodeURIComponent(season)}&stadium=&recordType=rank`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Referer: `${KLEAGUE_ORIGIN}/record/team.do`,
      "User-Agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) return [];
  const data = await response.json();
  const row = (data?.data?.teamRank || []).find((item) => item.teamId === CHEONGJU_TEAM_ID);

  if (!row) return [];

  return [{
    seasonId: season,
    rank: row.rank ? `${row.rank}위` : "-",
    wins: row.winCnt || 0,
    draws: row.tieCnt || 0,
    losses: row.lossCnt || 0,
    goalsFor: row.gainGoal || 0,
    goalsAgainst: row.lossGoal || 0,
    points: row.gainPoint || 0,
    homeRecord: "-",
    awayRecord: "-",
    longestWinningRun: "-",
    longestWinlessRun: "-",
    highestScoringMatch: "-"
  }];
}

function ensureKLeagueRow(table, item, side) {
  const teamId = side === "home" ? item.homeTeam : item.awayTeam;
  const teamName = side === "home" ? item.homeTeamName : item.awayTeamName;
  const row = table.get(teamId);

  if (row) return row;

  const nextRow = {
    teamId,
    teamName,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0
  };
  table.set(teamId, nextRow);
  return nextRow;
}

function applyKLeagueMatch(table, item) {
  const homeScore = item.homeGoal ?? 0;
  const awayScore = item.awayGoal ?? 0;
  const home = ensureKLeagueRow(table, item, "home");
  const away = ensureKLeagueRow(table, item, "away");

  home.played += 1;
  away.played += 1;
  home.goalsFor += homeScore;
  home.goalsAgainst += awayScore;
  away.goalsFor += awayScore;
  away.goalsAgainst += homeScore;

  if (homeScore > awayScore) {
    home.wins += 1;
    away.losses += 1;
    home.points += 3;
  } else if (homeScore < awayScore) {
    away.wins += 1;
    home.losses += 1;
    away.points += 3;
  } else {
    home.draws += 1;
    away.draws += 1;
    home.points += 1;
    away.points += 1;
  }
}

function getSideRecord(schedules, side) {
  const result = { wins: 0, draws: 0, losses: 0 };

  schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => side === "home" ? item.homeTeam === CHEONGJU_TEAM_ID : item.awayTeam === CHEONGJU_TEAM_ID)
    .forEach((item) => {
      const cheongjuScore = side === "home" ? item.homeGoal ?? 0 : item.awayGoal ?? 0;
      const opponentScore = side === "home" ? item.awayGoal ?? 0 : item.homeGoal ?? 0;

      if (cheongjuScore > opponentScore) result.wins += 1;
      else if (cheongjuScore < opponentScore) result.losses += 1;
      else result.draws += 1;
    });

  return `${result.wins}승 ${result.draws}무 ${result.losses}패`;
}

function getCheongjuResult(item) {
  const isHome = item.homeTeam === CHEONGJU_TEAM_ID;
  const cheongjuScore = isHome ? item.homeGoal ?? 0 : item.awayGoal ?? 0;
  const opponentScore = isHome ? item.awayGoal ?? 0 : item.homeGoal ?? 0;

  if (cheongjuScore > opponentScore) return "W";
  if (cheongjuScore < opponentScore) return "L";
  return "D";
}

function getLongestRuns(schedules) {
  let currentWins = 0;
  let maxWins = 0;
  let currentWinless = 0;
  let maxWinless = 0;

  schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID)
    .sort((a, b) => `${a.gameDate} ${a.gameTime}`.localeCompare(`${b.gameDate} ${b.gameTime}`))
    .forEach((item) => {
      const result = getCheongjuResult(item);

      if (result === "W") {
        currentWins += 1;
        currentWinless = 0;
      } else {
        currentWins = 0;
        currentWinless += 1;
      }

      maxWins = Math.max(maxWins, currentWins);
      maxWinless = Math.max(maxWinless, currentWinless);
    });

  return {
    longestWinningRun: `${maxWins}연승`,
    longestWinlessRun: `${maxWinless}경기`
  };
}

function getHighestScoringMatch(schedules) {
  const rows = schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .filter((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID)
    .map((item) => ({
      item,
      totalGoals: (item.homeGoal ?? 0) + (item.awayGoal ?? 0)
    }))
    .sort((a, b) => b.totalGoals - a.totalGoals);
  const top = rows[0];

  if (!top) return "-";

  return `${toKLeagueTeamName(top.item.homeTeamName)} ${top.item.homeGoal ?? 0}-${top.item.awayGoal ?? 0} ${toKLeagueTeamName(top.item.awayTeamName)}`;
}

function getKLeagueRank(table, teamId) {
  const rows = [...table.values()].sort((a, b) => {
    const aDiff = a.goalsFor - a.goalsAgainst;
    const bDiff = b.goalsFor - b.goalsAgainst;
    return b.points - a.points || bDiff - aDiff || b.goalsFor - a.goalsFor || a.teamName.localeCompare(b.teamName);
  });

  return rows.findIndex((row) => row.teamId === teamId) + 1;
}

function buildKLeagueRankHistory(schedules, season) {
  const table = new Map();
  const points = [];
  const finishedByRound = new Map();

  schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .sort((a, b) => {
      const roundDiff = Number(a.roundId || 0) - Number(b.roundId || 0);
      return roundDiff || `${a.gameDate} ${a.gameTime}`.localeCompare(`${b.gameDate} ${b.gameTime}`);
    })
    .forEach((item) => {
      const roundKey = String(item.roundId || "");
      const rows = finishedByRound.get(roundKey) || [];
      rows.push(item);
      finishedByRound.set(roundKey, rows);
    });

  [...finishedByRound.entries()]
    .sort(([a], [b]) => Number(a || 0) - Number(b || 0))
    .forEach(([roundKey, rows]) => {
      rows.forEach((item) => applyKLeagueMatch(table, item));

      const cheongjuMatch = rows.find((item) => item.homeTeam === CHEONGJU_TEAM_ID || item.awayTeam === CHEONGJU_TEAM_ID);
      if (cheongjuMatch) {
        const rank = getKLeagueRank(table, CHEONGJU_TEAM_ID);
        if (rank > 0) {
          points.push({
            seasonId: season,
            matchId: `${season}-kleague-${cheongjuMatch.gameId}`,
            round: roundKey ? `${roundKey}R` : `${points.length + 1}`,
            date: getKLeagueDate(cheongjuMatch.gameDate),
            rank
          });
        }
      }
    });

  return points;
}

function buildKLeagueStandingFromSchedules(schedules, season) {
  const table = new Map();

  schedules
    .filter((item) => getKLeagueStatus(item) === "finished")
    .forEach((item) => applyKLeagueMatch(table, item));

  const row = table.get(CHEONGJU_TEAM_ID);
  const rank = getKLeagueRank(table, CHEONGJU_TEAM_ID);
  const runs = getLongestRuns(schedules);

  if (!row || rank <= 0) return [];

  return [{
    seasonId: season,
    rank: `${rank}위`,
    wins: row.wins,
    draws: row.draws,
    losses: row.losses,
    goalsFor: row.goalsFor,
    goalsAgainst: row.goalsAgainst,
    points: row.points,
    homeRecord: getSideRecord(schedules, "home"),
    awayRecord: getSideRecord(schedules, "away"),
    longestWinningRun: runs.longestWinningRun,
    longestWinlessRun: runs.longestWinlessRun,
    highestScoringMatch: getHighestScoringMatch(schedules)
  }];
}

async function getKLeagueArchive(season, mode = "full") {
  const cacheKey = `v3:${mode}:${season}`;
  const cached = archiveCache.get(cacheKey);
  if (cached && Date.now() - cached.savedAt < ARCHIVE_CACHE_MS) {
    return cached.data;
  }

  const schedules = await getKLeagueSchedules(season);
  const matches = buildKLeagueMatches(schedules, season);
  const cheongjuLeagueId = matches[0]?.kLeague?.leagueId || KLEAGUE_LEAGUE_ID;
  const leagueSchedules = schedules.filter((item) => String(item.leagueId) === String(cheongjuLeagueId));
  const computedStandings = buildKLeagueStandingFromSchedules(leagueSchedules, season);
  const [standings, players, playerStats, pdfPlayerStats] = await Promise.all([
    computedStandings.length ? computedStandings : getKLeagueStanding(season, cheongjuLeagueId).catch(() => []),
    mode === "fast" ? Promise.resolve([]) : getKLeaguePlayersFromMatches(leagueSchedules, season).catch(() => []),
    mode === "fast" ? Promise.resolve([]) : getKLeaguePlayerStats(season, cheongjuLeagueId).catch(() => []),
    mode === "fast" ? Promise.resolve([]) : getLatestKLeaguePdfPlayerStats(leagueSchedules, season).catch(() => [])
  ]);
  const enrichedPlayers = mergeKLeaguePdfStats(mergeKLeaguePlayerStats(appendKLeaguePdfOnlyPlayers(players, pdfPlayerStats, season), playerStats, season), pdfPlayerStats, season);

  if (!matches.length) {
    throw new Error("K League matches not found");
  }

  const data = {
    seasons: [
      { id: "2026", label: "2026 시즌", teamName: "충북청주FC", division: "K리그2" },
      { id: "2025", label: "2025 시즌", teamName: "충북청주FC", division: "K리그2" },
      { id: "2024", label: "2024 시즌", teamName: "충북청주FC", division: "K리그2" },
      { id: "2023", label: "2023 시즌", teamName: "충북청주FC", division: "K리그2" }
    ],
    matches,
    players: enrichedPlayers,
    squads: { [season]: enrichedPlayers.map((player) => player.id) },
    standings,
    playerStats: enrichedPlayers,
    coaches: getSeasonCoaches(season),
    historyEvents: [],
    rankHistory: buildKLeagueRankHistory(leagueSchedules, season)
  };

  archiveCache.set(cacheKey, { savedAt: Date.now(), data });
  return data;
}

export default async function handler(request, response) {
  const season = String(request.query.season || "2026");
  const mode = String(request.query.mode || "full");

  try {
    const kLeagueData = await getKLeagueArchive(season, mode).catch(() => null);

    if (kLeagueData) {
      response.setHeader("Cache-Control", "no-store");
      response.status(200).json(kLeagueData);
      return;
    }

    const seasonId = await getSeasonId(season);
    const events = await getEvents(seasonId);
    const cheongjuTeam = events.flatMap((event) => [event.homeTeam, event.awayTeam]).find(isCheongjuTeam);

    if (!cheongjuTeam) {
      throw new Error("Cheongju team not found");
    }

    const [standings] = await Promise.all([
      getStanding(seasonId, season).catch(() => [])
    ]);

    response.setHeader("Cache-Control", "no-store");
    response.status(200).json({
      seasons: [
        { id: "2026", label: "2026 시즌", teamName: "충북청주FC", division: "K리그2" },
        { id: "2025", label: "2025 시즌", teamName: "충북청주FC", division: "K리그2" },
        { id: "2024", label: "2024 시즌", teamName: "충북청주FC", division: "K리그2" },
        { id: "2023", label: "2023 시즌", teamName: "충북청주FC", division: "K리그2" }
      ],
      matches: buildMatches(events, season),
      players: [],
      squads: { [season]: [] },
      standings,
      playerStats: [],
      coaches: getSeasonCoaches(season),
      historyEvents: [],
      rankHistory: buildRankHistory(events, season, cheongjuTeam.id)
    });
  } catch (error) {
    response.status(500).json({ error: error.message || "Failed to fetch data" });
  }
}
