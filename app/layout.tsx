import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Masthead } from "@/components/Masthead";
import { withBase } from "@/lib/base-path";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display-face",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${site.name} · Gonzales Barbershop`,
    template: `%s · ${site.name}`,
  },
  description: `${site.tagline} Southern Fadez is a Gonzales barbershop for fades, line-ups, and a chair you can count on. ${site.addressLine}. Phone ${site.phoneDisplay}.`,
  applicationName: site.name,
  category: "Barbershop",
  alternates: {
    canonical: absoluteUrl(routes.home),
  },
  openGraph: {
    title: `${site.name} · Gonzales Barbershop`,
    description: `${site.tagline} Appointments recommended. Walk-ins welcome when a chair is open.`,
    url: absoluteUrl(routes.home),
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/shop-ai-hero-temp.jpg"),
        alt: "The Southern Fadez barbershop in Gonzales, Louisiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Gonzales Barbershop`,
    description: `${site.tagline} Appointments recommended. Walk-ins welcome when a chair is open.`,
    images: [absoluteUrl("/images/shop-ai-hero-temp.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const toTime = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl(routes.home),
        name: site.name,
        inLanguage: "en-US",
      },
      {
        "@type": "BarberShop",
        "@id": absoluteUrl("/#barbershop"),
        url: absoluteUrl(routes.home),
        name: site.name,
        description: `${site.tagline} Appointments recommended. Walk-ins welcome when a chair is open.`,
        image: absoluteUrl("/images/shop-ai-hero-temp.jpg"),
        telephone: site.phoneDisplay,
        foundingDate: String(site.established),
        priceRange: "$10–$50",
        areaServed: {
          "@type": "City",
          name: "Gonzales, Louisiana",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.addressLine,
          addressLocality: "Gonzales",
          addressRegion: "LA",
          postalCode: "70737",
          addressCountry: "US",
        },
        openingHoursSpecification: site.hours.flatMap((row) =>
          row.opensAt === null || row.closesAt === null
            ? []
            : [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: `https://schema.org/${row.day}`,
                  opens: toTime(row.opensAt),
                  closes: toTime(row.closesAt),
                },
              ],
        ),
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
      style={
        {
          "--wordmark-image": `url("${withBase("/brand/southern-fadez-lockup.svg")}")`,
        } as CSSProperties
      }
    >
      <body className="min-h-full bg-forest font-sans text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <Masthead />
        <div className="site">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
