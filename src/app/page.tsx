import { Dumbbell, Zap, Timer, CreditCard } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ClassCard } from "@/components/class-card";
import { CoachCard } from "@/components/coach-card";
import { MembershipCard } from "@/components/membership-card";
import { Timetable } from "@/components/timetable";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

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
    title: "ROAR Strength",
    focus: "Strength, muscle, movement quality",
    expect: [
      "Barbell lifts",
      "Dumbbell work",
      "Structured progressive overload",
      "Coaching on technique",
      "Athletic strength development",
    ],
    bestFor: ["Building muscle", "Getting stronger", "Improving body composition"],
  },
  {
    title: "ROAR Conditioning",
    focus: "Fitness, engine, calorie burn",
    expect: [
      "Circuits",
      "Ergs",
      "Functional training",
      "Team-based workouts",
      "Sweat-heavy sessions",
    ],
    bestFor: ["Fat loss", "General fitness", "Improving endurance"],
  },
  {
    title: "ROAR Hyrox",
    focus: "Race preparation & hybrid performance",
    expect: [
      "Running intervals",
      "Sled push/pull",
      "Wall balls",
      "Farmers carry",
      "Hyrox simulations",
    ],
    bestFor: ["Hyrox athletes", "Endurance athletes", "Competitive fitness"],
  },
];

const coaches = [
  {
    name: "Lawrence",
    role: "Founder & Head Coach",
    image: "/coaches/lawrence.webp",
    bio: "One of Singapore's most in-demand personal trainers and a lifelong competitive athlete. Award-winning boxer, rugby player and MMA fighter turned full-time coach in 2012. Co-founded BBL with a mission to empower personal transformation.",
    achievements: [
      "Singapore Hyrox Champion",
      "Hyrox World Championship competitor",
      "Award-winning boxer, rugby player & MMA fighter",
      "Coached hundreds of clients since 2012",
    ],
  },
  {
    name: "Harry",
    role: "Personal Trainer",
    image: "/coaches/harry.webp",
    bio: "Former Royal Marine with nearly 9 years of military experience including counter-piracy operations and special forces activities. Specialises in pushing clients beyond their limits with structured, results-driven programming.",
    achievements: [
      "Physical Training Medal — Royal Marines",
      "Tarzan Assault Course record holder",
      "Man of Steel Award — Marines Rugby League",
      "Competed in rugby, bobsleigh, powerlifting & strongman",
    ],
  },
  {
    name: "Marcus",
    role: "Personal Trainer",
    image: "/coaches/marcus.webp",
    bio: "Driven by a passion to help clients become stronger, happier and more confident. Dedicated to providing tailored workouts and expert guidance whether the goal is fat loss, muscle building or overall fitness improvement.",
    specialities: [
      "Tailored workout programming",
      "Fat loss & muscle building",
      "Bootcamp & group training",
    ],
  },
  {
    name: "Dana",
    role: "Personal Trainer",
    image: "/coaches/dana.webp",
    bio: "Pro-level Hyrox competitor and strength & performance coach. As a mother of two, Dana specialises in post-pregnancy strength reconstruction and helping clients balance fitness with demanding schedules.",
    specialities: [
      "Hyrox competition training",
      "Strength & performance coaching",
      "Post-pregnancy fitness",
      "Fat loss programming",
    ],
  },
];

const memberships = [
  {
    title: "Intro Trial Week",
    description:
      "Experience ROAR with a full week of unlimited access to classes and open gym. The perfect way to see if we are the right fit.",
  },
  {
    title: "Unlimited Classes",
    description:
      "Full access to all ROAR group classes including Strength, Conditioning and Hyrox sessions.",
    featured: true,
  },
  {
    title: "Open Gym",
    description:
      "Access to the ROAR training floor during open gym hours. Perfect for experienced lifters with their own programming.",
  },
  {
    title: "Hybrid Membership",
    description:
      "Combine unlimited classes with open gym access for the ultimate training flexibility.",
  },
  {
    title: "PT Packages",
    description:
      "1:1 or small group personal training packages tailored to your goals with dedicated coaching.",
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

export default function Home() {
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
              description="Find a session that fits your schedule. Classes run every day of the week."
            />
            <Timetable />
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coaches.map((coach) => (
                <CoachCard key={coach.name} {...coach} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="text-sm font-medium text-white/70">{item}</span>
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
              {memberships.map((m) => (
                <MembershipCard key={m.title} {...m} />
              ))}
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
