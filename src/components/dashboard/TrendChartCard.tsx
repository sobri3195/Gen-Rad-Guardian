import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TrendChartCard({ title, description, dataKey, data }: { title: string; description: string; dataKey: string; data: Array<Record<string, string | number>> }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#5f738c', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5f738c', fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#0f766e" strokeWidth={3} dot={{ fill: '#0f766e', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
