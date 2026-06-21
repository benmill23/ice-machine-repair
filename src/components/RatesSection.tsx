import { site } from "@/lib/site";

/** Transparent pricing section. */
export default function RatesSection() {
  const { standard, overtime } = site.rates;
  const cards = [standard, overtime];

  return (
    <section className="section section-ice" id="rates">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Our Service Rates</h2>
          <p className="section-subtitle">
            Straightforward pricing with no hidden fees. You&apos;ll always know
            the cost before we begin work.
          </p>
        </div>
        <div className="rates-grid">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`rate-card${c.featured ? " featured" : ""}`}
            >
              <div className="rate-type">{c.label}</div>
              <div className="rate-price">
                <span>$</span>
                {c.price}
              </div>
              <div className="rate-unit">per hour</div>
              <div className="rate-hours">{c.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
