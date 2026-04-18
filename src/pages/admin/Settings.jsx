import { Bell, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-black text-slate-900">Settings</h2>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Manage workspace preferences and assistant languages.
        </p>
      </div>

      <div className="grid gap-4">
        <Link
          to="/admin/language"
          className="flex items-center gap-4 rounded-3xl border border-emerald-100 bg-white/95 p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
            <Globe className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="font-bold text-slate-900">Languages &amp; voice</p>
            <p className="text-sm text-slate-500">Locales supported by KrishiVoice AI</p>
          </div>
        </Link>

        <div className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white/60 p-5 opacity-80">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
            <Bell className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="font-bold text-slate-900">Notifications</p>
            <p className="text-sm text-slate-500">Coming soon</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white/60 p-5 opacity-80">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
            <Shield className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="font-bold text-slate-900">Roles &amp; access</p>
            <p className="text-sm text-slate-500">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
