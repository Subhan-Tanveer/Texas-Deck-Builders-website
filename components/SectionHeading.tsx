import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";

/**
 * Consistent section header: small cedar eyebrow + animated serif headline
 * + optional intro. Centered by default.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade">
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${
              light ? "text-amber" : "text-cedar"
            }`}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <SplitText
        text={title}
        as="h2"
        className={`mt-4 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl ${
          light ? "text-cream" : "text-forest"
        }`}
      />
      {intro && (
        <Reveal variant="rise" delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              light ? "text-cream/80" : "text-bark/75"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
