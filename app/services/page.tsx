import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services from Nabhi Labs—Nabhi Persona, RAG engineering, agentic voice workflows, healthcare AI, and knowledge systems.",
  keywords: [
    "Nabhi Labs services",
    "Nabhi Persona",
    "RAG engineering",
    "agentic voice",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Nabhi Labs",
    description:
      "What Nabhi Labs builds: understanding-first products and AI systems.",
    url: "/services",
    siteName: "Nabhi Labs",
  },
};

const services = [
  {
    href: "/solutions/nabhi-persona",
    title: "Nabhi Persona",
    copy: "Private enterprise intelligence that turns institutional knowledge into active understanding.",
  },
  {
    href: "/solutions/enterprise-knowledge-management",
    title: "Enterprise knowledge management",
    copy: "Platforms that reconnect fragmented knowledge into usable clarity.",
  },
  {
    href: "/services/rag-engineering",
    title: "RAG engineering",
    copy: "Custom retrieval-augmented generation with evaluations and permissions.",
  },
  {
    href: "/services/agentic-voice-workflows",
    title: "Agentic voice workflows",
    copy: "Conversational systems that call tools safely and leave an audit trail.",
  },
  {
    href: "/industries/healthcare-ai",
    title: "Healthcare AI",
    copy: "AI integration for care operations with careful compliance posture.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="relative" id="main-content">
      <section className="technical-grid border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 pb-16 pt-28 md:px-10 md:pt-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ Services ]
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            Services from Nabhi Labs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            Nabhi Labs does not sell a menu of generic outsourcing pillars. We
            build what follows from understanding—starting with Nabhi Persona.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f6f1]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <ul className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  className="group block border-b border-[#d8e0d5] pb-6"
                  href={service.href}
                >
                  <h2 className="font-display text-2xl tracking-[-0.03em] text-[#0f1c13] group-hover:text-[#31543a]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">
                    {service.copy}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-[#4a5b4e]">
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
