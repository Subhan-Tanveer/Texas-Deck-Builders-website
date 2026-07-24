import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GoogleReviews from "@/components/GoogleReviews";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";
import StarRating from "@/components/StarRating";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Reviews | 4.9★ from 43 Austin Homeowners",
  description:
    "Read real Google reviews and detailed case studies from Texas Deck Builders customers across Austin. 4.9 stars, 43 reviews, and counting.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const caseStudies = FEATURED_PROJECTS;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />

      <PageHero
        eyebrow="Reviews"
        title="The best company in the city of Austin."
        subtitle="That's a real quote from a real customer. Here's the 4.9-star reputation behind it."
        image="/images/reviews-hero.webp"
        video="/videos/reviews-hero.mp4"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
        ]}
      />

      {/* Live Google reviews */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <GoogleReviews limit={8} />
        </div>
      </section>

      {/* Highlighted pull quote */}
      <section className="bg-forest py-20">
        <div className="container-x text-center">
          <Reveal variant="pop">
            <Quote size={48} className="mx-auto text-amber/40" />
          </Reveal>
          <Reveal variant="rise" delay={0.1}>
            <p className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              &ldquo;THE BEST COMPANY IN THE CITY OF AUSTIN.&rdquo;
            </p>
          </Reveal>
          <Reveal variant="rise" delay={0.2}>
            <div className="mt-5 flex flex-col items-center gap-2">
              <StarRating value={5} size={20} />
              <p className="text-sm text-cream/70">
                — Amanda R., Circle C Ranch
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-linen py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Case Studies"
            title="The stories behind the stars."
            intro="A closer look at a few transformations — the challenge, the build, and what it meant to the family."
          />
          <div className="mt-16 space-y-20">
            {caseStudies.map((project, i) => (
              <div
                key={project.slug}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <Reveal
                  variant={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
                    beforeAlt={`${project.title} before`}
                    afterAlt={`${project.title} after`}
                  />
                </Reveal>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Reveal variant="rise">
                    <span className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
                      {project.type} · {project.neighborhood}
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-forest">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-bark/75">{project.scope}</p>
                    <p className="mt-2 text-sm text-ash">
                      {project.material} · {project.size}
                    </p>
                    <blockquote className="mt-6 border-l-2 border-cedar pl-4 text-lg italic text-bark/85">
                      &ldquo;{project.quote}&rdquo;
                      <span className="mt-2 block text-sm font-semibold not-italic text-forest">
                        — {project.customer}
                      </span>
                    </blockquote>
                    <div className="mt-5">
                      <StarRating value={5} size={18} />
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to join them?"
        subtitle="Add your backyard to the list. Free quotes, honest advice, five-star results."
      />
    </>
  );
}
