import { motion } from 'framer-motion';
import DashboardCards from '../../components/admin/dashboard/DashboardCards';
import ChartsSection from '../../components/admin/dashboard/ChartsSection';
import ActivityFeed from '../../components/admin/dashboard/ActivityFeed';
import TopCrops from '../../components/admin/dashboard/TopCrops';
import ActiveFarmers from '../../components/admin/dashboard/ActiveFarmers';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-[1600px] space-y-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Overview</p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Intelligence dashboard
          </h2>
          <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
            Real-time signals across farmers, voice queries, crops, and field imagery — tuned for agronomy ops teams.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
          <span className="font-bold text-emerald-800">Last sync:</span> just now · demo dataset
        </div>
      </div>

      <DashboardCards />

      <ChartsSection />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <ActivityFeed />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:col-span-2 xl:grid-cols-2">
          <TopCrops />
          <ActiveFarmers />
        </div>
      </div>
    </motion.div>
  );
}
