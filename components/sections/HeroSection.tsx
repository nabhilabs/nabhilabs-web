export function HeroSection() {
  return (
    <section
      aria-label="Soft daylight landscape introducing Nabhi Labs - where complexity becomes clarity"
      aria-labelledby="hero-title"
      className="hero-landing relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,244,240,0.62)_0%,rgba(242,244,240,0.32)_48%,rgba(242,244,240,0.06)_78%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[95rem] items-center px-6 pb-12 pt-24 md:px-12 lg:px-20">
        <div className="w-full max-w-[46rem]">
          <span className="hero-enter inline-flex rounded-full border border-white/70 bg-white/75 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-[#31543a] shadow-sm">
            + &nbsp; Understanding → Intelligence → Impact
          </span>

          <h1
            className="hero-enter hero-enter-delay-1 mt-6 max-w-[42rem] font-display text-[clamp(3.6rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#0f1c13]"
            id="hero-title"
          >
            Nabhi Labs
          </h1>

          <h2 className="hero-enter hero-enter-delay-2 mt-4 max-w-[38rem] font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#0f1c13]">
            Where complexity becomes{" "}
            <mark className="rounded-[0.14em] bg-[#cde0b8] px-[0.06em] text-inherit">
              clarity
            </mark>
            .
          </h2>

          <p className="hero-enter hero-enter-delay-3 mt-5 max-w-lg section-copy font-light text-[#314238]">
            The official site for Nabhi Labs. Before code, before AI, before
            design — comes understanding. Nabhi Persona, RAG engineering, and
            agentic workflows follow from that order.
          </p>

          <div className="hero-enter hero-enter-delay-3 mt-7 grid max-w-[38rem] gap-3 sm:grid-cols-2">
            <article className="ui-card flex flex-col justify-between rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  01 // Perspective
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Carrying Complexity?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">
                  Too many tools? Too much noise? Let&apos;s unpack what is
                  actually happening in your system.
                </p>
              </div>
              <a
                className="mt-5 w-fit rounded-full bg-[#1a3323] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#2c4f37]"
                href="#understanding"
              >
                Unpack the Problem →
              </a>
            </article>

            <article className="ui-card flex flex-col justify-between rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.10)]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  02 // Conversation
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Start with Understanding
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">
                  No sales pitches. Just a thoughtful discussion about your
                  architecture and goals.
                </p>
              </div>
              <a
                className="mt-5 w-fit rounded-full border border-[#c8d6c4] bg-white/85 px-4 py-2.5 text-xs font-semibold text-[#0f1c13] transition-colors hover:bg-white"
                href="#begin"
              >
                Schedule a Call →
              </a>
            </article>
          </div>

          <div className="hero-enter hero-enter-delay-4 mt-5 grid max-w-[42rem] overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-sm sm:grid-cols-3">
            {[
              "Trusted by thinkers and builders worldwide",
              "Enterprise-grade. Human-first.",
              "Built for depth. Designed for clarity.",
            ].map((line) => (
              <p
                className="flex min-h-[3.5rem] items-center justify-center border-b border-[#d8e0d5]/70 px-4 py-3 text-center font-mono text-[11px] leading-snug tracking-[0.01em] text-[#314238] last:border-b-0 sm:min-h-[4rem] sm:border-b-0 sm:border-r sm:border-[#d8e0d5]/70 sm:px-3.5 sm:last:border-r-0"
                key={line}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
