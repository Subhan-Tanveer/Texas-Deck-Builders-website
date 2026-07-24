import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";
import HeroMedia from "@/components/HeroMedia";

/**
 * Inner-page hero with a parallax background image, animated headline, and
 * breadcrumb. The background uses data-speed for a gentle ScrollSmoother
 * parallax drift.
 */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  video,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  /** Optional looping background video; auto-swaps in when the file exists. */
  video?: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-forest pt-28">
      {/* Parallax background */}
      <div className="absolute inset-0" data-speed="0.85">
        <div className="absolute inset-0 scale-110">
          <HeroMedia
            video={video}
            image={image}
            alt=""
            priority
            tone="green"
            label="Hero background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/30" />
      </div>

      <div className="container-x relative z-10 pb-16">
        {crumbs.length > 0 && (
          <Reveal variant="fade">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-1.5 text-sm text-cream/70"
            >
              {crumbs.map((c, i) => (
                <span key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={14} className="opacity-50" />}
                  <Link href={c.href} className="hover:text-amber">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal variant="fade">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <SplitText
          text={title}
          as="h1"
          trigger={false}
          delay={0.15}
          className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl"
        />
        {subtitle && (
          <Reveal variant="rise" delay={0.35}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/85">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
