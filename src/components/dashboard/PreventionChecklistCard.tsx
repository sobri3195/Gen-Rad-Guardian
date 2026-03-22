import { CheckCircle2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PreventionChecklistCard({ items }: { items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Prevention checklist</CardDescription>
        <CardTitle>Next steps to support risk reduction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
