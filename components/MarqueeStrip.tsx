import { Star } from "lucide-react";

/**
 * Infinite marquee ticker of trust signals / service areas. Duplicated
 * content + 50% translate = seamless loop. Pauses on hover.
 */
export default function MarqueeStrip({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`group relative flex overflow-hidden border-y border-cream/10 bg-forest py-4 ${className}`}
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 font-display text-lg font-medium text-cream/80"
          >
            {item}
            <Star size={14} className="fill-amber text-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
