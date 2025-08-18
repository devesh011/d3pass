import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

// configure PWA
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/],
  disable: process.env.NODE_ENV === "development", // disable in dev
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

// ✅ wrap once
export default withPWA(nextConfig);
