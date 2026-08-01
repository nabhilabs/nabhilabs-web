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
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ChapterTag>08 // Our Story</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-[#4a5b4e]">
              Who is behind this?
            </p>
            <span className="mt-5 block h-px w-7 bg-[#78966a]" />
            <h2 className="mt-8 max-w-xl text-balance font-display text-[clamp(3.4rem,6vw,6.7rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#0f1c13]">
              Before language,
              <br />
              there was
              <br />
              <span className="font-serif font-normal italic text-[#78966a]">
                connection.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-[#4a5b4e]">
              Nabhi represents the navel — the universal mark of the first
              connection. Before language, identity, or ambition, there was
              connection.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#4a5b4e]">
              That origin defines our direction: build technology that begins
              by understanding people and leaves them carrying less complexity
              than before.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[36rem]">
            <div className="absolute inset-0 animate-story-spin">
              <Image
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
                height={800}
                src="/assets/inner-circle.svg"
                width={800}
              />
            </div>
            <div className="absolute inset-0">
              <Image
                alt="Nabhi connection map — people, possibility, purpose, and first connection"
                className="h-full w-full object-contain"
                height={800}
                src="/assets/our-story-outer-circle.svg"
                width={800}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#d8e0d5] bg-white/35 p-5">
            <span className="absolute -right-8 top-1/2 size-36 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
            <span className="absolute right-2 top-1/2 size-20 -translate-y-1/2 rounded-full border border-[#5a7052]/10" />
            <div className="relative flex items-center gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#31543a] font-display text-xl font-semibold text-white shadow-[0_0_18px_6px_rgba(120,150,106,0.2)]">
                n
              </span>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#5a7052]">
                  The Nabhi principle
                </p>
                <p className="mt-2 font-serif text-xl text-[#0f1c13]">
                  First, understand.
                  <br />
                  <span className="italic text-[#78966a]">
                    Then, build what matters.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-4">
            <span className="absolute left-5 right-5 top-5 hidden h-px bg-[#c8d6c4] sm:block" />
            {path.map((step) => {
              const Icon = step.icon;

              return (
                <div className="relative z-10" key={step.title}>
                  <span className="grid size-10 place-items-center rounded-full border border-[#aebcac] bg-[#f7f6f1] text-[#31543a]">
                    <Icon className="size-4" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-4 font-mono text-[8px] uppercase tracking-[0.12em] text-[#0f1c13]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[10px] text-[#4a5b4e]">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
