declare module "next-pwa" {
  import type { NextConfig } from "next";

  type PWAOptions = {
    dest: string;
    sw?: string;
    register?: boolean;
    skipWaiting?: boolean;
    buildExcludes?: RegExp[];
    disable?: boolean;
  };

  export default function withPWA(
    options: PWAOptions
  ): (config: NextConfig) => NextConfig;
}
