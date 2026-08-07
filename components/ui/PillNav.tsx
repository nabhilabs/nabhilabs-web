"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

export function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = (w * w) / 4 / h + h / 2;
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0,
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0,
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0,
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { width: "auto", duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--logo"]: "36px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  } as React.CSSProperties;

  return (
    <div className="relative z-[1000] w-full md:w-auto">
      <nav
        aria-label="Primary"
        className={`box-border flex w-full items-center justify-between px-0 md:w-max md:justify-start ${className}`}
        style={cssVars}
      >
        <a
          aria-label="Home"
          className="inline-flex items-center justify-center overflow-hidden rounded-full p-2"
          href="/"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={logoAlt}
            className="block h-full w-full object-cover"
            ref={logoImgRef}
            src={logo}
          />
        </a>

        <div
          className="relative ml-2 hidden items-center rounded-full md:flex"
          ref={navItemsRef}
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <ul
            className="m-0 flex h-full list-none items-stretch p-[3px]"
            role="menubar"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg, #fff)",
                color: "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              return (
                <li className="flex h-full" key={item.href} role="none">
                  <a
                    aria-label={item.ariaLabel || item.label}
                    className="relative box-border inline-flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-0 text-[13px] font-semibold leading-[0] tracking-[0.2px] whitespace-nowrap no-underline uppercase"
                    href={item.href}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    role="menuitem"
                    style={pillStyle}
                  >
                    <span
                      aria-hidden="true"
                      className="hover-circle pointer-events-none absolute bottom-0 left-1/2 z-[1] block rounded-full"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                      style={{
                        background: "var(--base, #000)",
                        willChange: "transform",
                      }}
                    />
                    <span className="label-stack relative z-[2] inline-block leading-[1]">
                      <span
                        className="pill-label relative z-[2] inline-block leading-[1]"
                        style={{ willChange: "transform" }}
                      >
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-label-hover absolute top-0 left-0 z-[3] inline-block"
                        style={{
                          color: "var(--hover-text, #fff)",
                          willChange: "transform, opacity",
                        }}
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-[6px] left-1/2 z-[4] h-3 w-3 -translate-x-1/2 rounded-full"
                        style={{ background: "var(--base, #000)" }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="relative flex cursor-pointer flex-col items-center justify-center gap-1 rounded-full border-0 p-0 md:hidden"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
          type="button"
        >
          <span
            className="hamburger-line h-0.5 w-4 origin-center rounded transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "var(--pill-bg, #fff)" }}
          />
          <span
            className="hamburger-line h-0.5 w-4 origin-center rounded transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "var(--pill-bg, #fff)" }}
          />
        </button>
      </nav>

      <div
        className="absolute top-[3.25rem] right-0 left-0 z-[998] origin-top rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:hidden"
        ref={mobileMenuRef}
        style={{
          ...cssVars,
          background: "var(--base, #f0f0f0)",
        }}
      >
        <ul className="m-0 flex list-none flex-col gap-[3px] p-[3px]">
          {items.map((item) => {
            const defaultStyle: React.CSSProperties = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, #fff)",
            };
            const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "var(--base)";
              e.currentTarget.style.color = "var(--hover-text, #fff)";
            };
            const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "var(--pill-bg, #fff)";
              e.currentTarget.style.color = "var(--pill-text, #fff)";
            };

            return (
              <li key={item.href}>
                <a
                  className="block rounded-[50px] px-4 py-3 text-[15px] font-medium transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  style={defaultStyle}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
