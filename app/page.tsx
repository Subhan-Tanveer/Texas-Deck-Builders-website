import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { SIGNATURE_PROJECT, FEATURED_PROJECTS } from "@/lib/projects";
import { FEATURED_TESTIMONIALS } from "@/lib/testimonials";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import WhyUs from "@/components/WhyUs";
import StatsBand from "@/components/StatsBand";
import ProcessBand from "@/components/ProcessBand";
import ServicesPreview from "@/components/ServicesPreview";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import CtaSection from "@/components/CtaSection";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <MarqueeStrip
        items={[
          "Custom Decks",
          "Composite & Cedar",
          "Pergolas",
          "Patios",
          "Fencing",
          "4.9★ Rated",
          "Owner-Managed",
          "Free Quotes",
        ]}
      />

      <WhyUs />

      {/* Signature before/after transformation */}
      <section className="relative bg-forest py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="See The Difference"
              title="One yard. One transformation."
              intro={`${SIGNATURE_PROJECT.scope} in ${SIGNATURE_PROJECT.neighborhood}. Drag the slider to see what "before" became.`}
              align="left"
              light
            />
            <Reveal variant="rise" delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-amber pl-4 text-lg italic text-cream/90">
                &ldquo;{SIGNATURE_PROJECT.quote}&rdquo;
                <span className="mt-2 block text-sm font-semibold not-italic text-amber">
                  — {SIGNATURE_PROJECT.customer}, {SIGNATURE_PROJECT.neighborhood}
                </span>
              </blockquote>
            </Reveal>
            <Reveal variant="rise" delay={0.3}>
              <div className="mt-8">
                <Button href="/portfolio" variant="amber" size="lg">
                  Explore Our Projects <ArrowRight size={20} />
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal variant="pop" delay={0.1}>
            <BeforeAfterSlider
              before={SIGNATURE_PROJECT.before}
              after={SIGNATURE_PROJECT.after}
              beforeAlt={`${SIGNATURE_PROJECT.title} before renovation`}
              afterAlt={`${SIGNATURE_PROJECT.title} after — finished cedar deck`}
              priority
            />
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <ProcessBand />

      <ServicesPreview />

      {/* Featured portfolio */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Recent Work"
            title="Backyards we've brought to life."
            intro="A few favorites from around Austin. Every one started as a free consultation with Duke."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} variant="rise" delay={(i % 3) * 0.1}>
                <ProjectCard project={project} priority={i === 0} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="secondary" size="lg">
              View the full portfolio <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-linen py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Customer Love"
            title="The best company in the city of Austin."
            intro="Don't take our word for it — take theirs. 4.9 stars across 43 Google reviews and counting."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} variant="rise" delay={(i % 4) * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 font-semibold text-forest underline-offset-4 hover:text-cedar hover:underline"
            >
              Read all {SITE.reviewCount} reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
