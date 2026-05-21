import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ClassCardProps {
  title: string;
  focus: string;
  expect: string[];
  bestFor: string[];
}

export function ClassCard({ title, focus, expect, bestFor }: ClassCardProps) {
  return (
    <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-black uppercase tracking-tight">
          {title}
        </CardTitle>
        <p className="text-sm font-medium text-roar">{focus}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Expect
          </p>
          <ul className="space-y-2">
            {expect.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-roar" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Best For
          </p>
          <div className="flex flex-wrap gap-2">
            {bestFor.map((item) => (
              <Badge key={item} variant="secondary" className="font-medium">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
