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
    "scorers": [
      "파울리뉴 8'",
      "문상윤 5'",
      "조르지 18'",
      "브루노 25'",
      "츠바사 30'"
    ],
    "assists": [],
    "yellowCards": [
      "김원균 1'",
      "김명순 26'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jungin MOON",
      "Yongsu HAN",
      "Hwang Tae-Hyeon",
      "WONSIK KIM",
      "Seonguk GWAK",
      "Bruno Felipe De Oliveira",
      "Dongryul LEE",
      "Sangyun MOON",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Jungtaek LEE",
      "Jung Min-Woo",
      "Hong Sung-Min",
      "Daehan PARK"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 9,
      "possession": 62,
      "corners": 6,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jungin MOON",
      "Yongsu HAN",
      "Hwang Tae-Hyeon",
      "WONSIK KIM",
      "Seonguk GWAK",
      "Bruno Felipe De Oliveira",
      "Dongryul LEE"
    ],
    "awaySubstitutes": [
      "Sangyun MOON",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Jungtaek LEE",
      "Jung Min-Woo",
      "Hong Sung-Min",
      "Daehan PARK"
    ],
    "homeScorers": [
      "브루노 25'",
      "츠바사 30'"
    ],
    "awayScorers": [
      "파울리뉴 8'",
      "문상윤 5'",
      "조르지 18'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 김원균 1'",
      "경고 김명순 26'"
    ]
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
    "scorers": [
      "이영재 30'",
      "김지현 46'"
    ],
    "assists": [],
    "yellowCards": [
      "임승겸 39'",
      "김지운 9'",
      "장혁진 34'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Daehan PARK",
      "Jungtaek LEE",
      "Hong Sung-Min",
      "Sangyun MOON",
      "Jung Min-Woo",
      "Seungjae LEE",
      "KIWOON JUNG",
      "Songhoon SHIN",
      "Jaewoo KIM",
      "Taehyun KIM",
      "DONG HYUN KIM",
      "Chiin JEONG",
      "CHANGHOON KWON",
      "JOONSUK LEE"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 12,
      "possession": 49,
      "corners": 3,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Daehan PARK",
      "Jungtaek LEE",
      "Hong Sung-Min",
      "Sangyun MOON",
      "Jung Min-Woo",
      "Seungjae LEE",
      "KIWOON JUNG"
    ],
    "awaySubstitutes": [
      "Songhoon SHIN",
      "Jaewoo KIM",
      "Taehyun KIM",
      "DONG HYUN KIM",
      "Chiin JEONG",
      "CHANGHOON KWON",
      "JOONSUK LEE"
    ],
    "homeScorers": [],
    "awayScorers": [
      "이영재 30'",
      "김지현 46'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김지운 9'",
      "경고 장혁진 34'"
    ],
    "awayCards": [
      "경고 임승겸 39'"
    ]
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
    "scorers": [
      "파울리뉴 14'",
      "김상준 46'"
    ],
    "assists": [],
    "yellowCards": [
      "피터 8'",
      "조르지 32'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Jungtaek LEE",
      "KIM Jiun",
      "Hong Sung-Min",
      "Sangyun MOON",
      "Jung Min-Woo",
      "Seungjae LEE",
      "Byeonggeun HWANG",
      "Jeongwon EO",
      "Dongsu KIM",
      "Sangjun KIM",
      "Minhyeok LIM",
      "Sangheon LEE",
      "CHOIGiyun CHOI"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 17,
      "possession": 42,
      "corners": 2,
      "fouls": 18
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Jungtaek LEE",
      "KIM Jiun",
      "Hong Sung-Min",
      "Sangyun MOON",
      "Jung Min-Woo",
      "Seungjae LEE"
    ],
    "awaySubstitutes": [
      "Byeonggeun HWANG",
      "Jeongwon EO",
      "Dongsu KIM",
      "Sangjun KIM",
      "Minhyeok LIM",
      "Sangheon LEE",
      "CHOIGiyun CHOI"
    ],
    "homeScorers": [
      "파울리뉴 14'"
    ],
    "awayScorers": [
      "김상준 46'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 8'",
      "경고 조르지 32'"
    ],
    "awayCards": []
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
    "scorers": [
      "피터 8'",
      "김도현 27'",
      "조상준 43'",
      "카스트로 47'"
    ],
    "assists": [],
    "yellowCards": [
      "장혁진 34'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jeonghyeon SON",
      "Youngchan KIM",
      "Mingi LEE",
      "Byeomyong KIM",
      "Sangjun CHO",
      "Gipyo KWON",
      "Kijong WON",
      "Daehan PARK",
      "Lee Min-Hyung",
      "Hong Sung-Min",
      "Jisan YANG",
      "Sangyun MOON",
      "Jung Min-Woo",
      "KIM Jiun"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 8,
      "possession": 55,
      "corners": 10,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jeonghyeon SON",
      "Youngchan KIM",
      "Mingi LEE",
      "Byeomyong KIM",
      "Sangjun CHO",
      "Gipyo KWON",
      "Kijong WON"
    ],
    "awaySubstitutes": [
      "Daehan PARK",
      "Lee Min-Hyung",
      "Hong Sung-Min",
      "Jisan YANG",
      "Sangyun MOON",
      "Jung Min-Woo",
      "KIM Jiun"
    ],
    "homeScorers": [
      "조상준 43'",
      "카스트로 47'"
    ],
    "awayScorers": [
      "피터 8'",
      "김도현 27'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 장혁진 34'"
    ]
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
    "scorers": [
      "이종호 2'",
      "크리스 17'",
      "조르지 37'",
      "크리스 37'",
      "이승재 52'"
    ],
    "assists": [],
    "yellowCards": [
      "김현태 21'",
      "김원균 22'",
      "권순형 42'",
      "신재원 44'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Pilsu CHOE",
      "Sungwook JO",
      "Hyojun JANG",
      "Sihoo YANG",
      "Sanghyeok PARK",
      "Jaewon SHIN",
      "Hanmin JUNG",
      "Sangyun MOON",
      "Hyunjun KU",
      "Seungjae LEE",
      "Jungtaek LEE",
      "Jisan YANG",
      "Jung Min-Woo",
      "Jinwook JEONG"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 12,
      "possession": 38,
      "corners": 2,
      "fouls": 19
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Pilsu CHOE",
      "Sungwook JO",
      "Hyojun JANG",
      "Sihoo YANG",
      "Sanghyeok PARK",
      "Jaewon SHIN",
      "Hanmin JUNG"
    ],
    "awaySubstitutes": [
      "Sangyun MOON",
      "Hyunjun KU",
      "Seungjae LEE",
      "Jungtaek LEE",
      "Jisan YANG",
      "Jung Min-Woo",
      "Jinwook JEONG"
    ],
    "homeScorers": [
      "이종호 2'",
      "크리스 17'",
      "크리스 37'"
    ],
    "awayScorers": [
      "조르지 37'",
      "이승재 52'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김현태 21'",
      "경고 권순형 42'",
      "경고 신재원 44'"
    ],
    "awayCards": [
      "경고 김원균 22'"
    ]
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
    "yellowCards": [
      "홍원진 20'",
      "김민호 32'",
      "피터 38'",
      "홍원진 46'"
    ],
    "redCards": [
      "김태한 42'"
    ],
    "startingLineup": [],
    "substitutes": [
      "Daehan PARK",
      "gun PARK",
      "Jungtaek LEE",
      "KIM Jiun",
      "Kang Min-Seung",
      "Seungjae LEE",
      "Sangyun MOON",
      "Kim Min-Jae",
      "Kyungrok PARK",
      "SEONG MIN KIM",
      "서재민",
      "Seongjae LEE",
      "sungyeon MIN",
      "SUKYONG SON"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 10,
      "possession": 46,
      "corners": 3,
      "fouls": 17
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Daehan PARK",
      "gun PARK",
      "Jungtaek LEE",
      "KIM Jiun",
      "Kang Min-Seung",
      "Seungjae LEE",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Kim Min-Jae",
      "Kyungrok PARK",
      "SEONG MIN KIM",
      "서재민",
      "Seongjae LEE",
      "sungyeon MIN",
      "SUKYONG SON"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍원진 20'",
      "경고 피터 38'",
      "경고 홍원진 46'"
    ],
    "awayCards": [
      "경고 김민호 32'",
      "퇴장 김태한 42'"
    ]
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
    "scorers": [
      "고태원 41'",
      "노건우 44'",
      "하남 30'"
    ],
    "assists": [],
    "yellowCards": [
      "노건우 27'",
      "이승재 30'",
      "여승원 46'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Sung Bin CHO",
      "Jihun CHO",
      "SOOBEOM KIM",
      "Seungmin JEON",
      "Sanghun CHU",
      "PLLANA Leonard",
      "Nam HA",
      "Daehan PARK",
      "Jungtaek LEE",
      "KIM Jiun",
      "Hyunjun KU",
      "Jisan YANG",
      "Dohyun KIM",
      "Seungjae LEE"
    ],
    "stats": {
      "shots": 14,
      "shotsAgainst": 11,
      "possession": 51,
      "corners": 9,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Sung Bin CHO",
      "Jihun CHO",
      "SOOBEOM KIM",
      "Seungmin JEON",
      "Sanghun CHU",
      "PLLANA Leonard",
      "Nam HA"
    ],
    "awaySubstitutes": [
      "Daehan PARK",
      "Jungtaek LEE",
      "KIM Jiun",
      "Hyunjun KU",
      "Jisan YANG",
      "Dohyun KIM",
      "Seungjae LEE"
    ],
    "homeScorers": [
      "고태원 41'",
      "노건우 44'",
      "하남 30'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 노건우 27'",
      "경고 여승원 46'"
    ],
    "awayCards": [
      "경고 이승재 30'"
    ]
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
    "scorers": [
      "장준영 10'",
      "박세직 41'",
      "박민서 3'",
      "이은범 17'"
    ],
    "assists": [],
    "yellowCards": [
      "피터 5'",
      "이은범 15'",
      "이한샘 33'",
      "이학민 41'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Daehan PARK",
      "Jung Min-Woo",
      "Myungsoon KIM",
      "Sangyun MOON",
      "Jungtaek LEE",
      "Lee Han-Saim",
      "Jorge Luiz BARBOSA TEIXEIRA",
      "Park Han-Keun",
      "HAKMIN LEE",
      "Jongkook KIM",
      "Seungmin SONG",
      "Sungho JUNG",
      "ROBSON CARLOS DUARTE",
      "Go Moo-Yul"
    ],
    "stats": {
      "shots": 18,
      "shotsAgainst": 9,
      "possession": 56,
      "corners": 5,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Daehan PARK",
      "Jung Min-Woo",
      "Myungsoon KIM",
      "Sangyun MOON",
      "Jungtaek LEE",
      "Lee Han-Saim",
      "Jorge Luiz BARBOSA TEIXEIRA"
    ],
    "awaySubstitutes": [
      "Park Han-Keun",
      "HAKMIN LEE",
      "Jongkook KIM",
      "Seungmin SONG",
      "Sungho JUNG",
      "ROBSON CARLOS DUARTE",
      "Go Moo-Yul"
    ],
    "homeScorers": [],
    "awayScorers": [
      "장준영 10'",
      "박세직 41'",
      "박민서 3'",
      "이은범 17'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 5'",
      "경고 이한샘 33'"
    ],
    "awayCards": [
      "경고 이은범 15'",
      "경고 이학민 41'"
    ]
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
    "scorers": [
      "안재준 23'",
      "안재준 2'",
      "김선호 16'",
      "닐손주니어 26'"
    ],
    "assists": [],
    "yellowCards": [
      "서명관 17'",
      "장혁진"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Daehan PARK",
      "Lee Min-Hyung",
      "Hyunjun KU",
      "Peter Makrillos",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Sangyun MOON",
      "Lee BeomSoo",
      "Hyungjin PARK",
      "Jaeyoung CHOI",
      "Jeongbin LEE",
      "Leonardo KALIL ABDALA",
      "EuiHyung LEE",
      "Gyumin KIM"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 11,
      "possession": 60,
      "corners": 3,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Daehan PARK",
      "Lee Min-Hyung",
      "Hyunjun KU",
      "Peter Makrillos",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Lee BeomSoo",
      "Hyungjin PARK",
      "Jaeyoung CHOI",
      "Jeongbin LEE",
      "Leonardo KALIL ABDALA",
      "EuiHyung LEE",
      "Gyumin KIM"
    ],
    "homeScorers": [],
    "awayScorers": [
      "안재준 23'",
      "안재준 2'",
      "김선호 16'",
      "닐손주니어 26'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 장혁진"
    ],
    "awayCards": [
      "경고 서명관 17'"
    ]
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
    "scorers": [
      "박재용 39'"
    ],
    "assists": [],
    "yellowCards": [
      "박종현 24'",
      "백동규 35'",
      "안드리고 20'",
      "박진성 23'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Taehoon KIM",
      "An Yong-Woo",
      "Hwang Ki-Wook",
      "SEONGJUN CHO",
      "Hyeongjin KIM",
      "Hajun KIM",
      "Taehee LEE",
      "Jinwook JEONG",
      "Lee Han-Saim",
      "Jisan YANG",
      "KIWOON JUNG",
      "Kang Min-Seung",
      "Jung Min-Woo",
      "Paulo Victor DE MENEZES MELO"
    ],
    "stats": {
      "shots": 18,
      "shotsAgainst": 9,
      "possession": 59,
      "corners": 11,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Taehoon KIM",
      "An Yong-Woo",
      "Hwang Ki-Wook",
      "SEONGJUN CHO",
      "Hyeongjin KIM",
      "Hajun KIM",
      "Taehee LEE"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Lee Han-Saim",
      "Jisan YANG",
      "KIWOON JUNG",
      "Kang Min-Seung",
      "Jung Min-Woo",
      "Paulo Victor DE MENEZES MELO"
    ],
    "homeScorers": [
      "박재용 39'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박종현 24'",
      "경고 백동규 35'",
      "경고 안드리고 20'"
    ],
    "awayCards": [
      "경고 박진성 23'"
    ]
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
    "scorers": [
      "조르지 33'",
      "홍원진 3'",
      "오윤석 9'"
    ],
    "assists": [],
    "yellowCards": [
      "이찬협 18'",
      "오윤석 26'",
      "김명순 27'",
      "박진성 48'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Lee Min-Hyung",
      "KIWOON JUNG",
      "Jisan YANG",
      "Jang Hyeok-Jin",
      "Sangyun MOON",
      "Hyojun KIM",
      "Juhwan KIM",
      "Kim Joo-Heon",
      "Hyunjung KIM",
      "Seokhee HAN",
      "AXEL MOHAMED BAKAYOKO",
      "Jongmin KIM"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 11,
      "possession": 47,
      "corners": 3,
      "fouls": 17
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Lee Min-Hyung",
      "KIWOON JUNG",
      "Jisan YANG",
      "Jang Hyeok-Jin",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Hyojun KIM",
      "Juhwan KIM",
      "Kim Joo-Heon",
      "Hyunjung KIM",
      "Seokhee HAN",
      "AXEL MOHAMED BAKAYOKO",
      "Jongmin KIM"
    ],
    "homeScorers": [
      "조르지 33'",
      "홍원진 3'"
    ],
    "awayScorers": [
      "오윤석 9'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김명순 27'",
      "경고 박진성 48'"
    ],
    "awayCards": [
      "경고 이찬협 18'",
      "경고 오윤석 26'"
    ]
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
    "scorers": [
      "홍원진 6'",
      "피터 19'",
      "이민형 24'"
    ],
    "assists": [],
    "yellowCards": [
      "이현규 25'",
      "구현준 38'",
      "홍원진 28'",
      "김경준 50'",
      "박진성 50'",
      "박진성 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Dohyun KIM",
      "Lee Min-Hyung",
      "Jisan YANG",
      "Jang Hyeok-Jin",
      "Sangyun MOON",
      "Sunwoo KIM",
      "Go Tae-Gyu",
      "Jaemin JEONG",
      "Kim Jin-Hyun",
      "kyung jun KIM",
      "Ji-Yong JEONG",
      "Jutae YUN"
    ],
    "stats": {
      "shots": 15,
      "shotsAgainst": 7,
      "possession": 46,
      "corners": 4,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Dohyun KIM",
      "Lee Min-Hyung",
      "Jisan YANG",
      "Jang Hyeok-Jin",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Sunwoo KIM",
      "Go Tae-Gyu",
      "Jaemin JEONG",
      "Kim Jin-Hyun",
      "kyung jun KIM",
      "Ji-Yong JEONG",
      "Jutae YUN"
    ],
    "homeScorers": [
      "홍원진 6'",
      "피터 19'",
      "이민형 24'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 구현준 38'",
      "경고 홍원진 28'",
      "경고 박진성 50'",
      "경고 박진성 50'"
    ],
    "awayCards": [
      "경고 이현규 25'",
      "경고 김경준 50'"
    ]
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
    "yellowCards": [
      "강윤성 6'",
      "이민형 23'",
      "조영욱 34'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Songhoon SHIN",
      "Taehyun KIM",
      "Youhyeon LEE",
      "Hyeonug KIM",
      "DONG HYUN KIM",
      "JUNBUM KIM",
      "Boncheol GOO",
      "Wonwoo RYU",
      "Lee Min-Hyung",
      "Jounghun LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "KIM Jiun",
      "KIWOON JUNG"
    ],
    "stats": {
      "shots": 20,
      "shotsAgainst": 5,
      "possession": 67,
      "corners": 8,
      "fouls": 6
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Songhoon SHIN",
      "Taehyun KIM",
      "Youhyeon LEE",
      "Hyeonug KIM",
      "DONG HYUN KIM",
      "JUNBUM KIM",
      "Boncheol GOO"
    ],
    "awaySubstitutes": [
      "Wonwoo RYU",
      "Lee Min-Hyung",
      "Jounghun LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "KIM Jiun",
      "KIWOON JUNG"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 강윤성 6'",
      "경고 조영욱 34'"
    ],
    "awayCards": [
      "경고 이민형 23'"
    ]
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
    "scorers": [
      "글레이손 4'",
      "모재현 23'"
    ],
    "assists": [],
    "yellowCards": [
      "모재현 24'",
      "송홍민 8'",
      "정기운 37'",
      "박진성 45'",
      "미란징야 47'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Lee Min-Hyung",
      "Chanwoo LEE",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Peter Makrillos",
      "Sangyun MOON",
      "Dongmin GOH",
      "Mingi LEE",
      "Kanghee LEE",
      "Gipyo KWON",
      "Sangjun CHO",
      "Kijong WON",
      "LUIZ CARLOS PAULINO DE CARVALHO"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 9,
      "possession": 41,
      "corners": 2,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Lee Min-Hyung",
      "Chanwoo LEE",
      "KIWOON JUNG",
      "Seungjae LEE",
      "Peter Makrillos",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Dongmin GOH",
      "Mingi LEE",
      "Kanghee LEE",
      "Gipyo KWON",
      "Sangjun CHO",
      "Kijong WON",
      "LUIZ CARLOS PAULINO DE CARVALHO"
    ],
    "homeScorers": [],
    "awayScorers": [
      "글레이손 4'",
      "모재현 23'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 정기운 37'",
      "경고 박진성 45'"
    ],
    "awayCards": [
      "경고 모재현 24'",
      "경고 송홍민 8'",
      "경고 미란징야 47'"
    ]
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
    "scorers": [
      "조르지 2'",
      "조르지 26'",
      "윤민호 22'"
    ],
    "assists": [],
    "yellowCards": [
      "주닝요 8'",
      "이한샘 32'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Kim Min-Jae",
      "Minho KIM",
      "Seongjae LEE",
      "Jongsuk KIM",
      "SEONG MIN KIM",
      "sungyeon MIN",
      "Paulo Afonso ROCHA JUNIOR",
      "Jinwook JEONG",
      "Chanwoo LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "Seungjae LEE",
      "Seungyeup LEE",
      "KIWOON JUNG"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 10,
      "possession": 64,
      "corners": 7,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Kim Min-Jae",
      "Minho KIM",
      "Seongjae LEE",
      "Jongsuk KIM",
      "SEONG MIN KIM",
      "sungyeon MIN",
      "Paulo Afonso ROCHA JUNIOR"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Chanwoo LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "Seungjae LEE",
      "Seungyeup LEE",
      "KIWOON JUNG"
    ],
    "homeScorers": [
      "윤민호 22'"
    ],
    "awayScorers": [
      "조르지 2'",
      "조르지 26'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 주닝요 8'"
    ],
    "awayCards": [
      "경고 이한샘 32'"
    ]
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
    "scorers": [
      "조르지 16'",
      "피터 6'",
      "조르지 24'",
      "유헤이 36'"
    ],
    "assists": [],
    "yellowCards": [
      "이정택 43'",
      "김도현 47'",
      "피터 22'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Chanwoo LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "KIWOON JUNG",
      "Sung Bin CHO",
      "Shin Il-Soo",
      "Yeo Seungwon",
      "Gunwoo NO",
      "YONGJAE LEE",
      "Sunggyeol PARK",
      "Nam HA"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 14,
      "possession": 34,
      "corners": 3,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Chanwoo LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "Sangyun MOON",
      "KIWOON JUNG"
    ],
    "awaySubstitutes": [
      "Sung Bin CHO",
      "Shin Il-Soo",
      "Yeo Seungwon",
      "Gunwoo NO",
      "YONGJAE LEE",
      "Sunggyeol PARK",
      "Nam HA"
    ],
    "homeScorers": [
      "조르지 16'",
      "피터 6'",
      "조르지 24'"
    ],
    "awayScorers": [
      "유헤이 36'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이정택 43'",
      "경고 김도현 47'",
      "경고 피터 22'"
    ],
    "awayCards": []
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
    "scorers": [
      "피터 1'",
      "김찬 23'"
    ],
    "assists": [],
    "yellowCards": [
      "조르지 5'",
      "문상윤 28'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Byeonggeun HWANG",
      "Jimook CHOI",
      "SEJIN PARK",
      "Hoyeung SUNG",
      "Jeongin PARK",
      "FRANKLIN GEOVANE DE SANTANA CHAGAS",
      "GEONJU CHOI",
      "Jinwook JEONG",
      "Kim Won-Gun",
      "Sangyun MOON",
      "Jisan YANG",
      "KIWOON JUNG",
      "Seungyeup LEE",
      "Seungjae LEE"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 9,
      "possession": 55,
      "corners": 3,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Byeonggeun HWANG",
      "Jimook CHOI",
      "SEJIN PARK",
      "Hoyeung SUNG",
      "Jeongin PARK",
      "FRANKLIN GEOVANE DE SANTANA CHAGAS",
      "GEONJU CHOI"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Kim Won-Gun",
      "Sangyun MOON",
      "Jisan YANG",
      "KIWOON JUNG",
      "Seungyeup LEE",
      "Seungjae LEE"
    ],
    "homeScorers": [
      "김찬 23'"
    ],
    "awayScorers": [
      "피터 1'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 조르지 5'",
      "경고 문상윤 28'"
    ]
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
    "yellowCards": [
      "박상혁 4'",
      "홍원진 15'",
      "조성욱 6'",
      "이민형 32'",
      "양지산 41'",
      "진성욱 44'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Wonwoo RYU",
      "Jisan YANG",
      "Seungyeup LEE",
      "Hyunjun KU",
      "Seungjae LEE",
      "Kim Won-Gun",
      "Sangyun MOON",
      "Youngkwang KIM",
      "Patrick Stacey Murnane FLOTTMANN",
      "Jaewon LEE",
      "Tae YANG",
      "Wonjoon KIM",
      "Seonguk JIN",
      "Christy Rodolphe Manzinga"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 7,
      "possession": 47,
      "corners": 1,
      "fouls": 19
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Wonwoo RYU",
      "Jisan YANG",
      "Seungyeup LEE",
      "Hyunjun KU",
      "Seungjae LEE",
      "Kim Won-Gun",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Youngkwang KIM",
      "Patrick Stacey Murnane FLOTTMANN",
      "Jaewon LEE",
      "Tae YANG",
      "Wonjoon KIM",
      "Seonguk JIN",
      "Christy Rodolphe Manzinga"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍원진 15'",
      "경고 이민형 32'",
      "경고 양지산 41'"
    ],
    "awayCards": [
      "경고 박상혁 4'",
      "경고 조성욱 6'",
      "경고 진성욱 44'"
    ]
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
    "scorers": [
      "조성준 36'",
      "피터 41'",
      "양지산 24'"
    ],
    "assists": [],
    "yellowCards": [
      "피터 22'",
      "장혁진 4'",
      "김정현 20'",
      "이창용 28'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Wonwoo RYU",
      "Jisan YANG",
      "Jung Min-Woo",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "Sangyun MOON",
      "Hyunjun KU",
      "Taehoon KIM",
      "Hwang Ki-Wook",
      "Changbeom HONG",
      "Hyeongjin KIM",
      "Seong CHOE",
      "Daeyoung KOO",
      "Yago Cesar DA SILVA"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 16,
      "possession": 43,
      "corners": 6,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Wonwoo RYU",
      "Jisan YANG",
      "Jung Min-Woo",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "Sangyun MOON",
      "Hyunjun KU"
    ],
    "awaySubstitutes": [
      "Taehoon KIM",
      "Hwang Ki-Wook",
      "Changbeom HONG",
      "Hyeongjin KIM",
      "Seong CHOE",
      "Daeyoung KOO",
      "Yago Cesar DA SILVA"
    ],
    "homeScorers": [
      "피터 41'",
      "양지산 24'"
    ],
    "awayScorers": [
      "조성준 36'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 22'",
      "경고 장혁진 4'"
    ],
    "awayCards": [
      "경고 김정현 20'",
      "경고 이창용 28'"
    ]
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
    "scorers": [
      "윤용호 42'",
      "모따 28'",
      "조르지 39'",
      "신원호 51'"
    ],
    "assists": [],
    "yellowCards": [
      "이한샘 41'",
      "김원균 1'",
      "박준강 3'",
      "파울리뇨 11'",
      "모따 28'",
      "김민준 49'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Minhyeok LIM",
      "Oh Hyun-Gyo",
      "Shin Won-Ho",
      "CHANSU KIMU",
      "Baekgyu JANG",
      "Sukhwa JUNG",
      "Jongmin KIM",
      "Jinwook JEONG",
      "Jisan YANG",
      "Jung Min-Woo",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "gun PARK",
      "Hyunjun KU"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 14,
      "possession": 47,
      "corners": 6,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Minhyeok LIM",
      "Oh Hyun-Gyo",
      "Shin Won-Ho",
      "CHANSU KIMU",
      "Baekgyu JANG",
      "Sukhwa JUNG",
      "Jongmin KIM"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Jung Min-Woo",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "gun PARK",
      "Hyunjun KU"
    ],
    "homeScorers": [
      "윤용호 42'",
      "모따 28'",
      "신원호 51'"
    ],
    "awayScorers": [
      "조르지 39'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박준강 3'",
      "경고 파울리뇨 11'",
      "경고 모따 28'",
      "경고 김민준 49'"
    ],
    "awayCards": [
      "경고 이한샘 41'",
      "경고 김원균 1'"
    ]
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
    "yellowCards": [
      "김원균 47'",
      "피터 50'",
      "이동희 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Juhyun LEE",
      "Myungguan SEO",
      "Hyungjin PARK",
      "Sunho KIM",
      "Kim BOYONG",
      "HONAM KIM",
      "Welo Lupeta Joaquim Manuel",
      "Jinwook JEONG",
      "Jisan YANG",
      "Jung Min-Woo",
      "gun PARK",
      "Seungjae LEE",
      "Kim Won-Gun",
      "KIM Jiun"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 12,
      "possession": 59,
      "corners": 2,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Juhyun LEE",
      "Myungguan SEO",
      "Hyungjin PARK",
      "Sunho KIM",
      "Kim BOYONG",
      "HONAM KIM",
      "Welo Lupeta Joaquim Manuel"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Jung Min-Woo",
      "gun PARK",
      "Seungjae LEE",
      "Kim Won-Gun",
      "KIM Jiun"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이동희 50'"
    ],
    "awayCards": [
      "경고 김원균 47'",
      "경고 피터 50'"
    ]
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
    "scorers": [
      "박정인 31'",
      "피터 15'",
      "조르지 22'"
    ],
    "assists": [],
    "yellowCards": [
      "조르지 17'",
      "송시우 35'",
      "피터 46'",
      "강정묵 3'",
      "유정완 39'"
    ],
    "redCards": [
      "김원균 29'"
    ],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Dohyun KIM",
      "gun PARK",
      "Seungjae LEE",
      "Lee Han-Saim",
      "KIM Jiun",
      "Bosang YOON",
      "WONSIK KIM",
      "Seo Bo-Min",
      "Tsubasa NISHI",
      "Bruno Felipe De Oliveira",
      "Ronan DAVID JERONIMO",
      "Gyungjun BYEON"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 14,
      "possession": 37,
      "corners": 0,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Dohyun KIM",
      "gun PARK",
      "Seungjae LEE",
      "Lee Han-Saim",
      "KIM Jiun"
    ],
    "awaySubstitutes": [
      "Bosang YOON",
      "WONSIK KIM",
      "Seo Bo-Min",
      "Tsubasa NISHI",
      "Bruno Felipe De Oliveira",
      "Ronan DAVID JERONIMO",
      "Gyungjun BYEON"
    ],
    "homeScorers": [
      "피터 15'",
      "조르지 22'"
    ],
    "awayScorers": [
      "박정인 31'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 조르지 17'",
      "경고 피터 46'",
      "퇴장 김원균 29'"
    ],
    "awayCards": [
      "경고 송시우 35'",
      "경고 강정묵 3'",
      "경고 유정완 39'"
    ]
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
    "scorers": [
      "피터 8'",
      "양지산 20'"
    ],
    "assists": [],
    "yellowCards": [
      "김명순 41'",
      "김정호 23'",
      "윤주태 35'",
      "정민우 42'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Sunwoo KIM",
      "kyung jun KIM",
      "YONGHEE JUNGYONGHEE",
      "Jutae YUN",
      "Park Jun-Bae",
      "Tackkyun LEE",
      "Gyu LEE",
      "Hyeonho JUNG",
      "Jung Min-Woo",
      "Seungyeup LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "KIM Jiun",
      "Lee Min-Hyung"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 16,
      "possession": 47,
      "corners": 2,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Sunwoo KIM",
      "kyung jun KIM",
      "YONGHEE JUNGYONGHEE",
      "Jutae YUN",
      "Park Jun-Bae",
      "Tackkyun LEE",
      "Gyu LEE"
    ],
    "awaySubstitutes": [
      "Hyeonho JUNG",
      "Jung Min-Woo",
      "Seungyeup LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "KIM Jiun",
      "Lee Min-Hyung"
    ],
    "homeScorers": [],
    "awayScorers": [
      "피터 8'",
      "양지산 20'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김정호 23'",
      "경고 윤주태 35'"
    ],
    "awayCards": [
      "경고 김명순 41'",
      "경고 정민우 42'"
    ]
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
    "scorers": [
      "이승재 40'"
    ],
    "assists": [],
    "yellowCards": [
      "박건 14'",
      "손석용 28'",
      "이정택 38'",
      "송창석 26'",
      "이한샘 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Jung Min-Woo",
      "Seungyeup LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "Hyunjun KU",
      "Lee Min-Hyung",
      "Lee Sang-Wook",
      "Kyungrok PARK",
      "Sanghyeok LEE",
      "Seongjae LEE",
      "Kwangil PAK",
      "송창석",
      "Paulo Afonso ROCHA JUNIOR"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 9,
      "possession": 47,
      "corners": 2,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Jung Min-Woo",
      "Seungyeup LEE",
      "Seungjae LEE",
      "Jisan YANG",
      "Hyunjun KU",
      "Lee Min-Hyung"
    ],
    "awaySubstitutes": [
      "Lee Sang-Wook",
      "Kyungrok PARK",
      "Sanghyeok LEE",
      "Seongjae LEE",
      "Kwangil PAK",
      "송창석",
      "Paulo Afonso ROCHA JUNIOR"
    ],
    "homeScorers": [
      "이승재 40'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박건 14'",
      "경고 이정택 38'",
      "경고 이한샘 50'"
    ],
    "awayCards": [
      "경고 손석용 28'",
      "경고 송창석 26'"
    ]
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
    "yellowCards": [
      "김명순 33'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Minhyeok LIM",
      "Ohyeon CHA",
      "Shin Won-Ho",
      "CHANSU KIMU",
      "SOVSIC DAMIR",
      "Yoon Yong-Ho",
      "Jongmin KIM",
      "Jinwook JEONG",
      "Seungjae LEE",
      "Jisan YANG",
      "Lee Min-Hyung",
      "Jungtaek LEE",
      "Kim Won-Gun",
      "Sangyun MOON"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 12,
      "possession": 54,
      "corners": 3,
      "fouls": 4
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Minhyeok LIM",
      "Ohyeon CHA",
      "Shin Won-Ho",
      "CHANSU KIMU",
      "SOVSIC DAMIR",
      "Yoon Yong-Ho",
      "Jongmin KIM"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Seungjae LEE",
      "Jisan YANG",
      "Lee Min-Hyung",
      "Jungtaek LEE",
      "Kim Won-Gun",
      "Sangyun MOON"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 김명순 33'"
    ]
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
    "scorers": [
      "조르지 16'",
      "정민우 48'",
      "공민현 51'"
    ],
    "assists": [],
    "yellowCards": [
      "피터 29'",
      "조르지 50'",
      "홍원진 52'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Myungsoon KIM",
      "Jung Min-Woo",
      "Hyunjun KU",
      "Jisan YANG",
      "Kim Won-Gun",
      "Jang Hyeok-Jin",
      "Taehoon KIM",
      "An Yong-Woo",
      "SEONGJUN CHO",
      "JUNGMIN KIM",
      "JEMIN YEON",
      "Kong minhyun",
      "Yago Cesar DA SILVA"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 8,
      "possession": 55,
      "corners": 9,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Myungsoon KIM",
      "Jung Min-Woo",
      "Hyunjun KU",
      "Jisan YANG",
      "Kim Won-Gun",
      "Jang Hyeok-Jin"
    ],
    "awaySubstitutes": [
      "Taehoon KIM",
      "An Yong-Woo",
      "SEONGJUN CHO",
      "JUNGMIN KIM",
      "JEMIN YEON",
      "Kong minhyun",
      "Yago Cesar DA SILVA"
    ],
    "homeScorers": [
      "조르지 16'",
      "정민우 48'"
    ],
    "awayScorers": [
      "공민현 51'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 29'",
      "경고 조르지 50'",
      "경고 홍원진 52'"
    ],
    "awayCards": []
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
    "yellowCards": [
      "김도현 35'",
      "구본철 38'",
      "정치인 29'",
      "정치인 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Joonhong KIM",
      "Taehyun KIM",
      "JUNBUM KIM",
      "Won Du-Jae",
      "Byeongchan CHOE",
      "Chiin JEONG",
      "Lee Young-Jun",
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Jung Min-Woo",
      "Seungjae LEE",
      "Jisan YANG",
      "KIM Jiun",
      "Hyunjun KU"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 4,
      "possession": 70,
      "corners": 7,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Joonhong KIM",
      "Taehyun KIM",
      "JUNBUM KIM",
      "Won Du-Jae",
      "Byeongchan CHOE",
      "Chiin JEONG",
      "Lee Young-Jun"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Jung Min-Woo",
      "Seungjae LEE",
      "Jisan YANG",
      "KIM Jiun",
      "Hyunjun KU"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 구본철 38'",
      "경고 정치인 29'",
      "경고 정치인 50'"
    ],
    "awayCards": [
      "경고 김도현 35'"
    ]
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
    "scorers": [
      "조르지 18'"
    ],
    "assists": [],
    "yellowCards": [
      "홍원진 5'",
      "이민형 36'",
      "고태규 46'",
      "문상윤 26'",
      "양지산 40'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Kim Young-Ho",
      "Kim Jin-Hyun",
      "YONGHEE JUNGYONGHEE",
      "BEOM UO KIM",
      "hyeongyu LEE",
      "Jutae YUN",
      "SEUNGMIN LEE",
      "Jinwook JEONG",
      "Jung Min-Woo",
      "JINSEONG PARK",
      "Hyunjun KU",
      "Jisan YANG",
      "Lee Han-Saim",
      "Sangyun MOON"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 20,
      "possession": 49,
      "corners": 3,
      "fouls": 5
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Kim Young-Ho",
      "Kim Jin-Hyun",
      "YONGHEE JUNGYONGHEE",
      "BEOM UO KIM",
      "hyeongyu LEE",
      "Jutae YUN",
      "SEUNGMIN LEE"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Jung Min-Woo",
      "JINSEONG PARK",
      "Hyunjun KU",
      "Jisan YANG",
      "Lee Han-Saim",
      "Sangyun MOON"
    ],
    "homeScorers": [],
    "awayScorers": [
      "조르지 18'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 고태규 46'"
    ],
    "awayCards": [
      "경고 홍원진 5'",
      "경고 이민형 36'",
      "경고 문상윤 26'",
      "경고 양지산 40'"
    ]
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
    "scorers": [
      "변경준 27'"
    ],
    "assists": [],
    "yellowCards": [
      "박대한 26'",
      "이민형 38'",
      "박진성 39'",
      "이시헌 39'",
      "김수안 4'",
      "박창환 43'",
      "문정인 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Seungyeup LEE",
      "Jungtaek LEE",
      "Seungjae LEE",
      "Kim Won-Gun",
      "Sangyun MOON",
      "Jeongmook KANG",
      "Suan KIM",
      "CHANG HWAN PARK",
      "Yu Jeong-Wan",
      "SI WOO SONG",
      "Dongryul LEE",
      "Ronan DAVID JERONIMO"
    ],
    "stats": {
      "shots": 20,
      "shotsAgainst": 6,
      "possession": 57,
      "corners": 15,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Jisan YANG",
      "Seungyeup LEE",
      "Jungtaek LEE",
      "Seungjae LEE",
      "Kim Won-Gun",
      "Sangyun MOON"
    ],
    "awaySubstitutes": [
      "Jeongmook KANG",
      "Suan KIM",
      "CHANG HWAN PARK",
      "Yu Jeong-Wan",
      "SI WOO SONG",
      "Dongryul LEE",
      "Ronan DAVID JERONIMO"
    ],
    "homeScorers": [],
    "awayScorers": [
      "변경준 27'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박대한 26'",
      "경고 이민형 38'",
      "경고 박진성 39'"
    ],
    "awayCards": [
      "경고 이시헌 39'",
      "경고 김수안 4'",
      "경고 박창환 43'",
      "경고 문정인 50'"
    ]
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
    "scorers": [
      "양지산 18'"
    ],
    "assists": [],
    "yellowCards": [
      "패트릭 9'",
      "이정택 16'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Pilsu CHOE",
      "강의빈",
      "jihun lee",
      "Hyuntae KIM",
      "Denilson DA SILVA DOS SANTOS",
      "Jaewon SHIN",
      "Jiwon PARK",
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Kang Min-Seung",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "KIM Jiun",
      "Hyunjun KU"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 11,
      "possession": 64,
      "corners": 8,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Pilsu CHOE",
      "강의빈",
      "jihun lee",
      "Hyuntae KIM",
      "Denilson DA SILVA DOS SANTOS",
      "Jaewon SHIN",
      "Jiwon PARK"
    ],
    "awaySubstitutes": [
      "Jinwook JEONG",
      "Seungyeup LEE",
      "Kang Min-Seung",
      "Lee Min-Hyung",
      "Seungjae LEE",
      "KIM Jiun",
      "Hyunjun KU"
    ],
    "homeScorers": [],
    "awayScorers": [
      "양지산 18'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 패트릭 9'"
    ],
    "awayCards": [
      "경고 이정택 16'"
    ]
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
    "yellowCards": [
      "장혁진 3'",
      "루페타 22'",
      "이한샘 23'",
      "이승재 15'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Wonwoo RYU",
      "Seungjae LEE",
      "Seungyeup LEE",
      "KIWOON JUNG",
      "Lee Min-Hyung",
      "KIM Jiun",
      "gun PARK",
      "Juhyun LEE",
      "Lee Yong-Hyeok",
      "Sunho KIM",
      "SOOCHEUL CHO",
      "EuiHyung LEE",
      "HONAM KIM",
      "Jiho HAN"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 10,
      "possession": 58,
      "corners": 6,
      "fouls": 18
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Wonwoo RYU",
      "Seungjae LEE",
      "Seungyeup LEE",
      "KIWOON JUNG",
      "Lee Min-Hyung",
      "KIM Jiun",
      "gun PARK"
    ],
    "awaySubstitutes": [
      "Juhyun LEE",
      "Lee Yong-Hyeok",
      "Sunho KIM",
      "SOOCHEUL CHO",
      "EuiHyung LEE",
      "HONAM KIM",
      "Jiho HAN"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 장혁진 3'",
      "경고 이한샘 23'",
      "경고 이승재 15'"
    ],
    "awayCards": [
      "경고 루페타 22'"
    ]
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
    "scorers": [
      "강민규 17'",
      "조르지 39'",
      "이승재 35'",
      "하파엘 41'",
      "박대훈 51'"
    ],
    "assists": [],
    "yellowCards": [
      "홍원진 32'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Hyunho MOON",
      "Bae Soo-Yong",
      "Seongwoo PARK",
      "SEUNGHO KIM",
      "ROBSON CARLOS DUARTE",
      "Wilinton APONZA CARABALI",
      "Raphael SCHORR UTZIG",
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Dohyun KIM",
      "Sangyun MOON",
      "Seungjae LEE",
      "KIM Jiun",
      "gun PARK"
    ],
    "stats": {
      "shots": 19,
      "shotsAgainst": 9,
      "possession": 49,
      "corners": 6,
      "fouls": 4
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Hyunho MOON",
      "Bae Soo-Yong",
      "Seongwoo PARK",
      "SEUNGHO KIM",
      "ROBSON CARLOS DUARTE",
      "Wilinton APONZA CARABALI",
      "Raphael SCHORR UTZIG"
    ],
    "awaySubstitutes": [
      "Wonwoo RYU",
      "Seungyeup LEE",
      "Dohyun KIM",
      "Sangyun MOON",
      "Seungjae LEE",
      "KIM Jiun",
      "gun PARK"
    ],
    "homeScorers": [
      "강민규 17'",
      "하파엘 41'",
      "박대훈 51'"
    ],
    "awayScorers": [
      "조르지 39'",
      "이승재 35'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 홍원진 32'"
    ]
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
    "scorers": [
      "이민형 13'",
      "모재현 45'"
    ],
    "assists": [],
    "yellowCards": [
      "피터 11'",
      "김지운 44'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Daehan PARK",
      "Jisan YANG",
      "Jung Min-Woo",
      "Hyunjun KU",
      "Seungjae LEE",
      "Sangyun MOON",
      "KIM Jiun",
      "Jeonghyeon SON",
      "Youngchan KIM",
      "Junjae LEE",
      "Song Hong-Min",
      "Minseo PARK",
      "Hyeonjin SEOL",
      "Sangjun CHO"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 10,
      "possession": 33,
      "corners": 3,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Daehan PARK",
      "Jisan YANG",
      "Jung Min-Woo",
      "Hyunjun KU",
      "Seungjae LEE",
      "Sangyun MOON",
      "KIM Jiun"
    ],
    "awaySubstitutes": [
      "Jeonghyeon SON",
      "Youngchan KIM",
      "Junjae LEE",
      "Song Hong-Min",
      "Minseo PARK",
      "Hyeonjin SEOL",
      "Sangjun CHO"
    ],
    "homeScorers": [
      "이민형 13'"
    ],
    "awayScorers": [
      "모재현 45'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 11'",
      "경고 김지운 44'"
    ],
    "awayCards": []
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
    "scorers": [
      "플라나 37'",
      "이용재 5'",
      "노건우 18'"
    ],
    "assists": [],
    "yellowCards": [
      "신일수 7'",
      "이찬우 44'",
      "신일수 22'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Dasol Kim",
      "Jihun CHO",
      "Lee Seok-Hyun",
      "Sanghun CHU",
      "Gunwoo NO",
      "Seongjin CHOI",
      "Nam HA",
      "Wonwoo RYU",
      "Seungjae LEE",
      "Jisan YANG",
      "KIWOON JUNG",
      "Hyunjun KU",
      "Sangyun MOON",
      "KIM Jiun"
    ],
    "stats": {
      "shots": 7,
      "shotsAgainst": 25,
      "possession": 46,
      "corners": 3,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Dasol Kim",
      "Jihun CHO",
      "Lee Seok-Hyun",
      "Sanghun CHU",
      "Gunwoo NO",
      "Seongjin CHOI",
      "Nam HA"
    ],
    "awaySubstitutes": [
      "Wonwoo RYU",
      "Seungjae LEE",
      "Jisan YANG",
      "KIWOON JUNG",
      "Hyunjun KU",
      "Sangyun MOON",
      "KIM Jiun"
    ],
    "homeScorers": [
      "플라나 37'",
      "이용재 5'",
      "노건우 18'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 신일수 7'",
      "경고 신일수 22'"
    ],
    "awayCards": [
      "경고 이찬우 44'"
    ]
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
    "scorers": [
      "양지산 20'"
    ],
    "assists": [],
    "yellowCards": [
      "김도현 36'",
      "양지산 21'",
      "이한샘 41'",
      "류원우 50'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Jinwook JEONG",
      "Seungjae LEE",
      "Dohyun KIM",
      "Hyunjun KU",
      "Lee Min-Hyung",
      "Sangyun MOON",
      "KIWOON JUNG",
      "Hyunho MOON",
      "Seongwoo PARK",
      "Jongkook KIM",
      "MIN-SEOK KIM",
      "Hyeseong KIM",
      "Daehoon PARK",
      "Raphael SCHORR UTZIG"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 11,
      "possession": 44,
      "corners": 7,
      "fouls": 18
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Jinwook JEONG",
      "Seungjae LEE",
      "Dohyun KIM",
      "Hyunjun KU",
      "Lee Min-Hyung",
      "Sangyun MOON",
      "KIWOON JUNG"
    ],
    "awaySubstitutes": [
      "Hyunho MOON",
      "Seongwoo PARK",
      "Jongkook KIM",
      "MIN-SEOK KIM",
      "Hyeseong KIM",
      "Daehoon PARK",
      "Raphael SCHORR UTZIG"
    ],
    "homeScorers": [
      "양지산 20'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김도현 36'",
      "경고 양지산 21'",
      "경고 이한샘 41'",
      "경고 류원우 50'"
    ],
    "awayCards": []
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
    "scorers": [
      "페신 23'",
      "조르지 49'"
    ],
    "assists": [],
    "yellowCards": [
      "이정택 8'",
      "이한샘 43'",
      "정기운 49'",
      "박동진 49'",
      "정진욱 53'"
    ],
    "redCards": [],
    "startingLineup": [],
    "substitutes": [
      "Byeonggeun HWANG",
      "Sanggi MIN",
      "Wonjin JUNG",
      "Hoyeung SUNG",
      "Sangyoon KANG",
      "Seunggi LEE",
      "Dongjin PARK",
      "Wonwoo RYU",
      "Jung Min-Woo",
      "Jooyoung LEE",
      "KIWOON JUNG",
      "Hyunjun KU",
      "Sangyun MOON",
      "gun PARK"
    ],
    "stats": {
      "shots": 18,
      "shotsAgainst": 6,
      "possession": 60,
      "corners": 8,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [],
    "awayLineup": [],
    "homeSubstitutes": [
      "Byeonggeun HWANG",
      "Sanggi MIN",
      "Wonjin JUNG",
      "Hoyeung SUNG",
      "Sangyoon KANG",
      "Seunggi LEE",
      "Dongjin PARK"
    ],
    "awaySubstitutes": [
      "Wonwoo RYU",
      "Jung Min-Woo",
      "Jooyoung LEE",
      "KIWOON JUNG",
      "Hyunjun KU",
      "Sangyun MOON",
      "gun PARK"
    ],
    "homeScorers": [
      "페신 23'"
    ],
    "awayScorers": [
      "조르지 49'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박동진 49'"
    ],
    "awayCards": [
      "경고 이정택 8'",
      "경고 이한샘 43'",
      "경고 정기운 49'",
      "경고 정진욱 53'"
    ]
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
    "scorers": [
      "윤민호 4'"
    ],
    "assists": [],
    "yellowCards": [
      "이한샘 17'",
      "추상훈 16'",
      "발디비아 43'"
    ],
    "redCards": [
      "윤민호 56'"
    ],
    "startingLineup": [
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "장혁진",
      "김명순",
      "홍원진",
      "오두",
      "김영환",
      "윤민호",
      "최봉진",
      "추상훈",
      "고태원",
      "유지하",
      "이규혁",
      "조지훈",
      "하남",
      "발디비아",
      "유헤이",
      "조재훈",
      "플라카"
    ],
    "substitutes": [
      "박대한",
      "전현병",
      "베니시오",
      "이강한",
      "문상윤",
      "양지훈",
      "정민우",
      "조성빈",
      "김종필",
      "김용환",
      "이석현",
      "노건우",
      "몬타노",
      "최성진"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 5,
      "possession": 41,
      "corners": 2,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "장혁진",
      "김명순",
      "홍원진",
      "오두",
      "김영환",
      "윤민호"
    ],
    "awayLineup": [
      "최봉진",
      "추상훈",
      "고태원",
      "유지하",
      "이규혁",
      "조지훈",
      "하남",
      "발디비아",
      "유헤이",
      "조재훈",
      "플라카"
    ],
    "homeSubstitutes": [
      "박대한",
      "전현병",
      "베니시오",
      "이강한",
      "문상윤",
      "양지훈",
      "정민우"
    ],
    "awaySubstitutes": [
      "조성빈",
      "김종필",
      "김용환",
      "이석현",
      "노건우",
      "몬타노",
      "최성진"
    ],
    "homeScorers": [
      "윤민호 4'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이한샘 17'",
      "퇴장 윤민호 56'"
    ],
    "awayCards": [
      "경고 추상훈 16'",
      "경고 발디비아 43'"
    ]
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
    "scorers": [
      "모따 26'",
      "이강한 35'",
      "이민형 50'"
    ],
    "assists": [],
    "yellowCards": [
      "최석현 28'",
      "신형민 14'",
      "이강한 19'",
      "이민형 22'",
      "이광진 22'",
      "홍원진 49'"
    ],
    "redCards": [
      "모따 32'",
      "파울리뇨 19'"
    ],
    "startingLineup": [
      "제종현",
      "오현교",
      "이웅희",
      "김성주",
      "구대영",
      "파울리뇨",
      "이광진",
      "신형민",
      "모따",
      "박찬교",
      "윤재석",
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "김민식",
      "김영환",
      "김명순",
      "홍원진",
      "정성호",
      "파울리뉴",
      "양지훈"
    ],
    "substitutes": [
      "김륜도",
      "에리키",
      "허승우",
      "김성준",
      "김대중",
      "오윤석",
      "강정묵",
      "박대한",
      "구현준",
      "베니시오",
      "이강한",
      "문상윤",
      "미유키",
      "정민우"
    ],
    "stats": {
      "shots": 5,
      "shotsAgainst": 17,
      "possession": 36,
      "corners": 2,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "제종현",
      "오현교",
      "이웅희",
      "김성주",
      "구대영",
      "파울리뇨",
      "이광진",
      "신형민",
      "모따",
      "박찬교",
      "윤재석"
    ],
    "awayLineup": [
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "김민식",
      "김영환",
      "김명순",
      "홍원진",
      "정성호",
      "파울리뉴",
      "양지훈"
    ],
    "homeSubstitutes": [
      "김륜도",
      "에리키",
      "허승우",
      "김성준",
      "김대중",
      "오윤석",
      "강정묵"
    ],
    "awaySubstitutes": [
      "박대한",
      "구현준",
      "베니시오",
      "이강한",
      "문상윤",
      "미유키",
      "정민우"
    ],
    "homeScorers": [
      "모따 26'"
    ],
    "awayScorers": [
      "이강한 35'",
      "이민형 50'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 신형민 14'",
      "경고 이광진 22'",
      "퇴장 모따 32'",
      "퇴장 파울리뇨 19'"
    ],
    "awayCards": [
      "경고 최석현 28'",
      "경고 이강한 19'",
      "경고 이민형 22'",
      "경고 홍원진 49'"
    ]
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
    "scorers": [
      "단레이 25'",
      "구현준 29'"
    ],
    "assists": [],
    "yellowCards": [
      "유정완 15'",
      "김영찬 41'",
      "김정현 47'",
      "이한샘 8'",
      "구현준 32'",
      "최규현 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "홍원진",
      "정성호",
      "파울리뉴",
      "양지훈",
      "김다솔",
      "이창용",
      "김영찬",
      "김정현",
      "마테우스",
      "최규현",
      "유정완",
      "이태희",
      "주현우",
      "단레이",
      "이재용"
    ],
    "substitutes": [
      "류원우",
      "김민식",
      "베니시오",
      "이강한",
      "문상윤",
      "미유키",
      "정민우",
      "김성동",
      "박종현",
      "야고",
      "한가람",
      "홍창범",
      "김운",
      "전승민"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 10,
      "possession": 59,
      "corners": 1,
      "fouls": 19
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "홍원진",
      "정성호",
      "파울리뉴",
      "양지훈"
    ],
    "awayLineup": [
      "김다솔",
      "이창용",
      "김영찬",
      "김정현",
      "마테우스",
      "최규현",
      "유정완",
      "이태희",
      "주현우",
      "단레이",
      "이재용"
    ],
    "homeSubstitutes": [
      "류원우",
      "김민식",
      "베니시오",
      "이강한",
      "문상윤",
      "미유키",
      "정민우"
    ],
    "awaySubstitutes": [
      "김성동",
      "박종현",
      "야고",
      "한가람",
      "홍창범",
      "김운",
      "전승민"
    ],
    "homeScorers": [
      "구현준 29'"
    ],
    "awayScorers": [
      "단레이 25'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이한샘 8'",
      "경고 구현준 32'"
    ],
    "awayCards": [
      "경고 유정완 15'",
      "경고 김영찬 41'",
      "경고 김정현 47'",
      "경고 최규현 48'"
    ]
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
    "scorers": [
      "이학민 30'",
      "홍원진 32'",
      "강민규 17'",
      "강민규 28'",
      "황기욱 46'"
    ],
    "assists": [],
    "yellowCards": [
      "김종석 26'",
      "이한샘 26'",
      "최석현 26'",
      "최석현 49'",
      "안데르손 44'"
    ],
    "redCards": [],
    "startingLineup": [
      "신송훈",
      "최희원",
      "이학민",
      "박병현",
      "강준혁",
      "황기욱",
      "김종석",
      "정마호",
      "강민규",
      "주닝요",
      "김승호",
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "홍원진",
      "파울리뉴",
      "양지훈",
      "윤민호"
    ],
    "substitutes": [
      "박한근",
      "박종민",
      "최예훈",
      "배수용",
      "박세직",
      "정세준",
      "안데르손",
      "정진욱",
      "베니시오",
      "이강한",
      "장혁진",
      "김선민",
      "오두",
      "정민우"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 6,
      "possession": 63,
      "corners": 3,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "신송훈",
      "최희원",
      "이학민",
      "박병현",
      "강준혁",
      "황기욱",
      "김종석",
      "정마호",
      "강민규",
      "주닝요",
      "김승호"
    ],
    "awayLineup": [
      "류원우",
      "이한샘",
      "이민형",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "홍원진",
      "파울리뉴",
      "양지훈",
      "윤민호"
    ],
    "homeSubstitutes": [
      "박한근",
      "박종민",
      "최예훈",
      "배수용",
      "박세직",
      "정세준",
      "안데르손"
    ],
    "awaySubstitutes": [
      "정진욱",
      "베니시오",
      "이강한",
      "장혁진",
      "김선민",
      "오두",
      "정민우"
    ],
    "homeScorers": [
      "이학민 30'",
      "강민규 17'",
      "강민규 28'",
      "황기욱 46'"
    ],
    "awayScorers": [
      "홍원진 32'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김종석 26'",
      "경고 안데르손 44'"
    ],
    "awayCards": [
      "경고 이한샘 26'",
      "경고 최석현 26'",
      "경고 최석현 49'"
    ]
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
    "scorers": [
      "김현 53'"
    ],
    "assists": [],
    "yellowCards": [
      "박대한 23'",
      "오두 2'",
      "툰가라 2'",
      "정민우 21'",
      "홍원진 23'",
      "박대원 28'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "최석현",
      "장혁진",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "오두",
      "윤민호",
      "양형모",
      "장석환",
      "한호강",
      "조윤성",
      "이시영",
      "유제호",
      "카즈키",
      "툰가라",
      "전진우",
      "이상민",
      "뮬리치"
    ],
    "substitutes": [
      "류원우",
      "이민형",
      "베니시오",
      "양지훈",
      "미유키",
      "강민승",
      "정민우",
      "조성훈",
      "백동규",
      "박대원",
      "이종성",
      "김현",
      "김주찬",
      "손석용"
    ],
    "stats": {
      "shots": 7,
      "shotsAgainst": 13,
      "possession": 46,
      "corners": 0,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "최석현",
      "장혁진",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "오두",
      "윤민호"
    ],
    "awayLineup": [
      "양형모",
      "장석환",
      "한호강",
      "조윤성",
      "이시영",
      "유제호",
      "카즈키",
      "툰가라",
      "전진우",
      "이상민",
      "뮬리치"
    ],
    "homeSubstitutes": [
      "류원우",
      "이민형",
      "베니시오",
      "양지훈",
      "미유키",
      "강민승",
      "정민우"
    ],
    "awaySubstitutes": [
      "조성훈",
      "백동규",
      "박대원",
      "이종성",
      "김현",
      "김주찬",
      "손석용"
    ],
    "homeScorers": [],
    "awayScorers": [
      "김현 53'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박대한 23'",
      "경고 오두 2'",
      "경고 정민우 21'",
      "경고 홍원진 23'"
    ],
    "awayCards": [
      "경고 툰가라 2'",
      "경고 박대원 28'"
    ]
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
    "yellowCards": [
      "이한샘 33'",
      "박경록 39'",
      "장윤호 14'",
      "이강한 32'",
      "브루노 50'"
    ],
    "redCards": [],
    "startingLineup": [
      "류원우",
      "이한샘",
      "구현준",
      "최석현",
      "장혁진",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "양지훈",
      "윤민호",
      "손정현",
      "박경록",
      "김민호",
      "김현훈",
      "서재민",
      "장윤호",
      "최재훈",
      "이종현",
      "김경준",
      "루이스",
      "권순호"
    ],
    "substitutes": [
      "박대한",
      "이민형",
      "홍성민",
      "미유키",
      "파울리뉴",
      "정민우",
      "이상욱",
      "정한철",
      "서보민",
      "허동호",
      "이환희",
      "브루노",
      "플라나"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 6,
      "possession": 68,
      "corners": 1,
      "fouls": 5
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "류원우",
      "이한샘",
      "구현준",
      "최석현",
      "장혁진",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "양지훈",
      "윤민호"
    ],
    "awayLineup": [
      "손정현",
      "박경록",
      "김민호",
      "김현훈",
      "서재민",
      "장윤호",
      "최재훈",
      "이종현",
      "김경준",
      "루이스",
      "권순호"
    ],
    "homeSubstitutes": [
      "박대한",
      "이민형",
      "홍성민",
      "미유키",
      "파울리뉴",
      "정민우"
    ],
    "awaySubstitutes": [
      "이상욱",
      "정한철",
      "서보민",
      "허동호",
      "이환희",
      "브루노",
      "플라나"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이한샘 33'",
      "경고 이강한 32'"
    ],
    "awayCards": [
      "경고 박경록 39'",
      "경고 장윤호 14'",
      "경고 브루노 50'"
    ]
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
    "scorers": [
      "정민우 27'",
      "도동현 35'"
    ],
    "assists": [],
    "yellowCards": [
      "홍원진 22'"
    ],
    "redCards": [],
    "startingLineup": [
      "고동민",
      "우주성",
      "김형진",
      "이찬욱",
      "이민기",
      "이준재",
      "송홍민",
      "이민혁",
      "무셀라",
      "원기종",
      "아라불리",
      "류원우",
      "구현준",
      "홍성민",
      "최석현",
      "김명순",
      "장혁진",
      "김선민",
      "이강한",
      "정민우",
      "홍원진",
      "정성호"
    ],
    "substitutes": [
      "김민준",
      "박재환",
      "박원재",
      "정현철",
      "도동현",
      "박민서",
      "윤주태",
      "박대한",
      "이한샘",
      "이민형",
      "문상윤",
      "양지훈",
      "미유키",
      "윤민호"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 13,
      "possession": 57,
      "corners": 4,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "고동민",
      "우주성",
      "김형진",
      "이찬욱",
      "이민기",
      "이준재",
      "송홍민",
      "이민혁",
      "무셀라",
      "원기종",
      "아라불리"
    ],
    "awayLineup": [
      "류원우",
      "구현준",
      "홍성민",
      "최석현",
      "김명순",
      "장혁진",
      "김선민",
      "이강한",
      "정민우",
      "홍원진",
      "정성호"
    ],
    "homeSubstitutes": [
      "김민준",
      "박재환",
      "박원재",
      "정현철",
      "도동현",
      "박민서",
      "윤주태"
    ],
    "awaySubstitutes": [
      "박대한",
      "이한샘",
      "이민형",
      "문상윤",
      "양지훈",
      "미유키",
      "윤민호"
    ],
    "homeScorers": [
      "도동현 35'"
    ],
    "awayScorers": [
      "정민우 27'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 홍원진 22'"
    ]
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
    "scorers": [
      "양시후 16'",
      "파울리뉴 19'",
      "파울리뉴 22'"
    ],
    "assists": [],
    "yellowCards": [
      "김선민 4'",
      "이강한 40'",
      "정승용 44'",
      "김주원 51'"
    ],
    "redCards": [],
    "startingLineup": [
      "유상훈",
      "정승용",
      "유선",
      "김주원",
      "신재원",
      "이준상",
      "정원진",
      "양시후",
      "김정환",
      "후이즈",
      "이정협",
      "박대한",
      "이한샘",
      "구현준",
      "최석현",
      "김영환",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "장혁진",
      "윤민호"
    ],
    "substitutes": [
      "최필수",
      "김훈민",
      "조성욱",
      "한석종",
      "양태양",
      "박지원",
      "크리스",
      "류원우",
      "이민형",
      "베니시오",
      "문상윤",
      "양지훈",
      "파울리뉴",
      "정민우"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 16,
      "possession": 42,
      "corners": 6,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "유상훈",
      "정승용",
      "유선",
      "김주원",
      "신재원",
      "이준상",
      "정원진",
      "양시후",
      "김정환",
      "후이즈",
      "이정협"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "최석현",
      "김영환",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "장혁진",
      "윤민호"
    ],
    "homeSubstitutes": [
      "최필수",
      "김훈민",
      "조성욱",
      "한석종",
      "양태양",
      "박지원",
      "크리스"
    ],
    "awaySubstitutes": [
      "류원우",
      "이민형",
      "베니시오",
      "문상윤",
      "양지훈",
      "파울리뉴",
      "정민우"
    ],
    "homeScorers": [
      "양시후 16'"
    ],
    "awayScorers": [
      "파울리뉴 19'",
      "파울리뉴 22'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 정승용 44'",
      "경고 김주원 51'"
    ],
    "awayCards": [
      "경고 김선민 4'",
      "경고 이강한 40'"
    ]
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
    "yellowCards": [
      "홍원진 15'",
      "최재영 15'",
      "카즈 18'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "김선민",
      "홍원진",
      "장혁진",
      "윤민호",
      "김형근",
      "정희웅",
      "닐손주니어",
      "전인규",
      "김선호",
      "정호진",
      "카즈",
      "김동현",
      "최재영",
      "최병찬",
      "한지호"
    ],
    "substitutes": [
      "류원우",
      "이민형",
      "김지훈",
      "문상윤",
      "양지훈",
      "파울리뉴",
      "정민우",
      "설현빈",
      "이상혁",
      "박형진",
      "유승현",
      "이정빈",
      "박호민",
      "바사니"
    ],
    "stats": {
      "shots": 4,
      "shotsAgainst": 11,
      "possession": 55,
      "corners": 3,
      "fouls": 16
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "구현준",
      "김영환",
      "김명순",
      "김선민",
      "홍원진",
      "장혁진",
      "윤민호"
    ],
    "awayLineup": [
      "김형근",
      "정희웅",
      "닐손주니어",
      "전인규",
      "김선호",
      "정호진",
      "카즈",
      "김동현",
      "최재영",
      "최병찬",
      "한지호"
    ],
    "homeSubstitutes": [
      "류원우",
      "이민형",
      "김지훈",
      "문상윤",
      "양지훈",
      "파울리뉴",
      "정민우"
    ],
    "awaySubstitutes": [
      "설현빈",
      "이상혁",
      "박형진",
      "유승현",
      "이정빈",
      "박호민",
      "바사니"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍원진 15'"
    ],
    "awayCards": [
      "경고 최재영 15'",
      "경고 카즈 18'"
    ]
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
    "scorers": [
      "브루노 실바 9'",
      "김명순 12'"
    ],
    "assists": [],
    "yellowCards": [
      "김선민 45'",
      "차승현 50'"
    ],
    "redCards": [],
    "startingLineup": [
      "문정인",
      "박민서",
      "김민규",
      "김오규",
      "황태현",
      "오스마르",
      "이동률",
      "박창환",
      "서재민",
      "브루노 실바",
      "이코바",
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "최석현",
      "미유키",
      "김선민",
      "홍원진",
      "장혁진",
      "김영환",
      "정민우"
    ],
    "substitutes": [
      "이기현",
      "신세계",
      "차승현",
      "정재용",
      "박정인",
      "고무열",
      "변경준",
      "류원우",
      "이민형",
      "김지훈",
      "김명순",
      "양지훈",
      "파울리뉴",
      "윤민호"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 9,
      "possession": 49,
      "corners": 8,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "문정인",
      "박민서",
      "김민규",
      "김오규",
      "황태현",
      "오스마르",
      "이동률",
      "박창환",
      "서재민",
      "브루노 실바",
      "이코바"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "최석현",
      "미유키",
      "김선민",
      "홍원진",
      "장혁진",
      "김영환",
      "정민우"
    ],
    "homeSubstitutes": [
      "이기현",
      "신세계",
      "차승현",
      "정재용",
      "박정인",
      "고무열",
      "변경준"
    ],
    "awaySubstitutes": [
      "류원우",
      "이민형",
      "김지훈",
      "김명순",
      "양지훈",
      "파울리뉴",
      "윤민호"
    ],
    "homeScorers": [
      "브루노 실바 9'"
    ],
    "awayScorers": [
      "김명순 12'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 차승현 50'"
    ],
    "awayCards": [
      "경고 김선민 45'"
    ]
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
    "yellowCards": [
      "이민형 46'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "이강한",
      "김지훈",
      "김영환",
      "김선민",
      "장혁진",
      "김명순",
      "정민우",
      "구상민",
      "성호영1",
      "이한도",
      "황준호",
      "허승찬",
      "최건주",
      "천지현",
      "임민혁",
      "페신",
      "안병준",
      "라마스"
    ],
    "substitutes": [
      "류원우",
      "이민형",
      "양지훈",
      "미유키",
      "홍원진",
      "파울리뉴",
      "윤민호",
      "황병근",
      "알리쿨로프",
      "이동수",
      "손휘",
      "김도현",
      "이동훈",
      "이상준"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 10,
      "possession": 50,
      "corners": 3,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "이강한",
      "김지훈",
      "김영환",
      "김선민",
      "장혁진",
      "김명순",
      "정민우"
    ],
    "awayLineup": [
      "구상민",
      "성호영1",
      "이한도",
      "황준호",
      "허승찬",
      "최건주",
      "천지현",
      "임민혁",
      "페신",
      "안병준",
      "라마스"
    ],
    "homeSubstitutes": [
      "류원우",
      "이민형",
      "양지훈",
      "미유키",
      "홍원진",
      "파울리뉴",
      "윤민호"
    ],
    "awaySubstitutes": [
      "황병근",
      "알리쿨로프",
      "이동수",
      "손휘",
      "김도현",
      "이동훈",
      "이상준"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이민형 46'"
    ],
    "awayCards": []
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
    "yellowCards": [
      "이한샘 25'",
      "장혁진 46'",
      "김명순 5'",
      "베니시오 13'"
    ],
    "redCards": [],
    "startingLineup": [
      "이준희",
      "고태규",
      "김재성",
      "김정호",
      "최한솔",
      "노경호",
      "손재희",
      "이택근",
      "양세영",
      "김진현",
      "강준모",
      "박대한",
      "이한샘",
      "홍성민",
      "베니시오",
      "장혁진",
      "최석현",
      "김명순",
      "김선민",
      "홍원진",
      "파울리뉴",
      "윤민호"
    ],
    "substitutes": [
      "주현성",
      "이지훈",
      "김도윤",
      "정용희",
      "김범수",
      "박준배",
      "심태웅",
      "류원우",
      "구현준",
      "이민형",
      "양지훈",
      "미유키",
      "오두",
      "정민우"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 6,
      "possession": 42,
      "corners": 3,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이준희",
      "고태규",
      "김재성",
      "김정호",
      "최한솔",
      "노경호",
      "손재희",
      "이택근",
      "양세영",
      "김진현",
      "강준모"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "홍성민",
      "베니시오",
      "장혁진",
      "최석현",
      "김명순",
      "김선민",
      "홍원진",
      "파울리뉴",
      "윤민호"
    ],
    "homeSubstitutes": [
      "주현성",
      "이지훈",
      "김도윤",
      "정용희",
      "김범수",
      "박준배",
      "심태웅"
    ],
    "awaySubstitutes": [
      "류원우",
      "구현준",
      "이민형",
      "양지훈",
      "미유키",
      "오두",
      "정민우"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 이한샘 25'",
      "경고 장혁진 46'",
      "경고 김명순 5'",
      "경고 베니시오 13'"
    ]
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
    "scorers": [
      "발디비아 29'",
      "오두 34'"
    ],
    "assists": [],
    "yellowCards": [
      "최석현 20'",
      "베니시오 27'"
    ],
    "redCards": [],
    "startingLineup": [
      "최봉진",
      "김동욱",
      "고태원",
      "신일수",
      "김예성",
      "조지훈",
      "몬타노",
      "노건우",
      "발디비아",
      "박태용",
      "김종민",
      "박대한",
      "구현준",
      "이민형",
      "베니시오",
      "최석현",
      "양지훈",
      "김영환",
      "김명순",
      "김선민",
      "홍원진",
      "정민우"
    ],
    "substitutes": [
      "박주원",
      "홍석현",
      "이후권",
      "김용환",
      "유헤이",
      "조재훈",
      "하남",
      "류원우",
      "전현병",
      "이강한",
      "장혁진",
      "미유키",
      "파울리뉴",
      "오두"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 6,
      "possession": 39,
      "corners": 2,
      "fouls": 6
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "최봉진",
      "김동욱",
      "고태원",
      "신일수",
      "김예성",
      "조지훈",
      "몬타노",
      "노건우",
      "발디비아",
      "박태용",
      "김종민"
    ],
    "awayLineup": [
      "박대한",
      "구현준",
      "이민형",
      "베니시오",
      "최석현",
      "양지훈",
      "김영환",
      "김명순",
      "김선민",
      "홍원진",
      "정민우"
    ],
    "homeSubstitutes": [
      "박주원",
      "홍석현",
      "이후권",
      "김용환",
      "유헤이",
      "조재훈",
      "하남"
    ],
    "awaySubstitutes": [
      "류원우",
      "전현병",
      "이강한",
      "장혁진",
      "미유키",
      "파울리뉴",
      "오두"
    ],
    "homeScorers": [
      "발디비아 29'"
    ],
    "awayScorers": [
      "오두 34'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 최석현 20'",
      "경고 베니시오 27'"
    ]
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
    "scorers": [
      "정성호 3'"
    ],
    "assists": [],
    "yellowCards": [
      "정성호 22'",
      "우주성 44'",
      "파울리뉴 49'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "이강한",
      "장혁진",
      "김선민",
      "홍원진",
      "정성호",
      "김지훈",
      "강민승",
      "김민준",
      "우주성",
      "이강희",
      "김형진",
      "이민기",
      "송홍민",
      "도동현",
      "이민혁",
      "박원재",
      "윤주태",
      "박민서"
    ],
    "substitutes": [
      "정진욱",
      "이민형",
      "김민식",
      "양지훈",
      "미유키",
      "파울리뉴",
      "오두",
      "고동민",
      "박재환",
      "이준재",
      "김형원",
      "조상준",
      "설현진",
      "조향기"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 8,
      "possession": 50,
      "corners": 3,
      "fouls": 20
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "베니시오",
      "최석현",
      "이강한",
      "장혁진",
      "김선민",
      "홍원진",
      "정성호",
      "김지훈",
      "강민승"
    ],
    "awayLineup": [
      "김민준",
      "우주성",
      "이강희",
      "김형진",
      "이민기",
      "송홍민",
      "도동현",
      "이민혁",
      "박원재",
      "윤주태",
      "박민서"
    ],
    "homeSubstitutes": [
      "정진욱",
      "이민형",
      "김민식",
      "양지훈",
      "미유키",
      "파울리뉴",
      "오두"
    ],
    "awaySubstitutes": [
      "고동민",
      "박재환",
      "이준재",
      "김형원",
      "조상준",
      "설현진",
      "조향기"
    ],
    "homeScorers": [
      "정성호 3'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 정성호 22'",
      "경고 파울리뉴 49'"
    ],
    "awayCards": [
      "경고 우주성 44'"
    ]
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
    "scorers": [
      "최규현 13'",
      "김동진 41'"
    ],
    "assists": [],
    "yellowCards": [
      "오두 23'",
      "이태희 29'",
      "파울리뉴 2'",
      "김정현 34'"
    ],
    "redCards": [],
    "startingLineup": [
      "김다솔",
      "이창용",
      "김동진",
      "김하준",
      "이태희",
      "최규현",
      "리영직",
      "최성범",
      "주현우",
      "마테우스",
      "단레이",
      "박대한",
      "이한샘",
      "이민형",
      "베니시오",
      "강민승",
      "최석현",
      "김명순",
      "김선민",
      "홍원진",
      "정성호",
      "오두"
    ],
    "substitutes": [
      "이윤오",
      "김민호",
      "김영찬",
      "김정현",
      "야고",
      "김운",
      "이민수",
      "정진욱",
      "전현병",
      "이강한",
      "장혁진",
      "문상윤",
      "파울리뉴",
      "정민우"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 7,
      "possession": 45,
      "corners": 9,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김다솔",
      "이창용",
      "김동진",
      "김하준",
      "이태희",
      "최규현",
      "리영직",
      "최성범",
      "주현우",
      "마테우스",
      "단레이"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "이민형",
      "베니시오",
      "강민승",
      "최석현",
      "김명순",
      "김선민",
      "홍원진",
      "정성호",
      "오두"
    ],
    "homeSubstitutes": [
      "이윤오",
      "김민호",
      "김영찬",
      "김정현",
      "야고",
      "김운",
      "이민수"
    ],
    "awaySubstitutes": [
      "정진욱",
      "전현병",
      "이강한",
      "장혁진",
      "문상윤",
      "파울리뉴",
      "정민우"
    ],
    "homeScorers": [
      "최규현 13'",
      "김동진 41'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이태희 29'",
      "경고 김정현 34'"
    ],
    "awayCards": [
      "경고 오두 23'",
      "경고 파울리뉴 2'"
    ]
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
    "scorers": [
      "홍원진 18'",
      "모따 37'"
    ],
    "assists": [],
    "yellowCards": [
      "신원호 3'",
      "최석현 13'",
      "김명순 32'"
    ],
    "redCards": [],
    "startingLineup": [
      "류원우",
      "전현병",
      "베니시오",
      "최석현",
      "김민식",
      "김명순",
      "김선민",
      "홍원진",
      "장혁진",
      "강민승",
      "오두",
      "제종현",
      "박준강",
      "이웅희",
      "김성주",
      "신원호",
      "이광진",
      "신형민",
      "김성준",
      "파울리뇨",
      "모따",
      "문건호"
    ],
    "substitutes": [
      "박대한",
      "김지훈",
      "이강한",
      "양지훈",
      "파울리뉴",
      "윤민호",
      "정민우",
      "김정환",
      "오윤석",
      "마상훈",
      "장성재",
      "정석화",
      "윤재석",
      "김륜도"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 9,
      "possession": 46,
      "corners": 6,
      "fouls": 20
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "류원우",
      "전현병",
      "베니시오",
      "최석현",
      "김민식",
      "김명순",
      "김선민",
      "홍원진",
      "장혁진",
      "강민승",
      "오두"
    ],
    "awayLineup": [
      "제종현",
      "박준강",
      "이웅희",
      "김성주",
      "신원호",
      "이광진",
      "신형민",
      "김성준",
      "파울리뇨",
      "모따",
      "문건호"
    ],
    "homeSubstitutes": [
      "박대한",
      "김지훈",
      "이강한",
      "양지훈",
      "파울리뉴",
      "윤민호",
      "정민우"
    ],
    "awaySubstitutes": [
      "김정환",
      "오윤석",
      "마상훈",
      "장성재",
      "정석화",
      "윤재석",
      "김륜도"
    ],
    "homeScorers": [
      "홍원진 18'"
    ],
    "awayScorers": [
      "모따 37'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 최석현 13'",
      "경고 김명순 32'"
    ],
    "awayCards": [
      "경고 신원호 3'"
    ]
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
    "scorers": [
      "윤민호 23'",
      "홍원진 35'",
      "김선민 30'",
      "오두 41'"
    ],
    "assists": [],
    "yellowCards": [
      "바사니 37'",
      "전현병 43'",
      "류원우 36'",
      "베니시오 43'"
    ],
    "redCards": [],
    "startingLineup": [
      "김형근",
      "정호진",
      "닐손주니어",
      "전인규",
      "최병찬",
      "카즈",
      "박현빈",
      "김선호",
      "바사니",
      "황재환",
      "루페타",
      "류원우",
      "전현병",
      "김지훈",
      "베니시오",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "김병오",
      "강민승"
    ],
    "substitutes": [
      "김현엽",
      "이상혁",
      "박형진",
      "유승현",
      "정재용",
      "박호민",
      "김규민",
      "박대한",
      "이한샘",
      "구현준",
      "장혁진",
      "오두",
      "윤민호",
      "정민우"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 16,
      "possession": 64,
      "corners": 6,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김형근",
      "정호진",
      "닐손주니어",
      "전인규",
      "최병찬",
      "카즈",
      "박현빈",
      "김선호",
      "바사니",
      "황재환",
      "루페타"
    ],
    "awayLineup": [
      "류원우",
      "전현병",
      "김지훈",
      "베니시오",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "홍원진",
      "김병오",
      "강민승"
    ],
    "homeSubstitutes": [
      "김현엽",
      "이상혁",
      "박형진",
      "유승현",
      "정재용",
      "박호민",
      "김규민"
    ],
    "awaySubstitutes": [
      "박대한",
      "이한샘",
      "구현준",
      "장혁진",
      "오두",
      "윤민호",
      "정민우"
    ],
    "homeScorers": [],
    "awayScorers": [
      "윤민호 23'",
      "홍원진 35'",
      "김선민 30'",
      "오두 41'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 바사니 37'"
    ],
    "awayCards": [
      "경고 전현병 43'",
      "경고 류원우 36'",
      "경고 베니시오 43'"
    ]
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
    "scorers": [
      "이강한 4'",
      "이용혁 32'"
    ],
    "assists": [],
    "yellowCards": [
      "전현병 15'",
      "김준형 21'",
      "이강한 23'",
      "권순호 29'",
      "김병오 31'",
      "김원균 42'"
    ],
    "redCards": [],
    "startingLineup": [
      "손정현",
      "박경록",
      "이용혁",
      "김민호",
      "서재민",
      "최재훈",
      "김준형",
      "이종현",
      "장윤호",
      "이현규",
      "권순호",
      "류원우",
      "전현병",
      "김지훈",
      "베니시오",
      "장혁진",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "김병오",
      "지상욱"
    ],
    "substitutes": [
      "김민재",
      "김종민",
      "김성주",
      "김원균",
      "서보민",
      "플라나",
      "루이스",
      "박대한",
      "이한샘",
      "구현준",
      "홍원진",
      "오두",
      "윤민호",
      "정민우"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 2,
      "possession": 46,
      "corners": 8,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "손정현",
      "박경록",
      "이용혁",
      "김민호",
      "서재민",
      "최재훈",
      "김준형",
      "이종현",
      "장윤호",
      "이현규",
      "권순호"
    ],
    "awayLineup": [
      "류원우",
      "전현병",
      "김지훈",
      "베니시오",
      "장혁진",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "김병오",
      "지상욱"
    ],
    "homeSubstitutes": [
      "김민재",
      "김종민",
      "김성주",
      "김원균",
      "서보민",
      "플라나",
      "루이스"
    ],
    "awaySubstitutes": [
      "박대한",
      "이한샘",
      "구현준",
      "홍원진",
      "오두",
      "윤민호",
      "정민우"
    ],
    "homeScorers": [
      "이용혁 32'"
    ],
    "awayScorers": [
      "이강한 4'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김준형 21'",
      "경고 권순호 29'",
      "경고 김원균 42'"
    ],
    "awayCards": [
      "경고 전현병 15'",
      "경고 이강한 23'",
      "경고 김병오 31'"
    ]
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
    "scorers": [
      "이준석 26'",
      "이강한 5'",
      "오스마르 18'",
      "박민서 25'",
      "윤민호 33'"
    ],
    "assists": [],
    "yellowCards": [
      "이코바",
      "서재민 31'",
      "이코바 47'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "장혁진",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "탈레스",
      "지상욱",
      "윤보상",
      "박민서",
      "김민규",
      "오스마르",
      "신세계",
      "카즈키",
      "박창환",
      "서재민",
      "이준석",
      "이코바",
      "브루노 실바"
    ],
    "substitutes": [
      "정진욱",
      "구현준",
      "전현병",
      "문상윤",
      "김병오",
      "윤민호",
      "정민우",
      "문정인",
      "황태현",
      "차승현",
      "김영욱",
      "이동률",
      "변경준",
      "정재민"
    ],
    "stats": {
      "shots": 15,
      "shotsAgainst": 10,
      "possession": 63,
      "corners": 9,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "장혁진",
      "홍성민",
      "김명순",
      "김선민",
      "이강한",
      "탈레스",
      "지상욱"
    ],
    "awayLineup": [
      "윤보상",
      "박민서",
      "김민규",
      "오스마르",
      "신세계",
      "카즈키",
      "박창환",
      "서재민",
      "이준석",
      "이코바",
      "브루노 실바"
    ],
    "homeSubstitutes": [
      "정진욱",
      "구현준",
      "전현병",
      "문상윤",
      "김병오",
      "윤민호",
      "정민우"
    ],
    "awaySubstitutes": [
      "문정인",
      "황태현",
      "차승현",
      "김영욱",
      "이동률",
      "변경준",
      "정재민"
    ],
    "homeScorers": [
      "이강한 5'",
      "윤민호 33'"
    ],
    "awayScorers": [
      "이준석 26'",
      "오스마르 18'",
      "박민서 25'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 이코바",
      "경고 서재민 31'",
      "경고 이코바 47'"
    ]
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
    "scorers": [
      "김병오 44'",
      "최한솔 12'",
      "김명순 47'"
    ],
    "assists": [],
    "yellowCards": [
      "김명순 24'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "김정현",
      "김명순",
      "김선민",
      "이강한",
      "김병오",
      "윤민호",
      "지상욱",
      "주현성",
      "고태규",
      "김영남",
      "김정호",
      "최한솔",
      "김재성",
      "김민성",
      "이지승",
      "강수일",
      "양세영",
      "김범수"
    ],
    "substitutes": [
      "정진욱",
      "전현병",
      "김지훈",
      "김민식",
      "문상윤",
      "탈레스",
      "정민우",
      "이준희",
      "장유섭",
      "김도윤",
      "김진현",
      "정용희",
      "박준배",
      "김대경"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 9,
      "possession": 56,
      "corners": 3,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "김정현",
      "김명순",
      "김선민",
      "이강한",
      "김병오",
      "윤민호",
      "지상욱"
    ],
    "awayLineup": [
      "주현성",
      "고태규",
      "김영남",
      "김정호",
      "최한솔",
      "김재성",
      "김민성",
      "이지승",
      "강수일",
      "양세영",
      "김범수"
    ],
    "homeSubstitutes": [
      "정진욱",
      "전현병",
      "김지훈",
      "김민식",
      "문상윤",
      "탈레스",
      "정민우"
    ],
    "awaySubstitutes": [
      "이준희",
      "장유섭",
      "김도윤",
      "김진현",
      "정용희",
      "박준배",
      "김대경"
    ],
    "homeScorers": [
      "김병오 44'",
      "김명순 47'"
    ],
    "awayScorers": [
      "최한솔 12'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김명순 24'"
    ],
    "awayCards": []
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
    "yellowCards": [
      "김정현 30'",
      "지상욱 42'",
      "피터 29'"
    ],
    "redCards": [],
    "startingLineup": [
      "양형모",
      "배서준",
      "장석환",
      "한호강",
      "이시영",
      "강현묵",
      "홍원진",
      "툰가라",
      "김주찬",
      "뮬리치",
      "김보경",
      "박대한",
      "이한샘",
      "구현준",
      "전현병",
      "김정현",
      "김명순",
      "김선민",
      "이강한",
      "윤민호",
      "탈레스",
      "지상욱"
    ],
    "substitutes": [
      "박지민",
      "백동규",
      "피터",
      "김상준",
      "이규동",
      "박승수",
      "김지호",
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "문상윤",
      "양지훈",
      "김병오"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 4,
      "possession": 67,
      "corners": 6,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "양형모",
      "배서준",
      "장석환",
      "한호강",
      "이시영",
      "강현묵",
      "홍원진",
      "툰가라",
      "김주찬",
      "뮬리치",
      "김보경"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "전현병",
      "김정현",
      "김명순",
      "김선민",
      "이강한",
      "윤민호",
      "탈레스",
      "지상욱"
    ],
    "homeSubstitutes": [
      "박지민",
      "백동규",
      "피터",
      "김상준",
      "이규동",
      "박승수",
      "김지호"
    ],
    "awaySubstitutes": [
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "문상윤",
      "양지훈",
      "김병오"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 피터 29'"
    ],
    "awayCards": [
      "경고 김정현 30'",
      "경고 지상욱 42'"
    ]
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
    "scorers": [
      "정세준 44'",
      "주닝요 43'",
      "데니손 50'"
    ],
    "assists": [],
    "yellowCards": [
      "김선민 37'",
      "정세준 7'",
      "구현준 15'",
      "박한근 41'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "이민형",
      "베니시오",
      "구현준",
      "양지훈",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "지상욱",
      "박한근",
      "장준영",
      "황기욱",
      "이은범",
      "박종민",
      "김종석",
      "송승민",
      "김주성",
      "김승호",
      "호세",
      "정세준"
    ],
    "substitutes": [
      "정진욱",
      "전현병",
      "김지훈",
      "문상윤",
      "탈레스",
      "윤민호",
      "정민우",
      "신송훈",
      "최희원",
      "이학민",
      "최치원",
      "데니손",
      "강민규",
      "주닝요"
    ],
    "stats": {
      "shots": 5,
      "shotsAgainst": 8,
      "possession": 58,
      "corners": 2,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "이민형",
      "베니시오",
      "구현준",
      "양지훈",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "지상욱"
    ],
    "awayLineup": [
      "박한근",
      "장준영",
      "황기욱",
      "이은범",
      "박종민",
      "김종석",
      "송승민",
      "김주성",
      "김승호",
      "호세",
      "정세준"
    ],
    "homeSubstitutes": [
      "정진욱",
      "전현병",
      "김지훈",
      "문상윤",
      "탈레스",
      "윤민호",
      "정민우"
    ],
    "awaySubstitutes": [
      "신송훈",
      "최희원",
      "이학민",
      "최치원",
      "데니손",
      "강민규",
      "주닝요"
    ],
    "homeScorers": [],
    "awayScorers": [
      "정세준 44'",
      "주닝요 43'",
      "데니손 50'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김선민 37'",
      "경고 구현준 15'"
    ],
    "awayCards": [
      "경고 정세준 7'",
      "경고 박한근 41'"
    ]
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
    "scorers": [
      "김병오 7'",
      "김명순 39'"
    ],
    "assists": [],
    "yellowCards": [
      "전현병 4'",
      "성호영 17'",
      "이동수 13'",
      "성호영 29'",
      "김병오 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "구상민",
      "강지훈",
      "이한도",
      "조위제",
      "성호영1",
      "이동수",
      "유헤이",
      "임민혁",
      "김도현",
      "라마스",
      "페신",
      "정진욱",
      "전현병",
      "김지훈",
      "베니시오",
      "김민식",
      "김정현",
      "김명순",
      "김선민",
      "탈레스",
      "김병오",
      "지상욱"
    ],
    "substitutes": [
      "황병근",
      "황준호",
      "이승기",
      "천지현",
      "허승찬",
      "음라파",
      "이상준",
      "박대한",
      "이한샘",
      "구현준",
      "이민형",
      "장혁진",
      "양지훈",
      "윤민호"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 9,
      "possession": 50,
      "corners": 2,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "구상민",
      "강지훈",
      "이한도",
      "조위제",
      "성호영1",
      "이동수",
      "유헤이",
      "임민혁",
      "김도현",
      "라마스",
      "페신"
    ],
    "awayLineup": [
      "정진욱",
      "전현병",
      "김지훈",
      "베니시오",
      "김민식",
      "김정현",
      "김명순",
      "김선민",
      "탈레스",
      "김병오",
      "지상욱"
    ],
    "homeSubstitutes": [
      "황병근",
      "황준호",
      "이승기",
      "천지현",
      "허승찬",
      "음라파",
      "이상준"
    ],
    "awaySubstitutes": [
      "박대한",
      "이한샘",
      "구현준",
      "이민형",
      "장혁진",
      "양지훈",
      "윤민호"
    ],
    "homeScorers": [],
    "awayScorers": [
      "김병오 7'",
      "김명순 39'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 성호영 17'",
      "경고 이동수 13'",
      "경고 성호영 29'"
    ],
    "awayCards": [
      "경고 전현병 4'",
      "경고 김병오 48'"
    ]
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
    "scorers": [
      "김정현 33'",
      "이중민 53'"
    ],
    "assists": [],
    "yellowCards": [
      "크리스 30'",
      "오재혁 16'",
      "구본철 27'",
      "김병오 39'",
      "이민형 46'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "전현병",
      "김지훈",
      "베니시오",
      "김민식",
      "김정현",
      "지상욱",
      "김명순",
      "김선민",
      "탈레스",
      "김병오",
      "최필수",
      "박광일",
      "윤영선",
      "김주원",
      "신재원",
      "코레아",
      "오재혁",
      "알리바예프",
      "크리스",
      "이중민",
      "후이즈"
    ],
    "substitutes": [
      "박대한",
      "이한샘",
      "구현준",
      "이민형",
      "장혁진",
      "양지훈",
      "윤민호",
      "유상훈",
      "강의빈",
      "김훈민",
      "최준영",
      "김정환",
      "구본철",
      "박지원"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 5,
      "possession": 55,
      "corners": 3,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "전현병",
      "김지훈",
      "베니시오",
      "김민식",
      "김정현",
      "지상욱",
      "김명순",
      "김선민",
      "탈레스",
      "김병오"
    ],
    "awayLineup": [
      "최필수",
      "박광일",
      "윤영선",
      "김주원",
      "신재원",
      "코레아",
      "오재혁",
      "알리바예프",
      "크리스",
      "이중민",
      "후이즈"
    ],
    "homeSubstitutes": [
      "박대한",
      "이한샘",
      "구현준",
      "이민형",
      "장혁진",
      "양지훈",
      "윤민호"
    ],
    "awaySubstitutes": [
      "유상훈",
      "강의빈",
      "김훈민",
      "최준영",
      "김정환",
      "구본철",
      "박지원"
    ],
    "homeScorers": [
      "김정현 33'"
    ],
    "awayScorers": [
      "이중민 53'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김병오 39'",
      "경고 이민형 46'"
    ],
    "awayCards": [
      "경고 크리스 30'",
      "경고 오재혁 16'",
      "경고 구본철 27'"
    ]
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
    "yellowCards": [
      "베니시오 16'",
      "박한빈 16'",
      "김병오 10'",
      "한용수 44'",
      "아라불리 47'"
    ],
    "redCards": [],
    "startingLineup": [
      "김민준",
      "이준재",
      "한용수",
      "김형진",
      "김진래",
      "박한빈",
      "도동현",
      "송홍민",
      "웨일스",
      "박동진",
      "이종언",
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "구현준",
      "김정현",
      "지상욱",
      "김명순",
      "김선민",
      "탈레스",
      "김병오"
    ],
    "substitutes": [
      "고동민",
      "우주성",
      "김형원",
      "이민혁",
      "사라이바",
      "폰세카",
      "아라불리",
      "정진욱",
      "이민형",
      "전현병",
      "장혁진",
      "양지훈",
      "최준혁",
      "윤민호"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 10,
      "possession": 44,
      "corners": 3,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김민준",
      "이준재",
      "한용수",
      "김형진",
      "김진래",
      "박한빈",
      "도동현",
      "송홍민",
      "웨일스",
      "박동진",
      "이종언"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "구현준",
      "김정현",
      "지상욱",
      "김명순",
      "김선민",
      "탈레스",
      "김병오"
    ],
    "homeSubstitutes": [
      "고동민",
      "우주성",
      "김형원",
      "이민혁",
      "사라이바",
      "폰세카",
      "아라불리"
    ],
    "awaySubstitutes": [
      "정진욱",
      "이민형",
      "전현병",
      "장혁진",
      "양지훈",
      "최준혁",
      "윤민호"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박한빈 16'",
      "경고 한용수 44'",
      "경고 아라불리 47'"
    ],
    "awayCards": [
      "경고 베니시오 16'",
      "경고 김병오 10'"
    ]
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
    "scorers": [
      "베니시오 40'",
      "김정현 43'",
      "뮬리치 20'",
      "마일랏 38'"
    ],
    "assists": [],
    "yellowCards": [
      "홍원진 14'",
      "최준혁 18'",
      "박대한 15'",
      "탈레스 31'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "최준혁",
      "베니시오",
      "구현준",
      "김정현",
      "윤민호",
      "김명순",
      "김선민",
      "탈레스",
      "정민우",
      "박지민",
      "이기제",
      "장석환",
      "한호강",
      "이시영",
      "홍원진",
      "이종성",
      "파울리뇨",
      "김주찬",
      "김지호",
      "이규동"
    ],
    "substitutes": [
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "장혁진",
      "양지훈",
      "지상욱",
      "조성훈",
      "배서준",
      "조윤성",
      "김보경",
      "이재욱",
      "뮬리치",
      "마일랏"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 11,
      "possession": 43,
      "corners": 2,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "최준혁",
      "베니시오",
      "구현준",
      "김정현",
      "윤민호",
      "김명순",
      "김선민",
      "탈레스",
      "정민우"
    ],
    "awayLineup": [
      "박지민",
      "이기제",
      "장석환",
      "한호강",
      "이시영",
      "홍원진",
      "이종성",
      "파울리뇨",
      "김주찬",
      "김지호",
      "이규동"
    ],
    "homeSubstitutes": [
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "장혁진",
      "양지훈",
      "지상욱"
    ],
    "awaySubstitutes": [
      "조성훈",
      "배서준",
      "조윤성",
      "김보경",
      "이재욱",
      "뮬리치",
      "마일랏"
    ],
    "homeScorers": [
      "베니시오 40'",
      "김정현 43'"
    ],
    "awayScorers": [
      "뮬리치 20'",
      "마일랏 38'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 최준혁 18'",
      "경고 박대한 15'",
      "경고 탈레스 31'"
    ],
    "awayCards": [
      "경고 홍원진 14'"
    ]
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
    "scorers": [
      "구현준 23'",
      "오스마르 45'",
      "오스마르 51'"
    ],
    "assists": [],
    "yellowCards": [
      "이준석 31'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "장혁진",
      "탈레스",
      "윤민호",
      "문정인",
      "오스마르",
      "백지웅",
      "김오규",
      "박민서",
      "서재민",
      "카즈키",
      "채광훈",
      "변경준",
      "김신진",
      "이준석"
    ],
    "substitutes": [
      "정진욱",
      "전현병",
      "양지훈",
      "최준혁",
      "지상욱",
      "사담",
      "정민우",
      "이기현",
      "김민규",
      "차승현",
      "박창환",
      "이동률",
      "정재민",
      "몬타뇨"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 15,
      "possession": 56,
      "corners": 1,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "김지훈",
      "베니시오",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "장혁진",
      "탈레스",
      "윤민호"
    ],
    "awayLineup": [
      "문정인",
      "오스마르",
      "백지웅",
      "김오규",
      "박민서",
      "서재민",
      "카즈키",
      "채광훈",
      "변경준",
      "김신진",
      "이준석"
    ],
    "homeSubstitutes": [
      "정진욱",
      "전현병",
      "양지훈",
      "최준혁",
      "지상욱",
      "사담",
      "정민우"
    ],
    "awaySubstitutes": [
      "이기현",
      "김민규",
      "차승현",
      "박창환",
      "이동률",
      "정재민",
      "몬타뇨"
    ],
    "homeScorers": [
      "구현준 23'"
    ],
    "awayScorers": [
      "오스마르 45'",
      "오스마르 51'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 이준석 31'"
    ]
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
    "scorers": [
      "이웅희 34'"
    ],
    "assists": [],
    "yellowCards": [
      "이한샘 6'",
      "박주원 22'",
      "전현병 46'"
    ],
    "redCards": [],
    "startingLineup": [
      "박주원",
      "유용현",
      "이웅희",
      "강영훈",
      "박준강",
      "장성재",
      "이광진",
      "툰가라",
      "모따",
      "명준재",
      "이지훈",
      "박대한",
      "이한샘",
      "최준혁",
      "베니시오",
      "구현준",
      "장혁진",
      "김정현",
      "김명순",
      "김선민",
      "지상욱",
      "사담"
    ],
    "substitutes": [
      "강정묵",
      "이재원",
      "구대영",
      "이풍범",
      "신형민",
      "허승우",
      "문건호",
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "문상윤",
      "김병오",
      "윤민호"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 14,
      "possession": 42,
      "corners": 6,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박주원",
      "유용현",
      "이웅희",
      "강영훈",
      "박준강",
      "장성재",
      "이광진",
      "툰가라",
      "모따",
      "명준재",
      "이지훈"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "최준혁",
      "베니시오",
      "구현준",
      "장혁진",
      "김정현",
      "김명순",
      "김선민",
      "지상욱",
      "사담"
    ],
    "homeSubstitutes": [
      "강정묵",
      "이재원",
      "구대영",
      "이풍범",
      "신형민",
      "허승우",
      "문건호"
    ],
    "awaySubstitutes": [
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "문상윤",
      "김병오",
      "윤민호"
    ],
    "homeScorers": [
      "이웅희 34'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박주원 22'"
    ],
    "awayCards": [
      "경고 이한샘 6'",
      "경고 전현병 46'"
    ]
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
    "scorers": [
      "김도윤 22'",
      "윤민호 39'",
      "김우빈 44'",
      "윤민호 45'",
      "박준배 38'"
    ],
    "assists": [],
    "yellowCards": [
      "정용희 33'",
      "양세영 42'",
      "최한솔 47'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승빈",
      "장유섭",
      "고태규",
      "김영남",
      "최한솔",
      "김진현",
      "김재성",
      "정용희",
      "이지승",
      "김도윤",
      "김우빈",
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "김명순",
      "최준혁",
      "김정현",
      "김영환",
      "윤민호",
      "김선민",
      "사담"
    ],
    "substitutes": [
      "주현성",
      "김기환",
      "강수일",
      "양세영",
      "박준배",
      "한영훈",
      "김대경",
      "정진욱",
      "이민형",
      "전현병",
      "장혁진",
      "문상윤",
      "탈레스",
      "김병오"
    ],
    "stats": {
      "shots": 14,
      "shotsAgainst": 12,
      "possession": 46,
      "corners": 2,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승빈",
      "장유섭",
      "고태규",
      "김영남",
      "최한솔",
      "김진현",
      "김재성",
      "정용희",
      "이지승",
      "김도윤",
      "김우빈"
    ],
    "awayLineup": [
      "박대한",
      "이한샘",
      "구현준",
      "베니시오",
      "김명순",
      "최준혁",
      "김정현",
      "김영환",
      "윤민호",
      "김선민",
      "사담"
    ],
    "homeSubstitutes": [
      "주현성",
      "김기환",
      "강수일",
      "양세영",
      "박준배",
      "한영훈",
      "김대경"
    ],
    "awaySubstitutes": [
      "정진욱",
      "이민형",
      "전현병",
      "장혁진",
      "문상윤",
      "탈레스",
      "김병오"
    ],
    "homeScorers": [
      "김도윤 22'",
      "김우빈 44'",
      "박준배 38'"
    ],
    "awayScorers": [
      "윤민호 39'",
      "윤민호 45'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 정용희 33'",
      "경고 양세영 42'",
      "경고 최한솔 47'"
    ],
    "awayCards": []
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
    "scorers": [
      "박지원 32'",
      "김병오 23'"
    ],
    "assists": [],
    "yellowCards": [
      "김병오 15'",
      "박지원 43'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "전현병",
      "김지훈",
      "베니시오",
      "구현준",
      "장혁진",
      "김정현",
      "김명순",
      "김선민",
      "윤민호",
      "지상욱",
      "최필수",
      "양태양",
      "정승용",
      "김주원",
      "정원진",
      "박광일",
      "류준선",
      "박지원",
      "코레아",
      "후이즈",
      "신재원"
    ],
    "substitutes": [
      "정진욱",
      "이한샘",
      "이민형",
      "문상윤",
      "최준혁",
      "탈레스",
      "김병오",
      "유상훈",
      "강의빈",
      "한석종",
      "오재혁",
      "구본철",
      "이중민",
      "크리스"
    ],
    "stats": {
      "shots": 7,
      "shotsAgainst": 8,
      "possession": 53,
      "corners": 2,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "전현병",
      "김지훈",
      "베니시오",
      "구현준",
      "장혁진",
      "김정현",
      "김명순",
      "김선민",
      "윤민호",
      "지상욱"
    ],
    "awayLineup": [
      "최필수",
      "양태양",
      "정승용",
      "김주원",
      "정원진",
      "박광일",
      "류준선",
      "박지원",
      "코레아",
      "후이즈",
      "신재원"
    ],
    "homeSubstitutes": [
      "정진욱",
      "이한샘",
      "이민형",
      "문상윤",
      "최준혁",
      "탈레스",
      "김병오"
    ],
    "awaySubstitutes": [
      "유상훈",
      "강의빈",
      "한석종",
      "오재혁",
      "구본철",
      "이중민",
      "크리스"
    ],
    "homeScorers": [
      "김병오 23'"
    ],
    "awayScorers": [
      "박지원 32'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김병오 15'"
    ],
    "awayCards": [
      "경고 박지원 43'"
    ]
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
    "yellowCards": [
      "이민형 4'",
      "김선민 32'",
      "전현병 45'",
      "구현준 12'",
      "바사니 21'"
    ],
    "redCards": [],
    "startingLineup": [
      "김형근",
      "서명관",
      "이상혁",
      "홍성욱",
      "최병찬",
      "카즈",
      "정재용",
      "박형진",
      "바사니",
      "루페타",
      "한지호",
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "정성호",
      "김영환",
      "윤민호"
    ],
    "substitutes": [
      "김현엽",
      "김선호",
      "정호진",
      "이정빈",
      "박현빈",
      "이의형",
      "윤재운",
      "박대한",
      "이한샘",
      "김민식",
      "장혁진",
      "홍성민",
      "탈레스",
      "지상욱"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 7,
      "possession": 53,
      "corners": 9,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김형근",
      "서명관",
      "이상혁",
      "홍성욱",
      "최병찬",
      "카즈",
      "정재용",
      "박형진",
      "바사니",
      "루페타",
      "한지호"
    ],
    "awayLineup": [
      "정진욱",
      "이민형",
      "전현병",
      "김지훈",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "정성호",
      "김영환",
      "윤민호"
    ],
    "homeSubstitutes": [
      "김현엽",
      "김선호",
      "정호진",
      "이정빈",
      "박현빈",
      "이의형",
      "윤재운"
    ],
    "awaySubstitutes": [
      "박대한",
      "이한샘",
      "김민식",
      "장혁진",
      "홍성민",
      "탈레스",
      "지상욱"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 바사니 21'"
    ],
    "awayCards": [
      "경고 이민형 4'",
      "경고 김선민 32'",
      "경고 전현병 45'",
      "경고 구현준 12'"
    ]
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
    "scorers": [
      "브루노 23'"
    ],
    "assists": [],
    "yellowCards": [
      "이민형 39'",
      "박경록 11'",
      "루이스 45'",
      "김병오 50'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "이한샘",
      "이민형",
      "김지훈",
      "김민식",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "윤민호",
      "지상욱",
      "손정현",
      "박경록",
      "채프먼",
      "이용혁",
      "안재민",
      "최재훈",
      "이강연",
      "임준우",
      "장윤호",
      "루이스",
      "브루노"
    ],
    "substitutes": [
      "박대한",
      "구현준",
      "이찬우",
      "장혁진",
      "문상윤",
      "김영환",
      "정성호",
      "이상욱",
      "이종현",
      "서재민",
      "정한철",
      "허동호",
      "플라나",
      "제갈재민"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 9,
      "possession": 56,
      "corners": 7,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "이한샘",
      "이민형",
      "김지훈",
      "김민식",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "윤민호",
      "지상욱"
    ],
    "awayLineup": [
      "손정현",
      "박경록",
      "채프먼",
      "이용혁",
      "안재민",
      "최재훈",
      "이강연",
      "임준우",
      "장윤호",
      "루이스",
      "브루노"
    ],
    "homeSubstitutes": [
      "박대한",
      "구현준",
      "이찬우",
      "장혁진",
      "문상윤",
      "김영환",
      "정성호"
    ],
    "awaySubstitutes": [
      "이상욱",
      "이종현",
      "서재민",
      "정한철",
      "허동호",
      "플라나",
      "제갈재민"
    ],
    "homeScorers": [],
    "awayScorers": [
      "브루노 23'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이민형 39'",
      "경고 김병오 50'"
    ],
    "awayCards": [
      "경고 박경록 11'",
      "경고 루이스 45'"
    ]
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
    "scorers": [
      "김정현 8'",
      "마테우스 17'"
    ],
    "assists": [],
    "yellowCards": [
      "한가람 17'",
      "전현병 46'",
      "니콜라스 49'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이한샘",
      "전현병",
      "김지훈",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "강민승",
      "윤민호",
      "김다솔",
      "박종현",
      "김정현",
      "김동진",
      "이태희",
      "마테우스",
      "한가람",
      "유정완",
      "리영직",
      "채현우",
      "김운"
    ],
    "substitutes": [
      "정진욱",
      "김민식",
      "베니시오",
      "장혁진",
      "김영환",
      "지상욱",
      "사담",
      "김성동",
      "니콜라스",
      "야고",
      "임승겸",
      "문성우",
      "최성범",
      "주현우"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 13,
      "possession": 53,
      "corners": 3,
      "fouls": 6
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이한샘",
      "전현병",
      "김지훈",
      "구현준",
      "김정현",
      "김명순",
      "김선민",
      "김병오",
      "강민승",
      "윤민호"
    ],
    "awayLineup": [
      "김다솔",
      "박종현",
      "김정현",
      "김동진",
      "이태희",
      "마테우스",
      "한가람",
      "유정완",
      "리영직",
      "채현우",
      "김운"
    ],
    "homeSubstitutes": [
      "정진욱",
      "김민식",
      "베니시오",
      "장혁진",
      "김영환",
      "지상욱",
      "사담"
    ],
    "awaySubstitutes": [
      "김성동",
      "니콜라스",
      "야고",
      "임승겸",
      "문성우",
      "최성범",
      "주현우"
    ],
    "homeScorers": [],
    "awayScorers": [
      "김정현 8'",
      "마테우스 17'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 전현병 46'"
    ],
    "awayCards": [
      "경고 한가람 17'",
      "경고 니콜라스 49'"
    ]
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
    "scorers": [
      "정성호 33'"
    ],
    "assists": [],
    "yellowCards": [
      "정진욱 46'"
    ],
    "redCards": [],
    "startingLineup": [
      "구상민",
      "김희승",
      "이한도",
      "황준호",
      "김륜성",
      "라마스",
      "임민혁",
      "강지훈",
      "유헤이",
      "이준호",
      "페신",
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "김민식",
      "김정현",
      "김영환",
      "김명순",
      "탈레스",
      "사담"
    ],
    "substitutes": [
      "황병근",
      "최동렬",
      "이상준",
      "천지현",
      "손휘",
      "음라파",
      "권성윤",
      "정현호",
      "구현준",
      "전현병",
      "문상윤",
      "양지훈",
      "정성호",
      "지상욱"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 9,
      "possession": 59,
      "corners": 3,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "구상민",
      "김희승",
      "이한도",
      "황준호",
      "김륜성",
      "라마스",
      "임민혁",
      "강지훈",
      "유헤이",
      "이준호",
      "페신"
    ],
    "awayLineup": [
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "김민식",
      "김정현",
      "김영환",
      "김명순",
      "탈레스",
      "사담"
    ],
    "homeSubstitutes": [
      "황병근",
      "최동렬",
      "이상준",
      "천지현",
      "손휘",
      "음라파",
      "권성윤"
    ],
    "awaySubstitutes": [
      "정현호",
      "구현준",
      "전현병",
      "문상윤",
      "양지훈",
      "정성호",
      "지상욱"
    ],
    "homeScorers": [],
    "awayScorers": [
      "정성호 33'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 정진욱 46'"
    ]
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
    "scorers": [
      "홍석현 2'",
      "발디비아 32'",
      "김종민 15'"
    ],
    "assists": [],
    "yellowCards": [
      "정성호 41'"
    ],
    "redCards": [],
    "startingLineup": [
      "류원우",
      "김예성",
      "알리쿨로프",
      "홍석현",
      "김동욱",
      "최원철",
      "윤재석",
      "조지훈",
      "발디비아",
      "플라카",
      "김종민",
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "김민식",
      "김정현",
      "김영환",
      "김명순",
      "탈레스",
      "사담"
    ],
    "substitutes": [
      "최봉진",
      "유지하",
      "이규혁",
      "김종필",
      "박태용",
      "김건오",
      "이창훈",
      "정현호",
      "전현병",
      "이찬우",
      "양지훈",
      "홍성민",
      "최준혁",
      "정성호"
    ],
    "stats": {
      "shots": 6,
      "shotsAgainst": 14,
      "possession": 47,
      "corners": 1,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "류원우",
      "김예성",
      "알리쿨로프",
      "홍석현",
      "김동욱",
      "최원철",
      "윤재석",
      "조지훈",
      "발디비아",
      "플라카",
      "김종민"
    ],
    "awayLineup": [
      "정진욱",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "김민식",
      "김정현",
      "김영환",
      "김명순",
      "탈레스",
      "사담"
    ],
    "homeSubstitutes": [
      "최봉진",
      "유지하",
      "이규혁",
      "김종필",
      "박태용",
      "김건오",
      "이창훈"
    ],
    "awaySubstitutes": [
      "정현호",
      "전현병",
      "이찬우",
      "양지훈",
      "홍성민",
      "최준혁",
      "정성호"
    ],
    "homeScorers": [
      "홍석현 2'",
      "발디비아 32'",
      "김종민 15'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 정성호 41'"
    ]
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
    "scorers": [
      "주닝요 54'",
      "김영환 1'",
      "데니손 4'",
      "데니손 8'",
      "주닝요 23'"
    ],
    "assists": [],
    "yellowCards": [
      "박대한 47'",
      "신송훈 47'",
      "사담 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "박대한",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "최준혁",
      "김민식",
      "김영환",
      "김명순",
      "정성호",
      "탈레스",
      "신송훈",
      "강준혁",
      "최희원",
      "박병현",
      "이학민",
      "김승호",
      "황기욱",
      "박세직",
      "송승민",
      "박대훈",
      "주닝요"
    ],
    "substitutes": [
      "정진욱",
      "구현준",
      "전현병",
      "김정현",
      "김선민",
      "윤민호",
      "사담",
      "박한근",
      "장준영",
      "김주성",
      "안용우",
      "최치원",
      "데니손",
      "호세"
    ],
    "stats": {
      "shots": 14,
      "shotsAgainst": 10,
      "possession": 42,
      "corners": 5,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "박대한",
      "이민형",
      "김지훈",
      "베니시오",
      "장혁진",
      "최준혁",
      "김민식",
      "김영환",
      "김명순",
      "정성호",
      "탈레스"
    ],
    "awayLineup": [
      "신송훈",
      "강준혁",
      "최희원",
      "박병현",
      "이학민",
      "김승호",
      "황기욱",
      "박세직",
      "송승민",
      "박대훈",
      "주닝요"
    ],
    "homeSubstitutes": [
      "정진욱",
      "구현준",
      "전현병",
      "김정현",
      "김선민",
      "윤민호",
      "사담"
    ],
    "awaySubstitutes": [
      "박한근",
      "장준영",
      "김주성",
      "안용우",
      "최치원",
      "데니손",
      "호세"
    ],
    "homeScorers": [
      "김영환 1'"
    ],
    "awayScorers": [
      "주닝요 54'",
      "데니손 4'",
      "데니손 8'",
      "주닝요 23'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박대한 47'",
      "경고 사담 48'"
    ],
    "awayCards": [
      "경고 신송훈 47'"
    ]
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
    "scorers": [
      "이의형 38'",
      "이의형 43'",
      "가브리엘 39'",
      "공민현 51'"
    ],
    "assists": [],
    "yellowCards": [
      "여승원 19'",
      "김영환 31'",
      "이상혁 33'",
      "티아깅요 44'"
    ],
    "redCards": [],
    "startingLineup": [
      "김형근",
      "이재원",
      "이상혁",
      "홍성욱",
      "티아깅요",
      "박현빈",
      "카즈",
      "박창준",
      "바사니",
      "몬타뇨",
      "이의형",
      "조수혁",
      "반 데 아벌트",
      "홍준호",
      "여승원",
      "이강한",
      "서재원",
      "김선민",
      "김병오",
      "이지승",
      "가브리엘",
      "양영빈"
    ],
    "substitutes": [
      "설현빈",
      "박형진",
      "전인규",
      "유승현",
      "최원철",
      "갈레고",
      "공민현",
      "이승환",
      "김영환",
      "페드로",
      "송창석",
      "지언학",
      "이형경",
      "이창훈"
    ],
    "stats": {
      "shots": 18,
      "shotsAgainst": 12,
      "possession": 44,
      "corners": 3,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김형근",
      "이재원",
      "이상혁",
      "홍성욱",
      "티아깅요",
      "박현빈",
      "카즈",
      "박창준",
      "바사니",
      "몬타뇨",
      "이의형"
    ],
    "awayLineup": [
      "조수혁",
      "반 데 아벌트",
      "홍준호",
      "여승원",
      "이강한",
      "서재원",
      "김선민",
      "김병오",
      "이지승",
      "가브리엘",
      "양영빈"
    ],
    "homeSubstitutes": [
      "설현빈",
      "박형진",
      "전인규",
      "유승현",
      "최원철",
      "갈레고",
      "공민현"
    ],
    "awaySubstitutes": [
      "이승환",
      "김영환",
      "페드로",
      "송창석",
      "지언학",
      "이형경",
      "이창훈"
    ],
    "homeScorers": [
      "이의형 38'",
      "이의형 43'",
      "공민현 51'"
    ],
    "awayScorers": [
      "가브리엘 39'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이상혁 33'",
      "경고 티아깅요 44'"
    ],
    "awayCards": [
      "경고 여승원 19'",
      "경고 김영환 31'"
    ]
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
    "scorers": [
      "김선민 6'",
      "후이즈 29'"
    ],
    "assists": [],
    "yellowCards": [
      "사무엘 26'",
      "페드로 46'",
      "이창훈 5'",
      "후이즈 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "유상훈",
      "정승용",
      "김주원",
      "베니시오",
      "신재원",
      "이준상",
      "박수빈",
      "사무엘",
      "이정빈",
      "홍창범",
      "후이즈",
      "이승환",
      "여승원",
      "지언학",
      "정성우",
      "이창훈",
      "김선민",
      "가브리엘",
      "페드로",
      "김승우",
      "김병오",
      "이형경"
    ],
    "substitutes": [
      "박지민",
      "김정환",
      "류준선",
      "정원진",
      "조성욱",
      "하정우",
      "박지원",
      "조수혁",
      "전현병",
      "이강한",
      "송진규",
      "김영환",
      "마테우징요",
      "송창석"
    ],
    "stats": {
      "shots": 18,
      "shotsAgainst": 15,
      "possession": 58,
      "corners": 7,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "유상훈",
      "정승용",
      "김주원",
      "베니시오",
      "신재원",
      "이준상",
      "박수빈",
      "사무엘",
      "이정빈",
      "홍창범",
      "후이즈"
    ],
    "awayLineup": [
      "이승환",
      "여승원",
      "지언학",
      "정성우",
      "이창훈",
      "김선민",
      "가브리엘",
      "페드로",
      "김승우",
      "김병오",
      "이형경"
    ],
    "homeSubstitutes": [
      "박지민",
      "김정환",
      "류준선",
      "정원진",
      "조성욱",
      "하정우",
      "박지원"
    ],
    "awaySubstitutes": [
      "조수혁",
      "전현병",
      "이강한",
      "송진규",
      "김영환",
      "마테우징요",
      "송창석"
    ],
    "homeScorers": [
      "후이즈 29'"
    ],
    "awayScorers": [
      "김선민 6'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 사무엘 26'",
      "경고 후이즈 48'"
    ],
    "awayCards": [
      "경고 페드로 46'",
      "경고 이창훈 5'"
    ]
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
    "scorers": [
      "김지훈 12'",
      "가브리엘 16'",
      "송창석 29'",
      "송진규 10'",
      "플라나 24'"
    ],
    "assists": [],
    "yellowCards": [
      "이동원 15'",
      "여승원 25'",
      "조수혁 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "손정현",
      "채프먼",
      "박경록",
      "이찬형",
      "김민식",
      "디자우마",
      "최재훈",
      "김지훈",
      "브루노",
      "이종현",
      "루이스",
      "이승환",
      "여승원",
      "정성우",
      "이강한",
      "이창훈",
      "김선민",
      "송진규",
      "페드로",
      "김영환",
      "가브리엘",
      "송창석"
    ],
    "substitutes": [
      "윤보상",
      "김민호",
      "안창민",
      "이상민",
      "조성준",
      "플라나",
      "김결",
      "조수혁",
      "전현병",
      "김승우",
      "이동원",
      "서재원",
      "지언학",
      "이형경"
    ],
    "stats": {
      "shots": 19,
      "shotsAgainst": 8,
      "possession": 51,
      "corners": 5,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "손정현",
      "채프먼",
      "박경록",
      "이찬형",
      "김민식",
      "디자우마",
      "최재훈",
      "김지훈",
      "브루노",
      "이종현",
      "루이스"
    ],
    "awayLineup": [
      "이승환",
      "여승원",
      "정성우",
      "이강한",
      "이창훈",
      "김선민",
      "송진규",
      "페드로",
      "김영환",
      "가브리엘",
      "송창석"
    ],
    "homeSubstitutes": [
      "윤보상",
      "김민호",
      "안창민",
      "이상민",
      "조성준",
      "플라나",
      "김결"
    ],
    "awaySubstitutes": [
      "조수혁",
      "전현병",
      "김승우",
      "이동원",
      "서재원",
      "지언학",
      "이형경"
    ],
    "homeScorers": [
      "김지훈 12'",
      "플라나 24'"
    ],
    "awayScorers": [
      "가브리엘 16'",
      "송창석 29'",
      "송진규 10'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 이동원 15'",
      "경고 여승원 25'",
      "경고 조수혁 48'"
    ]
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
    "scorers": [
      "리마 20'",
      "전현병 32'",
      "가브리엘 49'"
    ],
    "assists": [],
    "yellowCards": [
      "여홍규 30'",
      "박준서 38'"
    ],
    "redCards": [],
    "startingLineup": [
      "김승건",
      "연제민",
      "우제욱",
      "박준서",
      "조영진",
      "최명희",
      "김신리",
      "백승우",
      "전성진",
      "여홍규",
      "도미닉",
      "이승환",
      "여승원",
      "정성우",
      "이강한",
      "이창훈",
      "김선민",
      "가브리엘",
      "페드로",
      "김영환",
      "송진규",
      "송창석"
    ],
    "substitutes": [
      "이기현",
      "임창석",
      "함선우",
      "최준혁",
      "알뚤",
      "리마",
      "이승재",
      "조수혁",
      "전현병",
      "이동원",
      "서재원",
      "지언학",
      "양영빈",
      "이형경"
    ],
    "stats": {
      "shots": 15,
      "shotsAgainst": 14,
      "possession": 51,
      "corners": 9,
      "fouls": 16
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김승건",
      "연제민",
      "우제욱",
      "박준서",
      "조영진",
      "최명희",
      "김신리",
      "백승우",
      "전성진",
      "여홍규",
      "도미닉"
    ],
    "awayLineup": [
      "이승환",
      "여승원",
      "정성우",
      "이강한",
      "이창훈",
      "김선민",
      "가브리엘",
      "페드로",
      "김영환",
      "송진규",
      "송창석"
    ],
    "homeSubstitutes": [
      "이기현",
      "임창석",
      "함선우",
      "최준혁",
      "알뚤",
      "리마",
      "이승재"
    ],
    "awaySubstitutes": [
      "조수혁",
      "전현병",
      "이동원",
      "서재원",
      "지언학",
      "양영빈",
      "이형경"
    ],
    "homeScorers": [
      "리마 20'"
    ],
    "awayScorers": [
      "전현병 32'",
      "가브리엘 49'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 여홍규 30'",
      "경고 박준서 38'"
    ],
    "awayCards": []
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
    "scorers": [
      "설현진 29'",
      "이강희 35'",
      "이중민 44'"
    ],
    "assists": [],
    "yellowCards": [
      "이강희 19'",
      "이창훈 3'",
      "정성우 27'",
      "지언학 34'"
    ],
    "redCards": [],
    "startingLineup": [
      "류원우",
      "박원재",
      "박재환",
      "우주성",
      "이준재",
      "이강희",
      "헤난",
      "도동현",
      "폰세카",
      "카릴",
      "설현진",
      "이승환",
      "홍준호",
      "여승원",
      "정성우",
      "이강한",
      "서재원",
      "김선민",
      "페드로",
      "허승찬",
      "가브리엘",
      "송창석"
    ],
    "substitutes": [
      "최필수",
      "김형진",
      "김선호",
      "박기현",
      "조영광",
      "박민서",
      "이중민",
      "조수혁",
      "전현병",
      "문승민",
      "마테우징요",
      "지언학",
      "양영빈",
      "이창훈"
    ],
    "stats": {
      "shots": 24,
      "shotsAgainst": 8,
      "possession": 48,
      "corners": 5,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "류원우",
      "박원재",
      "박재환",
      "우주성",
      "이준재",
      "이강희",
      "헤난",
      "도동현",
      "폰세카",
      "카릴",
      "설현진"
    ],
    "awayLineup": [
      "이승환",
      "홍준호",
      "여승원",
      "정성우",
      "이강한",
      "서재원",
      "김선민",
      "페드로",
      "허승찬",
      "가브리엘",
      "송창석"
    ],
    "homeSubstitutes": [
      "최필수",
      "김형진",
      "김선호",
      "박기현",
      "조영광",
      "박민서",
      "이중민"
    ],
    "awaySubstitutes": [
      "조수혁",
      "전현병",
      "문승민",
      "마테우징요",
      "지언학",
      "양영빈",
      "이창훈"
    ],
    "homeScorers": [
      "설현진 29'",
      "이강희 35'",
      "이중민 44'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이강희 19'"
    ],
    "awayCards": [
      "경고 이창훈 3'",
      "경고 정성우 27'",
      "경고 지언학 34'"
    ]
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
    "scorers": [
      "강민규 20'",
      "아담 22'",
      "아담 18'",
      "여승원 41'"
    ],
    "assists": [],
    "yellowCards": [
      "김승호 33'",
      "이강한 42'",
      "송창석 36'"
    ],
    "redCards": [],
    "startingLineup": [
      "신송훈",
      "김주성",
      "이은범",
      "조주영",
      "박종민",
      "정마호",
      "김종석",
      "미사키",
      "김승호",
      "아담",
      "강민규",
      "이승환",
      "전현병",
      "홍준호",
      "지언학",
      "이강한",
      "김선민",
      "가브리엘",
      "허승찬",
      "이창훈",
      "서재원",
      "송창석"
    ],
    "substitutes": [
      "김진영",
      "변준영",
      "이학민",
      "김정현",
      "데니손",
      "김종민",
      "한교원",
      "조수혁",
      "여승원",
      "임준영",
      "정성우",
      "이동원",
      "마테우징요",
      "이형경"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 9,
      "possession": 49,
      "corners": 2,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "신송훈",
      "김주성",
      "이은범",
      "조주영",
      "박종민",
      "정마호",
      "김종석",
      "미사키",
      "김승호",
      "아담",
      "강민규"
    ],
    "awayLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "지언학",
      "이강한",
      "김선민",
      "가브리엘",
      "허승찬",
      "이창훈",
      "서재원",
      "송창석"
    ],
    "homeSubstitutes": [
      "김진영",
      "변준영",
      "이학민",
      "김정현",
      "데니손",
      "김종민",
      "한교원"
    ],
    "awaySubstitutes": [
      "조수혁",
      "여승원",
      "임준영",
      "정성우",
      "이동원",
      "마테우징요",
      "이형경"
    ],
    "homeScorers": [
      "강민규 20'",
      "아담 22'",
      "아담 18'"
    ],
    "awayScorers": [
      "여승원 41'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김승호 33'"
    ],
    "awayCards": [
      "경고 이강한 42'",
      "경고 송창석 36'"
    ]
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
    "scorers": [
      "가브리엘 6'",
      "이동률 22'",
      "무고사 38'"
    ],
    "assists": [],
    "yellowCards": [
      "김선민 7'",
      "홍준호 24'",
      "이강한 34'",
      "박경섭 47'"
    ],
    "redCards": [],
    "startingLineup": [
      "민성준",
      "이주용",
      "박경섭",
      "김건희",
      "최승구",
      "바로우",
      "이명주",
      "문지환",
      "제르소",
      "박승호",
      "무고사",
      "이승환",
      "전현병",
      "홍준호",
      "여승원",
      "이강한",
      "김선민",
      "가브리엘",
      "페드로",
      "김영환",
      "김병오",
      "이창훈"
    ],
    "substitutes": [
      "황성민",
      "델브리지",
      "김명순",
      "신진호",
      "이동률",
      "김민석",
      "박호민",
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "마테우징요",
      "송창석",
      "지언학"
    ],
    "stats": {
      "shots": 17,
      "shotsAgainst": 14,
      "possession": 64,
      "corners": 9,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "민성준",
      "이주용",
      "박경섭",
      "김건희",
      "최승구",
      "바로우",
      "이명주",
      "문지환",
      "제르소",
      "박승호",
      "무고사"
    ],
    "awayLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "여승원",
      "이강한",
      "김선민",
      "가브리엘",
      "페드로",
      "김영환",
      "김병오",
      "이창훈"
    ],
    "homeSubstitutes": [
      "황성민",
      "델브리지",
      "김명순",
      "신진호",
      "이동률",
      "김민석",
      "박호민"
    ],
    "awaySubstitutes": [
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "마테우징요",
      "송창석",
      "지언학"
    ],
    "homeScorers": [
      "이동률 22'",
      "무고사 38'"
    ],
    "awayScorers": [
      "가브리엘 6'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 박경섭 47'"
    ],
    "awayCards": [
      "경고 김선민 7'",
      "경고 홍준호 24'",
      "경고 이강한 34'"
    ]
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
    "scorers": [
      "페드로 23'",
      "전현병 19'"
    ],
    "assists": [],
    "yellowCards": [
      "백지웅 14'",
      "김선민 31'",
      "서재민 37'",
      "이승환 7'",
      "가브리엘 37'"
    ],
    "redCards": [],
    "startingLineup": [
      "노동건",
      "차승현",
      "오스마르",
      "김오규",
      "배진우",
      "조상준",
      "박창환",
      "서재민",
      "에울레르",
      "백지웅",
      "아이데일",
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "페드로",
      "김병오"
    ],
    "substitutes": [
      "김민호",
      "김현우",
      "윤석주",
      "서진석",
      "정재민",
      "변경준",
      "페드링요",
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "이동원",
      "마테우징요",
      "가브리엘"
    ],
    "stats": {
      "shots": 17,
      "shotsAgainst": 10,
      "possession": 65,
      "corners": 5,
      "fouls": 23
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "노동건",
      "차승현",
      "오스마르",
      "김오규",
      "배진우",
      "조상준",
      "박창환",
      "서재민",
      "에울레르",
      "백지웅",
      "아이데일"
    ],
    "awayLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "페드로",
      "김병오"
    ],
    "homeSubstitutes": [
      "김민호",
      "김현우",
      "윤석주",
      "서진석",
      "정재민",
      "변경준",
      "페드링요"
    ],
    "awaySubstitutes": [
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "이동원",
      "마테우징요",
      "가브리엘"
    ],
    "homeScorers": [],
    "awayScorers": [
      "페드로 23'",
      "전현병 19'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 백지웅 14'",
      "경고 서재민 37'"
    ],
    "awayCards": [
      "경고 김선민 31'",
      "경고 이승환 7'",
      "경고 가브리엘 37'"
    ]
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
    "scorers": [
      "가브리엘 24'"
    ],
    "assists": [],
    "yellowCards": [
      "전현병 14'"
    ],
    "redCards": [],
    "startingLineup": [
      "제종현",
      "이예찬",
      "이웅희",
      "강영훈",
      "양준영",
      "이광진",
      "이종성",
      "툰가라",
      "진의준",
      "구종욱",
      "이정협",
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "서재원",
      "가브리엘",
      "페드로"
    ],
    "substitutes": [
      "박주원",
      "이상명",
      "최진웅",
      "신형민",
      "명준재",
      "이지훈",
      "파브레",
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "이동원",
      "마테우징요",
      "이형경"
    ],
    "stats": {
      "shots": 15,
      "shotsAgainst": 7,
      "possession": 67,
      "corners": 8,
      "fouls": 6
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "제종현",
      "이예찬",
      "이웅희",
      "강영훈",
      "양준영",
      "이광진",
      "이종성",
      "툰가라",
      "진의준",
      "구종욱",
      "이정협"
    ],
    "awayLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "서재원",
      "가브리엘",
      "페드로"
    ],
    "homeSubstitutes": [
      "박주원",
      "이상명",
      "최진웅",
      "신형민",
      "명준재",
      "이지훈",
      "파브레"
    ],
    "awaySubstitutes": [
      "조수혁",
      "윤석영",
      "정성우",
      "문승민",
      "이동원",
      "마테우징요",
      "이형경"
    ],
    "homeScorers": [],
    "awayScorers": [
      "가브리엘 24'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 전현병 14'"
    ]
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
    "scorers": [
      "페드로 18'",
      "이창훈 25'",
      "김지현 36'",
      "가브리엘 38'",
      "일류첸코 3'",
      "권완규 15'"
    ],
    "assists": [],
    "yellowCards": [
      "김지현 23'",
      "브루노 실바 33'",
      "여승원 37'",
      "이민혁 39'",
      "김선민 40'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로",
      "양형모",
      "이기제",
      "고종현",
      "권완규",
      "이건희",
      "이규성",
      "최영준",
      "김지현",
      "세라핌",
      "브루노 실바",
      "일류첸코"
    ],
    "substitutes": [
      "조수혁",
      "윤석영",
      "송진규",
      "이지승",
      "이동원",
      "마테우징요",
      "김병오",
      "김민준",
      "조윤성",
      "정동윤",
      "이민혁",
      "김현",
      "박승수",
      "김지호"
    ],
    "stats": {
      "shots": 16,
      "shotsAgainst": 14,
      "possession": 47,
      "corners": 4,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "전현병",
      "홍준호",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "양형모",
      "이기제",
      "고종현",
      "권완규",
      "이건희",
      "이규성",
      "최영준",
      "김지현",
      "세라핌",
      "브루노 실바",
      "일류첸코"
    ],
    "homeSubstitutes": [
      "조수혁",
      "윤석영",
      "송진규",
      "이지승",
      "이동원",
      "마테우징요",
      "김병오"
    ],
    "awaySubstitutes": [
      "김민준",
      "조윤성",
      "정동윤",
      "이민혁",
      "김현",
      "박승수",
      "김지호"
    ],
    "homeScorers": [
      "페드로 18'",
      "이창훈 25'",
      "가브리엘 38'"
    ],
    "awayScorers": [
      "김지현 36'",
      "일류첸코 3'",
      "권완규 15'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 여승원 37'",
      "경고 김선민 40'"
    ],
    "awayCards": [
      "경고 김지현 23'",
      "경고 브루노 실바 33'",
      "경고 이민혁 39'"
    ]
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
    "scorers": [
      "곤잘로 29'",
      "곤잘로 35'"
    ],
    "assists": [],
    "yellowCards": [
      "김진래 18'",
      "여승원 18'",
      "가브리엘 44'",
      "백가온 46'",
      "김병오 45'",
      "빌레로 49'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "홍준호",
      "윤석영",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로",
      "박대한",
      "오반석",
      "조위제",
      "장호익",
      "김진래",
      "임민혁",
      "사비에르",
      "이현규",
      "손석용",
      "윤민호",
      "백가온"
    ],
    "substitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "이지승",
      "이동원",
      "마테우징요",
      "김병오",
      "구상민",
      "김동욱",
      "전성진",
      "전승민",
      "김현민",
      "곤잘로",
      "빌레로"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 11,
      "possession": 61,
      "corners": 2,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "홍준호",
      "윤석영",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "박대한",
      "오반석",
      "조위제",
      "장호익",
      "김진래",
      "임민혁",
      "사비에르",
      "이현규",
      "손석용",
      "윤민호",
      "백가온"
    ],
    "homeSubstitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "이지승",
      "이동원",
      "마테우징요",
      "김병오"
    ],
    "awaySubstitutes": [
      "구상민",
      "김동욱",
      "전성진",
      "전승민",
      "김현민",
      "곤잘로",
      "빌레로"
    ],
    "homeScorers": [],
    "awayScorers": [
      "곤잘로 29'",
      "곤잘로 35'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 여승원 18'",
      "경고 가브리엘 44'",
      "경고 김병오 45'"
    ],
    "awayCards": [
      "경고 김진래 18'",
      "경고 백가온 46'",
      "경고 빌레로 49'"
    ]
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
    "scorers": [
      "발디비아 29'",
      "김예성 24'",
      "김도윤 44'",
      "김도윤 47'",
      "여승원 49'"
    ],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [
      "최봉진",
      "구현준",
      "고태원",
      "유지하",
      "김예성",
      "김용환",
      "알베르띠",
      "윤민호",
      "발디비아",
      "호난",
      "정강민",
      "이승환",
      "홍준호",
      "정성우",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로",
      "김병오"
    ],
    "substitutes": [
      "강정묵",
      "안재민",
      "최정원",
      "임찬울",
      "박태용",
      "김도윤",
      "레안드로",
      "조수혁",
      "임준영",
      "송진규",
      "이지승",
      "이동원",
      "송창석",
      "이형경"
    ],
    "stats": {
      "shots": 19,
      "shotsAgainst": 14,
      "possession": 46,
      "corners": 3,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "최봉진",
      "구현준",
      "고태원",
      "유지하",
      "김예성",
      "김용환",
      "알베르띠",
      "윤민호",
      "발디비아",
      "호난",
      "정강민"
    ],
    "awayLineup": [
      "이승환",
      "홍준호",
      "정성우",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로",
      "김병오"
    ],
    "homeSubstitutes": [
      "강정묵",
      "안재민",
      "최정원",
      "임찬울",
      "박태용",
      "김도윤",
      "레안드로"
    ],
    "awaySubstitutes": [
      "조수혁",
      "임준영",
      "송진규",
      "이지승",
      "이동원",
      "송창석",
      "이형경"
    ],
    "homeScorers": [
      "발디비아 29'",
      "김예성 24'",
      "김도윤 44'",
      "김도윤 47'"
    ],
    "awayScorers": [
      "여승원 49'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": []
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
    "yellowCards": [
      "장민준 11'"
    ],
    "redCards": [
      "김영환 38'"
    ],
    "startingLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "마테우징요",
      "가브리엘",
      "페드로",
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "박시화",
      "배수민",
      "손준석",
      "임지민",
      "송태성",
      "김우빈",
      "류승완"
    ],
    "substitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "이지승",
      "이동원",
      "송창석",
      "이형경",
      "조성훈",
      "이규빈",
      "안재준",
      "정용희",
      "라파",
      "박채준",
      "서명식"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 10,
      "possession": 55,
      "corners": 5,
      "fouls": 16
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "김영환",
      "여승원",
      "이강한",
      "마테우징요",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "박시화",
      "배수민",
      "손준석",
      "임지민",
      "송태성",
      "김우빈",
      "류승완"
    ],
    "homeSubstitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "이지승",
      "이동원",
      "송창석",
      "이형경"
    ],
    "awaySubstitutes": [
      "조성훈",
      "이규빈",
      "안재준",
      "정용희",
      "라파",
      "박채준",
      "서명식"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "퇴장 김영환 38'"
    ],
    "awayCards": [
      "경고 장민준 11'"
    ]
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
    "scorers": [
      "가브리엘 39'",
      "박민서 19'",
      "카릴 29'"
    ],
    "assists": [],
    "yellowCards": [
      "이시헌 14'",
      "문승민 24'",
      "임준영 9'",
      "가브리엘 41'",
      "우주성 44'",
      "박원재 46'",
      "도동현 46'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "송진규",
      "문승민",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로",
      "최필수",
      "박원재",
      "박재환",
      "우주성",
      "이준재",
      "이강희",
      "헤난",
      "이시헌",
      "정충근",
      "박기현",
      "카릴"
    ],
    "substitutes": [
      "정진욱",
      "정성우",
      "이지승",
      "이동원",
      "송창석",
      "지언학",
      "이형경",
      "안호진",
      "이규백",
      "한석종",
      "박민서",
      "송시우",
      "도동현",
      "이중민"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 7,
      "possession": 40,
      "corners": 0,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "송진규",
      "문승민",
      "여승원",
      "이강한",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "최필수",
      "박원재",
      "박재환",
      "우주성",
      "이준재",
      "이강희",
      "헤난",
      "이시헌",
      "정충근",
      "박기현",
      "카릴"
    ],
    "homeSubstitutes": [
      "정진욱",
      "정성우",
      "이지승",
      "이동원",
      "송창석",
      "지언학",
      "이형경"
    ],
    "awaySubstitutes": [
      "안호진",
      "이규백",
      "한석종",
      "박민서",
      "송시우",
      "도동현",
      "이중민"
    ],
    "homeScorers": [
      "가브리엘 39'"
    ],
    "awayScorers": [
      "박민서 19'",
      "카릴 29'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 문승민 24'",
      "경고 임준영 9'",
      "경고 가브리엘 41'"
    ],
    "awayCards": [
      "경고 이시헌 14'",
      "경고 우주성 44'",
      "경고 박원재 46'",
      "경고 도동현 46'"
    ]
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
    "scorers": [
      "한교원 14'",
      "김종민 25'"
    ],
    "assists": [],
    "yellowCards": [
      "박종민 40'",
      "홍준호 15'",
      "임준영 32'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "송진규",
      "문승민",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로",
      "신송훈",
      "이학민",
      "조주영",
      "변준영",
      "박종민",
      "김영남",
      "손준호",
      "데니손",
      "김승호",
      "한교원",
      "김종민"
    ],
    "substitutes": [
      "정진욱",
      "정성우",
      "이지승",
      "이동원",
      "홍석준",
      "송창석",
      "지언학",
      "김진영",
      "김주성",
      "정도진",
      "최치원",
      "유동규",
      "이연우",
      "미사키"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 13,
      "possession": 54,
      "corners": 6,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "송진규",
      "문승민",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "신송훈",
      "이학민",
      "조주영",
      "변준영",
      "박종민",
      "김영남",
      "손준호",
      "데니손",
      "김승호",
      "한교원",
      "김종민"
    ],
    "homeSubstitutes": [
      "정진욱",
      "정성우",
      "이지승",
      "이동원",
      "홍석준",
      "송창석",
      "지언학"
    ],
    "awaySubstitutes": [
      "김진영",
      "김주성",
      "정도진",
      "최치원",
      "유동규",
      "이연우",
      "미사키"
    ],
    "homeScorers": [],
    "awayScorers": [
      "한교원 14'",
      "김종민 25'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍준호 15'",
      "경고 임준영 32'"
    ],
    "awayCards": [
      "경고 박종민 40'"
    ]
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
    "scorers": [
      "후이즈 40'"
    ],
    "assists": [],
    "yellowCards": [
      "허승찬 38'",
      "이창훈 34'",
      "박병규 49'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "허승찬",
      "지언학",
      "이동원",
      "이창훈",
      "김선민",
      "김영환",
      "최강민",
      "송진규",
      "이승재",
      "홍석준",
      "양한빈",
      "정승용",
      "김주원",
      "베니시오",
      "신재원",
      "이준상",
      "박수빈",
      "이재욱",
      "김범수",
      "정원진",
      "후이즈"
    ],
    "substitutes": [
      "정진욱",
      "윤석영",
      "정성우",
      "이강한",
      "문승민",
      "가브리엘",
      "페드로",
      "정명제",
      "강의빈",
      "홍창범",
      "류준선",
      "김훈민",
      "박병규",
      "박지원"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 13,
      "possession": 46,
      "corners": 2,
      "fouls": 21
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "허승찬",
      "지언학",
      "이동원",
      "이창훈",
      "김선민",
      "김영환",
      "최강민",
      "송진규",
      "이승재",
      "홍석준"
    ],
    "awayLineup": [
      "양한빈",
      "정승용",
      "김주원",
      "베니시오",
      "신재원",
      "이준상",
      "박수빈",
      "이재욱",
      "김범수",
      "정원진",
      "후이즈"
    ],
    "homeSubstitutes": [
      "정진욱",
      "윤석영",
      "정성우",
      "이강한",
      "문승민",
      "가브리엘",
      "페드로"
    ],
    "awaySubstitutes": [
      "정명제",
      "강의빈",
      "홍창범",
      "류준선",
      "김훈민",
      "박병규",
      "박지원"
    ],
    "homeScorers": [],
    "awayScorers": [
      "후이즈 40'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 허승찬 38'",
      "경고 이창훈 34'"
    ],
    "awayCards": [
      "경고 박병규 49'"
    ]
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
    "scorers": [
      "페신 5'",
      "김영환 19'",
      "홍욱현 26'",
      "페드로 46'"
    ],
    "assists": [],
    "yellowCards": [
      "조위제 20'",
      "임준영 28'",
      "반 데 아벌트 41'",
      "가브리엘 31'"
    ],
    "redCards": [],
    "startingLineup": [
      "구상민",
      "홍욱현",
      "조위제",
      "장호익",
      "전성진",
      "이동수",
      "임민혁",
      "김현민",
      "빌레로",
      "곤잘로",
      "페신",
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "이승재",
      "홍석준",
      "이동원"
    ],
    "substitutes": [
      "박대한",
      "홍재석",
      "김세훈",
      "손휘",
      "백가온",
      "최기윤",
      "손석용",
      "조수혁",
      "윤석영",
      "이창훈",
      "최성근",
      "가브리엘",
      "페드로",
      "송창석"
    ],
    "stats": {
      "shots": 15,
      "shotsAgainst": 11,
      "possession": 40,
      "corners": 6,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "구상민",
      "홍욱현",
      "조위제",
      "장호익",
      "전성진",
      "이동수",
      "임민혁",
      "김현민",
      "빌레로",
      "곤잘로",
      "페신"
    ],
    "awayLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "이승재",
      "홍석준",
      "이동원"
    ],
    "homeSubstitutes": [
      "박대한",
      "홍재석",
      "김세훈",
      "손휘",
      "백가온",
      "최기윤",
      "손석용"
    ],
    "awaySubstitutes": [
      "조수혁",
      "윤석영",
      "이창훈",
      "최성근",
      "가브리엘",
      "페드로",
      "송창석"
    ],
    "homeScorers": [
      "페신 5'",
      "홍욱현 26'"
    ],
    "awayScorers": [
      "김영환 19'",
      "페드로 46'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 조위제 20'"
    ],
    "awayCards": [
      "경고 임준영 28'",
      "경고 반 데 아벌트 41'",
      "경고 가브리엘 31'"
    ]
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
    "scorers": [
      "홍석준 14'",
      "최강민 14'",
      "하남 25'",
      "고태원 50'"
    ],
    "assists": [],
    "yellowCards": [
      "임준영 8'",
      "고태원 11'",
      "김용환 16'",
      "안재민 37'",
      "김예성 45'"
    ],
    "redCards": [],
    "startingLineup": [
      "조수혁",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "이승재",
      "홍석준",
      "이동원",
      "성윤수",
      "유지하",
      "고태원",
      "노동건",
      "김예성",
      "김용환",
      "알베르띠",
      "노건우",
      "발디비아",
      "김도윤",
      "정지용"
    ],
    "substitutes": [
      "정진욱",
      "윤석영",
      "이창훈",
      "최성근",
      "서재원",
      "가브리엘",
      "페드로",
      "최봉진",
      "안재민",
      "최정원",
      "양지산",
      "윤민호",
      "임찬울",
      "하남"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 9,
      "possession": 41,
      "corners": 5,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "조수혁",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "이승재",
      "홍석준",
      "이동원"
    ],
    "awayLineup": [
      "성윤수",
      "유지하",
      "고태원",
      "노동건",
      "김예성",
      "김용환",
      "알베르띠",
      "노건우",
      "발디비아",
      "김도윤",
      "정지용"
    ],
    "homeSubstitutes": [
      "정진욱",
      "윤석영",
      "이창훈",
      "최성근",
      "서재원",
      "가브리엘",
      "페드로"
    ],
    "awaySubstitutes": [
      "최봉진",
      "안재민",
      "최정원",
      "양지산",
      "윤민호",
      "임찬울",
      "하남"
    ],
    "homeScorers": [
      "홍석준 14'",
      "최강민 14'"
    ],
    "awayScorers": [
      "하남 25'",
      "고태원 50'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 임준영 8'"
    ],
    "awayCards": [
      "경고 고태원 11'",
      "경고 김용환 16'",
      "경고 안재민 37'",
      "경고 김예성 45'"
    ]
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
    "scorers": [
      "정재민 8'",
      "페드로 10'",
      "김영환 32'"
    ],
    "assists": [],
    "yellowCards": [
      "차승현 24'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "가브리엘",
      "페드로",
      "김민호",
      "배진우",
      "김오규",
      "곽윤호",
      "김주환",
      "배서준",
      "오스마르",
      "백지웅",
      "에울레르",
      "정재민",
      "아이데일"
    ],
    "substitutes": [
      "이승환",
      "윤석영",
      "이강한",
      "이창훈",
      "이동원",
      "이승재",
      "홍석준",
      "노동건",
      "강민재",
      "차승현",
      "김영욱",
      "허용준",
      "이주혁",
      "까리우스"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 10,
      "possession": 49,
      "corners": 1,
      "fouls": 8
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "가브리엘",
      "페드로"
    ],
    "awayLineup": [
      "김민호",
      "배진우",
      "김오규",
      "곽윤호",
      "김주환",
      "배서준",
      "오스마르",
      "백지웅",
      "에울레르",
      "정재민",
      "아이데일"
    ],
    "homeSubstitutes": [
      "이승환",
      "윤석영",
      "이강한",
      "이창훈",
      "이동원",
      "이승재",
      "홍석준"
    ],
    "awaySubstitutes": [
      "노동건",
      "강민재",
      "차승현",
      "김영욱",
      "허용준",
      "이주혁",
      "까리우스"
    ],
    "homeScorers": [
      "페드로 10'",
      "김영환 32'"
    ],
    "awayScorers": [
      "정재민 8'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 차승현 24'"
    ]
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
    "scorers": [
      "파울리뇨 41'"
    ],
    "assists": [],
    "yellowCards": [
      "이승환 17'",
      "페드로 20'",
      "파울리뇨 24'",
      "임준영 32'",
      "이창훈 36'",
      "최영준 44'"
    ],
    "redCards": [],
    "startingLineup": [
      "양형모",
      "이기제",
      "레오",
      "황석호",
      "이건희",
      "이규성",
      "이민혁",
      "김지현",
      "브루노 실바",
      "세라핌",
      "일류첸코",
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로",
      "홍석준"
    ],
    "substitutes": [
      "김민준",
      "권완규",
      "정동윤",
      "최영준",
      "강현묵",
      "파울리뇨",
      "박승수",
      "정진욱",
      "윤석영",
      "이창훈",
      "최성근",
      "이동원",
      "서재원",
      "이승재"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 9,
      "possession": 52,
      "corners": 8,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "양형모",
      "이기제",
      "레오",
      "황석호",
      "이건희",
      "이규성",
      "이민혁",
      "김지현",
      "브루노 실바",
      "세라핌",
      "일류첸코"
    ],
    "awayLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로",
      "홍석준"
    ],
    "homeSubstitutes": [
      "김민준",
      "권완규",
      "정동윤",
      "최영준",
      "강현묵",
      "파울리뇨",
      "박승수"
    ],
    "awaySubstitutes": [
      "정진욱",
      "윤석영",
      "이창훈",
      "최성근",
      "이동원",
      "서재원",
      "이승재"
    ],
    "homeScorers": [
      "파울리뇨 41'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 파울리뇨 24'",
      "경고 최영준 44'"
    ],
    "awayCards": [
      "경고 이승환 17'",
      "경고 페드로 20'",
      "경고 임준영 32'",
      "경고 이창훈 36'"
    ]
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
    "scorers": [
      "이승재 12'",
      "툰가라 19'",
      "가브리엘 22'"
    ],
    "assists": [],
    "yellowCards": [
      "툰가라 28'",
      "이광진 35'",
      "강영훈 52'",
      "김선민 17'",
      "이상준 28'",
      "이지훈 35'",
      "이강한 45'",
      "이동원 51'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로",
      "이승재",
      "허자웅",
      "강영훈",
      "이웅희",
      "이상명",
      "김영선",
      "김성준",
      "이광진",
      "펠리페",
      "미사키",
      "툰가라",
      "명준재"
    ],
    "substitutes": [
      "조수혁",
      "홍준호",
      "이창훈",
      "문승민",
      "최성근",
      "이동원",
      "서재원",
      "제종현",
      "최진웅",
      "구대영",
      "이종성",
      "구종욱",
      "이상준",
      "이지훈"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 11,
      "possession": 49,
      "corners": 5,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "가브리엘",
      "페드로",
      "이승재"
    ],
    "awayLineup": [
      "허자웅",
      "강영훈",
      "이웅희",
      "이상명",
      "김영선",
      "김성준",
      "이광진",
      "펠리페",
      "미사키",
      "툰가라",
      "명준재"
    ],
    "homeSubstitutes": [
      "조수혁",
      "홍준호",
      "이창훈",
      "문승민",
      "최성근",
      "이동원",
      "서재원"
    ],
    "awaySubstitutes": [
      "제종현",
      "최진웅",
      "구대영",
      "이종성",
      "구종욱",
      "이상준",
      "이지훈"
    ],
    "homeScorers": [
      "이승재 12'",
      "가브리엘 22'"
    ],
    "awayScorers": [
      "툰가라 19'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 김선민 17'",
      "경고 이강한 45'",
      "경고 이동원 51'"
    ],
    "awayCards": [
      "경고 툰가라 28'",
      "경고 이광진 35'",
      "경고 강영훈 52'",
      "경고 이상준 28'",
      "경고 이지훈 35'"
    ]
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
    "scorers": [
      "디자우마 5'",
      "김민우 27'",
      "박동진 47'"
    ],
    "assists": [],
    "yellowCards": [
      "최재훈 8'",
      "디자우마 21'",
      "손정현 27'",
      "윤재운 48'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "홍석준",
      "손정현",
      "이찬형",
      "채프먼",
      "김동민",
      "윤재운",
      "최재훈",
      "디자우마",
      "김지훈",
      "김결",
      "정우빈",
      "제갈재민"
    ],
    "substitutes": [
      "정진욱",
      "임준영",
      "최성근",
      "이동원",
      "서재원",
      "송창석",
      "이창훈",
      "윤보상",
      "박경록",
      "김민식",
      "박동진",
      "김민우",
      "플라나",
      "루이스"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 12,
      "possession": 59,
      "corners": 4,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "홍석준"
    ],
    "awayLineup": [
      "손정현",
      "이찬형",
      "채프먼",
      "김동민",
      "윤재운",
      "최재훈",
      "디자우마",
      "김지훈",
      "김결",
      "정우빈",
      "제갈재민"
    ],
    "homeSubstitutes": [
      "정진욱",
      "임준영",
      "최성근",
      "이동원",
      "서재원",
      "송창석",
      "이창훈"
    ],
    "awaySubstitutes": [
      "윤보상",
      "박경록",
      "김민식",
      "박동진",
      "김민우",
      "플라나",
      "루이스"
    ],
    "homeScorers": [],
    "awayScorers": [
      "디자우마 5'",
      "김민우 27'",
      "박동진 47'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 최재훈 8'",
      "경고 디자우마 21'",
      "경고 손정현 27'",
      "경고 윤재운 48'"
    ]
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
    "scorers": [
      "김영환 29'",
      "제페르손 44'",
      "이승재 40'"
    ],
    "assists": [],
    "yellowCards": [
      "송태성 14'",
      "장민준 34'",
      "최성근 40'",
      "최성근",
      "김건오 12'",
      "제페르손 42'",
      "정진욱 55'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "박시화",
      "김건오",
      "손준석",
      "배수민",
      "송태성",
      "제페르손",
      "류승완",
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "최성근",
      "윤석영",
      "최강민",
      "서재원",
      "김영환",
      "지언학"
    ],
    "substitutes": [
      "조성훈",
      "에두",
      "박정우",
      "라파",
      "사라이바",
      "서명식",
      "이지성",
      "이승환",
      "이강한",
      "이지승",
      "페드로",
      "이승재",
      "이형경",
      "이창훈"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 8,
      "possession": 57,
      "corners": 6,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "박시화",
      "김건오",
      "손준석",
      "배수민",
      "송태성",
      "제페르손",
      "류승완"
    ],
    "awayLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "최성근",
      "윤석영",
      "최강민",
      "서재원",
      "김영환",
      "지언학"
    ],
    "homeSubstitutes": [
      "조성훈",
      "에두",
      "박정우",
      "라파",
      "사라이바",
      "서명식",
      "이지성"
    ],
    "awaySubstitutes": [
      "이승환",
      "이강한",
      "이지승",
      "페드로",
      "이승재",
      "이형경",
      "이창훈"
    ],
    "homeScorers": [
      "제페르손 44'"
    ],
    "awayScorers": [
      "김영환 29'",
      "이승재 40'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 송태성 14'",
      "경고 장민준 34'",
      "경고 김건오 12'",
      "경고 제페르손 42'"
    ],
    "awayCards": [
      "경고 최성근 40'",
      "경고 최성근",
      "경고 정진욱 55'"
    ]
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
    "scorers": [
      "몬타뇨 13'"
    ],
    "assists": [],
    "yellowCards": [
      "카즈 18'",
      "박현빈 33'",
      "임준영 41'",
      "이의형 31'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "이지승",
      "윤석영",
      "최강민",
      "페드로",
      "김영환",
      "지언학",
      "김형근",
      "정호진",
      "이예찬",
      "백동규",
      "김규민",
      "카즈",
      "박현빈",
      "티아깅요",
      "성신",
      "몬타뇨",
      "이의형"
    ],
    "substitutes": [
      "이승환",
      "이강한",
      "서재원",
      "홍석준",
      "양영빈",
      "이형경",
      "이창훈",
      "김현엽",
      "전인규",
      "유승현",
      "최원철",
      "최재영",
      "김동현",
      "공민현"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 8,
      "possession": 50,
      "corners": 4,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "이지승",
      "윤석영",
      "최강민",
      "페드로",
      "김영환",
      "지언학"
    ],
    "awayLineup": [
      "김형근",
      "정호진",
      "이예찬",
      "백동규",
      "김규민",
      "카즈",
      "박현빈",
      "티아깅요",
      "성신",
      "몬타뇨",
      "이의형"
    ],
    "homeSubstitutes": [
      "이승환",
      "이강한",
      "서재원",
      "홍석준",
      "양영빈",
      "이형경",
      "이창훈"
    ],
    "awaySubstitutes": [
      "김현엽",
      "전인규",
      "유승현",
      "최원철",
      "최재영",
      "김동현",
      "공민현"
    ],
    "homeScorers": [],
    "awayScorers": [
      "몬타뇨 13'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 임준영 41'"
    ],
    "awayCards": [
      "경고 카즈 18'",
      "경고 박현빈 33'",
      "경고 이의형 31'"
    ]
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
    "scorers": [
      "이강한 6'",
      "임창석 49'"
    ],
    "assists": [],
    "yellowCards": [
      "박준서 11'",
      "김대환 10'",
      "이승환 44'",
      "이형경 52'",
      "최명희 53'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "최성근",
      "임준영",
      "최강민",
      "페드로",
      "김영환",
      "이강한",
      "김승건",
      "조동재",
      "연제민",
      "보이노비치",
      "박준서",
      "김대환",
      "최준혁",
      "임창석",
      "데메트리우스",
      "전성진",
      "박주영"
    ],
    "substitutes": [
      "조수혁",
      "이지승",
      "이동원",
      "서재원",
      "홍석준",
      "이형경",
      "이창훈",
      "이기현",
      "우제욱",
      "알뚤",
      "최명희",
      "백승우",
      "함선우",
      "박재성"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 9,
      "possession": 50,
      "corners": 4,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "최성근",
      "임준영",
      "최강민",
      "페드로",
      "김영환",
      "이강한"
    ],
    "awayLineup": [
      "김승건",
      "조동재",
      "연제민",
      "보이노비치",
      "박준서",
      "김대환",
      "최준혁",
      "임창석",
      "데메트리우스",
      "전성진",
      "박주영"
    ],
    "homeSubstitutes": [
      "조수혁",
      "이지승",
      "이동원",
      "서재원",
      "홍석준",
      "이형경",
      "이창훈"
    ],
    "awaySubstitutes": [
      "이기현",
      "우제욱",
      "알뚤",
      "최명희",
      "백승우",
      "함선우",
      "박재성"
    ],
    "homeScorers": [
      "이강한 6'"
    ],
    "awayScorers": [
      "임창석 49'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이승환 44'",
      "경고 이형경 52'"
    ],
    "awayCards": [
      "경고 박준서 11'",
      "경고 김대환 10'",
      "경고 최명희 53'"
    ]
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
    "scorers": [
      "제르소 17'",
      "박호민 39'",
      "제르소 9'",
      "박승호 42'"
    ],
    "assists": [],
    "yellowCards": [
      "민성준 39'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "이지승",
      "윤석영",
      "최강민",
      "페드로",
      "지언학",
      "이강한",
      "민성준",
      "이주용",
      "김건웅",
      "김건희",
      "김명순",
      "백민규",
      "정원진",
      "이명주",
      "제르소",
      "박승호",
      "박호민"
    ],
    "substitutes": [
      "조수혁",
      "최성근",
      "서재원",
      "이승재",
      "홍석준",
      "이형경",
      "이창훈",
      "김동헌",
      "이상기",
      "델브리지",
      "김성민",
      "김민석",
      "신진호",
      "무고사"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 13,
      "possession": 41,
      "corners": 4,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "임준영",
      "김선민",
      "이지승",
      "윤석영",
      "최강민",
      "페드로",
      "지언학",
      "이강한"
    ],
    "awayLineup": [
      "민성준",
      "이주용",
      "김건웅",
      "김건희",
      "김명순",
      "백민규",
      "정원진",
      "이명주",
      "제르소",
      "박승호",
      "박호민"
    ],
    "homeSubstitutes": [
      "조수혁",
      "최성근",
      "서재원",
      "이승재",
      "홍석준",
      "이형경",
      "이창훈"
    ],
    "awaySubstitutes": [
      "김동헌",
      "이상기",
      "델브리지",
      "김성민",
      "김민석",
      "신진호",
      "무고사"
    ],
    "homeScorers": [],
    "awayScorers": [
      "제르소 17'",
      "박호민 39'",
      "제르소 9'",
      "박승호 42'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 민성준 39'"
    ]
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
    "scorers": [
      "오반석 47'",
      "이승재 12'",
      "이동수 15'",
      "홍준호 22'"
    ],
    "assists": [],
    "yellowCards": [
      "사비에르 1'",
      "홍준호 20'",
      "최강민 40'",
      "홍석준 51'"
    ],
    "redCards": [],
    "startingLineup": [
      "구상민",
      "오반석",
      "홍욱현",
      "장호익",
      "전성진",
      "사비에르",
      "이동수",
      "박창우",
      "빌레로",
      "곤잘로",
      "페신",
      "조수혁",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "이지승",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "지언학"
    ],
    "substitutes": [
      "박대한",
      "정호근",
      "김동욱",
      "손휘",
      "이현준",
      "조민호",
      "최기윤",
      "이승환",
      "반 데 아벌트",
      "윤석영",
      "문승민",
      "서재원",
      "홍석준",
      "송창석"
    ],
    "stats": {
      "shots": 10,
      "shotsAgainst": 8,
      "possession": 59,
      "corners": 7,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "구상민",
      "오반석",
      "홍욱현",
      "장호익",
      "전성진",
      "사비에르",
      "이동수",
      "박창우",
      "빌레로",
      "곤잘로",
      "페신"
    ],
    "awayLineup": [
      "조수혁",
      "홍준호",
      "임준영",
      "이창훈",
      "김선민",
      "이지승",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "지언학"
    ],
    "homeSubstitutes": [
      "박대한",
      "정호근",
      "김동욱",
      "손휘",
      "이현준",
      "조민호",
      "최기윤"
    ],
    "awaySubstitutes": [
      "이승환",
      "반 데 아벌트",
      "윤석영",
      "문승민",
      "서재원",
      "홍석준",
      "송창석"
    ],
    "homeScorers": [
      "오반석 47'",
      "이동수 15'"
    ],
    "awayScorers": [
      "이승재 12'",
      "홍준호 22'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 사비에르 1'"
    ],
    "awayCards": [
      "경고 홍준호 20'",
      "경고 최강민 40'",
      "경고 홍석준 51'"
    ]
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
    "scorers": [
      "이찬동 42'"
    ],
    "assists": [],
    "yellowCards": [
      "김형진 5'",
      "여봉훈 30'",
      "이찬동 44'"
    ],
    "redCards": [],
    "startingLineup": [
      "조수혁",
      "반 데 아벌트",
      "홍준호",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "홍석준",
      "류원우",
      "김선호",
      "박재환",
      "김형진",
      "이준재",
      "이찬동",
      "브루노 코스타",
      "헤난",
      "박민서",
      "이중민",
      "마세도"
    ],
    "substitutes": [
      "이승환",
      "문승민",
      "이지승",
      "여봉훈",
      "서재원",
      "송창석",
      "이창훈",
      "최필수",
      "김형원",
      "박원재",
      "김하민",
      "박태용",
      "도동현",
      "카릴"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 14,
      "possession": 41,
      "corners": 3,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "조수혁",
      "반 데 아벌트",
      "홍준호",
      "윤석영",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "이승재",
      "홍석준"
    ],
    "awayLineup": [
      "류원우",
      "김선호",
      "박재환",
      "김형진",
      "이준재",
      "이찬동",
      "브루노 코스타",
      "헤난",
      "박민서",
      "이중민",
      "마세도"
    ],
    "homeSubstitutes": [
      "이승환",
      "문승민",
      "이지승",
      "여봉훈",
      "서재원",
      "송창석",
      "이창훈"
    ],
    "awaySubstitutes": [
      "최필수",
      "김형원",
      "박원재",
      "김하민",
      "박태용",
      "도동현",
      "카릴"
    ],
    "homeScorers": [],
    "awayScorers": [
      "이찬동 42'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 여봉훈 30'"
    ],
    "awayCards": [
      "경고 김형진 5'",
      "경고 이찬동 44'"
    ]
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
    "scorers": [
      "후이즈 26'"
    ],
    "assists": [],
    "yellowCards": [
      "홍석준 11'",
      "여봉훈 44'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "문승민",
      "이강한",
      "최강민",
      "김영환",
      "홍석준",
      "이형경",
      "양한빈",
      "정승용",
      "베니시오",
      "이상민",
      "신재원",
      "양태양",
      "박수빈",
      "사무엘",
      "이정빈",
      "류준선",
      "후이즈"
    ],
    "substitutes": [
      "조수혁",
      "반 데 아벌트",
      "이지승",
      "여봉훈",
      "서재원",
      "페드로",
      "이승재",
      "박지민",
      "박상혁",
      "양시후",
      "김정환",
      "김범수",
      "이재욱",
      "박광일"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 4,
      "possession": 30,
      "corners": 8,
      "fouls": 13
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "문승민",
      "이강한",
      "최강민",
      "김영환",
      "홍석준",
      "이형경"
    ],
    "awayLineup": [
      "양한빈",
      "정승용",
      "베니시오",
      "이상민",
      "신재원",
      "양태양",
      "박수빈",
      "사무엘",
      "이정빈",
      "류준선",
      "후이즈"
    ],
    "homeSubstitutes": [
      "조수혁",
      "반 데 아벌트",
      "이지승",
      "여봉훈",
      "서재원",
      "페드로",
      "이승재"
    ],
    "awaySubstitutes": [
      "박지민",
      "박상혁",
      "양시후",
      "김정환",
      "김범수",
      "이재욱",
      "박광일"
    ],
    "homeScorers": [],
    "awayScorers": [
      "후이즈 26'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍석준 11'",
      "경고 여봉훈 44'"
    ],
    "awayCards": []
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
    "yellowCards": [
      "반 데 아벌트 25'",
      "페드로 46'",
      "문승민 12'",
      "이강한 38'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "정용희",
      "배수민",
      "손준석",
      "라파",
      "사라이바",
      "제페르손",
      "김우빈",
      "정진욱",
      "반 데 아벌트",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "윤석영",
      "최강민",
      "페드로",
      "이승재",
      "이강한"
    ],
    "substitutes": [
      "조성훈",
      "박시화",
      "임지민",
      "에두",
      "김건오",
      "류승완",
      "강수일",
      "조수혁",
      "정성우",
      "문승민",
      "이지승",
      "이동원",
      "서재원",
      "홍석준"
    ],
    "stats": {
      "shots": 12,
      "shotsAgainst": 2,
      "possession": 61,
      "corners": 3,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승빈",
      "장민준",
      "조지훈",
      "김현태",
      "정용희",
      "배수민",
      "손준석",
      "라파",
      "사라이바",
      "제페르손",
      "김우빈"
    ],
    "awayLineup": [
      "정진욱",
      "반 데 아벌트",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "윤석영",
      "최강민",
      "페드로",
      "이승재",
      "이강한"
    ],
    "homeSubstitutes": [
      "조성훈",
      "박시화",
      "임지민",
      "에두",
      "김건오",
      "류승완",
      "강수일"
    ],
    "awaySubstitutes": [
      "조수혁",
      "정성우",
      "문승민",
      "이지승",
      "이동원",
      "서재원",
      "홍석준"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": [
      "경고 반 데 아벌트 25'",
      "경고 페드로 46'",
      "경고 문승민 12'",
      "경고 이강한 38'"
    ]
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
    "scorers": [
      "이상준 14'"
    ],
    "assists": [],
    "yellowCards": [
      "이승재 29'",
      "강영훈 53'",
      "마상훈 10'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "이승재",
      "이동원",
      "양영빈",
      "허자웅",
      "강영훈",
      "마상훈",
      "이상명",
      "김영선",
      "이종성",
      "이광진",
      "이예찬",
      "구종욱",
      "이정협",
      "툰가라"
    ],
    "substitutes": [
      "이승환",
      "정성우",
      "최성근",
      "이지승",
      "페드로",
      "홍석준",
      "이원준",
      "제종현",
      "김성주",
      "미사키",
      "하재민",
      "정석화",
      "이상준",
      "브루노"
    ],
    "stats": {
      "shots": 8,
      "shotsAgainst": 4,
      "possession": 58,
      "corners": 6,
      "fouls": 12
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "이승재",
      "이동원",
      "양영빈"
    ],
    "awayLineup": [
      "허자웅",
      "강영훈",
      "마상훈",
      "이상명",
      "김영선",
      "이종성",
      "이광진",
      "이예찬",
      "구종욱",
      "이정협",
      "툰가라"
    ],
    "homeSubstitutes": [
      "이승환",
      "정성우",
      "최성근",
      "이지승",
      "페드로",
      "홍석준",
      "이원준"
    ],
    "awaySubstitutes": [
      "제종현",
      "김성주",
      "미사키",
      "하재민",
      "정석화",
      "이상준",
      "브루노"
    ],
    "homeScorers": [],
    "awayScorers": [
      "이상준 14'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이승재 29'"
    ],
    "awayCards": [
      "경고 강영훈 53'",
      "경고 마상훈 10'"
    ]
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
    "yellowCards": [
      "양영빈 1'",
      "최희원 40'"
    ],
    "redCards": [],
    "startingLineup": [
      "신송훈",
      "장준영",
      "김영남",
      "이호인",
      "이학민",
      "김종석",
      "손준호",
      "박종민",
      "데니손",
      "은고이",
      "한교원",
      "정진욱",
      "홍준호",
      "이강한",
      "최강민",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "양영빈",
      "페드로",
      "이승재"
    ],
    "substitutes": [
      "김진영",
      "최희원",
      "김주성",
      "김승호",
      "박세직",
      "아담",
      "박시후",
      "이승환",
      "윤석영",
      "정성우",
      "최성근",
      "이지승",
      "이동원",
      "홍석준"
    ],
    "stats": {
      "shots": 14,
      "shotsAgainst": 10,
      "possession": 58,
      "corners": 6,
      "fouls": 11
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "신송훈",
      "장준영",
      "김영남",
      "이호인",
      "이학민",
      "김종석",
      "손준호",
      "박종민",
      "데니손",
      "은고이",
      "한교원"
    ],
    "awayLineup": [
      "정진욱",
      "홍준호",
      "이강한",
      "최강민",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "양영빈",
      "페드로",
      "이승재"
    ],
    "homeSubstitutes": [
      "김진영",
      "최희원",
      "김주성",
      "김승호",
      "박세직",
      "아담",
      "박시후"
    ],
    "awaySubstitutes": [
      "이승환",
      "윤석영",
      "정성우",
      "최성근",
      "이지승",
      "이동원",
      "홍석준"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 최희원 40'"
    ],
    "awayCards": [
      "경고 양영빈 1'"
    ]
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
    "scorers": [
      "윤재운 11'",
      "박동진 13'"
    ],
    "assists": [],
    "yellowCards": [
      "홍준호 22'",
      "반 데 아벌트 37'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "홍준호",
      "이강한",
      "최강민",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "양영빈",
      "페드로",
      "문승민",
      "손정현",
      "이찬형",
      "채프먼",
      "김동민",
      "김민식",
      "디자우마",
      "최재훈",
      "윤재운",
      "박동진",
      "조성준",
      "플라나"
    ],
    "substitutes": [
      "이승환",
      "반 데 아벌트",
      "윤석영",
      "최성근",
      "이지승",
      "이승재",
      "홍석준",
      "조주영",
      "김종민",
      "이상민",
      "홍시후",
      "김민우",
      "제갈재민",
      "김결"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 14,
      "possession": 61,
      "corners": 3,
      "fouls": 17
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "홍준호",
      "이강한",
      "최강민",
      "이창훈",
      "서재원",
      "김선민",
      "김영환",
      "양영빈",
      "페드로",
      "문승민"
    ],
    "awayLineup": [
      "손정현",
      "이찬형",
      "채프먼",
      "김동민",
      "김민식",
      "디자우마",
      "최재훈",
      "윤재운",
      "박동진",
      "조성준",
      "플라나"
    ],
    "homeSubstitutes": [
      "이승환",
      "반 데 아벌트",
      "윤석영",
      "최성근",
      "이지승",
      "이승재",
      "홍석준"
    ],
    "awaySubstitutes": [
      "조주영",
      "김종민",
      "이상민",
      "홍시후",
      "김민우",
      "제갈재민",
      "김결"
    ],
    "homeScorers": [],
    "awayScorers": [
      "윤재운 11'",
      "박동진 13'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 홍준호 22'",
      "경고 반 데 아벌트 37'"
    ],
    "awayCards": []
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
    "scorers": [
      "임창석 45'"
    ],
    "assists": [],
    "yellowCards": [
      "연제민 43'",
      "송창석 2'",
      "박건우 47'"
    ],
    "redCards": [],
    "startingLineup": [
      "김승건",
      "조동재",
      "연제민",
      "보이노비치",
      "임창석",
      "전성진",
      "최명희",
      "김준영",
      "데메트리우스",
      "알뚤",
      "김병오",
      "정진욱",
      "반 데 아벌트",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "송창석",
      "양영빈"
    ],
    "substitutes": [
      "이기현",
      "김대환",
      "우제욱",
      "박준서",
      "박창호",
      "리마",
      "이지한",
      "이승환",
      "박건우",
      "윤석영",
      "문승민",
      "허승찬",
      "서재원",
      "이승재"
    ],
    "stats": {
      "shots": 11,
      "shotsAgainst": 9,
      "possession": 54,
      "corners": 8,
      "fouls": 7
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "김승건",
      "조동재",
      "연제민",
      "보이노비치",
      "임창석",
      "전성진",
      "최명희",
      "김준영",
      "데메트리우스",
      "알뚤",
      "김병오"
    ],
    "awayLineup": [
      "정진욱",
      "반 데 아벌트",
      "홍준호",
      "이창훈",
      "김선민",
      "김영환",
      "이강한",
      "최강민",
      "페드로",
      "송창석",
      "양영빈"
    ],
    "homeSubstitutes": [
      "이기현",
      "김대환",
      "우제욱",
      "박준서",
      "박창호",
      "리마",
      "이지한"
    ],
    "awaySubstitutes": [
      "이승환",
      "박건우",
      "윤석영",
      "문승민",
      "허승찬",
      "서재원",
      "이승재"
    ],
    "homeScorers": [
      "임창석 45'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 연제민 43'"
    ],
    "awayCards": [
      "경고 송창석 2'",
      "경고 박건우 47'"
    ]
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
    "scorers": [
      "정강민 25'",
      "하남 43'",
      "정지용 38'"
    ],
    "assists": [],
    "yellowCards": [
      "송창석 7'",
      "하남 18'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "문승민",
      "이강한",
      "최강민",
      "페드로",
      "송창석",
      "양영빈",
      "최봉진",
      "유지하",
      "최한솔",
      "구현준",
      "김용환",
      "김예성",
      "발디비아",
      "알베르띠",
      "윤민호",
      "정강민",
      "하남"
    ],
    "substitutes": [
      "이승환",
      "박건우",
      "임준영",
      "김영환",
      "서재원",
      "이승재",
      "이형경",
      "이준",
      "장순혁",
      "김주엽",
      "박상준",
      "정지용",
      "호난",
      "르본"
    ],
    "stats": {
      "shots": 14,
      "shotsAgainst": 7,
      "possession": 57,
      "corners": 7,
      "fouls": 9
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "홍준호",
      "윤석영",
      "이창훈",
      "김선민",
      "문승민",
      "이강한",
      "최강민",
      "페드로",
      "송창석",
      "양영빈"
    ],
    "awayLineup": [
      "최봉진",
      "유지하",
      "최한솔",
      "구현준",
      "김용환",
      "김예성",
      "발디비아",
      "알베르띠",
      "윤민호",
      "정강민",
      "하남"
    ],
    "homeSubstitutes": [
      "이승환",
      "박건우",
      "임준영",
      "김영환",
      "서재원",
      "이승재",
      "이형경"
    ],
    "awaySubstitutes": [
      "이준",
      "장순혁",
      "김주엽",
      "박상준",
      "정지용",
      "호난",
      "르본"
    ],
    "homeScorers": [],
    "awayScorers": [
      "정강민 25'",
      "하남 43'",
      "정지용 38'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 송창석 7'"
    ],
    "awayCards": [
      "경고 하남 18'"
    ]
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
    "yellowCards": [
      "홍성욱 39'",
      "문승민 44'",
      "윤석영 32'"
    ],
    "redCards": [],
    "startingLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "문승민",
      "최강민",
      "김영환",
      "이원준",
      "이창훈",
      "김형근",
      "홍성욱",
      "이상혁",
      "정호진",
      "김규민",
      "카즈",
      "최재영",
      "티아깅요",
      "바사니",
      "이의형",
      "박창준"
    ],
    "substitutes": [
      "정진욱",
      "임준영",
      "정성우",
      "이강한",
      "이지승",
      "서재원",
      "이승재",
      "김현엽",
      "백동규",
      "최원철",
      "성신",
      "몬타뇨",
      "장시영",
      "갈레고"
    ],
    "stats": {
      "shots": 7,
      "shotsAgainst": 15,
      "possession": 44,
      "corners": 4,
      "fouls": 14
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "문승민",
      "최강민",
      "김영환",
      "이원준",
      "이창훈"
    ],
    "awayLineup": [
      "김형근",
      "홍성욱",
      "이상혁",
      "정호진",
      "김규민",
      "카즈",
      "최재영",
      "티아깅요",
      "바사니",
      "이의형",
      "박창준"
    ],
    "homeSubstitutes": [
      "정진욱",
      "임준영",
      "정성우",
      "이강한",
      "이지승",
      "서재원",
      "이승재"
    ],
    "awaySubstitutes": [
      "김현엽",
      "백동규",
      "최원철",
      "성신",
      "몬타뇨",
      "장시영",
      "갈레고"
    ],
    "homeScorers": [],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 문승민 44'",
      "경고 윤석영 32'"
    ],
    "awayCards": [
      "경고 홍성욱 39'"
    ]
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
    "scorers": [
      "김지현 4'",
      "브루노 실바 20'"
    ],
    "assists": [],
    "yellowCards": [],
    "redCards": [],
    "startingLineup": [
      "양형모",
      "이기제",
      "레오",
      "한호강",
      "정동윤",
      "박지원",
      "이규성",
      "홍원진",
      "강성진",
      "김지현",
      "김현",
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "이강한",
      "이창훈"
    ],
    "substitutes": [
      "김민준",
      "권완규",
      "이건희",
      "최영준",
      "일류첸코",
      "파울리뇨",
      "브루노 실바",
      "정진욱",
      "정성우",
      "문승민",
      "이지승",
      "페드로",
      "이승재",
      "이원준"
    ],
    "stats": {
      "shots": 13,
      "shotsAgainst": 13,
      "possession": 48,
      "corners": 4,
      "fouls": 15
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "양형모",
      "이기제",
      "레오",
      "한호강",
      "정동윤",
      "박지원",
      "이규성",
      "홍원진",
      "강성진",
      "김지현",
      "김현"
    ],
    "awayLineup": [
      "이승환",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "이강한",
      "이창훈"
    ],
    "homeSubstitutes": [
      "김민준",
      "권완규",
      "이건희",
      "최영준",
      "일류첸코",
      "파울리뇨",
      "브루노 실바"
    ],
    "awaySubstitutes": [
      "정진욱",
      "정성우",
      "문승민",
      "이지승",
      "페드로",
      "이승재",
      "이원준"
    ],
    "homeScorers": [
      "김지현 4'",
      "브루노 실바 20'"
    ],
    "awayScorers": [],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [],
    "awayCards": []
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
    "scorers": [
      "허용준 29'",
      "박창환 39'"
    ],
    "assists": [],
    "yellowCards": [
      "가브리엘 8'",
      "서재원 42'",
      "에울레르 10'",
      "최강민 28'"
    ],
    "redCards": [],
    "startingLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "이강한",
      "이창훈",
      "구성윤",
      "채광훈",
      "김하준",
      "김오규",
      "김주환",
      "박창환",
      "오스마르",
      "서재민",
      "가브리엘",
      "정재민",
      "에울레르"
    ],
    "substitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "문승민",
      "이지승",
      "이동원",
      "이승재",
      "김민호",
      "배진우",
      "오인표",
      "백지웅",
      "이주혁",
      "변경준",
      "허용준"
    ],
    "stats": {
      "shots": 9,
      "shotsAgainst": 14,
      "possession": 45,
      "corners": 5,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "정진욱",
      "반 데 아벌트",
      "허승찬",
      "윤석영",
      "김선민",
      "박건우",
      "김영환",
      "최강민",
      "서재원",
      "이강한",
      "이창훈"
    ],
    "awayLineup": [
      "구성윤",
      "채광훈",
      "김하준",
      "김오규",
      "김주환",
      "박창환",
      "오스마르",
      "서재민",
      "가브리엘",
      "정재민",
      "에울레르"
    ],
    "homeSubstitutes": [
      "조수혁",
      "정성우",
      "송진규",
      "문승민",
      "이지승",
      "이동원",
      "이승재"
    ],
    "awaySubstitutes": [
      "김민호",
      "배진우",
      "오인표",
      "백지웅",
      "이주혁",
      "변경준",
      "허용준"
    ],
    "homeScorers": [],
    "awayScorers": [
      "허용준 29'",
      "박창환 39'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 서재원 42'",
      "경고 최강민 28'"
    ],
    "awayCards": [
      "경고 가브리엘 8'",
      "경고 에울레르 10'"
    ]
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
    "scorers": [
      "송창석 21'"
    ],
    "assists": [],
    "yellowCards": [
      "이주용 44'",
      "최승구 5'",
      "김건웅 15'",
      "정진욱 51'",
      "이창훈 52'"
    ],
    "redCards": [],
    "startingLineup": [
      "민성준",
      "이주용",
      "임형진",
      "김건희",
      "최승구",
      "바로우",
      "정원진",
      "김건웅",
      "제르소",
      "박승호",
      "무고사",
      "정진욱",
      "허승찬",
      "윤석영",
      "이창훈",
      "김선민",
      "박건우",
      "김영환",
      "최성근",
      "최강민",
      "송창석",
      "지언학"
    ],
    "substitutes": [
      "김동헌",
      "델브리지",
      "김명순",
      "신진호",
      "김성민",
      "이동률",
      "박호민",
      "조수혁",
      "정성우",
      "이강한",
      "김윤환",
      "이지승",
      "여봉훈",
      "서재원"
    ],
    "stats": {
      "shots": 19,
      "shotsAgainst": 7,
      "possession": 61,
      "corners": 5,
      "fouls": 10
    },
    "articleLinks": [],
    "memo": "K리그 공식 데이터",
    "homeLineup": [
      "민성준",
      "이주용",
      "임형진",
      "김건희",
      "최승구",
      "바로우",
      "정원진",
      "김건웅",
      "제르소",
      "박승호",
      "무고사"
    ],
    "awayLineup": [
      "정진욱",
      "허승찬",
      "윤석영",
      "이창훈",
      "김선민",
      "박건우",
      "김영환",
      "최성근",
      "최강민",
      "송창석",
      "지언학"
    ],
    "homeSubstitutes": [
      "김동헌",
      "델브리지",
      "김명순",
      "신진호",
      "김성민",
      "이동률",
      "박호민"
    ],
    "awaySubstitutes": [
      "조수혁",
      "정성우",
      "이강한",
      "김윤환",
      "이지승",
      "여봉훈",
      "서재원"
    ],
    "homeScorers": [],
    "awayScorers": [
      "송창석 21'"
    ],
    "homeAssists": [],
    "awayAssists": [],
    "homeCards": [
      "경고 이주용 44'",
      "경고 최승구 5'",
      "경고 김건웅 15'"
    ],
    "awayCards": [
      "경고 정진욱 51'",
      "경고 이창훈 52'"
    ]
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
