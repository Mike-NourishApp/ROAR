import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | ROAR",
  description:
    "How ROAR Gym Pte Ltd collects, uses, discloses, retains, and protects personal data in accordance with the Singapore PDPA.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: June 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. Introduction</h2>
          <p className="mb-3">
            ROAR Gym Pte Ltd (&ldquo;ROAR Gym&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) is committed to protecting the privacy and personal data of our
            members, prospective members, and website visitors in accordance with the Singapore
            Personal Data Protection Act 2012 (PDPA) and the directions and advisory guidelines
            issued by the Personal Data Protection Commission (PDPC).
          </p>
          <p>
            This Privacy Policy sets out the basis on which we collect, use, disclose, retain, and
            protect personal data. By interacting with us &mdash; whether through our website,
            membership applications, or any other channel &mdash; you acknowledge that you have
            read and understood this policy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Personal Data We Collect</h2>
          <p className="mb-3">
            Depending on your interaction with us, we may collect the following categories of
            personal data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Identity data: full name, date of birth</li>
            <li>Contact data: email address, phone number, mailing address</li>
            <li>
              Membership data: membership type, class bookings, attendance records, payment
              history
            </li>
            <li>
              Health and fitness data: fitness goals, injury history, health declarations (where
              voluntarily provided or required for safety purposes)
            </li>
            <li>
              Website and device data: IP address, browser type, pages visited, referring URLs,
              cookies and similar tracking technologies
            </li>
            <li>
              Communications data: enquiry form submissions, emails, WhatsApp messages, and other
              correspondence
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. How We Collect Personal Data</h2>
          <p className="mb-3">We collect personal data through the following means:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Membership applications submitted online or in person</li>
            <li>Website enquiry and contact forms</li>
            <li>Email, WhatsApp, telephone, and social media communications</li>
            <li>In-gym registration, check-in, and access control systems</li>
            <li>Class and personal training booking systems</li>
            <li>Marketing communications, event registrations, and competitions</li>
            <li>
              Third-party service providers such as payment processors, booking platforms, and
              analytics tools
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">
            4. Purposes for Collection, Use and Disclosure
          </h2>
          <p className="mb-3">
            We collect, use, and disclose your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Processing, administering, and managing your membership or service agreement</li>
            <li>Responding to your enquiries, feedback, and service requests</li>
            <li>Processing payments and maintaining financial records</li>
            <li>
              Scheduling and managing class bookings, personal training sessions, and appointments
            </li>
            <li>Ensuring the safety and security of our members, staff, and premises</li>
            <li>
              Sending service-related communications, including booking confirmations, policy
              updates, and operational notices
            </li>
            <li>
              Sending marketing and promotional communications about ROAR Gym&apos;s services,
              events, and offers, where you have provided consent
            </li>
            <li>
              Conducting analytics to improve our website, services, and member experience
            </li>
            <li>Complying with applicable legal, regulatory, and contractual obligations</li>
            <li>
              Enforcing our Terms and Conditions, Gym Rules, and other member policies
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Disclosure to Third Parties</h2>
          <p className="mb-3">
            We do not sell, rent, or trade your personal data to third parties. We may disclose
            your personal data to the following categories of recipients where necessary to fulfil
            the purposes described in this policy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Payment processors and financial institutions for transaction processing</li>
            <li>Booking and scheduling platform providers</li>
            <li>Email and communications service providers</li>
            <li>Website hosting, analytics, and technology service providers</li>
            <li>Professional advisers including lawyers, accountants, and auditors</li>
            <li>
              Regulatory authorities, law enforcement agencies, or courts where required by law
            </li>
          </ul>
          <p className="mt-3">
            All third-party service providers engaged by ROAR Gym are required to handle personal
            data in a manner consistent with the PDPA and are contractually obligated to protect
            the confidentiality and security of the data they process on our behalf.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Data Retention</h2>
          <p className="mb-3">
            We retain personal data only for as long as necessary to fulfil the purposes for which
            it was collected, or as required or permitted by applicable law. Our general retention
            guidelines are as follows:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Membership records: retained for a minimum of 5 years following the termination or
              expiry of membership
            </li>
            <li>
              Website enquiry and contact form records: retained for up to 2 years from the date
              of submission
            </li>
            <li>
              Financial and payment records: retained in accordance with applicable legal, tax,
              and accounting obligations
            </li>
            <li>
              Health and fitness data: retained for the duration of membership and for such period
              thereafter as may be required for safety or legal purposes
            </li>
          </ul>
          <p className="mt-3">
            When personal data is no longer required, we will take reasonable steps to destroy or
            anonymise it securely.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">7. Access and Correction Requests</h2>
          <p className="mb-3">Under the PDPA, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Request access to personal data we hold about you</li>
            <li>Request correction of any inaccurate or incomplete personal data</li>
            <li>
              Request information about the ways in which your personal data has been used or
              disclosed in the past year
            </li>
          </ul>
          <p className="mt-3">
            To submit a request, please contact our Data Protection Officer at{" "}
            <a
              href="mailto:roargymsg@gmail.com"
              className="underline text-white/80 hover:text-white"
            >
              roargymsg@gmail.com
            </a>
            . We aim to respond to all valid requests within 30 calendar days of receipt. We
            reserve the right to charge a reasonable fee for access requests in accordance with
            the PDPA.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">8. Withdrawal of Consent</h2>
          <p>
            You may withdraw your consent to our collection, use, or disclosure of your personal
            data at any time by contacting our Data Protection Officer at{" "}
            <a
              href="mailto:roargymsg@gmail.com"
              className="underline text-white/80 hover:text-white"
            >
              roargymsg@gmail.com
            </a>
            . Please note that withdrawal of consent may affect our ability to provide certain
            services to you, and we will inform you of the likely consequences before processing
            your withdrawal request. Withdrawal of consent does not affect the lawfulness of any
            collection, use, or disclosure carried out prior to the withdrawal.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">9. Marketing Communications</h2>
          <p>
            We may send you marketing and promotional communications about ROAR Gym&apos;s
            services, events, offers, and updates. We will only do so where you have provided your
            consent, or where permitted under the PDPA. You may withdraw your consent to receive
            marketing communications at any time by clicking the unsubscribe link in any marketing
            email, or by contacting us at{" "}
            <a
              href="mailto:roargymsg@gmail.com"
              className="underline text-white/80 hover:text-white"
            >
              roargymsg@gmail.com
            </a>
            . Withdrawal of marketing consent will not affect the delivery of service-related
            communications necessary for the administration of your membership.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">
            10. Cookies and Website Technologies
          </h2>
          <p className="mb-3">
            Our website uses cookies and similar tracking technologies to enhance your browsing
            experience, analyse website traffic, and support our marketing activities. Cookies are
            small data files stored on your device. We may use the following types of cookies:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Essential cookies: necessary for the website to function correctly</li>
            <li>
              Analytics cookies: used to understand how visitors interact with our website (e.g.
              Google Analytics)
            </li>
            <li>
              Marketing cookies: used to deliver relevant advertising and track campaign
              performance
            </li>
          </ul>
          <p className="mt-3">
            You may manage or disable cookies through your browser settings. Please note that
            disabling certain cookies may affect the functionality of our website. For more
            information, please refer to our{" "}
            <a href="/cookies" className="underline text-white/80 hover:text-white">
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">11. Protection of Personal Data</h2>
          <p>
            We implement appropriate technical, administrative, and physical security measures to
            protect your personal data against unauthorised access, collection, use, disclosure,
            copying, modification, disposal, or similar risks. These measures include access
            controls, encryption where appropriate, and staff training on data protection
            obligations. However, no method of data transmission or storage is completely secure.
            While we take all reasonable steps to protect your personal data, we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">
            12. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, legal obligations, or regulatory requirements. The revised policy will be
            posted on our website with an updated effective date. We encourage you to review this
            policy periodically. Where changes are material, we will take reasonable steps to
            notify you. Your continued use of our services following any update constitutes your
            acknowledgement of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">
            13. Contact Our Data Protection Officer
          </h2>
          <p className="mb-3">
            If you have any questions, concerns, or requests relating to this Privacy Policy or
            the handling of your personal data, please contact our Data Protection Officer:
          </p>
          <p className="mb-3 font-bold text-white/80">Data Protection Officer</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>ROAR Gym Pte Ltd</li>
            <li>
              Email:{" "}
              <a
                href="mailto:roargymsg@gmail.com"
                className="underline text-white/80 hover:text-white"
              >
                roargymsg@gmail.com
              </a>
            </li>
          </ul>
          <p className="mt-3">
            We aim to respond to all valid personal data requests within 30 calendar days of
            receipt.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
