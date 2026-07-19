"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WEB3FORMS_ACCESS_KEY = "d98ff5f7-e531-4987-9ea2-2eb1a68e27a6";

const benefits = [
  "Full access to open gym hours",
  "Priority access before public opening",
  "Exclusive founding members merchandise",
  "First access to all new programs & classes",
  "Exclusive access to the ROAR app",
];

type FormState = "idle" | "sending" | "sent" | "error";

export function FoundingSection() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New ROAR Gym Enquiry",
          from_name: "ROAR Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setState("sent");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-roar/50 focus:outline-none transition-colors";

  return (
    <section id="founding" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-roar/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-roar">
            Exclusive Offer
          </p>
          <h2 className="mb-4 text-3xl font-black uppercase text-white sm:text-4xl lg:text-5xl">
            Founding Member
          </h2>
          <p className="text-2xl font-bold text-roar sm:text-3xl">
            $2,000 <span className="text-base font-medium text-white/50">for 12 months</span>
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Offer details */}
          <div className="rounded-lg border border-roar/20 bg-white/[0.02] p-8">
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-roar/15">
                    <Check className="h-3 w-3 text-roar" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-roar/20 bg-roar/[0.06] p-5">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-roar">
                Limited Availability
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                Founding memberships are strictly limited. Once spots are filled,
                this rate will never be offered again.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-8">
            <h3 className="mb-1 text-xl font-black uppercase text-white">Enquire Now</h3>
            <p className="mb-6 text-sm text-white/40">
              Secure your spot. We&apos;ll be in touch within 24 hours.
            </p>

            {state === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roar/15">
                  <Check className="h-6 w-6 text-roar" />
                </span>
                <p className="text-sm font-medium text-white">
                  Enquiry received — we&apos;ll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                  className={inputClasses}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={inputClasses}
                />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your training goals"
                  className={inputClasses}
                />
                <Button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider h-12"
                >
                  {state === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Secure My Spot"
                  )}
                </Button>
                {state === "error" && (
                  <p className="text-center text-xs text-red-400/80">
                    Something went wrong — please try again or WhatsApp us instead.
                  </p>
                )}
                <p className="text-center text-xs text-white/30">
                  No payment required. We&apos;ll contact you to confirm.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
