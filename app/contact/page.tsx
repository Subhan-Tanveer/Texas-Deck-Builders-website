import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Star, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import StarRating from "@/components/StarRating";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact Texas Deck Builders",
  description:
    "Request a free deck, patio, pergola or fence quote from Texas Deck Builders in Austin, TX. Or call Duke directly. Most estimates within 24 hours.",
  alternates: { canonical: "/contact" },
};

const FAQS = [
  {
    q: "How much does a custom deck cost?",
    a: "Most of our deck builds land between $15,000 and $45,000+ depending on size, materials, and features like pergolas or lighting. We give you an honest, itemized quote — free — before any commitment.",
  },
  {
    q: "How long does a deck take to build?",
    a: "A typical deck takes 2–4 weeks from the day we break ground, weather permitting. Repairs and smaller projects are often done in a few days. We give you a realistic timeline up front and stick to it.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. We stand behind our workmanship, and premium materials like composite and exotic hardwoods carry their own manufacturer warranties. Duke personally makes sure you're happy.",
  },
  {
    q: "What areas do you serve?",
    a: `We build throughout Austin and the Hill Country — including ${SITE.serviceArea.slice(0, 6).join(", ")}, and surrounding communities.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Free Quote"
        title="Get your free quote."
        subtitle="Tell us about your project in under two minutes. Duke reviews every request personally and gets back to you within 24 hours."
        image="/images/contact-hero.jpg"
        video="/videos/contact-hero.mp4"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-cream py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div>
            <QuoteForm />
          </div>

          {/* Contact rail */}
          <aside className="space-y-6">
            <Reveal variant="right">
              <div className="rounded-2xl bg-forest p-7 text-cream">
                <h2 className="font-display text-2xl font-semibold">
                  Prefer to talk?
                </h2>
                <p className="mt-2 text-cream/75">
                  Call or text Duke directly — he answers his own phone.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-5 flex items-center gap-3 rounded-xl bg-gradient-to-br from-cedar to-amber px-5 py-4 font-semibold text-forest transition-transform hover:-translate-y-0.5"
                >
                  <Phone size={22} />
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide opacity-80">
                      Call Duke directly
                    </span>
                    <span className="text-lg">{SITE.phone}</span>
                  </span>
                </a>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-amber" />
                    <a href={`mailto:${SITE.email}`} className="hover:text-amber">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-amber" />
                    <span>{SITE.address.full}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-amber" />
                    <span>Mon–Sat, 7am–7pm · Free estimates</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="right" delay={0.1}>
              <div className="rounded-2xl bg-linen p-7 text-center shadow-[var(--shadow-card)]">
                <StarRating value={SITE.rating} size={20} animated className="justify-center" />
                <p className="mt-3 font-display text-2xl font-semibold text-forest">
                  {SITE.rating} stars · {SITE.reviewCount} reviews
                </p>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-ash">
                  <Star size={13} className="fill-amber text-amber" />
                  Austin&apos;s fastest-growing deck experts
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linen py-24">
        <div className="container-x max-w-3xl">
          <Reveal variant="rise">
            <h2 className="text-center font-display text-4xl font-semibold text-forest">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} variant="rise" delay={i * 0.06}>
                <details className="group rounded-2xl border border-bark/10 bg-cream p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-forest">
                    {faq.q}
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-cedar transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-bark/75">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
