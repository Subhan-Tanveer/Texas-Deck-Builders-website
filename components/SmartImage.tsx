"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * next/image with a graceful, on-brand fallback. If the real photo file
 * isn't in /public yet (or 404s), it renders a tasteful wood-tone gradient
 * placeholder with the alt text + a hint — so the whole site looks
 * intentional before the client drops in real project photos or the
 * AI-generated assets from AI_ASSET_PROMPTS.md.
 *
 * Always use inside a `relative` parent with a defined size (uses fill).
 */
export default function SmartImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  label,
  tone = "wood",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  label?: string;
  tone?: "wood" | "green" | "sky";
}) {
  const [failed, setFailed] = useState(false);

  const tones: Record<string, string> = {
    wood: "from-[#7a5230] via-[#a06a3c] to-[#d7a869]",
    green: "from-forest via-forest-600 to-pine",
    sky: "from-[#3a5f7a] via-[#6a8fa8] to-[#c9a878]",
  };

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${tones[tone]} text-cream/90 ${className}`}
        aria-label={alt}
        role="img"
      >
        <div className="paper-grain absolute inset-0" />
        <ImageIcon size={26} className="relative opacity-70" />
        <span className="relative max-w-[80%] text-center text-xs font-medium leading-snug tracking-wide">
          {label || alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
