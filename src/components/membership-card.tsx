import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MembershipCardProps {
  title: string;
  description: string;
  featured?: boolean;
}

export function MembershipCard({ title, description, featured }: MembershipCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 transition-all",
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
      <p className="mb-6 text-sm leading-relaxed text-white/40">{description}</p>
      <a
        href="#cta"
        className={cn(
          buttonVariants({ variant: featured ? "default" : "outline" }),
          "w-full text-xs font-semibold uppercase tracking-wider",
          featured
            ? "bg-white text-black hover:bg-white/90"
            : "border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
        )}
      >
        Enquire Now
      </a>
    </div>
  );
}
