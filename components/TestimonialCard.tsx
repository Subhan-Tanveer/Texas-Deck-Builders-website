import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";
import StarRating from "@/components/StarRating";
import SmartImage from "@/components/SmartImage";

export default function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure
      className={`relative flex h-full flex-col rounded-2xl bg-linen p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <Quote
        size={40}
        className="absolute right-6 top-6 text-cedar/15"
        aria-hidden
      />
      <StarRating value={testimonial.rating} size={17} />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-bark/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-bark/10 pt-5">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-forest text-cream">
          {testimonial.avatar ? (
            <SmartImage
              src={testimonial.avatar}
              alt={testimonial.name}
              tone="green"
              label={initials}
              sizes="44px"
            />
          ) : (
            <span className="grid h-full w-full place-items-center text-sm font-semibold">
              {initials}
            </span>
          )}
        </span>
        <span>
          <span className="block text-sm font-semibold text-forest">
            {testimonial.name}
          </span>
          <span className="block text-xs text-ash">
            {testimonial.neighborhood} · {testimonial.project}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
