interface ClassCardProps {
  title: string;
  description: string;
}

export function ClassCard({ title, description }: ClassCardProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
