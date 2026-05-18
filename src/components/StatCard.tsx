interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
}

function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <strong className="mt-2 block text-2xl font-black text-brand-navy-950">{value}</strong>
      {hint ? <span className="mt-1 block text-xs text-slate-500">{hint}</span> : null}
    </div>
  );
}

export default StatCard;
