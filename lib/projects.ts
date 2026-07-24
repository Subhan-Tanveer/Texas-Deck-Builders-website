export type Project = {
  slug: string;
  title: string;
  type: "Deck" | "Patio" | "Pergola" | "Fence" | "Repair" | "Outdoor Living";
  neighborhood: string;
  material: string;
  size: string;
  scope: string;
  quote: string;
  customer: string;
  before: string; // /images/projects/*-before.webp
  after: string; // /images/projects/*-after.webp
  featured?: boolean;
};

/**
 * Real customer projects. Replace before/after image files in
 * public/images/projects/ (keep the same filenames) with the client's
 * actual photos, or with AI-generated pairs per AI_ASSET_PROMPTS.md.
 */
export const PROJECTS: Project[] = [
  {
    slug: "circle-c-cedar-pergola",
    title: "Cedar Deck with Louvered Pergola",
    type: "Deck",
    neighborhood: "Circle C Ranch",
    material: "Western Red Cedar",
    size: "1,000 sq ft",
    scope: "Multi-level cedar deck, louvered pergola, integrated lighting",
    quote: "Duke and his crew turned our sloped, unusable yard into the best room in our house.",
    customer: "The Hendersons",
    before: "/images/projects/circle-c-before.webp",
    after: "/images/projects/circle-c-after.webp",
    featured: true,
  },
  {
    slug: "westlake-composite-entertainer",
    title: "Composite Entertainer's Deck",
    type: "Deck",
    neighborhood: "Westlake",
    material: "TimberTech Composite",
    size: "820 sq ft",
    scope: "Low-maintenance composite deck with custom cable railing",
    quote: "Three years in and it still looks like the day they finished. Zero maintenance.",
    customer: "Marcus & Lena P.",
    before: "/images/projects/westlake-before.webp",
    after: "/images/projects/westlake-after.webp",
    featured: true,
  },
  {
    slug: "lakeway-hillside-multilevel",
    title: "Hillside Multi-Level Deck",
    type: "Deck",
    neighborhood: "Lakeway",
    material: "Ipe Hardwood",
    size: "1,400 sq ft",
    scope: "Three-tier hillside deck with steel substructure and lake views",
    quote: "They engineered a deck onto a hill everyone said was impossible. Unreal craftsmanship.",
    customer: "The Alvarez Family",
    before: "/images/projects/lakeway-before.webp",
    after: "/images/projects/lakeway-after.webp",
    featured: true,
  },
  {
    slug: "cedar-park-firepit-patio",
    title: "Paver Patio & Firepit Lounge",
    type: "Patio",
    neighborhood: "Cedar Park",
    material: "Natural Stone Pavers",
    size: "640 sq ft",
    scope: "Flagstone patio, gas firepit, built-in bench seating",
    quote: "Our backyard went from dirt to the place every neighbor wants to hang out.",
    customer: "Jenna R.",
    before: "/images/projects/cedar-park-before.webp",
    after: "/images/projects/cedar-park-after.webp",
  },
  {
    slug: "dripping-springs-pergola",
    title: "Freestanding Cedar Pergola",
    type: "Pergola",
    neighborhood: "Dripping Springs",
    material: "Cedar Timber",
    size: "16 x 20 ft",
    scope: "Freestanding pergola with adjustable louvers and fans",
    quote: "Golden hour on this pergola is something else. Worth every penny.",
    customer: "Tom & Sarah K.",
    before: "/images/projects/dripping-springs-before.webp",
    after: "/images/projects/dripping-springs-after.webp",
  },
  {
    slug: "round-rock-privacy-fence",
    title: "Horizontal Cedar Privacy Fence",
    type: "Fence",
    neighborhood: "Round Rock",
    material: "Western Red Cedar",
    size: "180 linear ft",
    scope: "Horizontal slat fence with steel posts and custom gate",
    quote: "The fence matches our deck perfectly. It finally feels like one design.",
    customer: "The Nguyens",
    before: "/images/projects/round-rock-before.webp",
    after: "/images/projects/round-rock-after.webp",
  },
  {
    slug: "bee-cave-outdoor-kitchen",
    title: "Deck & Outdoor Kitchen",
    type: "Outdoor Living",
    neighborhood: "Bee Cave",
    material: "Composite + Stone",
    size: "1,150 sq ft",
    scope: "Composite deck, stone outdoor kitchen, covered dining",
    quote: "We host every holiday now. This deck changed how our family spends time.",
    customer: "The Delgados",
    before: "/images/projects/bee-cave-before.webp",
    after: "/images/projects/bee-cave-after.webp",
    featured: true,
  },
  {
    slug: "south-austin-restoration",
    title: "Full Deck Restoration",
    type: "Repair",
    neighborhood: "South Austin",
    material: "Cedar (restored)",
    size: "560 sq ft",
    scope: "Structural repair, board replacement, sand & re-stain",
    quote: "They saved a deck we thought we'd have to tear down. Looks brand new.",
    customer: "Bill H.",
    before: "/images/projects/south-austin-before.webp",
    after: "/images/projects/south-austin-after.webp",
  },
  {
    slug: "steiner-ranch-pool-deck",
    title: "Poolside Composite Deck",
    type: "Deck",
    neighborhood: "Steiner Ranch",
    material: "Trex Composite",
    size: "900 sq ft",
    scope: "Wraparound pool deck with slip-resistant composite decking",
    quote: "Cool underfoot even in August. The kids live out here now.",
    customer: "The Foster Family",
    before: "/images/projects/steiner-ranch-before.webp",
    after: "/images/projects/steiner-ranch-after.webp",
  },
  {
    slug: "mueller-modern-deck",
    title: "Modern Floating Deck",
    type: "Deck",
    neighborhood: "Mueller",
    material: "Ipe Hardwood",
    size: "480 sq ft",
    scope: "Low-profile floating deck with hidden fasteners and bench",
    quote: "Clean, modern, and built like a piece of furniture. Exactly what we wanted.",
    customer: "Priya & Dev",
    before: "/images/projects/mueller-before.webp",
    after: "/images/projects/mueller-after.webp",
  },
  {
    slug: "hutto-covered-deck",
    title: "Covered Cedar Deck",
    type: "Outdoor Living",
    neighborhood: "Hutto",
    material: "Cedar + Metal Roof",
    size: "720 sq ft",
    scope: "Covered deck with standing-seam metal roof and fans",
    quote: "Rain or shine, we're outside. The covered roof was the perfect call.",
    customer: "The Barretts",
    before: "/images/projects/hutto-before.webp",
    after: "/images/projects/hutto-after.webp",
  },
  {
    slug: "georgetown-wrap-deck",
    title: "Wraparound Porch Deck",
    type: "Deck",
    neighborhood: "Georgetown",
    material: "Composite",
    size: "1,050 sq ft",
    scope: "Wraparound porch-style deck with turned railing",
    quote: "Curb appeal through the roof. Neighbors keep asking who built it.",
    customer: "The Wallaces",
    before: "/images/projects/georgetown-before.webp",
    after: "/images/projects/georgetown-after.webp",
  },
  {
    slug: "pflugerville-patio-pergola",
    title: "Patio & Pergola Combo",
    type: "Pergola",
    neighborhood: "Pflugerville",
    material: "Cedar + Pavers",
    size: "600 sq ft",
    scope: "Paver patio with attached cedar pergola and lighting",
    quote: "The lighting under the pergola makes summer nights magic.",
    customer: "Erica M.",
    before: "/images/projects/pflugerville-before.webp",
    after: "/images/projects/pflugerville-after.webp",
  },
  {
    slug: "manor-family-deck",
    title: "Family Backyard Deck",
    type: "Deck",
    neighborhood: "Manor",
    material: "Pressure-Treated Pine",
    size: "400 sq ft",
    scope: "Budget-friendly deck with stairs and railing",
    quote: "Great value and they never cut a corner. Duke is the real deal.",
    customer: "The Owusus",
    before: "/images/projects/manor-before.webp",
    after: "/images/projects/manor-after.webp",
  },
  {
    slug: "leander-elevated-deck",
    title: "Elevated Second-Story Deck",
    type: "Deck",
    neighborhood: "Leander",
    material: "Composite + Steel",
    size: "680 sq ft",
    scope: "Second-story deck with steel stringers and under-deck drainage",
    quote: "Rock solid two stories up. The dry space underneath is a bonus room now.",
    customer: "The Cardenas Family",
    before: "/images/projects/leander-before.webp",
    after: "/images/projects/leander-after.webp",
  },
  {
    slug: "buda-modern-fence",
    title: "Modern Steel-Framed Fence",
    type: "Fence",
    neighborhood: "Buda",
    material: "Steel + Cedar",
    size: "220 linear ft",
    scope: "Steel-framed horizontal cedar fence with automated gate",
    quote: "Sleek, private, and built to outlast the house. Incredible work.",
    customer: "Ray & Tom",
    before: "/images/projects/buda-before.webp",
    after: "/images/projects/buda-after.webp",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SIGNATURE_PROJECT = PROJECTS[0];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const PROJECT_TYPES = Array.from(
  new Set(PROJECTS.map((p) => p.type))
);
