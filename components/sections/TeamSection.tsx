import Image from "next/image";
import { UsersRound } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { HorizontalTimeline } from "@/components/ui/HorizontalTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const members = [
  {
    name: "Surya Raj",
    role: "Co-founder",
    description: "Builds the systems that turn understanding into technology.",
    image: "/assets/surya.png",
  },
  {
    name: "Pavan Kumar",
    role: "Co-founder",
    description: "Shapes products that stay grounded in real human needs.",
    image: "/assets/pavan.png",
  },
  {
    name: "Tharun Parsa",
    role: "Co-founder",
    description: "Designs clarity into every experience we create.",
    image: "/assets/tharun.png",
  },
  {
    name: "Sai Manjith",
    role: "Co-founder",
    description: "Connects vision, research, and impact into one direction.",
    image: "/assets/manjith.png",
  },
] as const;

const milestones = [
  {
    number: "01",
    title: "The Conversation",
    period: "Early 2024",
    description:
      "Four friends, countless late-night conversations, and one shared frustration.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "The Realization",
    period: "Spring 2024",
    description:
      "The problem wasn’t more data. It was the lack of clarity to make sense of it.",
    icon: "Lightbulb",
  },
  {
    number: "03",
    title: "The Beginning",
    period: "Summer 2024",
    description:
      "We decided to build—not just another tool, but a new kind of intelligence layer.",
    icon: "Box",
  },
  {
    number: "04",
    title: "Nabhi Labs",
    period: "Now",
    description:
      "Our journey has just begun. Understanding before technology.",
    icon: "Target",
  },
] as const;

export function TeamSection() {
  return (
    <section
      className="section-theme-light relative z-10 bg-[#f7f6f1]"
      id="team"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>09 // Our Team</ChapterTag>
            <h2 className="mt-5 max-w-lg font-display text-[clamp(2.8rem,4.8vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#0f1c13]">
              Built by four
              <br />
              who saw the{" "}
              <span className="font-serif font-normal italic text-[#78966a]">
                same gap.
              </span>
            </h2>
            <p className="mt-4 max-w-md section-copy text-[#4a5b4e]">
              Different minds. Shared curiosity. We came together to build
              technology that understands before it automates.
            </p>

            <div className="ui-card mt-5 flex max-w-md items-center gap-4 rounded-2xl border border-[#d8e0d5] bg-white/55 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#31543a] font-display text-lg font-semibold text-white">
                n
              </span>
              <p className="text-sm leading-6 text-[#4a5b4e]">
                Nabhi Labs began as a conversation among four friends who
                believed that clarity is the real infrastructure.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <UsersRound
                className="size-5 text-[#5a7052]"
                strokeWidth={1.25}
              />
              <p className="font-display text-base font-medium tracking-[-0.02em] text-[#0f1c13] md:text-lg">
                A team of 4 builders, researchers, and thinkers.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {members.map((member, index) => (
                <StaggerReveal index={index} key={member.name}>
                  <article className="ui-card group grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-[#d8e0d5] bg-white/50 p-3.5">
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-[#d8e0d5] bg-[#edf3e8] sm:size-28">
                      <Image
                        alt={`${member.name}, ${member.role} at Nabhi Labs`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        height={200}
                        loading="lazy"
                        sizes="112px"
                        src={member.image}
                        width={160}
                      />
                    </div>
                    <div className="min-w-0 self-center">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#31543a] font-mono text-[8px] text-white">
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-medium leading-tight text-[#0f1c13]">
                            {member.name}
                          </h3>
                          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5a7052]">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">
                        {member.description}
                      </p>
                    </div>
                  </article>
                </StaggerReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[28px] border border-[#d8e0d5] bg-white/55 p-6 md:p-8 lg:grid-cols-[0.75fr_2.25fr] lg:gap-10">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
              [ Our Story ]
            </p>
            <p className="mt-4 font-display text-2xl leading-8 tracking-[-0.03em] text-[#0f1c13] md:text-3xl md:leading-9">
              It started with{" "}
              <span className="font-serif italic text-[#78966a]">
                a simple question.
              </span>
            </p>
            <span className="mt-4 block h-px w-10 bg-[#78966a]" />
            <blockquote className="mt-5 max-w-xs font-serif text-base leading-7 text-[#31543a]">
              “Why is there so much information, yet so little understanding?”
              <footer className="mt-3 font-sans font-mono text-[9px] uppercase tracking-[0.12em] text-[#5a7052]">
                — Nabhi Labs co-founders, 2024
              </footer>
            </blockquote>
          </div>

          <HorizontalTimeline steps={milestones} />
        </div>
      </Reveal>
    </section>
  );
}
