import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Merchandise | ROAR | Singapore",
  description:
    "The ROAR Performance Tee — founding drop. Athletic fit, premium comfort, built to perform. Founding members get exclusive first access before public release.",
};

const specs = [
  { label: "Material", value: "95% Cotton · 5% Elastane" },
  { label: "Fit", value: "Athletic — true to size" },
  { label: "Print", value: "ROAR chest logo" },
  { label: "Colour", value: "Black" },
  { label: "Availability", value: "Founding members first" },
];

const highlights = ["Athletic Fit", "Premium Comfort", "Built to Perform"];

export default function MerchandisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="pt-36 pb-16 text-center sm:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              ROAR Gear
            </p>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl">
              Merchandise
            </h1>
          </div>
        </section>

        {/* Founding drop */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8 sm:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
                Founding Drop
              </p>
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                ROAR Performance Tee
              </h2>

              <div className="mb-8 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <dl className="mb-8 divide-y divide-white/5 border-y border-white/5">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <dt className="text-xs font-bold uppercase tracking-wider text-white/30">
                      {spec.label}
                    </dt>
                    <dd className="text-sm text-white/70">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mb-2 text-lg font-black uppercase tracking-wide text-white">
                Built to Hunt. Not to Hide.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-white/50">
                Founding members receive exclusive first access to the ROAR
                merch drop before public release.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#founding"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider px-8 h-12"
                  )}
                >
                  Secure Founding Membership
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
          </div>
        </section>

        {/* More drops */}
        <section className="pb-24 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              More Drops Coming.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              Founding members get first access to every release.
            </p>
            <Link
              href="/#founding"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8 h-12"
              )}
            >
              Join as Founding Member
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
