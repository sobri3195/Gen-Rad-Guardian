import { ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Stat } from '@/data/mockData';

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{stat.label}</CardDescription>
        <CardTitle className="text-3xl">{stat.value}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{stat.detail}</p>
        {stat.delta ? (
          <div className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <ArrowUpRight className="size-3.5" /> {stat.delta}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
