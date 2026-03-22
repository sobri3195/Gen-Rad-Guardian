import type { RiskFactor } from '@/data/mockData';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const variantMap = {
  High: 'destructive',
  Moderate: 'warning',
  Low: 'success',
} as const;

export function RiskFactorCard({ factor }: { factor: RiskFactor }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{factor.name}</CardTitle>
            <CardDescription className="mt-1">{factor.value}</CardDescription>
          </div>
          <Badge variant={variantMap[factor.impact]}>{factor.impact} impact</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{factor.description}</p>
      </CardContent>
    </Card>
  );
}
