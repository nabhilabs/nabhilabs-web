"use client";

import { useState } from "react";
import {
  Boxes,
  Crosshair,
  GitBranch,
  Layers3,
  Shapes,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Systems Thinking",
    description:
      "We trace relationships, constraints, and consequences before isolating a feature.",
    icon: Boxes,
  },
  {
    title: "Human Behaviour",
    description:
      "We study how people decide, adapt, hesitate, and work around existing systems.",
    icon: UserRound,
  },
  {
    title: "AI Integration",
    description:
      "We use intelligence where context and judgement benefit—not where novelty merely permits it.",
    icon: GitBranch,
  },
  {
    title: "Design Engineering",
    description:
      "Interaction, information, and implementation are resolved as one connected discipline.",
    icon: Shapes,
  },
  {
    title: "Scalable Architecture",
    description:
      "Foundations remain understandable as teams, data, and responsibilities grow.",
    icon: Layers3,
  },
  {
    title: "Deep Research",
    description:
      "We keep listening until the visible request reveals the underlying need.",
    icon: Crosshair,
  },
] as const;

const approach = [
  ["Understand", "We start at the core."],
  ["Connect", "We map what matters."],
  ["Synthesize", "We reveal the insight."],
  ["Build", "We create what lasts."],
] as const;

export function IntelligenceSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="intelligence">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 620"
          >
            {[95, 190, 285, 380, 475, 570].map((targetY, index) => (
              <path
                d={`M 270 340 C 390 ${340 + index * 4}, 410 ${targetY}, 555 ${targetY}`}
                fill="none"
                key={targetY}
                stroke="rgba(90,112,82,0.18)"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="relative z-10">
            <ChapterTag>05 // Intelligence</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-[#4a5b4e]">
              How do you solve problems differently?
            </p>
            <span className="mt-5 block h-px w-6 bg-[#78966a]" />
            <h2 className="mt-8 max-w-xl font-display text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#0f1c13]">
              Intelligence is
              <br />
              how the parts
              <br />
              connect<span className="text-[#78966a]">.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[#4a5b4e]">
              We don&apos;t use intelligence as a feature. We use it as the
              foundation that connects every decision, every system, and every
              experience we build.
            </p>

            <div className="relative mt-12 h-44 w-44">
              <span className="absolute inset-0 rounded-full border border-[#5a7052]/15" />
              <span className="absolute inset-[18%] rounded-full border border-[#5a7052]/15" />
              <span className="absolute inset-[35%] rounded-full border border-[#5a7052]/20" />
              <span className="absolute inset-[40%] grid place-items-center rounded-full bg-[#78966a] font-display text-xl font-semibold text-white shadow-[0_0_28px_12px_rgba(120,150,106,0.26)]">
                n
              </span>
              <span className="absolute left-[7%] top-[35%] size-1.5 rounded-full bg-[#8fac79]" />
              <span className="absolute bottom-[10%] right-[25%] size-1 rounded-full bg-[#8fac79]" />
            </div>
            <p className="mt-5 border-l border-[#78966a] pl-5 font-mono text-[9px] leading-5 text-[#0f1c13]">
              Understanding in the center.
              <br />
              Intelligence in every connection.
            </p>
          </div>

          <div className="relative z-10 space-y-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = active === index;

              return (
                <button
                  aria-expanded={isActive}
                  className={`grid w-full grid-cols-[2rem_3.5rem_1fr_auto] items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-colors md:px-5 ${
                    isActive
                      ? "border-[#cad8c6] bg-[#edf3e8]"
                      : "border-[#d8e0d5] bg-white/35 hover:bg-white/60"
                  }`}
                  key={pillar.title}
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  suppressHydrationWarning
                  type="button"
                >
                  <span className="font-mono text-[10px] text-[#5a7052]">
                    0{index + 1}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full bg-[#09251a] text-[#cde0b8]">
                    <Icon className="size-6" strokeWidth={1.25} />
                  </span>
                  <span>
                    <span className="block font-display text-base font-medium tracking-[-0.02em] text-[#0f1c13] md:text-lg">
                      {pillar.title}
                    </span>
                    <motion.span
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="block overflow-hidden"
                      initial={false}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="block max-w-lg pt-2 text-[11px] leading-5 text-[#4a5b4e]">
                        {pillar.description}
                      </span>
                    </motion.span>
                  </span>
                  <span className="font-mono text-sm text-[#4a5b4e]">
                    {isActive ? "—" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-[28px] border border-[#d8e0d5] bg-white/35 p-6 md:grid-cols-[1.1fr_3fr] md:items-center">
          <div className="flex items-center gap-5">
            <span className="relative grid size-16 shrink-0 place-items-center rounded-full border border-[#5a7052]/20">
              <span className="size-7 rounded-full bg-[radial-gradient(circle,#78966a_0_20%,transparent_22%_100%)] shadow-[0_0_18px_5px_rgba(120,150,106,0.2)]" />
            </span>
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#5a7052]">
                Our approach
              </p>
              <p className="mt-2 text-[11px] leading-5 text-[#4a5b4e]">
                Every capability feeds the next.
                <br />
                Every connection creates clarity.
              </p>
            </div>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-4">
            <span className="absolute left-0 right-4 top-2 hidden h-px bg-[#c8d6c4] sm:block" />
            {approach.map(([title, copy], index) => (
              <div className="relative pt-6" key={title}>
                <span
                  className={`absolute left-0 top-0 size-4 rounded-full border ${
                    index === approach.length - 1
                      ? "border-[#78966a] bg-[#78966a] shadow-[0_0_12px_4px_rgba(120,150,106,0.25)]"
                      : "border-[#aebcac] bg-[#f7f6f1]"
                  }`}
                />
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#5a7052]">
                  {title}
                </p>
                <p className="mt-2 text-[10px] leading-4 text-[#4a5b4e]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
