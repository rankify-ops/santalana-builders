import type { MetadataRoute } from "next";

// `output: export` needs route handlers pinned to static generation.
export const dynamic = "force-static";

const SITE = "https://www.santalana.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
