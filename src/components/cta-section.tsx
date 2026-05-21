import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function CtaSection() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-roar">
          Ready to Train?
        </p>
        <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
          Join the Roar Community
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-primary-foreground/70">
          Start building strength, fitness and performance. Book your first class,
          enquire about memberships or speak to a coach today.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-roar text-roar-foreground hover:bg-roar/90 text-base px-8 gap-2"
            )}
          >
            <CalendarCheck className="h-5 w-5" />
            Book Your First Class
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2"
            )}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2"
            )}
          >
            <InstagramIcon className="h-5 w-5" />
            DM on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
