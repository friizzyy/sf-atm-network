import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/projects/sf-atm-network",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
