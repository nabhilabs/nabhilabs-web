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
            <span className="absolute inset-[8%] rounded-full border border-[#5a7052]/20" />
            <span className="absolute inset-[19%] rounded-full border border-dashed border-[#5a7052]/15" />
            <span className="absolute inset-[31%] rounded-full border border-[#5a7052]/15" />
            <span className="absolute inset-[42%] rounded-full border border-[#5a7052]/20" />
            <span className="absolute inset-x-[8%] top-1/2 h-px bg-[#5a7052]/12" />
            <span className="absolute inset-y-[8%] left-1/2 w-px bg-[#5a7052]/12" />

            <svg
              aria-hidden="true"
              className="absolute inset-[8%] h-[84%] w-[84%]"
              viewBox="0 0 500 500"
            >
              {[35, 75, 115, 155, 195, 235, 275, 315, 355, 395, 435, 475].map(
                (targetY, index) => (
                  <path
                    d={`M 250 250 C ${150 + (index % 3) * 40} ${130 + index * 18}, ${90 + (index % 4) * 105} ${targetY}, ${index % 2 === 0 ? 0 : 500} ${targetY}`}
                    fill="none"
                    key={targetY}
                    stroke="rgba(90,112,82,0.12)"
                    strokeWidth="0.8"
                  />
                ),
              )}
            </svg>

            <span className="absolute left-1/2 top-[8%] -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#5a7052]">
              First connection
            </span>
            <span className="absolute left-1/2 top-[7.5%] size-2 -translate-x-1/2 translate-y-7 rounded-full bg-[#5a7052]" />

            <span className="absolute left-[2%] top-1/2 -translate-y-1/2 rounded-full border border-[#d8e0d5] bg-white/60 px-5 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#5a7052]">
              People
            </span>
            <span className="absolute right-[0%] top-1/2 -translate-y-1/2 rounded-full border border-[#d8e0d5] bg-white/60 px-5 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#5a7052]">
              Possibility
            </span>
            <span className="absolute bottom-[5%] left-1/2 -translate-x-1/2 rounded-full border border-[#d8e0d5] bg-white/60 px-5 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#5a7052]">
              Purpose
            </span>

            <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#31543a] font-display text-3xl font-medium text-white shadow-[0_0_36px_18px_rgba(120,150,106,0.28)]">
              N
            </span>
            <span className="absolute left-[23%] top-[18%] size-1.5 rounded-full bg-[#78966a]" />
            <span className="absolute right-[18%] top-[20%] size-1.5 rounded-full bg-[#78966a]" />
            <span className="absolute bottom-[16%] left-[22%] size-1.5 rounded-full bg-[#78966a]" />
            <span className="absolute bottom-[15%] right-[20%] size-1.5 rounded-full bg-[#78966a]" />
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
