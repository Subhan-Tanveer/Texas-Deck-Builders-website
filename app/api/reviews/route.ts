import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { TESTIMONIALS } from "@/lib/testimonials";

export const runtime = "nodejs";
// Cache live results for 1 hour so we don't hit the Places API on every load.
export const revalidate = 3600;

type GooglePlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

/**
 * Returns review data for the widget. If GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID
 * are set, it fetches LIVE reviews from the Google Places Details API.
 * Otherwise it returns curated reviews so the widget is always populated.
 */
export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const fallback = {
    rating: SITE.rating,
    reviewCount: SITE.reviewCount,
    live: false,
    reviews: TESTIMONIALS.map((t) => ({
      name: t.name,
      neighborhood: t.neighborhood,
      rating: t.rating,
      quote: t.quote,
      project: t.project,
      avatar: t.avatar,
    })),
  };

  if (!key || !placeId) {
    return NextResponse.json(fallback);
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", key);

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const json = await res.json();
    const result = json.result;
    if (!result) return NextResponse.json(fallback);

    return NextResponse.json({
      rating: result.rating ?? SITE.rating,
      reviewCount: result.user_ratings_total ?? SITE.reviewCount,
      live: true,
      reviews: (result.reviews as GooglePlaceReview[] | undefined)?.map(
        (r) => ({
          name: r.author_name,
          neighborhood: r.relative_time_description,
          rating: r.rating,
          quote: r.text,
          project: "Verified Google review",
          avatar: r.profile_photo_url,
        })
      ) ?? fallback.reviews,
    });
  } catch (err) {
    console.error("[reviews] Google fetch failed:", err);
    return NextResponse.json(fallback);
  }
}
