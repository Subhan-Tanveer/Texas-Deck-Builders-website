"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Variant = "rise" | "wipe" | "pop" | "fade" | "left" | "right";

/**
 * Scroll-triggered reveal (brief 3b). Uses IntersectionObserver so it
 * watches real rendered geometry (can't go stale like a pre-computed
 * scroll position). Honors prefers-reduced-motion by showing instantly.
 */
export default function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setShown(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 15000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const active = reduced || shown;
  const base: React.CSSProperties = {
    transitionDelay: delay ? `${delay}s` : undefined,
    willChange: "opacity, transform, clip-path",
  };

  const hidden: Record<Variant, React.CSSProperties> = {
    rise: { opacity: 0, transform: "translateY(56px)" },
    fade: { opacity: 0 },
    pop: { opacity: 0, transform: "scale(0.85) rotate(-2deg)" },
    left: { opacity: 0, transform: "translateX(-64px)" },
    right: { opacity: 0, transform: "translateX(64px)" },
    wipe: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
  };
  const visible: React.CSSProperties = {
    opacity: 1,
    transform: "translate(0,0) scale(1) rotate(0)",
    clipPath: "inset(0 0 0 0%)",
  };

  const easing =
    variant === "pop"
      ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
      : "cubic-bezier(0.22, 1, 0.36, 1)";

  const style: React.CSSProperties = {
    ...base,
    ...(active ? visible : hidden[variant]),
    transitionProperty: "opacity, transform, clip-path",
    transitionDuration: reduced ? "1ms" : variant === "wipe" ? "1000ms" : "800ms",
    transitionTimingFunction: easing,
  };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
