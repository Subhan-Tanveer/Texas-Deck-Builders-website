import { STATS } from "@/lib/site";
import Counter from "@/components/Counter";
import RevealStagger from "@/components/RevealStagger";

/**
 * Animated statistics band (brief 3c). Counters run 0 → value on scroll-in.
 */
export default function StatsBand({ dark = true }: { dark?: boolean }) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-forest-700 text-cream" : "bg-linen text-forest"
      }`}
    >
      <div className="rule-cedar" />
      <RevealStagger className="container-x grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-5xl font-semibold sm:text-6xl">
              <Counter
                value={stat.value}
                decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                suffix={stat.suffix}
              />
            </div>
            <p
              className={`mt-2 text-sm font-medium ${
                dark ? "text-cream/70" : "text-ash"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}
