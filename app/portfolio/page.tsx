import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Deck & Outdoor Living Portfolio | Austin, TX",
  description:
    "Browse before-and-after transformations of custom decks, patios, pergolas and fences built by Texas Deck Builders across Austin and the Hill Country.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />

      <PageHero
        eyebrow="Portfolio"
        title="Drag the slider. See the difference."
        subtitle="Real Austin backyards, transformed. Every project starts as a blank yard and ends as the favorite room in the house."
        image="/images/portfolio-hero.webp"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <section className="bg-cream py-20">
        <div className="container-x">
          <PortfolioGrid />
        </div>
      </section>

      <CtaSection
        title="Your backyard could be next."
        subtitle="Book a free on-site consultation and we'll show you what's possible."
      />
    </>
  );
}
