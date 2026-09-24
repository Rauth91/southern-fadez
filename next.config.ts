import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/southern-fadez" : "";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: githubPages || undefined,
  images: githubPages
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  outputFileTracingRoot: process.cwd(),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
