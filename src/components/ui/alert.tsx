import { cn } from '@/lib/utils';

export function Alert({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('rounded-3xl border px-4 py-3', className)} {...props} />;
}

export function AlertTitle({ className, ...props }: React.ComponentProps<'h4'>) {
  return <h4 className={cn('font-medium', className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />;
}
