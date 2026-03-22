import { ScreeningRecommendationCard } from '@/components/dashboard/ScreeningRecommendationCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { AlertCard } from '@/components/dashboard/AlertCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { screeningRecommendations } from '@/data/mockData';

export function ScreeningPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Screening" title="Personalized screening recommendations" description="Translate current risk signals into a prioritized, easy-to-review screening plan with clear timing windows, preparation notes, referral guidance, and explicit clinical disclaimers." />
      <AlertCard title="Clinical validation is mandatory" detail="These suggestions are generated for preventive support only. Final screening choice, interval, and eligibility must be determined by a licensed clinician." tone="warning" />
      <div className="grid gap-6 lg:grid-cols-3">
        {screeningRecommendations.map((recommendation) => <ScreeningRecommendationCard key={recommendation.title} recommendation={recommendation} />)}
      </div>
      <Card>
        <CardHeader>
          <CardDescription>Risk tier mapping</CardDescription>
          <CardTitle>How urgency is assigned</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
          <div className="rounded-3xl bg-emerald-50 p-4"><span className="font-medium text-emerald-800">Routine</span><p className="mt-2">Standard prevention review with clinician confirmation at the next visit.</p></div>
          <div className="rounded-3xl bg-amber-50 p-4"><span className="font-medium text-amber-800">Priority</span><p className="mt-2">Elevated factors warrant earlier discussion, referral, or tailored intake planning.</p></div>
          <div className="rounded-3xl bg-red-50 p-4"><span className="font-medium text-red-800">Urgent</span><p className="mt-2">Use only when clinician-reviewed history or red-flag context indicates expedited navigation.</p></div>
        </CardContent>
      </Card>
    </div>
  );
}
