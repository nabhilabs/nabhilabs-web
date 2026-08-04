"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "01" },
  { id: "understanding", label: "02" },
  { id: "nabhi-persona", label: "03" },
  { id: "capabilities", label: "04" },
  { id: "intelligence", label: "05" },
  { id: "proof", label: "06" },
  { id: "why-nabhi", label: "07" },
  { id: "our-story", label: "08" },
  { id: "team", label: "09" },
  { id: "answers", label: "10" },
  { id: "begin", label: "11" },
] as const;

export function SectionProgress() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];

    const onScroll = () => {
      const mid = window.innerHeight * 0.35;
      let current = 0;
      elements.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;
        if (top <= mid) current = index;
      });
      setActive(current);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:left-5"
    >
      <div className="relative flex h-56 w-px flex-col items-center bg-[#5a7052]/20">
        <span
          className="absolute left-0 top-0 w-px origin-top bg-[#a3e635] transition-transform duration-300 ease-out"
          style={{
            height: "100%",
            transform: `scaleY(${Math.min(1, Math.max(0, progress))})`,
          }}
        />
        <ul className="absolute left-3 top-0 flex h-full flex-col justify-between py-1">
          {SECTIONS.map((section, index) => (
            <li key={section.id}>
              <span
                className={`font-mono text-[8px] tracking-[0.14em] transition-colors duration-500 ${
                  index === active
                    ? "text-[#0f1c13]"
                    : index < active
                      ? "text-[#5a7052]/70"
                      : "text-[#5a7052]/30"
                }`}
              >
                {section.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
