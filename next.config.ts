import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/prototype",
        destination: "/prototypev3.html",
      },
      {
        source: "/admin",
        destination: "/adminv2.html",
      },
      // {
      //   source: "/full-design",
      //   destination: "/full.html",
      // },
      // {
      //   source: "/admin-full",
      //   destination: "/admin-full.html",
      // },
      // {
      //   source: "/design-system",
      //   destination: "/design-system.html",
      // },
    ]
  },
}

export default nextConfig
