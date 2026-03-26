import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  // GitHub Pages needs static export + basePath; Vercel handles both natively
  ...(isGitHubPages && {
    output: "export",
    basePath: "/saqib-portfolio",
  }),
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
