import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | ROAR",
  description: "Terms and conditions for using ROAR gym services, memberships, and website.",
};

export default function TermsPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Terms & Conditions
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: 22 May 2025</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. Overview</h2>
          <p>
            These Terms and Conditions govern your use of the ROAR website, services, facilities, and
            class bookings. By accessing our website or using our services, you agree to be bound by
            these terms. ROAR is a performance-focused gym and training facility located in Singapore.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Eligibility</h2>
          <p>
            You must be at least 16 years of age to use ROAR facilities and services. Members under 18
            require parental or guardian consent. By using our services, you represent that you meet
            these eligibility requirements.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. Memberships & Subscriptions</h2>
          <p className="mb-3">
            ROAR offers various membership options including but not limited to: Unlimited Classes,
            Open Gym, Hybrid Memberships, PT Packages, and Intro Trial Weeks. Specific terms for
            each membership type will be provided at the time of purchase.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Memberships are non-transferable unless otherwise agreed in writing.</li>
            <li>Auto-renewal memberships will be billed on a recurring basis until cancelled.</li>
            <li>Cancellation must be submitted with a minimum of 30 days&apos; written notice.</li>
            <li>Refunds are not provided for unused portions of pre-paid memberships.</li>
            <li>ROAR reserves the right to modify membership pricing with 30 days&apos; notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">4. Class Bookings</h2>
          <p className="mb-3">
            Class bookings are subject to availability. Members are expected to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Book classes in advance through our designated booking system.</li>
            <li>Cancel bookings at least 4 hours before the scheduled class time.</li>
            <li>Arrive on time. Late arrivals may be refused entry for safety reasons.</li>
            <li>Repeated no-shows may result in booking restrictions.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Personal Training</h2>
          <p>
            Personal training sessions are subject to separate terms agreed upon between the client
            and coach. PT packages have an expiry period from the date of purchase unless otherwise
            stated. Cancellation of individual PT sessions requires a minimum of 12 hours&apos; notice.
            Sessions cancelled with less notice will be deducted from the package.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Health & Safety</h2>
          <p className="mb-3">
            By using ROAR facilities and services, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              You are physically fit to participate in exercise and training activities. You should
              consult a medical professional before beginning any exercise programme.
            </li>
            <li>
              ROAR, its coaches, and staff are not liable for any injury, illness, or health
              condition arising from participation in our services.
            </li>
            <li>
              Training programmes and coaching advice are provided for informational and fitness
              purposes only and do not constitute medical advice.
            </li>
            <li>
              You are responsible for using equipment safely and following coach instructions.
            </li>
            <li>
              You must disclose any medical conditions, injuries, or limitations to your coach
              before participating in any session.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">7. Facility Rules</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All members must adhere to gym etiquette and respect other members and staff.</li>
            <li>Equipment must be returned to its designated area after use.</li>
            <li>Appropriate athletic attire and footwear must be worn at all times.</li>
            <li>Photography and filming require prior permission from ROAR management.</li>
            <li>
              ROAR reserves the right to refuse entry or revoke membership of any individual who
              behaves inappropriately or violates these terms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">8. Intellectual Property</h2>
          <p>
            All content on the ROAR website, including text, images, logos, branding, and programming,
            is the intellectual property of ROAR and may not be reproduced, distributed, or used
            without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">9. Privacy</h2>
          <p>
            Your personal information is handled in accordance with our{" "}
            <a href="/privacy" className="underline text-white/80 hover:text-white">
              Privacy Policy
            </a>
            . By using our services, you consent to the collection and use of your information as
            described therein.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ROAR shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including but not limited to
            loss of profits, data, or use, arising from your use of our facilities, services, or
            website. Our total liability for any claim arising from these terms shall not exceed the
            amount paid by you in the preceding 12 months.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">11. Suspension & Termination</h2>
          <p>
            ROAR reserves the right to suspend or terminate your membership or access to services at
            any time for breach of these terms, with or without notice. In the event ROAR terminates
            your membership without cause, a pro-rata refund of any pre-paid fees will be provided.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">12. Changes to Terms</h2>
          <p>
            ROAR may update these Terms and Conditions from time to time. Changes will be posted on
            this page with an updated &ldquo;last updated&rdquo; date. Continued use of our services
            following any changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">13. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of
            Singapore. Any disputes arising from these terms shall be subject to the exclusive
            jurisdiction of the courts of Singapore.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">14. Contact</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us via
            WhatsApp at +65 8606 2819 or through our website.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
