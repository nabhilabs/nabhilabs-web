import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, AudioLines, Library, Search } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { CurtainSlider } from "@/components/ui/CurtainSlider";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nabhi Labs products and services—Nabhi Cares (Healthcare AI), upcoming Nabhi Persona, RAG engineering, agentic voice, and knowledge systems.",
  keywords: [
    "Nabhi Labs services",
    "Nabhi Cares",
    "Healthcare AI",
    "Nabhi Persona",
    "RAG engineering",
    "agentic voice",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Nabhi Labs",
    description:
      "Products and supporting engineering—Nabhi Cares today, Nabhi Persona ahead.",
    url: "/services",
    siteName: "Nabhi Labs",
  },
};

const curtainSlides = [
  {
    src: "/assets/nabhi_cares_wallpaper_hd.webp",
    alt: "Glowing heart over a dark mossy landscape — Nabhi Cares healthcare AI",
    position: "68% center",
    chapter: "01 // Nabhi Cares",
    title: "Nabhi Cares",
    gist: "Healthcare AI for care operations—clarity across systems, assistive workflows, and a careful compliance posture.",
    href: "/products/nabhi-cares",
    cta: "Open Nabhi Cares",
    accent: "rgba(163, 230, 53, 0.38)",
  },
  {
    src: "/assets/nabhi_persona_wallpaper_hd.webp",
    alt: "Glowing brain over a dark mossy landscape — Nabhi Persona intelligence",
    position: "72% center",
    chapter: "02 // Nabhi Persona",
    title: "Nabhi Persona",
    gist: "An intelligence layer that turns institutional knowledge into active, private understanding—when context matters.",
    href: "/products/nabhi-persona",
    cta: "Open Nabhi Persona",
    accent: "rgba(110, 190, 210, 0.34)",
  },
] as const;

const supportingServices = [
  {
    href: "/services/enterprise-knowledge-management",
    index: "01",
    title: "Enterprise knowledge management",
    copy: "Platforms that reconnect fragmented knowledge into usable clarity.",
    icon: Library,
  },
  {
    href: "/services/rag-engineering",
    index: "02",
    title: "RAG engineering",
    copy: "Custom retrieval-augmented generation with evaluations and permissions.",
    icon: Search,
  },
  {
    href: "/services/agentic-voice-workflows",
    index: "03",
    title: "Agentic voice workflows",
    copy: "Conversational systems that call tools safely and leave an audit trail.",
    icon: AudioLines,
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="relative" id="main-content">
      <CurtainSlider autoplay slides={[...curtainSlides]} />

      <section
        aria-labelledby="supporting-services-heading"
        className="border-t border-[#d8e0d5] bg-[#f2f4f0]"
        id="supporting-services"
      >
        <div className="mx-auto max-w-[95rem] px-6 py-16 md:px-10 md:py-24">
          <ChapterTag>03 // Supporting_Services</ChapterTag>
          <h2
            className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#0f1c13]"
            id="supporting-services-heading"
          >
            The systems behind the products
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#4a5b4e]">
            Knowledge platforms, retrieval engineering, and agentic voice—used
            alone or as the substrate for Cares and Persona.
          </p>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {supportingServices.map(({ href, index, title, copy, icon: Icon }) => (
              <li key={href}>
                <Link
                  className="group flex h-full flex-col rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1] p-6 transition-colors hover:border-[#78966a]/50 hover:bg-[#ebf0e8] md:p-7"
                  href={href}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13] text-[#cde0b8]">
                      <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5a7052]">
                      {index}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-[#0f1c13]">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#4a5b4e]">
                    {copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[#31543a]">
                    Know more
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 border-t border-[#d8e0d5] pt-8 text-sm text-[#4a5b4e]">
            Not sure where to start?{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/about"
            >
              Learn more about Nabhi Labs
            </Link>{" "}
            or{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/contact"
            >
              contact Nabhi Labs
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
