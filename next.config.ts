import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/services/smart-upgrades",
        destination: "/services/irrigation-systems",
        permanent: true,
      },
    ];
  },
};
export default config;
