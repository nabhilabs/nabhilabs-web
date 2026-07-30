import { ArrowUpRight, Mic } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    number: "01",
    category: "Products",
    title: "Digital Products",
    description: "Useful products shaped around real human needs.",
    visual: "products",
    span: "md:col-span-6",
  },
  {
    number: "02",
    category: "AI Engineering",
    title: "AI & RAG Engineering",
    description: "Retrieval and reasoning systems grounded in trusted context.",
    visual: "network",
    span: "md:col-span-6",
  },
  {
    number: "03",
    category: "Platforms",
    title: "Healthcare & Web Systems",
    description: "Connected platforms that make care and operations clearer.",
    visual: "health",
    span: "md:col-span-4",
  },
  {
    number: "04",
    category: "Identity",
    title: "Brand Systems",
    description: "Identity systems that make an organization easier to know.",
    visual: "identity",
    span: "md:col-span-4",
  },
  {
    number: "05",
    category: "Automation",
    title: "Internal Automation Tools",
    description: "Quiet infrastructure that removes repetitive complexity.",
    visual: "automation",
    span: "md:col-span-4",
  },
  {
    number: "06",
    category: "Voice & Agents",
    title: "Agentic Voice Workflows",
    description: "Natural conversations connected to useful action.",
    visual: "voice",
    span: "md:col-span-8",
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
    <section className="relative z-10 bg-[#f7f6f1]" id="capabilities">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.55fr_0.45fr] lg:items-center">
          <div>
            <ChapterTag>04 // What We Build</ChapterTag>
            <h2 className="mt-7 font-display text-[clamp(3rem,6vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#0f1c13]">
              One ecosystem.
              <br />
              Many useful forms<span className="text-[#78966a]">.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-6 text-[#4a5b4e]">
              Products, AI engineering, software, and systems—all consequences
              of the same philosophy.
            </p>
          </div>

          <div className="lg:pt-10">
            <p className="font-mono text-[9px] text-[#5a7052]">
              — &nbsp; What do you build?
            </p>
            <p className="mt-5 text-xs leading-5 text-[#4a5b4e]">
              Different outputs. Same foundation.
              <br />
              We build solutions that understand, connect, and create real
              impact.
            </p>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-52 lg:block">
            <span className="absolute inset-0 rounded-full border border-[#5a7052]/15" />
            <span className="absolute inset-[18%] rounded-full border border-[#5a7052]/15" />
            <span className="absolute inset-[37%] rounded-full border border-[#5a7052]/20" />
            <span className="absolute inset-[46%] rounded-full bg-[#cde0b8] shadow-[0_0_28px_10px_rgba(205,224,184,0.35)]" />
            <span className="absolute left-[12%] top-[30%] size-1.5 rounded-full bg-[#78966a]" />
            <span className="absolute right-[9%] top-[20%] size-1 rounded-full bg-[#78966a]" />
            <span className="absolute bottom-[13%] right-[32%] size-1.5 rounded-full bg-[#78966a]" />
          </div>
        </div>

        <div className="mt-12 grid gap-2 md:grid-cols-12">
          {capabilities.map((capability) => (
            <article
              className={`group relative min-h-52 overflow-hidden rounded-2xl border border-[#d8e0d5] bg-white/45 p-5 shadow-[0_10px_30px_rgba(26,51,35,0.04)] transition-colors hover:bg-white/70 ${capability.span}`}
              key={capability.title}
            >
              <div className="relative z-10 max-w-[58%]">
                <p className="font-mono text-sm text-[#78966a]">
                  {capability.number}
                </p>
                <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                  [ {capability.category} ]
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.035em] text-[#0f1c13]">
                  {capability.title}
                </h3>
                <p className="mt-3 max-w-52 text-[11px] leading-5 text-[#4a5b4e]">
                  {capability.description}
                </p>
              </div>

              <div className="absolute inset-y-0 right-0 w-[48%] opacity-80 transition-opacity group-hover:opacity-100">
                <CapabilityVisual type={capability.visual} />
              </div>
              <a
                aria-label={`Explore ${capability.title}`}
                className="absolute bottom-5 right-5 z-20 grid size-8 place-items-center rounded-full border border-[#aebcac] bg-white/60 text-[#31543a] transition-colors hover:bg-[#cde0b8]"
                href="#begin"
              >
                <ArrowUpRight className="size-3.5" />
              </a>
              <span className="absolute right-4 top-3 font-mono text-xs text-[#5a7052]/50">
                +
              </span>
            </article>
          ))}

          <article className="relative min-h-52 overflow-hidden rounded-2xl border border-[#d8e0d5] bg-white/30 p-6 md:col-span-4">
            <span className="absolute -left-5 top-1/2 size-36 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
            <span className="absolute left-5 top-1/2 size-20 -translate-y-1/2 rounded-full border border-[#5a7052]/15" />
            <span className="absolute left-[3.7rem] top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#8fac79]" />
            <div className="relative ml-28 mt-7">
              <p className="font-mono text-[8px] text-[#5a7052]">
                Same foundation.
              </p>
              <p className="mt-4 font-display text-2xl leading-7 tracking-[-0.04em] text-[#0f1c13]">
                Different outputs.
                <br />
                One outcome—
                <span className="italic text-[#78966a]">clarity.</span>
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[8px] tracking-[0.08em] text-[#4a5b4e]">
          <span className="size-2 rounded-full bg-[#8fac79]" />
          <span>Every capability. Same philosophy.</span>
          <span>Understanding first. Technology second.</span>
        </div>
      </Reveal>
    </section>
  );
}
