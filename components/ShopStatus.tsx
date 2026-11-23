"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

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

export function ShopStatus() {
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

  return (
    <div aria-live="polite">
      <p className="site-footer-status" data-open={isOpen ? "true" : "false"}>
        {clock ? (isOpen ? "Open now" : "Closed now") : "Today at the shop"}
      </p>
      <p className="site-footer-note">
        {today ? `${today.day} · ${today.time}` : "Hours shown in Central Time"}
      </p>
    </div>
  );
}
