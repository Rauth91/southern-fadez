"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { visibleBarbers } from "@/lib/site";

const chairMatches = [
  { label: "Skin fade", barber: "chaz" },
] as const;

export function BarberFeature() {
  const [activeSlug, setActiveSlug] = useState(
    visibleBarbers.find((barber) => barber.theCutUrl)?.slug ??
      visibleBarbers[0].slug,
  );
  const activeIndex = visibleBarbers.findIndex(
    (barber) => barber.slug === activeSlug,
  );
  const active = visibleBarbers[activeIndex];
  const visibleChairMatches = chairMatches.filter((match) =>
    visibleBarbers.some((barber) => barber.slug === match.barber),
  );
  const hasFullRoster = visibleBarbers.length > 1;
  const indicatorPosition = {
    "--chair-x": `${(activeIndex % 2) * 100}%`,
    "--chair-y": `${Math.floor(activeIndex / 2) * 100}%`,
    "--chair-track": `${activeIndex * 100}%`,
  } as CSSProperties;

  return (
    <section
      id="barbers"
      className="story-barber story-motion-chapter"
      data-barber={active.slug}
      data-roster={hasFullRoster ? "multiple" : "single"}
      aria-labelledby="barber-title"
    >
      <div key={active.image} className="story-barber-media-swap">
        <Image
          src={active.image}
          alt={active.imageAlt}
          fill
          priority
          className="story-barber-image object-cover"
          sizes="(min-width: 64rem) 38vw, (min-width: 42rem) 42vw, 100vw"
        />
        <div className="story-barber-shade" />
      </div>

      <div className="story-barber-copy frame story-fade">
        <article
          key={active.slug}
          id="barber-preview"
          className="story-barber-copy-inner"
          aria-live="polite"
        >
          <p className="approved-kicker">Choose your barber</p>
          <h2 id="barber-title">{active.name}.</h2>
          <p className="story-barber-role">{active.role}</p>
          {active.aka ? <p className="story-barber-aka">{active.aka}</p> : null}
          <p className="story-barber-note">{active.short}</p>
          <p className="story-barber-history">{active.story}</p>
          {visibleChairMatches.length > 1 ? (
            <div className="story-barber-match">
              <p>Start with the cut.</p>
              <div role="group" aria-label="Find a barber by specialty">
                {visibleChairMatches.map((match) => (
                  <button
                    key={match.label}
                    type="button"
                    aria-pressed={active.slug === match.barber}
                    onClick={() => setActiveSlug(match.barber)}
                  >
                    {match.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <Link href={`/barbers/${active.slug}`} className="story-barber-profile-link">
            Profile + booking
            <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>

      {hasFullRoster ? (
        <div
          className="story-barber-selector story-fade"
          role="group"
          aria-label="Preview a barber"
          data-active-barber={active.slug}
          style={indicatorPosition}
        >
          <span className="story-barber-selector-indicator" aria-hidden="true" />
          {visibleBarbers.map((barber) => (
            <button
              key={barber.slug}
              type="button"
              onClick={() => setActiveSlug(barber.slug)}
              aria-controls="barber-preview"
              aria-pressed={barber.slug === active.slug}
              data-active={barber.slug === active.slug ? "true" : undefined}
              data-barber={barber.slug}
            >
              <span className="story-barber-selector-photo" aria-hidden="true">
                <Image
                  src={barber.image}
                  alt=""
                  fill
                  sizes="(min-width: 64rem) 18vw, (min-width: 42rem) 25vw, 50vw"
                />
              </span>
              <span className="story-barber-selector-copy">
                <span className="story-barber-selector-name">{barber.name}</span>
                <small>{barber.role}</small>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
