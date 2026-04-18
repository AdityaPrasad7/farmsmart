import FarmerCard from './FarmerCard';

export default function FarmerGrid({ farmers, onSelectFarmer }) {
  if (!farmers.length) {
    return (
      <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/30 px-6 py-16 text-center">
        <p className="text-lg font-bold text-slate-700">No farmers match your filters</p>
        <p className="mt-2 text-sm text-slate-500">Try widening search or clearing activity / crop filters.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {farmers.map((farmer) => (
        <FarmerCard key={farmer.id} farmer={farmer} onSelect={onSelectFarmer} />
      ))}
    </div>
  );
}
