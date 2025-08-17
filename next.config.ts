import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  /* config options here */
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    swDest: "sw.js", // ✅ optional (default is 'sw.js')
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest\.json$/],
    disable: process.env.NODE_ENV === "development",
  },
});
