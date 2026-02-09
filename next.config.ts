import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images from external sources during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Use unoptimized images for missing local files
    unoptimized: true,
  },
};

export default nextConfig;
