import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    image: "/assets/what-we-build/Digital Products.webp",
    aspect: "aspect-[16/9]",
    span: "md:col-span-8",
    href: "/services",
  },
  {
    number: "02",
    category: "AI Engineering",
    title: "AI & RAG Engineering",
    description: "Retrieval and reasoning systems grounded in trusted context.",
    image: "/assets/what-we-build/AI & RAG Engineering.webp",
    aspect: "aspect-[16/9]",
    span: "md:col-span-4",
    href: "/services/rag-engineering",
  },
  {
    number: "03",
    category: "Platforms",
    title: "Nabhi Cares",
    description: "Healthcare AI that makes care and operations clearer.",
    image: "/assets/what-we-build/Nabhi Cares.webp",
    aspect: "aspect-[4/3]",
    span: "md:col-span-4",
    href: "/products/nabhi-cares",
  },
  {
    number: "04",
    category: "Identity",
    title: "Brand Systems",
    description: "Identity systems that make an organization easier to know.",
    image: "/assets/what-we-build/Brand Systems.webp",
    aspect: "aspect-square",
    span: "md:col-span-4",
    href: "/contact",
  },
  {
    number: "05",
    category: "Automation",
    title: "Internal Automation Tools",
    description: "Quiet infrastructure that removes repetitive complexity.",
    image: "/assets/what-we-build/Internal Automation Tools.webp",
    aspect: "aspect-[4/3]",
    span: "md:col-span-4",
    href: "/services/enterprise-knowledge-management",
  },
  {
    number: "06",
    category: "Voice & Agents",
    title: "Agentic Voice Workflows",
    description: "Natural conversations connected to useful action.",
    image: "/assets/what-we-build/Agentic Voice Workflows.webp",
    aspect: "aspect-[16/9]",
    span: "md:col-span-8",
    href: "/services/agentic-voice-workflows",
  },
] as const;

function assetSrc(path: string) {
  const slash = path.lastIndexOf("/");
  const dir = path.slice(0, slash + 1);
  const file = path.slice(slash + 1);
  return `${dir}${encodeURIComponent(file)}`;
}

export function EcosystemSection() {
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="capabilities"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div className="max-w-3xl">
            <ChapterTag>03 // What We Build</ChapterTag>
            <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#0f1c13]">
              One ecosystem.
              <br />
              Many useful forms
              <span className="text-[#78966a]">.</span>
            </h2>
          </div>
          <p className="max-w-sm pb-1 text-sm leading-7 text-[#4a5b4e] sm:text-right">
            Products, AI engineering, software, and systems—all consequences of
            the same philosophy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-2 md:mt-12 md:grid-cols-12">
          {capabilities.map((capability, index) => (
            <StaggerReveal
              className={`h-full ${capability.span}`}
              index={index}
              key={capability.title}
            >
              <BentoCard className="relative flex h-full min-h-[14rem] flex-col overflow-hidden rounded-2xl border border-black/5 bg-[#F8F8F6] p-5 shadow-[0_10px_30px_rgba(26,51,35,0.04)] transition-[border-color,background-color,transform] duration-300 ease-out hover:border-emerald-600/30 hover:bg-[#f3f4f1]">
                <div className="relative z-10 max-w-[58%]">
                  <p className="font-mono text-sm text-[#78966a]">
                    {capability.number}
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#525252]">
                    [ {capability.category} ]
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.035em] text-[#0f1c13]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[#333333]">
                    {capability.description}
                  </p>
                </div>

                <div
                  className={`pointer-events-none absolute bottom-3 right-3 z-[1] w-[52%] ${capability.aspect}`}
                >
                  <Image
                    alt=""
                    aria-hidden
                    className="object-contain object-right-bottom transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    fill
                    sizes="(max-width: 768px) 55vw, 28vw"
                    src={assetSrc(capability.image)}
                  />
                </div>

                <a
                  aria-label={`Explore ${capability.title}`}
                  className="absolute bottom-5 right-5 z-20 grid size-8 place-items-center rounded-full border border-[#aebcac] bg-white/70 text-[#31543a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-emerald-600/40 group-hover:bg-[#cde0b8]"
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
            <BentoCard className="relative flex h-full min-h-[14rem] flex-col justify-center overflow-hidden rounded-2xl border border-black/5 bg-[#F8F8F6]/80 p-6 transition-[border-color] duration-300 hover:border-emerald-600/30">
              <span className="absolute -left-5 top-1/2 size-36 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
              <span className="absolute left-5 top-1/2 size-20 -translate-y-1/2 rounded-full border border-[#5a7052]/15" />
              <span className="absolute left-[3.7rem] top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#8fac79]" />
              <div className="relative z-10 ml-24 sm:ml-28">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#525252]">
                  Same foundation.
                </p>
                <p className="mt-4 font-display text-2xl leading-7 tracking-[-0.04em] text-[#0f1c13]">
                  Different outputs.
                  <br />
                  One outcome—
                  <span className="italic text-[#78966a]">clarity.</span>
                </p>
              </div>
            </BentoCard>
          </StaggerReveal>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5a7052]">
          Every capability. Same philosophy. Understanding first. Technology
          second.
        </p>
      </Reveal>
    </section>
  );
}
