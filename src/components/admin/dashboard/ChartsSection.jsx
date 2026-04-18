import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BarChart3, LineChart as LineChartIcon, PieChart as PieIcon } from 'lucide-react';
import { cropPopularity, languageUsage, queriesOverTime } from './dashboardDummyData';

const chartCard =
  'rounded-3xl border border-emerald-100/90 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,78,59,0.05)] ring-1 ring-emerald-50/40';

const tooltipStyle = {
  backgroundColor: 'rgba(255,255,255,0.96)',
  border: '1px solid rgb(209 250 229)',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 600,
  color: '#0f172a',
  boxShadow: '0 10px 40px rgba(6,78,59,0.12)',
};

export default function ChartsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="grid gap-6 lg:grid-cols-2"
    >
      <div className={`${chartCard} lg:col-span-2`}>
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <LineChartIcon className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-800">Queries over time</h3>
            <p className="text-xs font-medium text-slate-500">Last 7 days · voice assistant volume</p>
          </div>
        </div>
        <div className="h-[280px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={queriesOverTime} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ecfdf5" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="queries"
                name="Queries"
                stroke="#059669"
                strokeWidth={3}
                dot={{ fill: '#059669', strokeWidth: 2, r: 4, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={chartCard}>
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <BarChart3 className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-800">Crop popularity</h3>
            <p className="text-xs font-medium text-slate-500">Query-weighted interest</p>
          </div>
        </div>
        <div className="h-[260px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cropPopularity} layout="vertical" margin={{ left: 4, right: 8 }} barCategoryGap={12}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="crop"
                width={68}
                tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="count" name="Interest" radius={[0, 10, 10, 0]}>
                {cropPopularity.map((row, i) => (
                  <Cell key={row.crop} fill={`hsl(${150 + i * 8}, 58%, ${46 - i * 2}%)`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={chartCard}>
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <PieIcon className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-800">Language usage</h3>
            <p className="text-xs font-medium text-slate-500">Share of assistant sessions</p>
          </div>
        </div>
        <div className="h-[260px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={languageUsage}
                cx="50%"
                cy="50%"
                innerRadius={56}
                outerRadius={88}
                paddingAngle={3}
                dataKey="value"
                nameKey="name"
                stroke="#fff"
                strokeWidth={2}
              >
                {languageUsage.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, 'Share']} />
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                wrapperStyle={{ fontSize: '11px', fontWeight: 600, paddingLeft: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
}
