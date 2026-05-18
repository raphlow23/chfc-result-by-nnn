import type { HistoryEvent } from "../types";

interface TimelineItemProps {
  event: HistoryEvent;
}

function TimelineItem({ event }: TimelineItemProps) {
  return (
    <article className="relative pl-6">
      <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-brand-red-600" />
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-500">{event.date}</span>
          <span className="rounded-full bg-brand-navy-900 px-2 py-1 text-xs font-bold text-white">{event.category}</span>
        </div>
        <h3 className="mt-2 font-black text-brand-navy-950">{event.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{event.description}</p>
      </div>
    </article>
  );
}

export default TimelineItem;
