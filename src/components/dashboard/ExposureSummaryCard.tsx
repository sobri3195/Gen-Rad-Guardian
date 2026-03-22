import { Radiation, Wind } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function ExposureSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Environmental exposure summary</CardDescription>
        <CardTitle>Home + occupational context</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><Radiation className="size-4 text-amber-500" /> Radon mitigation follow-up</span><span>72%</span></div>
          <Progress value={72} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><Wind className="size-4 text-sky-500" /> Air quality risk control</span><span>54%</span></div>
          <Progress value={54} />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">Exposure data is aggregated from self-report, home monitoring, and workplace pattern capture. Missing values lower confidence and should be reconciled clinically.</p>
      </CardContent>
    </Card>
  );
}
