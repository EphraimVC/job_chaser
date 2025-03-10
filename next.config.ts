import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "remotive.com",
        pathname:"/job/**"
      }
    ]
  }
};

export default nextConfig;
