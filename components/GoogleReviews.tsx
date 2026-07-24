"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";
import StarRating from "@/components/StarRating";
import TestimonialCard from "@/components/TestimonialCard";
import Reveal from "@/components/Reveal";

type ReviewApi = {
  rating: number;
  reviewCount: number;
  reviews: Testimonial[];
  live: boolean;
};

/**
 * Google review widget (brief §5). Renders the prominent 4.9★ badge and a
 * grid of recent reviews. On mount it calls /api/reviews — if a Places API
 * key + Place ID are configured it returns LIVE Google data; otherwise it
 * gracefully serves curated reviews so the widget always looks populated.
 */
export default function GoogleReviews({
  limit = 6,
  compact = false,
}: {
  limit?: number;
  compact?: boolean;
}) {
  const [data, setData] = useState<ReviewApi>({
    rating: SITE.rating,
    reviewCount: SITE.reviewCount,
    reviews: TESTIMONIALS.slice(0, limit),
    live: false,
  });

  useEffect(() => {
    let alive = true;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : null))
      .then((json: ReviewApi | null) => {
        if (alive && json?.reviews?.length) {
          setData({ ...json, reviews: json.reviews.slice(0, limit) });
        }
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [limit]);

  return (
    <div>
      {/* Aggregate badge */}
      <Reveal variant="pop">
        <div className="mx-auto mb-10 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-linen px-8 py-6 text-center shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
              <path fill="#FBBC05" d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.67-2.84Z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.85 9.9C6.71 7.31 9.14 5.38 12 5.38Z" />
            </svg>
            <span className="text-sm font-semibold text-ash">Google Reviews</span>
            {data.live && (
              <span className="rounded-full bg-pine/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-pine">
                Live
              </span>
            )}
          </div>
          <div className="flex items-end gap-3">
            <span className="font-display text-5xl font-semibold leading-none text-forest">
              {data.rating.toFixed(1)}
            </span>
            <div className="pb-1 text-left">
              <StarRating value={data.rating} size={20} animated />
              <p className="mt-1 text-xs text-ash">
                {data.reviewCount}+ verified reviews
              </p>
            </div>
          </div>
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest underline-offset-4 hover:text-cedar hover:underline"
          >
            View on Google <ExternalLink size={14} />
          </a>
        </div>
      </Reveal>

      {/* Reviews grid */}
      <div
        className={`grid gap-6 ${
          compact
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {data.reviews.map((t, i) => (
          <Reveal key={t.name + i} variant="rise" delay={i * 0.06}>
            <TestimonialCard testimonial={t} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs text-ash">
        <Star size={12} className="fill-amber text-amber" />
        {data.live
          ? "Showing live reviews from Google."
          : "Add a Google Places API key to show live reviews — see README."}
      </p>
    </div>
  );
}
