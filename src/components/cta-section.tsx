import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function CtaSection() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-white/[0.02]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
          Ready to Train?
        </p>
        <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          Join the Roar Community
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/50">
          Start building strength, fitness and performance. Book your first class,
          enquire about memberships or speak to a coach today.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-black hover:bg-white/90 text-xs font-semibold uppercase tracking-wider px-8 h-12 gap-2"
            )}
          >
            <CalendarCheck className="h-4 w-4" />
            Book Your First Class
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6586062819&text=Hey+I%27m+interested+in+ROAR%2C+can+you+give+me+some+more+info%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8 h-12 gap-2"
            )}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8 h-12 gap-2"
            )}
          >
            <InstagramIcon className="h-4 w-4" />
            DM on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
