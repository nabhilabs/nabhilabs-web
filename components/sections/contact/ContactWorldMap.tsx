"use client";

import WorldMap from "@/components/ui/world-map";

/** Hyderabad, India — Nabhi Labs remote-first base */
const HYDERABAD = { lat: 17.385, lng: 78.4867, label: "Hyderabad" };
const PINS = [HYDERABAD];

export function ContactWorldMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#d8e0d5] bg-[#f2f4f0]">
      <WorldMap
        backgroundColor="#f2f4f0"
        className="rounded-none"
        dotColor="#1a332355"
        pinColor="#a3e635"
        pins={PINS}
      />

      <div className="pointer-events-none absolute left-4 top-4 z-10 min-w-[10.5rem] rounded-2xl border border-[#d8e0d5] bg-white/95 px-4 py-3 text-left shadow-[0_12px_28px_rgba(15,28,19,0.08)] backdrop-blur-sm sm:left-6 sm:top-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
          Nabhi Labs
        </p>
        <p className="mt-1 font-display text-sm font-semibold text-[#0f1c13]">
          Remote-first · Hyderabad
        </p>
        <a
          className="pointer-events-auto mt-0.5 block text-xs text-[#4a5b4e] transition-colors hover:text-[#0f1c13]"
          href="mailto:hello@nabhilabs.com"
        >
          hello@nabhilabs.com
        </a>
      </div>
    </div>
  );
}
