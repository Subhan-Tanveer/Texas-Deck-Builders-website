export type Testimonial = {
  name: string;
  neighborhood: string;
  rating: number;
  quote: string;
  project: string;
  avatar?: string; // /images/reviews/*
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amanda Reyes",
    neighborhood: "Circle C Ranch",
    rating: 5,
    quote:
      "THE BEST COMPANY IN THE CITY OF AUSTIN. Duke was hands-on from the first measurement to the final board. Our cedar deck is a work of art and it came in on time and on budget.",
    project: "1,000 sq ft cedar deck + pergola",
    avatar: "/images/reviews/amanda.webp",
    featured: true,
  },
  {
    name: "Marcus Powell",
    neighborhood: "Westlake",
    rating: 5,
    quote:
      "I got five quotes. Duke was the only one who actually walked the yard, sketched ideas, and explained the trade-offs. Three years later the composite deck is flawless.",
    project: "820 sq ft composite deck",
    avatar: "/images/reviews/marcus.webp",
    featured: true,
  },
  {
    name: "Sarah Kim",
    neighborhood: "Dripping Springs",
    rating: 5,
    quote:
      "The craftsmanship is unreal. Every joint is tight, every board is straight. You can tell these are carpenters who genuinely care about their work.",
    project: "Freestanding cedar pergola",
    avatar: "/images/reviews/sarah.webp",
    featured: true,
  },
  {
    name: "The Delgado Family",
    neighborhood: "Bee Cave",
    rating: 5,
    quote:
      "We now host every single holiday. The outdoor kitchen and deck completely changed how our family spends time together. Worth every penny.",
    project: "Deck + outdoor kitchen",
    avatar: "/images/reviews/delgado.webp",
    featured: true,
  },
  {
    name: "Bill Hastings",
    neighborhood: "South Austin",
    rating: 5,
    quote:
      "They restored a deck three other companies told me to demolish. Structurally sound, refinished beautifully, and a fraction of a rebuild. Honest people.",
    project: "Full deck restoration",
    avatar: "/images/reviews/bill.webp",
  },
  {
    name: "Priya Nair",
    neighborhood: "Mueller",
    rating: 5,
    quote:
      "Clean, modern, and built like a piece of furniture. The hidden fasteners and floating design are exactly what we pictured. Communication was perfect throughout.",
    project: "Modern floating ipe deck",
    avatar: "/images/reviews/priya.webp",
  },
  {
    name: "Erica Martinez",
    neighborhood: "Pflugerville",
    rating: 5,
    quote:
      "From the 3D design to the finished lighting under the pergola, the whole process was stress-free. Duke's crew treated our home like their own.",
    project: "Patio + pergola combo",
    avatar: "/images/reviews/erica.webp",
  },
  {
    name: "The Foster Family",
    neighborhood: "Steiner Ranch",
    rating: 5,
    quote:
      "Our poolside composite deck stays cool even in August and the kids basically live out there now. Fastest, cleanest crew we've ever hired.",
    project: "900 sq ft pool deck",
    avatar: "/images/reviews/foster.webp",
  },
];

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.featured);
