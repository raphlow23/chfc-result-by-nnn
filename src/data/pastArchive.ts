import type { Match, Player, Standing, Coach, RankPoint } from "../types";

export const pastMatches = [
  {
    "id": "2023-kleague-6",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "6",
      "homeTeamId": "K31",
      "awayTeamId": "K37",
      "roundId": "1"
    },
    "date": "2023-03-01",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "1R",
    "homeTeam": "서울 이랜드",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 3,
    "stadium": "목동종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-8",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "8",
      "homeTeamId": "K37",
      "awayTeamId": "K35",
      "roundId": "2"
    },
    "date": "2023-03-04",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "2R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김천 상무",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K35.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-15",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "15",
      "homeTeamId": "K37",
      "awayTeamId": "K06",
      "roundId": "3"
    },
    "date": "2023-03-11",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "3R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부산 아이파크",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-20",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "20",
      "homeTeamId": "K20",
      "awayTeamId": "K37",
      "roundId": "4"
    },
    "date": "2023-03-18",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "4R",
    "homeTeam": "경남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "Changwon Football C",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-26",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "26",
      "homeTeamId": "K08",
      "awayTeamId": "K37",
      "roundId": "5"
    },
    "date": "2023-04-01",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "5R",
    "homeTeam": "성남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 2,
    "stadium": "탄천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-34",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "34",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "6"
    },
    "date": "2023-04-09",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "6R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-37",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "37",
      "homeTeamId": "K07",
      "awayTeamId": "K37",
      "roundId": "7"
    },
    "date": "2023-04-15",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "7R",
    "homeTeam": "전남 드래곤즈",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 0,
    "stadium": "광양축구전용구장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-44",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "44",
      "homeTeamId": "K37",
      "awayTeamId": "K34",
      "roundId": "8"
    },
    "date": "2023-04-18",
    "time": "19:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "8R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "충남아산 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "homeScore": 0,
    "awayScore": 4,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-53",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "53",
      "homeTeamId": "K37",
      "awayTeamId": "K26",
      "roundId": "9"
    },
    "date": "2023-04-23",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "9R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부천 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "homeScore": 0,
    "awayScore": 4,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-58",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "58",
      "homeTeamId": "K27",
      "awayTeamId": "K37",
      "roundId": "10"
    },
    "date": "2023-04-29",
    "time": "18:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "10R",
    "homeTeam": "FC 안양",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "Anyang Stadium",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-69",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "69",
      "homeTeamId": "K37",
      "awayTeamId": "K38",
      "roundId": "12"
    },
    "date": "2023-05-06",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "12R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "천안 시티",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-78",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "78",
      "homeTeamId": "K37",
      "awayTeamId": "K32",
      "roundId": "13"
    },
    "date": "2023-05-14",
    "time": "18:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "13R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "안산 그리너스",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "homeScore": 3,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-84",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "84",
      "homeTeamId": "K35",
      "awayTeamId": "K37",
      "roundId": "14"
    },
    "date": "2023-05-21",
    "time": "18:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "14R",
    "homeTeam": "김천 상무",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K35.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "Gimcheon",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-86",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "86",
      "homeTeamId": "K37",
      "awayTeamId": "K20",
      "roundId": "15"
    },
    "date": "2023-05-27",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "15R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "경남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-94",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "94",
      "homeTeamId": "K36",
      "awayTeamId": "K37",
      "roundId": "16"
    },
    "date": "2023-06-04",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "16R",
    "homeTeam": "김포 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "Gimpo Solteo",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-101",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "101",
      "homeTeamId": "K37",
      "awayTeamId": "K07",
      "roundId": "17"
    },
    "date": "2023-06-11",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "17R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "전남 드래곤즈",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "homeScore": 3,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-103",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "103",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "18"
    },
    "date": "2023-06-24",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "18R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "Busan Asiad",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-113",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "113",
      "homeTeamId": "K37",
      "awayTeamId": "K08",
      "roundId": "19"
    },
    "date": "2023-07-03",
    "time": "19:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "19R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "성남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-115",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "115",
      "homeTeamId": "K37",
      "awayTeamId": "K27",
      "roundId": "20"
    },
    "date": "2023-07-08",
    "time": "18:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "20R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "FC 안양",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-121",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "121",
      "homeTeamId": "K38",
      "awayTeamId": "K37",
      "roundId": "21"
    },
    "date": "2023-07-15",
    "time": "19:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "21R",
    "homeTeam": "천안 시티",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "천안종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-127",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "127",
      "homeTeamId": "K26",
      "awayTeamId": "K37",
      "roundId": "22"
    },
    "date": "2023-07-18",
    "time": "19:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "22R",
    "homeTeam": "부천 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "부천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-133",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "133",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "23"
    },
    "date": "2023-07-23",
    "time": "19:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "23R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-150",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "150",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "25"
    },
    "date": "2023-08-08",
    "time": "19:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "25R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-158",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "158",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "27"
    },
    "date": "2023-08-19",
    "time": "19:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "27R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-168",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "168",
      "homeTeamId": "K38",
      "awayTeamId": "K37",
      "roundId": "28"
    },
    "date": "2023-08-27",
    "time": "19:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "28R",
    "homeTeam": "천안 시티",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "천안종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-174",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "174",
      "homeTeamId": "K37",
      "awayTeamId": "K27",
      "roundId": "29"
    },
    "date": "2023-08-30",
    "time": "19:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "29R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "FC 안양",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-176",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "176",
      "homeTeamId": "K35",
      "awayTeamId": "K37",
      "roundId": "30"
    },
    "date": "2023-09-02",
    "time": "18:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "30R",
    "homeTeam": "김천 상무",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K35.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "Gimcheon",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-182",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "182",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "31"
    },
    "date": "2023-09-16",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "31R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-189",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "189",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "32"
    },
    "date": "2023-09-19",
    "time": "19:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "32R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-193",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "193",
      "homeTeamId": "K08",
      "awayTeamId": "K37",
      "roundId": "33"
    },
    "date": "2023-09-23",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "33R",
    "homeTeam": "성남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "탄천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-202",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "202",
      "homeTeamId": "K37",
      "awayTeamId": "K26",
      "roundId": "34"
    },
    "date": "2023-10-01",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "34R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부천 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-152",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "152",
      "homeTeamId": "K34",
      "awayTeamId": "K37",
      "roundId": "26"
    },
    "date": "2023-10-14",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "26R",
    "homeTeam": "충남아산 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 2,
    "stadium": "Asan YISoonsin",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-215",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "215",
      "homeTeamId": "K37",
      "awayTeamId": "K20",
      "roundId": "36"
    },
    "date": "2023-10-22",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "36R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "경남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-220",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "220",
      "homeTeamId": "K07",
      "awayTeamId": "K37",
      "roundId": "37"
    },
    "date": "2023-10-29",
    "time": "13:30",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "37R",
    "homeTeam": "전남 드래곤즈",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 0,
    "stadium": "광양축구전용구장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-224",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "224",
      "homeTeamId": "K37",
      "awayTeamId": "K34",
      "roundId": "38"
    },
    "date": "2023-11-11",
    "time": "16:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "38R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "충남아산 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2023-kleague-234",
    "seasonId": "2023",
    "kLeague": {
      "year": "2023",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "234",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "39"
    },
    "date": "2023-11-26",
    "time": "15:00",
    "competition": "하나원큐 K리그2 2023",
    "competitionType": "league",
    "round": "39R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "Busan Asiad",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-4",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "4",
      "homeTeamId": "K37",
      "awayTeamId": "K07",
      "roundId": "1"
    },
    "date": "2024-03-02",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "1R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "전남 드래곤즈",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-11",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "11",
      "homeTeamId": "K38",
      "awayTeamId": "K37",
      "roundId": "2"
    },
    "date": "2024-03-10",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "2R",
    "homeTeam": "천안 시티",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "천안종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-17",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "17",
      "homeTeamId": "K37",
      "awayTeamId": "K27",
      "roundId": "3"
    },
    "date": "2024-03-17",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "3R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "FC 안양",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-19",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "19",
      "homeTeamId": "K34",
      "awayTeamId": "K37",
      "roundId": "4"
    },
    "date": "2024-03-30",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "4R",
    "homeTeam": "충남아산 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 4,
    "awayScore": 1,
    "stadium": "Asan YISoonsin",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-30",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "30",
      "homeTeamId": "K37",
      "awayTeamId": "K02",
      "roundId": "5"
    },
    "date": "2024-04-07",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "5R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "수원 삼성",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-32",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "32",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "6"
    },
    "date": "2024-04-10",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "6R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-37",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "37",
      "homeTeamId": "K20",
      "awayTeamId": "K37",
      "roundId": "7"
    },
    "date": "2024-04-13",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "7R",
    "homeTeam": "경남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "Changwon Football C",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-44",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "44",
      "homeTeamId": "K08",
      "awayTeamId": "K37",
      "roundId": "8"
    },
    "date": "2024-04-20",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "8R",
    "homeTeam": "성남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "탄천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-54",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "54",
      "homeTeamId": "K37",
      "awayTeamId": "K26",
      "roundId": "9"
    },
    "date": "2024-04-28",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "9R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부천 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-60",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "60",
      "homeTeamId": "K31",
      "awayTeamId": "K37",
      "roundId": "10"
    },
    "date": "2024-05-06",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "10R",
    "homeTeam": "서울 이랜드",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "목동종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-71",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "71",
      "homeTeamId": "K37",
      "awayTeamId": "K06",
      "roundId": "12"
    },
    "date": "2024-05-15",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "12R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부산 아이파크",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-73",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "73",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "13"
    },
    "date": "2024-05-18",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "13R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-79",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "79",
      "homeTeamId": "K07",
      "awayTeamId": "K37",
      "roundId": "14"
    },
    "date": "2024-05-21",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "14R",
    "homeTeam": "전남 드래곤즈",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "광양축구전용구장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-86",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "86",
      "homeTeamId": "K37",
      "awayTeamId": "K20",
      "roundId": "15"
    },
    "date": "2024-05-26",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "15R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "경남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-95",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "95",
      "homeTeamId": "K27",
      "awayTeamId": "K37",
      "roundId": "16"
    },
    "date": "2024-06-02",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "16R",
    "homeTeam": "FC 안양",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 0,
    "stadium": "Anyang Stadium",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-101",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "101",
      "homeTeamId": "K37",
      "awayTeamId": "K38",
      "roundId": "17"
    },
    "date": "2024-06-16",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "17R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "천안 시티",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-107",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "107",
      "homeTeamId": "K26",
      "awayTeamId": "K37",
      "roundId": "18"
    },
    "date": "2024-06-23",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "18R",
    "homeTeam": "부천 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 4,
    "stadium": "부천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-112",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "112",
      "homeTeamId": "K36",
      "awayTeamId": "K37",
      "roundId": "19"
    },
    "date": "2024-06-26",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "19R",
    "homeTeam": "김포 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "Gimpo Solteo",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-123",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "123",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "21"
    },
    "date": "2024-07-07",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "21R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 2,
    "awayScore": 3,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-128",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "128",
      "homeTeamId": "K37",
      "awayTeamId": "K32",
      "roundId": "22"
    },
    "date": "2024-07-13",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "22R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "안산 그리너스",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-135",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "135",
      "homeTeamId": "K02",
      "awayTeamId": "K37",
      "roundId": "23"
    },
    "date": "2024-07-20",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "23R",
    "homeTeam": "수원 삼성",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "수원월드컵경기장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-143",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "143",
      "homeTeamId": "K37",
      "awayTeamId": "K34",
      "roundId": "24"
    },
    "date": "2024-07-24",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "24R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "충남아산 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "homeScore": 0,
    "awayScore": 3,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-149",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "149",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "25"
    },
    "date": "2024-07-29",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "25R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "Busan",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-156",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "156",
      "homeTeamId": "K37",
      "awayTeamId": "K08",
      "roundId": "26"
    },
    "date": "2024-08-12",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "26R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "성남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-157",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "157",
      "homeTeamId": "K20",
      "awayTeamId": "K37",
      "roundId": "27"
    },
    "date": "2024-08-17",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "27R",
    "homeTeam": "경남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "Changwon Football C",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-169",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "169",
      "homeTeamId": "K37",
      "awayTeamId": "K02",
      "roundId": "29"
    },
    "date": "2024-08-31",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "29R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "수원 삼성",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-175",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "175",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "30"
    },
    "date": "2024-09-14",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "30R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-183",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "183",
      "homeTeamId": "K38",
      "awayTeamId": "K37",
      "roundId": "31"
    },
    "date": "2024-09-21",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "31R",
    "homeTeam": "천안 시티",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "천안종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-189",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "189",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "32"
    },
    "date": "2024-09-24",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "32R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 2,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-196",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "196",
      "homeTeamId": "K37",
      "awayTeamId": "K08",
      "roundId": "33"
    },
    "date": "2024-09-29",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "33R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "성남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-202",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "202",
      "homeTeamId": "K26",
      "awayTeamId": "K37",
      "roundId": "34"
    },
    "date": "2024-10-05",
    "time": "19:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "34R",
    "homeTeam": "부천 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "부천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-207",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "207",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "35"
    },
    "date": "2024-10-19",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "35R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-212",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "212",
      "homeTeamId": "K37",
      "awayTeamId": "K27",
      "roundId": "36"
    },
    "date": "2024-10-26",
    "time": "16:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "36R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "FC 안양",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K27.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-217",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "217",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "37"
    },
    "date": "2024-10-29",
    "time": "19:30",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "37R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "Busan",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-226",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "226",
      "homeTeamId": "K07",
      "awayTeamId": "K37",
      "roundId": "38"
    },
    "date": "2024-11-03",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "38R",
    "homeTeam": "전남 드래곤즈",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 0,
    "stadium": "광양축구전용구장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2024-kleague-232",
    "seasonId": "2024",
    "kLeague": {
      "year": "2024",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "232",
      "homeTeamId": "K37",
      "awayTeamId": "K34",
      "roundId": "39"
    },
    "date": "2024-11-09",
    "time": "14:00",
    "competition": "하나은행 K리그2 2024",
    "competitionType": "league",
    "round": "39R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "충남아산 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "homeScore": 1,
    "awayScore": 4,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-7",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "7",
      "homeTeamId": "K26",
      "awayTeamId": "K37",
      "roundId": "1"
    },
    "date": "2025-02-23",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "1R",
    "homeTeam": "부천 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 1,
    "stadium": "부천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-14",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "14",
      "homeTeamId": "K08",
      "awayTeamId": "K37",
      "roundId": "2"
    },
    "date": "2025-03-03",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "2R",
    "homeTeam": "성남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "탄천종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-17",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "17",
      "homeTeamId": "K36",
      "awayTeamId": "K37",
      "roundId": "3"
    },
    "date": "2025-03-08",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "3R",
    "homeTeam": "김포 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 3,
    "stadium": "Gimpo Solteo",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-23",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "23",
      "homeTeamId": "K39",
      "awayTeamId": "K37",
      "roundId": "4"
    },
    "date": "2025-03-15",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "4R",
    "homeTeam": "화성 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K39.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "Hwaseong",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-31",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "31",
      "homeTeamId": "K20",
      "awayTeamId": "K37",
      "roundId": "5"
    },
    "date": "2025-03-29",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "5R",
    "homeTeam": "경남 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 0,
    "stadium": "Changwon Football C",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-41",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "41",
      "homeTeamId": "K34",
      "awayTeamId": "K37",
      "roundId": "6"
    },
    "date": "2025-04-06",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "6R",
    "homeTeam": "충남아산 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 3,
    "awayScore": 1,
    "stadium": "Asan YISoonsin",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-47",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "47",
      "homeTeamId": "K18",
      "awayTeamId": "K37",
      "roundId": "7"
    },
    "date": "2025-04-13",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "7R",
    "homeTeam": "인천 유나이티드",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K18.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "인천축구전용경기장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-51",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "51",
      "homeTeamId": "K31",
      "awayTeamId": "K37",
      "roundId": "8"
    },
    "date": "2025-04-19",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "8R",
    "homeTeam": "서울 이랜드",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "목동종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-58",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "58",
      "homeTeamId": "K38",
      "awayTeamId": "K37",
      "roundId": "9"
    },
    "date": "2025-04-26",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "9R",
    "homeTeam": "천안 시티",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "천안종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-67",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "67",
      "homeTeamId": "K37",
      "awayTeamId": "K02",
      "roundId": "10"
    },
    "date": "2025-05-04",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "10R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "수원 삼성",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "homeScore": 3,
    "awayScore": 3,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-76",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "76",
      "homeTeamId": "K37",
      "awayTeamId": "K06",
      "roundId": "11"
    },
    "date": "2025-05-11",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "11R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부산 아이파크",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-83",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "83",
      "homeTeamId": "K07",
      "awayTeamId": "K37",
      "roundId": "12"
    },
    "date": "2025-05-18",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "12R",
    "homeTeam": "전남 드래곤즈",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 4,
    "awayScore": 1,
    "stadium": "광양축구전용구장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-86",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "86",
      "homeTeamId": "K37",
      "awayTeamId": "K32",
      "roundId": "13"
    },
    "date": "2025-05-24",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "13R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "안산 그리너스",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-94",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "94",
      "homeTeamId": "K37",
      "awayTeamId": "K20",
      "roundId": "14"
    },
    "date": "2025-05-31",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "14R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "경남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-99",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "99",
      "homeTeamId": "K37",
      "awayTeamId": "K34",
      "roundId": "15"
    },
    "date": "2025-06-06",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "15R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "충남아산 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-108",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "108",
      "homeTeamId": "K37",
      "awayTeamId": "K08",
      "roundId": "16"
    },
    "date": "2025-06-14",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "16R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "성남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-118",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "118",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "17"
    },
    "date": "2025-06-22",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "17R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "Busan",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-125",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "125",
      "homeTeamId": "K37",
      "awayTeamId": "K07",
      "roundId": "18"
    },
    "date": "2025-06-29",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "18R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "전남 드래곤즈",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-129",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "129",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "19"
    },
    "date": "2025-07-05",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "19R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-136",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "136",
      "homeTeamId": "K02",
      "awayTeamId": "K37",
      "roundId": "20"
    },
    "date": "2025-07-12",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "20R",
    "homeTeam": "수원 삼성",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "수원월드컵경기장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-146",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "146",
      "homeTeamId": "K37",
      "awayTeamId": "K38",
      "roundId": "21"
    },
    "date": "2025-07-20",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "21R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "천안 시티",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "homeScore": 2,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-150",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "150",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "22"
    },
    "date": "2025-07-26",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "22R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 0,
    "awayScore": 3,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-159",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "159",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "23"
    },
    "date": "2025-08-02",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "23R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 2,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-168",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "168",
      "homeTeamId": "K37",
      "awayTeamId": "K26",
      "roundId": "24"
    },
    "date": "2025-08-10",
    "time": "19:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "24R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부천 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-173",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "173",
      "homeTeamId": "K37",
      "awayTeamId": "K39",
      "roundId": "25"
    },
    "date": "2025-08-16",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "25R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "화성 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K39.png",
    "homeScore": 1,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-180",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "180",
      "homeTeamId": "K37",
      "awayTeamId": "K18",
      "roundId": "26"
    },
    "date": "2025-08-24",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "26R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "인천 유나이티드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K18.png",
    "homeScore": 0,
    "awayScore": 4,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-188",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "188",
      "homeTeamId": "K06",
      "awayTeamId": "K37",
      "roundId": "27"
    },
    "date": "2025-08-30",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "27R",
    "homeTeam": "부산 아이파크",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K06.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 2,
    "stadium": "Busan",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-192",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "192",
      "homeTeamId": "K37",
      "awayTeamId": "K20",
      "roundId": "28"
    },
    "date": "2025-09-06",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "28R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "경남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K20.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-202",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "202",
      "homeTeamId": "K37",
      "awayTeamId": "K08",
      "roundId": "29"
    },
    "date": "2025-09-14",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "29R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "성남 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K08.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-208",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "208",
      "homeTeamId": "K32",
      "awayTeamId": "K37",
      "roundId": "30"
    },
    "date": "2025-09-21",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "30R",
    "homeTeam": "안산 그리너스",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K32.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "안산와스타디움",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-213",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "213",
      "homeTeamId": "K37",
      "awayTeamId": "K38",
      "roundId": "31"
    },
    "date": "2025-09-27",
    "time": "19:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "31R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "천안 시티",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K38.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-221",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "221",
      "homeTeamId": "K34",
      "awayTeamId": "K37",
      "roundId": "32"
    },
    "date": "2025-10-04",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "32R",
    "homeTeam": "충남아산 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K34.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "Asan YISoonsin",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-226",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "226",
      "homeTeamId": "K37",
      "awayTeamId": "K36",
      "roundId": "33"
    },
    "date": "2025-10-07",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "33R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "김포 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K36.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-233",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "233",
      "homeTeamId": "K39",
      "awayTeamId": "K37",
      "roundId": "34"
    },
    "date": "2025-10-11",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "34R",
    "homeTeam": "화성 FC",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K39.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 1,
    "awayScore": 0,
    "stadium": "Hwaseong",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-243",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "243",
      "homeTeamId": "K37",
      "awayTeamId": "K07",
      "roundId": "35"
    },
    "date": "2025-10-19",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "35R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "전남 드래곤즈",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K07.png",
    "homeScore": 0,
    "awayScore": 3,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-250",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "250",
      "homeTeamId": "K37",
      "awayTeamId": "K26",
      "roundId": "36"
    },
    "date": "2025-10-25",
    "time": "16:30",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "36R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "부천 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K26.png",
    "homeScore": 0,
    "awayScore": 0,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-254",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "254",
      "homeTeamId": "K02",
      "awayTeamId": "K37",
      "roundId": "37"
    },
    "date": "2025-11-01",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "37R",
    "homeTeam": "수원 삼성",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K02.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 2,
    "awayScore": 0,
    "stadium": "수원월드컵경기장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-264",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "264",
      "homeTeamId": "K37",
      "awayTeamId": "K31",
      "roundId": "38"
    },
    "date": "2025-11-09",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "38R",
    "homeTeam": "충북청주 FC",
    "awayTeam": "서울 이랜드",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K31.png",
    "homeScore": 0,
    "awayScore": 2,
    "stadium": "청주종합운동장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  },
  {
    "id": "2025-kleague-268",
    "seasonId": "2025",
    "kLeague": {
      "year": "2025",
      "leagueId": "2",
      "meetSeq": "2",
      "gameId": "268",
      "homeTeamId": "K18",
      "awayTeamId": "K37",
      "roundId": "39"
    },
    "date": "2025-11-23",
    "time": "14:00",
    "competition": "하나은행 K리그2 2025",
    "competitionType": "league",
    "round": "39R",
    "homeTeam": "인천 유나이티드",
    "awayTeam": "충북청주 FC",
    "homeLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K18.png",
    "awayLogoUrl": "https://www.kleague.com/assets/images/emblem/emblem_K37.png",
    "homeScore": 0,
    "awayScore": 1,
    "stadium": "인천축구전용경기장",
    "status": "finished",
    "scorers": [],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [],
    "stats": {},
    "articleLinks": [],
    "memo": "K리그 공식 데이터"
  }
] satisfies Match[];

export const pastPlayers = [
  {
    "id": "2023-kleague-player-20090095",
    "seasonId": "2023",
    "number": "1",
    "name": "류원우",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 2,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2009",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2010",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2011",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2012",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 28,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 40,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2017",
        "appearances": 34,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 15,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 17,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 20,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남",
      "광주",
      "부천",
      "포항"
    ],
    "nextClubs": [
      "충북청주",
      "전남",
      "경남",
      "파주"
    ],
    "birthDate": "1990-08-05",
    "height": "185cm",
    "weight": "78kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20180072",
    "seasonId": "2023",
    "number": "1",
    "name": "정진욱",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 11,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울"
    ],
    "nextClubs": [
      "충북청주",
      "김해"
    ],
    "birthDate": "1997-05-28",
    "height": "188cm",
    "weight": "86kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20170179",
    "seasonId": "2023",
    "number": "21",
    "name": "박대한",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 24,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 11,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2017",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 24,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 22,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남",
      "수원FC"
    ],
    "nextClubs": [
      "충북청주",
      "부산",
      "천안"
    ],
    "birthDate": "1996-04-19",
    "height": "184cm",
    "weight": "78kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20130125",
    "seasonId": "2023",
    "number": "2",
    "name": "김지운",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 13,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2013",
        "appearances": 23,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 7,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2015",
        "appearances": 21,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2016",
        "appearances": 12,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2017",
        "appearances": 13,
        "goals": 0,
        "assists": 5
      },
      {
        "season": "2018",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "제주",
      "서울E",
      "수원FC",
      "아산",
      "경남"
    ],
    "nextClubs": [],
    "birthDate": "1990-07-02",
    "height": "176cm",
    "weight": "62kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20120079",
    "seasonId": "2023",
    "number": "3",
    "name": "이한샘",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 31,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 7,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 29,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 16,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2014",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 33,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 41,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2017",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 23,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 31,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 30,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "광주",
      "경남",
      "강원",
      "수원FC",
      "아산"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1989-10-18",
    "height": "185cm",
    "weight": "84kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20120149",
    "seasonId": "2023",
    "number": "4",
    "name": "구현준",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 27,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 11,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2016",
        "appearances": 14,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2017",
        "appearances": 19,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2018",
        "appearances": 17,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 27,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 20,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "부산"
    ],
    "nextClubs": [
      "충북청주",
      "전남"
    ],
    "birthDate": "1993-12-13",
    "height": "182cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230210",
    "seasonId": "2023",
    "number": "5",
    "name": "이민형",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 26,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 26,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 28,
        "goals": 1,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1997-04-04",
    "height": "190cm",
    "weight": "87kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20180170",
    "seasonId": "2023",
    "number": "13",
    "name": "박건",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 12,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 25,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 26,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "부천",
      "포항"
    ],
    "nextClubs": [],
    "birthDate": "1990-07-11",
    "height": "184cm",
    "weight": "76kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230198",
    "seasonId": "2023",
    "number": "26",
    "name": "이정택",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 33,
    "goals": 0,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 33,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 14,
        "goals": 0,
        "assists": 3
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "대전",
      "김천"
    ],
    "birthDate": "1998-05-23",
    "height": "183cm",
    "weight": "75kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230203",
    "seasonId": "2023",
    "number": "27",
    "name": "김도현",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 24,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 24,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 24,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "부산",
      "강원"
    ],
    "birthDate": "2004-05-12",
    "height": "179cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20210119",
    "seasonId": "2023",
    "number": "33",
    "name": "박진성",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 26,
    "goals": 0,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 6,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2021",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 26,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전북"
    ],
    "nextClubs": [
      "대전",
      "김천"
    ],
    "birthDate": "2001-05-15",
    "height": "178cm",
    "weight": "76kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230209",
    "seasonId": "2023",
    "number": "33",
    "name": "이종훈",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 1,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2001-02-01",
    "height": "181cm",
    "weight": "75kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20210305",
    "seasonId": "2023",
    "number": "39",
    "name": "김명순",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 35,
    "goals": 0,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2021",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 35,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 35,
        "goals": 3,
        "assists": 7
      },
      {
        "season": "2025",
        "appearances": 25,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2026",
        "appearances": 13,
        "goals": 0,
        "assists": 2
      }
    ],
    "previousClubs": [
      "제주"
    ],
    "nextClubs": [
      "충북청주",
      "인천"
    ],
    "birthDate": "2000-07-17",
    "height": "177cm",
    "weight": "76kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20150156",
    "seasonId": "2023",
    "number": "40",
    "name": "김원균",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 21,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 1,
    "seasonRecords": [
      {
        "season": "2015",
        "appearances": 15,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 8,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2017",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 26,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 21,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "서울",
      "강원"
    ],
    "nextClubs": [
      "김포"
    ],
    "birthDate": "1992-05-01",
    "height": "186cm",
    "weight": "76kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230206",
    "seasonId": "2023",
    "number": "84",
    "name": "유지원",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 1,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2004-01-07",
    "height": "181cm",
    "weight": "72kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20110167",
    "seasonId": "2023",
    "number": "7",
    "name": "장혁진",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 34,
    "goals": 0,
    "assists": 5,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2011",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2012",
        "appearances": 15,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2013",
        "appearances": 10,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 9,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2015",
        "appearances": 29,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 39,
        "goals": 2,
        "assists": 5
      },
      {
        "season": "2017",
        "appearances": 33,
        "goals": 2,
        "assists": 13
      },
      {
        "season": "2018",
        "appearances": 34,
        "goals": 3,
        "assists": 8
      },
      {
        "season": "2019",
        "appearances": 34,
        "goals": 5,
        "assists": 9
      },
      {
        "season": "2020",
        "appearances": 26,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2021",
        "appearances": 32,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2022",
        "appearances": 21,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2023",
        "appearances": 34,
        "goals": 0,
        "assists": 5
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 0,
        "assists": 3
      }
    ],
    "previousClubs": [
      "강원",
      "상주",
      "안산",
      "경남",
      "수원FC"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1989-12-06",
    "height": "178cm",
    "weight": "71kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20120064",
    "seasonId": "2023",
    "number": "8",
    "name": "문상윤",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 23,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 26,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2013",
        "appearances": 29,
        "goals": 3,
        "assists": 2
      },
      {
        "season": "2014",
        "appearances": 31,
        "goals": 3,
        "assists": 3
      },
      {
        "season": "2015",
        "appearances": 9,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 22,
        "goals": 3,
        "assists": 2
      },
      {
        "season": "2017",
        "appearances": 18,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2018",
        "appearances": 34,
        "goals": 4,
        "assists": 7
      },
      {
        "season": "2019",
        "appearances": 14,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 11,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 23,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 10,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "인천",
      "전북",
      "제주",
      "성남",
      "서울E",
      "광주"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1991-01-09",
    "height": "179cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230199",
    "seasonId": "2023",
    "number": "15",
    "name": "홍성민",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 7,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2004-07-08",
    "height": "183cm",
    "weight": "65kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230211",
    "seasonId": "2023",
    "number": "18",
    "name": "피터",
    "position": "MF",
    "nationality": "호주",
    "appearances": 32,
    "goals": 7,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 9,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 32,
        "goals": 7,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 1,
        "assists": 3
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "서울E",
      "수원"
    ],
    "birthDate": "1995-09-04",
    "height": "184cm",
    "weight": "80kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230201",
    "seasonId": "2023",
    "number": "20",
    "name": "이찬우",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 5,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2004-11-30",
    "height": "184cm",
    "weight": "90kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20220100",
    "seasonId": "2023",
    "number": "21",
    "name": "양지산",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 26,
    "goals": 4,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 26,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2024",
        "appearances": 23,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "대전"
    ],
    "nextClubs": [
      "충북청주",
      "전남"
    ],
    "birthDate": "1999-05-05",
    "height": "175cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230208",
    "seasonId": "2023",
    "number": "30",
    "name": "이주영",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 1,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2002-11-28",
    "height": "181cm",
    "weight": "75kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20200079",
    "seasonId": "2023",
    "number": "77",
    "name": "홍원진",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 34,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 7,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 34,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 17,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 27,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2026",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주",
      "수원",
      "전남"
    ],
    "birthDate": "2000-04-04",
    "height": "183cm",
    "weight": "85kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20190153",
    "seasonId": "2023",
    "number": "7",
    "name": "이승재",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 33,
    "goals": 3,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2020",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 16,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 33,
        "goals": 3,
        "assists": 3
      },
      {
        "season": "2025",
        "appearances": 21,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 3,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울",
      "충남아산"
    ],
    "nextClubs": [
      "화성",
      "충북청주",
      "김해"
    ],
    "birthDate": "1998-02-06",
    "height": "181cm",
    "weight": "74kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230197",
    "seasonId": "2023",
    "number": "10",
    "name": "파울리뉴",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 10,
    "goals": 2,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 10,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 12,
        "goals": 2,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1993-05-29",
    "height": "178cm",
    "weight": "73kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230207",
    "seasonId": "2023",
    "number": "16",
    "name": "강민승",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 8,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 8,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2004-11-18",
    "height": "175cm",
    "weight": "60kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20150096",
    "seasonId": "2023",
    "number": "17",
    "name": "정기운",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 12,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2015",
        "appearances": 35,
        "goals": 6,
        "assists": 4
      },
      {
        "season": "2016",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "수원FC",
      "안산"
    ],
    "nextClubs": [],
    "birthDate": "1992-07-05",
    "height": "186cm",
    "weight": "81kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230202",
    "seasonId": "2023",
    "number": "22",
    "name": "이승엽",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 9,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2000-03-21",
    "height": "183cm",
    "weight": "71kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20230225",
    "seasonId": "2023",
    "number": "25",
    "name": "조르지",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 34,
    "goals": 13,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 34,
        "goals": 13,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 34,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2025",
        "appearances": 36,
        "goals": 5,
        "assists": 5
      },
      {
        "season": "2026",
        "appearances": 4,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "포항"
    ],
    "birthDate": "1999-06-21",
    "height": "192cm",
    "weight": "90kg",
    "joinedYear": "2023"
  },
  {
    "id": "2023-kleague-player-20190089",
    "seasonId": "2023",
    "number": "77",
    "name": "정민우",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 1,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 14,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 18,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "강원"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2000-09-27",
    "height": "178cm",
    "weight": "74kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20090095",
    "seasonId": "2024",
    "number": "1",
    "name": "류원우",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 20,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 3,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2009",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2010",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2011",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2012",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 28,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 40,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2017",
        "appearances": 34,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 15,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 20,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남",
      "광주",
      "부천",
      "포항",
      "충북청주"
    ],
    "nextClubs": [
      "경남",
      "파주"
    ],
    "birthDate": "1990-08-05",
    "height": "185cm",
    "weight": "78kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20180072",
    "seasonId": "2024",
    "number": "1",
    "name": "정진욱",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 13,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 3,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울",
      "충북청주"
    ],
    "nextClubs": [
      "충북청주",
      "김해"
    ],
    "birthDate": "1997-05-28",
    "height": "188cm",
    "weight": "86kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20170179",
    "seasonId": "2024",
    "number": "21",
    "name": "박대한",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 22,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 6,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2017",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 24,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 22,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남",
      "수원FC",
      "충북청주"
    ],
    "nextClubs": [
      "부산",
      "천안"
    ],
    "birthDate": "1996-04-19",
    "height": "184cm",
    "weight": "78kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20230204",
    "seasonId": "2024",
    "number": "25",
    "name": "정현호",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 2,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2004-11-26",
    "height": "196cm",
    "weight": "85kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20120079",
    "seasonId": "2024",
    "number": "3",
    "name": "이한샘",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 30,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 6,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 29,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 16,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2014",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 33,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 41,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2017",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 23,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 31,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 30,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "광주",
      "경남",
      "강원",
      "수원FC",
      "아산",
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "1989-10-18",
    "height": "185cm",
    "weight": "84kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20120149",
    "seasonId": "2024",
    "number": "4",
    "name": "구현준",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 29,
    "goals": 2,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 11,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2016",
        "appearances": 14,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2017",
        "appearances": 19,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2018",
        "appearances": 17,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 27,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 20,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "부산",
      "충북청주"
    ],
    "nextClubs": [
      "전남"
    ],
    "birthDate": "1993-12-13",
    "height": "182cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20240196",
    "seasonId": "2024",
    "number": "4",
    "name": "베니시오",
    "position": "DF",
    "nationality": "브라질",
    "appearances": 31,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 31,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 34,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 10,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "성남"
    ],
    "birthDate": "1994-03-13",
    "height": "183cm",
    "weight": "83kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20230210",
    "seasonId": "2024",
    "number": "5",
    "name": "이민형",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 28,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 26,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 28,
        "goals": 1,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "1997-04-04",
    "height": "190cm",
    "weight": "87kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20190197",
    "seasonId": "2024",
    "number": "6",
    "name": "김지훈",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 23,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 9,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2021",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 23,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 26,
        "goals": 1,
        "assists": 2
      },
      {
        "season": "2026",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "대전"
    ],
    "nextClubs": [
      "김포",
      "수원FC"
    ],
    "birthDate": "2000-06-26",
    "height": "175cm",
    "weight": "60kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20230069",
    "seasonId": "2024",
    "number": "6",
    "name": "전현병",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 20,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 6,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 20,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 9,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "강원"
    ],
    "nextClubs": [
      "충북청주",
      "파주"
    ],
    "birthDate": "2000-05-07",
    "height": "188cm",
    "weight": "83kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20200157",
    "seasonId": "2024",
    "number": "23",
    "name": "김민식",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 10,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2020",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 10,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 22,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충남아산"
    ],
    "nextClubs": [
      "김포"
    ],
    "birthDate": "1998-03-18",
    "height": "174cm",
    "weight": "68kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20210305",
    "seasonId": "2024",
    "number": "39",
    "name": "김명순",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 35,
    "goals": 3,
    "assists": 7,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2021",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 35,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 35,
        "goals": 3,
        "assists": 7
      },
      {
        "season": "2025",
        "appearances": 25,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2026",
        "appearances": 13,
        "goals": 0,
        "assists": 2
      }
    ],
    "previousClubs": [
      "제주",
      "충북청주"
    ],
    "nextClubs": [
      "인천"
    ],
    "birthDate": "2000-07-17",
    "height": "177cm",
    "weight": "76kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20200080",
    "seasonId": "2024",
    "number": "66",
    "name": "이강한",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 3,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 17,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 36,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2026",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "강원"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2000-04-07",
    "height": "175cm",
    "weight": "71kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20240107",
    "seasonId": "2024",
    "number": "96",
    "name": "최석현",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 16,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 16,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 23,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 12,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "울산"
    ],
    "birthDate": "2003-01-13",
    "height": "178cm",
    "weight": "77kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20180106",
    "seasonId": "2024",
    "number": "4",
    "name": "최준혁",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 8,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 13,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 31,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2020",
        "appearances": 10,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 9,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 26,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 10,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "광주",
      "김천"
    ],
    "nextClubs": [
      "화성",
      "천안"
    ],
    "birthDate": "1994-09-05",
    "height": "187cm",
    "weight": "88kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20140040",
    "seasonId": "2024",
    "number": "5",
    "name": "김선민",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 31,
    "goals": 1,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2014",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 32,
        "goals": 6,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 30,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2017",
        "appearances": 33,
        "goals": 0,
        "assists": 8
      },
      {
        "season": "2018",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 34,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 37,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2023",
        "appearances": 30,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 31,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2025",
        "appearances": 39,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 12,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "울산",
      "안양",
      "대전",
      "대구",
      "아산",
      "서울E",
      "수원FC"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1991-12-12",
    "height": "167cm",
    "weight": "65kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20110167",
    "seasonId": "2024",
    "number": "7",
    "name": "장혁진",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 29,
    "goals": 0,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2011",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2012",
        "appearances": 15,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2013",
        "appearances": 10,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 9,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2015",
        "appearances": 29,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 39,
        "goals": 2,
        "assists": 5
      },
      {
        "season": "2017",
        "appearances": 33,
        "goals": 2,
        "assists": 13
      },
      {
        "season": "2018",
        "appearances": 34,
        "goals": 3,
        "assists": 8
      },
      {
        "season": "2019",
        "appearances": 34,
        "goals": 5,
        "assists": 9
      },
      {
        "season": "2020",
        "appearances": 26,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2021",
        "appearances": 32,
        "goals": 0,
        "assists": 3
      },
      {
        "season": "2022",
        "appearances": 21,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2023",
        "appearances": 34,
        "goals": 0,
        "assists": 5
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 0,
        "assists": 3
      }
    ],
    "previousClubs": [
      "강원",
      "상주",
      "안산",
      "경남",
      "수원FC",
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "1989-12-06",
    "height": "178cm",
    "weight": "71kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20120064",
    "seasonId": "2024",
    "number": "8",
    "name": "문상윤",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 11,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2012",
        "appearances": 26,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2013",
        "appearances": 29,
        "goals": 3,
        "assists": 2
      },
      {
        "season": "2014",
        "appearances": 31,
        "goals": 3,
        "assists": 3
      },
      {
        "season": "2015",
        "appearances": 9,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 22,
        "goals": 3,
        "assists": 2
      },
      {
        "season": "2017",
        "appearances": 18,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2018",
        "appearances": 34,
        "goals": 4,
        "assists": 7
      },
      {
        "season": "2019",
        "appearances": 14,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 11,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 23,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "인천",
      "전북",
      "제주",
      "성남",
      "서울E",
      "광주",
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "1991-01-09",
    "height": "179cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20230199",
    "seasonId": "2024",
    "number": "15",
    "name": "홍성민",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 5,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2004-07-08",
    "height": "183cm",
    "weight": "65kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20230201",
    "seasonId": "2024",
    "number": "20",
    "name": "이찬우",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 2,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2004-11-30",
    "height": "184cm",
    "weight": "90kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20220100",
    "seasonId": "2024",
    "number": "21",
    "name": "양지산",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 23,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 26,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2024",
        "appearances": 23,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "대전",
      "충북청주"
    ],
    "nextClubs": [
      "전남"
    ],
    "birthDate": "1999-05-05",
    "height": "175cm",
    "weight": "70kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20230040",
    "seasonId": "2024",
    "number": "28",
    "name": "김정현",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 17,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 17,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충남아산"
    ],
    "birthDate": "2004-06-29",
    "height": "180cm",
    "weight": "70kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20240108",
    "seasonId": "2024",
    "number": "30",
    "name": "김영환",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 15,
    "goals": 1,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 15,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 33,
        "goals": 3,
        "assists": 2
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2002-03-23",
    "height": "180cm",
    "weight": "74kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20240197",
    "seasonId": "2024",
    "number": "41",
    "name": "미유키",
    "position": "MF",
    "nationality": "일본",
    "appearances": 8,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1993-05-23",
    "height": "173cm",
    "weight": "65kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20200079",
    "seasonId": "2024",
    "number": "77",
    "name": "홍원진",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 18,
    "goals": 3,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 34,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 18,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 27,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2026",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [
      "수원",
      "전남"
    ],
    "birthDate": "2000-04-04",
    "height": "183cm",
    "weight": "85kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20240127",
    "seasonId": "2024",
    "number": "10",
    "name": "탈레스",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 15,
    "goals": 0,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 15,
        "goals": 0,
        "assists": 2
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1998-09-28",
    "height": "185cm",
    "weight": "75kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20230197",
    "seasonId": "2024",
    "number": "10",
    "name": "파울리뉴",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 12,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 10,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 12,
        "goals": 2,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "1993-05-29",
    "height": "178cm",
    "weight": "73kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20130332",
    "seasonId": "2024",
    "number": "14",
    "name": "김병오",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 3,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 6,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2013",
        "appearances": 17,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2015",
        "appearances": 33,
        "goals": 9,
        "assists": 3
      },
      {
        "season": "2016",
        "appearances": 28,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2017",
        "appearances": 26,
        "goals": 3,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 25,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2020",
        "appearances": 20,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 15,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 3,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 22,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 8,
        "goals": 1,
        "assists": 0
      }
    ],
    "previousClubs": [
      "안양",
      "충주",
      "수원FC",
      "상주",
      "부산",
      "전남"
    ],
    "nextClubs": [
      "충북청주",
      "화성"
    ],
    "birthDate": "1989-06-26",
    "height": "182cm",
    "weight": "84kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20230207",
    "seasonId": "2024",
    "number": "16",
    "name": "강민승",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 6,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2004-11-18",
    "height": "175cm",
    "weight": "60kg",
    "joinedYear": "2023"
  },
  {
    "id": "2024-kleague-player-20240195",
    "seasonId": "2024",
    "number": "17",
    "name": "오두",
    "position": "FW",
    "nationality": "영국",
    "appearances": 10,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 10,
        "goals": 2,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1996-03-05",
    "height": "186cm",
    "weight": "83kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20220123",
    "seasonId": "2024",
    "number": "18",
    "name": "정성호",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 10,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 6,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 20,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 10,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울E",
      "충남아산"
    ],
    "nextClubs": [
      "안산"
    ],
    "birthDate": "2001-07-06",
    "height": "187cm",
    "weight": "79kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20180109",
    "seasonId": "2024",
    "number": "32",
    "name": "윤민호",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 29,
    "goals": 5,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 1,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 33,
        "goals": 8,
        "assists": 2
      },
      {
        "season": "2023",
        "appearances": 21,
        "goals": 2,
        "assists": 4
      },
      {
        "season": "2024",
        "appearances": 29,
        "goals": 5,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 18,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 3,
        "assists": 1
      }
    ],
    "previousClubs": [
      "김포"
    ],
    "nextClubs": [
      "부산",
      "성남"
    ],
    "birthDate": "1995-12-06",
    "height": "178cm",
    "weight": "78kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20230095",
    "seasonId": "2024",
    "number": "33",
    "name": "지상욱",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 0,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 12,
        "goals": 1,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 0,
        "assists": 2
      },
      {
        "season": "2025",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "제주",
      "전남"
    ],
    "nextClubs": [
      "제주"
    ],
    "birthDate": "2003-01-13",
    "height": "184cm",
    "weight": "74kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20240335",
    "seasonId": "2024",
    "number": "35",
    "name": "사담",
    "position": "FW",
    "nationality": "가나",
    "appearances": 7,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1996-10-16",
    "height": "188cm",
    "weight": "87kg",
    "joinedYear": "2024"
  },
  {
    "id": "2024-kleague-player-20190089",
    "seasonId": "2024",
    "number": "77",
    "name": "정민우",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 18,
    "goals": 1,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 12,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 18,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "강원",
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2000-09-27",
    "height": "178cm",
    "weight": "74kg",
    "joinedYear": "2023"
  },
  {
    "id": "2025-kleague-player-20180072",
    "seasonId": "2025",
    "number": "1",
    "name": "정진욱",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 13,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 3,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울",
      "충북청주"
    ],
    "nextClubs": [
      "김해"
    ],
    "birthDate": "1997-05-28",
    "height": "188cm",
    "weight": "86kg",
    "joinedYear": "2023"
  },
  {
    "id": "2025-kleague-player-20080055",
    "seasonId": "2025",
    "number": "1",
    "name": "조수혁",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2008",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2010",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2011",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2012",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2013",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2014",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 10,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2016",
        "appearances": 26,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2017",
        "appearances": 10,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2018",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 17,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울",
      "인천",
      "울산"
    ],
    "nextClubs": [],
    "birthDate": "1987-03-18",
    "height": "188cm",
    "weight": "83kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20220160",
    "seasonId": "2025",
    "number": "23",
    "name": "이승환",
    "position": "GK",
    "nationality": "대한민국",
    "appearances": 22,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 4,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 22,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "포항"
    ],
    "nextClubs": [
      "포항"
    ],
    "birthDate": "2003-04-05",
    "height": "187cm",
    "weight": "78kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250205",
    "seasonId": "2025",
    "number": "4",
    "name": "반 데 아벌트",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 19,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2000-05-11",
    "height": "186cm",
    "weight": "74kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20230069",
    "seasonId": "2025",
    "number": "6",
    "name": "전현병",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 9,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 20,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 9,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "강원",
      "충북청주"
    ],
    "nextClubs": [
      "파주"
    ],
    "birthDate": "2000-05-07",
    "height": "188cm",
    "weight": "83kg",
    "joinedYear": "2024"
  },
  {
    "id": "2025-kleague-player-20220158",
    "seasonId": "2025",
    "number": "8",
    "name": "박건우",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 9,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "포항"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2001-08-09",
    "height": "171cm",
    "weight": "70kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20160076",
    "seasonId": "2025",
    "number": "15",
    "name": "홍준호",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 21,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2016",
        "appearances": 22,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2017",
        "appearances": 29,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2018",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 22,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 14,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 17,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 21,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "광주",
      "울산",
      "서울",
      "제주"
    ],
    "nextClubs": [
      "수원FC"
    ],
    "birthDate": "1993-10-11",
    "height": "190cm",
    "weight": "77kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20190132",
    "seasonId": "2025",
    "number": "20",
    "name": "김승우",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 2,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "제주",
      "부산",
      "광주"
    ],
    "nextClubs": [],
    "birthDate": "1998-03-25",
    "height": "184cm",
    "weight": "70kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20090093",
    "seasonId": "2025",
    "number": "20",
    "name": "윤석영",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 25,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2009",
        "appearances": 21,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2010",
        "appearances": 19,
        "goals": 0,
        "assists": 5
      },
      {
        "season": "2011",
        "appearances": 21,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2012",
        "appearances": 25,
        "goals": 2,
        "assists": 4
      },
      {
        "season": "2018",
        "appearances": 23,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2019",
        "appearances": 28,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2020",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 33,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 32,
        "goals": 1,
        "assists": 2
      },
      {
        "season": "2023",
        "appearances": 32,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 17,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2025",
        "appearances": 25,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남",
      "서울",
      "강원",
      "부산"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1990-02-13",
    "height": "182cm",
    "weight": "79kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20220087",
    "seasonId": "2025",
    "number": "27",
    "name": "여승원",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 2,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 12,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 13,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 14,
        "goals": 2,
        "assists": 3
      },
      {
        "season": "2026",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "전남"
    ],
    "nextClubs": [
      "인천"
    ],
    "birthDate": "2000-05-05",
    "height": "179cm",
    "weight": "72kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250210",
    "seasonId": "2025",
    "number": "33",
    "name": "김윤환",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 1,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2006-07-14",
    "height": "188cm",
    "weight": "80kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20240109",
    "seasonId": "2025",
    "number": "39",
    "name": "임준영",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 15,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 6,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 15,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2005-11-14",
    "height": "177cm",
    "weight": "63kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20240292",
    "seasonId": "2025",
    "number": "50",
    "name": "정성우",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 17,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2003-12-08",
    "height": "189cm",
    "weight": "81kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20200080",
    "seasonId": "2025",
    "number": "66",
    "name": "이강한",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 36,
    "goals": 1,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 17,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 36,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2026",
        "appearances": 9,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "강원",
      "충북청주"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2000-04-07",
    "height": "175cm",
    "weight": "71kg",
    "joinedYear": "2024"
  },
  {
    "id": "2025-kleague-player-20240069",
    "seasonId": "2025",
    "number": "72",
    "name": "최강민",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 25,
    "goals": 1,
    "assists": 3,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 21,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 25,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2026",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "울산"
    ],
    "nextClubs": [
      "대구"
    ],
    "birthDate": "2002-04-24",
    "height": "176cm",
    "weight": "70kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20180017",
    "seasonId": "2025",
    "number": "99",
    "name": "이창훈",
    "position": "DF",
    "nationality": "대한민국",
    "appearances": 38,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2018",
        "appearances": 11,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 22,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 7,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 38,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "안산",
      "충남아산",
      "전남"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1995-11-16",
    "height": "187cm",
    "weight": "80kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20140040",
    "seasonId": "2025",
    "number": "5",
    "name": "김선민",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 39,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 4,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2014",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2015",
        "appearances": 32,
        "goals": 6,
        "assists": 2
      },
      {
        "season": "2016",
        "appearances": 30,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2017",
        "appearances": 33,
        "goals": 0,
        "assists": 8
      },
      {
        "season": "2018",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2019",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 34,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 37,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2023",
        "appearances": 30,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 31,
        "goals": 1,
        "assists": 3
      },
      {
        "season": "2025",
        "appearances": 39,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 12,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "울산",
      "안양",
      "대전",
      "대구",
      "아산",
      "서울E",
      "수원FC",
      "충북청주"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "1991-12-12",
    "height": "167cm",
    "weight": "65kg",
    "joinedYear": "2024"
  },
  {
    "id": "2025-kleague-player-20250308",
    "seasonId": "2025",
    "number": "8",
    "name": "문승민",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 14,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "김해"
    ],
    "birthDate": "2003-01-20",
    "height": "180cm",
    "weight": "72kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20180004",
    "seasonId": "2025",
    "number": "8",
    "name": "송진규",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 7,
    "goals": 1,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 9,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 26,
        "goals": 5,
        "assists": 3
      },
      {
        "season": "2023",
        "appearances": 19,
        "goals": 1,
        "assists": 2
      },
      {
        "season": "2024",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 7,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "수원",
      "안산",
      "부천"
    ],
    "nextClubs": [],
    "birthDate": "1997-07-12",
    "height": "176cm",
    "weight": "72kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20210084",
    "seasonId": "2025",
    "number": "16",
    "name": "허승찬",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 18,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2021",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 18,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 12,
        "goals": 1,
        "assists": 1
      }
    ],
    "previousClubs": [
      "부산"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2003-03-26",
    "height": "185cm",
    "weight": "77kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20230020",
    "seasonId": "2025",
    "number": "17",
    "name": "이동원",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 19,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2023",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 11,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 19,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "대전"
    ],
    "nextClubs": [],
    "birthDate": "2002-10-30",
    "height": "180cm",
    "weight": "74kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20190040",
    "seasonId": "2025",
    "number": "17",
    "name": "이지승",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 16,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2020",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 12,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 17,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 32,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2025",
        "appearances": 16,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "부산",
      "경남",
      "안산"
    ],
    "nextClubs": [
      "천안"
    ],
    "birthDate": "1999-01-11",
    "height": "177cm",
    "weight": "76kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20170200",
    "seasonId": "2025",
    "number": "25",
    "name": "여봉훈",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 3,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2017",
        "appearances": 31,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2018",
        "appearances": 26,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 23,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2020",
        "appearances": 14,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 21,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 0,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "광주"
    ],
    "nextClubs": [],
    "birthDate": "1994-03-12",
    "height": "178cm",
    "weight": "70kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20170012",
    "seasonId": "2025",
    "number": "25",
    "name": "최성근",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 7,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2017",
        "appearances": 22,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2018",
        "appearances": 20,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 30,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2020",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 21,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 7,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [
      "수원"
    ],
    "nextClubs": [],
    "birthDate": "1991-07-28",
    "height": "183cm",
    "weight": "73kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20240108",
    "seasonId": "2025",
    "number": "30",
    "name": "김영환",
    "position": "MF",
    "nationality": "대한민국",
    "appearances": 33,
    "goals": 3,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 1,
    "seasonRecords": [
      {
        "season": "2024",
        "appearances": 15,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 33,
        "goals": 3,
        "assists": 2
      }
    ],
    "previousClubs": [
      "충북청주"
    ],
    "nextClubs": [],
    "birthDate": "2002-03-23",
    "height": "180cm",
    "weight": "74kg",
    "joinedYear": "2024"
  },
  {
    "id": "2025-kleague-player-20250206",
    "seasonId": "2025",
    "number": "7",
    "name": "마테우징요",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 8,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1999-01-11",
    "height": "176cm",
    "weight": "66kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20190153",
    "seasonId": "2025",
    "number": "7",
    "name": "이승재",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 21,
    "goals": 3,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2020",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2021",
        "appearances": 16,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2022",
        "appearances": 6,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 33,
        "goals": 3,
        "assists": 3
      },
      {
        "season": "2025",
        "appearances": 21,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 11,
        "goals": 3,
        "assists": 0
      }
    ],
    "previousClubs": [
      "서울",
      "충남아산",
      "충북청주"
    ],
    "nextClubs": [
      "김해"
    ],
    "birthDate": "1998-02-06",
    "height": "181cm",
    "weight": "74kg",
    "joinedYear": "2023"
  },
  {
    "id": "2025-kleague-player-20250208",
    "seasonId": "2025",
    "number": "10",
    "name": "페드로",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 35,
    "goals": 4,
    "assists": 2,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 35,
        "goals": 4,
        "assists": 2
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1998-03-20",
    "height": "173cm",
    "weight": "71kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20130332",
    "seasonId": "2025",
    "number": "14",
    "name": "김병오",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 22,
    "goals": 3,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2013",
        "appearances": 17,
        "goals": 1,
        "assists": 1
      },
      {
        "season": "2015",
        "appearances": 33,
        "goals": 9,
        "assists": 3
      },
      {
        "season": "2016",
        "appearances": 28,
        "goals": 4,
        "assists": 3
      },
      {
        "season": "2017",
        "appearances": 26,
        "goals": 3,
        "assists": 1
      },
      {
        "season": "2019",
        "appearances": 25,
        "goals": 2,
        "assists": 2
      },
      {
        "season": "2020",
        "appearances": 20,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 15,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 14,
        "goals": 3,
        "assists": 1
      },
      {
        "season": "2025",
        "appearances": 22,
        "goals": 3,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 8,
        "goals": 1,
        "assists": 0
      }
    ],
    "previousClubs": [
      "안양",
      "충주",
      "수원FC",
      "상주",
      "부산",
      "전남",
      "충북청주"
    ],
    "nextClubs": [
      "화성"
    ],
    "birthDate": "1989-06-26",
    "height": "182cm",
    "weight": "84kg",
    "joinedYear": "2024"
  },
  {
    "id": "2025-kleague-player-20220151",
    "seasonId": "2025",
    "number": "14",
    "name": "서재원",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 30,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 13,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2024",
        "appearances": 1,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 30,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 9,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [
      "경남"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2003-06-18",
    "height": "177cm",
    "weight": "67kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20220102",
    "seasonId": "2025",
    "number": "19",
    "name": "송창석",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 15,
    "goals": 2,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 3,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2022",
        "appearances": 6,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 12,
        "goals": 0,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 10,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 15,
        "goals": 2,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 6,
        "goals": 1,
        "assists": 0
      }
    ],
    "previousClubs": [
      "대전",
      "김포"
    ],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2000-06-12",
    "height": "182cm",
    "weight": "77kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250211",
    "seasonId": "2025",
    "number": "22",
    "name": "양영빈",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 8,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 8,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 2,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2006-02-07",
    "height": "182cm",
    "weight": "70kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250209",
    "seasonId": "2025",
    "number": "22",
    "name": "이원준",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 3,
    "goals": 0,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 0,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 3,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "2003-08-13",
    "height": "180cm",
    "weight": "73kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20190063",
    "seasonId": "2025",
    "number": "27",
    "name": "지언학",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 14,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2019",
        "appearances": 20,
        "goals": 1,
        "assists": 2
      },
      {
        "season": "2020",
        "appearances": 16,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2021",
        "appearances": 5,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2022",
        "appearances": 4,
        "goals": 0,
        "assists": 0
      },
      {
        "season": "2023",
        "appearances": 10,
        "goals": 2,
        "assists": 1
      },
      {
        "season": "2024",
        "appearances": 6,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2025",
        "appearances": 14,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [
      "인천",
      "김천",
      "충남아산"
    ],
    "nextClubs": [],
    "birthDate": "1994-03-22",
    "height": "177cm",
    "weight": "77kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250327",
    "seasonId": "2025",
    "number": "77",
    "name": "홍석준",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 17,
    "goals": 1,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 2,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 17,
        "goals": 1,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 12,
        "goals": 0,
        "assists": 0
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "충북청주"
    ],
    "birthDate": "2004-06-02",
    "height": "173cm",
    "weight": "67kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20250207",
    "seasonId": "2025",
    "number": "90",
    "name": "가브리엘",
    "position": "FW",
    "nationality": "브라질",
    "appearances": 21,
    "goals": 8,
    "assists": 0,
    "cleanSheets": 0,
    "yellowCards": 5,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 21,
        "goals": 8,
        "assists": 0
      },
      {
        "season": "2026",
        "appearances": 7,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [],
    "nextClubs": [
      "서울E"
    ],
    "birthDate": "1999-03-16",
    "height": "185cm",
    "weight": "77kg",
    "joinedYear": "2025"
  },
  {
    "id": "2025-kleague-player-20200042",
    "seasonId": "2025",
    "number": "98",
    "name": "이형경",
    "position": "FW",
    "nationality": "대한민국",
    "appearances": 12,
    "goals": 0,
    "assists": 1,
    "cleanSheets": 0,
    "yellowCards": 1,
    "redCards": 0,
    "seasonRecords": [
      {
        "season": "2025",
        "appearances": 12,
        "goals": 0,
        "assists": 1
      }
    ],
    "previousClubs": [],
    "nextClubs": [],
    "birthDate": "1998-05-11",
    "height": "194cm",
    "weight": "85kg",
    "joinedYear": "2025"
  }
] satisfies Player[];

export const pastSquads = {
  "2023": [
    "2023-kleague-player-20090095",
    "2023-kleague-player-20180072",
    "2023-kleague-player-20170179",
    "2023-kleague-player-20130125",
    "2023-kleague-player-20120079",
    "2023-kleague-player-20120149",
    "2023-kleague-player-20230210",
    "2023-kleague-player-20180170",
    "2023-kleague-player-20230198",
    "2023-kleague-player-20230203",
    "2023-kleague-player-20210119",
    "2023-kleague-player-20230209",
    "2023-kleague-player-20210305",
    "2023-kleague-player-20150156",
    "2023-kleague-player-20230206",
    "2023-kleague-player-20110167",
    "2023-kleague-player-20120064",
    "2023-kleague-player-20230199",
    "2023-kleague-player-20230211",
    "2023-kleague-player-20230201",
    "2023-kleague-player-20220100",
    "2023-kleague-player-20230208",
    "2023-kleague-player-20200079",
    "2023-kleague-player-20190153",
    "2023-kleague-player-20230197",
    "2023-kleague-player-20230207",
    "2023-kleague-player-20150096",
    "2023-kleague-player-20230202",
    "2023-kleague-player-20230225",
    "2023-kleague-player-20190089"
  ],
  "2024": [
    "2024-kleague-player-20090095",
    "2024-kleague-player-20180072",
    "2024-kleague-player-20170179",
    "2024-kleague-player-20230204",
    "2024-kleague-player-20120079",
    "2024-kleague-player-20120149",
    "2024-kleague-player-20240196",
    "2024-kleague-player-20230210",
    "2024-kleague-player-20190197",
    "2024-kleague-player-20230069",
    "2024-kleague-player-20200157",
    "2024-kleague-player-20210305",
    "2024-kleague-player-20200080",
    "2024-kleague-player-20240107",
    "2024-kleague-player-20180106",
    "2024-kleague-player-20140040",
    "2024-kleague-player-20110167",
    "2024-kleague-player-20120064",
    "2024-kleague-player-20230199",
    "2024-kleague-player-20230201",
    "2024-kleague-player-20220100",
    "2024-kleague-player-20230040",
    "2024-kleague-player-20240108",
    "2024-kleague-player-20240197",
    "2024-kleague-player-20200079",
    "2024-kleague-player-20240127",
    "2024-kleague-player-20230197",
    "2024-kleague-player-20130332",
    "2024-kleague-player-20230207",
    "2024-kleague-player-20240195",
    "2024-kleague-player-20220123",
    "2024-kleague-player-20180109",
    "2024-kleague-player-20230095",
    "2024-kleague-player-20240335",
    "2024-kleague-player-20190089"
  ],
  "2025": [
    "2025-kleague-player-20180072",
    "2025-kleague-player-20080055",
    "2025-kleague-player-20220160",
    "2025-kleague-player-20250205",
    "2025-kleague-player-20230069",
    "2025-kleague-player-20220158",
    "2025-kleague-player-20160076",
    "2025-kleague-player-20190132",
    "2025-kleague-player-20090093",
    "2025-kleague-player-20220087",
    "2025-kleague-player-20250210",
    "2025-kleague-player-20240109",
    "2025-kleague-player-20240292",
    "2025-kleague-player-20200080",
    "2025-kleague-player-20240069",
    "2025-kleague-player-20180017",
    "2025-kleague-player-20140040",
    "2025-kleague-player-20250308",
    "2025-kleague-player-20180004",
    "2025-kleague-player-20210084",
    "2025-kleague-player-20230020",
    "2025-kleague-player-20190040",
    "2025-kleague-player-20170200",
    "2025-kleague-player-20170012",
    "2025-kleague-player-20240108",
    "2025-kleague-player-20250206",
    "2025-kleague-player-20190153",
    "2025-kleague-player-20250208",
    "2025-kleague-player-20130332",
    "2025-kleague-player-20220151",
    "2025-kleague-player-20220102",
    "2025-kleague-player-20250211",
    "2025-kleague-player-20250209",
    "2025-kleague-player-20190063",
    "2025-kleague-player-20250327",
    "2025-kleague-player-20250207",
    "2025-kleague-player-20200042"
  ]
} satisfies Record<string, string[]>;

export const pastStandings = [
  {
    "seasonId": "2023",
    "rank": "8위",
    "wins": 13,
    "draws": 13,
    "losses": 10,
    "goalsFor": 37,
    "goalsAgainst": 42,
    "points": 52,
    "homeRecord": "8승 5무 5패",
    "awayRecord": "5승 8무 5패",
    "longestWinningRun": "3연승",
    "longestWinlessRun": "9경기",
    "highestScoringMatch": "서울 이랜드 2-3 충북청주 FC"
  },
  {
    "seasonId": "2024",
    "rank": "10위",
    "wins": 8,
    "draws": 16,
    "losses": 12,
    "goalsFor": 32,
    "goalsAgainst": 42,
    "points": 40,
    "homeRecord": "3승 8무 7패",
    "awayRecord": "5승 8무 5패",
    "longestWinningRun": "2연승",
    "longestWinlessRun": "10경기",
    "highestScoringMatch": "충남아산 FC 4-1 충북청주 FC"
  },
  {
    "seasonId": "2025",
    "rank": "12위",
    "wins": 7,
    "draws": 10,
    "losses": 22,
    "goalsFor": 30,
    "goalsAgainst": 62,
    "points": 31,
    "homeRecord": "2승 5무 13패",
    "awayRecord": "5승 5무 9패",
    "longestWinningRun": "2연승",
    "longestWinlessRun": "15경기",
    "highestScoringMatch": "충북청주 FC 3-3 수원 삼성"
  }
] satisfies Standing[];

export const pastCoaches = [
  {
    "id": "2023-coach-1",
    "seasonId": "2023",
    "name": "최윤겸",
    "role": "감독",
    "period": "2023"
  },
  {
    "id": "2024-coach-1",
    "seasonId": "2024",
    "name": "최윤겸",
    "role": "감독",
    "period": "2024"
  },
  {
    "id": "2025-coach-1",
    "seasonId": "2025",
    "name": "권오규",
    "role": "감독",
    "period": "2025"
  }
] satisfies Coach[];

export const pastRankHistory = [
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-6",
    "round": "1R",
    "date": "2023-03-01",
    "rank": 2
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-8",
    "round": "2R",
    "date": "2023-03-04",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-15",
    "round": "3R",
    "date": "2023-03-11",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-20",
    "round": "4R",
    "date": "2023-03-18",
    "rank": 7
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-26",
    "round": "5R",
    "date": "2023-04-01",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-34",
    "round": "6R",
    "date": "2023-04-09",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-37",
    "round": "7R",
    "date": "2023-04-15",
    "rank": 10
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-44",
    "round": "8R",
    "date": "2023-04-18",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-53",
    "round": "9R",
    "date": "2023-04-23",
    "rank": 12
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-58",
    "round": "10R",
    "date": "2023-04-29",
    "rank": 12
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-69",
    "round": "12R",
    "date": "2023-05-06",
    "rank": 12
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-78",
    "round": "13R",
    "date": "2023-05-14",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-84",
    "round": "14R",
    "date": "2023-05-21",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-86",
    "round": "15R",
    "date": "2023-05-27",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-94",
    "round": "16R",
    "date": "2023-06-04",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-101",
    "round": "17R",
    "date": "2023-06-11",
    "rank": 10
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-103",
    "round": "18R",
    "date": "2023-06-24",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-113",
    "round": "19R",
    "date": "2023-07-03",
    "rank": 11
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-115",
    "round": "20R",
    "date": "2023-07-08",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-121",
    "round": "21R",
    "date": "2023-07-15",
    "rank": 10
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-127",
    "round": "22R",
    "date": "2023-07-18",
    "rank": 9
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-133",
    "round": "23R",
    "date": "2023-07-23",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-150",
    "round": "25R",
    "date": "2023-08-08",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-152",
    "round": "26R",
    "date": "2023-10-14",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-158",
    "round": "27R",
    "date": "2023-08-19",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-168",
    "round": "28R",
    "date": "2023-08-27",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-174",
    "round": "29R",
    "date": "2023-08-30",
    "rank": 7
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-176",
    "round": "30R",
    "date": "2023-09-02",
    "rank": 7
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-182",
    "round": "31R",
    "date": "2023-09-16",
    "rank": 6
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-189",
    "round": "32R",
    "date": "2023-09-19",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-193",
    "round": "33R",
    "date": "2023-09-23",
    "rank": 6
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-202",
    "round": "34R",
    "date": "2023-10-01",
    "rank": 5
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-215",
    "round": "36R",
    "date": "2023-10-22",
    "rank": 6
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-220",
    "round": "37R",
    "date": "2023-10-29",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-224",
    "round": "38R",
    "date": "2023-11-11",
    "rank": 8
  },
  {
    "seasonId": "2023",
    "matchId": "2023-kleague-234",
    "round": "39R",
    "date": "2023-11-26",
    "rank": 8
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-4",
    "round": "1R",
    "date": "2024-03-02",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-11",
    "round": "2R",
    "date": "2024-03-10",
    "rank": 2
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-17",
    "round": "3R",
    "date": "2024-03-17",
    "rank": 1
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-19",
    "round": "4R",
    "date": "2024-03-30",
    "rank": 4
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-30",
    "round": "5R",
    "date": "2024-04-07",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-32",
    "round": "6R",
    "date": "2024-04-10",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-37",
    "round": "7R",
    "date": "2024-04-13",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-44",
    "round": "8R",
    "date": "2024-04-20",
    "rank": 4
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-54",
    "round": "9R",
    "date": "2024-04-28",
    "rank": 4
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-60",
    "round": "10R",
    "date": "2024-05-06",
    "rank": 4
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-71",
    "round": "12R",
    "date": "2024-05-15",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-73",
    "round": "13R",
    "date": "2024-05-18",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-79",
    "round": "14R",
    "date": "2024-05-21",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-86",
    "round": "15R",
    "date": "2024-05-26",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-95",
    "round": "16R",
    "date": "2024-06-02",
    "rank": 8
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-101",
    "round": "17R",
    "date": "2024-06-16",
    "rank": 8
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-107",
    "round": "18R",
    "date": "2024-06-23",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-112",
    "round": "19R",
    "date": "2024-06-26",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-123",
    "round": "21R",
    "date": "2024-07-07",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-128",
    "round": "22R",
    "date": "2024-07-13",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-135",
    "round": "23R",
    "date": "2024-07-20",
    "rank": 8
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-143",
    "round": "24R",
    "date": "2024-07-24",
    "rank": 8
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-149",
    "round": "25R",
    "date": "2024-07-29",
    "rank": 7
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-156",
    "round": "26R",
    "date": "2024-08-12",
    "rank": 6
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-157",
    "round": "27R",
    "date": "2024-08-17",
    "rank": 9
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-169",
    "round": "29R",
    "date": "2024-08-31",
    "rank": 9
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-175",
    "round": "30R",
    "date": "2024-09-14",
    "rank": 9
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-183",
    "round": "31R",
    "date": "2024-09-21",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-189",
    "round": "32R",
    "date": "2024-09-24",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-196",
    "round": "33R",
    "date": "2024-09-29",
    "rank": 9
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-202",
    "round": "34R",
    "date": "2024-10-05",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-207",
    "round": "35R",
    "date": "2024-10-19",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-212",
    "round": "36R",
    "date": "2024-10-26",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-217",
    "round": "37R",
    "date": "2024-10-29",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-226",
    "round": "38R",
    "date": "2024-11-03",
    "rank": 10
  },
  {
    "seasonId": "2024",
    "matchId": "2024-kleague-232",
    "round": "39R",
    "date": "2024-11-09",
    "rank": 10
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-7",
    "round": "1R",
    "date": "2025-02-23",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-14",
    "round": "2R",
    "date": "2025-03-03",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-17",
    "round": "3R",
    "date": "2025-03-08",
    "rank": 8
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-23",
    "round": "4R",
    "date": "2025-03-15",
    "rank": 10
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-31",
    "round": "5R",
    "date": "2025-03-29",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-41",
    "round": "6R",
    "date": "2025-04-06",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-47",
    "round": "7R",
    "date": "2025-04-13",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-51",
    "round": "8R",
    "date": "2025-04-19",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-58",
    "round": "9R",
    "date": "2025-04-26",
    "rank": 10
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-67",
    "round": "10R",
    "date": "2025-05-04",
    "rank": 10
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-76",
    "round": "11R",
    "date": "2025-05-11",
    "rank": 10
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-83",
    "round": "12R",
    "date": "2025-05-18",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-86",
    "round": "13R",
    "date": "2025-05-24",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-94",
    "round": "14R",
    "date": "2025-05-31",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-99",
    "round": "15R",
    "date": "2025-06-06",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-108",
    "round": "16R",
    "date": "2025-06-14",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-118",
    "round": "17R",
    "date": "2025-06-22",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-125",
    "round": "18R",
    "date": "2025-06-29",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-129",
    "round": "19R",
    "date": "2025-07-05",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-136",
    "round": "20R",
    "date": "2025-07-12",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-146",
    "round": "21R",
    "date": "2025-07-20",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-150",
    "round": "22R",
    "date": "2025-07-26",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-159",
    "round": "23R",
    "date": "2025-08-02",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-168",
    "round": "24R",
    "date": "2025-08-10",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-173",
    "round": "25R",
    "date": "2025-08-16",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-180",
    "round": "26R",
    "date": "2025-08-24",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-188",
    "round": "27R",
    "date": "2025-08-30",
    "rank": 11
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-192",
    "round": "28R",
    "date": "2025-09-06",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-202",
    "round": "29R",
    "date": "2025-09-14",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-208",
    "round": "30R",
    "date": "2025-09-21",
    "rank": 12
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-213",
    "round": "31R",
    "date": "2025-09-27",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-221",
    "round": "32R",
    "date": "2025-10-04",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-226",
    "round": "33R",
    "date": "2025-10-07",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-233",
    "round": "34R",
    "date": "2025-10-11",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-243",
    "round": "35R",
    "date": "2025-10-19",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-250",
    "round": "36R",
    "date": "2025-10-25",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-254",
    "round": "37R",
    "date": "2025-11-01",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-264",
    "round": "38R",
    "date": "2025-11-09",
    "rank": 13
  },
  {
    "seasonId": "2025",
    "matchId": "2025-kleague-268",
    "round": "39R",
    "date": "2025-11-23",
    "rank": 12
  }
] satisfies RankPoint[];
