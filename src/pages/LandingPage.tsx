import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { footerLinks, pageIntro } from '@/data/mockData';

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Explainable preventive AI',
    body: 'Visualize lifestyle, environmental, family, and behavior risk drivers with transparent reasoning and confidence notes.',
  },
  {
    icon: Stethoscope,
    title: 'Screening support, not diagnosis',
    body: 'Generate clinician-ready screening prompts and referral guidance without presenting definitive medical conclusions.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-first health-tech UX',
    body: 'Clear disclaimers, auditable recommendations, and trust-forward interfaces built for responsible demos and MVPs.',
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1400px] space-y-8">
        <section className="overflow-hidden rounded-[36px] border border-white/60 bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-teal-200">
                <Sparkles className="size-4" /> Preventive oncology intelligence platform
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{pageIntro.title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">{pageIntro.subtitle}</p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-slate-300">Designed for health innovation teams, startups, and clinical demos, Gen-Rad Guardian helps identify elevated risk patterns early, surface education, and support screening follow-through with a modern dashboard experience.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/dashboard"><Button size="lg">Open platform <ArrowRight className="size-4" /></Button></Link>
                <Link to="/education"><Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10">View prevention content</Button></Link>
              </div>
            </div>
            <Card className="border-white/10 bg-white/5 text-white shadow-none backdrop-blur">
              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-teal-200">Trust + scope</p>
                  <h2 className="mt-2 text-2xl font-semibold">Supportive risk management, clinically validated next</h2>
                </div>
                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  <p>Gen-Rad Guardian is not a diagnosis system, not a replacement for physicians, and not a definitive treatment engine.</p>
                  <p>Every screening suggestion, referral recommendation, and risk interpretation must be reviewed by qualified clinicians before action.</p>
                  <p>The experience emphasizes prevention, education, trend tracking, and safer risk communication for early intervention workflows.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="h-full">
              <CardContent className="space-y-4">
                <div className="inline-flex rounded-2xl bg-secondary p-3 text-secondary-foreground">
                  <highlight.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{highlight.body}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <CardContent className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Platform value</p>
              <h2 className="text-3xl font-semibold">A scalable dashboard for risk communication, prevention, and referral support</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Lifestyle and behavior risk scoring',
                  'Environmental and occupational exposure review',
                  'Family history-informed screening suggestions',
                  'Explainability, traceability, and confidence notes',
                  'Population insights for cohorts and operations',
                  'Responsive design ready for Vercel deployment',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-linear-to-br from-teal-600 to-cyan-500 text-white">
            <CardContent className="space-y-5">
              <h2 className="text-3xl font-semibold">Built for modern health-tech demos and startup MVPs</h2>
              <p className="text-sm leading-7 text-white/85">The interface uses reusable cards, charts, tabs, alerts, comparison views, and safety messaging to make risk information understandable without overstating certainty.</p>
              <div className="rounded-3xl bg-white/12 p-4 text-sm leading-7 text-white/90">
                Recommended use: prevention programs, navigation teams, care innovation showcases, and clinician-guided screening support pilots.
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="flex flex-col gap-4 rounded-[28px] border border-white/60 bg-white/80 px-6 py-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Gen-Rad Guardian © 2026 · Preventive risk assessment and screening support platform.</p>
          <div className="flex flex-wrap gap-2">
            {footerLinks.map((link) => (
              <span key={link} className="rounded-full bg-muted px-3 py-1">{link}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
