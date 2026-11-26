import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/prototype",
        destination: "/prototypev2.html",
      },
      {
        source: "/admin",
        destination: "/admin.html",
      },
    ];
  },
};

export default nextConfig;