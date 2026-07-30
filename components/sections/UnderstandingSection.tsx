import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Listen",
    prompt: "Absorb before you act.",
    description:
      "We listen deeply to understand the real problem, not just the surface noise.",
  },
  {
    title: "Observe",
    prompt: "Find patterns in complexity.",
    description:
      "We observe the system as a whole and identify the unseen patterns driving it.",
  },
  {
    title: "Simplify",
    prompt: "Remove what doesn’t matter.",
    description:
      "We strip away unnecessary complexity to uncover what truly matters.",
  },
  {
    title: "Build",
    prompt: "Build what’s inevitable.",
    description:
      "With clarity as our foundation, we build technology that feels natural, not forced.",
  },
] as const;

function ImageHolder({ label }: { label: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center rounded-[28px] border border-dashed border-[#bac7b7] bg-[radial-gradient(circle_at_50%_45%,rgba(205,224,184,0.55),rgba(255,255,255,0.35)_55%,transparent_75%)]">
      <span className="rounded-full border border-[#c8d6c4] bg-white/65 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
        [ {label} image ]
      </span>
    </div>
  );
}

export function UnderstandingSection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="understanding">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

          <div className="technical-grid relative min-h-[28rem] overflow-hidden rounded-[28px] border border-[#d8e0d5]/80 bg-white/35 md:min-h-[34rem]">
            <span className="absolute left-1/2 top-1/2 size-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5a7052]/15" />
            <span className="absolute left-1/2 top-1/2 size-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5a7052]/15" />
            <span className="absolute left-1/2 top-1/2 size-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5a7052]/20" />
            <span className="absolute left-1/2 top-1/2 h-px w-[90%] -translate-x-1/2 bg-[#5a7052]/10" />
            <span className="absolute left-1/2 top-1/2 h-[85%] w-px -translate-y-1/2 bg-[#5a7052]/10" />

            <div className="absolute left-1/2 top-1/2 z-10 w-44 -translate-x-1/2 -translate-y-1/2 md:w-52">
              <ImageHolder label="central portal" />
              <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.18em] text-[#5a7052]">
                [ Nabhi approach ]
              </p>
              <p className="mx-auto mt-2 max-w-48 text-center text-[10px] leading-4 text-[#4a5b4e]">
                Understanding is the starting point. Technology is the natural
                outcome.
              </p>
            </div>

            <div className="absolute left-[5%] top-[38%] max-w-28">
              <span className="mb-2 block size-2 rounded-full bg-[#6f9164]" />
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#0f1c13]">
                Uncertainty
              </p>
              <p className="mt-1 text-[9px] leading-4 text-[#4a5b4e]">
                Signals everywhere. Clarity nowhere.
              </p>
            </div>
            <div className="absolute right-[4%] top-[12%] max-w-28">
              <span className="mb-2 block size-2 rounded-full bg-[#6f9164]" />
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#0f1c13]">
                Complexity
              </p>
              <p className="mt-1 text-[9px] leading-4 text-[#4a5b4e]">
                Too many systems. Too many tools.
              </p>
            </div>
            <div className="absolute bottom-[18%] right-[3%] max-w-28">
              <span className="mb-2 block size-2 rounded-full bg-[#6f9164]" />
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#0f1c13]">
                Overwhelm
              </p>
              <p className="mt-1 text-[9px] leading-4 text-[#4a5b4e]">
                More technology. More confusion.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[#d8e0d5] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <article
              className="group border-b border-[#d8e0d5] p-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              key={principle.title}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] text-[#5a7052]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-[#0f1c13]">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-[#4a5b4e]">
                    {principle.prompt}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#5a7052]/50">+</span>
              </div>
              <div className="mt-5 transition-transform duration-500 group-hover:-translate-y-1">
                <ImageHolder label={principle.title} />
              </div>
              <p className="mt-5 text-[11px] leading-5 text-[#4a5b4e]">
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
