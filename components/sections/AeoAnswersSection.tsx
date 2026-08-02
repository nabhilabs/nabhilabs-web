import { aeoCitations, aeoFaqs } from "@/lib/aeo-faq";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function AeoAnswersSection() {
  return (
    <section
      aria-labelledby="aeo-answers-title"
      className="relative z-10 border-t border-[#d8e0d5] bg-[#f2f4f0]"
      id="answers"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <ChapterTag>11 // Answers</ChapterTag>
        <p className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#0f1c13]">
          Questions people ask Nabhi Labs.
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4a5b4e]" id="aeo-answers-title">
          Nabhi Labs publishes direct answers for humans and answer engines—aligned with how
          the company works: understanding before technology. Each answer below stands alone so
          search and generative systems can cite Nabhi Labs accurately on what the studio builds,
          how Nabhi Labs thinks, and how to begin a conversation.
        </p>

        <div className="mt-12 space-y-12">
          {aeoFaqs.map((item) => (
            <article key={item.question}>
              <h2 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#0f1c13] md:text-3xl">
                {item.question}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4a5b4e]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-14 max-w-3xl border-t border-[#d8e0d5] pt-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
            Primary sources we reference
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4a5b4e]">
            {aeoCitations.map((cite) => (
              <li key={cite.href}>
                <a
                  className="underline decoration-[#c8d6c4] underline-offset-4 transition-colors hover:text-[#0f1c13] hover:decoration-[#78966a]"
                  href={cite.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {cite.label}
                </a>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 max-w-xl font-serif text-base leading-7 text-[#31543a]">
            “Why is there so much information, yet so little understanding?”
            <footer className="mt-3 font-sans font-mono text-[10px] uppercase tracking-[0.14em] text-[#5a7052]">
              — Surya Raj, Pavan Kumar, Tharun Parsa &amp; Sai Manjith, Co-founders,
              Nabhi Labs
            </footer>
          </blockquote>
          <p className="mt-6 text-xs leading-6 text-[#4a5b4e]">
            Evidence we cite in conversation:{" "}
            <strong className="font-medium text-[#0f1c13]">50+</strong> models
            tailored to unique contexts, about{" "}
            <strong className="font-medium text-[#0f1c13]">25%</strong> average
            increase in operational clarity, and replies within{" "}
            <strong className="font-medium text-[#0f1c13]">24 hours</strong> for
            serious inquiries.
          </p>
        </aside>
      </Reveal>
    </section>
  );
}
