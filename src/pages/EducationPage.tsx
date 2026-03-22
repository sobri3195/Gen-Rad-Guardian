import { EducationInsightCard } from '@/components/dashboard/EducationInsightCard';
import { PreventionChecklistCard } from '@/components/dashboard/PreventionChecklistCard';
import { SectionIntro } from '@/components/dashboard/SectionIntro';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { educationCards, preventionChecklist } from '@/data/mockData';

export function EducationPage() {
  return (
    <div className="space-y-6">
      <SectionIntro eyebrow="Education" title="Education and prevention" description="Provide personalized education about modifiable and non-modifiable risks, surface prevention checklists, and address common myths in accessible language." />
      <div className="grid gap-6 lg:grid-cols-3">
        {educationCards.map((card) => <EducationInsightCard key={card.title} {...card} />)}
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <PreventionChecklistCard items={preventionChecklist} />
        <Card>
          <CardHeader>
            <CardDescription>Myth vs fact</CardDescription>
            <CardTitle>Common prevention misconceptions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
            <div className="rounded-3xl border border-border/70 bg-white/60 p-4"><span className="font-medium text-foreground">Myth:</span> Cancer risk tools can confirm disease.<p className="mt-2"><span className="font-medium text-foreground">Fact:</span> They estimate patterns and support preventive action only.</p></div>
            <div className="rounded-3xl border border-border/70 bg-white/60 p-4"><span className="font-medium text-foreground">Myth:</span> Family history means prevention will not help.<p className="mt-2"><span className="font-medium text-foreground">Fact:</span> It often makes screening and lifestyle intervention more important, not less.</p></div>
            <div className="rounded-3xl border border-border/70 bg-white/60 p-4"><span className="font-medium text-foreground">Myth:</span> Screening matters only when symptoms appear.<p className="mt-2"><span className="font-medium text-foreground">Fact:</span> Preventive screening is often intended before symptoms start.</p></div>
            <div className="rounded-3xl border border-border/70 bg-white/60 p-4"><span className="font-medium text-foreground">Myth:</span> One healthy habit cancels all exposure risks.<p className="mt-2"><span className="font-medium text-foreground">Fact:</span> Prevention works best as a portfolio of habits, monitoring, and clinician follow-up.</p></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
