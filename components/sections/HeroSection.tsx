import { HeroRotatingTagline } from "@/components/sections/HeroRotatingTagline";

export function HeroSection() {
  return (
    <section
      aria-label="Soft daylight landscape introducing Nabhi Labs - where complexity becomes clarity"
      aria-labelledby="hero-title"
      className="hero-landing relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,244,240,0.42)_0%,rgba(242,244,240,0.18)_42%,rgba(242,244,240,0.08)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[95rem] flex-col justify-center px-6 pb-12 pt-28 md:px-10 lg:px-14">
        <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-[#31543a] shadow-sm">
              + &nbsp; Understanding → Intelligence → Impact
            </span>

            <h1
              className="mt-8 font-display text-[clamp(4rem,11vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.07em] text-[#0f1c13]"
              id="hero-title"
            >
              Nabhi{" "}
              <span className="font-serif font-normal italic tracking-[-0.04em] text-[#31543a]">
                Labs
              </span>
            </h1>

            <HeroRotatingTagline />

            <p className="mt-7 max-w-xl text-base font-light leading-7 text-[#314238] md:text-lg">
              The official site for Nabhi Labs. Before code, before AI, before
              design — comes understanding. Nabhi Persona, RAG engineering, and
              agentic workflows follow from that order.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <article className="flex min-h-48 flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)] backdrop-blur-sm">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  01 // Perspective
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Carrying Complexity?
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#4a5b4e]">
                  Too many tools? Too much noise? Let&apos;s unpack what is
                  actually happening in your system.
                </p>
              </div>
              <a
                className="mt-4 w-fit rounded-full bg-[#1a3323] px-4 py-2.5 text-[10px] font-medium text-white transition-colors hover:bg-[#2c4f37]"
                href="#understanding"
              >
                Unpack the Problem →
              </a>
            </article>

            <article className="flex min-h-48 flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)] backdrop-blur-sm">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  02 // Conversation
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Start with Understanding
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#4a5b4e]">
                  No sales pitches. Just a thoughtful discussion about your
                  architecture and goals.
                </p>
              </div>
              <a
                className="mt-4 w-fit rounded-full border border-[#c8d6c4] bg-white/80 px-4 py-2.5 text-[10px] font-semibold text-[#0f1c13] transition-colors hover:bg-white"
                href="/contact"
              >
                Schedule a Call →
              </a>
            </article>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 lg:mt-10">
          <span className="rounded-full border border-white/70 bg-white/75 px-3.5 py-1.5 font-mono text-[9px] tracking-[0.04em] text-[#314238] shadow-sm">
            Trusted by thinkers and builders worldwide
          </span>
          <span className="rounded-full border border-white/70 bg-white/75 px-3.5 py-1.5 font-mono text-[9px] tracking-[0.04em] text-[#314238] shadow-sm">
            Enterprise-grade. Human-first.
          </span>
          <span className="rounded-full border border-white/70 bg-white/75 px-3.5 py-1.5 font-mono text-[9px] tracking-[0.04em] text-[#314238] shadow-sm">
            Built for depth. Designed for clarity.
          </span>
        </div>
      </div>
    </section>
  );
}
