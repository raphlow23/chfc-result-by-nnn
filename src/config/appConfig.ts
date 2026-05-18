import type { AppTab } from "../types";

export const appConfig = {
  appName: "SEASON",
  teamName: "충북청주FC",
  headerLabel: "충북청주 FC",
  appSubtitle: "시즌별 기록 아카이브",
  logoText: "CHFC",
  logoUrl: "https://www.chfc.kr/images/match/view_K37.png",
  supporterLogoUrl: "/ultrasnnn3.png",
  navItems: [
    { id: "home", label: "홈" },
    { id: "matches", label: "경기" },
    { id: "squad", label: "선수단" },
    { id: "records", label: "기록" }
  ] satisfies { id: AppTab; label: string }[],
  quickLinks: [
    { label: "경기 일정", tab: "matches" },
    { label: "선수단", tab: "squad" },
    { label: "기록", tab: "records" }
  ] satisfies { label: string; tab: AppTab }[],
  theme: {
    navy950: "#071B3A",
    navy900: "#07111F",
    navy800: "#0B1B33",
    navy700: "#102A5C",
    red600: "#E0182D",
    red500: "#F0142F",
    red100: "#FFE8EC",
    white: "#FFFFFF",
    gray50: "#F8FAFC",
    gray100: "#F1F5F9",
    gray300: "#CBD5E1",
    gray500: "#64748B",
    gray700: "#334155",
    textMain: "#07111F",
    textSub: "#64748B",
    border: "#E2E8F0"
  }
} as const;
