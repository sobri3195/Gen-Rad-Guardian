import { ExplainabilityCard } from '@/components/dashboard/ExplainabilityCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { explainabilityPoints } from '@/data/mockData';

export function ExplainabilityPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Explainability" title="Explainability and audit" description="Show why the user is considered low, moderate, or high risk, list key contributing variables, and document confidence, transparency, and recommendation traceability." />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <ExplainabilityCard points={explainabilityPoints} />
        <Card>
          <CardHeader>
            <CardDescription>Transparency + safety</CardDescription>
            <CardTitle>Model confidence and recommendation traceability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
            <div className="rounded-3xl bg-muted/60 p-4">Confidence is moderate due to partial clinical record verification and a recent environmental data gap.</div>
            <div className="rounded-3xl bg-muted/60 p-4">Recommendations are traced to questionnaire inputs, behavior trend data, family history entries, and exposure summaries.</div>
            <div className="rounded-3xl bg-red-50 p-4 text-red-900">Safety disclaimer: AI-generated reasoning is intended to support human review, not replace physician assessment, diagnosis, or treatment planning.</div>
            <div className="rounded-3xl bg-white/60 p-4">Audit trail placeholder: model version v2.4.1, bias review complete, explainability snapshot recorded 2026-03-16.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
