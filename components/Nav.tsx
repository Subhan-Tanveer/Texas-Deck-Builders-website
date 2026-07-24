"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(20,53,31,0.5)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${SITE.name} home`}
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-lg bg-forest text-cream transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
          >
            {/* deck-plank mark */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-forest">
              Texas Deck
            </span>
            <span className="-mt-1 block font-display text-lg font-semibold text-cedar">
              Builders
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, -1).map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-forest" : "text-bark/75 hover:text-forest"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-cedar transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-cedar"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
          <Button href="/contact" variant="amber" size="sm">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-11 w-11 place-items-center rounded-lg bg-forest text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 origin-top bg-forest text-cream transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8 pt-20">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-4xl font-semibold transition-all duration-500 ${
                  active ? "text-amber" : "text-cream/90"
                }`}
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  transform: open ? "translateX(0)" : "translateX(-30px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE.phoneHref}
            className="mt-8 flex items-center gap-3 rounded-full bg-amber px-6 py-4 text-lg font-semibold text-forest"
          >
            <Phone size={20} /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
