import Image from "next/image";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function StorySection() {
  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="our-story">
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ChapterTag>08 // Our Story</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-[#4a5b4e]">
              Who is behind this?
            </p>
            <span className="mt-5 block h-px w-7 bg-[#78966a]" />
            <h2 className="mt-8 max-w-xl text-balance font-display text-[clamp(3.4rem,6vw,6.7rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#0f1c13]">
              Before language,
              <br />
              there was
              <br />
              <span className="font-serif font-normal italic text-[#78966a]">
                connection.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-[#4a5b4e]">
              Nabhi represents the navel - the universal mark of the first
              connection. Before language, identity, or ambition, there was
              connection.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#4a5b4e]">
              That origin defines our direction: build technology that begins
              by understanding people and leaves them carrying less complexity
              than before.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[36rem]">
            <div className="absolute inset-0 animate-story-spin will-change-transform">
              <Image
                alt="Decorative orbit ring for Nabhi origin story diagram"
                className="h-full w-full object-contain"
                height={800}
                loading="lazy"
                src="/assets/inner-circle.svg"
                width={800}
              />
            </div>
            <div className="absolute inset-0">
              <Image
                alt="Nabhi connection map - people, possibility, purpose, and first connection"
                className="h-full w-full object-contain"
                height={800}
                loading="lazy"
                src="/assets/our-story-outer-circle.svg"
                width={800}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
