import {
  Box,
  Lightbulb,
  MessageSquare,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const members = [
  {
    name: "Arjun D.",
    role: "Co-founder & Engineering",
    description: "Builds the core systems that power understanding.",
  },
  {
    name: "Kartik M.",
    role: "Co-founder & Research",
    description: "Explores how AI can reason, learn, and stay grounded.",
  },
  {
    name: "Raghav S.",
    role: "Co-founder & Design",
    description: "Designs experiences that bring clarity to complexity.",
  },
  {
    name: "Ishaan P.",
    role: "Co-founder & Strategy",
    description: "Connects the dots between vision, product, and impact.",
  },
] as const;

const milestones = [
  {
    number: "01",
    title: "The Conversation",
    period: "Early 2024",
    description:
      "Four friends, countless late-night conversations, and one shared frustration.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "The Realization",
    period: "Spring 2024",
    description:
      "The problem wasn’t more data. It was the lack of clarity to make sense of it.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "The Beginning",
    period: "Summer 2024",
    description:
      "We decided to build—not just another tool, but a new kind of intelligence layer.",
    icon: Box,
  },
  {
    number: "04",
    title: "Nabhi Labs",
    period: "Now",
    description:
      "Our journey has just begun. Understanding before technology.",
    icon: Target,
  },
] as const;

export function TeamSection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="team">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
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
                <article
                  className="group grid grid-rows-[auto_auto_1fr]"
                  key={member.name}
                >
                  <div className="technical-grid relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[radial-gradient(circle_at_50%_38%,rgba(205,224,184,0.5),rgba(255,255,255,0.2)_55%,transparent_80%)]">
                    <span className="absolute inset-0 grid place-items-center">
                      <UserRound
                        aria-label={`${member.name} portrait placeholder`}
                        className="size-24 text-[#5a7052]/45 transition-transform duration-500 group-hover:scale-105"
                        strokeWidth={0.8}
                      />
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-full border border-[#c8d6c4] bg-white/65 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-[#5a7052]">
                      Portrait 0{index + 1}
                    </span>
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

          <div className="relative grid gap-7 sm:grid-cols-4">
            <span className="absolute left-5 right-5 top-12 hidden h-px bg-[#c8d6c4] sm:block" />
            {milestones.map((milestone) => {
              const Icon = milestone.icon;

              return (
                <article className="relative z-10" key={milestone.title}>
                  <span className="grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                    <Icon className="size-4" strokeWidth={1.25} />
                  </span>
                  <span className="absolute left-[14px] top-[42px] size-3 rounded-full border-4 border-[#edf3e8] bg-[#78966a] shadow-[0_0_10px_3px_rgba(120,150,106,0.2)]" />
                  <div className="mt-8">
                    <p className="font-mono text-[7px] text-[#5a7052]">
                      {milestone.number}
                    </p>
                    <h3 className="mt-2 text-xs font-medium text-[#31543a]">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-[9px] text-[#4a5b4e]">
                      {milestone.period}
                    </p>
                    <p className="mt-3 text-[9px] leading-4 text-[#4a5b4e]">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
