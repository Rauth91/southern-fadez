"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function StoryMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const chapters = gsap.utils.toArray<HTMLElement>(
          ".story-motion-chapter",
        );

        chapters.forEach((chapter) => {
          const lines = chapter.querySelectorAll<HTMLElement>(".story-reveal");
          const supporting = chapter.querySelectorAll<HTMLElement>(".story-fade");
          const drawnLines =
            chapter.querySelectorAll<HTMLElement>(".story-line-draw");
          const trigger =
            chapter.querySelector<HTMLElement>(
              ".approved-kicker, .approved-section-label, .story-reveal, h1, h2",
            ) ?? chapter;
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger,
              start: () =>
                window.matchMedia("(max-width: 47.99rem)").matches
                  ? "top 90%"
                  : "top 88%",
              once: true,
            },
          });

          timeline.addLabel("reveal");

          if (lines.length) {
            timeline.from(
              lines,
              {
                yPercent: 102,
                autoAlpha: 0,
                duration: 0.58,
                stagger: 0.065,
                ease: "power4.out",
              },
              "reveal",
            );
          }

          if (supporting.length) {
            timeline.from(
              supporting,
              {
                y: 12,
                autoAlpha: 0,
                duration: 0.44,
                stagger: 0.045,
                ease: "power2.out",
              },
              lines.length ? "reveal+=0.14" : "reveal",
            );
          }

          if (drawnLines.length) {
            timeline.from(
              drawnLines,
              {
                scaleX: 0,
                duration: 0.96,
                stagger: 0.06,
                ease: "power2.inOut",
                transformOrigin: "left center",
              },
              "reveal+=0.04",
            );
          }
        });

        document.fonts.ready.then(() => ScrollTrigger.refresh());
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="story-sequence">
      {children}
    </div>
  );
}
