import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function WhyNabhiSection() {
  return (
    <section className="relative z-10 bg-[#071c14]" id="why-nabhi">
      <Reveal className="mx-auto max-w-[95rem] bg-[radial-gradient(circle_at_30%_65%,#17452c_0%,#0d2d1e_36%,#071c14_78%)] p-6 text-white md:p-10 lg:p-14">
        <div className="max-w-3xl">
          <ChapterTag inverse>07 // Why Nabhi</ChapterTag>
          <p className="mt-6 font-mono text-[10px] text-white/50">
            What makes NABHI unique?
          </p>
          <h2 className="mt-8 font-display text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.055em]">
            Trust before
            <br />
            conversion<span className="text-[#cde0b8]">.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm font-light leading-7 text-white/55">
            We are not here to add another layer of technology. We stay until
            the problem is understood and the system feels lighter.
          </p>
        </div>

        <div className="relative mt-10 w-full overflow-hidden rounded-[24px] md:mt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="What others provide versus what Nabhi provides — noise transforming into clarity"
            className="h-auto w-full"
            decoding="async"
            loading="lazy"
            src="/assets/Why%20NABHI.svg"
          />
        </div>

        <p className="mt-10 max-w-xl border-t border-white/10 pt-6 font-display text-xl leading-8 tracking-[-0.03em] text-white/75 md:text-2xl">
          We build clarity.
          <br />
          Clarity builds{" "}
          <span className="italic text-[#cde0b8]">trust.</span>
        </p>
      </Reveal>
    </section>
  );
}
