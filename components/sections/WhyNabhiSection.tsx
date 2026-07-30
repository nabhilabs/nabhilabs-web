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
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <ChapterTag inverse>07 // Why Nabhi</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              What makes NABHI unique?
            </p>
            <h2 className="mt-8 max-w-xl font-display text-[clamp(3.6rem,6vw,6.8rem)] font-medium leading-[0.86] tracking-[-0.06em]">
              Trust before
              <br />
              conversion<span className="text-[#cde0b8]">.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm font-light leading-7 text-white/55">
              We are not here to add another layer of technology. We stay until
              the problem is understood and the system feels lighter.
            </p>

            <div className="relative mt-10 h-48 w-full max-w-sm">
              <span className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/10" />
              <span className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/10" />
              <span className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/15" />
              <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#cde0b8] font-display text-xl font-semibold text-[#123b28] shadow-[0_0_28px_12px_rgba(205,224,184,0.25)]">
                n
              </span>
              <span className="absolute left-[8%] top-[29%] size-1.5 rounded-full bg-[#cde0b8]/80" />
              <span className="absolute bottom-[15%] right-[12%] size-1.5 rounded-full bg-[#cde0b8]/70" />
              <span className="absolute right-[6%] top-[27%] size-1 rounded-full bg-[#cde0b8]/70" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.035]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/10 px-5 py-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 md:px-8">
              <span>Common shortcut</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[#cde0b8]">
                vs
              </span>
              <span className="text-right">Nabhi practice</span>
            </div>

            {comparisons.map((comparison) => {
              const ShortcutIcon = comparison.shortcutIcon;
              const PracticeIcon = comparison.practiceIcon;

              return (
                <div
                  className="grid grid-cols-[2.5rem_1fr_auto_2.5rem_1fr] items-center gap-3 border-b border-white/10 px-4 py-5 last:border-b-0 md:gap-5 md:px-8"
                  key={comparison.shortcut}
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-[#cde0b8]/75">
                    <ShortcutIcon className="size-5" strokeWidth={1.25} />
                  </span>
                  <span className="text-xs text-white/55 md:text-sm">
                    {comparison.shortcut}
                  </span>
                  <span className="font-mono text-sm text-[#cde0b8]/55">›</span>
                  <span className="grid size-10 place-items-center rounded-full border border-[#cde0b8]/25 text-[#cde0b8]">
                    <PracticeIcon className="size-5" strokeWidth={1.25} />
                  </span>
                  <span className="text-xs text-white/85 md:text-sm">
                    {comparison.practice}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[24px] border border-white/15 bg-white/[0.035] p-6 md:grid-cols-[0.85fr_2.15fr] md:items-center md:p-8">
          <div className="border-white/10 md:border-r md:pr-8">
            <span className="block h-4 w-4 border-l border-t border-[#cde0b8]/60" />
            <p className="mt-3 font-display text-2xl leading-8 tracking-[-0.03em] text-white/80">
              We build clarity.
              <br />
              Clarity builds{" "}
              <span className="italic text-[#cde0b8]">trust.</span>
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-4">
            <span className="absolute left-5 right-5 top-5 hidden h-px bg-[#cde0b8]/15 sm:block" />
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div className="relative z-10" key={step.title}>
                  <span className="grid size-10 place-items-center rounded-full border border-[#cde0b8]/25 bg-[#0d2d1e] text-[#cde0b8]">
                    <Icon className="size-4" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-4 font-mono text-[9px] tracking-[0.08em] text-[#cde0b8]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-32 text-[10px] leading-4 text-white/45">
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
