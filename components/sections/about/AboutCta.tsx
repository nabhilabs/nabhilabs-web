import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";

export function AboutCta() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="px-6 pb-20 pt-8 md:px-10 md:pb-28"
      id="begin"
    >
      <div className="relative mx-auto max-w-[95rem] overflow-hidden rounded-2xl border border-[#1a3323]/40">
        <div className="relative min-h-[22rem] md:min-h-[26rem]">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            loading="lazy"
            sizes="(max-width: 1536px) 100vw, 95rem"
            src="/assets/hero-landing-day.webp"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,28,19,0.82)_0%,rgba(26,51,35,0.72)_100%)]"
          />
          <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-end px-8 py-10 md:min-h-[26rem] md:px-12 md:py-14">
            <ChapterTag inverse>04 // Begin</ChapterTag>
            <h2
              className="mt-6 max-w-xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white"
              id="about-cta-heading"
            >
              Ready to elevate how your organization understands?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#cde0b8]/80">
              Start with what feels complex. We’ll listen first—then talk about
              the right product or system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full border border-[#cde0b8]/35 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
                href="/services"
              >
                Explore products
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#cde0b8] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#a3e635]"
                href="/contact"
              >
                Book a call
                <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
