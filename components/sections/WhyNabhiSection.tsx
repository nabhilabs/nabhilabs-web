import {
  Eye,
  Grid2X2,
  Handshake,
  Layers3,
  Leaf,
  Network,
  Rocket,
  Search,
  Sparkles,
  Target,
  UserRound,
  UsersRound,
  WandSparkles,
  Zap,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const comparisons = [
  {
    shortcut: "Quick delivery",
    practice: "Long-term partnership",
    shortcutIcon: Zap,
    practiceIcon: Handshake,
  },
  {
    shortcut: "Technology first",
    practice: "Understanding first",
    shortcutIcon: Rocket,
    practiceIcon: Search,
  },
  {
    shortcut: "Feature accumulation",
    practice: "Calm, deliberate systems",
    shortcutIcon: Layers3,
    practiceIcon: Target,
  },
  {
    shortcut: "Agency theatre",
    practice: "Zero fluff",
    shortcutIcon: WandSparkles,
    practiceIcon: Leaf,
  },
  {
    shortcut: "Users as metrics",
    practice: "Human-centric engineering",
    shortcutIcon: UserRound,
    practiceIcon: UsersRound,
  },
] as const;

const process = [
  {
    title: "Understand",
    copy: "We go deep before we build.",
    icon: Eye,
  },
  {
    title: "Align",
    copy: "We align on what truly matters.",
    icon: Network,
  },
  {
    title: "Build",
    copy: "We build systems that last.",
    icon: Grid2X2,
  },
  {
    title: "Deliver impact",
    copy: "Impact that’s real, measurable, lasting.",
    icon: Sparkles,
  },
] as const;

export function WhyNabhiSection() {
  return (
    <section className="relative z-10 bg-[#071c14]" id="why-nabhi">
      <Reveal className="mx-auto max-w-[95rem] bg-[radial-gradient(circle_at_30%_65%,#17452c_0%,#0d2d1e_36%,#071c14_78%)] p-6 text-white md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <ChapterTag inverse>07 // Why Nabhi</ChapterTag>
            <p className="mt-5 font-mono text-[10px] text-white/50">
              What makes NABHI unique?
            </p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(3.2rem,5.5vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
              Trust before
              <br />
              conversion<span className="text-[#cde0b8]">.</span>
            </h2>
            <p className="mt-5 max-w-md section-copy font-light text-white/60">
              We are not here to add another layer of technology. We stay until
              the problem is understood and the system feels lighter.
            </p>

            <div className="relative mx-auto mt-8 h-44 w-44 sm:mx-0">
              <span className="absolute inset-0 rounded-full border border-[#cde0b8]/15" />
              <span className="absolute inset-[14%] rounded-full border border-[#cde0b8]/15" />
              <span className="absolute inset-[28%] rounded-full border border-[#cde0b8]/25" />
              <span className="absolute inset-[34%] grid place-items-center overflow-hidden rounded-full bg-[#0a2518] shadow-[0_0_28px_12px_rgba(205,224,184,0.18)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Nabhi Labs"
                  className="size-full object-cover"
                  height={80}
                  src="/favicon.svg"
                  width={80}
                />
              </span>
              <span className="absolute left-[6%] top-[28%] size-1.5 rounded-full bg-[#cde0b8]/80" />
              <span className="absolute bottom-[12%] right-[10%] size-1.5 rounded-full bg-[#cde0b8]/70" />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#cde0b8]/70">
              Nucleus // Nabhi Labs
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.04]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/10 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 md:px-6">
              <span>Common shortcut</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[#cde0b8]">
                vs
              </span>
              <span className="text-right">Nabhi practice</span>
            </div>

            <div>
              {comparisons.map((comparison) => {
                const ShortcutIcon = comparison.shortcutIcon;
                const PracticeIcon = comparison.practiceIcon;

                return (
                  <div
                    className="ui-card-dark group grid grid-cols-[2.5rem_1fr_auto_2.5rem_1fr] items-center gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 md:gap-4 md:px-6"
                    key={comparison.shortcut}
                  >
                    <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-[#cde0b8]/75 transition-colors group-hover:border-[#cde0b8]/35">
                      <ShortcutIcon className="size-4" strokeWidth={1.25} />
                    </span>
                    <span className="text-sm text-white/55">
                      {comparison.shortcut}
                    </span>
                    <span className="font-mono text-sm text-[#cde0b8]/55">
                      ›
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-[#cde0b8]/25 text-[#cde0b8] transition-colors group-hover:bg-[#cde0b8]/15">
                      <PracticeIcon className="size-4" strokeWidth={1.25} />
                    </span>
                    <span className="text-sm text-white/90">
                      {comparison.practice}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.04] p-5 md:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="block h-4 w-4 border-l border-t border-[#cde0b8]/60" />
              <p className="mt-3 font-display text-2xl leading-8 tracking-[-0.03em] text-white/85">
                We build clarity.
                <br />
                Clarity builds{" "}
                <span className="italic text-[#cde0b8]">trust.</span>
              </p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#cde0b8]/70">
              Engagement pipeline
            </p>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-4">
            <span className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#cde0b8]/25 sm:block" />
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className="ui-card-dark relative z-10 rounded-2xl border border-white/10 bg-black/20 p-4"
                  key={step.title}
                >
                  <span className="grid size-10 place-items-center rounded-full border border-[#cde0b8]/25 bg-[#0d2d1e] text-[#cde0b8]">
                    <Icon className="size-4" strokeWidth={1.25} />
                  </span>
                  <p className="mt-3 font-mono text-[9px] text-[#cde0b8]/60">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 font-mono text-[11px] tracking-[0.08em] text-[#cde0b8]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-white/55">
                    {step.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
