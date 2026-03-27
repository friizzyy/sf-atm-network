import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath or output: export needed for development
  // This ensures the app works at the root path in the dev server
  reactStrictMode: true,
};

export default nextConfig;
