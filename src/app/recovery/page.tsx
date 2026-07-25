import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Recovery | ROAR | Singapore",
  description:
    "Recovery at ROAR Gym Singapore is coming soon. Check back shortly — or secure your founding membership now.",
};

export default function RecoveryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-36 pb-24 text-center sm:pt-44">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              Coming Soon
            </p>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl">
              Recovery
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              We&apos;re putting the finishing touches on this. Check back soon
              — or secure your founding membership now.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider px-8 h-12"
                )}
              >
                Founding Membership
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8 h-12"
                )}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
