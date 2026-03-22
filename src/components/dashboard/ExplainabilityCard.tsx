import { BrainCircuit } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ExplainabilityCard({ points }: { points: string[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-accent p-3 text-accent-foreground">
            <BrainCircuit className="size-5" />
          </div>
          <div>
            <CardDescription>Explainable AI analysis</CardDescription>
            <CardTitle>Why the current tier was assigned</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="rounded-2xl bg-muted/70 px-4 py-3 leading-6">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
