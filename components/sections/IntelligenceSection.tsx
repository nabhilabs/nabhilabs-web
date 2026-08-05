import {
  Boxes,
  Crosshair,
  GitBranch,
  Layers3,
  Shapes,
  UserRound,
} from "lucide-react";
import { BullseyeOrb } from "@/components/ui/BullseyeOrb";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { PipelineFlow } from "@/components/ui/PipelineFlow";
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
      "We use intelligence where context and judgement benefit-not where novelty merely permits it.",
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
  { title: "Understand", copy: "We start at the core." },
  { title: "Connect", copy: "We map what matters." },
  { title: "Synthesize", copy: "We reveal the insight." },
  { title: "Build", copy: "We create what lasts." },
] as const;

export function IntelligenceSection() {
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="intelligence"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="relative z-10 lg:sticky lg:top-24 lg:self-start">
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

            <div className="mt-10 max-w-[13.5rem]">
              <BullseyeOrb
                center={<span className="select-none">n</span>}
                sizeClassName="aspect-square w-full"
              />
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

              return (
                <article
                  className="feature-lift relative grid w-full grid-cols-[2rem_3.5rem_1fr] items-start gap-3 rounded-2xl border border-[#d8e0d5] bg-white/60 px-4 py-4 md:px-5"
                  key={pillar.title}
                >
                  <span className="font-mono text-[10px] text-[#5a7052]">
                    0{index + 1}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full bg-[#09251a] text-[#cde0b8]">
                    <Icon className="size-6" strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium tracking-[-0.02em] text-[#0f1c13] md:text-lg">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[11px] leading-5 text-[#4a5b4e]">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-[28px] border border-[#d8e0d5] bg-white/35 p-6 md:grid-cols-[1.1fr_3fr] md:items-center">
          <div className="flex items-center gap-5">
            <span className="relative grid size-16 shrink-0 place-items-center rounded-full border border-[#5a7052]/20">
              <span className="bullseye-pulse absolute inset-[18%] rounded-full bg-[#78966a]/30" />
              <span className="relative size-7 rounded-full bg-[radial-gradient(circle,#78966a_0_20%,transparent_22%_100%)] shadow-[0_0_18px_5px_rgba(120,150,106,0.2)]" />
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

          <PipelineFlow steps={approach} />
        </div>
      </Reveal>
    </section>
  );
}
