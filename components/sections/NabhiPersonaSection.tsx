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
            <div className="mt-8 max-w-lg space-y-4 text-sm font-light leading-7 text-white/65">
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

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <BrainCircuit className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Always learning</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Continuously ingests and refines knowledge from every source.
                </p>
              </div>
              <div>
                <Layers3 className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Context aware</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Understands the situation before surfacing what truly
                  matters.
                </p>
              </div>
              <div>
                <ShieldCheck className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Private by design</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Your data stays yours. Secure, compliant, and built to trust.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center pt-10 lg:pt-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nabhi Persona intelligence"
              className="flagship-float h-auto w-[112%] max-w-none object-contain lg:w-[118%]"
              height={808}
              src="/assets/Brain Section.svg"
              width={1132}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-[22px] border border-white/10 bg-white/[0.035] px-5 py-5 md:grid-cols-[1fr_repeat(3,minmax(0,1fr))] md:items-stretch md:gap-0 md:px-6 md:py-5">
          <div className="md:pr-6">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#cde0b8]">
              This is our promise
            </p>
            <p className="mt-2 max-w-sm font-display text-xl leading-7 tracking-[-0.03em] text-white/80 md:text-[1.35rem]">
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
                className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:px-5 md:pt-0"
                key={promise.title}
              >
                <Icon className="size-4 text-[#cde0b8]" />
                <h3 className="mt-2 text-xs text-white/80">{promise.title}</h3>
                <p className="mt-1.5 text-[9px] leading-4 text-white/40">
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
