import { HeroActions } from "@/components/sections/HeroActions";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/assets/hero-landing-day-mobile.avif"
          type="image/avif"
        />
        <source
          media="(max-width: 640px)"
          srcSet="/assets/hero-landing-day-mobile.webp"
          type="image/webp"
        />
        <source srcSet="/assets/hero-landing-day.avif" type="image/avif" />
        <source srcSet="/assets/hero-landing-day.webp" type="image/webp" />
        <img
          alt="Soft daylight landscape introducing Nabhi Labs - where complexity becomes clarity"
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
          height={900}
          src="/assets/hero-landing-day.jpg"
          width={1600}
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,244,240,0.56)_0%,rgba(242,244,240,0.28)_48%,rgba(242,244,240,0.04)_76%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[95rem] items-center px-6 pb-10 pt-24 md:px-12 lg:px-20">
        <div className="hero-enter w-full max-w-[44rem]">
          <span className="inline-flex rounded-full border border-white/70 bg-white/65 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-[#31543a] shadow-sm backdrop-blur-md">
            + &nbsp; Understanding → Intelligence → Impact
          </span>

          <h1
            className="mt-7 max-w-[42rem] text-balance font-display text-[clamp(3.4rem,6.4vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#0f1c13]"
            id="hero-title"
          >
            Where complexity becomes{" "}
            <span className="relative inline-block px-[0.04em]">
              <span
                aria-hidden="true"
                className="absolute -left-px -right-px bottom-[0.06em] h-[calc(0.56em+2px)] rounded-[0.14em] bg-[#cde0b8]"
              />
              <span className="relative">clarity</span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-md text-base font-light leading-7 text-[#314238] md:text-lg">
            Before code, before AI, before design - comes understanding.
          </p>

          <HeroActions />

          <div className="mt-5 flex max-w-[42rem] flex-wrap items-center gap-x-4 gap-y-2 rounded-3xl border border-white/70 bg-white/60 px-5 py-3 font-mono text-[9px] tracking-[0.04em] text-[#314238] shadow-sm backdrop-blur-md sm:rounded-full">
            <span>Trusted by thinkers and builders worldwide</span>
            <span
              aria-hidden="true"
              className="hidden text-[#5a7052]/45 sm:block"
            >
              |
            </span>
            <span>Enterprise-grade. Human-first.</span>
            <span
              aria-hidden="true"
              className="hidden text-[#5a7052]/45 sm:block"
            >
              |
            </span>
            <span>Built for depth. Designed for clarity.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
