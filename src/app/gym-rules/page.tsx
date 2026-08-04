import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Gym Rules | ROAR",
  description:
    "ROAR Gym code of conduct — the house rules that keep our training environment safe, clean, and focused.",
};

export default function GymRulesPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Gym Rules
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: June 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <p>
          ROAR Gym is a serious training environment. These rules exist to keep the space safe,
          clean, and focused for everyone. Failure to comply may result in membership suspension or
          termination.
        </p>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">General Conduct</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Treat all members, coaches, and staff with respect at all times.</li>
            <li>
              Aggressive, abusive, or threatening behaviour will result in immediate membership
              termination.
            </li>
            <li>No photography or videography of other members without their explicit consent.</li>
            <li>
              Appropriate gym attire must be worn at all times &mdash; closed-toe athletic shoes
              are mandatory.
            </li>
            <li>No outside food or alcohol is permitted on the premises.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">Equipment</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Re-rack all weights and return equipment to its designated location after use.</li>
            <li>Wipe down all equipment with the provided sanitiser after use.</li>
            <li>
              Do not drop barbells or dumbbells unnecessarily &mdash; use controlled movements.
            </li>
            <li>Do not monopolise equipment during peak hours. Allow others to work in.</li>
            <li>Report damaged or faulty equipment to staff immediately.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">Hygiene</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Bring a towel and use it on all equipment and benches.</li>
            <li>Personal hygiene is expected &mdash; please shower before training if necessary.</li>
            <li>Gym bags must be stored in designated areas, not on the gym floor.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">Safety</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Warm up adequately before lifting heavy loads.</li>
            <li>Use spotters when performing heavy compound lifts.</li>
            <li>
              Do not train if you are unwell, injured, or under the influence of alcohol or drugs.
            </li>
            <li>Familiarise yourself with emergency exits and first aid locations.</li>
            <li>In the event of an emergency, notify staff immediately.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">Classes &amp; Coaching</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Arrive on time for all booked classes. Late entry may be refused.</li>
            <li>Follow all instructions given by coaches and trainers.</li>
            <li>
              The 12-hour cancellation policy applies to all classes and personal training
              sessions.
            </li>
            <li>Guests are not permitted in classes unless pre-approved by management.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">Membership</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Membership is personal and non-transferable.</li>
            <li>
              Do not share your access credentials or allow others to use your membership.
            </li>
            <li>
              ROAR Gym reserves the right to suspend or terminate membership for breach of these
              rules.
            </li>
          </ul>
        </section>
      </div>
    </PolicyLayout>
  );
}
