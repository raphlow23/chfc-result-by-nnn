import type { Player } from "../types";

interface PlayerCardProps {
  player: Player;
  statsReady?: boolean;
  onClick: (player: Player) => void;
}

function cleanNationality(value = "") {
  const text = String(value || "").trim();
  if (!text || text.includes("?")) return "";
  return text;
}

function PlayerCard({ player, statsReady = true, onClick }: PlayerCardProps) {
  const nationality = cleanNationality(player.nationality);
  const statValue = (value: number) => value;

  return (
    <button
      className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm"
      type="button"
      onClick={() => onClick(player)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-black text-brand-red-600">NO. {player.number}</span>
          <h3 className="mt-1 text-lg font-black text-brand-navy-950">{player.name}</h3>
          <p className="text-sm text-slate-500">{[player.position, nationality].filter(Boolean).join(" · ")}</p>
        </div>
        <div className="rounded-lg bg-brand-navy-900 px-3 py-2 text-sm font-black text-white">{player.position}</div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-xs text-slate-500">출전</span>
          <strong className="block min-h-6 text-brand-navy-950">{statValue(player.appearances)}</strong>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-xs text-slate-500">득점</span>
          <strong className="block min-h-6 text-brand-navy-950">{statValue(player.goals)}</strong>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-xs text-slate-500">도움</span>
          <strong className="block min-h-6 text-brand-navy-950">{statValue(player.assists)}</strong>
        </div>
      </div>
    </button>
  );
}

export default PlayerCard;
