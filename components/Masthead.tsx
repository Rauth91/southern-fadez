"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { primaryNavigation, routes } from "@/lib/site";

export function Masthead() {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const closeMenu = () => menu.current?.removeAttribute("open");

  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = decodeURIComponent(window.location.hash.slice(1));
      if (!sectionId) return;

      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
      });
    };

    const timer = window.setTimeout(scrollToSection, 250);
    window.addEventListener("hashchange", scrollToSection);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, [pathname]);

  return (
    <header className="masthead">
      <Link
        href={routes.home}
        className="masthead-mark"
        aria-label="Southern Fadez home"
      >
        <span className="masthead-name">Southern Fadez</span>
      </Link>
      <nav className="masthead-nav" aria-label="Primary">
        {primaryNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <details
        ref={menu}
        className="masthead-menu"
        onKeyDown={(event) => {
          if (event.key !== "Escape") return;
          closeMenu();
          menu.current?.querySelector<HTMLElement>("summary")?.focus();
        }}
      >
        <summary>
          Menu <span className="masthead-menu-lines" aria-hidden="true" />
        </summary>
        <nav className="masthead-drawer" aria-label="Primary menu">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
