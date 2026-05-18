import type { AppTab, Season } from "../types";
import type { CSSProperties, ReactNode } from "react";
import { appConfig } from "../config/appConfig";
import BottomNav from "./BottomNav";
import SeasonSelector from "./SeasonSelector";

interface LayoutProps {
  children: ReactNode;
  seasons: Season[];
  selectedSeason: string;
  activeTab: AppTab;
  onSeasonChange: (seasonId: string) => void;
  onTabChange: (tab: AppTab) => void;
}

function Layout({ children, seasons, selectedSeason, activeTab, onSeasonChange, onTabChange }: LayoutProps) {
  const themeStyle = {
    "--color-navy-950": appConfig.theme.navy950,
    "--color-navy-900": appConfig.theme.navy900,
    "--color-navy-800": appConfig.theme.navy800,
    "--color-navy-700": appConfig.theme.navy700,
    "--color-red-600": appConfig.theme.red600,
    "--color-red-500": appConfig.theme.red500,
    "--color-red-100": appConfig.theme.red100,
    "--color-white": appConfig.theme.white,
    "--color-gray-50": appConfig.theme.gray50,
    "--color-gray-100": appConfig.theme.gray100,
    "--color-gray-300": appConfig.theme.gray300,
    "--color-gray-500": appConfig.theme.gray500,
    "--color-gray-700": appConfig.theme.gray700,
    "--color-text-main": appConfig.theme.textMain,
    "--color-text-sub": appConfig.theme.textSub,
    "--color-border": appConfig.theme.border
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-slate-50 text-brand-navy-950" style={themeStyle}>
      <header className="sticky top-0 z-10 border-b-4 border-brand-red-600 bg-brand-navy-800 text-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">
          <button
            className="grid min-w-0 flex-1 grid-cols-[72px_1fr_72px] items-center gap-3 text-left"
            type="button"
            onClick={() => onTabChange("home")}
            aria-label="홈으로 이동"
          >
            {appConfig.logoUrl ? (
              <img className="h-[72px] w-[72px] shrink-0 object-contain" src={appConfig.logoUrl} alt={`${appConfig.teamName} 로고`} />
            ) : (
              <div className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-lg bg-brand-red-600 text-sm font-black text-white">
                {appConfig.logoText}
              </div>
            )}
            <div className="min-w-0 text-center">
              <h1 className="truncate text-[clamp(15px,3.6vw,28px)] font-black leading-none tracking-[0.12em] text-white">
                <span className="hidden sm:inline">CHFC SEASON RECORD</span>
                <span className="sm:hidden">SEASON</span>
              </h1>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-full max-w-20 bg-brand-red-600" />
                <span className="shrink-0 rounded-full border border-brand-red-600 px-4 py-1 text-[clamp(9px,1.9vw,12px)] font-black tracking-[0.14em] text-brand-red-100">
                  ULTRAS NNN
                </span>
                <span className="h-px w-full max-w-20 bg-brand-red-600" />
              </div>
            </div>
            {appConfig.supporterLogoUrl ? (
              <img className="h-[72px] w-[72px] object-contain" src={appConfig.supporterLogoUrl} alt="ULTRAS NNN 로고" />
            ) : null}
          </button>
          <div className="shrink-0">
            <SeasonSelector seasons={seasons} selectedSeason={selectedSeason} onChange={onSeasonChange} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-28 pt-4">{children}</main>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </div>
  );
}

export default Layout;
