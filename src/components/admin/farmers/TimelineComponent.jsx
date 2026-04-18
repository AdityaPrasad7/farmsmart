import { MessageSquare, Sprout, Image as ImageIcon } from 'lucide-react';

const kindConfig = {
  asked: { label: 'Asked', Icon: MessageSquare, bar: 'bg-emerald-500' },
  suggested: { label: 'Suggested', Icon: Sprout, bar: 'bg-amber-500' },
  uploaded: { label: 'Uploaded image', Icon: ImageIcon, bar: 'bg-sky-500' },
};

export default function TimelineComponent({ activity = [] }) {
  if (!activity.length) {
    return (
      <p className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/40 px-4 py-6 text-center text-sm text-slate-500">
        No recent activity logged for this farmer.
      </p>
    );
  }

  return (
    <ol className="relative space-y-0 border-l-2 border-emerald-200/80 pl-6">
      {activity.map((entry, index) => {
        const cfg = kindConfig[entry.kind] ?? kindConfig.asked;
        const { Icon, label, bar } = cfg;
        return (
          <li key={`${entry.time}-${index}`} className="relative pb-6 last:pb-0">
            <span
              className={`absolute -left-[29px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-sm ${bar}`}
            >
              <Icon className="h-3.5 w-3.5 text-white" aria-hidden />
            </span>
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
              {entry.time} <span className="text-slate-400">→</span>{' '}
              <span className="text-slate-600">{label}:</span>{' '}
              <span className="font-semibold normal-case text-slate-800">{entry.detail}</span>
            </p>
          </li>
        );
      })}
    </ol>
  );
}
