import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Image as ImageIcon,
  Mic,
  Sprout,
  Store,
  Users,
  Wheat,
} from 'lucide-react';
import { overviewStats } from './dashboardDummyData';

const iconMap = {
  users: Users,
  mic: Mic,
  wheat: Wheat,
  store: Store,
  image: ImageIcon,
  alert: AlertTriangle,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function DashboardCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6"
    >
      {overviewStats.map((stat) => {
        const Icon = iconMap[stat.icon] || Users;
        return (
          <motion.div
            key={stat.key}
            variants={cardMotion}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="group relative overflow-hidden rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,78,59,0.06)] ring-1 ring-emerald-50/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(6,78,59,0.1)]"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/15 to-lime-300/10 blur-2xl transition group-hover:scale-110" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span className="text-base leading-none" aria-hidden>
                    {stat.emoji}
                  </span>
                  {stat.label}
                </p>
                <p className="mt-3 font-mono text-2xl font-black tracking-tight text-slate-900 md:text-[1.65rem]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">{stat.sub}</p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-300/30 transition group-hover:scale-105">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
