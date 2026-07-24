"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Signature before/after slider (brief 3d). Drag or touch the handle to
 * compare. "Before"/"After" labels fade in as it enters view; on first
 * reveal the handle does a subtle auto "peek" sweep to teach the interaction.
 * Keyboard accessible (arrow keys move the divider).
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = "",
  priority = false,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const reduced = useReducedMotion();

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  // Pointer events cover mouse + touch + pen uniformly.
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => setFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, setFromClientX]);

  // Reveal + one-time teaching "peek" sweep.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || revealed) return;
        setRevealed(true);
        if (reduced) return;
        // animate 50 -> 68 -> 34 -> 50
        const seq = [
          [68, 350],
          [34, 750],
          [50, 1150],
        ] as const;
        seq.forEach(([to, at]) => {
          window.setTimeout(() => setPos(to), at);
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [revealed, reduced]);

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl bg-forest shadow-[var(--shadow-lift)] ${className}`}
      onPointerDown={(e) => {
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* AFTER (base layer, full) */}
      <div className="absolute inset-0">
        <SmartImage
          src={after}
          alt={afterAlt}
          priority={priority}
          tone="wood"
          label={afterAlt}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* BEFORE (clipped by position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <SmartImage
          src={before}
          alt={beforeAlt}
          tone="sky"
          label={beforeAlt}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Labels */}
      <span
        className={`absolute left-4 top-4 rounded-full bg-forest/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur transition-opacity duration-700 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        Before
      </span>
      <span
        className={`absolute right-4 top-4 rounded-full bg-amber px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest transition-opacity duration-700 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-cream/90 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-forest bg-cream text-forest shadow-lg transition-transform duration-300 group-hover:scale-110">
          <MoveHorizontal size={22} />
        </span>
      </div>
    </div>
  );
}
