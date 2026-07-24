"use client";

import { Phone, ArrowRight, Star } from "lucide-react";
import { SITE, HERO_MEDIA } from "@/lib/site";
import Button from "@/components/ui/Button";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";
import StarRating from "@/components/StarRating";
import HeroMedia from "@/components/HeroMedia";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest">
      {/* Media layer (parallax) — one continuous clip through the whole
          brand reel, then loops (see HERO_MEDIA.video) */}
      <div className="absolute inset-0" data-speed="0.9">
        <div className="absolute inset-0 scale-105">
          <HeroMedia
            video={HERO_MEDIA.video}
            image={HERO_MEDIA.poster}
            alt="A handcrafted cedar deck at golden hour in Austin, Texas"
            tone="wood"
            label="Golden-hour deck hero"
            priority
          />
        </div>
        {/* Warm cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-transparent to-transparent" />
        <div className="paper-grain absolute inset-0 opacity-40" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-28 pb-24">
        <Reveal variant="fade">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-sm text-cream backdrop-blur">
            <StarRating value={SITE.rating} size={15} />
            <span className="font-semibold">{SITE.rating}</span>
            <span className="text-cream/70">· {SITE.reviewCount} Google reviews</span>
          </div>
        </Reveal>

        <SplitText
          text="Build Your Dream Backyard."
          as="h1"
          trigger={false}
          delay={0.1}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-cream sm:text-7xl"
        />

        <Reveal variant="rise" delay={0.4}>
          <p className="mt-4 max-w-2xl font-display text-2xl font-medium text-amber sm:text-3xl">
            Austin&apos;s fastest-growing deck experts.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.55}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            4.9-star rated. Handcrafted by carpenters who care. From design to
            completion — stress-free.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.7}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="amber" size="lg">
              Get a Free Quote <ArrowRight size={20} />
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              Explore Our Projects
            </Button>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 font-semibold text-cream transition-colors hover:text-amber"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10">
                <Phone size={18} />
              </span>
              {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      {!reduced && (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
              <span className="h-2 w-1 animate-float-slow rounded-full bg-amber" />
            </span>
          </div>
        </div>
      )}

      {/* Corner star flourish */}
      <Star
        size={18}
        className="absolute right-8 top-28 hidden animate-float-slow fill-amber text-amber sm:block"
        aria-hidden
      />
    </section>
  );
}
