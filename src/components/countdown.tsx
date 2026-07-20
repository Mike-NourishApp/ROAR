"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-08-10T00:00:00+08:00");

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

export function Countdown() {
  // undefined until mounted so the server and first client render match
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft === null) return null;

  const units = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-roar">
        Opening In
      </p>
      <div className="flex items-start justify-center gap-3 sm:gap-5">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-start gap-3 sm:gap-5">
            {i > 0 && (
              <span className="pt-1 text-2xl font-black text-roar/50 sm:text-4xl">
                :
              </span>
            )}
            <div className="w-14 sm:w-20">
              <span className="block text-3xl font-black tabular-nums text-white sm:text-5xl">
                {unit.value === undefined
                  ? "--"
                  : String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
