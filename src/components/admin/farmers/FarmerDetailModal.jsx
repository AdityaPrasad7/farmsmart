import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, Wheat, BarChart3 } from 'lucide-react';
import TimelineComponent from './TimelineComponent';

function BlockEngagementBar({ value }) {
  const pct = Math.min(100, Math.max(0, Math.round(value)));
  const filled = Math.round(pct / 10);
  const blocks = `${'█'.repeat(filled)}${'░'.repeat(10 - filled)}`;

  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-800">
        <BarChart3 className="h-4 w-4" />
        Engagement signal
      </div>
      <p className="mb-2 text-xs font-medium text-slate-600">
        Derived from query volume and recent interaction frequency with the voice assistant.
      </p>
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-lg tracking-tight text-emerald-900" aria-hidden>
          {blocks}
        </span>
        <span className="text-sm font-black tabular-nums text-emerald-700">({pct}%)</span>
      </div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100/90">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-400"
        />
      </div>
    </div>
  );
}

export default function FarmerDetailModal({ farmer, onClose }) {
  return (
    <AnimatePresence>
      {farmer ? (
        <motion.div
          key="backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="farmer-detail-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/45 p-4 backdrop-blur-[2px]"
          onClick={onClose}
        >
          <motion.div
            key={farmer.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-emerald-100 bg-white shadow-2xl shadow-emerald-900/10"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-emerald-100 bg-white/95 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-2xl shadow-md">
                  👨‍🌾
                </span>
                <div>
                  <h3 id="farmer-detail-title" className="text-xl font-black text-slate-800">
                    {farmer.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{farmer.location}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/90 to-white p-4 shadow-sm">
                <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-violet-800">
                  <Sparkles className="h-4 w-4" />
                  AI summary
                </p>
                <p className="text-sm leading-relaxed text-slate-700">{farmer.aiSummary}</p>
              </div>

              <div>
                <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                  <Wheat className="h-4 w-4" />
                  Preferred crops
                </p>
                <div className="flex flex-wrap gap-2">
                  {farmer.preferredCrops.map((crop) => (
                    <span
                      key={crop}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              <BlockEngagementBar value={farmer.engagement} />

              <div>
                <p className="mb-3 text-sm font-bold text-slate-800">Activity timeline</p>
                <TimelineComponent activity={farmer.activity} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
