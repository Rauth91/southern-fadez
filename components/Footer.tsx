import Link from "next/link";
import { hoursLine, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame site-footer-grid">
        <div>
          <p className="site-footer-name">{site.name}</p>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open directions to ${site.name} in Google Maps`}
          >
            <span>{site.addressLine}</span>
            <span>{site.cityLine}</span>
          </a>
        </div>
        <div>
          <p>{hoursLine}</p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          <Link href="/#barbers">Barbers</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#shop">The shop</Link>
          <Link href="/#story">Our story</Link>
        </nav>
      </div>
    </footer>
  );
}
