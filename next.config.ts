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
    ];
  },
};

export default nextConfig;
