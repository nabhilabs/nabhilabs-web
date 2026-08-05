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

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestIndex = 0;
        let bestRatio = -1;
        elements.forEach((el, index) => {
          const ratio = ratios.get(el.id) ?? 0;
          const top = el.getBoundingClientRect().top;
          // Prefer the section crossing the upper third of the viewport
          const score = ratio + (top <= window.innerHeight * 0.4 ? 0.15 : 0);
          if (score >= bestRatio) {
            bestRatio = score;
            bestIndex = index;
          }
        });
        setActive(bestIndex);
      },
      {
        root: null,
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
        rootMargin: "-12% 0px -45% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-2 top-1/2 z-30 hidden w-10 -translate-y-1/2 xl:left-3 2xl:left-4 lg:block"
    >
      <div className="relative flex h-64 flex-col items-center">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#5a7052]/20" />
        <span
          className="absolute left-1/2 top-0 w-px origin-top -translate-x-1/2 bg-[#a3e635] transition-transform duration-300 ease-out"
          style={{
            height: "100%",
            transform: `translateX(-50%) scaleY(${Math.min(1, Math.max(0, progress))})`,
          }}
        />
        <ul className="relative z-10 flex h-full w-full flex-col justify-between py-0.5">
          {SECTIONS.map((section, index) => (
            <li className="flex justify-center" key={section.id}>
              <span
                className={`rounded-sm bg-[#f2f4f0]/90 px-1 font-mono text-[8px] tracking-[0.12em] transition-colors duration-500 ${
                  index === active
                    ? "font-medium text-[#0f1c13]"
                    : index < active
                      ? "text-[#5a7052]/65"
                      : "text-[#5a7052]/28"
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
