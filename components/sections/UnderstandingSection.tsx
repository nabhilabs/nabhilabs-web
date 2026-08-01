import Image from "next/image";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Listen",
    prompt: "Absorb before you act.",
    description:
      "We listen deeply to understand the real problem, not just the surface noise.",
    image: "/assets/01_listen.png",
  },
  {
    title: "Observe",
    prompt: "Find patterns in complexity.",
    description:
      "We observe the system as a whole and identify the unseen patterns driving it.",
    image: "/assets/02_observe.png",
  },
  {
    title: "Simplify",
    prompt: "Remove what doesn't matter.",
    description:
      "We strip away unnecessary complexity to uncover what truly matters.",
    image: "/assets/03_simplify.png",
  },
  {
    title: "Build",
    prompt: "Build what's inevitable.",
    description:
      "With clarity as our foundation, we build technology that feels natural, not forced.",
    image: "/assets/04_build.png",
  },
] as const;

const philosophyLayers = [
  {
    src: "/assets/Philosophy/OL 2.svg",
    className: "philosophy-spin-cw",
  },
  {
    src: "/assets/Philosophy/OL 1.svg",
    className: "philosophy-spin-ccw",
  },
  {
    src: "/assets/Philosophy/OL 0.svg",
    className: "philosophy-spin-cw-mid",
  },
  {
    src: "/assets/Philosophy/Middle Circle.svg",
    className: "philosophy-spin-cw-fast",
  },
  {
    src: "/assets/Philosophy/Inner Circle.svg",
    className: "philosophy-spin-ccw-fast",
  },
  {
    src: "/assets/Philosophy/Main Object.svg",
    className: "",
  },
  {
    src: "/assets/Philosophy/Main Object Floatings.svg",
    className: "philosophy-float",
  },
] as const;

export function UnderstandingSection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="understanding">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <ChapterTag>02 // Philosophy</ChapterTag>
            <p className="mt-5 font-mono text-[10px] text-[#4a5b4e]">
              How do you think?
            </p>
            <h2 className="mt-8 max-w-2xl text-balance font-display text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[#0f1c13]">
              Ununderstood tech creates noise.
              <span className="mt-4 block">
                Grounded tech creates{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-1 h-[45%] rounded-lg bg-[#cde0b8]" />
                  <span className="relative">clarity.</span>
                </span>
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#4a5b4e]">
              We don&apos;t rush to build. We first understand, so what we
              build truly matters.
            </p>
          </div>

          <div
            aria-label="Nabhi philosophy diagram"
            className="relative mx-auto aspect-square w-full max-w-[48rem] lg:-mt-16 lg:-mb-32 xl:-mt-24"
          >
            {philosophyLayers.map((layer, index) => (
              <div
                className={`absolute inset-0 ${layer.className}`}
                key={layer.src}
                style={{ zIndex: index + 1 }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                  src={layer.src}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {principles.map((principle, index) => (
            <article className="group flex flex-col" key={principle.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] text-[#5a7052]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-[#0f1c13]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[10px] leading-4 text-[#4a5b4e]">
                    {principle.prompt}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#5a7052]/40">+</span>
              </div>

              <div
                className="philosophy-float relative mx-auto mt-8 aspect-square w-full max-w-[13.5rem]"
                style={{ animationDelay: `${index * 0.55}s` }}
              >
                <Image
                  alt={principle.title}
                  className="object-contain object-center"
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 60vw, 220px"
                  src={principle.image}
                />
              </div>

              <p className="mt-8 max-w-[15rem] text-[11px] leading-5 text-[#4a5b4e]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid items-center gap-5 rounded-[24px] border border-[#d8e0d5] bg-white/45 px-6 py-5 md:grid-cols-[1.5fr_repeat(3,auto)]">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
              This is our promise
            </p>
            <p className="mt-2 font-display text-lg tracking-[-0.02em] text-[#0f1c13]">
              You won&apos;t just get a solution. You&apos;ll get clarity you
              can rely on.
            </p>
          </div>
          {["Deep Understanding", "Purposeful Technology", "Lasting Impact"].map(
            (item) => (
              <span
                className="border-t border-[#d8e0d5] pt-3 font-mono text-[9px] text-[#4a5b4e] md:border-l md:border-t-0 md:pl-5 md:pt-0"
                key={item}
              >
                {item} &nbsp; +
              </span>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}
