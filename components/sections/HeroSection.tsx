import { HeroRotatingTagline } from "@/components/sections/HeroRotatingTagline";

export function HeroSection() {
  return (
    <section
      aria-label="Soft daylight landscape introducing Nabhi Labs - where complexity becomes clarity"
      aria-labelledby="hero-title"
      className="hero-landing relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      {/* Soft veil — keeps type readable without hiding the landscape */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,244,240,0.42)_0%,rgba(242,244,240,0.12)_42%,rgba(242,244,240,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(242,244,240,0.55)_0%,transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[95rem] flex-col px-6 pb-8 pt-24 md:px-12 md:pb-10 lg:px-16 xl:px-20">
        <div className="w-full max-w-3xl">
          <h1
            className="hero-title font-display text-[clamp(3.6rem,7vw,7.2rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-[#1E293B]"
            id="hero-title"
          >
            Nabhi Labs
          </h1>

          <HeroRotatingTagline />

          <p className="mt-6 max-w-xl text-base font-light leading-7 text-[#314238]/95 md:text-lg">
            The official site for Nabhi Labs. Before code, before AI, before
            design — comes understanding. Nabhi Persona, RAG engineering, and
            agentic workflows follow from that order.
          </p>
        </div>

        <div className="mt-8 w-full md:mt-10">
          <div className="grid max-w-[36rem] gap-3 sm:grid-cols-2">
            <article className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)] backdrop-blur-md">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  01 // Perspective
                </p>
                <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Carrying Complexity?
                </h2>
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

            <article className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)] backdrop-blur-md">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  02 // Conversation
                </p>
                <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Start with Understanding
                </h2>
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

          <div className="mt-3 flex max-w-[48rem] flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-white/70 bg-white/75 px-4 py-2 font-mono text-[11px] tracking-[0.03em] text-[#314238] shadow-sm backdrop-blur-sm sm:text-xs">
              Trusted by thinkers and builders worldwide
            </span>
            <span className="rounded-full border border-white/70 bg-white/75 px-4 py-2 font-mono text-[11px] tracking-[0.03em] text-[#314238] shadow-sm backdrop-blur-sm sm:text-xs">
              Enterprise-grade. Human-first.
            </span>
            <span className="rounded-full border border-white/70 bg-white/75 px-4 py-2 font-mono text-[11px] tracking-[0.03em] text-[#314238] shadow-sm backdrop-blur-sm sm:text-xs">
              Built for depth. Designed for clarity.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
