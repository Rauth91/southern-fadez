import type { Service } from "@/lib/site";

export function ServiceList({
  items,
  onIvory = false,
}: {
  items: Service[];
  onIvory?: boolean;
}) {
  return (
    <ul className={`service-list ${onIvory ? "service-list-paper" : "service-list-dark"}`}>
      {items.map((service) => (
        <li key={service.name} className="service-row">
          <div>
            <p className="service-name">{service.name}</p>
            <p className="service-detail">
              {service.duration}
              {service.note ? ` · ${service.note}` : ""}
            </p>
          </div>
          <span className="service-price">{service.price}</span>
        </li>
      ))}
    </ul>
  );
}
