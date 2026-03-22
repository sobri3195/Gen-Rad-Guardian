import { AlertCard } from '@/components/dashboard/AlertCard';
import { ExposureSummaryCard } from '@/components/dashboard/ExposureSummaryCard';
import { RiskFactorCard } from '@/components/dashboard/RiskFactorCard';
import { RiskScoreCard } from '@/components/dashboard/RiskScoreCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { StatCard } from '@/components/dashboard/StatCard';
import { TimelineCard } from '@/components/dashboard/TimelineCard';
import { dashboardStats, alerts, recentAssessments, riskFactors } from '@/data/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Dashboard" title="Risk assessment dashboard" description="Track the user’s current risk tier, recent assessment activity, top active factors, and health alerts in a dashboard-oriented layout built for preventive decision support." />
      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-2">
        {dashboardStats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <RiskScoreCard score={68} />
        <ExposureSummaryCard />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {riskFactors.map((factor) => <RiskFactorCard key={factor.name} factor={factor} />)}
        </div>
        <div className="space-y-4">
          {alerts.map((alert) => <AlertCard key={alert.title} {...alert} />)}
          <TimelineCard items={recentAssessments} />
        </div>
      </div>
    </div>
  );
}
