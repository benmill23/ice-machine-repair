import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/lib/services";
import { locationSlugs } from "@/lib/locations";
import { brandSlugs } from "@/lib/brands";
import { problemSlugs, industrySlugs, equipmentSlugs } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/services",
    "/service-areas",
    "/brands",
    "/problems",
    "/industries",
    "/equipment",
    "/about",
    "/contact",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const collections: [string, string[]][] = [
    ["/services", serviceSlugs],
    ["/service-areas", locationSlugs],
    ["/brands", brandSlugs],
    ["/problems", problemSlugs],
    ["/industries", industrySlugs],
    ["/equipment", equipmentSlugs],
  ];

  for (const [prefix, slugs] of collections) {
    for (const slug of slugs) {
      routes.push({
        url: `${base}${prefix}/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
