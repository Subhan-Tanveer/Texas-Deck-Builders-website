"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Always-visible mobile click-to-call button (brief §5). Large 56px touch
 * target, pulses gently to draw the eye, appears after the hero so it never
 * covers the opening headline. Hidden on desktop (number lives in the nav).
 */
export default function ClickToCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.name} at ${SITE.phone}`}
      className={`fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-br from-cedar to-amber pl-4 pr-5 text-forest shadow-[0_12px_30px_-8px_rgba(181,118,59,0.8)] transition-all duration-500 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="grid h-9 w-9 animate-pulse-ring place-items-center rounded-full bg-forest text-cream">
        <Phone size={18} />
      </span>
      <span className="font-semibold">Call Duke</span>
    </a>
  );
}
