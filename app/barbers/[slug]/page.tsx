import type { Metadata } from "next";
import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryMotion } from "@/components/StoryMotion";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import {
  homeSections,
  routes,
  site,
  visibleBarbers,
  walkInServices,
} from "@/lib/site";

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
  return createPageMetadata({
    title: barber.name,
    description: `${barber.name} is a ${barber.role.toLowerCase()} at ${site.name} in Gonzales. View profile, shop services, and booking information.`,
    path: `/barbers/${barber.slug}`,
    image: barber.image,
    imageAlt: barber.imageAlt,
  });
}

export default async function BarberPage({ params }: BarberPageProps) {
  const { slug } = await params;
  const barber = visibleBarbers.find((item) => item.slug === slug);
  if (!barber) notFound();

  const firstName = barber.name.split(" ")[0];
  const hasIndividualMenu = barber.services.length > 0;
  const displayedServices = hasIndividualMenu
    ? barber.services
    : walkInServices.slice(0, 4);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/barbers/${barber.slug}/#person`),
    name: barber.name,
    jobTitle: barber.role,
    image: absoluteUrl(barber.image),
    url: absoluteUrl(`/barbers/${barber.slug}/`),
    worksFor: {
      "@id": absoluteUrl("/#barbershop"),
    },
    ...(hasIndividualMenu
      ? {
          makesOffer: barber.services.map((service) => ({
            "@type": "Offer",
            price: service.price.replace("$", ""),
            priceCurrency: "USD",
            url: barber.theCutUrl,
            itemOffered: {
              "@type": "Service",
              name: service.name,
            },
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main id="main" className="barber-profile" data-barber={barber.slug}>
      <StoryMotion>
        <section
          className="barber-profile-hero story-motion-chapter"
          aria-labelledby="barber-profile-title"
        >
          <div className="barber-profile-hero-frame">
            <div className="barber-profile-portrait">
              <Image
                src={barber.image}
                alt={barber.imageAlt}
                width={1280}
                height={1920}
                loading="eager"
                fetchPriority="high"
                className="barber-profile-image"
                sizes="(min-width: 72rem) 36rem, (min-width: 42rem) 50vw, 100vw"
              />
            </div>

            <div className="barber-profile-hero-copy">
              <Link href={routes.book} className="barber-profile-back story-fade">
                <span aria-hidden="true">←</span>{" "}
                {visibleBarbers.length > 1 ? "All barbers" : "The crew"}
              </Link>

              <div className="barber-profile-identity">
                <p className="approved-kicker story-fade">Behind the chair</p>
                <h1 id="barber-profile-title" className="story-reveal-mask">
                  <span className="story-reveal">{barber.name}.</span>
                </h1>
                <div className="barber-profile-meta story-fade">
                  <p className="barber-profile-role">{barber.role}</p>
                  {barber.aka ? (
                    <p className="barber-profile-aka">{barber.aka}</p>
                  ) : null}
                </div>
                <p className="barber-profile-intro story-fade">{barber.short}</p>

                <div className="barber-profile-hero-action story-fade">
                  {barber.theCutUrl ? (
                    <a
                      href={barber.theCutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <small>Current prices + available times</small>
                        Book with {firstName}
                      </span>
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <a href={site.phoneHref}>
                      <span>
                        <small>Ask for {firstName}&apos;s next available chair</small>
                        Call the shop
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <p>
                    Appointments recommended. Walk-ins welcome when a chair is open.
                  </p>
                </div>
              </div>

              <address className="barber-profile-location story-fade">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The shop</span>
                  <span>
                    {site.addressLine}
                    <small>{site.cityLine}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens directions in a new tab)</span>
                </a>
              </address>
            </div>
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
                <span className="story-reveal">At {firstName}&apos;s chair.</span>
              </span>
              <span className="story-reveal-mask">
                <em className="story-reveal">What to expect.</em>
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
            {barber.specialties.length > 0 ? (
              <div className="barber-profile-specialties">
                <p>Known for</p>
                <ul>
                  {barber.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="barber-profile-services">
              <p>{hasIndividualMenu ? `${firstName}’s current menu` : "Shop services"}</p>
              <ul>
                {displayedServices.map((service) => (
                  <li key={service.name}>
                    <span className="barber-profile-service-copy">
                      <span>{service.name}</span>
                      {"duration" in service && service.duration ? (
                        <small>{service.duration}</small>
                      ) : null}
                    </span>
                    <span>{service.price}</span>
                  </li>
                ))}
              </ul>
              {hasIndividualMenu && barber.theCutUrl ? (
                <>
                  <a
                    href={barber.theCutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book + confirm on {barber.bookingProvider}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <small className="barber-profile-services-note">
                    Prices shown as currently listed. Confirm when booking.
                  </small>
                </>
              ) : (
                <Link href={homeSections.services}>View the full service menu</Link>
              )}
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
                <span className="barber-profile-roster-photo" aria-hidden="true">
                  <Image src={person.image} alt="" fill sizes="(min-width: 72rem) 25vw, 50vw" />
                </span>
                <span className="barber-profile-roster-shade" aria-hidden="true" />
                <span className="barber-profile-roster-copy">
                  <small>
                    {person.slug === barber.slug ? "Current profile" : "View profile"}
                  </small>
                  <span>{person.name}</span>
                  <em>{person.role}</em>
                </span>
              </Link>
            ))}
          </nav>
        ) : null}
      </StoryMotion>
      </main>
    </>
  );
}
