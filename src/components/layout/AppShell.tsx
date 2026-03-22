import { Outlet } from 'react-router-dom';

import { HeaderBar } from '@/components/layout/HeaderBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { SidebarNav } from '@/components/layout/SidebarNav';

export function AppShell() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        <SidebarNav />
        <main className="min-w-0 flex-1 space-y-6">
          <HeaderBar />
          <MobileNav />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
