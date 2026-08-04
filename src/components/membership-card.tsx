import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MembershipCardProps {
  title: string;
  description: string;
  from?: string;
  fromNote?: string;
  href?: string;
  cta?: string;
  featured?: boolean;
}

export function MembershipCard({
  title,
  description,
  from,
  fromNote,
  href = "/pricing",
  cta = "View Pricing",
  featured,
}: MembershipCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border p-6 transition-all",
        featured
          ? "border-white/20 bg-white/[0.05]"
          : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
      )}
    >
      {featured && (
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Most Popular
        </p>
      )}
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      {from && (
        <p className="mb-3 flex items-baseline gap-2">
          <span className="text-3xl font-black tracking-tight text-white">
            {from}
          </span>
          {fromNote && (
            <span className="text-[11px] uppercase tracking-wider text-white/40">
              {fromNote}
            </span>
          )}
        </p>
      )}
      <p className="mb-6 text-sm leading-relaxed text-white/40">{description}</p>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: featured ? "default" : "outline" }),
          "mt-auto w-full text-xs font-semibold uppercase tracking-wider",
          featured
            ? "bg-roar text-black hover:bg-roar/90"
            : "border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
        )}
      >
        {cta}
      </Link>
    </div>
  );
}
