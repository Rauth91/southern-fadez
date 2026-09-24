import { AssetImage as Image } from "@/components/AssetImage";
import { ServiceList } from "@/components/ServiceList";
import { featuredServices } from "@/lib/site";

export function ServicesPreview() {
  return (
    <section id="services" className="cut-menu">
      <div className="cut-menu-photo">
        <Image
          src="/images/barber-chaz.jpg"
          alt="Shears hanging at the station"
          fill
          className="photo object-cover"
          sizes="(min-width: 900px) 68vw, 100vw"
        />
      </div>

      <div className="cut-menu-ticket">
        <div className="cut-menu-heading">
          <h2>What we cut.</h2>
        </div>
        <div className="cut-menu-list">
            <ServiceList items={featuredServices} onIvory />
        </div>
      </div>

      <p className="cut-menu-note">
        Times are typical. A design or a stubborn cowlick can run longer.
      </p>
    </section>
  );
}
