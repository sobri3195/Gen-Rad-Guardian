import { ExplainabilityCard } from '@/components/dashboard/ExplainabilityCard';
import { LifestyleProfileCard } from '@/components/dashboard/LifestyleProfileCard';
import { PreventionChecklistCard } from '@/components/dashboard/PreventionChecklistCard';
import { RiskFactorCard } from '@/components/dashboard/RiskFactorCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { explainabilityPoints, preventionChecklist, riskFactors } from '@/data/mockData';

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Profile" title="Personal risk profile" description="Understand the user’s lifestyle, environmental exposure, family history, and explainable AI breakdown through tabbed, reusable components." />
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="risk">Risk</TabsTrigger>
          <TabsTrigger value="recommendation">Actions</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardDescription>User summary</CardDescription>
                  <CardTitle className="mt-1 text-3xl">Jordan M. · 49 years</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Badge variant="warning">Moderate-elevated risk</Badge>
                  <Badge variant="outline">Last updated 2026-03-16</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
              <div className="rounded-3xl bg-muted/60 p-4"><span className="block text-foreground font-medium">Family history</span> First-degree colorectal cancer history plus maternal breast cancer history.</div>
              <div className="rounded-3xl bg-muted/60 p-4"><span className="block text-foreground font-medium">Environmental factors</span> Elevated home radon reading and rotating shift-work exposure.</div>
              <div className="rounded-3xl bg-muted/60 p-4"><span className="block text-foreground font-medium">Behavior profile</span> Improving exercise habits, but low fiber intake and inconsistent sleep remain active factors.</div>
            </CardContent>
          </Card>
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <LifestyleProfileCard />
            <ExplainabilityCard points={explainabilityPoints} />
          </div>
        </TabsContent>
        <TabsContent value="risk" className="grid gap-4 lg:grid-cols-2">
          {riskFactors.map((factor) => <RiskFactorCard key={factor.name} factor={factor} />)}
        </TabsContent>
        <TabsContent value="recommendation">
          <PreventionChecklistCard items={preventionChecklist} />
        </TabsContent>
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardDescription>Preventive education</CardDescription>
              <CardTitle>How to interpret this profile safely</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>Risk scores represent probability-informed support signals, not confirmation of disease.</p>
              <p>Use these patterns to prepare clinician questions, improve modifiable habits, and document exposures that may shift screening timing.</p>
              <p>Any urgent symptom, diagnostic workup, or definitive treatment decision must happen under professional medical care.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
