import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 85, 90],
    remotePatterns: [
      // Nourish platform assets (coach photos, class covers)
      { protocol: "https", hostname: "**.cloudfront.net" },
    ],
  },
};

export default nextConfig;
