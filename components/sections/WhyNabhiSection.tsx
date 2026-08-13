import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhyNabhiBeam } from "@/components/sections/WhyNabhiBeam";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function WhyNabhiSection() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#0f1c13]"
      id="why-nabhi"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(23,69,44,0.55),transparent_55%),radial-gradient(ellipse_at_85%_70%,rgba(163,230,53,0.08),transparent_45%)]"
      />

      <Reveal className="relative mx-auto max-w-[95rem] px-6 py-16 text-white md:px-10 md:py-24">
        <div className="max-w-3xl">
          <ChapterTag inverse>07 // Why Nabhi</ChapterTag>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
            What makes Nabhi unique?
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,5vw,4.75rem)] font-medium leading-[0.92] tracking-[-0.055em]">
            Trust before
            <br />
            <em className="font-serif font-normal italic text-[#a3e635]">
              conversion.
            </em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
            We are not here to add another layer of technology. We stay until
            the problem is understood and the system feels lighter.
          </p>
        </div>

        <div className="mt-12">
          <WhyNabhiBeam />
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md font-display text-xl leading-8 tracking-[-0.03em] text-white/70 md:text-2xl">
            We build clarity.
            <br />
            Clarity builds{" "}
            <span className="italic text-[#cde0b8]">trust.</span>
          </p>
          <Link
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#ebf0e8]"
            href="/about"
          >
            About Nabhi Labs
            <ArrowUpRight aria-hidden className="size-3.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
