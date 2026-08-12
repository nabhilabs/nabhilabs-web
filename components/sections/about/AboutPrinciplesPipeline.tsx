"use client";

import { RefreshCw, Sparkles, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { useScrollStory } from "@/hooks/use-scroll-story";

type Principle = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  code: string;
};

const principles: Principle[] = [
  {
    id: "clarity",
    title: "Clarity",
    code: "STAGE_01",
    description:
      "Information is organized so you always know what matters now—not buried in noise.",
    icon: Target,
  },
  {
    id: "adaptability",
    title: "Adaptability",
    code: "STAGE_02",
    description:
      "Priorities shift—systems should adjust with them, not work against how teams actually operate.",
    icon: RefreshCw,
  },
  {
    id: "focus",
    title: "Focus",
    code: "STAGE_03",
    description:
      "Everything works together, so decisions keep their thread without friction or rework.",
    icon: Sparkles,
  },
];

export function AboutPrinciplesPipeline() {
  const rootRef = useRef<HTMLElement>(null);
  const active = useScrollStory(rootRef, principles.length, {
    startAt: 0.88,
    endAt: 0.22,
    stretchVH: 0.35,
    linear: true,
  });
  const allActive = active === -2;

  return (
    <section
      aria-labelledby="about-principles-heading"
      className="relative z-10 px-6 md:px-10"
      ref={rootRef}
    >
      <div className="about-principles-shell relative mx-auto max-w-[95rem] overflow-hidden rounded-2xl border border-[#1a3323]/70 bg-[#0f1c13] px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div aria-hidden className="about-tech-grid-dark absolute inset-0 opacity-40" />

        <div className="relative">
          <ChapterTag inverse>01 // Principles</ChapterTag>
          <h2
            className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-white"
            id="about-principles-heading"
          >
            Nabhi Labs is built on a simple idea:{" "}
            <span className="font-normal text-[#78966a]">
              understanding should feel clear
            </span>
            , not overwhelming. We focus on how organizations actually decide.
          </h2>

          <div className="mt-14 hidden lg:block">
            <PrinciplesWireframe
              active={allActive ? principles.length - 1 : active}
            />
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {principles.map((principle, index) => {
              const lit = allActive || active >= index;
              const isCurrent = allActive ? index === principles.length - 1 : active === index;
              const Icon = principle.icon;

              return (
                <li
                  className={`about-principle-card relative flex flex-col rounded-2xl border p-6 transition-[border-color,box-shadow,transform,background] duration-500 md:p-7 ${
                    lit
                      ? "border-[#a3e635]/45 bg-[#132819] shadow-[0_0_32px_rgba(163,230,53,0.12)]"
                      : "border-[#1a3323] bg-[#0d1812]/80"
                  } ${isCurrent ? "-translate-y-1" : ""}`}
                  key={principle.id}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid size-10 place-items-center rounded-xl transition-colors duration-500 ${
                        lit
                          ? "bg-[#cde0b8] text-[#0f1c13]"
                          : "bg-[#1a3323] text-[#78966a]"
                      }`}
                    >
                      <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#78966a]">
                      {principle.code}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.02em] text-white">
                    {principle.title}
                  </h3>
                  <p
                    className={`mt-2.5 flex-1 text-sm leading-6 transition-colors duration-500 ${
                      lit ? "text-[#cde0b8]/85" : "text-white/40"
                    }`}
                  >
                    {principle.description}
                  </p>
                  <span
                    aria-hidden
                    className={`mt-5 block h-px origin-left transition-transform duration-700 ${
                      lit ? "about-pipeline-beam scale-x-100" : "scale-x-0 bg-[#1a3323]"
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PrinciplesWireframe({ active }: { active: number }) {
  const progress = Math.min(1, (active + 1) / principles.length);

  return (
    <svg
      aria-hidden
      className="mb-2 h-16 w-full text-[#cde0b8]"
      preserveAspectRatio="none"
      viewBox="0 0 800 64"
    >
      <line
        className="text-[#1a3323]"
        stroke="currentColor"
        strokeWidth="1"
        x1="80"
        x2="720"
        y1="32"
        y2="32"
      />
      <line
        className="text-[#a3e635]"
        stroke="currentColor"
        strokeDasharray="640"
        strokeDashoffset={640 - 640 * progress}
        strokeWidth="2"
        x1="80"
        x2="720"
        y1="32"
        y2="32"
      />
      {principles.map((step, index) => {
        const x = 80 + index * 320;
        const lit = active >= index;
        return (
          <g key={step.id}>
            <circle
              cx={x}
              cy={32}
              fill={lit ? "#cde0b8" : "#0f1c13"}
              r={lit ? 10 : 8}
              stroke={lit ? "#a3e635" : "#31543a"}
              strokeWidth="2"
            />
            <text
              fill={lit ? "#cde0b8" : "#78966a"}
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              letterSpacing="0.12em"
              textAnchor="middle"
              x={x}
              y="58"
            >
              {step.code}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
