"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
import { applyPointerTilt, clearPointerTilt } from "@/lib/pointer-tilt";

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

function curvePath(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  index: number,
) {
  const dx = x1 - x0;
  const c1x = x0 + dx * 0.38;
  const c1y = y0 + (index - 2.5) * 4;
  const c2x = x0 + dx * 0.52;
  return `M ${x0} ${y0} C ${c1x} ${c1y}, ${c2x} ${y1}, ${x1} ${y1}`;
}

export function IntelligenceSection() {
  const [active, setActive] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [lines, setLines] = useState<{ d: string; key: number }[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const grid = gridRef.current;
    const copy = copyRef.current;
    const list = listRef.current;
    if (!grid || !copy || !list) return;

    const update = () => {
      const g = grid.getBoundingClientRect();
      const c = copy.getBoundingClientRect();
      if (g.width === 0 || g.height === 0) return;

      setSvgSize({ w: g.width, h: g.height });

      const ends = cardRefs.current.flatMap((card, index) => {
        if (!card) return [];
        const r = card.getBoundingClientRect();
        // Aim at the title row (number/icon), not the expanded body
        const endX = r.left - g.left;
        const endY = r.top + 36 - g.top;
        return [{ endX, endY, index }];
      });

      if (ends.length === 0) return;

      // Hub: left column, vertically midway between first and last card
      const originX = c.left + c.width * 0.42 - g.left;
      const originY = (ends[0].endY + ends[ends.length - 1].endY) / 2;

      setLines(
        ends.map(({ endX, endY, index }) => ({
          d: curvePath(originX, originY, endX, endY, index),
          key: index,
        })),
      );
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(grid);
    ro.observe(list);
    cardRefs.current.forEach((card) => card && ro.observe(card));
    window.addEventListener("resize", update);

    let raf = 0;
    let frames = 0;
    const tick = () => {
      update();
      frames += 1;
      if (frames < 36) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="intelligence"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div
          className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          ref={gridRef}
        >
          {svgSize.w > 0 && (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
            >
              {lines.map((line) => (
                <path
                  d={line.d}
                  fill="none"
                  key={line.key}
                  stroke="rgba(90,112,82,0.22)"
                  strokeWidth="1"
                />
              ))}
            </svg>
          )}

          <div className="relative z-10 lg:sticky lg:top-24 lg:self-start">
            <div ref={copyRef}>
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
            </div>

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

          <div className="relative z-10 space-y-2" ref={listRef}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = active === index;

              return (
                <button
                  aria-expanded={isActive}
                  className={`tilt-surface group relative grid w-full grid-cols-[2rem_3.5rem_1fr_auto] items-center gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-left md:px-5 ${
                    isActive
                      ? "border-[#a3e635]/50 bg-[#edf3e8] shadow-[0_12px_32px_rgba(26,51,35,0.06)]"
                      : "border-[#d8e0d5] bg-white/35 hover:border-[#cad8c6] hover:bg-white/60"
                  }`}
                  data-active={isActive ? "true" : "false"}
                  key={pillar.title}
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={clearPointerTilt}
                  onMouseMove={applyPointerTilt}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
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
                  <span
                    className={`bento-plus font-mono text-sm text-[#4a5b4e] ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
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
