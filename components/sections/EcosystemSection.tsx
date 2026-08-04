import { ArrowUpRight, Mic } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const capabilities = [
  {
    number: "01",
    category: "Products",
    title: "Digital Products",
    description: "Useful products shaped around real human needs.",
    visual: "products",
    span: "md:col-span-8",
    href: "/solutions/nabhi-persona",
  },
  {
    number: "02",
    category: "AI Engineering",
    title: "AI & RAG Engineering",
    description: "Retrieval and reasoning systems grounded in trusted context.",
    visual: "network",
    span: "md:col-span-4",
    href: "/services/rag-engineering",
  },
  {
    number: "03",
    category: "Platforms",
    title: "Healthcare & Web Systems",
    description: "Connected platforms that make care and operations clearer.",
    visual: "health",
    span: "md:col-span-4",
    href: "/industries/healthcare-ai",
  },
  {
    number: "04",
    category: "Identity",
    title: "Brand Systems",
    description: "Identity systems that make an organization easier to know.",
    visual: "identity",
    span: "md:col-span-4",
    href: "/#begin",
  },
  {
    number: "05",
    category: "Automation",
    title: "Internal Automation Tools",
    description: "Quiet infrastructure that removes repetitive complexity.",
    visual: "automation",
    span: "md:col-span-4",
    href: "/solutions/enterprise-knowledge-management",
  },
  {
    number: "06",
    category: "Voice & Agents",
    title: "Agentic Voice Workflows",
    description: "Natural conversations connected to useful action.",
    visual: "voice",
    span: "md:col-span-8",
    href: "/services/agentic-voice-workflows",
  },
] as const;

function CapabilityVisual({ type }: { type: string }) {
  if (type === "products") {
    return (
      <div className="absolute inset-0 grid place-items-center">
        {[0, 1, 2].map((layer) => (
          <span
            className="absolute h-24 w-36 rotate-[18deg] border border-[#79906f]/20 bg-white/25"
            key={layer}
            style={{
              transform: `translate(${layer * 11}px, ${layer * -12}px) rotate(18deg)`,
            }}
          />
        ))}
        <span className="relative ml-16 size-8 rotate-[18deg] bg-[#cde0b8]" />
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <span className="size-44 rounded-full bg-[repeating-conic-gradient(from_0deg,rgba(90,112,82,0.22)_0deg_1deg,transparent_1deg_9deg)] [mask-image:radial-gradient(circle,transparent_0_9%,black_10%_100%)]" />
        <span className="absolute size-3 rounded-full bg-[#8fac79] shadow-[0_0_30px_12px_rgba(143,172,121,0.35)]" />
      </div>
    );
  }

  if (type === "health") {
    return (
      <div className="absolute inset-0 grid place-items-center opacity-70">
        <div className="grid grid-cols-9 gap-1">
          {Array.from({ length: 81 }, (_, index) => {
            const row = Math.floor(index / 9);
            const column = index % 9;
            const active = row === 4 || column === 4;

            return (
              <span
                className={`size-1 rounded-full ${
                  active ? "bg-[#8fac79]" : "bg-[#8fac79]/15"
                }`}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (type === "identity") {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <span className="size-28 rounded-full border border-[#5a7052]/25" />
        <span className="absolute size-16 rounded-full border border-[#5a7052]/15" />
        <span className="absolute size-3 rounded-full bg-[#78966a] shadow-[0_0_20px_6px_rgba(120,150,106,0.28)]" />
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid rotate-[30deg] grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, index) => (
            <span
              className={`size-8 border border-[#5a7052]/15 ${
                index === 7 ? "bg-[#cde0b8]" : "bg-white/20"
              }`}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center">
      <div className="flex flex-1 items-center justify-center gap-[3px]">
        {Array.from({ length: 42 }, (_, index) => (
          <span
            className="w-px bg-[#8fac79]/60"
            key={index}
            style={{ height: `${6 + ((index * 13) % 35)}px` }}
          />
        ))}
      </div>
      <span className="mr-10 grid size-16 place-items-center rounded-full border border-[#78966a]/30">
        <span className="grid size-11 place-items-center rounded-full bg-[#cde0b8]">
          <Mic className="size-4 text-[#31543a]" />
        </span>
      </span>
    </div>
  );
}

export function EcosystemSection() {
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="capabilities"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>04 // What We Build</ChapterTag>
            <h2 className="mt-6 font-display text-[clamp(2.8rem,5.5vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#0f1c13]">
              One ecosystem.
              <br />
              Many useful forms<span className="text-[#78966a]">.</span>
            </h2>
            <p className="mt-5 max-w-lg section-copy text-[#4a5b4e]">
              Products, AI engineering, software, and systems—all consequences
              of the same philosophy.
            </p>

            <div className="ui-card mt-6 max-w-sm rounded-2xl border border-[#d8e0d5] bg-white/55 p-4">
              <p className="font-mono text-[9px] text-[#5a7052]">
                — &nbsp; What do you build?
              </p>
              <p className="mt-3 text-base leading-7 text-[#4a5b4e]">
                Different outputs. Same foundation. We build solutions that
                understand, connect, and create real impact.
              </p>
            </div>
          </div>

          <div>
            <div className="grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-3 md:grid-cols-12">
              {capabilities.map((capability, index) => (
                <StaggerReveal
                  className={`h-full ${capability.span}`}
                  index={index}
                  key={capability.title}
                >
                  <BentoCard className="ui-card relative h-full min-h-[12rem] overflow-hidden rounded-2xl border border-[#d8e0d5] bg-white/55 p-5 shadow-[0_10px_30px_rgba(26,51,35,0.04)]">
                    <div className="relative z-10 max-w-[62%]">
                      <p className="font-mono text-sm text-[#78966a]">
                        {capability.number}
                      </p>
                      <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                        [ {capability.category} ]
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.035em] text-[#0f1c13]">
                        {capability.title}
                      </h3>
                      <p className="mt-3 max-w-xs text-base leading-7 text-[#4a5b4e]">
                        {capability.description}
                      </p>
                    </div>

                    <div className="absolute inset-y-0 right-0 z-[1] w-[44%] opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                      <CapabilityVisual type={capability.visual} />
                    </div>
                    <a
                      aria-label={`Explore ${capability.title}`}
                      className="absolute bottom-5 right-5 z-20 grid size-8 place-items-center rounded-full border border-[#aebcac] bg-white/60 text-[#31543a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#a3e635] group-hover:bg-[#cde0b8]"
                      href={capability.href}
                    >
                      <ArrowUpRight className="size-3.5" />
                    </a>
                    <span className="bento-plus absolute right-4 top-3 z-10 font-mono text-xs text-[#5a7052]/50 transition-colors group-hover:text-[#78966a]">
                      +
                    </span>
                  </BentoCard>
                </StaggerReveal>
              ))}

              <StaggerReveal className="h-full md:col-span-4" index={6}>
                <BentoCard className="ui-card relative flex h-full min-h-[12rem] flex-col justify-center overflow-hidden rounded-2xl border border-[#d8e0d5] bg-white/40 p-6">
                  <span className="absolute -left-5 top-1/2 size-36 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
                  <span className="absolute left-5 top-1/2 size-20 -translate-y-1/2 rounded-full border border-[#5a7052]/15" />
                  <span className="absolute left-[3.7rem] top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#8fac79]" />
                  <div className="relative z-10 ml-24 sm:ml-28">
                    <p className="font-mono text-[8px] text-[#5a7052]">
                      Same foundation.
                    </p>
                    <p className="mt-3 font-display text-2xl leading-7 tracking-[-0.04em] text-[#0f1c13]">
                      Different outputs.
                      <br />
                      One outcome—
                      <span className="italic text-[#78966a]">clarity.</span>
                    </p>
                  </div>
                </BentoCard>
              </StaggerReveal>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.08em] text-[#4a5b4e]">
              <span className="size-2 rounded-full bg-[#8fac79]" />
              <span>Every capability. Same philosophy.</span>
              <span>Understanding first. Technology second.</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
