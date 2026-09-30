import type { MetadataRoute } from "next";

// `output: export` needs route handlers pinned to static generation.
export const dynamic = "force-static";
import { SERVICES } from "@/lib/services";

const SITE = "https://www.santalana.com.au";

/*
 * Static export writes this to /sitemap.xml at build time.
 * The staff preview route is left out on purpose: it is a duplicate of the
 * homepage and is marked noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/projects/", priority: 0.9 },
    { path: "/about/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}/`, priority: 0.8 })),
  ];

  return pages.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/" ? "monthly" : "yearly",
    priority: p.priority,
  }));
}
