"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { scrollSmootherRef } from "@/lib/scrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Site-wide inertia scrolling (brief 3a). ScrollSmoother provides the
 * momentum-based, eased scroll and powers all `data-speed` / `data-lag`
 * parallax effects across the site. Fully disabled under
 * prefers-reduced-motion.
 */
export default function SmoothScrollProvider() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.documentElement.classList.add("has-smooth-scroll");
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2, // ~1.2s ease per screen (brief 3a)
        smoothTouch: 0.1,
        effects: true, // enables data-speed / data-lag parallax
        normalizeScroll: true,
      });
      scrollSmootherRef.current = smoother;

      return () => {
        scrollSmootherRef.current = null;
        smoother.kill();
        document.documentElement.classList.remove("has-smooth-scroll");
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      ScrollTrigger.refresh();
    });

    // Late-loading fonts/images shift layout; refresh so triggers below
    // headline text aren't left measuring against fallback fonts.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
