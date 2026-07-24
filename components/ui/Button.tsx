"use client";

import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Variant = "primary" | "secondary" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-700 shadow-[0_10px_30px_-12px_rgba(20,53,31,0.7)]",
  amber:
    "bg-gradient-to-br from-cedar to-amber text-forest font-semibold shadow-[0_10px_30px_-12px_rgba(181,118,59,0.8)]",
  secondary:
    "bg-cream text-forest border-2 border-forest/25 hover:border-forest hover:bg-linen",
  ghost:
    "bg-forest/25 backdrop-blur-sm text-cream border-2 border-cream/50 hover:border-cream hover:bg-cream/15",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Magnetic CTA button. Subtly follows the cursor on hover (desktop) for a
 * tactile, premium feel; lifts + brightens on hover; clear focus ring.
 * Renders as <Link> when `href` is set, otherwise <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const move = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const inner = (
    <span
      ref={ref}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
    >
      {children}
    </span>
  );

  const cls = `group relative inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-[background,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        onMouseMove={move}
        onMouseLeave={reset}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      className={cls}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
