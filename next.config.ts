import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** LAN / phone dev: allow HMR when opening the app from this host (not localhost). */
  allowedDevOrigins: ["192.168.68.104"],
};

export default nextConfig;
