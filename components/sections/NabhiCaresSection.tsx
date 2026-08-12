import {
  ArrowUpRight,
  HeartPulse,
  Infinity,
  ShieldCheck,
  Stethoscope,
  Sunrise,
  Target,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

const promises = [
  {
    title: "Care-first clarity",
    copy: "We map clinical and ops reality before introducing models.",
    icon: Infinity,
  },
  {
    title: "Purposeful integration",
    copy: "AI connects systems people already use—never another silo.",
    icon: Target,
  },
  {
    title: "Accountable impact",
    copy: "Assistive by design: humans stay responsible; knowledge becomes usable.",
    icon: Sunrise,
  },
] as const;

type NabhiCaresSectionProps = {
  chapterTag?: string;
  asPageHero?: boolean;
};

export function NabhiCaresSection({
  chapterTag = "Product // Nabhi Cares",
  asPageHero = false,
}: NabhiCaresSectionProps) {
  const gradient =
    "radial-gradient(circle at 30% 20%, #1a2e3d 0%, #121a16 40%, #0e1012 78%)";

  return (
    <section
      className={`section-theme-dark relative z-10 text-white transition-colors duration-700 ${
        asPageHero ? "pt-[4.25rem]" : "bg-[#0e1012]"
      }`}
      id="nabhi-cares"
      style={asPageHero ? { background: gradient } : undefined}
    >
      <Reveal
        className={`mx-auto max-w-[95rem] p-6 md:p-10 lg:p-14 ${
          asPageHero ? "" : "bg-[radial-gradient(circle_at_30%_20%,#1a2e3d_0%,#121a16_40%,#0e1012_78%)]"
        }`}
      >
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag inverse>{chapterTag}</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              Healthcare AI for operations that need trust.
            </p>
            <h2 className="mt-8 font-display text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Nabhi
              <br />
              Cares<span className="text-[#cde0b8]">.</span>
            </h2>
            <div className="mt-8 max-w-lg space-y-4 text-sm font-light leading-7 text-white/65">
              <p>
                Care teams drown in systems yet starve for a coherent picture of
                status, policy, and next action.
              </p>
              <p>
                Nabhi Cares brings Healthcare AI into operations with
                retrieval, workflows, and compliance posture that keep humans
                accountable.
              </p>
            </div>
            <a
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#cde0b8] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-white"
              href={asPageHero ? "#answers" : "/products/nabhi-cares"}
            >
              {asPageHero ? "Read the details" : "Explore Healthcare AI"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <Stethoscope className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Clinical & ops clarity</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Reduce rediscovery across scheduling, documentation, and
                  departmental knowledge.
                </p>
              </div>
              <div>
                <HeartPulse className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Assistive, not replacing</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Designed to support judgment—never to substitute clinical
                  responsibility.
                </p>
              </div>
              <div>
                <ShieldCheck className="size-5 text-[#cde0b8]" />
                <h3 className="mt-3 text-xs">Compliance posture</h3>
                <p className="mt-2 text-[10px] leading-4 text-white/45">
                  Least privilege, auditability, and clear boundaries for
                  HIPAA-aware retrieval.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center pt-10 lg:pt-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nabhi Cares healthcare AI"
              className="flagship-float h-auto w-[112%] max-w-none object-contain lg:w-[118%]"
              height={808}
              src="/assets/HeartSection.svg"
              width={1132}
            />
          </div>        </div>

        <div className="mt-6 grid gap-4 rounded-[22px] border border-white/10 bg-white/[0.035] px-5 py-5 md:grid-cols-[minmax(0,1.85fr)_repeat(3,minmax(0,1fr))] md:items-center md:gap-0 md:px-6 md:py-5">
          <div className="md:pr-8">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#cde0b8]">
              This is our promise
            </p>
            <p className="mt-2 font-display text-xl leading-7 tracking-[-0.03em] text-white/80 md:text-[1.35rem] md:leading-8">
              Care operations deserve clarity—
              <br />
              <span className="text-[#cde0b8]">
                not another disconnected AI layer.
              </span>
            </p>
          </div>
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div
                className="flex flex-col justify-center border-t border-white/10 pt-4 md:border-l md:border-t-0 md:px-5 md:pt-0"
                key={promise.title}
              >
                <Icon className="size-4 text-[#cde0b8]" />
                <h3 className="mt-2 text-xs text-white/80">{promise.title}</h3>
                <p className="mt-1.5 text-[9px] leading-4 text-white/40">
                  {promise.copy}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
