import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "molg.go.ug",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;