"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggered reveal for groups of children (brief 3b: stagger heading, text,
 * cards by 0.1–0.15s to create rhythm). Each direct child animates up + in
 * as the container enters the viewport. Uses ease-out-back for a warm,
 * organic feel.
 */
export default function RevealStagger({
  children,
  className = "",
  stagger = 0.12,
  y = 44,
  start = "top 82%",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "back.out(1.4)",
        stagger,
        scrollTrigger: { trigger: el, start },
      });
    }, el);

    return () => ctx.revert();
  }, [reduced, stagger, y, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
