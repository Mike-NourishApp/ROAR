"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";
import type { NourishClass } from "@/lib/nourish";

const GYM_TIMEZONE = "Asia/Singapore";

interface DayTab {
  key: string; // YYYY-MM-DD in gym time
  weekday: string; // Mon
  date: string; // 21 Jul
}

function buildWeek(): DayTab[] {
  const keyFmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: GYM_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const labelFmt = new Intl.DateTimeFormat("en-SG", {
    timeZone: GYM_TIMEZONE,
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() + i * 86_400_000);
    const parts = labelFmt.formatToParts(d);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
    return {
      key: keyFmt.format(d),
      weekday: get("weekday"),
      date: `${get("day")} ${get("month")}`,
    };
  });
}

function spotsLabel(cls: NourishClass): string | null {
  if (cls.capacity == null) return null;
  if (cls.spots_remaining != null && cls.spots_remaining <= 0) {
    return cls.waitlist_full ? "Full" : "Waitlist";
  }
  if (cls.spots_remaining != null) {
    return `${cls.spots_remaining} spot${cls.spots_remaining === 1 ? "" : "s"} left`;
  }
  return null;
}

export function Timetable({ classes }: { classes: NourishClass[] }) {
  const [week] = useState(buildWeek);
  const [activeDay, setActiveDay] = useState(0);

  const byDate = new Map<string, NourishClass[]>();
  for (const cls of classes) {
    const key = cls.scheduled_at_local.slice(0, 10);
    byDate.set(key, [...(byDate.get(key) ?? []), cls]);
  }
  byDate.forEach((list) =>
    list.sort((a, b) => a.scheduled_at_local.localeCompare(b.scheduled_at_local))
  );

  const day = week[activeDay];
  const entries = byDate.get(day.key) ?? [];

  return (
    <div>
      {/* Day tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-1 sm:gap-2">
        {week.map((d, i) => (
          <button
            key={d.key}
            onClick={() => setActiveDay(i)}
            className={cn(
              "rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:px-4 sm:py-2.5",
              activeDay === i
                ? "bg-roar text-black"
                : "text-white/40 hover:bg-white/5 hover:text-white/70"
            )}
          >
            <span className="block">{i === 0 ? "Today" : d.weekday}</span>
            <span
              className={cn(
                "block text-[10px] font-medium normal-case tracking-normal",
                activeDay === i ? "text-black/60" : "text-white/25"
              )}
            >
              {d.date}
            </span>
          </button>
        ))}
      </div>

      {/* Schedule list */}
      <div className="mx-auto max-w-2xl space-y-2">
        {entries.length === 0 ? (
          <div className="rounded-lg border border-white/5 bg-white/[0.02] px-5 py-10 text-center">
            <p className="text-sm text-white/50">
              No classes scheduled for {activeDay === 0 ? "today" : `${day.weekday} ${day.date}`} yet.
            </p>
            <a
              href={whatsappUrl("Hey, when are your next classes running?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-roar hover:text-roar/80"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Ask us on WhatsApp
            </a>
          </div>
        ) : (
          entries.map((cls) => {
            const time = cls.scheduled_at_local.slice(11, 16);
            const spots = spotsLabel(cls);
            const full = spots === "Full";
            return (
              <div
                key={cls.id}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 transition-all hover:border-white/15"
              >
                {/* Time */}
                <div className="w-14 shrink-0 text-right">
                  <span className="text-sm font-bold tabular-nums text-white/80">
                    {time}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-white/10" />

                {/* Details */}
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  {cls.coach_profile_picture_url && (
                    <Image
                      src={cls.coach_profile_picture_url}
                      alt={cls.coach_name ?? ""}
                      width={32}
                      height={32}
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white">
                      {cls.display_name}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      {cls.coach_name && <span>{cls.coach_name}</span>}
                      {cls.location && <span>{cls.location}</span>}
                      {spots && (
                        <span className={cn(full ? "text-white/30" : "text-roar/80")}>
                          {spots}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book button */}
                <a
                  href={whatsappUrl(
                    `Hey, I'd like to book ${cls.display_name} on ${day.weekday} ${day.date} at ${time}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "shrink-0 rounded-md border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all",
                    full
                      ? "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                      : "border-roar/30 text-roar hover:bg-roar hover:text-black"
                  )}
                >
                  {full ? "Join Waitlist" : "Book"}
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
