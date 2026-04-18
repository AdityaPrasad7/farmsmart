import { motion } from 'framer-motion';
import { Image as ImageIcon, MessageCircle, Mic, Sprout, Store } from 'lucide-react';
import { recentActivity } from './dashboardDummyData';

const icons = {
  message: MessageCircle,
  image: ImageIcon,
  sprout: Sprout,
  mic: Mic,
  store: Store,
};

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,78,59,0.05)] ring-1 ring-emerald-50/40"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-black text-slate-800">Recent activity</h3>
          <p className="text-xs font-medium text-slate-500">Live stream · demo data</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-800">
          Live
        </span>
      </div>
      <ul className="space-y-0 divide-y divide-emerald-50">
        {recentActivity.map((row, i) => {
          const Icon = icons[row.icon] || MessageCircle;
          return (
            <motion.li
              key={row.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className="flex gap-3 py-3.5 first:pt-0"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100/80">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-slate-800">{row.text}</p>
                <p className="mt-1 text-xs font-medium text-slate-400">{row.time}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
