import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Google review avatar/photo host (used by the reviews widget)
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  // GSAP ships modern ESM; nothing else special required.
};

export default nextConfig;
