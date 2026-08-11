import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

const products = [
  {
    href: "/industries/healthcare-ai",
    title: "Nabhi Cares",
    label: "Product",
    status: "Available",
    copy: "Healthcare AI for care operations—clarity across systems, assistive workflows, and a careful compliance posture.",
    cta: "Know more",
  },
  {
    href: "/solutions/nabhi-persona",
    title: "Nabhi Persona",
    label: "Product",
    status: "Coming soon",
    copy: "A future intelligence layer that turns institutional knowledge into active, private understanding. Architecture and roadmap live on its product page.",
    cta: "Explore the vision",
  },
] as const;

const supportingServices = [
  {
    href: "/solutions/enterprise-knowledge-management",
    title: "Enterprise knowledge management",
    copy: "Platforms that reconnect fragmented knowledge into usable clarity.",
    cta: "Know more",
  },
  {
    href: "/services/rag-engineering",
    title: "RAG engineering",
    copy: "Custom retrieval-augmented generation with evaluations and permissions.",
    cta: "Know more",
  },
  {
    href: "/services/agentic-voice-workflows",
    title: "Agentic voice workflows",
    copy: "Conversational systems that call tools safely and leave an audit trail.",
    cta: "Know more",
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
            Products first.
            <span className="mt-3 block text-[#31543a]">
              Engineering that follows.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            Start with the product that matches your problem. Each page opens
            with the product story, then the full details—architecture,
            answers, and how to begin.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]" id="products">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            01 // Products
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#0f1c13]">
            Choose a product path
          </h2>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <li
                className="flex flex-col rounded-2xl border border-[#d8e0d5] bg-white/60 p-6 md:p-8"
                key={product.href}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
                    {product.label}
                  </p>
                  <span className="rounded-full border border-[#d8e0d5] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#4a5b4e]">
                    {product.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-[-0.03em] text-[#0f1c13]">
                  {product.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-[#4a5b4e]">
                  {product.copy}
                </p>
                <Link
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1a3323] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#2c4f37]"
                  href={product.href}
                >
                  {product.cta}
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7f6f1]" id="supporting-services">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            02 // Supporting services
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#0f1c13]">
            The systems behind the products
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#4a5b4e]">
            Knowledge platforms, retrieval engineering, and agentic voice—
            used alone or as the substrate for Cares and Persona.
          </p>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {supportingServices.map((service) => (
              <li
                className="flex flex-col border-b border-[#d8e0d5] pb-8"
                key={service.href}
              >
                <h3 className="font-display text-xl tracking-[-0.03em] text-[#0f1c13]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#4a5b4e]">
                  {service.copy}
                </p>
                <Link
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-[#31543a] underline-offset-4 hover:underline"
                  href={service.href}
                >
                  {service.cta}
                  <ArrowUpRight aria-hidden className="size-3.5" />
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
