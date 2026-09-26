import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Allow the Vercel preview / dev proxy hostnames used during development.
  allowedDevOrigins: ["*.e2b.app", "*.vercel.app"],
};

export default nextConfig;
