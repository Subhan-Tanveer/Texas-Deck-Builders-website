import { Ruler, Hammer, Sparkles } from "lucide-react";
import HeroMedia from "@/components/HeroMedia";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";
import RevealStagger from "@/components/RevealStagger";

const STEPS = [
  {
    icon: Ruler,
    title: "1. Design",
    body: "Free on-site consult + 3D concept so you see it before we build.",
  },
  {
    icon: Hammer,
    title: "2. Build",
    body: "Duke's crew breaks ground and hand-builds every board on site.",
  },
  {
    icon: Sparkles,
    title: "3. Reveal",
    body: "A spotless job site and the best room in your house — done.",
  },
];

/**
 * Full-width process band with a looping build time-lapse video behind it
 * (plays when /videos/build-timelapse.mp4 exists, else the still image, else
 * a gradient). Reinforces the hands-on, "watch it come together" narrative.
 */
export default function ProcessBand() {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-28">
      {/* Time-lapse background */}
      <div className="absolute inset-0" data-speed="0.9">
        <div className="absolute inset-0 scale-110">
          <HeroMedia
            video="/videos/build-timelapse.mp4"
            image="/images/build-timelapse.jpg"
            alt=""
            tone="wood"
            label="Deck build time-lapse"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-forest/65" />
        <div className="paper-grain absolute inset-0 opacity-40" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-2xl">
          <Reveal variant="fade">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Watch It Come Together
            </span>
          </Reveal>
          <SplitText
            text="From bare yard to finished deck — in weeks, not months."
            as="h2"
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl"
          />
          <Reveal variant="rise" delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              No disappearing crews, no dragged-out timelines. Duke runs a tight,
              hands-on build from the first board to the final walkthrough.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-cream/15 bg-forest/40 p-6 backdrop-blur-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber text-forest">
                <step.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                {step.body}
              </p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
