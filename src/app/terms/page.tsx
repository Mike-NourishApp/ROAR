import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | ROAR",
  description:
    "Terms and conditions for ROAR Gym memberships, class bookings, and services — including cancellation, freeze, and founding membership policies.",
};

export default function TermsPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: June 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. Agreement</h2>
          <p>
            By purchasing a membership, booking a class, or using any service provided by ROAR Gym
            Pte Ltd (&ldquo;ROAR Gym&rdquo;), you agree to be bound by these Terms and Conditions.
            Please read them carefully before proceeding.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Membership</h2>
          <p>
            All memberships are personal and non-transferable. ROAR Gym reserves the right to
            refuse or terminate membership at its discretion. Members must comply with all gym
            rules and policies at all times.
          </p>
        </section>

        <section id="founding">
          <h2 className="mb-3 text-lg font-bold text-white">3. Founding Membership Terms</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Founding Membership rates apply only during the initial membership term. Renewal
              rates may vary and will be subject to the prevailing membership pricing at the time
              of renewal.
            </li>
            <li>
              Founding membership includes full gym access, exclusive founding member merchandise,
              and first access to the ROAR app.
            </li>
            <li>Founding membership is non-refundable once confirmed.</li>
            <li>Membership commences on the official opening date of ROAR Gym.</li>
            <li>
              ROAR Gym reserves the right to amend founding membership benefits with reasonable
              notice.
            </li>
          </ul>
        </section>

        <section id="cancellation">
          <h2 className="mb-3 text-lg font-bold text-white">
            4. Class &amp; Personal Training Cancellation Policy
          </h2>
          <div className="border border-white/10 p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Cancellation Policy
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Members must cancel any class, consultation, group session, personal training
                session, or appointment at least 24 hours before the scheduled start time.
              </li>
              <li>
                Any cancellation made within 24 hours of the scheduled session will be considered
                attended.
              </li>
              <li>No refund, credit, transfer, extension, or rescheduling will be provided.</li>
              <li>No-shows will be treated as attended sessions.</li>
              <li>ROAR Gym reserves the right to amend booking policies with reasonable notice.</li>
            </ul>
          </div>
        </section>

        <section id="class-booking">
          <h2 className="mb-3 text-lg font-bold text-white">5. Class Booking Policy</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Classes must be booked in advance through the ROAR Gym app or website.</li>
            <li>Bookings are subject to availability.</li>
            <li>Members on waitlists will be notified if a spot becomes available.</li>
            <li>
              ROAR Gym reserves the right to cancel or reschedule classes with reasonable notice.
            </li>
          </ul>
        </section>

        <section id="freeze">
          <h2 className="mb-3 text-lg font-bold text-white">6. Membership Freeze Policy</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Members may request a membership freeze for medical reasons with supporting
              documentation.
            </li>
            <li>Freeze requests must be submitted at least 7 days in advance.</li>
            <li>Minimum freeze period: 1 month. Maximum freeze period: 3 months per year.</li>
            <li>Membership duration will be extended by the approved freeze period.</li>
            <li>Freeze requests are subject to management approval.</li>
          </ul>
        </section>

        <section id="personal-training">
          <h2 className="mb-3 text-lg font-bold text-white">7. Personal Training Terms</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Personal training sessions must be booked and confirmed in advance.</li>
            <li>Sessions are non-transferable and non-refundable once purchased.</li>
            <li>The 24-hour cancellation policy applies to all personal training sessions.</li>
            <li>Unused sessions expire 12 months from the date of purchase.</li>
            <li>ROAR Gym reserves the right to reassign trainers where necessary.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">8. Liability</h2>
          <p>
            ROAR Gym shall not be liable for any injury, loss, or damage to persons or property
            arising from the use of our facilities, except where caused by our gross negligence.
            Members participate in all activities at their own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">9. Amendments</h2>
          <p>
            ROAR Gym reserves the right to amend these Terms and Conditions at any time. Members
            will be notified of material changes. Continued use of our services constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Singapore. Any disputes shall be
            subject to the exclusive jurisdiction of the Singapore courts.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
