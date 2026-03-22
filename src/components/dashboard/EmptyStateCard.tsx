import { Inbox } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export function EmptyStateCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="rounded-3xl bg-muted p-4 text-muted-foreground">
          <Inbox className="size-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
