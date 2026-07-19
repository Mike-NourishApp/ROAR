import type { Metadata } from "next";
import { Clock, MapPin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CtaSection } from "@/components/cta-section";
import { InstagramIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | ROAR | Singapore",
  description: `Visit ROAR at ${site.address}. Reach us via WhatsApp, email or Instagram to book a class, enquire about memberships or speak to a coach.`,
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappUrl("Hey I'm interested in ROAR, can you give me some more info?"),
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramUrl,
    external: true,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "ROAR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "221 Henderson Rd",
    addressLocality: "Singapore",
    postalCode: "159557",
    addressCountry: "SG",
  },
  telephone: `+${site.phone}`,
  email: site.email,
  sameAs: [site.instagramUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Page header */}
        <section className="pt-36 pb-16 text-center sm:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              Get in Touch
            </p>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl">
              Contact ROAR
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              Book a class, enquire about memberships or just come say hi. We&apos;re
              at {site.address}.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section className="pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {/* Opening hours */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
                <Clock className="h-4 w-4" /> Opening Hours
              </h2>
              <ul className="space-y-4">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <p className="text-sm font-medium text-white">{h.days}</p>
                    <p className="text-sm text-white/50">{h.time}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact methods */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
                <MessageCircle className="h-4 w-4" /> Contact
              </h2>
              <ul className="space-y-4">
                {contactMethods.map((m) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      {...(m.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all group-hover:border-roar/40 group-hover:text-roar">
                        <m.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-white/30">
                          {m.label}
                        </span>
                        {m.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
                <MapPin className="h-4 w-4" /> Find Us
              </h2>
              <p className="text-sm leading-relaxed text-white/70">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-6 border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider gap-2"
                )}
              >
                Get Directions <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg border border-white/5">
              <iframe
                title="ROAR location map"
                src="https://www.google.com/maps?q=221+Henderson+Rd,+Singapore+159557&output=embed"
                className="h-[360px] w-full grayscale invert-[0.9] contrast-[0.85]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
