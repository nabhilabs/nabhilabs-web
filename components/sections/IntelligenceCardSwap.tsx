"use client";

import {
  Boxes,
  Crosshair,
  GitBranch,
  Layers3,
  Shapes,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Card, CardSwap } from "@/components/ui/CardSwap";

const pillars: readonly {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
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
];

export function IntelligenceCardSwap() {
  return (
    <div className="relative min-h-[min(82vh,52rem)] w-full overflow-visible">
      {/* Stage atmosphere behind the stack */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[8%] rounded-[2rem] bg-[radial-gradient(ellipse_at_70%_60%,rgba(205,224,184,0.35)_0%,transparent_58%),radial-gradient(#d8e0d5_1px,transparent_1px)] opacity-70 [background-size:auto,18px_18px]"
      />

      <CardSwap
        anchor="corner"
        cardDistance={90}
        className="!translate-x-[2%] !translate-y-[6%] max-[768px]:!translate-x-[4%] max-[768px]:!translate-y-[8%] max-[768px]:!scale-[0.88] max-[480px]:!scale-[0.78]"
        delay={2600}
        easing="linear"
        height="min(68vh, 40rem)"
        pauseOnHover
        skewAmount={5}
        verticalDistance={96}
        width="min(54vw, 42rem)"
      >
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Card className="overflow-hidden p-0" key={pillar.title}>
              <div className="relative flex h-full flex-col overflow-hidden bg-[#f7f6f1] p-8 sm:p-10 md:p-12">
                {/* Card surface depth */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,#ffffff_0%,#f7f6f1_48%,#eef3ea_100%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(#c8d6c4_1px,transparent_1px)] opacity-40 [background-size:20px_20px]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-[radial-gradient(circle,rgba(205,224,184,0.55)_0%,transparent_70%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-24 -left-10 size-64 rounded-full bg-[radial-gradient(circle,rgba(120,150,106,0.18)_0%,transparent_72%)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-8 top-1/2 size-28 -translate-y-1/2 rounded-full border border-[#5a7052]/12"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-14 top-1/2 size-16 -translate-y-1/2 rounded-full border border-[#5a7052]/15"
                />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="grid size-16 place-items-center rounded-full bg-[#09251a] text-[#cde0b8] shadow-[0_0_28px_8px_rgba(205,224,184,0.22)] sm:size-[4.5rem] md:size-20">
                    <Icon className="size-8 sm:size-9 md:size-10" strokeWidth={1.2} />
                  </span>
                  <span className="font-mono text-sm tabular-nums text-[#5a7052] md:text-base">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="relative z-10 mt-10 font-display text-[clamp(2rem,3.6vw,3.15rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
                  {pillar.title}
                </h3>
                <p className="relative z-10 mt-5 max-w-xl text-base leading-relaxed text-[#333333] sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                  {pillar.description}
                </p>

                <div className="relative z-10 mt-auto flex items-end justify-between gap-4 pt-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#78966a] sm:text-xs">
                    Intelligence pillar
                  </span>
                  <span
                    aria-hidden
                    className="mb-1 size-2 rounded-full bg-[#78966a] shadow-[0_0_12px_4px_rgba(120,150,106,0.35)]"
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </CardSwap>
    </div>
  );
}
