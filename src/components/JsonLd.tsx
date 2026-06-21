/**
 * Renders a JSON-LD <script> tag. Pass a schema object (or array of objects).
 * Used for LocalBusiness, Service, FAQPage, and BreadcrumbList structured data.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); this is the
      // standard Next.js pattern for structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
