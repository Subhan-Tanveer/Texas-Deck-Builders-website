import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.texasdeckbuilders.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/portfolio", "/about", "/reviews", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
