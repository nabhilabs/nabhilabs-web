import { ContextMap } from "@/components/context-map/ContextMap";
import { ProofEvidenceStack } from "@/components/sections/ProofEvidenceStack";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

/** Flip to true to restore the Our Belief bento under Section 6. */
const SHOW_BELIEF_BENTO = false;

export function ProofSection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="proof">
      <Reveal className="mx-auto max-w-[95rem] px-6 pt-4 pb-12 md:px-10 md:pt-5 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[6fr_4fr] lg:items-start lg:gap-10 xl:gap-12">
          {/* LEFT — Evidence + Institutional Knowledge visualization */}
          <div className="min-w-0">
            <ChapterTag>06 // Proof</ChapterTag>
            <h2 className="mt-6 font-display text-[clamp(2.8rem,5.2vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#0f1c13]">
              Evidence,
              <br />
              without theatre<span className="text-[#78966a]">.</span>
            </h2>

            <div className="mt-7 overflow-hidden rounded-[22px] border border-[#1a3323]/70 bg-[#0f1c13] shadow-[0_18px_44px_rgba(15,28,19,0.18)] md:mt-8">
              <ContextMap className="mt-0 px-2 py-3 md:px-3 md:py-4" />
            </div>

            <div className="mt-6 border-t border-[#d8e0d5] pt-5 md:mt-7 md:pt-6">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                [ Selected Work // Knowledge ]
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.035em] text-[#0f1c13] md:text-2xl">
                Institutional knowledge, made active.
              </h3>
              <p className="mt-2.5 max-w-xl text-xs leading-6 text-[#4a5b4e]">
                We help organizations turn scattered information into connected
                understanding—so every decision is backed by clarity, not chance.
              </p>
            </div>
          </div>

          <ProofEvidenceStack />
        </div>

        {/* Belief + Proof + Principle + Perspective — compact editorial bento */}
        {SHOW_BELIEF_BENTO ? (
          <div className="mt-8 grid gap-2.5 md:gap-3 lg:h-[17.5rem] lg:grid-cols-[42fr_25fr_33fr] lg:items-stretch">
            <StaggerReveal className="h-full min-h-0" index={0}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-[#d8e0d5]/90 bg-white/70 p-5 shadow-[0_10px_28px_rgba(26,51,35,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#a3e635]/35 hover:shadow-[0_14px_32px_rgba(26,51,35,0.07)] md:p-6 lg:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(#c8d6c4_1px,transparent_1px)] opacity-[0.28] [background-size:16px_16px]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-14 size-36 rounded-full bg-[radial-gradient(circle,rgba(205,224,184,0.4)_0%,transparent_70%)]"
                />

                <div className="relative">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5a7052]">
                    Our belief
                  </p>
                  <h3 className="mt-2.5 max-w-[13ch] font-display text-[clamp(1.55rem,2.2vw,2rem)] font-medium leading-[0.96] tracking-[-0.045em] text-[#0f1c13]">
                    Real systems.
                    <br />
                    Real impact<span className="text-[#78966a]">.</span>
                  </h3>
                </div>

                <p className="relative mt-4 max-w-[17ch] text-[13px] leading-[1.5] text-[#4a5b4e]">
                  Understanding first.
                  <br />
                  Technology second.
                  <br />
                  Clarity always.
                </p>
              </article>
            </StaggerReveal>

            <div className="grid min-h-0 gap-2.5 md:gap-3 lg:grid-rows-2">
              <StaggerReveal className="h-full min-h-0" index={1}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-[#1a3323]/80 bg-[#0f1c13] p-4 shadow-[0_12px_28px_rgba(15,28,19,0.18)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#78966a]/50 md:p-5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-[radial-gradient(circle,rgba(205,224,184,0.2)_0%,transparent_70%)]"
                  />

                  <div className="relative">
                    <p className="stat-pop cursor-default font-display text-[clamp(1.85rem,2.5vw,2.25rem)] font-medium leading-none tracking-[-0.06em] text-[#cde0b8]">
                      24h
                    </p>
                    <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#78966a]">
                      Response window
                    </p>
                  </div>
                  <p className="relative mt-2 text-[11px] leading-snug text-[#c8d6c4]/85">
                    Fast enough to move. Thoughtful enough to matter.
                  </p>
                </article>
              </StaggerReveal>

              <StaggerReveal className="h-full min-h-0" index={2}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-[#d8e0d5]/90 bg-white/55 p-4 shadow-[0_8px_22px_rgba(26,51,35,0.035)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#a3e635]/35 md:p-5">
                  <p className="relative font-mono text-[9px] font-semibold tracking-[0.16em] text-[#78966a]">
                    01
                  </p>
                  <div className="relative">
                    <h4 className="font-display text-[0.95rem] font-medium leading-snug tracking-[-0.03em] text-[#0f1c13] md:text-base">
                      Understand before building.
                    </h4>
                    <p className="mt-1.5 text-[11px] leading-snug text-[#4a5b4e]">
                      Start with the system, not the feature.
                    </p>
                  </div>
                </article>
              </StaggerReveal>
            </div>

            <StaggerReveal className="h-full min-h-0" index={3}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-[#d8e0d5]/90 bg-[#eef3ea]/80 p-5 shadow-[0_10px_28px_rgba(26,51,35,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#a3e635]/35 hover:shadow-[0_14px_32px_rgba(26,51,35,0.07)] md:p-6 lg:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 bottom-5 size-24 rounded-full border border-[#5a7052]/12"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-1 bottom-8 size-14 rounded-full border border-[#5a7052]/14"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_72%,rgba(205,224,184,0.5)_0%,transparent_48%)]"
                />

                <span
                  aria-hidden
                  className="relative shrink-0 font-display text-[1.75rem] font-medium leading-none text-[#78966a]/40"
                >
                  “
                </span>

                <blockquote className="relative my-auto max-w-[18ch] py-2 font-display text-[clamp(1rem,1.35vw,1.2rem)] font-medium leading-[1.25] tracking-[-0.03em] text-[#0f1c13]">
                  Technology becomes useful when it understands the system around
                  it.
                </blockquote>

                <p className="relative shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                  Perspective
                </p>
              </article>
            </StaggerReveal>
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
