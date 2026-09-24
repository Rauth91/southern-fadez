import type { Metadata } from "next";
import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryMotion } from "@/components/StoryMotion";
import { visibleBarbers } from "@/lib/site";

type BarberPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return visibleBarbers.map((barber) => ({ slug: barber.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BarberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const barber = visibleBarbers.find((item) => item.slug === slug);
  if (!barber) return { title: "Barber" };
  return { title: barber.name, description: barber.short };
}

export default async function BarberPage({ params }: BarberPageProps) {
  const { slug } = await params;
  const barberIndex = visibleBarbers.findIndex((item) => item.slug === slug);
  const barber = visibleBarbers[barberIndex];
  if (!barber) notFound();

  const profileNumber = String(barberIndex + 1).padStart(2, "0");
  const crewCount = String(visibleBarbers.length).padStart(2, "0");

  return (
    <main id="main" className="barber-profile" data-barber={barber.slug}>
      <StoryMotion>
        <section
          className="barber-profile-hero story-motion-chapter"
          aria-labelledby="barber-profile-title"
        >
          <Image
            src={barber.image}
            alt={barber.imageAlt}
            fill
            priority
            className="barber-profile-image object-cover"
            sizes="100vw"
          />
          <div className="barber-profile-shade" />

          <div className="barber-profile-hero-copy frame">
            <Link href="/crew" className="barber-profile-back story-fade">
              <span aria-hidden="true">←</span>{" "}
              {visibleBarbers.length > 1 ? "All barbers" : "The crew"}
            </Link>
            <div className="barber-profile-index story-fade">
              <span>Chair {profileNumber}</span>
              <span>{crewCount}</span>
            </div>
            <p className="approved-kicker story-fade">Behind the chair</p>
            <h1 id="barber-profile-title" className="story-reveal-mask">
              <span className="story-reveal">{barber.name}.</span>
            </h1>
            <p className="barber-profile-role story-fade">{barber.role}</p>
            {barber.aka ? (
              <p className="barber-profile-aka story-fade">{barber.aka}</p>
            ) : null}
            {barber.theCutUrl ? (
              <a
                className="barber-profile-thecut story-fade"
                href={barber.theCutUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <small>Prices + appointments</small>
                  View {barber.name} on theCut
                </span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </section>

        <section
          className="barber-profile-about story-motion-chapter"
          aria-labelledby="barber-about-title"
        >
          <div className="barber-profile-about-copy frame">
            <p className="approved-section-label story-line-label story-fade">
              About {barber.name}
              <span className="story-line-draw" aria-hidden="true" />
            </p>
            <h2 id="barber-about-title">
              <span className="story-reveal-mask">
                <span className="story-reveal">The work.</span>
              </span>
              <span className="story-reveal-mask">
                <em className="story-reveal">The way it gets done.</em>
              </span>
            </h2>
            <p className="barber-profile-story story-fade">{barber.story}</p>
          </div>

          <aside
            className="barber-profile-notes story-fade"
            aria-label={`${barber.name} chair notes`}
          >
            <p className="barber-profile-notes-label">Chair note</p>
            <p className="barber-profile-short">{barber.short}</p>
            <div className="barber-profile-specialties">
              <p>Known for</p>
              <ul>
                {barber.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {visibleBarbers.length > 1 ? (
          <nav className="barber-profile-roster" aria-label="Barber profiles">
            {visibleBarbers.map((person) => (
              <Link
                key={person.slug}
                href={`/barbers/${person.slug}`}
                aria-current={person.slug === barber.slug ? "page" : undefined}
                className={
                  person.slug === barber.slug ? "is-current" : undefined
                }
              >
                <small>
                  {String(
                    visibleBarbers.findIndex(
                      (item) => item.slug === person.slug,
                    ) + 1,
                  ).padStart(2, "0")}
                </small>
                <span>{person.name}</span>
                <em>{person.role}</em>
              </Link>
            ))}
          </nav>
        ) : null}
      </StoryMotion>
    </main>
  );
}
