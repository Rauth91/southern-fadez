import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const cloudflarePages =
  process.env.CF_PAGES === "1" ||
  process.env.CLOUDFLARE_PAGES === "true";
const staticExport = githubPages || cloudflarePages;
const basePath = githubPages ? "/southern-fadez" : "";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: staticExport || undefined,
  images: staticExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  outputFileTracingRoot: process.cwd(),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
