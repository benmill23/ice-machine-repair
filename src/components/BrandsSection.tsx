import Link from "next/link";
import { featuredBrands } from "@/lib/brands";

/** Authorized-brands band. Each brand links to its repair landing page. */
export default function BrandsSection({
  heading = "Authorized Service for Leading Brands",
}: {
  heading?: string;
}) {
  return (
    <section className="brands">
      <div className="brands-content">
        <h2>{heading}</h2>
        <div className="brands-list">
          {featuredBrands.map((b) => (
            <Link className="brand-item" key={b.slug} href={`/brands/${b.slug}`}>
              {b.name}
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          <Link href="/brands" className="read-more">
            See all brands we repair →
          </Link>
        </p>
      </div>
    </section>
  );
}
