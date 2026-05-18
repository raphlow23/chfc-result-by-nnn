import { archiveData } from "../data/seasons";
import type { ArchiveData, Match, Player, RankPoint, Standing } from "../types";

const SOFASCORE_TOURNAMENT_ID = 777;
const SOFASCORE_API = "https://api.sofascore.com/api/v1";

const teamNameKo: Record<string, string> = {
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
  "Cheonan": "천안 시티",
  "Gimhae FC": "김해 FC",
  "Gimhae": "김해 FC",
  "Gimhae City": "김해 FC",
  "Gimhae City FC": "김해 FC",
  "Chungnam Asan FC": "충남아산 FC",
  "Chungnam Asan": "충남아산 FC",
  "Asan Mugunghwa": "충남아산 FC",
  "Paju Citizen FC": "파주 프런티어",
  "Paju Citizen": "파주 프런티어",
  "Paju FC": "파주 프런티어",
  "Paju": "파주 프런티어",
  "Gimpo FC": "김포 FC",
  "Gimpo Citizen": "김포 FC",
  "Gimpo": "김포 FC",
  "Jeonnam Dragons": "전남 드래곤즈",
  "Jeonnam Dragons FC": "전남 드래곤즈",
  "Jeonnam": "전남 드래곤즈",
  "Hwaseong FC": "화성 FC",
  "Hwaseong": "화성 FC",
  "Hwaseong City": "화성 FC",
  "Seoul E-Land FC": "서울 이랜드",
  "Seoul E-Land": "서울 이랜드",
  "Seoul E Land FC": "서울 이랜드",
  "Seoul E Land": "서울 이랜드",
  "Daegu FC": "대구 FC",
  "Daegu": "대구 FC",
  "Yongin City FC": "용인 FC",
  "Yongin City": "용인 FC",
  "Yongin FC": "용인 FC",
  "Yongin": "용인 FC",
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
  "Sangju Sangmu": "김천 상무",
  "Gimcheon Sangmu FC": "김천 상무"
};

const competitionKo: Record<string, string> = {
  "K-League 2": "K리그2",
  "K League 2": "K리그2",
  "K-League 2, South Korea": "K리그2"
};

interface SofaSeason {
  id: number;
  name: string;
  year: string;
}

interface SofaTeam {
  id: number;
  name: string;
  shortName?: string;
}

interface SofaEvent {
  id: number;
  startTimestamp: number;
  roundInfo?: {
    round?: number;
  };
  homeTeam: SofaTeam;
  awayTeam: SofaTeam;
  homeScore?: {
    current?: number;
  };
  awayScore?: {
    current?: number;
  };
  status?: {
    type?: string;
  };
  tournament?: {
    name?: string;
  };
  venue?: {
    stadium?: {
      name?: string;
    };
    name?: string;
  };
}

interface SofaIncident {
  incidentType?: string;
  incidentClass?: string;
  time?: number;
  player?: {
    name?: string;
  };
  assist1?: {
    name?: string;
  };
  homeScore?: number;
  awayScore?: number;
}

interface SofaLineupPlayer {
  player?: {
    name?: string;
  };
  substitute?: boolean;
}

interface SofaLineup {
  home?: {
    players?: SofaLineupPlayer[];
  };
  away?: {
    players?: SofaLineupPlayer[];
  };
}

interface SofaStatisticItem {
  name?: string;
  home?: string | number;
  away?: string | number;
}

interface SofaStatisticGroup {
  groups?: {
    statisticsItems?: SofaStatisticItem[];
  }[];
}

interface SofaStandingRow {
  team: SofaTeam;
  position: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  scoresFor: number;
  scoresAgainst: number;
  points: number;
}

interface SofaPlayerItem {
  player?: {
    id: number;
    name: string;
    shortName?: string;
    position?: string;
    jerseyNumber?: string;
    country?: {
      name?: string;
    };
    dateOfBirthTimestamp?: number;
    height?: number;
  };
}

interface TableRow {
  teamId: number;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`데이터 요청 실패: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function isCheongjuTeam(team: SofaTeam) {
  const name = `${team.name} ${team.shortName || ""}`.toLowerCase();
  return name.includes("cheongju") || name.includes("청주") || name.includes("chungbuk");
}

function getCompetitionType(name = ""): Match["competitionType"] {
  const normalized = name.toLowerCase();

  if (normalized.includes("cup") || name.includes("컵")) return "fa";
  if (normalized.includes("friendly") || name.includes("친선")) return "friendly";
  return "league";
}

function hasKorean(value = "") {
  return /[?-?]/.test(value);
}

function toKoreanTeamName(team: SofaTeam) {
  const rawName = team.name || team.shortName || "";
  const upperName = rawName.toUpperCase();
  const compactName = rawName.replace(/[-\s.]/g, "").toLowerCase();
  const direct = teamNameKo[team.name] || teamNameKo[team.shortName || ""];

  if (direct) return direct;
  if (upperName.includes("CHUNGBUK") || upperName.includes("CHEONGJU")) return "충북청주 FC";
  if (upperName.includes("GIMHAE")) return "김해 FC";
  if (upperName.includes("CHEONAN")) return "천안 시티";
  if (upperName.includes("CHUNGNAM") || upperName.includes("ASAN")) return "충남아산 FC";
  if (upperName.includes("ANSAN")) return "안산 그리너스";
  if (upperName.includes("GIMPO")) return "김포 FC";
  if (upperName.includes("JEONNAM")) return "전남 드래곤즈";
  if (upperName.includes("HWASEONG")) return "화성 FC";
  if (upperName.includes("SEOUL E-LAND")) return "서울 이랜드";
  if (upperName.includes("BUCHEON")) return "부천 FC";
  if (upperName.includes("BUSAN")) return "부산 아이파크";
  if (upperName.includes("SEONGNAM")) return "성남 FC";
  if (upperName.includes("GYEONGNAM")) return "경남 FC";
  if (upperName.includes("SUWON FC")) return "수원 FC";
  if (upperName.includes("SUWON")) return "수원 삼성";
  if (upperName.includes("YONGIN")) return "용인 FC";
  if (upperName.includes("DAEGU")) return "대구 FC";
  if (compactName.includes("gimhae")) return "김해 FC";
  if (compactName.includes("gimpo")) return "김포 FC";
  if (compactName.includes("cheonan")) return "천안 시티";
  if (compactName.includes("asan")) return "충남아산 FC";
  if (compactName.includes("paju")) return "파주 프런티어";
  if (compactName.includes("hwaseong")) return "화성 FC";
  if (compactName.includes("seouleland")) return "서울 이랜드";
  if (compactName.includes("yongin")) return "용인 FC";
  if (compactName.includes("daegu")) return "대구 FC";
  if (compactName.includes("bucheon")) return "부천 FC";
  if (compactName.includes("jeonnam")) return "전남 드래곤즈";
  if (compactName.includes("ansan")) return "안산 그리너스";
  if (compactName.includes("busan")) return "부산 아이파크";
  if (compactName.includes("seongnam")) return "성남 FC";
  if (compactName.includes("gyeongnam")) return "경남 FC";
  if (compactName.includes("suwonfc")) return "수원 FC";
  if (compactName.includes("suwonsamsung")) return "수원 삼성";
  if (compactName.includes("cheongju") || compactName.includes("chungbuk")) return "충북청주 FC";

  return rawName;
}

function toKoreanCompetition(name = "K리그2") {
  return competitionKo[name] || name;
}

function getTeamLogoById(teamId: number) {
  return `https://img.sofascore.com/api/v1/team/${teamId}/image`;
}

function toPosition(position = ""): Player["position"] {
  const normalized = position.toUpperCase();

  if (normalized.includes("G")) return "GK";
  if (normalized.includes("D")) return "DF";
  if (normalized.includes("M")) return "MF";
  if (normalized.includes("F")) return "FW";
  return "MF";
}

function toDate(timestamp?: number) {
  if (!timestamp) return "";
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

async function getSeasonId(season: string) {
  const data = await fetchJson<{ seasons: SofaSeason[] }>(
    `${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/seasons`
  );
  const found = data.seasons.find((item) => item.year === season || item.name.includes(season));

  if (!found) {
    throw new Error(`${season} 시즌 ID를 찾을 수 없습니다.`);
  }

  return found.id;
}

async function getEvents(seasonId: number) {
  const events: SofaEvent[] = [];
  const fetchPages = async (direction: "last" | "next") => {
    for (let page = 0; page < 12; page += 1) {
      const data = await fetchJson<{ events?: SofaEvent[]; hasNextPage?: boolean }>(
        `${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/season/${seasonId}/events/${direction}/${page}`
      );
      events.push(...(data.events || []));

      if (!data.hasNextPage) break;
    }
  };

  await fetchPages("last");
  await fetchPages("next");

  return [...new Map(events.map((event) => [event.id, event])).values()].sort((a, b) => a.startTimestamp - b.startTimestamp);
}

async function getStanding(seasonId: number, season: string): Promise<Standing | null> {
  const data = await fetchJson<{ standings?: { rows?: SofaStandingRow[] }[] }>(
    `${SOFASCORE_API}/unique-tournament/${SOFASCORE_TOURNAMENT_ID}/season/${seasonId}/standings/total`
  );
  const rows = data.standings?.flatMap((standing) => standing.rows || []) || [];
  const row = rows.find((item) => isCheongjuTeam(item.team));

  if (!row) return null;

  return {
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
  };
}

async function getPlayers(teamId: number, season: string): Promise<Player[]> {
  const data = await fetchJson<{ players?: SofaPlayerItem[] }>(`${SOFASCORE_API}/team/${teamId}/players`);

  return (data.players || [])
    .map((item) => item.player)
    .filter(Boolean)
    .map((player) => ({
      id: `${season}-p-${player!.id}`,
      seasonId: season,
      number: player!.jerseyNumber || "",
      name: player!.name || player!.shortName || "",
      position: toPosition(player!.position),
      nationality: player!.country?.name || "",
      birthDate: toDate(player!.dateOfBirthTimestamp),
      height: player!.height ? `${player!.height}cm` : "",
      appearances: 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      yellowCards: 0,
      redCards: 0,
      seasonRecords: [{ season, appearances: 0, goals: 0, assists: 0 }],
      previousClubs: [],
      nextClubs: []
    }));
}

function ensureRow(table: Map<number, TableRow>, team: SofaTeam) {
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

function applyEvent(table: Map<number, TableRow>, event: SofaEvent) {
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

function getRank(table: Map<number, TableRow>, teamId: number) {
  const sortedRows = [...table.values()].sort((a, b) => {
    const aDiff = a.goalsFor - a.goalsAgainst;
    const bDiff = b.goalsFor - b.goalsAgainst;

    return b.points - a.points || bDiff - aDiff || b.goalsFor - a.goalsFor || a.teamName.localeCompare(b.teamName);
  });

  return sortedRows.findIndex((row) => row.teamId === teamId) + 1;
}

function buildRankHistory(events: SofaEvent[], season: string, teamId: number): RankPoint[] {
  const table = new Map<number, TableRow>();
  const points: RankPoint[] = [];

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

function buildMatches(events: SofaEvent[], season: string): Match[] {
  return events
    .filter((event) => isCheongjuTeam(event.homeTeam) || isCheongjuTeam(event.awayTeam))
    .map((event) => {
      const finished = event.status?.type === "finished";
      const date = new Date(event.startTimestamp * 1000);
      const competition = toKoreanCompetition(event.tournament?.name || "K리그2");

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

function statValue(value: string | number | undefined) {
  if (typeof value === "number") return value;
  if (!value) return undefined;
  const numeric = Number(String(value).replace("%", ""));
  return Number.isFinite(numeric) ? numeric : undefined;
}

function findStat(items: SofaStatisticItem[], names: string[]) {
  const target = items.find((item) => names.some((name) => item.name?.toLowerCase().includes(name)));
  return {
    home: statValue(target?.home),
    away: statValue(target?.away)
  };
}

async function resolveKLeagueMatch(match: Match): Promise<Match["kLeague"] | undefined> {
  if (match.kLeague || match.seasonId !== "2026") {
    return match.kLeague;
  }

  const data = await fetch(`/api/chfc-data?season=${encodeURIComponent(match.seasonId)}&_=${Date.now()}`)
    .then((response) => {
      if (!response.ok) throw new Error("K리그 경기 목록 없음");
      return response.json() as Promise<ArchiveData>;
    })
    .catch(() => null);
  const candidates = data?.matches || [];
  const found = candidates.find((candidate) => {
    const sameDate = candidate.date === match.date;
    const sameRound = candidate.round && match.round && candidate.round === match.round;
    const sameScore = candidate.homeScore === match.homeScore && candidate.awayScore === match.awayScore;
    return Boolean(candidate.kLeague && sameDate && (sameRound || sameScore));
  });

  return found?.kLeague;
}

export async function fetchMatchDetails(match: Match): Promise<Match> {
  const eventId = match.sourceEventId || match.id.match(/(\d+)$/)?.[1];
  const resolvedKLeague = match.kLeague || await resolveKLeagueMatch(match);
  const kLeagueParams = resolvedKLeague
    ? new URLSearchParams({
        year: resolvedKLeague.year,
        leagueId: resolvedKLeague.leagueId,
        meetSeq: resolvedKLeague.meetSeq,
        gameId: resolvedKLeague.gameId,
        homeTeamId: resolvedKLeague.homeTeamId,
        awayTeamId: resolvedKLeague.awayTeamId,
        roundId: resolvedKLeague.roundId
      })
    : null;

  if (!eventId && !kLeagueParams) {
    return match;
  }

  const detailUrl = kLeagueParams
    ? `/api/match-detail?${kLeagueParams.toString()}&_=${Date.now()}`
    : `/api/match-detail?eventId=${encodeURIComponent(eventId || "")}&_=${Date.now()}`;

  const apiDetails = await fetch(detailUrl)
    .then((response) => {
      if (!response.ok) throw new Error("경기 상세 API 없음");
      return response.json() as Promise<Partial<Match>>;
    })
    .catch(() => null);

  if (apiDetails) {
    return {
      ...match,
      ...apiDetails
    };
  }

  if (!eventId) {
    return match;
  }

  const [lineups, incidents, statistics] = await Promise.all([
    fetchJson<SofaLineup>(`${SOFASCORE_API}/event/${eventId}/lineups`).catch(() => null),
    fetchJson<{ incidents?: SofaIncident[] }>(`${SOFASCORE_API}/event/${eventId}/incidents`).catch(() => null),
    fetchJson<{ statistics?: SofaStatisticGroup[] }>(`${SOFASCORE_API}/event/${eventId}/statistics`).catch(() => null)
  ]);
  const incidentRows = incidents?.incidents || [];
  const goals = incidentRows.filter((item) => item.incidentType === "goal");
  const cards = incidentRows.filter((item) => item.incidentType === "card");
  const allStats = statistics?.statistics?.flatMap((stat) => stat.groups?.flatMap((group) => group.statisticsItems || []) || []) || [];
  const shots = findStat(allStats, ["total shots", "shots"]);
  const possession = findStat(allStats, ["ball possession", "possession"]);
  const corners = findStat(allStats, ["corner"]);
  const fouls = findStat(allStats, ["foul"]);
  const homeIsCheongju = match.homeTeam.includes("충북청주") || match.homeTeam.toLowerCase().includes("cheongju");
  const homeLineup = (lineups?.home?.players || []).filter((item) => !item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const awayLineup = (lineups?.away?.players || []).filter((item) => !item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const homeSubstitutes = (lineups?.home?.players || []).filter((item) => item.substitute).map((item) => item.player?.name || "").filter(Boolean);
  const awaySubstitutes = (lineups?.away?.players || []).filter((item) => item.substitute).map((item) => item.player?.name || "").filter(Boolean);

  return {
    ...match,
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
    stats: {
      shots: homeIsCheongju ? shots.home : shots.away,
      shotsAgainst: homeIsCheongju ? shots.away : shots.home,
      possession: homeIsCheongju ? possession.home : possession.away,
      corners: homeIsCheongju ? corners.home : corners.away,
      fouls: homeIsCheongju ? fouls.home : fouls.away
    }
  };
}

export async function fetchPlayerDetails(player: Player): Promise<Player> {
  let playerId = player.id.match(/kleague-player-(.+)$/)?.[1] || "";
  let apiPlayer: Player | undefined;

  if (!playerId) {
    const seasonData = await fetch(`/api/chfc-data?season=${encodeURIComponent(player.seasonId)}&_=${Date.now()}`, {
      cache: "no-store"
    })
      .then((response) => {
        if (!response.ok) throw new Error("K리그 선수단 API 오류");
        return response.json() as Promise<{ players?: Player[] }>;
      })
      .catch(() => null);
    apiPlayer = (seasonData?.players || []).find((row) => normalizePlayerName(row.name) === normalizePlayerName(player.name) || getPlayerNameKey(row.name) === getPlayerNameKey(player.name));
    playerId = apiPlayer?.id?.match(/kleague-player-(.+)$/)?.[1] || "";

    if (!playerId) {
      return player;
    }
  }

  const apiDetails = await fetch(`/api/player-detail?season=${encodeURIComponent(player.seasonId)}&playerId=${encodeURIComponent(playerId)}&_=${Date.now()}`, {
    cache: "no-store"
  })
    .then((response) => {
      if (!response.ok) throw new Error("?좎닔 ?곸꽭 API ?놁쓬");
      return response.json() as Promise<Partial<Player>>;
    })
    .catch(() => null);

  if (!apiDetails) {
    return apiPlayer ? { ...player, ...apiPlayer, name: player.name } : player;
  }

  return {
    ...player,
    ...apiDetails,
    name: player.name || apiDetails.name || "",
    number: apiDetails.number || player.number,
    position: apiDetails.position || player.position,
    nationality: toKoreanNationality(apiDetails.nationality || player.nationality),
    birthDate: apiDetails.birthDate || player.birthDate,
    height: apiDetails.height || player.height,
    weight: apiDetails.weight || player.weight,
    joinedYear: apiDetails.joinedYear || player.joinedYear,
    previousClubs: apiDetails.previousClubs?.length ? apiDetails.previousClubs : player.previousClubs,
    nextClubs: apiDetails.nextClubs?.length ? apiDetails.nextClubs : player.nextClubs,
    seasonRecords: apiDetails.seasonRecords?.length ? apiDetails.seasonRecords : player.seasonRecords
  };
}

export async function fetchSeasonPlayerStats(season: string, players: Player[]): Promise<Player[]> {
  const mergeFromArchive = async () => {
    const archiveData = await fetch(`/api/chfc-data?season=${encodeURIComponent(season)}&mode=full&_=${Date.now()}`, {
      cache: "no-store"
    })
      .then((response) => {
        if (!response.ok) throw new Error("player archive unavailable");
        return response.json() as Promise<Partial<ArchiveData>>;
      })
      .catch(() => null);

    const sourcePlayers = archiveData?.playerStats?.length ? archiveData.playerStats : archiveData?.players;
    const archivePlayers = Array.isArray(sourcePlayers) ? sourcePlayers : [];
    if (!archivePlayers.length) {
      throw new Error("player stats unavailable");
    }

    const playerIds = archivePlayers
      .map((player) => player.id.match(/kleague-player-(.+)$/)?.[1] || "")
      .filter(Boolean);

    const statData = playerIds.length
      ? await fetch(`/api/player-stats?season=${encodeURIComponent(season)}&playerIds=${encodeURIComponent(playerIds.join(","))}&_=${Date.now()}`, {
          cache: "no-store"
        })
          .then((response) => {
            if (!response.ok) throw new Error("player stats unavailable");
            return response.json() as Promise<{ players?: Array<Partial<Player> & { playerId?: string }> }>;
          })
          .catch(() => null)
      : null;

    const statsById = new Map((statData?.players || []).map((row) => [row.playerId || "", row]));
    const enrichedPlayers = archivePlayers.map((player) => {
      const playerId = player.id.match(/kleague-player-(.+)$/)?.[1] || "";
      const stats = statsById.get(playerId);
      if (!stats) return player;

      const appearances = Math.max(Number(player.appearances || 0), Number(stats.appearances || 0));
      const goals = keepUsefulNumber(stats.goals, player.goals);
      const assists = keepUsefulNumber(stats.assists, player.assists);

      return {
        ...player,
        appearances,
        goals,
        assists,
        cleanSheets: keepUsefulNumber(stats.cleanSheets, player.cleanSheets),
        yellowCards: keepUsefulNumber(stats.yellowCards, player.yellowCards),
        redCards: keepUsefulNumber(stats.redCards, player.redCards),
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

    return enrichPlayersWithDetailStats(mergePlayerStatsByName(players, enrichedPlayers, season));
  };

  const rows = players
    .map((player) => ({
      player,
      playerId: player.id.match(/kleague-player-(.+)$/)?.[1] || ""
    }))
    .filter((row) => row.playerId);

  if (!rows.length) {
    return mergeFromArchive();
  }

  const apiData = await fetch(`/api/player-stats?season=${encodeURIComponent(season)}&playerIds=${encodeURIComponent(rows.map((row) => row.playerId).join(","))}&_=${Date.now()}`, {
    cache: "no-store"
  })
    .then((response) => {
      if (!response.ok) throw new Error("?좎닔 湲곕줉 API ?놁쓬");
      return response.json() as Promise<{ players?: Array<Partial<Player> & { playerId?: string }> }>;
    })
    .catch(() => null);

  if (!apiData?.players?.length) {
    return mergeFromArchive();
  }

  const statsById = new Map((apiData?.players || []).map((row) => [row.playerId || "", row]));

  const playersWithStats = players.map((player) => {
    const playerId = player.id.match(/kleague-player-(.+)$/)?.[1] || "";
    const stats = statsById.get(playerId);
    if (!stats) return player;

    return {
      ...player,
      appearances: stats.appearances ?? player.appearances,
      goals: keepUsefulNumber(stats.goals, player.goals),
      assists: keepUsefulNumber(stats.assists, player.assists),
      cleanSheets: keepUsefulNumber(stats.cleanSheets, player.cleanSheets),
      yellowCards: keepUsefulNumber(stats.yellowCards, player.yellowCards),
      redCards: keepUsefulNumber(stats.redCards, player.redCards),
      seasonRecords: [
        {
          season: player.seasonId,
          appearances: stats.appearances ?? player.appearances,
          goals: keepUsefulNumber(stats.goals, player.goals),
          assists: keepUsefulNumber(stats.assists, player.assists)
        }
      ]
    };
  });

  return enrichPlayersWithDetailStats(playersWithStats);
}

function mergePlayerStatsByName(players: Player[], archivePlayers: Player[], season: string) {
  const archiveByName = new Map(
    archivePlayers
      .filter((player) => getPlayerNameKey(player.name))
      .map((player) => [getPlayerNameKey(player.name), player])
  );

  return players.map((player) => {
    const stats = archiveByName.get(getPlayerNameKey(player.name));
    if (!stats) return player;

    const appearances = Math.max(Number(player.appearances || 0), Number(stats.appearances || 0));
    const goals = keepUsefulNumber(stats.goals, player.goals);
    const assists = keepUsefulNumber(stats.assists, player.assists);
    const cleanSheets = keepUsefulNumber(stats.cleanSheets, player.cleanSheets);
    const yellowCards = keepUsefulNumber(stats.yellowCards, player.yellowCards);
    const redCards = keepUsefulNumber(stats.redCards, player.redCards);

    return {
      ...player,
      id: stats.id || player.id,
      number: stats.number || player.number,
      position: stats.position || player.position,
      nationality: toKoreanNationality(stats.nationality || player.nationality),
      birthDate: stats.birthDate || player.birthDate,
      height: stats.height || player.height,
      weight: stats.weight || player.weight,
      joinedYear: stats.joinedYear || player.joinedYear,
      previousClubs: stats.previousClubs?.length ? stats.previousClubs : player.previousClubs,
      nextClubs: stats.nextClubs?.length ? stats.nextClubs : player.nextClubs,
      appearances,
      goals,
      assists,
      cleanSheets,
      yellowCards,
      redCards,
      seasonRecords: stats.seasonRecords?.length
        ? stats.seasonRecords
        : [
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

async function enrichPlayersWithDetailStats(players: Player[]) {
  return mapLimit(players, 4, async (player) => {
    if (!player.id.includes("kleague-player")) return player;

    const details = await fetchPlayerDetails(player).catch(() => null);
    if (!details) return player;

    const appearances = Math.max(Number(player.appearances || 0), Number(details.appearances || 0));
    const goals = keepUsefulNumber(details.goals, player.goals);
    const assists = keepUsefulNumber(details.assists, player.assists);

    return {
      ...player,
      number: details.number || player.number,
      position: details.position || player.position,
      nationality: details.nationality || player.nationality,
      birthDate: details.birthDate || player.birthDate,
      height: details.height || player.height,
      weight: details.weight || player.weight,
      joinedYear: details.joinedYear || player.joinedYear,
      previousClubs: details.previousClubs?.length ? details.previousClubs : player.previousClubs,
      nextClubs: details.nextClubs?.length ? details.nextClubs : player.nextClubs,
      appearances,
      goals,
      assists,
      cleanSheets: keepUsefulNumber(details.cleanSheets, player.cleanSheets),
      yellowCards: keepUsefulNumber(details.yellowCards, player.yellowCards),
      redCards: keepUsefulNumber(details.redCards, player.redCards),
      seasonRecords: details.seasonRecords?.length
        ? details.seasonRecords
        : [
            {
              season: player.seasonId,
              appearances,
              goals,
              assists
            }
          ]
    };
  });
}

function replaceSeasonRows<T extends { seasonId: string }>(rows: T[], season: string, nextRows: T[]) {
  return [...rows.filter((row) => row.seasonId !== season), ...nextRows];
}

function mergeRankHistoryRows(rows: RankPoint[], season: string, nextRows: RankPoint[]) {
  const otherRows = rows.filter((row) => row.seasonId !== season);
  const merged = new Map<string, RankPoint>();

  rows
    .filter((row) => row.seasonId === season)
    .forEach((row) => merged.set(row.round || row.matchId, row));
  nextRows.forEach((row) => merged.set(row.round || row.matchId, row));

  return [...otherRows, ...merged.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function normalizePlayerName(value = "") {
  return String(value || "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, "")
    .trim()
    .toUpperCase();
}

const cheongjuPlayerNameAliases: Record<string, string> = {
  DONGWONLEE: "이동원",
  LEEDONGWON: "이동원",
  LIMJUNYOUNG: "임준영",
  JUNYOUNGLIM: "임준영"
};

function getPlayerNameKey(value = "") {
  const normalized = normalizePlayerName(value);
  return normalizePlayerName(cheongjuPlayerNameAliases[normalized] || value);
}

function toKoreanNationality(value = "") {
  const text = String(value || "").trim();
  const upper = text.toUpperCase();
  const map: Record<string, string> = {
    KOREA: "대한민국",
    "REPUBLIC OF KOREA": "대한민국",
    BRAZIL: "브라질",
    JAPAN: "일본",
    GEORGIA: "조지아",
    FRANCE: "프랑스",
    COLOMBIA: "콜롬비아",
    "NEW ZEALAND": "뉴질랜드"
  };

  return map[upper] || text;
}

function keepUsefulNumber(nextValue: number | undefined, currentValue: number | undefined) {
  const nextNumber = Number(nextValue || 0);
  const currentNumber = Number(currentValue || 0);
  return nextNumber > 0 ? nextNumber : currentNumber;
}

async function mapLimit<T, R>(items: T[], limit: number, mapper: (item: T, index: number) => Promise<R>) {
  const results: R[] = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index;
      index += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

function mergePlayersWithExistingStats(existingRows: Player[], season: string, nextRows: Player[]) {
  const existingByName = new Map(
    existingRows
      .filter((player) => player.seasonId === season)
      .map((player) => [normalizePlayerName(player.name), player])
  );

  return nextRows.map((player) => {
    const existing = existingByName.get(normalizePlayerName(player.name));
    if (!existing) return player;

    const goals = keepUsefulNumber(player.goals, existing.goals);
    const assists = keepUsefulNumber(player.assists, existing.assists);
    const appearances = Math.max(Number(player.appearances || 0), Number(existing.appearances || 0));
    const yellowCards = keepUsefulNumber(player.yellowCards, existing.yellowCards);
    const redCards = keepUsefulNumber(player.redCards, existing.redCards);

    return {
      ...existing,
      ...player,
      goals,
      assists,
      appearances,
      yellowCards,
      redCards,
      cleanSheets: keepUsefulNumber(player.cleanSheets, existing.cleanSheets),
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

function mergeSeasonRows<T extends { seasonId: string; id: string }>(rows: T[], season: string, nextRows: T[]) {
  const originalRows = rows.filter((row) => row.seasonId === season);
  const otherRows = rows.filter((row) => row.seasonId !== season);
  const merged = new Map<string, T>();

  originalRows.forEach((row) => merged.set(row.id, row));
  nextRows.forEach((row) => merged.set(row.id, row));

  return [...otherRows, ...merged.values()];
}

function getMatchKey(match: Match) {
  return [
    match.date,
    String(match.round || "").replace(/\s+/g, ""),
    String(match.homeTeam || "").replace(/\s+/g, "").toUpperCase(),
    String(match.awayTeam || "").replace(/\s+/g, "").toUpperCase()
  ].join("|");
}

function preferMatch(current: Match | undefined, next: Match) {
  if (!current) return next;
  if (current.status !== "finished" && next.status === "finished") return next;
  if (current.homeScore === null && next.homeScore !== null) return next;
  return current;
}

function mergeMatches(rows: Match[], season: string, nextRows: Match[]) {
  const originalRows = rows.filter((row) => row.seasonId === season);
  const otherRows = rows.filter((row) => row.seasonId !== season);
  const originalByKey = new Map(originalRows.map((row) => [getMatchKey(row), row]));
  const merged = new Map<string, Match>();

  originalRows.forEach((row) => merged.set(getMatchKey(row), row));
  nextRows.forEach((row) => {
    const original = originalByKey.get(getMatchKey(row));
    const nextRow = original
      ? {
          ...row,
          stadium: row.stadium || original.stadium,
          scorers: row.scorers.length ? row.scorers : original.scorers,
          assists: row.assists.length ? row.assists : original.assists,
          startingLineup: row.startingLineup.length ? row.startingLineup : original.startingLineup,
          substitutes: row.substitutes.length ? row.substitutes : original.substitutes
        }
      : row;

    const key = getMatchKey(nextRow);
    merged.set(key, preferMatch(merged.get(key), nextRow));
  });

  return [...otherRows, ...merged.values()];
}

export async function fetchAutoArchiveData(season: string, fallback: ArchiveData = archiveData): Promise<ArchiveData> {
  const apiData = await fetch(`/api/chfc-data?season=${season}&mode=fast&_=${Date.now()}`, { cache: "no-store" }).then((response) => {
    if (!response.ok) throw new Error("내부 API 없음");
    return response.json() as Promise<ArchiveData>;
  }).catch(() => null);

  if (apiData?.matches?.length || apiData?.players?.length || apiData?.standings?.length || apiData?.rankHistory?.length) {
    const apiPlayers = apiData.players || [];
    const shouldUseApiPlayers = apiPlayers.length > 0 && apiPlayers.some((player) => hasKorean(player.name));
    const mergedApiPlayers = shouldUseApiPlayers ? mergePlayersWithExistingStats(archiveData.players, season, apiPlayers) : apiPlayers;

    return {
      ...fallback,
      seasons: apiData.seasons?.length ? apiData.seasons : fallback.seasons,
      matches: apiData.matches?.length ? mergeMatches(fallback.matches, season, apiData.matches) : fallback.matches,
      players: shouldUseApiPlayers ? replaceSeasonRows(fallback.players, season, mergedApiPlayers) : fallback.players,
      squads: shouldUseApiPlayers ? { ...fallback.squads, [season]: mergedApiPlayers.map((player) => player.id) } : fallback.squads,
      standings: apiData.standings?.length ? replaceSeasonRows(fallback.standings, season, apiData.standings) : fallback.standings,
      playerStats: shouldUseApiPlayers ? replaceSeasonRows(fallback.playerStats, season, mergedApiPlayers) : fallback.playerStats,
      coaches: apiData.coaches?.length ? replaceSeasonRows(fallback.coaches, season, apiData.coaches) : fallback.coaches,
      historyEvents: apiData.historyEvents?.length ? replaceSeasonRows(fallback.historyEvents, season, apiData.historyEvents) : fallback.historyEvents,
      rankHistory: apiData.rankHistory?.length && apiData.rankHistory.length > 1 ? mergeRankHistoryRows(fallback.rankHistory, season, apiData.rankHistory) : fallback.rankHistory
    };
  }

  const seasonId = await getSeasonId(season);
  const events = await getEvents(seasonId);
  const cheongjuTeam = events.flatMap((event) => [event.homeTeam, event.awayTeam]).find(isCheongjuTeam);

  if (!cheongjuTeam) {
    throw new Error("충북청주FC 팀 정보를 찾을 수 없습니다.");
  }

  const [standing, players] = await Promise.all([
    getStanding(seasonId, season).catch(() => null),
    getPlayers(cheongjuTeam.id, season).catch(() => [])
  ]);
  const matches = buildMatches(events, season);
  const rankHistory = buildRankHistory(events, season, cheongjuTeam.id);
  const fallbackSeasonMatches = fallback.matches.filter((match) => match.seasonId === season);
  const shouldUseAutoPlayers = players.length > 0 && players.some((player) => hasKorean(player.name));
  const nextMatches = mergeMatches(fallback.matches, season, matches);

  return {
    ...fallback,
    matches: matches.length ? nextMatches : fallback.matches,
    players: shouldUseAutoPlayers ? replaceSeasonRows(fallback.players, season, players) : fallback.players,
    squads: shouldUseAutoPlayers ? { ...fallback.squads, [season]: players.map((player) => player.id) } : fallback.squads,
    standings: standing ? replaceSeasonRows(fallback.standings, season, [standing]) : fallback.standings,
    playerStats: shouldUseAutoPlayers ? replaceSeasonRows(fallback.playerStats, season, players) : fallback.playerStats,
    rankHistory: rankHistory.length > 1 ? mergeRankHistoryRows(fallback.rankHistory, season, rankHistory) : fallback.rankHistory
  };
}
