import type { Metadata } from "next";
import { AssetImage as Image } from "@/components/AssetImage";
import { site, visibleBarbers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story",
  description: `${site.name}, cutting on Airline Highway since ${site.established}.`,
};

export default function StoryPage() {
  return (
    <main id="main" className="interior-page">
      <header className="story-opening">
        <div className="story-opening-photo">
          <Image
            src="/images/interior.jpg"
            alt="Mirrors, chairs, and brick inside the shop"
            fill
            className="photo object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="frame story-opening-copy">
          <p className="section-note">Airline Highway, since {site.established}</p>
          <h1>A neighborhood shop with the lights turned low.</h1>
        </div>
      </header>

      <section className="frame story-body">
        <p className="story-lede">
          {visibleBarbers.length > 1
            ? `Southern Fadez is four chairs in Suite B: ${visibleBarbers.map((barber) => barber.name).join(", ")}.`
            : "Southern Fadez is Chaz behind the chair in Suite B, finishing every detail himself."}
        </p>
        <div className="story-columns">
          <div>
            <h2>The cut.</h2>
            <p>
              A lineup has to hold outside the shop lamps. The last pass
              matters. So does telling somebody when the cut they brought in
              will not work for their hair.
            </p>
          </div>
          <div>
            <h2>The room.</h2>
            <p>
              The shop should feel easy before the cape goes on: familiar
              faces, an open chair, and conversation that never needs a script.
            </p>
          </div>
        </div>
      </section>

      <figure className="story-detail-photo">
        <Image
          src="/images/chair-close.jpg"
          alt="Worn leather and chrome on a barber chair"
          fill
          className="photo object-cover"
          sizes="100vw"
        />
      </figure>
    </main>
  );
}
