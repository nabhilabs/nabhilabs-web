import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { socialProfiles } from "@/lib/social";

const members = [
  {
    name: "Surya Raj",
    role: "Co-founder",
    focus: "Agentic systems",
    image: "/assets/surya.webp",
  },
  {
    name: "Pavan Kumar",
    role: "Co-founder",
    focus: "RAG engineering",
    image: "/assets/pavan.webp",
  },
  {
    name: "Tharun Parsa",
    role: "Co-founder",
    focus: "Healthcare AI",
    image: "/assets/tharun.webp",
  },
  {
    name: "Sai Manjith",
    role: "Co-founder",
    focus: "Platform",
    image: "/assets/manjith.webp",
  },
] as const;

export function AboutTeamGrid() {
  return (
    <section
      aria-labelledby="about-team-heading"
      className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
      id="team"
    >
      <div className="mx-auto max-w-[95rem]">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0f1c13] px-7 py-9 md:px-10 md:py-11">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(183,232,74,0.12),transparent_45%)]"
          />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7E84A]">
                02 // Core_team
              </p>
              <h2
                className="mt-5 max-w-md font-display text-[clamp(1.85rem,3.4vw,2.85rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white"
                id="about-team-heading"
              >
                People building clarity into your everyday decisions
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#cde0b8]/75 lg:justify-self-end lg:text-right">
              Four co-founders building Nabhi Persona, Nabhi Cares, and the
              systems that turn understanding into technology.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {members.map((member) => (
            <li key={member.name}>
              <article className="group overflow-hidden rounded-2xl border border-[#1a3323]/35 bg-[#071B12] transition-transform duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#04140d]">
                  <Image
                    alt={`${member.name}, ${member.role} at Nabhi Labs`}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    src={member.image}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#071B12] via-[#071B12]/20 to-transparent"
                  />
                </div>
                <div className="relative px-4 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#B7E84A]/85">
                        {member.role}
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#cde0b8]/75">
                        {member.focus}
                      </p>
                    </div>
                    <a
                      aria-label={`${member.name} on LinkedIn`}
                      className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-[#cde0b8] transition-colors hover:border-[#B7E84A] hover:bg-[#B7E84A] hover:text-[#071B12]"
                      href={socialProfiles.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcon className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
