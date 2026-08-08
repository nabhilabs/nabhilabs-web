"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type PillNavProps = {
  logo?: string;
  logoAlt?: string;
  logoLabel?: string;
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
  /** Extra controls rendered beside the desktop pill cluster (e.g. search). */
  endSlot?: ReactNode;
  /** Extra controls on mobile next to the hamburger. */
  mobileEndSlot?: ReactNode;
};

export function PillNav({
  logo,
  logoAlt = "Logo",
  logoLabel = "Nabhi Labs",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "rgba(255, 255, 255, 0.55)",
  pillColor = "rgba(255, 255, 255, 0.35)",
  hoveredPillTextColor = "#FFFFFF",
  pillTextColor = "#1A2E26",
  onMobileMenuClick,
  initialLoadAnimation = true,
  endSlot,
  mobileEndSlot,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLElement | null>(null);
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
        if (w === 0 || h === 0) return;

        const R = ((w * w) / 4 + h * h) / (2 * h);
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
      void document.fonts.ready.then(layout).catch(() => {});
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
      duration: 0.35,
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

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    setIsMobileMenuOpen(false);
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;
    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.2, ease });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.2, ease });
    }
    if (menu) {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.15,
        ease,
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      });
    }
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--logo"]: "28px",
    ["--pill-pad-x"]: "16px",
    ["--pill-gap"]: "3px",
    ["--glass-border"]: "rgba(255, 255, 255, 0.6)",
    ["--glass-hover"]: "rgba(255, 255, 255, 0.85)",
  } as CSSProperties;

  const glassShell: CSSProperties = {
    background: "var(--base)",
    border: "1px solid var(--glass-border)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 28px rgba(15, 28, 19, 0.06)",
  };

  const logoMark = (
    <span
      ref={logoImgRef}
      className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-[#1A2E26]/90 font-display text-[11px] font-semibold text-[#E2ECE9]"
    >
      {logo ? (
        <img alt="" className="size-full object-cover" src={logo} />
      ) : (
        "n"
      )}
    </span>
  );

  return (
    <div className={`relative w-full ${className}`} style={cssVars}>
      <nav
        aria-label="Primary navigation"
        className="flex w-full items-center justify-between gap-3"
      >
        <Link
          aria-label="Nabhi Labs - home"
          className="inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 no-underline transition-[background-color,border-color] duration-200 hover:border-white/90"
          href="/"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          style={{
            ...glassShell,
            height: "var(--nav-h)",
            color: "var(--pill-text)",
          }}
        >
          {logoMark}
          <span className="text-[13px] font-semibold tracking-[-0.02em]">
            {logoLabel}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div
            className="relative hidden items-center rounded-full md:flex"
            ref={navItemsRef}
            style={{
              ...glassShell,
              height: "var(--nav-h)",
            }}
          >
            <ul
              className="m-0 flex h-full list-none items-stretch p-[3px]"
              role="menubar"
              style={{ gap: "var(--pill-gap)" }}
            >
              {items.map((item, i) => {
                const isActive =
                  activeHref === item.href ||
                  (item.href !== "/" && activeHref?.startsWith(item.href));

                const pillStyle: CSSProperties = {
                  background: "var(--pill-bg)",
                  color: "var(--pill-text)",
                  paddingLeft: "var(--pill-pad-x)",
                  paddingRight: "var(--pill-pad-x)",
                  border: "1px solid transparent",
                  fontWeight: 500,
                  transition: "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",
                };

                return (
                  <li className="flex h-full" key={item.href} role="none">
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      aria-label={item.ariaLabel || item.label}
                      className="nav-pill relative box-border inline-flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-0 text-[12px] font-medium uppercase leading-[0] tracking-[0.04em] no-underline whitespace-nowrap"
                      href={item.href}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      role="menuitem"
                      style={pillStyle}
                    >
                      <span
                        aria-hidden
                        className="hover-circle pointer-events-none absolute bottom-0 left-1/2 z-[1] block rounded-full"
                        ref={(el) => {
                          circleRefs.current[i] = el;
                        }}
                        style={{
                          background: "#2E483A",
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
                          aria-hidden
                          className="pill-label-hover absolute top-0 left-0 z-[3] inline-block"
                          style={{
                            color: "var(--hover-text)",
                            willChange: "transform, opacity",
                          }}
                        >
                          {item.label}
                        </span>
                      </span>
                      {isActive ? (
                        <span
                          aria-hidden
                          className="absolute -bottom-[6px] left-1/2 z-[4] h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                          style={{ background: "#2E483A" }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {endSlot ? (
            <div className="hidden items-center md:flex">{endSlot}</div>
          ) : null}

          {mobileEndSlot ? (
            <div className="flex items-center md:hidden">{mobileEndSlot}</div>
          ) : null}

          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className="relative flex cursor-pointer flex-col items-center justify-center gap-1 rounded-full border-0 p-0 md:hidden"
            onClick={toggleMobileMenu}
            ref={hamburgerRef}
            style={{
              ...glassShell,
              width: "var(--nav-h)",
              height: "var(--nav-h)",
            }}
            type="button"
          >
            <span
              className="hamburger-line h-0.5 w-4 origin-center rounded"
              style={{ background: "var(--pill-text)" }}
            />
            <span
              className="hamburger-line h-0.5 w-4 origin-center rounded"
              style={{ background: "var(--pill-text)" }}
            />
          </button>
        </div>
      </nav>

      <div
        className="absolute top-[calc(100%+0.65rem)] right-0 left-0 z-[998] origin-top rounded-[27px] shadow-[0_8px_32px_rgba(15,28,19,0.12)] md:hidden"
        ref={mobileMenuRef}
        style={glassShell}
      >
        <ul className="m-0 flex list-none flex-col gap-[3px] p-[3px]">
          {items.map((item) => {
            const defaultStyle: CSSProperties = {
              background: "rgba(255, 255, 255, 0.45)",
              color: "var(--pill-text)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            };
            const hoverIn = (e: MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "#2E483A";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "#2E483A";
            };
            const hoverOut = (e: MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.45)";
              e.currentTarget.style.color = "var(--pill-text)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
            };

            return (
              <li key={item.href}>
                <Link
                  className="block rounded-[50px] px-4 py-3 text-[15px] font-medium transition-all duration-200"
                  href={item.href}
                  onClick={closeMobileMenu}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  style={defaultStyle}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
