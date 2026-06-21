import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/** Reusable bottom-of-page call-to-action band. */
export default function CTASection({
  heading = "Ice Machine Down?",
  subheading = "Don't let equipment failure cost you business. Call now for fast, professional service.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="cta" id="contact">
      <div className="cta-content">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <a href={`tel:${site.phone.tel}`} className="cta-phone-number">
          <PhoneIcon />
          {site.phone.display}
        </a>
        <div className="hero-buttons" style={{ justifyContent: "center" }}>
          <Link href="/contact" className="btn btn-primary">
            Schedule Service
          </Link>
        </div>
      </div>
    </section>
  );
}
