import { ShieldAlert } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatTier } from '@/lib/utils';

export function RiskScoreCard({ score }: { score: number }) {
  const tier = formatTier(score);
  const badgeVariant = tier === 'High' ? 'destructive' : tier === 'Moderate' ? 'warning' : 'success';

  return (
    <Card className="overflow-hidden bg-slate-950 text-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardDescription className="text-slate-300">Overall preventive risk score</CardDescription>
            <CardTitle className="mt-2 text-5xl text-white">{score}</CardTitle>
          </div>
          <div className="rounded-full bg-white/10 p-3">
            <ShieldAlert className="size-6 text-teal-300" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge variant={badgeVariant}>{tier} risk tier</Badge>
        <Progress value={score} className="bg-white/10" />
        <p className="text-sm leading-6 text-slate-300">This score blends lifestyle patterns, environmental exposure, family history, and recent health behaviors. It supports prevention planning and is not diagnostic.</p>
      </CardContent>
    </Card>
  );
}
