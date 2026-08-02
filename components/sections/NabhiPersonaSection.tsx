import {
  ArrowUpRight,
  Bookmark,
  BrainCircuit,
  FileText,
  Infinity,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Target,
  Zap,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const intelligenceActions = [
  {
    title: "Captures",
    copy: "Notes, docs, chats, emails, meetings, and more.",
    icon: FileText,
    position: "left-[2%] top-[13%]",
  },
  {
    title: "Understands",
    copy: "Finds patterns and connects the dots.",
    icon: Network,
    position: "left-0 top-[40%]",
  },
  {
    title: "Remembers",
    copy: "Retains what matters, for you. Forever.",
    icon: Bookmark,
    position: "left-[3%] top-[67%]",
  },
  {
    title: "Retrieves",
    copy: "Instant answers from your knowledge, not the web.",
    icon: Search,
    position: "right-[2%] top-[13%]",
  },
  {
    title: "Reasons",
    copy: "Synthesizes insights so you can decide with clarity.",
    icon: Sparkles,
    position: "right-0 top-[40%]",
  },
  {
    title: "Acts",
    copy: "Turns understanding into action—faster.",
    icon: Zap,
    position: "right-[3%] top-[67%]",
  },
] as const;

const promises = [
  {
    title: "Deep Understanding",
    copy: "We go beyond the surface to understand what’s real.",
    icon: Infinity,
  },
  {
    title: "Purposeful Technology",
    copy: "Technology is chosen, not assumed. Every choice has a reason.",
    icon: Target,
  },
  {
    title: "Lasting Impact",
    copy: "Solutions built to adapt, scale, and create real change.",
    icon: Sunrise,
  },
] as const;

export function NabhiPersonaSection() {
  return (
    <section
      className="section-theme-dark relative z-10 bg-[#0e1012] text-white transition-colors duration-700"
      id="nabhi-persona"
    >
      <Reveal className="mx-auto max-w-[95rem] bg-[radial-gradient(circle_at_70%_30%,#1a3d24_0%,#121a16_34%,#0e1012_76%)] p-6 md:p-10 lg:p-14">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag inverse>03 // Flagship Product</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              What is your signature creation?
            </p>
            <h2 className="mt-8 font-display text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Nabhi
              <br />
              Persona<span className="text-[#cde0b8]">.</span>
            </h2>
            <div className="mt-8 max-w-lg space-y-4 text-sm font-light leading-7 text-white/65">
              <p>
                Personal and institutional knowledge shouldn&apos;t live in
                folders, tools, and forgotten conversations.
              </p>
              <p>
                Nabhi Persona turns that knowledge into active intelligence—
                available when context matters.
              </p>
            </div>
            <a
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#cde0b8] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-white"
              href="/solutions/nabhi-persona"
            >
              Explore Nabhi Persona
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <BrainCircuit className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Always learning</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Continuously ingests and refines knowledge from every source.
                </p>
              </div>
              <div>
                <Layers3 className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Context aware</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Understands the situation before surfacing what truly
                  matters.
                </p>
              </div>
              <div>
                <ShieldCheck className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Private by design</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Your data stays yours. Secure, compliant, and built to trust.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[38rem] overflow-hidden rounded-[28px] border border-white/10 bg-black/10 md:min-h-[42rem]">
            <p className="absolute left-6 top-5 z-20 font-mono text-[9px] uppercase tracking-[0.16em] text-[#cde0b8]/70">
              :: Active intelligence map
            </p>

            <span className="absolute left-1/2 top-[43%] size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/10" />
            <span className="absolute left-1/2 top-[43%] size-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/10" />
            <span className="absolute left-1/2 top-[43%] size-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cde0b8]/15" />
            <span className="absolute left-1/2 top-[43%] h-px w-[90%] -translate-x-1/2 bg-[#cde0b8]/10" />
            <span className="absolute left-1/2 top-[43%] h-[70%] w-px -translate-y-1/2 bg-[#cde0b8]/10" />

            <div className="absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid h-52 w-44 place-items-center rounded-[50%_50%_42%_42%] border border-[#cde0b8]/30 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(205,224,184,0.12),rgba(255,255,255,0.03))] shadow-[inset_0_0_50px_rgba(205,224,184,0.08),0_0_60px_rgba(156,207,108,0.15)] backdrop-blur-sm">
                <BrainCircuit
                  aria-label="Knowledge intelligence core"
                  className="size-28 text-[#cde0b8] drop-shadow-[0_0_18px_rgba(205,224,184,0.7)]"
                  strokeWidth={1}
                />
                <span className="absolute inset-x-2 bottom-2 h-5 rounded-[50%] border border-[#cde0b8]/20 bg-[#cde0b8]/10" />
              </div>
              <div className="mx-auto h-5 w-52 rounded-[50%] border border-[#cde0b8]/30 bg-[#163c27] shadow-[0_8px_0_#0a2518,0_16px_0_#071c13,0_24px_35px_rgba(0,0,0,0.45)]" />
            </div>

            {intelligenceActions.map((action) => {
              const Icon = action.icon;

              return (
                <article
                  className={`absolute z-20 hidden w-32 rounded-xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur-md sm:block ${action.position}`}
                  key={action.title}
                >
                  <Icon className="size-4 text-[#cde0b8]" />
                  <h3 className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#cde0b8]">
                    {action.title}
                  </h3>
                  <p className="mt-2 text-[9px] leading-4 text-white/55">
                    {action.copy}
                  </p>
                </article>
              );
            })}

            <div className="absolute inset-x-5 bottom-5 z-20 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md sm:grid-cols-[0.65fr_1fr] sm:items-center">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#cde0b8]">
                  Synthesis
                </p>
                <p className="mt-2 text-xs leading-5 text-white/70">
                  Three connected insights,
                  <br />
                  one clear next step.
                </p>
              </div>
              <div className="flex h-14 items-center gap-[3px] overflow-hidden">
                {Array.from({ length: 52 }, (_, index) => (
                  <span
                    className="w-px shrink-0 bg-[#cde0b8]/70"
                    key={index}
                    style={{
                      height: `${8 + ((index * 17) % 38)}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[1.25fr_repeat(3,0.75fr)] md:items-center md:p-8">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#cde0b8]">
              This is our promise
            </p>
            <p className="mt-3 max-w-md font-display text-2xl leading-8 tracking-[-0.03em] text-white/80">
              You won&apos;t just get a solution.
              <br />
              <span className="text-[#cde0b8]">
                You&apos;ll get clarity you can rely on.
              </span>
            </p>
          </div>
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div
                className="border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0"
                key={promise.title}
              >
                <Icon className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs text-white/80">{promise.title}</h3>
                <p className="mt-2 text-[9px] leading-4 text-white/40">
                  {promise.copy}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
