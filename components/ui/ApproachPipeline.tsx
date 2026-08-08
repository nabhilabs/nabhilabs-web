"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ApproachStep = {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

type ApproachPipelineProps = {
  steps: readonly ApproachStep[];
};

/**
 * Editorial 1×4 process cards — staggered reveal, soft cycle focus, image drift.
 */
export function ApproachPipeline({ steps }: ApproachPipelineProps) {
  const last = steps.length - 1;
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(reduce.matches);
    const onChange = () => setReduceMotion(reduce.matches);
    reduce.addEventListener("change", onChange);
    return () => reduce.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduceMotion || steps.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [visible, reduceMotion, steps.length]);

  return (
    <div className="relative" ref={rootRef}>
      <div
        aria-hidden
        className="pointer-events-none absolute top-[42%] right-[6%] left-[6%] hidden h-px overflow-hidden bg-[#c8d6c4]/35 lg:block"
      >
        <span className="pipeline-flow absolute inset-y-0 left-0 w-1/3" />
      </div>

      <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {steps.map((step, index) => {
          const isLast = index === last;
          const isActive = active === index;
          const number = String(index + 1).padStart(2, "0");
          const delayMs = index * 110;

          return (
            <li
              key={step.title}
              className="transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: visible ? `${delayMs}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1.25rem)",
              }}
              onMouseEnter={() => !reduceMotion && setActive(index)}
            >
              <article
                className={`group relative flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-[20px] border p-4 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-[15rem] md:p-5 ${
                  isActive
                    ? "z-[1] -translate-y-1 border-[#a3e635]/55 shadow-[0_18px_40px_rgba(26,51,35,0.16)]"
                    : isLast
                      ? "border-[#cde0b8]/45 shadow-[0_14px_36px_rgba(26,51,35,0.18)] hover:-translate-y-0.5"
                      : "border-[#d8e0d5]/80 shadow-[0_10px_28px_rgba(26,51,35,0.06)] hover:-translate-y-0.5 hover:border-[#a3e635]/40"
                }`}
              >
                <div
                  className={`absolute inset-0 overflow-hidden transition-transform duration-[1.2s] ease-out will-change-transform ${
                    isActive ? "scale-[1.04]" : "scale-100 group-hover:scale-[1.03]"
                  }`}
                >
                  <Image
                    alt={step.imageAlt}
                    className="approach-kenburns object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    src={step.image}
                    style={{ animationDelay: `${index * 1.1}s` }}
                  />
                </div>
                <div
                  aria-hidden
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isLast
                      ? "bg-[linear-gradient(160deg,rgba(15,28,19,0.72)_0%,rgba(26,51,35,0.55)_45%,rgba(26,51,35,0.78)_100%)]"
                      : "bg-[linear-gradient(160deg,rgba(15,28,19,0.62)_0%,rgba(15,28,19,0.38)_48%,rgba(15,28,19,0.68)_100%)]"
                  } ${isActive ? "opacity-90" : "opacity-100"}`}
                />

                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-1 -top-3 select-none font-display text-[4.75rem] font-semibold leading-none tracking-[-0.07em] transition-all duration-500 md:text-[5.5rem] ${
                    isActive
                      ? "translate-y-0 text-white/55"
                      : "translate-y-1 text-white/45"
                  }`}
                >
                  {number}
                </span>

                <p
                  className={`relative font-mono text-[13px] font-semibold tracking-[0.14em] transition-colors duration-500 md:text-sm ${
                    isActive ? "text-[#d9f99d]" : "text-[#cde0b8]"
                  }`}
                >
                  {number}
                </p>

                <div className="relative mt-auto max-w-[12.5rem]">
                  <h4 className="font-display text-base font-semibold tracking-[-0.03em] text-white md:text-lg">
                    {step.title}
                  </h4>
                  <p
                    className={`mt-2 text-[13px] leading-5 transition-opacity duration-500 md:text-sm md:leading-5 ${
                      isActive ? "text-white/90" : "text-white/80"
                    }`}
                  >
                    {step.copy}
                  </p>
                </div>

                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-5 bottom-0 h-0.5 origin-left rounded-full bg-[#a3e635]/80 transition-transform duration-500 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
