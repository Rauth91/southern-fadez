import Link from "next/link";
import { ShopStatus } from "@/components/ShopStatus";
import { hoursLine, primaryNavigation, routes, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame site-footer-grid">
        <div className="site-footer-block site-footer-identity">
          <Link href={routes.home} className="site-footer-name">
            {site.name}
          </Link>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            <span>{site.addressLine}</span>
            <span>{site.cityLine}</span>
            <span className="sr-only"> (opens directions in a new tab)</span>
          </a>
        </div>

        <div className="site-footer-block">
          <p className="site-footer-label">Right now</p>
          <ShopStatus />
        </div>

        <div className="site-footer-block">
          <p className="site-footer-label">Regular week</p>
          <p>{hoursLine}</p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>

        <nav className="site-footer-nav" aria-label="Footer">
          <p className="site-footer-label">Explore</p>
          <div className="site-footer-links">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.footerLabel}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
