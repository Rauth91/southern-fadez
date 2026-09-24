import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="approved-hero">
      <Image
        src="/images/hero-approved-v2.png"
        alt="A barber giving a fade inside a dark, warmly lit shop"
        fill
        priority
        className="approved-hero-image object-cover"
        sizes="100vw"
      />
      <div className="approved-hero-shade" />

      <div className="approved-hero-copy frame">
        <p className="approved-kicker">
          <span>{site.city}</span>
          <span aria-hidden="true">•</span>
          <span>Est. {site.established}</span>
        </p>
        <h1>
          <span>Good cuts.</span>
          <span>Good company.</span>
        </h1>
        <p className="approved-hero-lede">
          Precision cuts. Good conversation. That&apos;s how we do things around
          here.
        </p>
      </div>
    </section>
  );
}
