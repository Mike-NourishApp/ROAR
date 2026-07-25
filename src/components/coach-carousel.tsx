"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CoachCard } from "@/components/coach-card";
import { cn } from "@/lib/utils";

interface Coach {
  name: string;
  role: string;
  bio?: string | null;
  image?: string | null;
  instagram?: string | null;
  qualifications?: string[];
}

const GAP = 16; // matches gap-4

export function CoachCarousel({ coaches }: { coaches: Coach[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  function scrollByCards(dir: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-coach-card]");
    const amount = card ? card.offsetWidth + GAP : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  const arrowBase =
    "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/70 backdrop-blur transition-all hover:border-roar/40 hover:text-roar disabled:pointer-events-none disabled:opacity-0 sm:flex";

  return (
    <div className="relative">
      <button
        onClick={() => scrollByCards(-1)}
        disabled={atStart}
        aria-label="Previous coaches"
        className={cn(arrowBase, "left-2")}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollByCards(1)}
        disabled={atEnd}
        aria-label="Next coaches"
        className={cn(arrowBase, "right-2")}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Edge fades: peeking cards dissolve into the page background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-[1] w-20 bg-gradient-to-r from-background to-transparent transition-opacity sm:w-28",
          atStart && "opacity-0"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-[1] w-20 bg-gradient-to-l from-background to-transparent transition-opacity sm:w-28",
          atEnd && "opacity-0"
        )}
      />

      <div
        ref={scrollRef}
        onScroll={updateEdges}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-14 pb-4 scroll-px-14 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-20 sm:scroll-px-20 [&::-webkit-scrollbar]:hidden"
      >
        {coaches.map((coach) => (
          <div
            key={coach.name}
            data-coach-card
            className="w-[300px] shrink-0 snap-start sm:w-[340px]"
          >
            <CoachCard {...coach} />
          </div>
        ))}
      </div>
    </div>
  );
}
