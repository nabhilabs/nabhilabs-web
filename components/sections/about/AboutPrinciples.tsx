import { RefreshCw, Sparkles, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    title: "Clarity",
    description:
      "Information is organized so you always know what matters now—not buried in noise.",
    icon: Target,
  },
  {
    title: "Adaptability",
    description:
      "Priorities shift—systems should adjust with them, not work against how teams actually operate.",
    icon: RefreshCw,
  },
  {
    title: "Focus",
    description:
      "Everything works together, so decisions keep their thread without friction or rework.",
    icon: Sparkles,
  },
];

export function AboutPrinciples() {
  return (
    <section aria-labelledby="about-principles-heading" className="px-6 md:px-10">
      <Reveal className="mx-auto max-w-[95rem] rounded-2xl border border-[#d8e0d5] bg-[#ebf0e8] px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <SectionPill>Principles</SectionPill>
        <h2
          className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-[#0f1c13]"
          id="about-principles-heading"
        >
          Nabhi Labs is built on a simple idea:{" "}
          <span className="font-normal text-[#78966a]">
            understanding should feel clear
          </span>
          , not overwhelming. We focus on how organizations actually decide.
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {principles.map(({ title, description, icon: Icon }) => (
            <li
              className="flex flex-col rounded-2xl border border-[#d8e0d5] bg-[#f2f4f0] p-6 md:p-7"
              key={title}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13] text-[#cde0b8]">
                <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.02em] text-[#0f1c13]">
                {title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-[#4a5b4e]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
