import type { AppTab } from "../types";
import { appConfig } from "../config/appConfig";

interface BottomNavProps {
  activeTab: AppTab;
  onChange: (tab: AppTab) => void;
}

function BottomNav({ activeTab, onChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-3xl grid-cols-4 px-2 py-2">
        {appConfig.navItems.map((tab) => (
          <button
            key={tab.id}
            className={`mx-1 rounded-lg px-1 py-3 text-xs font-bold ${
              activeTab === tab.id ? "bg-brand-red-600 text-white" : "text-slate-500"
            }`}
            type="button"
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
