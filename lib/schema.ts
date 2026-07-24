import { SITE } from "./site";
import { SERVICES } from "./services";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.texasdeckbuilders.com";

/** LocalBusiness + AggregateRating JSON-LD for the whole site. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: SITE.legalName,
  image: `${SITE_URL}/images/hero-poster.webp`,
  url: SITE_URL,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3935,
    longitude: -97.8412,
  },
  areaServed: SITE.serviceArea.map((name) => ({
    "@type": "City",
    name,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [SITE.facebook, SITE.instagram],
  founder: {
    "@type": "Person",
    name: SITE.owner,
    jobTitle: SITE.ownerTitle,
  },
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.tagline,
    },
  })),
};

export function serviceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: SITE.serviceArea.join(", "),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
