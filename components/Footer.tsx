import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream/80">
      <div className="rule-cedar" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cream/10 text-cream">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold text-cream">
              Texas Deck Builders
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Austin&apos;s fastest-growing deck experts. Handcrafted decks,
            patios, pergolas &amp; more — from design to completion, stress-free.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 text-sm">
            <Star size={16} className="fill-amber text-amber" />
            <span className="font-semibold text-cream">{SITE.rating}</span>
            <span className="text-cream/60">
              · {SITE.reviewCount} Google reviews
            </span>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="transition-colors hover:text-cream"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Phone size={16} className="text-cedar" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Mail size={16} className="text-cedar" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-cedar" />
              <span>{SITE.address.full}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cedar hover:text-forest"
            >
              <Facebook size={16} />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cedar hover:text-forest"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>
            Licensed &amp; insured · Serving Austin &amp; the Texas Hill Country
          </p>
        </div>
      </div>
    </footer>
  );
}
