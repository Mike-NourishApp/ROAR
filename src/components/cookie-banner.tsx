"use client";

import { useState, useEffect, useCallback } from "react";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
};

function deleteCookiesByPrefix(prefixes: string[]) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const name = cookie.split("=")[0].trim();
    if (prefixes.some((prefix) => name.startsWith(prefix))) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
    }
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const applyPreferences = useCallback((prefs: CookiePreferences) => {
    if (!prefs.analytics) {
      deleteCookiesByPrefix(["_ga", "_gid", "_gat"]);
      if (GA_MEASUREMENT_ID) {
        (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      }
    }
    if (!prefs.marketing) {
      deleteCookiesByPrefix(["_fbp", "_fbc"]);
    }
  }, []);

  function acceptAll() {
    const prefs = { ...defaultPreferences };
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    applyPreferences(prefs);
    setVisible(false);
    setShowSettings(false);
  }

  function savePreferences() {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    applyPreferences(preferences);
    setVisible(false);
    setShowSettings(false);
  }

  function rejectNonEssential() {
    const prefs: CookiePreferences = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    applyPreferences(prefs);
    setVisible(false);
    setShowSettings(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[oklch(0.1_0_0)] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Essential */}
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div>
                  <p className="text-sm font-semibold text-white">Essential Cookies</p>
                  <p className="text-xs text-white/40">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/40">
                  Always on
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div>
                  <p className="text-sm font-semibold text-white">Analytics Cookies</p>
                  <p className="text-xs text-white/40">
                    Help us understand how visitors use our website.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    preferences.analytics ? "bg-white" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-transform ${
                      preferences.analytics ? "translate-x-5 bg-black" : "translate-x-0 bg-white/30"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div>
                  <p className="text-sm font-semibold text-white">Marketing Cookies</p>
                  <p className="text-xs text-white/40">
                    Used to deliver relevant ads and track campaigns.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    preferences.marketing ? "bg-white" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-transform ${
                      preferences.marketing ? "translate-x-5 bg-black" : "translate-x-0 bg-white/30"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button
                onClick={rejectNonEssential}
                variant="outline"
                className="flex-1 border-white/10 text-white/60 hover:bg-white/5 text-xs uppercase tracking-wider"
              >
                Reject All
              </Button>
              <Button
                onClick={savePreferences}
                className="flex-1 bg-white text-black hover:bg-white/90 text-xs uppercase tracking-wider"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      {!showSettings && (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[oklch(0.08_0_0)]/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-sm text-white/70">
                  We use cookies to improve your experience. By continuing to use this site you agree
                  to our{" "}
                  <Link href="/cookies" className="underline text-white hover:text-white/80">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 hover:bg-white/5 hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                </button>
                <Button
                  onClick={rejectNonEssential}
                  variant="outline"
                  className="border-white/10 text-white/60 hover:bg-white/5 text-xs uppercase tracking-wider px-5"
                >
                  Reject
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-white text-black hover:bg-white/90 text-xs uppercase tracking-wider px-5"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
