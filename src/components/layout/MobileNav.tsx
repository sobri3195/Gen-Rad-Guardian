import { NavLink } from 'react-router-dom';

import { ScrollArea } from '@/components/ui/scroll-area';
import { navItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <ScrollArea className="w-full whitespace-nowrap rounded-[24px] border border-white/60 bg-white/80 p-2 backdrop-blur">
        <div className="flex gap-2">
          {navItems.slice(1).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm',
                  isActive ? 'bg-slate-950 text-white' : 'bg-muted text-muted-foreground',
                )
              }
            >
              <item.icon className="size-4" />
              {item.short}
            </NavLink>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
