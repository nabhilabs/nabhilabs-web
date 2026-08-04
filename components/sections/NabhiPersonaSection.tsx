import {
  ArrowUpRight,
  BrainCircuit,
  Infinity,
  Layers3,
  ShieldCheck,
  Sunrise,
  Target,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const promises = [
  {
    title: "Deep Understanding",
    copy: "We go beyond the surface to understand what’s real.",
    icon: Infinity,
  },
  {
    title: "Purposeful Technology",
    copy: "Technology is chosen, not assumed. Every choice has a reason.",
    icon: Target,
  },
  {
    title: "Lasting Impact",
    copy: "Solutions built to adapt, scale, and create real change.",
    icon: Sunrise,
  },
] as const;

export function NabhiPersonaSection() {
  return (
    <section
      className="section-theme-dark relative z-10 bg-[#0e1012] text-white transition-colors duration-700"
      id="nabhi-persona"
    >
      <Reveal className="mx-auto max-w-[95rem] bg-[radial-gradient(circle_at_70%_30%,#1a3d24_0%,#121a16_34%,#0e1012_76%)] p-6 md:p-10 lg:p-14">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag inverse>03 // Flagship Product</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              What is your signature creation?
            </p>
            <h2 className="mt-8 font-display text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Nabhi
              <br />
              Persona<span className="text-[#cde0b8]">.</span>
            </h2>
            <div className="mt-8 max-w-lg space-y-4 section-copy font-light text-white/70">
              <p>
                Personal and institutional knowledge shouldn&apos;t live in
                folders, tools, and forgotten conversations.
              </p>
              <p>
                Nabhi Persona turns that knowledge into active intelligence—
                available when context matters.
              </p>
            </div>
            <a
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#cde0b8] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-white"
              href="/solutions/nabhi-persona"
            >
              Explore Nabhi Persona
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div className="ui-card-dark rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <BrainCircuit className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-sm">Always learning</h3>
                <p className="mt-2 text-sm leading-5 text-white/50">
                  Continuously ingests and refines knowledge from every source.
                </p>
              </div>
              <div className="ui-card-dark rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <Layers3 className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-sm">Context aware</h3>
                <p className="mt-2 text-sm leading-5 text-white/50">
                  Understands the situation before surfacing what truly
                  matters.
                </p>
              </div>
              <div className="ui-card-dark rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <ShieldCheck className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-sm">Private by design</h3>
                <p className="mt-2 text-sm leading-5 text-white/50">
                  Your data stays yours. Secure, compliant, and built to trust.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center pt-4 lg:pt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nabhi Persona intelligence"
              className="flagship-float h-auto w-[108%] max-w-none object-contain lg:w-[112%]"
              height={808}
              src="/assets/Brain Section.svg"
              width={1132}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-3 md:grid-cols-[1.15fr_repeat(3,1fr)] md:items-stretch">
          <div className="flex flex-col justify-center rounded-2xl bg-black/25 px-5 py-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#cde0b8]">
              This is our promise
            </p>
            <p className="mt-3 font-display text-xl leading-snug tracking-[-0.03em] text-white/90 md:text-2xl">
              You won&apos;t just get a solution.
              <br />
              <span className="text-[#cde0b8]">
                You&apos;ll get clarity you can rely on.
              </span>
            </p>
          </div>
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div
                className="ui-card-dark flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                key={promise.title}
              >
                <Icon className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 font-display text-base text-white/90">
                  {promise.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {promise.copy}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
