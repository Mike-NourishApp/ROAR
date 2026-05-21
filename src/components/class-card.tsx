interface ClassCardProps {
  title: string;
  focus: string;
  expect: string[];
  bestFor: string[];
}

export function ClassCard({ title, focus, expect, bestFor }: ClassCardProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <h3 className="mb-1 text-xl font-black uppercase tracking-tight text-white">
        {title}
      </h3>
      <p className="mb-6 text-xs font-medium uppercase tracking-wider text-white/40">
        {focus}
      </p>

      <div className="mb-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Expect
        </p>
        <ul className="space-y-2">
          {expect.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
              <span className="h-px w-3 bg-white/20" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Best For
        </p>
        <div className="flex flex-wrap gap-2">
          {bestFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
