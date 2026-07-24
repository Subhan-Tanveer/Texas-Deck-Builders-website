import { Star } from "lucide-react";

/** Row of gold stars; supports half stars via `value` (e.g. 4.9). */
export default function StarRating({
  value = 5,
  size = 18,
  className = "",
  animated = false,
}: {
  value?: number;
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span
            key={i}
            className="relative inline-block"
            style={
              animated
                ? { animation: `star-pop 0.5s ${i * 0.08}s both` }
                : undefined
            }
          >
            <Star size={size} className="text-amber/30" strokeWidth={1.5} />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={size}
                className="text-amber fill-amber"
                strokeWidth={1.5}
              />
            </span>
          </span>
        );
      })}
    </span>
  );
}
