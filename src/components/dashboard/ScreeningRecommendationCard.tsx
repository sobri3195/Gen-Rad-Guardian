import type { ScreeningRecommendation } from '@/data/mockData';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const priorityVariant = {
  Urgent: 'destructive',
  Priority: 'warning',
  Routine: 'success',
} as const;

export function ScreeningRecommendationCard({ recommendation }: { recommendation: ScreeningRecommendation }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardDescription>Personalized screening suggestion</CardDescription>
            <CardTitle className="mt-1">{recommendation.title}</CardTitle>
          </div>
          <Badge variant={priorityVariant[recommendation.priority]}>{recommendation.priority}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p><span className="font-medium text-foreground">Window:</span> {recommendation.window}</p>
        <p><span className="font-medium text-foreground">Eligibility context:</span> {recommendation.ageBand}</p>
        <p><span className="font-medium text-foreground">Preparation:</span> {recommendation.notes}</p>
        <p><span className="font-medium text-foreground">Referral guidance:</span> {recommendation.referral}</p>
      </CardContent>
    </Card>
  );
}
