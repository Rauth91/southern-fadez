import { AssetImage as Image } from "@/components/AssetImage";
import { site } from "@/lib/site";

export function ShopTeaser() {
  return (
    <section id="shop">
      <div className="relative min-h-[70svh] bg-charcoal">
        <Image
          src="/images/storefront.jpg"
          alt="The hydraulic chair"
          fill
          className="photo object-cover"
          sizes="100vw"
        />
      </div>
      <div className="frame flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] font-semibold uppercase">
            Same chair on Airline Hwy since 2016.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ivory/80">
            {site.addressLine}
            <br />
            {site.cityLine}
          </p>
        </div>
      </div>
    </section>
  );
}
