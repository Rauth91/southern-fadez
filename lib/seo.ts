import type { Metadata } from "next";
import { site } from "@/lib/site";

const productionUrl = "https://rauth91.github.io/southern-fadez/";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    productionUrl,
);

export function absoluteUrl(path = "/") {
  const base = siteUrl.toString().endsWith("/")
    ? siteUrl.toString()
    : `${siteUrl.toString()}/`;

  return new URL(path.replace(/^\/+/, ""), base).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/shop-ai-hero-temp.jpg",
  imageAlt = "The Southern Fadez barbershop in Gonzales, Louisiana",
}: PageMetadata): Metadata {
  const pageTitle = `${title} · ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
