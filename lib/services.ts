export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  budget: string;
  timeline: string;
  materials: string[];
  benefits: string[];
  icon: string; // lucide-react icon name
  image: string; // /images/services/*
};

export const SERVICES: Service[] = [
  {
    slug: "deck-building",
    title: "Custom Deck Building",
    tagline: "Handcrafted decks built to live on for decades.",
    description:
      "From cozy cedar platforms to sprawling multi-level entertainers, we design and build custom decks that fit your yard, your family, and the way Texas lives outdoors. Every board is hand-selected and every fastener placed with intent.",
    budget: "$15,000 – $45,000+",
    timeline: "2–4 weeks",
    materials: ["Western Red Cedar", "Composite (Trex, TimberTech)", "Ipe & exotic hardwoods", "Pressure-treated pine"],
    benefits: [
      "Free on-site design consultation with Duke",
      "3D concept so you see it before we build it",
      "Hidden-fastener finish — no exposed screws",
      "Engineered footings rated for Texas soil",
    ],
    icon: "Hammer",
    image: "/images/services/deck-building.webp",
  },
  {
    slug: "deck-repair",
    title: "Deck Repair & Restoration",
    tagline: "Bring a tired deck roaring back to life.",
    description:
      "Soft boards, wobbly railings, sun-bleached finish? We restore structural integrity and refinish the surface so your existing deck feels brand new — often for a fraction of a full rebuild.",
    budget: "$1,500 – $9,000",
    timeline: "2–6 days",
    materials: ["Matched replacement boards", "Structural hardware", "Sand & re-stain", "Sealants"],
    benefits: [
      "Full structural safety inspection",
      "Board & joist replacement",
      "Re-staining and sealing",
      "Railing & stair rebuilds",
    ],
    icon: "Wrench",
    image: "/images/services/deck-repair.webp",
  },
  {
    slug: "patios",
    title: "Patios & Outdoor Living",
    tagline: "Ground-level living spaces that anchor the whole yard.",
    description:
      "Paver patios, stained concrete, and covered outdoor rooms that flow seamlessly from your deck. We build the foundation for firepits, kitchens, and the evenings you'll actually remember.",
    budget: "$8,000 – $30,000",
    timeline: "1–3 weeks",
    materials: ["Natural stone pavers", "Stamped concrete", "Flagstone", "Porcelain tile"],
    benefits: [
      "Integrated drainage & grading",
      "Firepit & outdoor-kitchen ready",
      "Seamless deck-to-patio transitions",
      "Low-maintenance surfaces",
    ],
    icon: "Home",
    image: "/images/services/patios.webp",
  },
  {
    slug: "pergolas",
    title: "Pergolas & Shade Structures",
    tagline: "Golden-hour shade, engineered to last.",
    description:
      "Custom cedar and steel pergolas, louvered roofs, and shade sails that turn a hot Austin afternoon into the best seat in the house. Designed to match your deck and your home's architecture.",
    budget: "$6,000 – $22,000",
    timeline: "1–2 weeks",
    materials: ["Cedar timber", "Powder-coated steel", "Adjustable louvers", "Shade fabric"],
    benefits: [
      "Motorized & louvered roof options",
      "Integrated lighting & fans",
      "Matched to your deck's finish",
      "Wind-rated engineering",
    ],
    icon: "Columns3",
    image: "/images/services/pergolas.webp",
  },
  {
    slug: "fencing",
    title: "Custom Fencing & Privacy",
    tagline: "Privacy and curb appeal, crafted to match.",
    description:
      "Horizontal cedar, board-on-board, and modern steel-framed fencing that ties your whole backyard together. Built by the same carpenters who build your deck, so the details line up.",
    budget: "$4,000 – $18,000",
    timeline: "3–8 days",
    materials: ["Western Red Cedar", "Horizontal slat", "Steel post frames", "Composite panels"],
    benefits: [
      "Matched to your deck & home",
      "Steel posts set in concrete",
      "Custom gates & hardware",
      "Privacy-first layouts",
    ],
    icon: "Fence",
    image: "/images/services/fencing.webp",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
