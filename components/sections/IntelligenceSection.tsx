import {
  Boxes,
  Crosshair,
  GitBranch,
  Layers3,
  Shapes,
  UserRound,
} from "lucide-react";
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
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="intelligence"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-10 md:px-10 md:py-14">
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative z-10 lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>05 // Intelligence</ChapterTag>
            <p className="mt-5 font-mono text-[10px] text-[#4a5b4e]">
              How do you solve problems differently?
            </p>
            <span className="mt-4 block h-px w-6 bg-[#78966a]" />
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#0f1c13]">
              Intelligence is
              <br />
              how the parts
              <br />
              connect<span className="text-[#78966a]">.</span>
            </h2>
            <p className="mt-5 max-w-md section-copy text-[#4a5b4e]">
              We don&apos;t use intelligence as a feature. We use it as the
              foundation that connects every decision, every system, and every
              experience we build.
            </p>

            <p className="mt-6 border-l-2 border-[#78966a] pl-4 font-mono text-[11px] leading-5 text-[#0f1c13]">
              Understanding in the center.
              <br />
              Intelligence in every connection.
            </p>
          </div>

          <div className="relative z-10 space-y-2.5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  className="ui-card relative grid w-full grid-cols-[2rem_3.25rem_1fr] items-start gap-3 rounded-2xl border border-[#d8e0d5] bg-white/70 px-4 py-4 md:px-5"
                  key={pillar.title}
                >
                  <span className="font-mono text-[11px] text-[#5a7052]">
                    0{index + 1}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-[#09251a] text-[#cde0b8]">
                    <Icon className="size-5" strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-[#0f1c13]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-[#4a5b4e]">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d8e0d5] bg-white/55 p-5 md:p-7">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#5a7052]">
                Our approach
              </p>
              <p className="mt-2 max-w-md section-copy text-[#4a5b4e]">
                Every capability feeds the next. Every connection creates
                clarity.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[#78966a]">
              Listen → Connect → Synthesize → Build
            </span>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-4">
            <span className="pipeline-rail absolute left-[12%] right-[12%] top-5 hidden h-[2px] sm:block" />
            {approach.map(([title, copy], index) => (
              <div
                className="ui-card pipeline-step rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1]/80 p-4 pt-5"
                key={title}
              >
                <span
                  className={`relative z-10 mb-4 flex size-5 items-center justify-center rounded-full border text-[9px] font-mono ${
                    index === approach.length - 1
                      ? "border-[#78966a] bg-[#78966a] text-white shadow-[0_0_12px_4px_rgba(120,150,106,0.25)]"
                      : "border-[#aebcac] bg-white text-[#5a7052]"
                  }`}
                >
                  {index + 1}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5a7052]">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-5 text-[#4a5b4e]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
