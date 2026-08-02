"use client";

import Image from "next/image";

type Principle = {
  title: string;
  prompt: string;
  description: string;
  image: string;
};

type PhilosophyStepsProps = {
  principles: readonly Principle[];
};

export function PhilosophySteps({ principles }: PhilosophyStepsProps) {
  return (
    <div className="relative z-10 mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
      {principles.map((principle, index) => (
        <article
          className="group flex flex-col rounded-2xl border border-transparent bg-transparent p-4 opacity-55 transition-[opacity,border-color,background-color,transform] duration-500 ease-out will-change-[opacity,transform] hover:border-[#a3e635]/55 hover:bg-white/50 hover:opacity-100 hover:-translate-y-0.5"
          key={principle.title}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#5a7052]">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-[#0f1c13]">
                {principle.title}
              </h3>
              <p className="mt-2 text-[10px] leading-4 text-[#4a5b4e]">
                {principle.prompt}
              </p>
            </div>
            <span className="bento-plus font-mono text-xs text-[#5a7052]/40">
              +
            </span>
          </div>

          <div
            className="philosophy-float relative mx-auto mt-8 aspect-square w-full max-w-[13.5rem]"
            style={{ animationDelay: `${index * 0.55}s` }}
          >
            <Image
              alt={`${principle.title} - ${principle.prompt}`}
              className="object-contain object-center"
              height={220}
              loading="lazy"
              sizes="(max-width: 640px) 60vw, 220px"
              src={principle.image}
              width={220}
            />
          </div>

          <p className="mt-8 max-w-[15rem] text-[11px] leading-5 text-[#4a5b4e]">
            {principle.description}
          </p>
        </article>
      ))}
    </div>
  );
}
