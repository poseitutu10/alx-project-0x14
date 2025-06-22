import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://m.media-amazon.com/images/**")],
  },
};

export default nextConfig;
