import type { Metadata } from "next";
import { AssetImage as Image } from "@/components/AssetImage";
import { shopPhotos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Shop",
  description: `Southern Fadez at ${site.addressLine}, ${site.cityLine}.`,
};

export default function ShopPage() {
  return (
    <main id="main" className="interior-page">
      <header className="shop-opening">
        <div className="frame shop-opening-copy">
          <p className="section-note">Prairieville, Louisiana</p>
          <h1>Suite B.</h1>
          <p>
            The room is on Airline Highway. Dark wood, worn leather, four
            chairs, and enough space to settle in.
          </p>
        </div>
        <div className="shop-opening-photo">
          <Image
            src="/images/night-shop.jpg"
            alt="A haircut underway in a low-lit chair"
            fill
            className="photo object-cover"
            sizes="(min-width: 900px) 52vw, 100vw"
            priority
          />
        </div>
      </header>

      <section className="frame shop-facts">
        <div>
          <h2>Find the room.</h2>
          <address>
            {site.addressLine}
            <br />
            {site.cityLine}
          </address>
          <p>{site.phoneDisplay}</p>
        </div>
        <div>
          <h2>Hours.</h2>
          <dl className="hours-list">
            {site.hours.map((row) => (
              <div key={row.day}>
                <dt>{row.day}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="shop-gallery" aria-label="Inside the shop">
        {shopPhotos.slice(0, 3).map((photo) => (
          <figure key={photo.src} className="shop-gallery-frame">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="photo object-cover"
              sizes="(min-width: 900px) 34vw, 100vw"
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
