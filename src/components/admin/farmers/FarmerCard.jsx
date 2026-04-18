import { MapPin, MessageSquare, Image as ImageIcon, Sprout, Flame, Users } from 'lucide-react';

function EngagementMini({ value }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="mt-3">
      <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
        <span>Engagement</span>
        <span className="text-emerald-700">{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-emerald-100/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function FarmerCard({ farmer, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(farmer)}
      className="group w-full rounded-3xl border border-emerald-100/90 bg-white/95 p-5 text-left shadow-sm ring-1 ring-emerald-50/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl shadow-md shadow-emerald-200/50">
            👨‍🌾
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-black text-slate-800 group-hover:text-emerald-800">{farmer.name}</h3>
            <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
              {farmer.location}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
          AI monitored
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
          <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
            Queries
          </dt>
          <dd className="mt-1 font-black tabular-nums text-slate-800">{farmer.totalQueries}</dd>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
          <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <ImageIcon className="h-3.5 w-3.5 text-sky-600" />
            Images
          </dt>
          <dd className="mt-1 font-black tabular-nums text-slate-800">{farmer.imagesUploaded}</dd>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
          <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <Sprout className="h-3.5 w-3.5 text-amber-600" />
            Last crop
          </dt>
          <dd className="mt-1 font-bold text-slate-800">{farmer.lastCrop}</dd>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
          <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <Flame className="h-3.5 w-3.5 text-orange-500" />
            Top interest
          </dt>
          <dd className="mt-1 font-bold text-slate-800">{farmer.mostInterestedCrop}</dd>
        </div>
      </dl>

      <EngagementMini value={farmer.engagement} />

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100">
        <Users className="h-3.5 w-3.5" />
        Open intelligence profile
      </p>
    </button>
  );
}
