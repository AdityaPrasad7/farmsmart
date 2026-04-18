import { useMemo, useState } from 'react';
import { MapPin, Sprout, Users, Activity } from 'lucide-react';
import FilterBar from '../../components/admin/farmers/FilterBar';
import FarmerGrid from '../../components/admin/farmers/FarmerGrid';
import FarmerDetailModal from '../../components/admin/farmers/FarmerDetailModal';
import { DUMMY_FARMERS } from '../../components/admin/farmers/farmersDummyData';

const HIGH_ENGAGEMENT_MIN = 65;

function InsightCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-sm ring-1 ring-emerald-50/60">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-800">{value}</p>
          {sub ? <p className="mt-1 text-xs font-medium text-slate-500">{sub}</p> : null}
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-inner">
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export default function Farmers() {
  const farmers = DUMMY_FARMERS;

  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState('all');
  const [cropFilter, setCropFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const locations = useMemo(
    () => [...new Set(farmers.map((f) => f.location))].sort(),
    [farmers]
  );

  const crops = useMemo(() => {
    const set = new Set();
    farmers.forEach((f) => {
      set.add(f.mostInterestedCrop);
      f.preferredCrops.forEach((c) => set.add(c));
    });
    return [...set].sort();
  }, [farmers]);

  const insights = useMemo(() => {
    const total = farmers.length;
    const active = farmers.filter((f) => f.engagement >= HIGH_ENGAGEMENT_MIN).length;

    const byLocation = {};
    farmers.forEach((f) => {
      byLocation[f.location] = (byLocation[f.location] || 0) + f.totalQueries;
    });
    const mostActiveEntry = Object.entries(byLocation).sort((a, b) => b[1] - a[1])[0];
    const mostActiveLocation = mostActiveEntry ? mostActiveEntry[0] : '—';

    const byCrop = {};
    farmers.forEach((f) => {
      byCrop[f.mostInterestedCrop] = (byCrop[f.mostInterestedCrop] || 0) + 1;
    });
    const topCropEntry = Object.entries(byCrop).sort((a, b) => b[1] - a[1])[0];
    const mostPopularCrop = topCropEntry ? topCropEntry[0] : '—';

    return {
      total,
      active,
      mostActiveLocation,
      mostPopularCrop,
    };
  }, [farmers]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return farmers.filter((f) => {
      if (q && !f.name.toLowerCase().includes(q)) return false;
      if (locationFilter !== 'all' && f.location !== locationFilter) return false;
      if (activityFilter === 'high' && f.engagement < HIGH_ENGAGEMENT_MIN) return false;
      if (activityFilter === 'low' && f.engagement >= HIGH_ENGAGEMENT_MIN) return false;
      if (cropFilter !== 'all') {
        const match =
          f.mostInterestedCrop === cropFilter || f.preferredCrops.includes(cropFilter);
        if (!match) return false;
      }
      return true;
    });
  }, [farmers, search, locationFilter, activityFilter, cropFilter]);

  return (
    <section className="space-y-5">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/30 p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Admin · Intelligence</p>
            <h2 className="mt-1 text-3xl font-black text-slate-800">Farmers management</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Monitor voice-assistant usage, crop interest signals, and engagement across your farmer base — built for a
              data-driven agriculture operations desk.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-900 shadow-sm md:mt-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live signals (demo data)
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <InsightCard icon={Users} label="Total farmers" value={insights.total} sub="Registered profiles" />
          <InsightCard
            icon={Activity}
            label="Active farmers"
            value={insights.active}
            sub={`Engagement ≥ ${HIGH_ENGAGEMENT_MIN}%`}
          />
          <InsightCard icon={MapPin} label="Most active location" value={insights.mostActiveLocation} sub="By query volume" />
          <InsightCard icon={Sprout} label="Most popular crop" value={insights.mostPopularCrop} sub="By top interest" />
        </div>
      </div>

      <FilterBar
        search={search}
        onSearch={setSearch}
        location={locationFilter}
        onLocation={setLocationFilter}
        activityLevel={activityFilter}
        onActivityLevel={setActivityFilter}
        cropInterest={cropFilter}
        onCropInterest={setCropFilter}
        locations={locations}
        crops={crops}
      />

      <FarmerGrid farmers={filtered} onSelectFarmer={setSelected} />

      <FarmerDetailModal farmer={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
