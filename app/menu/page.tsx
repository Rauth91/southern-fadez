import type { Metadata } from "next";
import Image from "next/image";
import { ServiceList } from "@/components/ServiceList";
import { coreServices, extraServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cuts",
  description: `Fades, cuts, and prices at ${site.name}.`,
};

export default function MenuPage() {
  return (
    <main id="main" className="interior-page interior-page-paper">
      <header className="frame page-intro page-intro-paper">
        <p className="section-note">Services at Suite B</p>
        <h1>The cuts.</h1>
        <p className="page-intro-lede">
          The full chair list. Times are typical; a design or stubborn cowlick
          can run longer.
        </p>
      </header>

      <section className="frame menu-ledger" aria-label="Service menu">
        <div className="menu-ledger-primary">
          <h2>Chair work</h2>
          <ServiceList items={coreServices} onIvory />
        </div>
        <div className="menu-ledger-secondary">
          <h2>More from the chair</h2>
          <ServiceList items={extraServices} onIvory />
        </div>
      </section>

      <figure className="menu-photo">
        <Image
          src="/images/tools.jpg"
          alt="Barber tools ready at the station"
          fill
          className="photo object-cover"
          sizes="100vw"
        />
      </figure>

      <aside className="frame menu-footnote">
        <h2>Before the chair.</h2>
        <p>
          Prices describe the service, not a sales package. Ask the barber what
          your hair will support before the first pass.
        </p>
      </aside>
    </main>
  );
}
