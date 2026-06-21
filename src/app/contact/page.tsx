import { site, formattedAddress } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, MailIcon, PinIcon, SnowflakeIcon } from "@/components/icons";
import { submitContact } from "./actions";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Call ${site.name} at ${site.phone.display} for fast commercial ice machine repair in the Nashville, TN area, or request service online.`,
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent, error } = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Contact Us</h1>
          <p>
            Ice machine down or due for service? Call now for the fastest
            response, or send us a message and we&apos;ll get right back to you.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="contact-grid">
          <div>
            <div className="contact-method">
              <div className="ic">
                <PhoneIcon />
              </div>
              <div>
                <div className="label">Call (fastest)</div>
                <a className="value" href={`tel:${site.phone.tel}`}>
                  {site.phone.display}
                </a>
              </div>
            </div>
            <div className="contact-method">
              <div className="ic">
                <MailIcon />
              </div>
              <div>
                <div className="label">Email</div>
                <a className="value" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
            <div className="contact-method">
              <div className="ic">
                <PinIcon />
              </div>
              <div>
                <div className="label">Service Area</div>
                <div className="value">{formattedAddress()}</div>
              </div>
            </div>
            <div className="contact-method">
              <div className="ic">
                <SnowflakeIcon />
              </div>
              <div>
                <div className="label">Hours</div>
                <div className="value" style={{ fontWeight: 500, fontSize: 16 }}>
                  {site.hours.standard}
                  <br />
                  {site.hours.emergency}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div>
                <h2 style={{ fontFamily: "var(--font-display), sans-serif", fontSize: 26, color: "var(--ink-900)", marginBottom: 12, letterSpacing: "-0.5px" }}>
                  Thanks — we got your request.
                </h2>
                <p style={{ color: "var(--text-muted)" }}>
                  We&apos;ll be in touch shortly. If your ice machine is down
                  right now, call us at{" "}
                  <a href={`tel:${site.phone.tel}`} style={{ color: "var(--ice-700)", fontWeight: 600 }}>
                    {site.phone.display}
                  </a>{" "}
                  for the fastest response.
                </p>
              </div>
            ) : (
              <form action={submitContact}>
                {error && (
                  <p style={{ color: "#b00020", marginBottom: 16, fontSize: 14 }}>
                    Please enter your name and a phone number or email so we can
                    reach you.
                  </p>
                )}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />

                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" rows={4} />

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Request Service
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
