import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Zap, Timer, CreditCard } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ClassCard } from "@/components/class-card";
import { CoachCarousel } from "@/components/coach-carousel";
import { MembershipCard } from "@/components/membership-card";
import { Timetable } from "@/components/timetable";
import { getUpcomingClasses, getCoaches } from "@/lib/nourish";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingGroups } from "@/lib/pricing";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description:
      "1:1 and small group coaching tailored to your goals. Train with experienced coaches in a private high-performance environment.",
    items: [
      "Fat loss",
      "Muscle building",
      "Performance",
      "Hyrox preparation",
      "Strength development",
      "Lifestyle transformation",
    ],
  },
  {
    icon: Zap,
    title: "Strength Classes",
    description:
      "Structured strength-based sessions perfect for all levels wanting intelligent programming with coaching support.",
    items: [
      "Build muscle",
      "Improve movement quality",
      "Increase strength",
      "Develop athletic performance",
    ],
  },
  {
    icon: Timer,
    title: "Conditioning & Hyrox",
    description:
      "High-energy sessions designed to improve endurance, fitness and race performance in a motivating group environment.",
    items: [
      "Running",
      "SkiErg",
      "RowErg",
      "Sled work",
      "Functional fitness",
      "Hyrox-specific training",
    ],
  },
  {
    icon: CreditCard,
    title: "Memberships",
    description:
      "Flexible access options built for people serious about improving performance and consistency.",
    items: [
      "Open gym",
      "Group class memberships",
      "Hybrid memberships",
      "PT + class combinations",
    ],
  },
];

const classes = [
  {
    title: "Roar Zone",
    description:
      "Our signature class combines the best of everything—barbell complexes, erg training, running, and functional conditioning. Expect a fast-paced, high-energy session designed to build strength, endurance, and resilience. Train hard, push your limits, and experience the atmosphere that makes the Pride stronger together.",
  },
  {
    title: "Barbell Club – Upper Body",
    description:
      "Build strength, improve technique, and add lean muscle. This upper body strength class focuses on compound barbell lifts, supported by targeted accessory work to develop power, muscle, and long-term progress.",
  },
  {
    title: "Barbell Club – Lower Body",
    description:
      "Build a stronger lower body through proven strength training. This class focuses on compound lifts, supported by targeted accessory work to develop strength, muscle, stability, and power while improving lifting technique and movement quality.",
  },
  {
    title: "Engine Room",
    description:
      "Build your engine through a combination of ergs and HYROX-inspired functional stations. This class keeps you working at a controlled threshold, helping you develop endurance, efficiency, and the ability to maintain a strong, consistent pace throughout the workout.",
  },
  {
    title: "Hybrid Run",
    description:
      "Outdoor running meets HYROX performance training. Alternate between running and functional stations to build endurance, improve compromised running, and develop the resilience to perform under fatigue. Whether you're preparing for your next HYROX race or looking to improve your overall fitness, this class will build the engine to keep moving when it matters most.",
  },
  {
    title: "Youth",
    description:
      "Build strength, confidence, and athletic performance in a safe, coached environment. Our Youth programme teaches the fundamentals of strength training, including all the major compound lifts, while developing speed, power, coordination, explosive athleticism, and foundations to help you move better, lift well, and perform at your best.",
    comingSoon: true,
  },
];

const whyRoar = [
  "Elite coaching",
  "Structured programming",
  "Performance-focused environment",
  "Strong community culture",
  "Small class coaching attention",
  "High-energy atmosphere",
  "Results-driven training",
];

export default async function Home() {
  const [upcomingClasses, coachList] = await Promise.all([
    getUpcomingClasses(),
    getCoaches(),
  ]);

  // Directors/founders lead, otherwise keep the API's order.
  const coaches = [...coachList].sort((a, b) => {
    const rank = (t: string | null) =>
      t?.toLowerCase().includes("director") ? 0 : 1;
    return rank(a.title) - rank(b.title);
  });

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Services */}
        <section id="services" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="What We Offer"
              title="Services"
              description="Everything you need to train smarter, get stronger and perform at your best."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaSection />

        {/* Classes */}
        <section id="classes" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Class Breakdown"
              title="Our Classes"
              description="Clear programming, expert coaching, real results. Here's what to expect."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {classes.map((cls) => (
                <ClassCard key={cls.title} {...cls} />
              ))}
            </div>
          </div>
        </section>

        {/* Timetable */}
        <section id="timetable" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Class Schedule"
              title="Timetable"
              description="Live schedule for the week ahead. Find a session that fits and book your spot."
            />
            <Timetable classes={upcomingClasses} />
          </div>
        </section>

        {/* Team */}
        <section id="team" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Meet the Team"
              title="Your Coaches"
              description="Experienced coaches dedicated to helping you train smarter and perform better."
            />
            <CoachCarousel
              coaches={coaches.map((coach) => ({
                name: coach.name,
                role: coach.title ?? "Coach",
                bio: coach.bio,
                image: coach.profile_picture_url,
                instagram: coach.instagram,
                qualifications: coach.qualifications
                  ? coach.qualifications
                      .split(",")
                      .map((q) => q.trim())
                      .filter(Boolean)
                  : undefined,
              }))}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background image */}
          <Image
            src="/gym-floor.jpg"
            alt="ROAR gym training floor"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="The ROAR Experience"
              title="Why Train at Roar?"
              description="More than a gym. A performance-focused community built for results."
            />
            <div className="mx-auto max-w-2xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {whyRoar.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-4 transition-all hover:border-white/20 hover:bg-black/50"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="text-sm font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section id="memberships" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Membership Options"
              title="Join ROAR"
              description="Flexible options to fit your training style and goals."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pricingGroups.map((group) => (
                <MembershipCard
                  key={group.id}
                  title={group.title}
                  description={group.description}
                  from={group.from}
                  fromNote={group.fromNote}
                  href={`/pricing#${group.id}`}
                  featured={group.id === "group-classes"}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/15 text-white/70 hover:bg-white/5 hover:text-white text-xs font-semibold uppercase tracking-wider px-8 h-12"
                )}
              >
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
