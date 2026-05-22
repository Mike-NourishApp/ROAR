import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | ROAR",
  description: "How ROAR collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: 22 May 2025</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. Introduction</h2>
          <p>
            ROAR (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your personal information when you visit our website, use our services, or interact with
            us. We comply with the Personal Data Protection Act 2012 (PDPA) of Singapore.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-white/80">Account information:</strong> Name, email address,
              phone number, date of birth, and emergency contact details.
            </li>
            <li>
              <strong className="text-white/80">Health information:</strong> Medical conditions,
              injuries, fitness goals, and physical assessments provided voluntarily for training
              purposes.
            </li>
            <li>
              <strong className="text-white/80">Payment information:</strong> Billing address and
              payment details processed through our secure third-party payment providers.
            </li>
            <li>
              <strong className="text-white/80">Usage data:</strong> Information about how you use
              our website, including IP address, browser type, pages visited, and booking history.
            </li>
            <li>
              <strong className="text-white/80">Communications:</strong> Messages sent to us via
              WhatsApp, email, website forms, or social media.
            </li>
            <li>
              <strong className="text-white/80">Images and media:</strong> Photos or videos taken
              during classes or events for marketing purposes (with consent).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. How We Use Your Information</h2>
          <p className="mb-3">We use your personal information to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Provide and manage your membership, class bookings, and personal training services.</li>
            <li>Communicate with you about your account, bookings, and schedule changes.</li>
            <li>Process payments and manage billing.</li>
            <li>Personalise your training experience based on your goals and health information.</li>
            <li>Send promotional communications about classes, events, and offers (with consent).</li>
            <li>Improve our website, services, and customer experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">4. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. For detailed information
            about the cookies we use and how to manage them, please see our{" "}
            <a href="/cookies" className="underline text-white/80 hover:text-white">
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Disclosure of Information</h2>
          <p className="mb-3">We may share your personal information with:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-white/80">Service providers:</strong> Third-party platforms
              used for class bookings, payment processing, email communications, and website analytics.
            </li>
            <li>
              <strong className="text-white/80">Legal requirements:</strong> When required by law,
              regulation, or legal process.
            </li>
            <li>
              <strong className="text-white/80">Business transfers:</strong> In connection with a
              merger, acquisition, or sale of assets.
            </li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to third parties. We may share anonymised,
            aggregated data for analytical purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. However,
            no method of transmission over the internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">7. Data Retention</h2>
          <p>
            We retain your personal information for as long as your membership or account is active,
            or as needed to provide you with services. We may retain certain information after account
            closure as required by law or for legitimate business purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">8. Your Rights</h2>
          <p className="mb-3">Under the PDPA, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Access your personal data held by us.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Withdraw consent for the collection, use, or disclosure of your data.</li>
            <li>Request information about how your data has been used or disclosed in the past year.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us using the details below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible
            for the privacy practices or content of these external sites. We encourage you to review
            the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">11. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data
            protection rights, please contact us via WhatsApp at +65 8606 2819 or through our
            website.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
