import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Data Protection Officer | ROAR",
  description:
    "Contact the ROAR Gym Data Protection Officer for PDPA enquiries, access requests, corrections, and withdrawal of consent.",
};

export default function DpoPage() {
  return (
    <PolicyLayout>
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Data Protection Officer
      </h1>
      <p className="mb-12 text-xs text-white/30">Privacy &amp; PDPA</p>

      <div className="space-y-8 text-sm leading-relaxed text-white/60">
        <div className="border border-white/10 p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
            Contact Our DPO
          </p>
          <p className="mb-6">
            For privacy-related enquiries, access requests, correction requests, withdrawal of
            consent, or any PDPA matters, please contact our Data Protection Officer directly.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">Email</p>
              <a
                href="mailto:roargymsg@gmail.com"
                className="text-white/80 underline hover:text-white"
              >
                roargymsg@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">Response Time</p>
              <p className="text-white/80">Within 30 calendar days</p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="mb-3 text-lg font-bold text-white">You May Contact Us For</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Access to personal data we hold about you</li>
            <li>Correction of inaccurate or incomplete personal data</li>
            <li>Withdrawal of consent for collection, use, or disclosure of your data</li>
            <li>Enquiries about how your personal data is being used</li>
            <li>Complaints regarding our data protection practices</li>
            <li>Any other PDPA-related matters</li>
          </ul>
        </section>

        <p>
          ROAR Gym Pte Ltd is committed to complying with the Singapore Personal Data Protection
          Act 2012 (PDPA). We take all privacy enquiries seriously and will respond promptly and
          transparently.
        </p>
      </div>
    </PolicyLayout>
  );
}
