import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cloud2.faldirmdhn.my.id/s3-undig/**')]
  }
};

export default nextConfig;
