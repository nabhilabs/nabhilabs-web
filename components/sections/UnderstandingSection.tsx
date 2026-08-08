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
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#4a5b4e]">
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
            className="relative mx-auto aspect-square w-full max-w-[48rem] lg:-mt-16 lg:-mb-32 xl:-mt-24"
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
      </Reveal>
    </section>
  );
}
