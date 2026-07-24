"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/site";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { scrollSmootherRef } from "@/lib/scrollSmoother";

gsap.registerPlugin(ScrollTrigger);

const ENTER_DURATION = 0.35;
const HOLD_DURATION = 0.65; // full-screen cover time, per spec (0.6-0.7s)
const EXIT_DURATION = 0.4;
const SAFETY_RESET_MS = 4000;

/**
 * Full-screen curtain page transition. The panel's resting/pre-hydration
 * state is "covering the whole screen" (no transform, matching `fixed
 * inset-0`), so a hard reload naturally shows the curtain covering the page
 * first. On every internal link click: the panel sweeps in from the left,
 * fully covers the screen, holds for ~0.65s (during which the route swaps
 * underneath), then continues sweeping right off-screen to reveal the new
 * page — showing the logo + brand wordmark while covering.
 */
export default function PageTransition() {
  const panelRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isAnimating = useRef(false);
  const navigatedRef = useRef(false);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // The single in-flight timeline (reveal-on-mount OR click-initiated enter).
  // Killing this (not just killTweensOf on the elements) is what actually
  // stops a still-running timeline's own playhead — killTweensOf only kills
  // *tweens*, so a timeline mid-"hold" (no active child tween at that
  // instant) would otherwise keep ticking in the background and later fire
  // its own exit/onComplete on top of a newer, unrelated animation.
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const clearSafetyTimer = () => {
    if (safetyTimer.current) {
      clearTimeout(safetyTimer.current);
      safetyTimer.current = null;
    }
  };

  const parkOffScreen = () => {
    const panel = panelRef.current;
    const brand = brandRef.current;
    if (!panel) return;
    masterTl.current?.kill();
    masterTl.current = null;
    gsap.killTweensOf([panel, brand]);
    gsap.set(panel, { xPercent: -100 });
    if (brand) gsap.set(brand, { opacity: 0 });
    isAnimating.current = false;
    clearSafetyTimer();
  };

  // Reveal step: runs on first mount (page load/reload) AND every time the
  // pathname actually changes after a click-initiated nav. In both cases the
  // panel is already covering the screen (xPercent 0) when this fires — on
  // first mount via the static default position, on nav via the click
  // handler's enter sweep — so this only ever has to do the "hold, then
  // sweep right to reveal" half.
  useEffect(() => {
    ScrollTrigger.refresh();

    if (navigatedRef.current) {
      const smoother = scrollSmootherRef.current;
      if (smoother) smoother.scrollTo(0, false);
      else window.scrollTo(0, 0);
      navigatedRef.current = false;
    }

    const panel = panelRef.current;
    const brand = brandRef.current;
    if (!panel) return;

    if (reduced) {
      parkOffScreen();
      return;
    }

    masterTl.current?.kill();
    gsap.killTweensOf([panel, brand]);
    gsap.set(panel, { xPercent: 0 });

    masterTl.current = gsap
      .timeline({ onComplete: parkOffScreen })
      .to(brand, { opacity: 1, duration: 0.15 })
      .to(
        panel,
        { xPercent: 100, duration: EXIT_DURATION, ease: "power2.inOut" },
        `+=${HOLD_DURATION}`
      )
      .set(brand, { opacity: 0 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === pathname && !url.hash) return;
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const destination = url.pathname + url.search;

      if (reduced) {
        router.push(destination);
        return;
      }

      isAnimating.current = true;
      navigatedRef.current = true;
      clearSafetyTimer();
      // Backstop: if a route change never resolves (slow/failed nav), don't
      // leave every future click permanently blocked — force a reset.
      safetyTimer.current = setTimeout(parkOffScreen, SAFETY_RESET_MS);

      const panel = panelRef.current;
      masterTl.current?.kill();
      gsap.killTweensOf(panel);
      masterTl.current = gsap
        .timeline({ onComplete: () => router.push(destination) })
        .to(panel, { xPercent: 0, duration: ENTER_DURATION, ease: "power2.inOut" });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, reduced, router]);

  useEffect(() => clearSafetyTimer, []);

  return (
    <div
      ref={panelRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-forest will-change-transform"
    >
      {/* Cedar/amber accent edges */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cedar via-amber to-cedar" />
      <div className="absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b from-cedar via-amber to-cedar" />

      <div
        ref={brandRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0"
      >
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={211}
          priority
          className="h-24 w-auto sm:h-32"
        />
        <span className="font-display text-2xl font-semibold tracking-wide text-cream sm:text-3xl">
          {SITE.name}
        </span>
      </div>
    </div>
  );
}
