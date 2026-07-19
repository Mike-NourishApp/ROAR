import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | ROAR",
  description: "How ROAR Gym uses cookies and how you can manage them.",
};

export default function CookiesPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mb-12 text-xs text-white/30">Last updated: June 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-bold text-white">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            websites remember your preferences and improve your browsing experience. Cookies do not
            contain personally identifiable information unless you have provided it to us.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">2. How We Use Cookies</h2>
          <p className="mb-3">The ROAR Gym website uses cookies for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Essential cookies: required for the website to function correctly (e.g. session
              management, form submissions).
            </li>
            <li>
              Analytics cookies: help us understand how visitors interact with our website so we
              can improve it.
            </li>
            <li>
              Preference cookies: remember your settings and preferences for a better experience.
            </li>
            <li>
              Marketing cookies: used to deliver relevant content and track the effectiveness of
              our campaigns (only with your consent).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">3. Third-Party Cookies</h2>
          <p>
            Some cookies on our website are set by third-party services such as analytics providers
            and social media platforms. These third parties have their own privacy policies and we
            do not control their use of cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">4. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow
            you to refuse or delete cookies. Please note that disabling certain cookies may affect
            the functionality of our website. For more information on managing cookies, visit your
            browser&apos;s help documentation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">5. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. The latest version will always be
            available on our website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">6. Contact</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:roargymsg@gmail.com"
              className="underline text-white/80 hover:text-white"
            >
              roargymsg@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
