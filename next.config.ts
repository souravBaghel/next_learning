import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {
    // Resolve from this app so tailwindcss and other deps are found in goldbank-customer/node_modules
    root: process.cwd(),
  },
};

export default nextConfig;
