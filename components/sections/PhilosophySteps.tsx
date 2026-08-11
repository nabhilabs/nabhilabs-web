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
    <div className="relative z-10 mt-16 grid gap-3 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-4">
      {principles.map((principle, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            className="philosophy-card group relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0f1c13] p-4 shadow-none transition-[border-color,box-shadow,transform] duration-[350ms] ease-out md:min-h-[18rem] md:p-5"
            key={principle.title}
          >
            <div className="philosophy-card-media absolute inset-0 overflow-hidden transition-[opacity,filter,transform] duration-[350ms] ease-out will-change-[opacity,transform]">
              <Image
                alt={`${principle.title} - ${principle.prompt}`}
                className="approach-kenburns object-cover object-center"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                src={principle.image}
                style={{ animationDelay: `${index * 1.1}s` }}
              />
            </div>

            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(160deg,rgba(15,28,19,0.55)_0%,rgba(15,28,19,0.22)_48%,rgba(15,28,19,0.62)_100%)] transition-opacity duration-[350ms] ease-out group-hover:opacity-85"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#cde0b8] md:text-sm">
                  {number}
                </p>
                <h3 className="philosophy-card-title mt-2 font-display text-base font-semibold uppercase tracking-[-0.03em] text-[#9ca3af] transition-colors duration-[350ms] ease-out md:text-lg">
                  {principle.title}
                </h3>
                <p className="philosophy-card-prompt mt-1.5 text-[12px] leading-4 text-white/55 transition-colors duration-[350ms] ease-out md:text-[13px]">
                  {principle.prompt}
                </p>
              </div>
              <span className="font-mono text-xs text-white/30">+</span>
            </div>

            <p className="relative mt-auto max-w-[14rem] pt-8 text-[12px] leading-5 text-white/75 md:text-[13px]">
              {principle.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
