import { Bell, Search, ShieldAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeaderBar() {
  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-white/60 bg-white/80 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Clinical review recommended</Badge>
          <Badge variant="warning">Supportive AI only</Badge>
        </div>
        <h2 className="mt-3 text-2xl font-semibold">Preventive risk intelligence dashboard</h2>
        <p className="text-sm text-muted-foreground">Monitor elevated factors, explain model reasoning, and guide next-step screening conversations.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
          <Search className="size-4" /> Search patient, assessment, or cohort
        </div>
        <Button variant="outline" size="icon" aria-label="Alerts">
          <Bell className="size-4" />
        </Button>
        <Button>
          <ShieldAlert className="size-4" /> Review safeguards
        </Button>
      </div>
    </header>
  );
}
