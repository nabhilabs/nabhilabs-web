import { BarChart3, Box, Grid3X3, GitBranch, Search } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const contextSteps = [
  {
    title: "Research",
    copy: "Find what matters.",
    icon: Search,
  },
  {
    title: "Decisions",
    copy: "Choose with confidence.",
    icon: GitBranch,
  },
  {
    title: "Patterns",
    copy: "See what repeats.",
    icon: Grid3X3,
  },
] as const;

export function ProofSection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="proof">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.55fr_0.4fr] lg:items-start">
          <div>
            <ChapterTag>06 // Proof</ChapterTag>
            <h2 className="mt-7 font-display text-[clamp(3.4rem,6.5vw,7rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[#0f1c13]">
              Evidence,
              <br />
              without theatre<span className="text-[#78966a]">.</span>
            </h2>
          </div>

          <div className="lg:pt-14">
            <p className="font-mono text-[9px] text-[#5a7052]">
              Why should I trust you?
            </p>
            <span className="mt-4 block h-px w-8 bg-[#78966a]" />
            <p className="mt-5 max-w-xs text-xs leading-6 text-[#4a5b4e]">
              Selected systems where clearer information created more useful
              decisions.
            </p>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-52 lg:block">
            <span className="absolute inset-0 rounded-full border border-[#5a7052]/12" />
            <span className="absolute inset-[16%] rounded-full border border-[#5a7052]/12" />
            <span className="absolute inset-[32%] rounded-full border border-[#5a7052]/15" />
            <span className="absolute inset-[43%] rounded-full bg-[#78966a] shadow-[0_0_28px_12px_rgba(120,150,106,0.26)]" />
            <span className="absolute left-[10%] top-[29%] size-1 rounded-full bg-[#78966a]" />
            <span className="absolute bottom-[8%] right-[28%] size-1.5 rounded-full bg-[#8fac79]" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
          <article>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
              [ Selected Work // Knowledge ]
            </p>
            <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.035em] text-[#0f1c13]">
              Institutional knowledge, made active.
            </h3>
            <p className="mt-3 max-w-xl text-xs leading-6 text-[#4a5b4e]">
              We help organizations turn scattered information into connected
              understanding—so every decision is backed by clarity, not chance.
            </p>

            <div className="relative mt-7 min-h-[19rem] overflow-hidden rounded-2xl border border-[#31543a] bg-[radial-gradient(circle_at_12%_50%,#123b28_0%,#0b2c1d_35%,#061b12_100%)] p-5 shadow-[0_18px_50px_rgba(4,22,13,0.18)]">
              <p className="relative z-20 font-mono text-[8px] uppercase tracking-[0.16em] text-[#cde0b8]/75">
                Context map
              </p>

              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-50"
                preserveAspectRatio="none"
                viewBox="0 0 800 320"
              >
                {Array.from({ length: 18 }, (_, index) => (
                  <path
                    d={`M 25 ${65 + index * 10} C 170 ${15 + ((index * 31) % 230)}, 530 ${45 + ((index * 43) % 220)}, 765 160`}
                    fill="none"
                    key={index}
                    stroke="rgba(205,224,184,0.2)"
                    strokeWidth="0.7"
                  />
                ))}
              </svg>

              <div className="absolute left-[4%] top-1/2 size-36 -translate-y-1/2">
                {Array.from({ length: 28 }, (_, index) => (
                  <span
                    className="absolute size-1 rounded-full bg-[#cde0b8]"
                    key={index}
                    style={{
                      left: `${8 + ((index * 37) % 86)}%`,
                      opacity: 0.25 + ((index * 11) % 60) / 100,
                      top: `${8 + ((index * 53) % 86)}%`,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-y-[15%] left-[29%] right-[17%] z-10 grid grid-cols-3 gap-4">
                {contextSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      className="flex flex-col justify-center rounded-xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
                      key={step.title}
                      style={{
                        transform: `translateY(${index % 2 === 0 ? -5 : 5}px)`,
                      }}
                    >
                      <Icon className="size-5 text-[#cde0b8]" strokeWidth={1.2} />
                      <h4 className="mt-5 text-xs text-white/85">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-[9px] leading-4 text-white/45">
                        {step.copy}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="absolute right-[4%] top-1/2 grid size-20 -translate-y-1/2 place-items-center rounded-full border border-[#cde0b8]/20">
                <span className="size-7 rounded-full bg-[#cde0b8] shadow-[0_0_24px_10px_rgba(205,224,184,0.45)]" />
              </div>

              <div className="absolute inset-x-5 bottom-4 flex justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-[#cde0b8]/55">
                <span>Scattered</span>
                <span>Connected</span>
                <span>Clarity</span>
              </div>
            </div>
          </article>

          <div className="grid border-l-0 border-[#d8e0d5] lg:border-l">
            <article className="grid grid-cols-[5rem_1fr] gap-6 border-b border-[#d8e0d5] p-5 lg:p-8">
              <span className="grid size-20 place-items-center rounded-2xl border border-[#d8e0d5] bg-white/40 text-[#78966a]">
                <Box className="size-8" strokeWidth={1.2} />
              </span>
              <div>
                <p className="font-display text-6xl font-medium tracking-[-0.065em] text-[#0f1c13]">
                  50+
                </p>
                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                  Models tailored
                </p>
                <p className="mt-4 max-w-xs text-[10px] leading-5 text-[#4a5b4e]">
                  Purpose-built for unique contexts across industries.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-[5rem_1fr] gap-6 p-5 lg:p-8">
              <span className="grid size-20 place-items-center rounded-2xl border border-[#d8e0d5] bg-white/40 text-[#78966a]">
                <BarChart3 className="size-8" strokeWidth={1.2} />
              </span>
              <div>
                <p className="font-display text-6xl font-medium tracking-[-0.065em] text-[#0f1c13]">
                  25%
                </p>
                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                  Increase in operational clarity
                </p>
                <p className="mt-4 max-w-xs text-[10px] leading-5 text-[#4a5b4e]">
                  On average, teams make better decisions—faster.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-full border border-[#d8e0d5] bg-white/35 px-6 py-4 font-mono text-[8px] text-[#4a5b4e]">
          <span className="grid size-8 place-items-center rounded-full bg-[#123b28] font-display text-sm font-semibold text-white">
            n
          </span>
          <strong className="font-sans text-[10px] text-[#0f1c13]">
            Real systems. Real impact.
          </strong>
          <span className="h-4 w-px bg-[#d8e0d5]" />
          <span>Understanding first.</span>
          <span className="h-4 w-px bg-[#d8e0d5]" />
          <span>Technology second.</span>
          <span className="h-4 w-px bg-[#d8e0d5]" />
          <span className="text-[#5a7052]">Clarity always.</span>
        </div>
      </Reveal>
    </section>
  );
}
