import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MembershipCardProps {
  title: string;
  description: string;
  featured?: boolean;
}

export function MembershipCard({ title, description, featured }: MembershipCardProps) {
  return (
    <Card
      className={`border-border/50 transition-shadow hover:shadow-lg ${
        featured ? "border-roar/50 ring-1 ring-roar/20" : ""
      }`}
    >
      <CardHeader>
        {featured && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-roar">
            Most Popular
          </p>
        )}
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <a
          href="#cta"
          className={cn(
            buttonVariants({ variant: featured ? "default" : "outline" }),
            "w-full",
            featured ? "bg-roar text-roar-foreground hover:bg-roar/90" : ""
          )}
        >
          Enquire Now
        </a>
      </CardContent>
    </Card>
  );
}
