import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export function ServiceCard({ icon: Icon, title, description, items }: ServiceCardProps) {
  return (
    <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-roar/10">
          <Icon className="h-6 w-6 text-roar" />
        </div>
        <CardTitle className="text-xl font-bold uppercase tracking-tight">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-roar" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
