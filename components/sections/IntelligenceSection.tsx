import { ChapterTag } from "@/components/ui/ChapterTag";
import { ApproachPipeline } from "@/components/ui/ApproachPipeline";
import { Reveal } from "@/components/ui/Reveal";
import { IntelligenceCardSwap } from "@/components/sections/IntelligenceCardSwap";

const approach = [
  {
    title: "Understand",
    copy: "We start at the core.",
    image: "/assets/our-approach/understand.png",
    imageAlt: "Quiet desk work representing deep understanding",
  },
  {
    title: "Connect",
    copy: "We map what matters.",
    image: "/assets/our-approach/connect.png",
    imageAlt: "Collaborators mapping relationships and context",
  },
  {
    title: "Synthesize",
    copy: "We reveal the insight.",
    image: "/assets/our-approach/sythensize.png",
    imageAlt: "Notes and sketches coming together into clarity",
  },
  {
    title: "Build",
    copy: "We create what lasts.",
    image: "/assets/our-approach/build.png",
    imageAlt: "Careful craftsmanship building lasting systems",
  },
] as const;

export function IntelligenceSection() {
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="intelligence"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 pt-12 pb-4 md:px-10 md:pt-16 md:pb-5">
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
          </div>

          <div className="relative z-10 min-h-[min(82vh,52rem)] overflow-visible">
            <IntelligenceCardSwap />
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-[#d8e0d5] bg-white/55 px-7 pb-5 pt-7 shadow-[0_18px_50px_rgba(26,51,35,0.05)] md:mt-12 md:px-9 md:pb-6 md:pt-9 lg:px-10 lg:pb-7 lg:pt-10">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
              Our approach
            </p>
            <h3 className="mt-5 font-display text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0f1c13]">
              Understand how we work
              <span className="text-[#78966a]">.</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#4a5b4e] md:text-[15px] md:leading-7">
              A connected process where every stage
              <br className="hidden sm:block" />
              adds context to the next.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <ApproachPipeline steps={approach} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
