import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // 404 for unmatched URLs (/nope, /es/nope); needed because the root layout is [locale].
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // /home was a duplicate of "/" (duplicate-content SEO issue).
      { source: "/home", destination: "/", permanent: true },
      { source: "/es/home", destination: "/es", permanent: true },
      // J4: URLs submitted in the SMS/10DLC registration (Oct 14). Keep working
      // with true 301s after launch.
      { source: "/privacypolicy", destination: "/privacy-policy", statusCode: 301 },
      { source: "/terms-and-services", destination: "/terms-of-service", statusCode: 301 },
      { source: "/es/privacypolicy", destination: "/es/privacy-policy", statusCode: 301 },
      { source: "/es/terms-and-services", destination: "/es/terms-of-service", statusCode: 301 },
    ];
  },
};

export default nextConfig;
