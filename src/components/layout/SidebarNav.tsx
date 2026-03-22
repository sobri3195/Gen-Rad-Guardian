import { NavLink } from 'react-router-dom';

import { navItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function SidebarNav() {
  return (
    <aside className="hidden w-72 shrink-0 rounded-[32px] border border-white/60 bg-slate-950 px-5 py-6 text-white shadow-2xl lg:block">
      <div className="mb-8 space-y-2 px-2">
        <p className="text-sm uppercase tracking-[0.25em] text-teal-200/80">Preventive AI</p>
        <h1 className="text-2xl font-semibold">Gen-Rad Guardian</h1>
        <p className="text-sm leading-6 text-slate-300">Cancer risk management, screening support, and educational insight in one clinician-aware workspace.</p>
      </div>
      <nav className="space-y-1">
        {navItems.slice(1).map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition hover:bg-white/8',
                isActive ? 'bg-white text-slate-950 shadow-md' : 'text-slate-200',
              )
            }
          >
            <item.icon className="size-4" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
        <p className="font-medium text-white">Safety note</p>
        <p className="mt-2 leading-6">Outputs are supportive and educational only. Screening and referral choices require licensed clinical validation.</p>
      </div>
    </aside>
  );
}
