"use client";

import { useEffect, useState } from "react";
import SmartImage from "@/components/SmartImage";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Background media for a hero: renders a looping muted video if the file
 * exists in /public, otherwise falls back to the still image (which itself
 * falls back to an on-brand gradient placeholder via SmartImage). The video
 * is HEAD-probed so we never show a broken/black player before assets exist.
 * Disabled under prefers-reduced-motion (shows the still instead).
 */
export default function HeroMedia({
  video,
  image,
  alt,
  label,
  tone = "green",
  priority = false,
}: {
  video?: string;
  image: string;
  alt: string;
  label?: string;
  tone?: "wood" | "green" | "sky";
  priority?: boolean;
}) {
  const [hasVideo, setHasVideo] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!video || reduced) return;
    let alive = true;
    fetch(video, { method: "HEAD" })
      .then((r) => {
        if (alive && r.ok) setHasVideo(true);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [video, reduced]);

  if (hasVideo && video) {
    return (
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={image}
      >
        <source src={video} type="video/mp4" />
      </video>
    );
  }

  return (
    <SmartImage
      src={image}
      alt={alt}
      label={label}
      tone={tone}
      priority={priority}
      sizes="100vw"
    />
  );
}
