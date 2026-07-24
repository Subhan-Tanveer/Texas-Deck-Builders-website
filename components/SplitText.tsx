"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Word-by-word headline reveal. Each word rises + rotates in from below a
 * masked line for a confident, editorial entrance. Falls back to plain text
 * under reduced motion.
 */
export default function SplitText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  trigger = true,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  trigger?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const words = el.querySelectorAll("[data-word]");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 120, rotate: 5, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.06,
        delay,
        ...(trigger
          ? { scrollTrigger: { trigger: el, start: "top 85%" } }
          : {}),
      });
    }, el);
    return () => ctx.revert();
  }, [reduced, delay, trigger]);

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
        >
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < text.split(" ").length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
