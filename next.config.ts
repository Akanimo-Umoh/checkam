import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/prototype",
        destination: "/prototype.html",
      },
    ];
  },
};

export default nextConfig;