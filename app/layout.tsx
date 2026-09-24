import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Masthead } from "@/components/Masthead";
import { site } from "@/lib/site";
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
  title: {
    default: `${site.name} · Prairieville Barbershop`,
    template: `%s · ${site.name}`,
  },
  description: `${site.tagline} Southern Fadez is a Prairieville barbershop for fades, line-ups, and a chair you can count on. ${site.addressLine}. Phone ${site.phoneDisplay}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: site.name,
    telephone: site.phoneDisplay,
    foundingDate: String(site.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: "Prairieville",
      addressRegion: "LA",
      postalCode: "70769",
      addressCountry: "US",
    },
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-forest font-sans text-ivory">
        <Script id="reset-scroll-on-load" strategy="beforeInteractive">
          {`(() => {
            if ("scrollRestoration" in history) history.scrollRestoration = "manual";
            const resetScroll = () => window.scrollTo(0, 0);
            resetScroll();
            window.addEventListener("pageshow", resetScroll, { once: true });
          })();`}
        </Script>
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
