import { CohortInsightCard } from '@/components/dashboard/CohortInsightCard';
import { DatasetStatusCard } from '@/components/dashboard/DatasetStatusCard';
import { EmptyStateCard } from '@/components/dashboard/EmptyStateCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cohortDistribution, datasetStatus } from '@/data/mockData';

export function AdminPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Admin" title="Population insights" description="Aggregate cohort trends, dataset health, and governance placeholders for operational, research, and admin-facing views in the platform." />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <CohortInsightCard data={cohortDistribution} />
        <DatasetStatusCard items={datasetStatus} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>Cohort analysis</CardDescription>
            <CardTitle>Trend monitoring</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">Moderate-risk users are the fastest-growing cohort segment, with environmental data completeness emerging as the main differentiator.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Model operations</CardDescription>
            <CardTitle>Version and oversight</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">Model version v2.4.1 is active. Bias review passed, fairness audit completed, and clinician oversight remains required for downstream decisions.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Access control</CardDescription>
            <CardTitle>Role-based placeholders</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">Reserved areas for care navigator, admin, clinician reviewer, and compliance officer permissions are included as scalable MVP placeholders.</CardContent>
        </Card>
        <EmptyStateCard title="No escalations in queue" description="When anomaly detection or review flags appear, they can surface here as an operational empty state." />
      </div>
    </div>
  );
}
