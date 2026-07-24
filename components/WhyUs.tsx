import { Hammer, HeartHandshake, PencilRuler } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    icon: Hammer,
    title: "Craftsmanship",
    body: "Every board hand-selected, every joint tight, every fastener hidden. We build decks the way we'd build our own — to outlast the house.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Obsession",
    body: "Duke is on every job site. You get a real carpenter's cell number, honest timelines, and a crew that treats your home like their own.",
  },
  {
    icon: PencilRuler,
    title: "Design Thinking",
    body: "We don't just build decks — we design outdoor rooms. Free on-site consults and 3D concepts so you see it before we cut a single board.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-cream py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Texas Deck Builders"
          title="Three reasons neighbors keep referring us."
          intro="A 4.9-star reputation built the old-fashioned way — one exceptional backyard at a time."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} variant="rise" delay={i * 0.12}>
              <article className="group h-full rounded-2xl border border-bark/10 bg-linen p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cedar/40 hover:shadow-[var(--shadow-card)]">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-forest text-amber transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <pillar.icon size={26} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-forest">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bark/75">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
