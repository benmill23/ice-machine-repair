import Link from "next/link";
import { site, formattedAddress } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";

export default function Footer() {
  const year = 2025; // build-time constant; bump as needed

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label={`${site.name} home`}>
            <Logo id="logo-footer" className="h-16 w-auto" />
            <div className="logo-text">
              <div className="company-name">{site.shortName}</div>
              <div className="tagline">Ice Machine Repair</div>
            </div>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><Link href="/brands">Brands We Repair</Link></li>
            <li><Link href="/problems">Common Problems</Link></li>
            <li><Link href="/equipment">Machine Types</Link></li>
            <li><Link href="/industries">Industries We Serve</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/#rates">Rates</Link></li>
            <li><Link href="/#guarantee">Guarantee</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p>
            <PhoneIcon />
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
          </p>
          <p>
            <MailIcon />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <PinIcon />
            {formattedAddress()}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {year} {site.name}. All rights reserved.
        </span>
        <span>Licensed &amp; Insured | Family Owned &amp; Operated</span>
      </div>
    </footer>
  );
}
