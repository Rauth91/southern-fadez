import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { routes, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="approved-hero" aria-labelledby="home-hero-title">
      <Image
        src="/images/shop-ai-hero-temp.jpg"
        alt="The empty Southern Fadez shop floor beneath its ornate ceiling"
        fill
        priority
        className="approved-hero-image object-cover"
        sizes="100vw"
      />
      <div className="approved-hero-shade" />

      <div className="approved-hero-copy frame">
        <p className="approved-kicker">
          <span>{site.city}</span>
          <span aria-hidden="true">•</span>
          <span>Est. {site.established}</span>
        </p>
        <h1 id="home-hero-title">
          <span>Good cuts.</span>
          <span>Good company.</span>
        </h1>
        <p className="approved-hero-lede">
          Fades, lineups, and chair time on Highway 621.
        </p>
        <div className="approved-hero-actions">
          <Link href={routes.book} className="approved-hero-booking">
            Choose your barber
            <span aria-hidden="true">↗</span>
          </Link>
          <p>Appointments recommended. Walk-ins welcome when a chair is open.</p>
        </div>
      </div>
    </section>
  );
}
