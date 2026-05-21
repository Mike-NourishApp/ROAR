import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export function ServiceCard({ icon: Icon, title, description, items }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
        <Icon className="h-5 w-5 text-white/70" />
      </div>
      <h3 className="mb-2 text-lg font-bold uppercase tracking-tight text-white">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-white/40">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
            <span className="h-px w-3 bg-white/20" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
