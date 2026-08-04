import Image from "next/image";

interface ClassCardProps {
  title: string;
  description: string;
  image?: string;
  comingSoon?: boolean;
}

export function ClassCard({
  title,
  description,
  image,
  comingSoon,
}: ClassCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] transition-all hover:border-white/10">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* 75% black wash keeps the copy readable over the photo */}
          <div className="absolute inset-0 bg-black/75 transition-colors group-hover:bg-black/70" />
        </>
      )}
      <div className="relative p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {title}
          </h3>
          {comingSoon && (
            <span className="rounded-full border border-roar/30 bg-roar/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-roar">
              Coming Soon
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
