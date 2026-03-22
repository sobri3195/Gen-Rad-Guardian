import { Dumbbell, MoonStar, Salad } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const rows = [
  { icon: Dumbbell, label: 'Movement adherence', value: 71 },
  { icon: Salad, label: 'Nutrition quality', value: 64 },
  { icon: MoonStar, label: 'Sleep regularity', value: 58 },
];

export function LifestyleProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Lifestyle profile</CardDescription>
        <CardTitle>Behavioral risk and resilience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2"><row.icon className="size-4 text-primary" /> {row.label}</span>
                <span>{row.value}%</span>
              </div>
              <Progress value={row.value} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
