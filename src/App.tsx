import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Layout from "./components/Layout";
import MatchCard from "./components/MatchCard";
import PlayerCard from "./components/PlayerCard";
import StatCard from "./components/StatCard";
import { appConfig } from "./config/appConfig";
import { archiveData, getTeamLogoUrl } from "./data/seasons";
import { fetchAutoArchiveData, fetchMatchDetails, fetchPlayerDetails, fetchSeasonPlayerStats } from "./services/liveArchive";
import type { AppTab, CompetitionType, Match, MatchStatus, Player, PlayerPosition, RankPoint, RecordTab } from "./types";

const playerFilterLabels: { id: "ALL" | PlayerPosition; label: string }[] = [
  { id: "ALL", label: "전체" },
  { id: "GK", label: "GK" },
  { id: "DF", label: "DF" },
  { id: "MF", label: "MF" },
  { id: "FW", label: "FW" },
  { id: "STAFF", label: "STAFF" }
];

const competitionFilters: { id: "all" | CompetitionType; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "league", label: "리그" },
  { id: "fa", label: "FA컵" },
  { id: "friendly", label: "친선" }
];

const statusFilters: { id: "all" | MatchStatus; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "scheduled", label: "예정" },
  { id: "finished", label: "종료" }
];

function isLiveSeason(season: string) {
  return season === "2026";
}

function getResultFlow(matches: Match[]) {
  return matches
    .filter((match) => match.status === "finished" && match.homeScore !== null && match.awayScore !== null)
    .slice(-5)
    .map((match) => {
      const isHome = match.homeTeam.includes("충북청주");
      const goalsFor = isHome ? match.homeScore ?? 0 : match.awayScore ?? 0;
      const goalsAgainst = isHome ? match.awayScore ?? 0 : match.homeScore ?? 0;
      if (goalsFor > goalsAgainst) return "승";
      if (goalsFor === goalsAgainst) return "무";
      return "패";
    });
}

function resultBadgeClass(result: string) {
  if (result === "승") return "bg-brand-red-600 text-white";
  if (result === "무") return "bg-slate-100 text-brand-navy-950 border border-slate-300";
  return "bg-brand-navy-900 text-white";
}

function koTeamName(value = "") {
  const upper = value.toUpperCase();
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
  if (upper.includes("SUWON FC")) return "수원 FC";
  if (upper.includes("SUWON")) return "수원 삼성";
  if (upper.includes("YONGIN")) return "용인 FC";
  if (upper.includes("DAEGU")) return "대구 FC";
  return value;
}

function koStadiumName(value = "") {
  const upper = value.toUpperCase();
  if (upper.includes("CHEONGJU")) return "청주종합운동장";
  if (upper.includes("TANCHEON")) return "탄천종합운동장";
  if (upper.includes("GIMHAE")) return "김해종합운동장";
  if (upper.includes("ANSAN")) return "안산와스타디움";
  if (upper.includes("MOKDONG")) return "목동종합운동장";
  if (upper.includes("GWANGYANG")) return "광양축구전용구장";
  if (upper.includes("INCHEON FOOTBALL")) return "인천축구전용경기장";
  if (upper.includes("INCHEON")) return "인천축구전용경기장";
  if (upper.includes("BUCHEON")) return "부천종합운동장";
  if (upper.includes("CHANGWON")) return "창원축구센터";
  if (upper.includes("GIMPO")) return "김포솔터축구장";
  if (upper.includes("GUDEOK") || upper.includes("BUSAN")) return "부산구덕운동장";
  if (upper.includes("CHEONAN")) return "천안종합운동장";
  if (upper.includes("ASAN") || upper.includes("YI SUN-SIN")) return "이순신종합운동장";
  if (upper.includes("HWASEONG")) return "화성종합경기타운";
  if (upper.includes("YONGIN") || upper.includes("MIREU")) return "용인미르스타디움";
  if (upper.includes("SUWON WORLD")) return "수원월드컵경기장";
  if (upper.includes("SUWON")) return "수원종합운동장";
  return value;
}

function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-lg font-black">{title}</h2>
        {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      </div>
    </div>
  );
}

function ChipButton<T extends string>({
  active,
  children,
  value,
  onClick
}: {
  active: boolean;
  children: ReactNode;
  value: T;
  onClick: (value: T) => void;
}) {
  return (
    <button
      className={`rounded-full px-3 py-2 text-sm font-bold ${
        active ? "bg-brand-red-600 text-white" : "bg-white text-slate-500 border border-slate-200"
      }`}
      type="button"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}

function App() {
  const [selectedSeason, setSelectedSeason] = useState("2026");
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  const [competitionFilter, setCompetitionFilter] = useState<"all" | CompetitionType>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | MatchStatus>("all");
  const [playerFilter, setPlayerFilter] = useState<"ALL" | PlayerPosition>("ALL");
  const [recordTab, setRecordTab] = useState<RecordTab>("team");
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [matchDetailLoading, setMatchDetailLoading] = useState(false);
  const [playerDetailLoading, setPlayerDetailLoading] = useState(false);
  const [liveArchiveData, setLiveArchiveData] = useState(archiveData);
  const [autoDataLoading, setAutoDataLoading] = useState(false);
  const [autoDataError, setAutoDataError] = useState("");
  const [loadedPlayerStatsSeasons, setLoadedPlayerStatsSeasons] = useState<string[]>([]);

  const season = liveArchiveData.seasons.find((item) => item.id === selectedSeason) || liveArchiveData.seasons[0];
  const seasonMatches = liveArchiveData.matches
    .filter((match) => match.seasonId === selectedSeason)
    .sort((a, b) => a.date.localeCompare(b.date));
  const seasonPlayers = liveArchiveData.players.filter((player) => player.seasonId === selectedSeason);
  const standing = liveArchiveData.standings.find((item) => item.seasonId === selectedSeason);
  const coaches = liveArchiveData.coaches.filter((coach) => coach.seasonId === selectedSeason);
  const rankHistory = liveArchiveData.rankHistory.filter((point) => point.seasonId === selectedSeason);

  const filteredMatches = seasonMatches.filter((match) => {
    const competitionOk = competitionFilter === "all" || match.competitionType === competitionFilter;
    const statusOk = statusFilter === "all" || match.status === statusFilter;
    return competitionOk && statusOk;
  });

  const filteredPlayers = seasonPlayers.filter((player) => {
    if (playerFilter === "ALL") return true;
    return player.position === playerFilter;
  });

  const recentMatch = [...seasonMatches].reverse().find((match) => match.status === "finished");
  const nextMatch = seasonMatches.find((match) => match.status === "scheduled");
  const resultFlow = getResultFlow(seasonMatches);
  const topScorers = useMemo(
    () => [...seasonPlayers].sort((a, b) => b.goals - a.goals).slice(0, 3),
    [seasonPlayers]
  );
  const topAssists = useMemo(
    () => [...seasonPlayers].sort((a, b) => b.assists - a.assists).slice(0, 3),
    [seasonPlayers]
  );

  useEffect(() => {
    let alive = true;

    if (!isLiveSeason(selectedSeason)) {
      setAutoDataLoading(false);
      setAutoDataError("");
      return () => {
        alive = false;
      };
    }

    setAutoDataLoading(true);
    setAutoDataError("");

    fetchAutoArchiveData(selectedSeason, liveArchiveData)
      .then((nextData) => {
        if (!alive) return;
        setLiveArchiveData(nextData);
      })
      .catch(() => {
        if (!alive) return;
        setAutoDataError("자동 데이터를 불러오지 못해 저장된 데이터를 표시합니다.");
      })
      .finally(() => {
        if (!alive) return;
        setAutoDataLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [selectedSeason]);

  useEffect(() => {
    let alive = true;

    const shouldLoadPlayerStats = isLiveSeason(selectedSeason) && (activeTab === "home" || (activeTab === "records" && recordTab === "player"));

    if (!shouldLoadPlayerStats || !seasonPlayers.length || loadedPlayerStatsSeasons.includes(selectedSeason)) {
      return () => {
        alive = false;
      };
    }

    fetchSeasonPlayerStats(selectedSeason, seasonPlayers)
      .then((playersWithStats) => {
        if (!alive) return;
        setLiveArchiveData((currentData) => ({
          ...currentData,
          players: [
            ...currentData.players.filter((player) => player.seasonId !== selectedSeason),
            ...playersWithStats
          ],
          playerStats: [
            ...currentData.playerStats.filter((player) => player.seasonId !== selectedSeason),
            ...playersWithStats
          ]
        }));
        setLoadedPlayerStatsSeasons((seasons) => seasons.includes(selectedSeason) ? seasons : [...seasons, selectedSeason]);
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, [activeTab, recordTab, selectedSeason, seasonPlayers.length, loadedPlayerStatsSeasons]);

  function openMatch(match: Match) {
    setSelectedMatch(match);

    if (!isLiveSeason(match.seasonId)) {
      setMatchDetailLoading(false);
      return;
    }

    setMatchDetailLoading(true);

    fetchMatchDetails(match)
      .then((details) => {
        setSelectedMatch(details);
      })
      .catch(() => {
        setSelectedMatch(match);
      })
      .finally(() => {
        setMatchDetailLoading(false);
      });
  }

  function openPlayer(player: Player) {
    setSelectedPlayer(player);

    if (!isLiveSeason(player.seasonId)) {
      setPlayerDetailLoading(false);
      return;
    }

    setPlayerDetailLoading(true);

    fetchPlayerDetails(player)
      .then((details) => {
        setSelectedPlayer(details);
      })
      .catch(() => {
        setSelectedPlayer(player);
      })
      .finally(() => {
        setPlayerDetailLoading(false);
      });
  }

  function renderHome() {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-bold text-slate-500">최근 경기</p>
            {recentMatch ? (
              <div className="mt-3">
                <strong className="text-lg">
                  {koTeamName(recentMatch.homeTeam)} {recentMatch.homeScore} : {recentMatch.awayScore} {koTeamName(recentMatch.awayTeam)}
                </strong>
                <p className="mt-2 text-sm text-slate-500">{recentMatch.date} · {koStadiumName(recentMatch.stadium)}</p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-500">등록된 최근 경기가 없습니다.</p>
            )}
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-bold text-slate-500">다음 경기</p>
            {nextMatch ? (
              <div className="mt-3">
                <strong className="text-lg">vs {koTeamName(nextMatch.awayTeam.includes("충북청주") ? nextMatch.homeTeam : nextMatch.awayTeam)}</strong>
                <p className="mt-2 text-sm text-slate-500">{nextMatch.date} {nextMatch.time} · {koStadiumName(nextMatch.stadium)}</p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-500">등록된 다음 경기가 없습니다.</p>
            )}
          </section>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="순위" value={standing?.rank || "-"} />
          <StatCard label="승점" value={standing?.points ?? "-"} />
          <StatCard label="득점" value={standing?.goalsFor ?? "-"} />
          <StatCard label="실점" value={standing?.goalsAgainst ?? "-"} />
        </div>

        <div className="space-y-3">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="shrink-0">
                <h2 className="text-lg font-black">최근 5경기</h2>
                <p className="mt-1 text-xs font-bold text-slate-500">종료 경기 기준</p>
              </div>
              <div className="flex min-w-0 flex-1 justify-end gap-1.5">
                {resultFlow.length ? resultFlow.map((result, index) => (
                  <span key={`${result}-${index}`} className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-black ${resultBadgeClass(result)}`}>
                    {result}
                  </span>
                )) : <p className="text-sm text-slate-500">-</p>}
              </div>
            </div>
          </section>
          <RankTrendChart
            points={rankHistory}
            seasonLabel={season.label}
            compact
            loading={autoDataLoading}
            errorMessage={autoDataError}
            isAuto={!autoDataError && rankHistory.length > 1}
          />
        </div>

        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <SectionTitle title="주요 선수 기록" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold text-slate-500">득점</p>
              {topScorers.map((player) => (
                <div key={player.id} className="flex justify-between border-t border-slate-200 py-2 text-sm">
                  <span>{player.name}</span>
                  <strong>{player.goals}</strong>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-slate-500">도움</p>
              {topAssists.map((player) => (
                <div key={player.id} className="flex justify-between border-t border-slate-200 py-2 text-sm">
                  <span>{player.name}</span>
                  <strong>{player.assists}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  function renderMatches() {
    return (
      <div className="space-y-4">
        <SectionTitle title="경기" description="경기 카드를 누르면 상세 기록을 확인할 수 있습니다." />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {competitionFilters.map((item) => (
            <ChipButton key={item.id} value={item.id} active={competitionFilter === item.id} onClick={setCompetitionFilter}>
              {item.label}
            </ChipButton>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {statusFilters.map((item) => (
            <ChipButton key={item.id} value={item.id} active={statusFilter === item.id} onClick={setStatusFilter}>
              {item.label}
            </ChipButton>
          ))}
        </div>
        <div className="space-y-3">
          {filteredMatches.length ? filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} onClick={openMatch} />
          )) : <p className="rounded-lg border border-slate-200 bg-white p-4 text-slate-500 shadow-sm">등록된 경기 데이터가 없습니다.</p>}
        </div>
      </div>
    );
  }

  function renderSquad() {
    return (
      <div className="space-y-4">
        <SectionTitle title="선수단" description="선수 카드를 누르면 시즌 상세 기록을 확인할 수 있습니다." />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {playerFilterLabels.map((item) => (
            <ChipButton key={item.id} value={item.id} active={playerFilter === item.id} onClick={setPlayerFilter}>
              {item.label}
            </ChipButton>
          ))}
        </div>

        {playerFilter === "STAFF" ? (
          <div className="space-y-3">
            {coaches.map((coach) => (
              <article key={coach.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">{coach.role}</p>
                <h3 className="mt-1 text-lg font-black text-brand-navy-950">{coach.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{coach.period}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredPlayers.length ? filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} onClick={openPlayer} />
            )) : <p className="rounded-lg border border-slate-200 bg-white p-4 text-slate-500 shadow-sm">등록된 선수 데이터가 없습니다.</p>}
          </div>
        )}
      </div>
    );
  }

  function renderRecords() {
    return (
      <div className="space-y-4">
        <SectionTitle title="기록" description="선택한 시즌의 팀 기록과 선수 기록을 정리합니다." />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            { id: "team", label: "팀 기록" },
            { id: "player", label: "선수 기록" }
          ].map((item) => (
            <ChipButton key={item.id} value={item.id as RecordTab} active={recordTab === item.id} onClick={setRecordTab}>
              {item.label}
            </ChipButton>
          ))}
        </div>

        {recordTab === "team" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="승/무/패" value={`${standing?.wins ?? 0}/${standing?.draws ?? 0}/${standing?.losses ?? 0}`} />
              <StatCard label="승점" value={standing?.points ?? "-"} />
              <StatCard label="홈 성적" value={standing?.homeRecord || "-"} />
              <StatCard label="원정 성적" value={standing?.awayRecord || "-"} />
            </div>
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              {[
                ["최다 연승", standing?.longestWinningRun],
                ["최다 무승", standing?.longestWinlessRun],
                ["최다 득점 경기", standing?.highestScoringMatch]
              ].slice(0, 2).map(([label, value]) => (
                <div key={label} className="flex justify-between border-t border-slate-200 py-3 first:border-t-0">
                  <span className="text-slate-500">{label}</span>
                  <strong className="text-right">{value || "-"}</strong>
                </div>
              ))}
            </article>
          </div>
        )}

        {recordTab === "player" && (
          <div className="grid gap-3 sm:grid-cols-2">
            <RecordList title="시즌 득점 순위" players={[...seasonPlayers].sort((a, b) => b.goals - a.goals).slice(0, 5)} valueKey="goals" />
            <RecordList title="시즌 도움 순위" players={[...seasonPlayers].sort((a, b) => b.assists - a.assists).slice(0, 5)} valueKey="assists" />
            <RecordList title="출전 경기 수" players={[...seasonPlayers].sort((a, b) => b.appearances - a.appearances)} valueKey="appearances" />
            <RecordList title="경고" players={[...seasonPlayers].sort((a, b) => (b.yellowCards ?? 0) - (a.yellowCards ?? 0))} valueKey="yellowCards" />
          </div>
        )}

      </div>
    );
  }

  return (
    <Layout
      seasons={liveArchiveData.seasons}
      selectedSeason={selectedSeason}
      activeTab={activeTab}
      onSeasonChange={setSelectedSeason}
      onTabChange={setActiveTab}
    >
      {activeTab === "home" && renderHome()}
      {activeTab === "matches" && renderMatches()}
      {activeTab === "squad" && renderSquad()}
      {activeTab === "records" && renderRecords()}

      {selectedMatch ? <MatchModal match={selectedMatch} loading={matchDetailLoading} onClose={() => setSelectedMatch(null)} /> : null}
      {selectedPlayer ? <PlayerModal player={selectedPlayer} loading={playerDetailLoading} onClose={() => setSelectedPlayer(null)} /> : null}
    </Layout>
  );
}

function RecordList({
  title,
  players,
  valueKey
}: {
  title: string;
  players: Player[];
  valueKey: keyof Pick<Player, "goals" | "assists" | "appearances" | "yellowCards" | "redCards" | "cleanSheets">;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-black text-brand-navy-950">{title}</h3>
      <div className="mt-3 space-y-2">
        {players.slice(0, 5).map((player, index) => (
          <div key={player.id} className="flex items-center justify-between gap-3 border-t border-slate-200 py-2 first:border-t-0">
            <span className="text-sm text-slate-500">{index + 1}. {player.name}</span>
            <strong className="text-brand-navy-950">{player[valueKey] ?? 0}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function RankTrendChart({
  points,
  seasonLabel,
  compact = false,
  loading = false,
  errorMessage = "",
  isAuto = false
}: {
  points: RankPoint[];
  seasonLabel: string;
  compact?: boolean;
  loading?: boolean;
  errorMessage?: string;
  isAuto?: boolean;
}) {
  const sortedPoints = [...points].sort((a, b) => a.date.localeCompare(b.date));
  const width = 320;
  const height = compact ? 110 : 140;
  const paddingX = 28;
  const paddingTop = 22;
  const paddingBottom = 20;
  const maxRank = Math.max(17, ...sortedPoints.map((point) => point.rank));
  const minRank = 1;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  const coords = sortedPoints.map((point, index) => {
    const x = sortedPoints.length === 1 ? width / 2 : paddingX + (index / (sortedPoints.length - 1)) * chartWidth;
    const y = paddingTop + ((point.rank - minRank) / (maxRank - minRank || 1)) * chartHeight;
    return { ...point, x, y };
  });
  const labelStep = coords.length > 18 ? Math.ceil(coords.length / 9) : 1;
  const shouldShowRankLabel = (index: number) => {
    if (coords.length <= 18) return true;
    if (index === 0 || index === coords.length - 1) return true;
    const previous = coords[index - 1];
    const current = coords[index];
    const next = coords[index + 1];
    const isTurningPoint = previous && next && ((current.rank < previous.rank && current.rank <= next.rank) || (current.rank > previous.rank && current.rank >= next.rank));
    return isTurningPoint || index % labelStep === 0;
  };
  const path = coords.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-black text-brand-navy-950">순위 변화</h3>
          <p className="mt-1 text-sm text-slate-500">{seasonLabel} 순위 흐름</p>
        </div>
        <span className="rounded-full bg-brand-navy-900 px-3 py-1 text-xs font-bold text-white">
          {loading ? "불러오는 중" : isAuto ? "자동" : "Rank"}
        </span>
      </div>

      {loading ? (
        <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-500">
          시즌별 경기 결과를 불러와 순위 변화를 계산하는 중입니다.
        </p>
      ) : coords.length ? (
        <div className="mt-4 overflow-hidden rounded-lg bg-slate-50 p-3">
          <svg className="h-auto w-full" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${seasonLabel} 순위 변화 그래프`}>
            <line x1={paddingX} y1={paddingTop} x2={paddingX} y2={height - paddingBottom} stroke="var(--color-gray-300)" strokeWidth="0.8" />
            <line x1={paddingX} y1={height - paddingBottom} x2={width - paddingX} y2={height - paddingBottom} stroke="var(--color-gray-300)" strokeWidth="0.8" />
            {coords.length >= 2 ? (
              <path d={path} fill="none" stroke="var(--color-red-600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            ) : null}
            {coords.map((point) => (
              <g key={point.matchId}>
                <circle cx={point.x} cy={point.y} r={coords.length > 18 ? "2.2" : "2.8"} fill="var(--color-red-600)" />
                {shouldShowRankLabel(coords.indexOf(point)) ? (
                  <text x={point.x} y={point.y - 6} textAnchor="middle" className="fill-brand-navy-950 text-[6px] font-bold">
                    {point.rank}
                  </text>
                ) : null}
              </g>
            ))}
          </svg>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
            {sortedPoints.map((point) => (
              <span key={point.matchId} className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500">
                {point.round} {point.rank}위
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-500">
          {errorMessage || "순위 데이터가 아직 없습니다. 데이터가 있는 라운드만 점으로 찍고, 빈 라운드는 건너뛰어 이어 그립니다."}
        </p>
      )}
    </article>
  );
}

function MatchModal({ match, loading, onClose }: { match: Match; loading: boolean; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-30 bg-brand-navy-800/70 p-4">
      <div className="mx-auto max-h-[88vh] max-w-2xl overflow-y-auto rounded-lg bg-white p-5 shadow-archive">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">{match.date} · {match.competition} {match.round}</p>
            <div className="mt-3 grid gap-3">
              <MatchModalTeam teamName={koTeamName(match.homeTeam)} score={match.homeScore} logoUrl={match.homeLogoUrl} />
              <MatchModalTeam teamName={koTeamName(match.awayTeam)} score={match.awayScore} logoUrl={match.awayLogoUrl} />
            </div>
          </div>
          <button className="rounded-lg bg-brand-red-600 px-3 py-2 text-sm font-bold text-white" type="button" onClick={onClose}>닫기</button>
        </div>

        <div className="mt-5 grid gap-4">
          {loading ? (
            <article className="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
              경기 상세 데이터를 불러오는 중입니다.
            </article>
          ) : null}
          <TeamDetailBlock
            title="선발 라인업"
            homeTeam={koTeamName(match.homeTeam)}
            awayTeam={koTeamName(match.awayTeam)}
            homeItems={match.homeLineup || []}
            awayItems={match.awayLineup || []}
          />
          <TeamDetailBlock
            title="교체 명단"
            homeTeam={koTeamName(match.homeTeam)}
            awayTeam={koTeamName(match.awayTeam)}
            homeItems={match.homeSubstitutes || []}
            awayItems={match.awaySubstitutes || []}
          />
          <TeamDetailBlock
            title="득점자"
            homeTeam={koTeamName(match.homeTeam)}
            awayTeam={koTeamName(match.awayTeam)}
            homeItems={match.homeScorers?.length ? match.homeScorers : match.scorers}
            awayItems={match.awayScorers || []}
          />
          <TeamDetailBlock
            title="도움"
            homeTeam={koTeamName(match.homeTeam)}
            awayTeam={koTeamName(match.awayTeam)}
            homeItems={match.homeAssists?.length ? match.homeAssists : match.assists}
            awayItems={match.awayAssists || []}
          />
          <TeamDetailBlock
            title="경고/퇴장"
            homeTeam={koTeamName(match.homeTeam)}
            awayTeam={koTeamName(match.awayTeam)}
            homeItems={match.homeCards?.length ? match.homeCards : [...match.yellowCards.map((item) => `경고 ${item}`), ...match.redCards.map((item) => `퇴장 ${item}`)]}
            awayItems={match.awayCards || []}
          />
          <article className="rounded-lg bg-slate-50 p-4">
            <h3 className="font-black text-brand-navy-950">경기 기록</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-500">
              <span>슈팅 {match.stats.shots ?? "-"}</span>
              <span>상대 슈팅 {match.stats.shotsAgainst ?? "-"}</span>
              <span>점유율 {match.stats.possession ?? "-"}%</span>
              <span>코너킥 {match.stats.corners ?? "-"}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function MatchModalTeam({ teamName, score, logoUrl }: { teamName: string; score: number | null; logoUrl?: string }) {
  const resolvedLogoUrl = logoUrl || getTeamLogoUrl(teamName);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        {resolvedLogoUrl ? (
          <img className="h-10 w-10 shrink-0 rounded-full border border-slate-200 bg-white object-contain p-1" src={resolvedLogoUrl} alt={`${teamName} 로고`} />
        ) : (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-black text-brand-navy-900">
            {teamName.slice(0, 1)}
          </span>
        )}
        <h2 className="truncate text-xl font-black text-brand-navy-950">{teamName}</h2>
      </div>
      <span className="text-2xl font-black text-brand-navy-950">{score ?? "-"}</span>
    </div>
  );
}

function cleanNationality(value = "") {
  const text = String(value || "").trim();
  if (!text || text.includes("?")) return "";
  return text;
}

function PlayerModal({ player, loading, onClose }: { player: Player; loading: boolean; onClose: () => void }) {
  const nationality = cleanNationality(player.nationality);

  return (
    <div className="fixed inset-0 z-30 bg-brand-navy-800/70 p-4">
      <div className="mx-auto max-h-[88vh] max-w-2xl overflow-y-auto rounded-lg bg-white p-5 shadow-archive">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-black text-brand-red-600">NO. {player.number}</p>
            <h2 className="mt-1 text-2xl font-black text-brand-navy-950">{player.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{[player.position, nationality].filter(Boolean).join(" · ")}</p>
          </div>
          <button className="rounded-lg bg-brand-red-600 px-3 py-2 text-sm font-bold text-white" type="button" onClick={onClose}>닫기</button>
        </div>

        {loading ? (
          <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm font-bold text-slate-500">선수 상세 기록을 불러오는 중입니다.</p>
        ) : null}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard label="출전" value={player.appearances} />
          <StatCard label="득점" value={player.goals} />
          <StatCard label="도움" value={player.assists} />
          <StatCard label="클린시트" value={player.cleanSheets ?? 0} />
        </div>

        <article className="mt-4 rounded-lg bg-slate-50 p-4">
          <h3 className="font-black text-brand-navy-950">프로필</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <span>생년월일: {player.birthDate || "-"}</span>
            <span>신장/체중: {[player.height, player.weight].filter(Boolean).join(" / ") || "-"}</span>
            <span>입단연도: {player.joinedYear || "-"}</span>
            <span>이전 소속: {player.previousClubs.join(", ") || "-"}</span>
            <span>이후 소속: {player.nextClubs.join(", ") || "-"}</span>
          </div>
        </article>

        <article className="mt-4 rounded-lg bg-slate-50 p-4">
          <h3 className="font-black text-brand-navy-950">시즌별 출전 기록</h3>
          {player.seasonRecords.map((record) => (
            <div key={record.season} className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-sm">
              <span>{record.season}</span>
              <strong>출전 {record.appearances} · 득점 {record.goals} · 도움 {record.assists}</strong>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg bg-slate-50 p-4">
      <h3 className="font-black text-brand-navy-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{items.length ? items.join(", ") : "-"}</p>
    </article>
  );
}

function TeamDetailBlock({
  title,
  homeTeam,
  awayTeam,
  homeItems,
  awayItems
}: {
  title: string;
  homeTeam: string;
  awayTeam: string;
  homeItems: string[];
  awayItems: string[];
}) {
  return (
    <article className="rounded-lg bg-slate-50 p-4">
      <h3 className="font-black text-brand-navy-950">{title}</h3>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-brand-navy-950">{homeTeam}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{homeItems.length ? homeItems.join(", ") : "-"}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-navy-950">{awayTeam}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{awayItems.length ? awayItems.join(", ") : "-"}</p>
        </div>
      </div>
    </article>
  );
}

export default App;
