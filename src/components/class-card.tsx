interface ClassCardProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export function ClassCard({ title, description, comingSoon }: ClassCardProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]">
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
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
