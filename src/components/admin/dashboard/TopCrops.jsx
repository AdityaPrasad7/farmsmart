import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import { topCrops } from './dashboardDummyData';

export default function TopCrops() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
      className="rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,78,59,0.05)] ring-1 ring-emerald-50/40"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
          <TrendingUp className="h-4 w-4" />
        </span>
        <div>
          <h3 className="text-sm font-black text-slate-800">Top crops</h3>
          <p className="text-xs font-medium text-slate-500">By platform usage</p>
        </div>
      </div>
      <ul className="space-y-3">
        {topCrops.map((crop, i) => (
          <motion.li
            key={crop.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.04 * i }}
            className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-50 bg-gradient-to-r from-emerald-50/40 to-white px-4 py-3 transition hover:border-emerald-100"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-emerald-800 shadow-sm ring-1 ring-emerald-100">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="truncate font-bold text-slate-900">{crop.name}</p>
                <p className="text-xs font-semibold text-slate-500">{crop.usage.toLocaleString()} uses</p>
              </div>
            </div>
            <span
              className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${
                crop.badge === 'Trending'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-violet-100 text-violet-800'
              }`}
            >
              {crop.badge === 'AI Recommended' ? <Sparkles className="h-3 w-3" /> : null}
              {crop.badge}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
