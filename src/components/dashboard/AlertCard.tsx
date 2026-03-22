import { iconMap } from '@/data/mockData';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const styles = {
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  destructive: 'border-red-200 bg-red-50 text-red-900',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
} as const;

export function AlertCard({ title, detail, tone }: { title: string; detail: string; tone: keyof typeof styles }) {
  const Icon = tone === 'warning' ? iconMap.warning : tone === 'destructive' ? iconMap.warning : iconMap.success;

  return (
    <Alert className={styles[tone]}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 size-5" />
        <div className="space-y-1">
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription className="text-current/80">{detail}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
}
