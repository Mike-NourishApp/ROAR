import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | ROAR",
  description: "How ROAR uses cookies, the types of cookies we use, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: 22 May 2025</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile
            phone) when you visit a website. They are widely used to make websites work more
            efficiently, provide a better browsing experience, and give website owners useful
            information about how their site is being used.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. Types of Cookies We Use</h2>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core
                functionality such as page navigation, security, and access to secure areas of the
                website. The website cannot function properly without these cookies, and they cannot
                be disabled.
              </p>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">Analytics / Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting
                and reporting information anonymously. We use Google Analytics to count visitors and
                see how they move around the site, which helps us improve the way our website works.
                These cookies do not personally identify you.
              </p>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">Functional Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make (such as your preferred
                language or region) and provide enhanced, more personalised features. They may also be
                used to remember preferences such as cookie consent choices.
              </p>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">Marketing / Targeting Cookies</h3>
              <p>
                These cookies are used to deliver advertisements that are relevant to you and your
                interests. They may be set through our site by advertising partners such as Facebook
                and Instagram. These cookies track your browsing activity across websites and build a
                profile of your interests to show you relevant ads on other platforms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. How We Use Cookies</h2>
          <p className="mb-3">We use cookies to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Ensure our website functions correctly and securely.</li>
            <li>Analyse website traffic and usage patterns to improve our services.</li>
            <li>Remember your preferences and cookie consent choices.</li>
            <li>Deliver personalised content and relevant advertising.</li>
            <li>Measure the effectiveness of our marketing campaigns.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">4. Third-Party Cookies</h2>
          <p>
            Some cookies on our website are placed by third-party services. These include analytics
            providers (such as Google Analytics) and social media platforms (such as Facebook and
            Instagram). We do not control these third-party cookies. Please refer to the respective
            third-party privacy policies for more information about their cookies and how to manage
            them.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Managing Your Cookie Preferences</h2>
          <p className="mb-3">
            You can manage your cookie preferences at any time through:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-white/80">Our cookie banner:</strong> Click the settings icon
              on the cookie consent banner to customise which cookie categories you accept.
            </li>
            <li>
              <strong className="text-white/80">Browser settings:</strong> Most web browsers allow
              you to control cookies through their settings. You can set your browser to block or
              delete cookies, though this may affect the functionality of our website.
            </li>
          </ul>
          <p className="mt-3">
            Please note that disabling certain cookies may impact your experience on our website and
            limit the functionality available to you.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology,
            legislation, or our business practices. Any changes will be posted on this page with an
            updated effective date. We encourage you to check this page periodically for the latest
            information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">7. Contact</h2>
          <p>
            If you have any questions about our use of cookies, please contact us via WhatsApp at
            +65 8606 2819 or through our website.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
