import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

// Headings — solid, professional, grounded (not trendy).
const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

// Body — clean, trustworthy, highly legible.
const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Commercial Ice Machine Repair in Nashville, TN`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "ice machine repair Nashville",
    "commercial ice machine repair",
    "ice machine service Nashville TN",
    "ice machine maintenance",
    "ice machine installation Nashville",
    "Manitowoc ice machine repair",
    "Scotsman ice machine repair",
    "Hoshizaki ice machine repair",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Commercial Ice Machine Repair in Nashville, TN`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Commercial Ice Machine Repair in Nashville, TN`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
