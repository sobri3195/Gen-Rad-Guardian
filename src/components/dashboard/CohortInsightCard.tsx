import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export function CohortInsightCard({ data }: { data: Array<{ name: string; value: number }> }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Aggregate risk distribution</CardDescription>
        <CardTitle>Cohort risk map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={90} paddingAngle={5}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.map((item, index) => (
            <div key={item.name} className="rounded-2xl bg-muted/60 p-3 text-sm">
              <div className="mb-2 size-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <p className="font-medium">{item.name}</p>
              <p className="text-muted-foreground">{item.value}% of monitored users</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
