import { PreventionChecklistCard } from '@/components/dashboard/PreventionChecklistCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { TrendChartCard } from '@/components/dashboard/TrendChartCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { preventionChecklist, trendData } from '@/data/mockData';

export function TrendsPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Monitoring" title="Trend and monitoring" description="Review risk score trends over time, lifestyle improvement tracking, environmental risk trajectory, and preventive milestones in a monitoring-friendly format." />
      <div className="grid gap-6 xl:grid-cols-2">
        <TrendChartCard title="Composite risk trend" description="Risk score over time" data={trendData} dataKey="risk" />
        <TrendChartCard title="Lifestyle improvement trajectory" description="Exercise adherence over time" data={trendData} dataKey="exercise" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardDescription>Environmental risk trend view</CardDescription>
            <CardTitle>Exposure burden and milestones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-3xl bg-muted/60 p-4">Radon mitigation planning in progress with repeat test scheduled for April 2026.</div>
            <div className="rounded-3xl bg-muted/60 p-4">Night-shift load reduced from 5 nights/week to 4 nights/week over 3 months.</div>
            <div className="rounded-3xl bg-muted/60 p-4">Air quality sensor trend improved after workstation ventilation change.</div>
          </CardContent>
        </Card>
        <PreventionChecklistCard items={preventionChecklist} />
      </div>
    </div>
  );
}
