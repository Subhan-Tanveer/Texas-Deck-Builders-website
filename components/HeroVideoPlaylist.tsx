"use client";

import { useEffect, useState } from "react";
import SmartImage from "@/components/SmartImage";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Every brand video clip, played back-to-back as a looping showreel. Only
 * files that actually exist (HEAD-probed) are included, so this degrades
 * gracefully as clips are added. Home hero only — other pages show a single
 * dedicated clip via HeroMedia.
 *
 * Implementation note: each clip is a fully-keyed <video>, so React (not
 * manual ref juggling) owns mount/unmount/autoplay — simple, and immune to
 * the dual-buffer race conditions a hand-rolled crossfade invites under
 * React's dev-mode double-effect invocation.
 */
const PLAYLIST = [
  "/videos/hero.mp4",
  "/videos/services-hero.mp4",
  "/videos/portfolio-hero.mp4",
  "/videos/about-hero.mp4",
  "/videos/reviews-hero.mp4",
  "/videos/contact-hero.mp4",
  "/videos/build-timelapse.mp4",
  "/videos/cta-deck-evening.mp4",
];

export default function HeroVideoPlaylist({
  poster,
  alt,
}: {
  poster: string;
  alt: string;
}) {
  const reduced = useReducedMotion();
  const [list, setList] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let alive = true;
    Promise.all(
      PLAYLIST.map((src) =>
        fetch(src, { method: "HEAD" })
          .then((r) => (r.ok ? src : null))
          .catch(() => null)
      )
    ).then((results) => {
      if (!alive) return;
      setList(results.filter((s): s is string => Boolean(s)));
    });
    return () => {
      alive = false;
    };
  }, [reduced]);

  if (reduced || list.length === 0) {
    return (
      <SmartImage
        src={poster}
        alt={alt}
        priority
        tone="wood"
        label="Hero"
        sizes="100vw"
      />
    );
  }

  const src = list[index % list.length];

  return (
    <video
      key={src}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ animation: "hero-fade-in 700ms ease-out" }}
      autoPlay
      muted
      loop={list.length === 1}
      playsInline
      poster={index === 0 ? poster : undefined}
      onEnded={() => setIndex((i) => (i + 1) % list.length)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
