import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";
import HeroMedia from "@/components/HeroMedia";

/**
 * Closing CTA band with a parallax golden-hour backdrop. Plays an ambient
 * looping video when /videos/cta-deck-evening.mp4 exists, else the still.
 */
export default function CtaSection({
  title = "Ready to transform your backyard?",
  subtitle = "Get a free, no-pressure quote from Duke. Most estimates within 24 hours.",
  image = "/images/cta-deck-evening.jpg",
  video = "/videos/cta-deck-evening.mp4",
}: {
  title?: string;
  subtitle?: string;
  image?: string;
  video?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-28">
      <div className="absolute inset-0" data-speed="0.9">
        <div className="absolute inset-0 scale-110">
          <HeroMedia
            video={video}
            image={image}
            alt=""
            tone="wood"
            label="Evening deck with warm string lights"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/60" />
        <div className="paper-grain absolute inset-0 opacity-40" />
      </div>

      <div className="container-x relative z-10 text-center">
        <SplitText
          text={title}
          as="h2"
          className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-6xl"
        />
        <Reveal variant="rise" delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/85">
            {subtitle}
          </p>
        </Reveal>
        <Reveal variant="rise" delay={0.3}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="amber" size="lg">
              Get My Free Quote <ArrowRight size={20} />
            </Button>
            <Button href={SITE.phoneHref} variant="ghost" size="lg">
              <Phone size={18} /> Call {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
