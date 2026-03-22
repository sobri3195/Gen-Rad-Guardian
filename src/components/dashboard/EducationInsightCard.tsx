import { BookOpenText } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function EducationInsightCard({ title, body, tag }: { title: string; body: string; tag: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-secondary p-3 text-secondary-foreground">
              <BookOpenText className="size-5" />
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
          <Badge variant="outline">{tag}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
