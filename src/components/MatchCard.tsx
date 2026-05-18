import type { Match } from "../types";
import { getTeamLogoUrl } from "../data/seasons";

interface MatchCardProps {
  match: Match;
  onClick: (match: Match) => void;
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

function MatchCard({ match, onClick }: MatchCardProps) {
  const finished = match.status === "finished";
  const homeTeam = koTeamName(match.homeTeam);
  const awayTeam = koTeamName(match.awayTeam);
  const stadium = koStadiumName(match.stadium);

  return (
    <button
      className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm"
      type="button"
      onClick={() => onClick(match)}
    >
      <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
        <span>
          {match.date.replace(/-/g, ".")} {match.competition} {match.round}
        </span>
        <span className={`rounded-full px-2 py-1 text-xs font-bold ${finished ? "bg-slate-100 text-slate-700" : "bg-brand-red-100 text-brand-red-600"}`}>
          {finished ? "종료" : "예정"}
        </span>
      </div>

      <div className="mt-4 grid gap-2">
        <TeamScoreRow teamName={homeTeam} score={match.homeScore} logoUrl={match.homeLogoUrl} />
        <TeamScoreRow teamName={awayTeam} score={match.awayScore} logoUrl={match.awayLogoUrl} />
      </div>

      <div className="mt-4 space-y-1 text-sm text-slate-500">
        <p>장소: {stadium || "-"}</p>
      </div>
    </button>
  );
}

function TeamScoreRow({ teamName, score, logoUrl }: { teamName: string; score: number | null; logoUrl?: string }) {
  const resolvedLogoUrl = logoUrl || getTeamLogoUrl(teamName);

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        {resolvedLogoUrl ? (
          <img className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-white object-contain p-1" src={resolvedLogoUrl} alt={`${teamName} 로고`} />
        ) : (
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-black text-brand-navy-900">
            {teamName.slice(0, 1)}
          </span>
        )}
        <strong className="truncate text-brand-navy-950">{teamName}</strong>
      </div>
      <span className="text-xl font-black text-brand-navy-950">{score ?? "-"}</span>
    </div>
  );
}

export default MatchCard;
