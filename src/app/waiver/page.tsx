import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Waiver & Release of Liability | ROAR",
  description:
    "Waiver and Release of Liability for members and users of ROAR Gym Pte Ltd facilities.",
};

export default function WaiverPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Waiver &amp; Release of Liability
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: June 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <div className="border border-white/10 p-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white">
            Important &mdash; Please Read Carefully
          </p>
          <p>
            By becoming a member of or using the facilities of ROAR Gym Pte Ltd, you acknowledge
            that you have read, understood, and agree to this Waiver and Release of Liability in
            its entirety.
          </p>
        </div>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. Assumption of Risk</h2>
          <p>
            I acknowledge that physical exercise and the use of gym equipment involve inherent
            risks of injury, including but not limited to muscular strains, sprains, fractures,
            cardiovascular events, and in extreme cases, death. I voluntarily assume all such risks
            associated with my participation in any activity at ROAR Gym.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Release of Liability</h2>
          <p>
            In consideration of being permitted to use the facilities and services of ROAR Gym Pte
            Ltd, I hereby release, waive, discharge, and covenant not to sue ROAR Gym Pte Ltd, its
            directors, officers, employees, coaches, agents, and representatives from any and all
            liability, claims, demands, or causes of action arising out of or related to any loss,
            damage, or injury that may be sustained by me while using the gym&apos;s facilities or
            participating in any activities.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. Medical Fitness</h2>
          <p>
            I confirm that I am in good physical health and have no medical condition that would
            prevent me from safely participating in physical exercise. I agree to consult a
            qualified medical professional before commencing any exercise programme if I have any
            doubt about my fitness to do so. I accept full responsibility for any health issues
            that arise from my participation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">4. Equipment Use</h2>
          <p>
            I agree to use all gym equipment responsibly and in accordance with any instructions
            provided by ROAR Gym staff. I will not use equipment I am unfamiliar with without
            seeking guidance. I accept responsibility for any damage caused by my misuse of
            equipment.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Personal Property</h2>
          <p>
            ROAR Gym accepts no responsibility for the loss, theft, or damage of personal property
            brought onto the premises. Members are advised not to bring valuables to the gym.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Indemnification</h2>
          <p>
            I agree to indemnify and hold harmless ROAR Gym Pte Ltd from any claims, damages,
            losses, or expenses (including legal fees) arising from my use of the facilities or my
            breach of these terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">7. Governing Law</h2>
          <p>
            This waiver is governed by the laws of Singapore. Any disputes shall be subject to the
            exclusive jurisdiction of the Singapore courts.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
