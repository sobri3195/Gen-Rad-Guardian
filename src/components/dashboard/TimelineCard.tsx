import { Clock3 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TimelineCard({ items }: { items: Array<{ id: string; date: string; summary: string; status: string }> }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Recent assessments</CardDescription>
        <CardTitle>Assessment timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-3xl border border-border/70 bg-white/60 p-4">
              <div className="rounded-2xl bg-secondary p-3 text-secondary-foreground"><Clock3 className="size-4" /></div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{item.id}</p>
                  <Badge variant="outline">{item.date}</Badge>
                  <Badge variant="default">{item.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
