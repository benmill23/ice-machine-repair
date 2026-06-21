import Link from "next/link";
import type { Service } from "@/lib/services";
import { serviceIcons } from "./icons";

/** Linked service card used on the home page and the /services index. */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="service-icon">{serviceIcons[service.icon]}</div>
      <h3>{service.name}</h3>
      <p>{service.shortDescription}</p>
      <span className="read-more">Learn more →</span>
    </Link>
  );
}
