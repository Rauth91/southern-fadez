import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, visibleBarbers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crew",
  description:
    visibleBarbers.length > 1
      ? `Meet the barbers behind the chairs at ${site.name}.`
      : `Meet Chaz, founder and barber at ${site.name}.`,
};

export default function CrewPage() {
  return (
    <main id="main" className="interior-page">
      <header className="frame page-intro">
        <p className="section-note">
          {visibleBarbers.length > 1 ? "Four chairs" : "Behind the chair"}
        </p>
        <h1>The crew.</h1>
        <p className="page-intro-lede">
          {visibleBarbers.length > 1
            ? "Different hands, same room. Read the chair notes and find the barber whose pace fits yours."
            : "Meet the founder, read the chair notes, and see how the work gets done."}
        </p>
      </header>

      <section className="crew-ledger">
        <div className="crew-ledger-photo">
          <Image
            src="/images/portrait.jpg"
            alt="A beard line being finished at the chair"
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
