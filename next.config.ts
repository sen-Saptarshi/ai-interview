import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
//  Still developing that's why it's disabled
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
