import Image from "next/image";
import { InstagramIcon } from "@/components/icons";

interface CoachCardProps {
  name: string;
  role: string;
  bio?: string | null;
  image?: string | null;
  instagram?: string | null;
  qualifications?: string[];
}

export function CoachCard({
  name,
  role,
  bio,
  image,
  instagram,
  qualifications,
}: CoachCardProps) {
  const showBio = bio && bio.trim().length > 0;

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
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              {role}
            </p>
          </div>
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-roar/40 hover:text-roar"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              <span className="sr-only">{name} on Instagram</span>
            </a>
          )}
        </div>
        {showBio && (
          <p className="mb-4 text-sm leading-relaxed text-white/50 line-clamp-5">
            {bio}
          </p>
        )}
        {qualifications && qualifications.length > 0 && (
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Qualifications
            </p>
            <ul className="space-y-1.5">
              {qualifications.map((q) => (
                <li key={q} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="h-px w-3 shrink-0 bg-white/20" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
