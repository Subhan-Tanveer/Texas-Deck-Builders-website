import type { Metadata } from "next";
import { ShieldCheck, Handshake, Award, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import RevealStagger from "@/components/RevealStagger";
import SmartImage from "@/components/SmartImage";
import StatsBand from "@/components/StatsBand";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | The Team Behind the 4.9 Stars",
  description:
    "Meet Duke Schneider and the carpenters behind Texas Deck Builders — a hands-on, Austin deck company built on craftsmanship, transparency and genuine customer care.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  {
    name: "Duke Schneider",
    role: "Owner & General Manager",
    bio: "Hands-on owner on every job site. Duke started Texas Deck Builders to prove a deck company could be honest, fast, and obsessed with craft — all at once.",
    image: "/images/team/duke.webp",
  },
  {
    name: "Carlos Mendez",
    role: "Lead Carpenter",
    bio: "15 years framing and finishing. Carlos makes sure every board is straight, every joint is tight, and every fastener disappears.",
    image: "/images/team/carlos.webp",
  },
  {
    name: "Jesse Whitfield",
    role: "Project Manager",
    bio: "Your point of contact from first sketch to final walkthrough. Jesse keeps timelines honest and job sites spotless.",
    image: "/images/team/jesse.webp",
  },
  {
    name: "Marta Reyes",
    role: "Design Consultant",
    bio: "Turns backyard dreams into buildable 3D plans, matching materials, light and lifestyle to your home.",
    image: "/images/team/marta.webp",
  },
];

const VALUES = [
  {
    icon: Sparkles,
    title: "Craftsmanship",
    body: "We build every deck like it's going in our own backyard — no shortcuts, no exposed screws, no callbacks.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    body: "Honest quotes, honest timelines, honest updates. You always know exactly what's happening and why.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Care",
    body: "Duke answers his own phone. From the first handshake to the final board, you're treated like a neighbor.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="Our Story"
        title="Meet the team behind the 4.9-star rating."
        subtitle="A young company with a builder's-lifetime of standards. Here's who shows up in your backyard."
        image="/images/about-hero.webp"
        video="/videos/about-hero.mp4"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Duke's story */}
      <section className="bg-cream py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
              <SmartImage
                src="/images/team/duke-portrait.webp"
                alt="Duke Schneider, owner of Texas Deck Builders"
                tone="green"
                label="Duke on a job site"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-cream/95 px-5 py-3 shadow-lg">
                <p className="font-display text-lg font-semibold text-forest">
                  Duke Schneider
                </p>
                <p className="text-sm text-ash">{SITE.ownerTitle}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why we started"
              title="Nine months old. A reputation built to last."
              align="left"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-bark/80">
              <Reveal variant="rise">
                <p>
                  Texas Deck Builders is young — but the standards aren&apos;t.
                  Duke spent years watching customers get overpromised and
                  underbuilt, and decided Austin deserved a deck company that
                  actually cared about the craft.
                </p>
              </Reveal>
              <Reveal variant="rise" delay={0.1}>
                <p>
                  In under a year, word-of-mouth alone earned a{" "}
                  <b className="text-forest">4.9-star rating across 43 Google
                  reviews</b> — because Duke is on every job site, hand-selecting
                  boards, checking every joint, and treating each backyard like
                  his own.
                </p>
              </Reveal>
              <Reveal variant="rise" delay={0.2}>
                <p>
                  No sales-y middlemen. No disappearing crews. Just carpenters
                  who love the work and a customer experience that&apos;s
                  genuinely stress-free, start to finish.
                </p>
              </Reveal>
            </div>

            <RevealStagger className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Award, label: "Licensed & insured" },
                { icon: ShieldCheck, label: "10+ yrs combined experience" },
                { icon: Handshake, label: "Owner on every job" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-linen px-4 py-2 text-sm font-medium text-forest"
                >
                  <b.icon size={16} className="text-cedar" />
                  {b.label}
                </span>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Values */}
      <section className="bg-linen py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title="Three values on every job site."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} variant="rise" delay={i * 0.12}>
                <article className="group h-full rounded-2xl bg-cream p-8 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-forest text-amber transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <v.icon size={26} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-forest">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bark/75">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Crew"
            title="Carpenters who care."
            intro="The people who'll be in your backyard — real names, real faces, real craftsmanship."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} variant="rise" delay={(i % 4) * 0.1}>
                <article className="group overflow-hidden rounded-2xl bg-linen shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <SmartImage
                        src={member.image}
                        alt={member.name}
                        tone="green"
                        label={member.name}
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-display text-lg font-semibold text-cream">
                        {member.name}
                      </p>
                      <p className="text-sm text-amber">{member.role}</p>
                    </div>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-bark/75">
                    {member.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's build something you'll love."
        subtitle="Meet Duke for a free on-site consultation — no pressure, just honest advice."
      />
    </>
  );
}
