import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";
import { pricingGroups } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing & Memberships | ROAR | Singapore",
  description:
    "Group class packs, open gym memberships and drop-in rates at ROAR Gym Singapore. Transparent pricing with no lock-in.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-36 pb-16 text-center sm:pt-44">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              Membership Options
            </p>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-6xl">
              Pricing
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              Group classes, open gym and drop-in rates. Pick the option that
              fits how you train — all prices in SGD.
            </p>
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {pricingGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/60 transition-colors hover:border-white/25 hover:text-white"
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Pricing groups */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
            {pricingGroups.map((group) => (
              <div
                key={group.id}
                id={group.id}
                className="scroll-mt-24 rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:p-10"
              >
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-roar">
                  {group.tagline}
                </p>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
                  {group.description}
                </p>

                <ul className="mt-8 border-t border-white/10">
                  {group.rows.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-6 border-b border-white/10 py-5"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-white">
                          {row.label}
                        </p>
                        {row.note && (
                          <p className="mt-1 text-xs italic text-white/40">
                            {row.note}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                          {row.price}
                        </p>
                        {row.unit && (
                          <p className="text-[11px] italic text-white/40">
                            {row.unit}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {group.offer && (
                  <div className="mt-8 rounded-lg border border-roar/30 bg-roar/[0.06] p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-roar px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                        {group.offer.tag}
                      </span>
                      <h3 className="text-lg font-black uppercase tracking-tight text-white">
                        {group.offer.title}
                      </h3>
                      <span className="ml-auto text-3xl font-black tracking-tight text-white">
                        {group.offer.price}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {group.offer.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-roar" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-wider text-white/40">
                      {group.offer.ends}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(
                      `Hey, I'm interested in ROAR ${group.title} — can you send me more info?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants(),
                      "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider px-8"
                    )}
                  >
                    Enquire Now
                  </a>
                  <Link
                    href="/#timetable"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8"
                    )}
                  >
                    View Timetable
                  </Link>
                </div>
              </div>
            ))}

            <p className="px-2 text-xs leading-relaxed text-white/30">
              All prices are in SGD and include GST where applicable. Packs are
              valid from the date of purchase and are non-transferable. Limited
              offers are subject to availability and may be withdrawn at any
              time.
            </p>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
