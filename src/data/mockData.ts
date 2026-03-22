import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BrainCircuit,
  Building2,
  CircleAlert,
  ClipboardCheck,
  Compass,
  HeartPulse,
  Leaf,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  short: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
  delta?: string;
};

export type RiskFactor = {
  name: string;
  value: string;
  impact: 'High' | 'Moderate' | 'Low';
  description: string;
};

export type ScreeningRecommendation = {
  title: string;
  priority: 'Urgent' | 'Priority' | 'Routine';
  window: string;
  ageBand: string;
  notes: string;
  referral: string;
};

export const navItems: NavItem[] = [
  { title: 'Landing', href: '/', icon: Sparkles, short: 'Home' },
  { title: 'Dashboard', href: '/dashboard', icon: Activity, short: 'Board' },
  { title: 'Risk Profile', href: '/profile', icon: HeartPulse, short: 'Profile' },
  { title: 'Screening', href: '/screening', icon: ClipboardCheck, short: 'Screen' },
  { title: 'Monitoring', href: '/trends', icon: Compass, short: 'Trends' },
  { title: 'Education', href: '/education', icon: Leaf, short: 'Learn' },
  { title: 'Explainability', href: '/explainability', icon: BrainCircuit, short: 'AI' },
  { title: 'Population Insights', href: '/admin', icon: Building2, short: 'Admin' },
];

export const dashboardStats: Stat[] = [
  { label: 'Composite risk score', value: '68 / 100', detail: 'Moderate-to-elevated risk tier', delta: '+6 over 90 days' },
  { label: 'Screening priority', value: 'Priority', detail: 'Clinical review suggested within 30 days' },
  { label: 'Protective habits', value: '7 / 12', detail: 'Up from 5 habits last quarter', delta: '+2 habits' },
  { label: 'Environmental exposure', value: '3 active', detail: 'Air quality, shift work, and radon concerns' },
];

export const riskFactors: RiskFactor[] = [
  {
    name: 'Family history of colorectal cancer',
    value: 'First-degree relative diagnosed at 52',
    impact: 'High',
    description: 'Hereditary risk increases screening urgency and lowers recommended starting age.',
  },
  {
    name: 'Tobacco exposure history',
    value: 'Former smoker, 15 pack-years',
    impact: 'Moderate',
    description: 'Risk remains elevated after quitting and should be monitored alongside respiratory symptoms.',
  },
  {
    name: 'Night-shift work pattern',
    value: '4 nights/week for 6 years',
    impact: 'Moderate',
    description: 'Circadian disruption correlates with metabolic stress and lower preventive adherence.',
  },
  {
    name: 'Low fiber intake',
    value: 'Average 12g/day',
    impact: 'Low',
    description: 'This is modifiable and linked to gastrointestinal risk reduction over time.',
  },
];

export const screeningRecommendations: ScreeningRecommendation[] = [
  {
    title: 'Colonoscopy / GI referral review',
    priority: 'Priority',
    window: 'Within the next 1-3 months',
    ageBand: 'Start now due to family history',
    notes: 'Discuss prep instructions, medication review, and symptom timeline before scheduling.',
    referral: 'Primary care or gastroenterology consultation for individualized validation.',
  },
  {
    title: 'Low-dose CT eligibility conversation',
    priority: 'Routine',
    window: 'At next annual prevention visit',
    ageBand: 'Review against smoking history criteria',
    notes: 'This recommendation is scenario-based and requires clinician confirmation against formal guidelines.',
    referral: 'Pulmonary or primary care review if criteria are met.',
  },
  {
    title: 'Genetic counseling intake',
    priority: 'Priority',
    window: 'Within 60 days',
    ageBand: 'Any age when familial clustering is present',
    notes: 'Bring pedigree details, ages of diagnosis, and prior pathology reports if available.',
    referral: 'Cancer genetics clinic or hereditary risk program.',
  },
];

export const trendData = [
  { month: 'Oct', risk: 74, exercise: 42, environment: 66 },
  { month: 'Nov', risk: 72, exercise: 48, environment: 64 },
  { month: 'Dec', risk: 71, exercise: 54, environment: 63 },
  { month: 'Jan', risk: 70, exercise: 59, environment: 61 },
  { month: 'Feb', risk: 69, exercise: 64, environment: 59 },
  { month: 'Mar', risk: 68, exercise: 71, environment: 58 },
];

export const cohortDistribution = [
  { name: 'Low', value: 36 },
  { name: 'Moderate', value: 44 },
  { name: 'High', value: 20 },
];

export const recentAssessments = [
  { id: 'A-1028', date: '2026-03-16', summary: 'Family history updated; screening urgency increased.', status: 'Updated' },
  { id: 'A-1014', date: '2026-02-21', summary: 'Improved nutrition score and activity adherence.', status: 'Improved' },
  { id: 'A-0991', date: '2026-01-18', summary: 'Environmental exposure questionnaire completed.', status: 'New data' },
];

export const alerts = [
  {
    title: 'Clinical validation required',
    detail: 'This risk profile is educational and supportive only. A licensed clinician must validate screening and referral decisions.',
    tone: 'warning' as const,
  },
  {
    title: 'Radon mitigation reminder',
    detail: 'Recent home test exceeded the action threshold. Surface the mitigation plan during the next review.',
    tone: 'destructive' as const,
  },
  {
    title: 'Protective behavior milestone',
    detail: 'Daily walking goal has been met for 4 consecutive weeks.',
    tone: 'success' as const,
  },
];

export const educationCards = [
  {
    title: 'Modifiable risks',
    body: 'Improve diet quality, reduce alcohol exposure, prioritize movement, and address occupational inhalants.',
    tag: 'Actionable',
  },
  {
    title: 'Non-modifiable risks',
    body: 'Age, family history, and inherited syndromes can change screening timing but not personal agency.',
    tag: 'Background',
  },
  {
    title: 'Myth vs fact',
    body: 'Feeling well does not rule out risk. Preventive screening is designed for people who may have no symptoms.',
    tag: 'FAQ',
  },
];

export const preventionChecklist = [
  'Schedule clinician-reviewed screening discussion.',
  'Log weekly movement and fiber intake targets.',
  'Confirm home radon mitigation follow-up testing.',
  'Update family history after specialist visits.',
  'Review alcohol and sleep pattern goals monthly.',
];

export const explainabilityPoints = [
  'Family history contributes 28% of the current score weighting.',
  'Environmental factors contribute 22%, led by radon and shift-work exposure.',
  'Behavioral improvements lowered the score by 6 points over the last quarter.',
  'Model confidence is moderate because pathology-confirmed records are partially missing.',
];

export const datasetStatus = [
  { label: 'Questionnaire completeness', value: '94%', detail: 'Most recent intake synchronized 2026-03-16' },
  { label: 'Wearable adherence', value: '81%', detail: '28 of last 35 days reported' },
  { label: 'Environmental sensor coverage', value: '76%', detail: 'Home + workplace data available' },
  { label: 'Model version', value: 'v2.4.1', detail: 'Bias review completed 2026-03-01' },
];

export const footerLinks = ['Privacy-first design', 'Clinical validation workflow', 'Vercel-ready deployment'];

export const pageIntro = {
  title: 'Gen-Rad Guardian',
  subtitle:
    'AI-powered preventive cancer risk intelligence for screening support, education, and clinician-guided follow-through.',
};

export const iconMap = {
  warning: CircleAlert,
  success: ShieldCheck,
  insight: Microscope,
  cohort: Users,
};
