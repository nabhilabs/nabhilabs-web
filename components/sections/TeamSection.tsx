import Image from "next/image";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const members = [
  {
    name: "Surya Raj",
    role: "Co-founder",
    image: "/assets/surya.webp",
  },
  {
    name: "Pavan Kumar",
    role: "Co-founder",
    image: "/assets/pavan.webp",
  },
  {
    name: "Tharun Parsa",
    role: "Co-founder",
    image: "/assets/tharun.webp",
  },
  {
    name: "Sai Manjith",
    role: "Co-founder",
    image: "/assets/manjith.webp",
  },
] as const;

export function TeamSection() {
  return (
    <section
      aria-labelledby="about-team-heading"
      className="px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20"
      id="team"
    >
      <Reveal className="mx-auto max-w-[95rem]">
        <SectionPill>Our Team</SectionPill>
        <h2
          className="mt-6 max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0f1c13]"
          id="about-team-heading"
        >
          People building clarity into your everyday decisions
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {members.map((member, index) => (
            <StaggerReveal index={index} key={member.name}>
              <li>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[#edf3e8]">
                    <Image
                      alt={`${member.name}, ${member.role} at Nabhi Labs`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      height={500}
                      loading="lazy"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                      src={member.image}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-[#0f1c13]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#5a7052]">
                    {member.role}
                  </p>
                </article>
              </li>
            </StaggerReveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
