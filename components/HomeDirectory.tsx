import { AssetImage as Image } from "@/components/AssetImage";
import { BarberFeature } from "@/components/BarberFeature";
import { StoryMotion } from "@/components/StoryMotion";
import { walkInServices } from "@/lib/site";

export function HomeDirectory() {
  return (
    <StoryMotion>
      <BarberFeature />

      <section
        id="services"
        className="story-craft story-motion-chapter"
        aria-labelledby="craft-title"
      >
        <div className="story-craft-inner frame">
          <div className="story-craft-content">
            <div className="story-craft-copy">
              <p className="approved-section-label story-line-label story-fade">
                Appointments + walk-ins
                <span className="story-line-draw" aria-hidden="true" />
              </p>
              <h2 id="craft-title">
                <span className="story-reveal-mask">
                  <span className="story-reveal">Book your time.</span>
                </span>
                <span className="story-reveal-mask">
                  <em className="story-reveal">Walk-ins still welcome.</em>
                </span>
              </h2>
              <p className="story-fade">
                Appointments are the sure thing. If a chair is open, walk-ins
                are welcome. The walk-in menu starts here.
              </p>
            </div>

            <dl
              className="story-craft-services story-fade"
              aria-label="Walk-in prices"
            >
              {walkInServices.map((service) => (
                <div key={service.name}>
                  <dt>
                    <span>{service.name}</span>
                    {service.description ? (
                      <small>{service.description}</small>
                    ) : null}
                  </dt>
                  <dd>
                    <strong>{service.price}</strong>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="story-craft-visual story-fade">
            <Image
              src="/images/shop-wash-clean.jpg"
              alt="The wash stations inside Southern Fadez"
              fill
              className="story-craft-image object-cover"
              sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
            />
            <figcaption>Between cuts, the room resets.</figcaption>
          </figure>
        </div>
      </section>

      <section
        id="shop"
        className="story-room story-motion-chapter"
        aria-labelledby="room-title"
      >
        <Image
          src="/images/shop-interior-corrected.jpg"
          alt="The Southern Fadez shop floor beneath its ornate bronze ceiling"
          fill
          className="story-room-image object-cover"
          sizes="100vw"
        />
        <div className="story-room-shade" />
        <div className="story-room-copy frame">
          <p className="approved-kicker story-fade">Inside Suite E</p>
          <h2 id="room-title" className="story-fade">
            Four chairs. Lights turned low.
          </h2>
          <p className="story-fade">
            Dark wood, worn leather, and enough room to settle in. The
            conversation never needs a script.
          </p>
        </div>
      </section>

      <section
        id="story"
        className="story-origin story-motion-chapter"
        aria-labelledby="origin-title"
      >
        <article className="story-origin-copy frame">
          <p className="approved-section-label story-line-label story-fade">
            Since 2016
            <span className="story-line-draw" aria-hidden="true" />
          </p>
          <h2 id="origin-title">
            <span className="story-reveal-mask">
              <span className="story-reveal">Built on hard work.</span>
            </span>
            <span className="story-reveal-mask">
              <span className="story-reveal">Rooted in Southern hospitality.</span>
            </span>
          </h2>
          <p className="story-origin-signature story-fade">Chaz</p>
          <p className="story-fade">
            Southern Fadez began with one chair and a simple standard: the cut
            has to hold when you step outside.
          </p>
          <p className="story-fade">
            The room grew to four chairs. The standard stayed the same: tell
            the truth about the cut, finish the details, and treat every client
            like family.
          </p>
        </article>

        <figure className="story-origin-visual story-fade">
          <Image
            src="/images/barber-chaz-boudreaux.jpg"
            alt="Southern Fadez founder Chaz Boudreaux in his shop"
            width={1280}
            height={1920}
            className="story-origin-image"
            sizes="(min-width: 1024px) 42rem, (min-width: 672px) 46vw, calc(100vw - 2.5rem)"
          />
        </figure>
      </section>
    </StoryMotion>
  );
}
