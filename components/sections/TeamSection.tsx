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
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>09 // Our Team</ChapterTag>
            <h2 className="mt-5 max-w-lg font-display text-[clamp(3.2rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#0f1c13]">
              Built by four
              <br />
              who saw the
              <br />
              <span className="font-serif font-normal italic text-[#78966a]">
                same gap.
              </span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#4a5b4e]">
              Different minds. Shared curiosity.
              <br />
              We came together to build technology that understands before it
              automates.
            </p>

            <div className="mt-4 flex max-w-sm items-center gap-4 rounded-2xl border border-[#d8e0d5] bg-white/35 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#31543a] font-display text-lg font-semibold text-white shadow-[0_0_18px_5px_rgba(120,150,106,0.2)]">
                n
              </span>
              <p className="text-[10px] leading-5 text-[#4a5b4e]">
                Nabhi Labs began as a conversation among four friends who
                believed that clarity is the real infrastructure.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 pb-4">
              <UsersRound
                className="size-6 text-[#5a7052]"
                strokeWidth={1.25}
              />
              <p className="font-display text-lg font-medium tracking-[-0.02em] text-[#0f1c13]">
                A team of 4 builders, researchers, and thinkers.
              </p>
              <span className="h-px bg-[#c8d6c4]" />
              <span className="size-1.5 rounded-full bg-[#78966a]" />
            </div>

            <div className="grid gap-4 border-t border-[#d8e0d5] pt-4 sm:grid-cols-2 md:grid-cols-4">
              {members.map((member, index) => (
                <StaggerReveal index={index} key={member.name}>
                  <article className="group grid grid-rows-[auto_auto_1fr]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[#edf3e8]">
                      <Image
                        alt={member.name}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                        src={member.image}
                      />
                    </div>
                    <div className="mt-4 flex items-start gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#31543a] font-mono text-[8px] text-white">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-medium text-[#0f1c13]">
                          {member.name}
                        </h3>
                        <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.13em] text-[#5a7052]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-[10px] leading-5 text-[#4a5b4e]">
                      {member.description}
                    </p>
                  </article>
                </StaggerReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-10 rounded-[24px] border border-[#d8e0d5] bg-white/25 p-6 md:p-8 lg:grid-cols-[0.7fr_2.3fr]">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
              [ Our Story ]
            </p>
            <p className="mt-5 font-display text-2xl leading-8 tracking-[-0.03em] text-[#0f1c13]">
              It started with
              <br />
              <span className="font-serif italic text-[#78966a]">
                a simple question.
              </span>
            </p>
            <span className="mt-4 block h-px w-10 bg-[#78966a]" />
            <blockquote className="mt-5 max-w-xs font-serif text-sm leading-6 text-[#31543a]">
              “Why is there so much information, yet so little understanding?”
            </blockquote>
          </div>

          <HorizontalTimeline steps={milestones} />
        </div>
      </Reveal>
    </section>
  );
}
