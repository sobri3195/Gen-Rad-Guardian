import type { Stat } from '@/data/mockData';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DatasetStatusCard({ items }: { items: Stat[] }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Dataset health summary</CardDescription>
        <CardTitle>Data readiness and governance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-3xl border border-border/70 bg-white/60 p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
