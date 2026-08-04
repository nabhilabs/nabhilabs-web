import Image from "next/image";
import { Layers3, Network, Sparkles, UserRound } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const path = [
  {
    title: "Understand",
    copy: "People first.",
    icon: UserRound,
  },
  {
    title: "Connect",
    copy: "Map what matters.",
    icon: Network,
  },
  {
    title: "Build",
    copy: "Create with clarity.",
    icon: Layers3,
  },
  {
    title: "Impact",
    copy: "Make it meaningful.",
    icon: Sparkles,
  },
] as const;

export function StorySection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="our-story">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <ChapterTag>08 // Our Story</ChapterTag>
            <p className="mt-5 font-mono text-[10px] text-[#4a5b4e]">
              Who is behind this?
            </p>
            <span className="mt-4 block h-px w-7 bg-[#78966a]" />
            <h2 className="mt-6 max-w-xl text-balance font-display text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#0f1c13]">
              Before language,
              <br />
              there was
              <br />
              <span className="font-serif font-normal italic text-[#78966a]">
                connection.
              </span>
            </h2>
            <p className="mt-5 max-w-lg section-copy text-[#4a5b4e]">
              Nabhi represents the navel — the universal mark of the first
              connection. Before language, identity, or ambition, there was
              connection.
            </p>
            <p className="mt-4 max-w-lg section-copy text-[#4a5b4e]">
              That origin defines our direction: build technology that begins
              by understanding people and leaves them carrying less complexity
              than before.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[32rem]">
            <div className="absolute inset-[6%] animate-story-spin">
              <Image
                alt="Decorative orbit ring for Nabhi origin story diagram"
                className="h-full w-full object-contain"
                height={800}
                loading="lazy"
                src="/assets/inner-circle.svg"
                width={800}
              />
            </div>
            <div className="absolute inset-0 animate-story-spin-reverse">
              <Image
                alt="Nabhi connection map - people, possibility, purpose, and first connection"
                className="h-full w-full object-contain"
                height={800}
                loading="lazy"
                src="/assets/our-story-outer-circle.svg"
                width={800}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.35fr] lg:items-stretch">
          <div className="ui-card relative overflow-hidden rounded-3xl border border-[#d8e0d5] bg-gradient-to-br from-white/80 to-[#e8eee4] p-6">
            <span className="absolute -right-10 top-1/2 size-40 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
            <span className="absolute right-4 top-1/2 size-24 -translate-y-1/2 rounded-full border border-[#5a7052]/12" />
            <div className="relative flex items-start gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="size-14 shrink-0 rounded-2xl border border-[#d8e0d5] object-cover shadow-sm"
                height={56}
                src="/favicon.svg"
                width={56}
              />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#5a7052]">
                  The Nabhi principle
                </p>
                <p className="mt-3 font-serif text-2xl leading-snug text-[#0f1c13]">
                  First, understand.
                  <br />
                  <span className="italic text-[#78966a]">
                    Then, build what matters.
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">
                  Connection before construction. Clarity before code.
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-4">
            <span className="pipeline-rail absolute left-[10%] right-[10%] top-7 hidden h-[2px] sm:block" />
            {path.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className="ui-card relative z-10 rounded-2xl border border-[#d8e0d5] bg-white/65 p-4"
                  key={step.title}
                >
                  <span className="grid size-10 place-items-center rounded-full border border-[#aebcac] bg-[#f7f6f1] text-[#31543a]">
                    <Icon className="size-4" strokeWidth={1.25} />
                  </span>
                  <p className="mt-3 font-mono text-[9px] text-[#78966a]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#0f1c13]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4a5b4e]">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
