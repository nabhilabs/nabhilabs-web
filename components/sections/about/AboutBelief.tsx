import Image from "next/image";

export function AboutBelief() {
  return (
    <section
      aria-labelledby="about-belief-heading"
      className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
      id="belief"
    >
      <div className="mx-auto max-w-[95rem]">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a6b5e]">
          03 // Belief
        </p>

        <div className="mt-8 grid overflow-hidden rounded-[1.75rem] border border-[#1a3323]/40 lg:min-h-[22rem] lg:grid-cols-[minmax(14rem,0.78fr)_minmax(0,1.22fr)]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#071B12] px-7 py-10 text-[#cde0b8] md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(183,232,74,0.18),transparent_55%)]"
            />
            <div className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7E84A]">
                Founding principle
              </p>
              <p
                aria-hidden
                className="mt-8 font-display text-[clamp(4.5rem,11vw,7.5rem)] font-medium leading-[0.8] tracking-[-0.06em] text-white/10"
              >
                03
              </p>
            </div>
            <div className="relative mt-10 lg:mt-0">
              <h2
                className="max-w-[12ch] font-display text-2xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-3xl"
                id="about-belief-heading"
              >
                What we believe
              </h2>
            </div>
          </div>

          <div className="relative bg-[#f8f8f4] px-7 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
            <span
              aria-hidden
              className="pointer-events-none absolute right-6 top-4 font-serif text-[7rem] leading-none text-[#071B12]/10 md:right-10 md:text-[9rem]"
            >
              “
            </span>
            <blockquote className="relative">
              <p className="max-w-2xl font-serif text-[clamp(1.35rem,2.6vw,2.05rem)] font-normal italic leading-[1.35] tracking-[-0.02em] text-[#071B12]">
                Understanding should feel clear, not overwhelming. We focus on
                how organizations actually decide—then build technology that
                follows.
              </p>

              <footer className="mt-10 flex items-center gap-3 border-t border-[#d8e0d5] pt-6">
                <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-[#1a3323]/25 bg-[#071B12]">
                  <Image
                    alt=""
                    className="object-contain p-1.5 brightness-0 invert"
                    fill
                    sizes="36px"
                    src="/favicon.svg"
                  />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#071B12]">
                    Nabhi Labs
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#78966a]">
                    Founding principle
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
