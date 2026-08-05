export function HeroActions() {
  return (
    <div className="mt-7 grid max-w-[36rem] gap-3 sm:grid-cols-2">
      <article className="flex min-h-52 flex-col justify-between rounded-3xl border border-white/60 bg-white/40 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
            01 // Perspective
          </p>
          <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
            Carrying Complexity?
          </h2>
          <p className="mt-2 text-xs leading-5 text-[#4a5b4e]">
            Too many tools? Too much noise? Let&apos;s unpack what is actually
            happening in your system.
          </p>
        </div>
        <a
          className="mt-4 w-fit rounded-full bg-[#1a3323] px-4 py-2.5 text-[10px] font-medium text-white transition-colors hover:bg-[#2c4f37]"
          href="#understanding"
        >
          Unpack the Problem →
        </a>
      </article>

      <article className="flex min-h-52 flex-col justify-between rounded-3xl border border-white/60 bg-white/40 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
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
  );
}
