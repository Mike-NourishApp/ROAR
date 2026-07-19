"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

type ClassType = "strength" | "conditioning" | "hyrox" | "open";

interface ScheduleEntry {
  time: string;
  name: string;
  coach: string;
  type: ClassType;
  duration: string;
}

const typeStyles: Record<ClassType, string> = {
  strength: "border-white/10 bg-white/[0.04]",
  conditioning: "border-white/10 bg-white/[0.04]",
  hyrox: "border-white/10 bg-white/[0.04]",
  open: "border-white/5 bg-white/[0.02]",
};

const typeLabels: Record<ClassType, string> = {
  strength: "Strength",
  conditioning: "Conditioning",
  hyrox: "Hyrox",
  open: "Open Gym",
};

const schedule: Record<(typeof days)[number], ScheduleEntry[]> = {
  Mon: [
    { time: "06:00", name: "ROAR Conditioning", coach: "Harry", type: "conditioning", duration: "60 min" },
    { time: "07:15", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
    { time: "09:00", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
    { time: "12:00", name: "ROAR Conditioning", coach: "Marcus", type: "conditioning", duration: "45 min" },
    { time: "17:30", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
    { time: "18:45", name: "ROAR Hyrox", coach: "Dana", type: "hyrox", duration: "60 min" },
  ],
  Tue: [
    { time: "06:00", name: "ROAR Hyrox", coach: "Dana", type: "hyrox", duration: "60 min" },
    { time: "07:15", name: "ROAR Conditioning", coach: "Harry", type: "conditioning", duration: "60 min" },
    { time: "09:00", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
    { time: "17:30", name: "ROAR Conditioning", coach: "Marcus", type: "conditioning", duration: "60 min" },
    { time: "18:45", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
  ],
  Wed: [
    { time: "06:00", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
    { time: "07:15", name: "ROAR Conditioning", coach: "Harry", type: "conditioning", duration: "60 min" },
    { time: "09:00", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
    { time: "12:00", name: "ROAR Hyrox", coach: "Dana", type: "hyrox", duration: "45 min" },
    { time: "17:30", name: "ROAR Hyrox", coach: "Lawrence", type: "hyrox", duration: "60 min" },
    { time: "18:45", name: "ROAR Strength", coach: "Harry", type: "strength", duration: "60 min" },
  ],
  Thu: [
    { time: "06:00", name: "ROAR Conditioning", coach: "Marcus", type: "conditioning", duration: "60 min" },
    { time: "07:15", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
    { time: "09:00", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
    { time: "17:30", name: "ROAR Strength", coach: "Harry", type: "strength", duration: "60 min" },
    { time: "18:45", name: "ROAR Conditioning", coach: "Dana", type: "conditioning", duration: "60 min" },
  ],
  Fri: [
    { time: "06:00", name: "ROAR Hyrox", coach: "Lawrence", type: "hyrox", duration: "60 min" },
    { time: "07:15", name: "ROAR Strength", coach: "Harry", type: "strength", duration: "60 min" },
    { time: "09:00", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
    { time: "12:00", name: "ROAR Conditioning", coach: "Marcus", type: "conditioning", duration: "45 min" },
    { time: "17:30", name: "ROAR Conditioning", coach: "Dana", type: "conditioning", duration: "60 min" },
  ],
  Sat: [
    { time: "08:00", name: "ROAR Strength", coach: "Lawrence", type: "strength", duration: "60 min" },
    { time: "09:15", name: "ROAR Hyrox", coach: "Dana", type: "hyrox", duration: "60 min" },
    { time: "10:30", name: "ROAR Conditioning", coach: "Harry", type: "conditioning", duration: "60 min" },
    { time: "11:45", name: "Open Gym", coach: "", type: "open", duration: "3 hrs" },
  ],
  Sun: [
    { time: "09:00", name: "ROAR Conditioning", coach: "Marcus", type: "conditioning", duration: "60 min" },
    { time: "10:15", name: "Open Gym", coach: "", type: "open", duration: "4 hrs" },
  ],
};

export function Timetable() {
  const today = new Date().getDay();
  const defaultDay = today === 0 ? 6 : today - 1;
  const [activeDay, setActiveDay] = useState(defaultDay);

  const entries = schedule[days[activeDay]];

  return (
    <div>
      {/* Day tabs */}
      <div className="mb-8 flex justify-center gap-1 sm:gap-2">
        {days.map((day, i) => (
          <button
            key={day}
            onClick={() => setActiveDay(i)}
            className={cn(
              "rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:px-5 sm:py-2.5",
              activeDay === i
                ? "bg-roar text-black"
                : "text-white/40 hover:bg-white/5 hover:text-white/70"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {(Object.keys(typeLabels) as ClassType[]).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                type === "strength" && "bg-white/70",
                type === "conditioning" && "bg-white/40",
                type === "hyrox" && "bg-white/55",
                type === "open" && "bg-white/20"
              )}
            />
            <span className="text-[10px] uppercase tracking-wider text-white/40">
              {typeLabels[type]}
            </span>
          </div>
        ))}
      </div>

      {/* Schedule list */}
      <div className="mx-auto max-w-2xl space-y-2">
        {entries.map((entry, i) => (
          <div
            key={`${entry.time}-${i}`}
            className={cn(
              "flex items-center gap-4 rounded-lg border px-5 py-4 transition-all hover:border-white/15",
              typeStyles[entry.type]
            )}
          >
            {/* Time */}
            <div className="w-14 shrink-0 text-right">
              <span className="text-sm font-bold tabular-nums text-white/80">
                {entry.time}
              </span>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10" />

            {/* Details */}
            <div className="flex-1">
              <p className="text-sm font-bold text-white">{entry.name}</p>
              <div className="flex items-center gap-3 text-xs text-white/40">
                {entry.coach && <span>{entry.coach}</span>}
                <span>{entry.duration}</span>
              </div>
            </div>

            {/* Book button */}
            {entry.type !== "open" && (
              <a
                href="#timetable"
                className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/50 transition-all hover:border-white/20 hover:text-white"
              >
                Book
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
