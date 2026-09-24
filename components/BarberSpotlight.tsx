import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { visibleBarbers } from "@/lib/site";

export function BarberSpotlight() {
  return (
    <section id="barbers" className="lg:grid lg:grid-cols-12">
      <div className="frame py-14 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:py-20">
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] uppercase leading-none">
          The crew
        </h2>
        <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-ivory/80">
          {visibleBarbers.length > 1
            ? `Four chairs. ${visibleBarbers.map((barber) => barber.name).join(", ")}.`
            : "Chaz behind the chair."}
        </p>
        <ul className="mt-8">
          {visibleBarbers.map((barber) => (
            <li key={barber.slug} className="border-t border-ivory/15">
              <Link
                href={`/barbers/${barber.slug}`}
                className="flex min-h-11 flex-col justify-center py-4"
              >
                <span className="font-display text-[1.85rem] uppercase leading-none">
                  {barber.name}
                </span>
                <span className="mt-2 text-[15px] text-ivory/75">{barber.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative min-h-[22rem] bg-charcoal lg:col-span-7 lg:min-h-[78svh]">
        <Image
          src="/images/clippers.jpg"
          alt="A fade being lined with a straight razor"
          fill
          className="photo object-cover object-left"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
      </div>
    </section>
  );
}
