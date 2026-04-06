import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL('https://cloud2.faldirmdhn.my.id/s3-undig/**')]
  }
};

export default nextConfig;
