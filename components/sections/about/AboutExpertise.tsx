import Image from "next/image";
import { RefreshCw, Sparkles, Target } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";

const expertise = [
  {
    title: "Clarity",
    copy: "Information organized so you always know what matters now—not buried in noise.",
    icon: Target,
  },
  {
    title: "Adaptability",
    copy: "Systems that adjust as priorities shift, matching how teams actually operate.",
    icon: RefreshCw,
  },
  {
    title: "Focus",
    copy: "Everything works together, so decisions keep their thread without friction or rework.",
    icon: Sparkles,
  },
] as const;

export function AboutExpertise() {
  return (
    <section
      aria-labelledby="about-expertise-heading"
      className="border-b border-[#d8e0d5] bg-[#f7f6f1] px-6 py-16 md:px-10 md:py-24"
      id="expertise"
    >
      <div className="mx-auto grid max-w-[95rem] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#d8e0d5] lg:order-1">
          <Image
            alt="Understanding before technology — Nabhi Labs approach"
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 42vw"
            src="/assets/our-approach/understand.webp"
          />
        </div>

        <div className="lg:order-2">
          <ChapterTag>01 // Principles</ChapterTag>
          <h2
            className="mt-6 max-w-xl font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0f1c13]"
            id="about-expertise-heading"
          >
            We bring strategic thinking and systems craft so organizations
            operate with clarity—and grow with purpose.
          </h2>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {expertise.map(({ title, copy, icon: Icon }) => (
              <li
                className="rounded-2xl border border-[#d8e0d5] bg-[#f2f4f0] p-5"
                key={title}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13] text-[#cde0b8]">
                  <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-[#0f1c13]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
