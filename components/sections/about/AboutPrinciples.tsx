function ClarityIcon() {
  return (
    <svg
      aria-hidden
      className="size-9 text-[#B7E84A]"
      fill="none"
      viewBox="0 0 40 40"
    >
      <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.1"
          transform={`rotate(${deg} 20 20)`}
          x1="20"
          x2="20"
          y1="3"
          y2="9"
        />
      ))}
    </svg>
  );
}

function AdaptabilityIcon() {
  return (
    <svg
      aria-hidden
      className="size-9 text-[#B7E84A]"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        d="M8 28 V16 C8 12 12 10 16 10 H24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <path
        d="M24 10 C28 10 32 12 32 16 V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <path
        d="M16 10 C16 14 18 18 22 22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <circle cx="8" cy="30" fill="currentColor" r="2" />
      <circle cx="32" cy="22" fill="currentColor" r="2" />
      <circle cx="24" cy="24" fill="currentColor" r="2" />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg
      aria-hidden
      className="size-9 text-[#B7E84A]"
      fill="none"
      viewBox="0 0 40 40"
    >
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="20" cy="20" fill="currentColor" r="1.5" />
    </svg>
  );
}

const principles = [
  {
    number: "01",
    title: "Clarity",
    copy: "Information organized so you always know what matters now—not buried in noise.",
    icon: ClarityIcon,
    tone: "light" as const,
  },
  {
    number: "02",
    title: "Adaptability",
    copy: "Systems that adjust as priorities shift, matching how teams actually operate.",
    icon: AdaptabilityIcon,
    tone: "dark" as const,
  },
  {
    number: "03",
    title: "Focus",
    copy: "Everything works together, so decisions keep their thread without friction or rework.",
    icon: FocusIcon,
    tone: "light" as const,
  },
] as const;

export function AboutPrinciples() {
  return (
    <section
      aria-labelledby="about-principles-heading"
      className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
      id="principles"
    >
      <div className="mx-auto grid max-w-[95rem] gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:items-stretch lg:gap-8">
        <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.75rem] bg-[#071B12] px-7 py-9 text-[#cde0b8] md:px-9 md:py-11">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,rgba(183,232,74,0.16),transparent_55%)]"
          />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7E84A]">
              01 // Principles
            </p>
            <h2
              className="mt-6 max-w-md font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white"
              id="about-principles-heading"
            >
              We bring strategic thinking and systems craft so organizations
              operate with{" "}
              <em className="font-serif font-normal italic text-[#B7E84A]">
                clarity
              </em>
              —and grow with purpose.
            </h2>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3">
          {principles.map(({ number, title, copy, icon: Icon, tone }, index) => {
            const dark = tone === "dark";
            return (
              <li
                className={`about-principle-card feature-lift flex flex-col rounded-2xl border p-5 md:p-6 ${
                  dark
                    ? "border-[#1a3323] bg-[#0f1c13] text-[#cde0b8]"
                    : "border-[#d8e0d5] bg-[#f8f8f4]"
                }`}
                key={title}
                style={{ animationDelay: `${120 + index * 110}ms` }}
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl border ${
                    dark
                      ? "border-white/10 bg-[#071B12]"
                      : "border-[#d8e0d5] bg-[#071B12]"
                  }`}
                >
                  <Icon />
                </span>
                <p
                  className={`mt-5 font-mono text-[9px] uppercase tracking-[0.16em] ${
                    dark ? "text-[#B7E84A]/80" : "text-[#78966a]"
                  }`}
                >
                  {number}
                </p>
                <h3
                  className={`mt-2 font-display text-lg font-semibold tracking-[-0.02em] ${
                    dark ? "text-white" : "text-[#071B12]"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    dark ? "text-[#cde0b8]/75" : "text-[#4a5b4e]"
                  }`}
                >
                  {copy}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
