"use client";

import {
  Box,
  Lightbulb,
  MessageSquare,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useScrollStory } from "@/hooks/use-scroll-story";

const ICONS = {
  MessageSquare,
  Lightbulb,
  Box,
  Target,
} as const;

export type TimelineIconName = keyof typeof ICONS;

export type TimelineStep = {
  number: string;
  title: string;
  period: string;
  description: string;
  icon: TimelineIconName;
};

type HorizontalTimelineProps = {
  steps: readonly TimelineStep[];
};

export function HorizontalTimeline({ steps }: HorizontalTimelineProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const active = useScrollStory(listRef, steps.length);
  const reduceMotion = useReducedMotion();
  const fullyActive = active === -2 || reduceMotion;
  const lineProgress = fullyActive
    ? 1
    : active < 0
      ? 0
      : (active + 1) / steps.length;

  return (
    <div className="relative" ref={listRef}>
      <span className="pointer-events-none absolute left-5 right-5 top-12 hidden h-px overflow-hidden bg-[#c8d6c4] sm:block">
        <motion.span
          aria-hidden
          className="absolute inset-y-0 left-0 bg-[#a3e635]"
          initial={false}
          animate={{ scaleX: lineProgress }}
          style={{ transformOrigin: "left center", width: "100%" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {steps.map((step, index) => {
          const Icon: LucideIcon = ICONS[step.icon];
          const unlocked = fullyActive || index <= active;
          const isCurrent = fullyActive
            ? index === steps.length - 1
            : index === active && active >= 0;

          return (
            <motion.article
              key={step.title}
              className={`relative z-10 w-[78%] shrink-0 snap-center rounded-2xl border p-4 will-change-transform sm:w-auto sm:flex-1 sm:shrink ${
                isCurrent
                  ? "border-[#a3e635]/55 bg-white/55"
                  : unlocked
                    ? "border-transparent bg-transparent"
                    : "border-transparent bg-transparent"
              }`}
              initial={false}
              animate={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : unlocked
                    ? {
                        opacity: isCurrent ? 1 : 0.72,
                        y: 0,
                        scale: isCurrent ? 1 : 0.985,
                      }
                    : { opacity: 0.28, y: 18, scale: 0.96 }
              }
              transition={{
                duration: 0.55,
                delay: unlocked && !fullyActive ? index * 0.04 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className={`grid size-10 place-items-center rounded-full transition-colors duration-500 ${
                  isCurrent
                    ? "bg-[#cde0b8] text-[#1a3323]"
                    : unlocked
                      ? "bg-[#edf3e8] text-[#5a7052]"
                      : "bg-[#edf3e8]/70 text-[#5a7052]/50"
                }`}
              >
                <Icon className="size-4" strokeWidth={1.25} />
              </span>

              <motion.span
                aria-hidden
                className="absolute left-[14px] top-[42px] size-3 rounded-full border-4 border-[#edf3e8]"
                initial={false}
                animate={
                  isCurrent
                    ? {
                        backgroundColor: "#a3e635",
                        boxShadow: "0 0 12px 4px rgba(163,230,53,0.35)",
                        scale: 1.15,
                      }
                    : unlocked
                      ? {
                          backgroundColor: "#78966a",
                          boxShadow: "0 0 10px 3px rgba(120,150,106,0.2)",
                          scale: 1,
                        }
                      : {
                          backgroundColor: "#c8d6c4",
                          boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                          scale: 0.85,
                        }
                }
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="mt-8">
                <p className="font-mono text-[7px] text-[#5a7052]">
                  {step.number}
                </p>
                <h3 className="mt-2 text-xs font-medium text-[#31543a]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[9px] text-[#4a5b4e]">{step.period}</p>
                <p className="mt-3 text-[9px] leading-4 text-[#4a5b4e]">
                  {step.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
