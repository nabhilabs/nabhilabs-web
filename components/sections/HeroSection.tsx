export function HeroSection() {
  return (
    <section
      aria-label="Soft daylight landscape introducing Nabhi Labs - where complexity becomes clarity"
      aria-labelledby="hero-title"
      className="hero-landing relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,244,240,0.56)_0%,rgba(242,244,240,0.28)_48%,rgba(242,244,240,0.04)_76%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[95rem] items-center px-6 pb-10 pt-24 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[44rem]">
          <span className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-[#31543a] shadow-sm">
            + &nbsp; Understanding → Intelligence → Impact
          </span>

          <h1
            className="mt-7 max-w-[42rem] text-[clamp(3.4rem,6.4vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#0f1c13]"
            id="hero-title"
            style={{
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Nabhi Labs
          </h1>

          <h2 className="mt-5 max-w-[36rem] font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0f1c13]">
            Where complexity becomes{" "}
            <mark className="rounded-[0.14em] bg-[#cde0b8] px-[0.04em] text-inherit">
              clarity
            </mark>
            .
          </h2>

          <p className="mt-6 max-w-md text-base font-light leading-7 text-[#314238] md:text-lg">
            The official site for Nabhi Labs. Before code, before AI, before
            design — comes understanding. Nabhi Persona, RAG engineering, and
            agentic workflows follow from that order.
          </p>

          <div className="mt-7 grid max-w-[36rem] gap-3 sm:grid-cols-2">
            <article className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)]">
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

            <article className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)]">
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

          <div className="mt-5 flex max-w-[42rem] flex-wrap items-center gap-2">
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
      </div>
    </section>
  );
}
