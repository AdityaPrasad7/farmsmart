import { Bell, User } from 'lucide-react';

export default function AdminTopNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/85 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between gap-4 px-4 md:h-16 md:px-6 lg:px-8">
        <div className="min-w-0">
          <h1 className="truncate text-lg font-black tracking-tight text-slate-900 md:text-xl">
            FarmSmart AI
          </h1>
          <p className="hidden text-[11px] font-semibold uppercase tracking-widest text-emerald-600 sm:block">
            Command center
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-slate-600 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/80 hover:text-emerald-800"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-300/40 transition hover:brightness-105"
            aria-label="Admin profile"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
