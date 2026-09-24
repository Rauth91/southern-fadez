import { AssetImage as Image } from "@/components/AssetImage";
import { BarberFeature } from "@/components/BarberFeature";
import { ShopBoard } from "@/components/ShopBoard";
import { StoryMotion } from "@/components/StoryMotion";
import { coreServices } from "@/lib/site";

const signatureServices = coreServices.slice(0, 3);

export function HomeDirectory() {
  return (
    <StoryMotion>
      <section
        id="services"
        className="story-craft story-motion-chapter"
        aria-labelledby="craft-title"
      >
        <div className="story-craft-inner frame">
          <div className="story-craft-content">
            <div className="story-craft-copy">
              <p className="approved-section-label story-line-label story-fade">
                At the station
                <span className="story-line-draw" aria-hidden="true" />
              </p>
              <h2 id="craft-title">
                <span className="story-reveal-mask">
                  <span className="story-reveal">The detail</span>
                </span>
                <span className="story-reveal-mask">
                  <em className="story-reveal">is the difference.</em>
                </span>
              </h2>
              <p className="story-fade">
                Clippers start it. The last pass sets it. A lineup has to hold
                when you walk into the sun, not only under the shop lamps.
              </p>
            </div>

            <dl
              className="story-craft-services story-fade"
              aria-label="Signature services"
            >
              {signatureServices.map((service) => (
                <div key={service.name}>
                  <dt>{service.name}</dt>
                  <dd>
                    <span>{service.duration}</span>
                    <strong>{service.price}</strong>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="story-craft-visual story-fade">
            <Image
              src="/images/tools-approved-v2.png"
              alt="Clippers, shears, razor, and comb arranged at a barber station"
              fill
              className="story-craft-image object-cover"
              sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
            />
            <figcaption>Tools down. One last look.</figcaption>
          </figure>
        </div>
      </section>

      <BarberFeature />

      <section
        id="shop"
        className="story-room story-motion-chapter"
        aria-labelledby="room-title"
      >
        <Image
          src="/images/shop-interior-approved-v2.png"
          alt="Four leather barber chairs beneath warm shop lights"
          fill
          className="story-room-image object-cover"
          sizes="100vw"
        />
        <div className="story-room-shade" />
        <div className="story-room-copy frame">
          <p className="approved-kicker story-fade">Inside Suite B</p>
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
            Southern Fadez began with one chair, a dream, and the belief that a
            great haircut can change the way you feel about your day.
          </p>
          <p className="story-fade">
            The room grew to four chairs. The standard stayed the same: tell
            the truth about the cut, finish the details, and treat every client
            like family.
          </p>
        </article>

        <figure className="story-origin-visual story-fade">
          <Image
            src="/images/storefront-approved-v2.png"
            alt="The Southern Fadez storefront glowing at dusk"
            fill
            className="story-origin-image object-cover"
            sizes="(min-width: 1024px) 54vw, calc(100vw - 2.5rem)"
          />
          <figcaption className="story-origin-mark" aria-hidden="true">
            Southern Fadez
          </figcaption>
        </figure>
      </section>

      <ShopBoard />
    </StoryMotion>
  );
}
