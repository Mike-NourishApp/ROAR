interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center lg:mb-16">
      {label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-roar">
          {label}
        </p>
      )}
      <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
