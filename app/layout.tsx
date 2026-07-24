import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClickToCall from "@/components/ClickToCall";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.texasdeckbuilders.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Custom Deck Builders in Austin, TX`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Austin's fastest-growing, 4.9-star rated deck builders. Custom decks, patios, pergolas, fencing & repairs — handcrafted by carpenters who care. Free quotes from owner Duke Schneider.",
  keywords: [
    "deck builders Austin TX",
    "custom decks Austin",
    "deck contractor Austin",
    "composite decks Austin",
    "cedar deck Austin",
    "pergola builder Austin",
    "patio contractor Austin",
    "Texas Deck Builders",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | Custom Deck Builders in Austin, TX`,
    description:
      "4.9-star rated custom deck builders in Austin. Decks, patios, pergolas & fencing — handcrafted, stress-free, free quotes.",
    url: SITE_URL,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-poster.webp", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Custom Deck Builders in Austin, TX`,
    description: "4.9-star rated custom deck builders in Austin, TX.",
    images: ["/images/hero-poster.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-cream text-bark antialiased">
        <JsonLd data={localBusinessSchema} />
        <SmoothScrollProvider />
        <PageTransition />
        <Nav />
        <ClickToCall />
        <div id="smooth-wrapper">
          <div id="smooth-content" className="flex min-h-full flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
