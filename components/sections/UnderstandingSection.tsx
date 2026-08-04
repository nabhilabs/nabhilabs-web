import { PhilosophySteps } from "@/components/sections/PhilosophySteps";
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
    alt: "Outer philosophy orbit ring",
  },
  {
    src: "/assets/Philosophy/OL 1.svg",
    className: "philosophy-spin-ccw",
    alt: "Second philosophy orbit ring",
  },
  {
    src: "/assets/Philosophy/OL 0.svg",
    className: "philosophy-spin-cw-mid",
    alt: "Third philosophy orbit ring",
  },
  {
    src: "/assets/Philosophy/Middle Circle.svg",
    className: "philosophy-spin-cw-fast",
    alt: "Middle philosophy ring",
  },
  {
    src: "/assets/Philosophy/Inner Circle.svg",
    className: "philosophy-spin-ccw-fast",
    alt: "Inner philosophy ring",
  },
  {
    src: "/assets/Philosophy/main-object.webp",
    className: "",
    alt: "Nabhi philosophy core symbol",
  },
  {
    src: "/assets/Philosophy/Main Object Floatings.svg",
    className: "philosophy-float",
    alt: "Floating accents around the Nabhi philosophy core",
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
            <p className="mt-7 max-w-lg section-copy text-[#4a5b4e]">
              We don&apos;t rush to build. We first understand, so what we
              build truly matters. Nabhi Labs listens, observes, simplifies, and
              then builds—guided by{" "}
              <a
                className="underline decoration-[#c8d6c4] underline-offset-2 hover:text-[#0f1c13]"
                href="https://en.wikipedia.org/wiki/Systems_thinking"
                rel="noopener noreferrer"
                target="_blank"
              >
                systems thinking
              </a>{" "}
              so technology follows clarity rather than creating more noise.
            </p>
          </div>

          <div
            aria-label="Nabhi philosophy diagram"
            className="relative mx-auto aspect-square w-full max-w-[42rem] lg:-mt-8 lg:-mb-16"
          >
            {philosophyLayers.map((layer, index) => (
              <div
                className={`absolute inset-0 ${layer.className}`}
                key={layer.src}
                style={{ zIndex: index + 1 }}
              >
                <img
                  alt={layer.alt}
                  className="h-full w-full object-contain"
                  decoding="async"
                  height={800}
                  loading="lazy"
                  src={layer.src}
                  width={800}
                />
              </div>
            ))}
          </div>
        </div>

        <PhilosophySteps principles={principles} />

        <div className="mt-8 grid gap-3 rounded-[24px] border border-[#d8e0d5] bg-white/70 p-3 md:grid-cols-[1.1fr_repeat(3,1fr)] md:items-stretch">
          <div className="flex flex-col justify-center rounded-2xl bg-[#edf3e8] px-5 py-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
              This is our promise
            </p>
            <p className="mt-3 font-display text-xl leading-snug tracking-[-0.02em] text-[#0f1c13] md:text-2xl">
              You won&apos;t just get a solution. You&apos;ll get clarity you
              can rely on.
            </p>
          </div>
          {[
            {
              title: "Deep Understanding",
              copy: "Go beyond the surface to what is real.",
            },
            {
              title: "Purposeful Technology",
              copy: "Every choice has a reason—not a default.",
            },
            {
              title: "Lasting Impact",
              copy: "Built to adapt, scale, and stay clear.",
            },
          ].map((item) => (
            <div
              className="ui-card flex flex-col justify-center rounded-2xl border border-[#d8e0d5] bg-white/80 px-4 py-5"
              key={item.title}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#31543a]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">{item.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
