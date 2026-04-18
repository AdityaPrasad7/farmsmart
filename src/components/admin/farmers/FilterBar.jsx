import { Search } from 'lucide-react';

export default function FilterBar({
  search,
  onSearch,
  location,
  onLocation,
  activityLevel,
  onActivityLevel,
  cropInterest,
  onCropInterest,
  locations,
  crops,
}) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <label className="relative md:col-span-2 xl:col-span-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search by farmer name..."
            className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-400"
          />
        </label>

        <select
          value={location}
          onChange={(event) => onLocation(event.target.value)}
          className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-400"
        >
          <option value="all">All locations</option>
          {locations.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

        <select
          value={activityLevel}
          onChange={(event) => onActivityLevel(event.target.value)}
          className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-400"
        >
          <option value="all">Activity: Any</option>
          <option value="high">High engagement</option>
          <option value="low">Low engagement</option>
        </select>

        <select
          value={cropInterest}
          onChange={(event) => onCropInterest(event.target.value)}
          className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-400"
        >
          <option value="all">Crop interest: Any</option>
          {crops.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
