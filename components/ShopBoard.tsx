"use client";

import { useEffect, useState } from "react";
import { hoursLine, site } from "@/lib/site";

type ShopClock = {
  day: string;
  minutes: number;
};

function readShopClock(): ShopClock {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "0";

  return {
    day: value("weekday"),
    minutes: Number(value("hour")) * 60 + Number(value("minute")),
  };
}

export function ShopBoard() {
  const [clock, setClock] = useState<ShopClock | null>(null);

  useEffect(() => {
    const updateClock = () => setClock(readShopClock());
    updateClock();

    const interval = window.setInterval(updateClock, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const today = clock
    ? site.hours.find((entry) => entry.day === clock.day)
    : undefined;
  const isOpen = Boolean(
    clock &&
      today &&
      today.opensAt !== null &&
      today.closesAt !== null &&
      clock.minutes >= today.opensAt &&
      clock.minutes < today.closesAt,
  );
  const status = clock
    ? isOpen
      ? "Open now"
      : "Closed now"
    : "Regular hours";

  return (
    <section className="shop-board" aria-labelledby="shop-board-title">
      <div className="shop-board-grid frame">
        <header>
          <p className="shop-board-label">Before the chair</p>
          <h2 id="shop-board-title">The shop board.</h2>
        </header>

        <div className="shop-board-cell">
          <p className="shop-board-label">Right now</p>
          <p
            className="shop-board-value shop-board-status"
            data-open={isOpen ? "true" : "false"}
            aria-live="polite"
          >
            {status}
          </p>
          <p className="shop-board-note">
            {today ? `${today.day} · ${today.time}` : hoursLine}
          </p>
        </div>

        <div className="shop-board-cell">
          <p className="shop-board-label">Regular week</p>
          <p className="shop-board-value">Tue–Fri 9–6</p>
          <p className="shop-board-note">Saturday 8–4 · Closed Sun–Mon</p>
        </div>

        <address className="shop-board-cell">
          <p className="shop-board-label">Suite B</p>
          <p className="shop-board-value">{site.addressLine}</p>
          <p className="shop-board-note">
            {site.cityLine} · {site.phoneDisplay}
          </p>
        </address>
      </div>
    </section>
  );
}
