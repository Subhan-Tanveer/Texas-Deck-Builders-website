import type { Metadata } from "next";
import { Check, Clock, DollarSign, Layers, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import ServiceIcon from "@/components/ServiceIcon";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Deck, Patio, Pergola & Fence Services in Austin",
  description:
    "Custom deck building, deck repair, patios, pergolas and fencing in Austin, TX. See budgets, timelines, materials and request a free quote from Texas Deck Builders.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...SERVICES.map((s) => serviceSchema(s.title, s.tagline)),
        ]}
      />

      <PageHero
        eyebrow="Our Services"
        title="Services that transform outdoor spaces."
        subtitle="From a first cedar platform to a full outdoor living room, we design and build it all — with one hands-on crew and one point of contact."
        image="/images/services/services-hero.jpg"
        video="/videos/services-hero.mp4"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Quick nav */}
      <section className="border-b border-bark/10 bg-linen">
        <div className="container-x flex flex-wrap justify-center gap-3 py-6">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-cream px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-cedar hover:bg-cedar/10"
            >
              <ServiceIcon name={s.icon} size={16} />
              {s.title.replace("Custom ", "").replace(" & Restoration", "")}
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <div className="bg-cream">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-b border-bark/10 py-20 last:border-0"
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-2">
              {/* Image */}
              <Reveal
                variant={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    tone="wood"
                    label={service.title}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-cream/95 text-forest shadow-lg">
                    <ServiceIcon name={service.icon} size={24} />
                  </span>
                </div>
              </Reveal>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <SectionHeading
                  eyebrow={service.tagline}
                  title={service.title}
                  align="left"
                />
                <Reveal variant="rise" delay={0.1}>
                  <p className="mt-5 leading-relaxed text-bark/80">
                    {service.description}
                  </p>
                </Reveal>

                {/* Facts */}
                <Reveal variant="rise" delay={0.15}>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Fact
                      icon={<DollarSign size={16} />}
                      label="Typical budget"
                      value={service.budget}
                    />
                    <Fact
                      icon={<Clock size={16} />}
                      label="Timeline"
                      value={service.timeline}
                    />
                  </div>
                </Reveal>

                {/* Materials */}
                <Reveal variant="rise" delay={0.2}>
                  <div className="mt-6">
                    <p className="flex items-center gap-2 text-sm font-semibold text-forest">
                      <Layers size={16} className="text-cedar" /> Materials
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.materials.map((m) => (
                        <span
                          key={m}
                          className="rounded-full bg-forest/8 px-3 py-1 text-xs font-medium text-forest"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Benefits */}
                <Reveal variant="rise" delay={0.25}>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-bark/80"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-pine"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal variant="rise" delay={0.3}>
                  <div className="mt-8">
                    <Button href="/contact" variant="primary">
                      Request a quote for {service.title.replace("Custom ", "").replace(" & Restoration", "")}
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection
        title="Have a project in mind?"
        subtitle="Tell us what you're dreaming up. Duke will help you scope it, budget it, and build it."
      />
    </>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-bark/10 bg-linen p-4">
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ash">
        <span className="text-cedar">{icon}</span> {label}
      </p>
      <p className="mt-1 font-display text-lg font-semibold text-forest">
        {value}
      </p>
    </div>
  );
}
