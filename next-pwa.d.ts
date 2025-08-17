declare module "next-pwa" {
  import type { NextConfig } from "next";

  type WithPWA = (nextConfig: NextConfig) => NextConfig;

  const withPWA: WithPWA;
  export default withPWA;
}
