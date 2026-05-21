import { Card, CardContent } from "@/components/ui/card";

interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  specialities?: string[];
  achievements?: string[];
}

export function CoachCard({ name, role, bio, specialities, achievements }: CoachCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card transition-shadow hover:shadow-lg">
      <div className="aspect-[4/5] bg-muted flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-roar/10 text-3xl font-black text-roar">
            {name.charAt(0)}
          </div>
          <p className="text-xs">Photo coming soon</p>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mb-3 text-sm font-medium text-roar">{role}</p>
        <p className="mb-4 text-sm text-muted-foreground">{bio}</p>
        {achievements && achievements.length > 0 && (
          <div className="mb-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Achievements
            </p>
            <ul className="space-y-1">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-roar" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
        {specialities && specialities.length > 0 && (
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Specialises in
            </p>
            <ul className="space-y-1">
              {specialities.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-roar" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
