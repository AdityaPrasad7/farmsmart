import { motion } from 'framer-motion';
import { MapPin, Users } from 'lucide-react';
import { activeFarmers } from './dashboardDummyData';

export default function ActiveFarmers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24 }}
      className="rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,78,59,0.05)] ring-1 ring-emerald-50/40"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
          <Users className="h-4 w-4" />
        </span>
        <div>
          <h3 className="text-sm font-black text-slate-800">Active farmers</h3>
          <p className="text-xs font-medium text-slate-500">Highest engagement this week</p>
        </div>
      </div>
      <ul className="space-y-3">
        {activeFarmers.map((f, i) => (
          <motion.li
            key={f.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-emerald-100 hover:bg-white"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-bold text-slate-900">{f.name}</p>
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                  {f.location}
                </p>
              </div>
              <span className="shrink-0 rounded-lg bg-white px-2 py-1 text-xs font-black text-emerald-800 ring-1 ring-emerald-100">
                {f.queries} q
              </span>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span>Engagement</span>
                <span className="text-emerald-700">{f.engagement}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-emerald-100/90">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${f.engagement}%` }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400"
                />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
