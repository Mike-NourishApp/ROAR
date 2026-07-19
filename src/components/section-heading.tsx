interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
          {label}
        </p>
      )}
      <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/50">
          {description}
        </p>
      )}
    </div>
  );
}
