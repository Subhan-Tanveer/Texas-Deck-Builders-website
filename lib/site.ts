export const SITE = {
  name: "Texas Deck Builders",
  legalName: "Texas Deck Builders LLC",
  tagline:
    "Build your dream backyard with Austin's fastest-growing deck experts.",
  owner: "Duke Schneider",
  ownerTitle: "Owner & General Manager",
  phone: "(512) 555-0142", // TODO: replace with Duke's real number
  phoneHref: "tel:+15125550142",
  email: "duke@texasdeckbuilders.com",
  address: {
    street: "10301 Ranch Road 2222, Suite 2232",
    city: "Austin",
    state: "TX",
    zip: "78730",
    full: "10301 Ranch Road 2222, Suite 2232, Austin, TX 78730",
  },
  rating: 4.9,
  reviewCount: 43,
  yearsCombinedExperience: 10,
  googleReviewsUrl:
    "https://www.google.com/search?q=Texas+Deck+Builders+Austin+reviews",
  googleBusinessUrl: "https://maps.google.com/?q=Texas+Deck+Builders+Austin+TX",
  facebook: "https://facebook.com/texasdeckbuilders",
  instagram: "https://instagram.com/texasdeckbuilders",
  serviceArea: [
    "Austin",
    "Circle C",
    "Westlake",
    "Lakeway",
    "Cedar Park",
    "Round Rock",
    "Dripping Springs",
    "Bee Cave",
  ],
} as const;

// Drop the generated hero clip in public/videos/ using these exact filenames
// and the hero automatically switches from the still image to the real,
// scroll-scrubbed video — no other code change needed. See AI_ASSET_PROMPTS.md.
export const HERO_MEDIA = {
  video: "/videos/hero.mp4",
  videoMobile: "/videos/hero-mobile.mp4",
  poster: "/images/hero-poster.webp",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Get a Quote" },
] as const;

export const STATS = [
  { value: 4.9, suffix: "★", label: "Google rating", decimals: 1 },
  { value: 43, suffix: "+", label: "5-star reviews" },
  { value: 10, suffix: "+", label: "Years combined experience" },
  { value: 100, suffix: "%", label: "Owner-managed projects" },
] as const;
