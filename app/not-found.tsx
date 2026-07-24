import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-forest px-6 pt-24 text-center">
      <div>
        <p className="font-display text-8xl font-semibold text-amber">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
          This board isn&apos;t where we left it.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-cream/75">
          The page you&apos;re looking for got sanded away. Let&apos;s get you
          back to solid ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="amber" size="lg">
            <Home size={18} /> Back home
          </Button>
          <Button href="/portfolio" variant="ghost" size="lg">
            <ArrowLeft size={18} /> See our work
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block text-sm text-cream/60 underline-offset-4 hover:text-amber hover:underline"
        >
          Or get a free quote →
        </Link>
      </div>
    </section>
  );
}
