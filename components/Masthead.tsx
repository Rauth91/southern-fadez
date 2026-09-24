"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const items = [
  { href: "/#barbers", label: "Barbers" },
  { href: "/#services", label: "Services" },
  { href: "/#shop", label: "The shop" },
  { href: "/#story", label: "Our story" },
];

export function Masthead() {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <header className="masthead">
      <Link href="/" className="masthead-mark" aria-label="Southern Fadez">
        <span className="masthead-name">Southern Fadez</span>
      </Link>
      <nav className="masthead-nav" aria-label="Primary">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <details ref={menu} className="masthead-menu">
        <summary>
          Menu <span className="masthead-menu-lines" aria-hidden="true" />
        </summary>
        <nav className="masthead-drawer" aria-label="Primary menu">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => menu.current?.removeAttribute("open")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
