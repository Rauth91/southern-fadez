import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { routes, visibleBarbers } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pageUrl = (path: string) =>
    absoluteUrl(path === routes.home ? path : `${path}/`);

  const corePages: MetadataRoute.Sitemap = [
    { url: pageUrl(routes.home), changeFrequency: "monthly", priority: 1 },
    { url: pageUrl(routes.book), changeFrequency: "monthly", priority: 0.9 },
  ];

  const barberPages: MetadataRoute.Sitemap = visibleBarbers.map((barber) => ({
    url: absoluteUrl(`/barbers/${barber.slug}/`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...barberPages];
}
