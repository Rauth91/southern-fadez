import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { routes, site, visibleBarbers } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Book a Barber",
  description: `Meet the ${visibleBarbers.length} barbers at ${site.name} in Gonzales. Appointments are recommended, and walk-ins are welcome when a chair is open.`,
  path: routes.book,
  image: visibleBarbers[0].image,
  imageAlt: visibleBarbers[0].imageAlt,
});

export default function CrewPage() {
  const featuredBarber = visibleBarbers[0];

  return (
    <main id="main" className="interior-page">
      <header className="frame page-intro">
        <p className="section-note">
          {visibleBarbers.length > 1 ? "Appointments first" : "Behind the chair"}
        </p>
        <h1>Choose your barber.</h1>
        <p className="page-intro-lede">
          {visibleBarbers.length > 1
            ? "Start with the person you want behind the chair. Appointments are recommended; walk-ins are welcome when a chair is open."
            : "Meet the founder, read the chair notes, and see how the work gets done."}
        </p>
      </header>

      <section className="crew-ledger">
        <div className="crew-ledger-photo">
          <Image
            src={featuredBarber.image}
            alt={featuredBarber.imageAlt}
            fill
            className="photo object-cover"
            sizes="(min-width: 900px) 45vw, 100vw"
            priority
          />
        </div>
        <div className="crew-ledger-list">
          {visibleBarbers.map((barber) => (
            <Link
              key={barber.slug}
              href={`/barbers/${barber.slug}`}
              className="crew-ledger-row"
            >
              <span className="crew-ledger-name">{barber.name}</span>
              <span className="crew-ledger-role">{barber.role}</span>
              <span className="crew-ledger-note">{barber.short}</span>
              <span className="crew-ledger-action">
                Profile + booking <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
