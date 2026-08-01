import { BarChart3, Box } from "lucide-react";
import { ContextMap } from "@/components/context-map/ContextMap";
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

            <ContextMap />
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
