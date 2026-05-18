export type AppTab = "home" | "matches" | "squad" | "records";
export type PlayerPosition = "GK" | "DF" | "MF" | "FW" | "STAFF";
export type MatchStatus = "scheduled" | "finished";
export type CompetitionType = "league" | "fa" | "friendly";
export type RecordTab = "team" | "player";

export interface Season {
  id: string;
  label: string;
  teamName: string;
  division: string;
}

export interface Match {
  id: string;
  sourceEventId?: string;
  kLeague?: {
    year: string;
    leagueId: string;
    meetSeq: string;
    gameId: string;
    homeTeamId: string;
    awayTeamId: string;
    roundId: string;
  };
  seasonId: string;
  date: string;
  time?: string;
  competition: string;
  competitionType: CompetitionType;
  round: string;
  homeTeam: string;
  awayTeam: string;
  homeLogoUrl?: string;
  awayLogoUrl?: string;
  homeScore: number | null;
  awayScore: number | null;
  stadium: string;
  status: MatchStatus;
  scorers: string[];
  assists: string[];
  yellowCards: string[];
  redCards: string[];
  homeScorers?: string[];
  awayScorers?: string[];
  homeAssists?: string[];
  awayAssists?: string[];
  homeCards?: string[];
  awayCards?: string[];
  startingLineup: string[];
  substitutes: string[];
  homeLineup?: string[];
  awayLineup?: string[];
  homeSubstitutes?: string[];
  awaySubstitutes?: string[];
  stats: {
    shots?: number;
    shotsAgainst?: number;
    possession?: number;
    corners?: number;
    fouls?: number;
  };
  articleLinks: { title: string; url: string }[];
  memo: string;
}

export interface Player {
  id: string;
  seasonId: string;
  number: string;
  name: string;
  position: PlayerPosition;
  nationality: string;
  birthDate?: string;
  height?: string;
  weight?: string;
  joinedYear?: string;
  appearances: number;
  goals: number;
  assists: number;
  cleanSheets?: number;
  yellowCards?: number;
  redCards?: number;
  seasonRecords: { season: string; appearances: number; goals: number; assists: number }[];
  previousClubs: string[];
  nextClubs: string[];
}

export interface Standing {
  seasonId: string;
  rank: string;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  homeRecord: string;
  awayRecord: string;
  longestWinningRun: string;
  longestWinlessRun: string;
  highestScoringMatch: string;
}

export interface Coach {
  id: string;
  seasonId: string;
  name: string;
  role: string;
  period: string;
}

export interface HistoryEvent {
  id: string;
  seasonId: string;
  date: string;
  title: string;
  category: string;
  description: string;
}

export interface RankPoint {
  seasonId: string;
  matchId: string;
  round: string;
  date: string;
  rank: number;
}

export interface ArchiveData {
  seasons: Season[];
  matches: Match[];
  players: Player[];
  squads: Record<string, string[]>;
  standings: Standing[];
  playerStats: Player[];
  coaches: Coach[];
  historyEvents: HistoryEvent[];
  rankHistory: RankPoint[];
}
