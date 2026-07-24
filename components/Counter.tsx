"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Animated statistic counter (brief 3c). Counts 0 → value over ~2.2s with
 * an ease-out curve when scrolled into view, and grows slightly in size as
 * it rises for visual emphasis. Reduced motion shows the final value.
 */
export default function Counter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2200,
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [scale, setScale] = useState(0.92);
  const started = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      setScale(1);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // ease-out-quad
          const eased = 1 - (1 - p) * (1 - p);
          setDisplay(value * eased);
          setScale(0.92 + 0.08 * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, reduced]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transform: `scale(${scale})`,
        transition: "transform 80ms linear",
      }}
    >
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
