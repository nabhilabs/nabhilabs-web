function ClarityIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 text-[#cde0b8]"
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
      className="size-4 text-[#cde0b8]"
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
      className="size-4 text-[#cde0b8]"
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
  },
  {
    number: "02",
    title: "Adaptability",
    copy: "Systems that adjust as priorities shift, matching how teams actually operate.",
    icon: AdaptabilityIcon,
  },
  {
    number: "03",
    title: "Focus",
    copy: "Everything works together, so decisions keep their thread without friction or rework.",
    icon: FocusIcon,
  },
] as const;

export function AboutPrinciples() {
  return (
    <section
      aria-labelledby="about-principles-heading"
      className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
      id="principles"
    >
      <div className="mx-auto max-w-[95rem]">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a6b5e]">
          01 // Principles
        </p>
        <h2
          className="mt-6 max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#0f1c13]"
          id="about-principles-heading"
        >
          We bring strategic thinking and systems craft so organizations operate
          with{" "}
          <em className="font-serif font-normal italic text-[#31543a]">
            clarity
          </em>
          —and grow with purpose.
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {principles.map(({ number, title, copy, icon: Icon }, index) => (
            <li
              className="about-principle-card rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1] p-6 md:p-7"
              key={title}
              style={{ animationDelay: `${120 + index * 110}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13]">
                  <Icon />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5a7052]">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-[#0f1c13]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
