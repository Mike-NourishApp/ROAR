import Image from "next/image";

interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialities?: string[];
  achievements?: string[];
}

export function CoachCard({ name, role, bio, image, specialities, achievements }: CoachCardProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] overflow-hidden transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <div className="aspect-[4/5] relative bg-white/[0.03]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 text-3xl font-black text-white/30">
                {name.charAt(0)}
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/20">
                Photo coming soon
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
          {role}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-white/50">{bio}</p>
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Achievements
            </p>
            <ul className="space-y-1.5">
              {achievements.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="h-px w-3 bg-white/20" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
        {specialities && specialities.length > 0 && (
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Specialises in
            </p>
            <ul className="space-y-1.5">
              {specialities.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="h-px w-3 bg-white/20" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
