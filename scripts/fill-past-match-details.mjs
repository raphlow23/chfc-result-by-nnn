import fs from "node:fs";
import path from "node:path";
import matchDetailHandler from "../api/match-detail.js";

const archivePath = path.resolve("src/data/pastArchive.ts");
const targetSeasons = new Set(["2023", "2024", "2025"]);

function parseExport(source, name, suffix) {
  const marker = `export const ${name} = `;
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`${name} export not found`);
  const end = source.indexOf(suffix, start);
  if (end < 0) throw new Error(`${name} export suffix not found`);
  return JSON.parse(source.slice(start + marker.length, end));
}

function hasDetail(match) {
  return Boolean(
    match.homeLineup?.length ||
      match.awayLineup?.length ||
      match.homeSubstitutes?.length ||
      match.awaySubstitutes?.length ||
      match.homeScorers?.length ||
      match.awayScorers?.length ||
      match.homeCards?.length ||
      match.awayCards?.length ||
      match.scorers?.length ||
      match.yellowCards?.length ||
      match.stats?.shots ||
      match.stats?.possession ||
      match.stats?.corners
  );
}

function usefulDetails(details) {
  if (!details || details.error) return null;
  const next = {
    homeLineup: details.homeLineup || [],
    awayLineup: details.awayLineup || [],
    homeSubstitutes: details.homeSubstitutes || [],
    awaySubstitutes: details.awaySubstitutes || [],
    startingLineup: details.startingLineup || [],
    substitutes: details.substitutes || [],
    scorers: details.scorers || [],
    assists: details.assists || [],
    yellowCards: details.yellowCards || [],
    redCards: details.redCards || [],
    homeScorers: details.homeScorers || [],
    awayScorers: details.awayScorers || [],
    homeAssists: details.homeAssists || [],
    awayAssists: details.awayAssists || [],
    homeCards: details.homeCards || [],
    awayCards: details.awayCards || [],
    stats: details.stats || {}
  };
  return hasDetail(next) ? next : null;
}

async function fetchMatchDetails(match) {
  if (!match.kLeague) return null;

  const query = {
    year: match.kLeague.year,
    leagueId: match.kLeague.leagueId,
    meetSeq: match.kLeague.meetSeq,
    gameId: match.kLeague.gameId,
    homeTeamId: match.kLeague.homeTeamId,
    awayTeamId: match.kLeague.awayTeamId,
    roundId: match.kLeague.roundId
  };
  let body = null;
  const response = {
    setHeader() {},
    status() {
      return this;
    },
    json(value) {
      body = value;
    }
  };

  await matchDetailHandler({ query }, response);
  return usefulDetails(body);
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let index = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await mapper(items[current], current);
    }
  });

  await Promise.all(workers);
  return results;
}

function writeArchive({ pastMatches, pastPlayers, pastSquads, pastStandings, pastCoaches, pastRankHistory }) {
  const content =
    `import type { Match, Player, Standing, Coach, RankPoint } from "../types";\n\n` +
    `export const pastMatches = ${JSON.stringify(pastMatches, null, 2)} satisfies Match[];\n\n` +
    `export const pastPlayers = ${JSON.stringify(pastPlayers, null, 2)} satisfies Player[];\n\n` +
    `export const pastSquads = ${JSON.stringify(pastSquads, null, 2)} satisfies Record<string, string[]>;\n\n` +
    `export const pastStandings = ${JSON.stringify(pastStandings, null, 2)} satisfies Standing[];\n\n` +
    `export const pastCoaches = ${JSON.stringify(pastCoaches, null, 2)} satisfies Coach[];\n\n` +
    `export const pastRankHistory = ${JSON.stringify(pastRankHistory, null, 2)} satisfies RankPoint[];\n`;

  fs.writeFileSync(archivePath, content, "utf8");
}

const source = fs.readFileSync(archivePath, "utf8");
const pastMatches = parseExport(source, "pastMatches", " satisfies Match[];");
const pastPlayers = parseExport(source, "pastPlayers", " satisfies Player[];");
const pastSquads = parseExport(source, "pastSquads", " satisfies Record<string, string[]>;");
const pastStandings = parseExport(source, "pastStandings", " satisfies Standing[];");
const pastCoaches = parseExport(source, "pastCoaches", " satisfies Coach[];");
const pastRankHistory = parseExport(source, "pastRankHistory", " satisfies RankPoint[];");

const targets = pastMatches.filter((match) => targetSeasons.has(match.seasonId) && !hasDetail(match));
console.log(`상세 수집 대상: ${targets.length}경기`);

let filled = 0;
const detailById = new Map();
await mapLimit(targets, 3, async (match, index) => {
  const details = await fetchMatchDetails(match).catch(() => null);
  if (details) {
    filled += 1;
    detailById.set(match.id, details);
  }
  console.log(`${index + 1}/${targets.length} ${match.seasonId} ${match.round || ""} ${match.homeTeam} vs ${match.awayTeam} ${details ? "저장" : "없음"}`);
});

const nextMatches = pastMatches.map((match) => {
  const details = detailById.get(match.id);
  return details ? { ...match, ...details } : match;
});

writeArchive({
  pastMatches: nextMatches,
  pastPlayers,
  pastSquads,
  pastStandings,
  pastCoaches,
  pastRankHistory
});

console.log(`완료: ${filled}/${targets.length}경기 상세 저장`);
