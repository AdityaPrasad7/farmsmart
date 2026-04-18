import { motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  CloudSun,
  LayoutDashboard,
  MessageCircle,
  Mic,
  Sprout,
  TrendingUp,
  Wheat,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function StatCard({ icon: Icon, label, value, hint, accent }) {
  return (
    <motion.div
      variants={item}
      className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-800">{value}</p>
          {hint ? <p className="mt-1 text-xs font-medium text-slate-500">{hint}</p> : null}
        </div>
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </span>
      </div>
    </motion.div>
  );
}

function ActionTile({ title, description, icon: Icon, onClick, gradient }) {
  return (
    <motion.button
      type="button"
      variants={item}
      onClick={onClick}
      className="group flex w-full flex-col rounded-3xl border border-emerald-100/90 bg-white/85 p-5 text-left shadow-sm ring-1 ring-emerald-50/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-100/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${gradient}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-black text-slate-800">{title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
        Open
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
}

export default function FarmerDashboard() {
  const navigate = useNavigate();

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="relative z-10 w-full pb-8"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-800 shadow-sm backdrop-blur-sm">
            <LayoutDashboard className="h-3.5 w-3.5 text-emerald-600" />
            Your farm desk
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-800 md:text-4xl">
            {greeting()}, farmer
          </h1>
          <p className="mt-2 max-w-xl text-base font-medium text-slate-600">
            One place to act on AI recommendations, scan crops, and keep your voice assistant in context for this season.
          </p>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white px-4 py-3 text-sm shadow-sm">
          <p className="flex items-center gap-2 font-bold text-amber-900">
            <CloudSun className="h-4 w-4 shrink-0 text-amber-600" />
            Season tip
          </p>
          <p className="mt-1 text-xs font-medium text-amber-900/80">
            Mulch after light rain to lock moisture before the next dry spell.
          </p>
        </div>
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard
          icon={Sprout}
          label="Active plan"
          value="Ragi"
          hint="Top match for your soil profile"
          accent="bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-200/50"
        />
        <StatCard
          icon={Mic}
          label="Voice queries"
          value="12"
          hint="This week (demo)"
          accent="bg-gradient-to-br from-violet-500 to-purple-600 shadow-md shadow-violet-200/40"
        />
        <StatCard
          icon={Camera}
          label="AI scans"
          value="3"
          hint="Leaf health checks"
          accent="bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-200/40"
        />
        <StatCard
          icon={TrendingUp}
          label="Est. margin uplift"
          value="+18%"
          hint="vs last season benchmark"
          accent="bg-gradient-to-br from-lime-500 to-emerald-600 shadow-md shadow-lime-200/40"
        />
      </motion.section>

      <div className="mb-4 flex items-center gap-2">
        <Wheat className="h-5 w-5 text-emerald-700" />
        <h2 className="text-lg font-black text-slate-800">Quick actions</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-10 grid gap-4 md:grid-cols-3"
      >
        <ActionTile
          title="Crop recommendation"
          description="Run the guided form with soil, water, and season inputs."
          icon={Sprout}
          gradient="bg-gradient-to-br from-emerald-500 to-green-600"
          onClick={() => navigate('/form')}
        />
        <ActionTile
          title="AI health scan"
          description="Upload a leaf or field photo for instant stress signals."
          icon={Camera}
          gradient="bg-gradient-to-br from-sky-500 to-cyan-600"
          onClick={() => navigate('/aiscan')}
        />
        <ActionTile
          title="Last results"
          description="Review your latest recommendation summary and next steps."
          icon={MessageCircle}
          gradient="bg-gradient-to-br from-amber-500 to-orange-600"
          onClick={() => navigate('/result')}
        />
      </motion.div>

      <div className="rounded-3xl border border-emerald-100/90 bg-white/80 p-5 shadow-sm backdrop-blur-sm md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-black text-slate-800">Recent activity</h2>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-800">
            Demo timeline
          </span>
        </div>
        <ul className="space-y-3">
          {[
            { t: 'Today, 10:32', a: 'Asked voice assistant about cotton bollworm prevention.' },
            { t: 'Yesterday', a: 'Completed soil-based recommendation — Ragi shortlisted.' },
            { t: 'Mon', a: 'Uploaded leaf image for early spot analysis.' },
          ].map((row) => (
            <li
              key={row.t}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3"
            >
              <span className="shrink-0 text-xs font-bold text-slate-400">{row.t}</span>
              <span className="text-sm font-medium text-slate-700">{row.a}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
