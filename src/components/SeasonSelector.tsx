import type { Season } from "../types";

interface SeasonSelectorProps {
  seasons: Season[];
  selectedSeason: string;
  onChange: (seasonId: string) => void;
}

function SeasonSelector({ seasons, selectedSeason, onChange }: SeasonSelectorProps) {
  return (
    <label className="block">
      <span className="sr-only">시즌 선택</span>
      <select
        className="h-10 w-[106px] rounded-lg border border-brand-navy-700 bg-brand-navy-800 px-2 text-sm font-bold text-white sm:h-11 sm:w-auto sm:px-3"
        value={selectedSeason}
        onChange={(event) => onChange(event.target.value)}
      >
        {seasons.map((season) => (
          <option key={season.id} value={season.id}>
            {season.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SeasonSelector;
