import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About | ROAR | Singapore",
  description:
    "The story behind ROAR Gym — Singapore's premier hybrid performance gym. Built by athletes, for athletes, with world-class equipment and a culture of excellence.",
};

const values = [
  {
    number: "01",
    title: "Built for Performance",
    body: "Every square metre of ROAR is designed around one purpose: helping serious athletes perform at their best. No fluff, no filler.",
  },
  {
    number: "02",
    title: "Uncompromising Equipment",
    body: "We source only from the world's leading manufacturers. If it doesn't meet our standards, it doesn't make it through the door.",
  },
  {
    number: "03",
    title: "A Culture of Excellence",
    body: "The people who train here set the standard. ROAR attracts athletes who are serious about their craft and respectful of the space.",
  },
  {
    number: "04",
    title: "No Distractions",
    body: "No mirrors everywhere. No pop music. No crowded machines. Just the work, the iron, and the people who show up to do both.",
  },
];

const spaces = [
  {
    number: "01",
    title: "Free Weight Floor",
    body: "A versatile space for lifting, conditioning, and high-performance group sessions.",
  },
  {
    number: "02",
    title: "Strength Stations",
    body: "Commercial-grade power racks, squat stands, and specialty bars. Every station built to handle elite-level loads.",
  },
  {
    number: "03",
    title: "Conditioning Zone",
    body: "Sleds, battle ropes, assault bikes, and turf lanes. Purpose-built for athletes who train beyond the barbell.",
  },
];

const equipmentPoints = [
  "Commercial-grade construction built for elite loads",
  "Full strength, cable, and conditioning range",
  "Precision-engineered for performance and longevity",
  "Trusted by professional athletes and coaches",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="pt-36 pb-16 text-center sm:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              Our Story
            </p>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl">
              ROAR Gym
            </h1>
            <p className="mt-6 text-lg font-bold uppercase tracking-wide text-white/70">
              We Build Hybrids.
            </p>
          </div>
        </section>

        {/* The Origin */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
              The Origin
            </p>
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Why We Built ROAR
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-white/50">
              <p>
                ROAR was built with a simple mission: to help people achieve
                real, lasting transformation. After years of coaching athletes,
                professionals, and everyday individuals, we learned that
                meaningful results come from more than just training. They come
                from expert guidance, accountability, and an environment that
                challenges and inspires people to become the strongest version
                of themselves. ROAR was created to provide exactly that.
              </p>
              <p>
                We&apos;re athletes who spent years training in facilities that
                never quite met the standard. So we decided to build the gym we
                always wanted, one that takes the craft of training as
                seriously as the athletes who show up every day.
              </p>
              <p>
                Most importantly, ROAR is the gym we always wanted for
                ourselves, our coaching team, and the community we serve. Every
                detail, from the equipment selection and facility design to the
                coaching standards and member experience, has been carefully
                considered to create a world-class training environment. ROAR
                is more than a gym. It is a home for ambitious individuals who
                refuse to settle for average and are committed to becoming
                their very best.
              </p>
            </div>
          </div>
        </section>

        {/* Equipment partner */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8 sm:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
                Official Equipment Partner
              </p>
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Equipment That Performs.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/50">
                ROAR Gym is proud to partner with SKELCORE — a leading
                manufacturer of commercial-grade performance equipment trusted
                by elite training facilities worldwide. Every rack, cable
                station, and conditioning tool at ROAR is built to handle the
                demands of serious athletes, day in and day out.
              </p>
              <ul className="space-y-3">
                {equipmentPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <span className="mt-0.5 text-roar">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
                What We Stand For
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Our Values
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="rounded-lg border border-white/5 bg-white/[0.02] p-8"
                >
                  <p className="mb-4 text-xs font-bold tracking-[0.25em] text-roar">
                    {value.number}
                  </p>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Space */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
                The Space
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Built With The Best
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {spaces.map((space) => (
                <div
                  key={space.number}
                  className="rounded-lg border border-white/5 bg-white/[0.02] p-8"
                >
                  <p className="mb-4 text-xs font-bold tracking-[0.25em] text-roar">
                    {space.number}
                  </p>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
                    {space.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {space.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/#founding"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider px-8 h-12"
                )}
              >
                Secure Your Founding Membership
              </Link>
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
