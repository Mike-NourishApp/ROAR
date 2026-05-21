import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-roar/20 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-roar">
          Strength. Conditioning. Performance.
        </p>
        <h1 className="mb-6 text-5xl font-black uppercase leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          ROAR
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
          Singapore&apos;s performance-focused training space combining elite coaching,
          strength training, Hyrox conditioning and community.
        </p>
        <p className="mb-10 text-lg font-medium text-primary-foreground/60 italic">
          Train with purpose. Train with a team. Train at Roar.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-roar text-roar-foreground hover:bg-roar/90 text-base px-8"
            )}
          >
            Book a Class
          </a>
          <a
            href="#cta"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
            )}
          >
            Enquire About PT
          </a>
          <a
            href="#memberships"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
            )}
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}
