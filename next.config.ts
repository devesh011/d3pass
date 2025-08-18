import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  distDir: "build",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withPWA(nextConfig);
