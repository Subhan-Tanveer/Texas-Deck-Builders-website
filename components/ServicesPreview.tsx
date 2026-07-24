import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SmartImage from "@/components/SmartImage";

export default function ServicesPreview() {
  return (
    <section className="relative bg-linen py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Build"
          title="Services that transform outdoor spaces."
          intro="Decks, patios, pergolas, fencing and repairs — designed and built by one hands-on crew, so every detail lines up."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} variant="rise" delay={(i % 3) * 0.1}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-forest text-cream shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      tone="wood"
                      label={service.title}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-cream/95 text-forest shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <ServiceIcon name={service.icon} size={22} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-amber transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/75">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-amber">
                    {service.budget}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal variant="rise" delay={0.2}>
            <Link
              href="/services"
              className="group flex h-full min-h-[16rem] flex-col items-start justify-between rounded-2xl bg-gradient-to-br from-cedar to-amber p-7 text-forest shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-display text-2xl font-semibold leading-tight">
                Not sure what you need?
              </span>
              <span className="text-sm font-medium">
                See all services, budgets &amp; timelines
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-transform duration-300 group-hover:gap-3">
                Explore all services <ArrowUpRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
