import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/gym-hero.jpg"
        alt="ROAR Gym Interior"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[oklch(0.06_0_0)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-6xl font-black uppercase leading-none tracking-tighter text-white sm:text-8xl lg:text-9xl">
          ROAR
        </h1>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.4em] text-white/50">
          Strength &mdash; Conditioning &mdash; Performance
        </p>
        <p className="mx-auto mb-3 max-w-2xl text-lg font-light leading-relaxed text-white/80 sm:text-xl">
          Singapore&apos;s performance-focused training space combining elite coaching,
          strength training, Hyrox conditioning and community.
        </p>
        <p className="mb-12 text-sm font-medium uppercase tracking-[0.15em] text-white/40">
          Leave life&apos;s BS at the door.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#timetable"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-black hover:bg-white/90 text-sm font-semibold uppercase tracking-wider px-10 h-12"
            )}
          >
            Book a Class
          </a>
          <a
            href="#cta"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/20 text-white hover:bg-white/10 text-sm font-semibold uppercase tracking-wider px-10 h-12"
            )}
          >
            Enquire About PT
          </a>
          <a
            href="#memberships"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/20 text-white hover:bg-white/10 text-sm font-semibold uppercase tracking-wider px-10 h-12"
            )}
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}
