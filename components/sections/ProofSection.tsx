import { BarChart3, Box, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { ContextMap } from "@/components/context-map/ContextMap";
import { BullseyeOrb } from "@/components/ui/BullseyeOrb";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

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
            <h3 className="font-mono text-[9px] font-normal uppercase tracking-[0.08em] text-[#5a7052]">
              Why should I trust Nabhi Labs?
            </h3>
            <span className="mt-4 block h-px w-8 bg-[#78966a]" />
            <p className="mt-5 max-w-xs text-xs leading-6 text-[#4a5b4e]">
              Selected systems where clearer information created more useful
              decisions—backed by 50+ tailored models, about 25% average gains
              in operational clarity, and responses within 24 hours. We align
              practice with the{" "}
              <a
                className="underline decoration-[#c8d6c4] underline-offset-2 hover:text-[#0f1c13]"
                href="https://www.nist.gov/itl/ai-risk-management-framework"
                rel="noopener noreferrer"
                target="_blank"
              >
                NIST AI RMF
              </a>{" "}
              and{" "}
              <a
                className="underline decoration-[#c8d6c4] underline-offset-2 hover:text-[#0f1c13]"
                href="https://oecd.ai/en/ai-principles"
                rel="noopener noreferrer"
                target="_blank"
              >
                OECD AI Principles
              </a>
              .
            </p>
          </div>

          <BullseyeOrb className="hidden lg:block" />
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

            <ContextMap />
          </article>

          <div className="grid border-l-0 border-[#d8e0d5] lg:border-l">
            <article className="grid grid-cols-[5rem_1fr] gap-6 border-b border-[#d8e0d5] p-5 lg:p-8">
              <span className="grid size-20 place-items-center rounded-2xl border border-[#d8e0d5] bg-white/40 text-[#78966a]">
                <Box className="size-8" strokeWidth={1.2} />
              </span>
              <div>
                <p className="stat-pop inline-block cursor-default font-display text-6xl font-medium tracking-[-0.065em] text-[#0f1c13]">
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
                <p className="stat-pop inline-block cursor-default font-display text-6xl font-medium tracking-[-0.065em] text-[#0f1c13]">
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

        <div className="mt-8 grid gap-3 rounded-[22px] border border-[#d8e0d5] bg-white/40 p-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6 sm:px-5 sm:py-4 md:grid-cols-[auto_1.2fr_repeat(3,minmax(0,1fr))]">
          <span className="grid size-10 place-items-center rounded-full bg-[#123b28] font-display text-sm font-semibold text-white">
            n
          </span>
          <div>
            <p className="text-[11px] font-medium text-[#0f1c13]">
              Real systems. Real impact.
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5a7052]">
              Understanding first · Technology second · Clarity always
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#d8e0d5] bg-[#f7f6f1]/80 px-3 py-2.5">
            <Clock3 className="size-3.5 shrink-0 text-[#78966a]" />
            <div>
              <p className="stat-pop cursor-default font-display text-lg font-medium tracking-[-0.03em] text-[#0f1c13]">
                24 hours
              </p>
              <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#5a7052]">
                Response window
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#d8e0d5] bg-[#f7f6f1]/80 px-3 py-2.5">
            <ShieldCheck className="size-3.5 shrink-0 text-[#78966a]" />
            <div>
              <p className="text-[10px] font-medium text-[#0f1c13]">
                Private by design
              </p>
              <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#5a7052]">
                Evidence first
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#d8e0d5] bg-[#f7f6f1]/80 px-3 py-2.5">
            <Sparkles className="size-3.5 shrink-0 text-[#78966a]" />
            <div>
              <p className="text-[10px] font-medium text-[#0f1c13]">
                Zero theatre
              </p>
              <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#5a7052]">
                Inspectable claims
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
