import { SERVICES } from "@/lib/services";

export const SITE = "https://www.santalana.com.au";

export const ORGANISATION = {
  "@type": "GeneralContractor",
  "@id": `${SITE}/#organisation`,
  name: "Santa'lana Builders",
  url: `${SITE}/`,
  telephone: "+61421258240",
  email: "stefan@santalana.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Nelson Place",
    addressLocality: "South Melbourne",
    addressRegion: "VIC",
    postalCode: "3205",
    addressCountry: "AU",
  },
  sameAs: ["https://www.instagram.com/santalanabuilders/"],
} as const;

/** trail excludes Home, which is always position 1. */
export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${SITE}${t.path}`,
      })),
    ],
  };
}

export function servicesItemList() {
  return {
    "@type": "ItemList",
    name: "Building services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE}/services/${s.slug}/`,
    })),
  };
}

export const PROJECTS = [
  { name: "Head Street, Brighton", anchor: "brighton", year: "2023" },
  { name: "Karella Crescent, Mornington", anchor: "mornington", year: "2025" },
  { name: "Aberfeldie residence", anchor: "aberfeldie", year: "2021" },
  { name: "Strathmore custom home", anchor: "strathmore", year: "2022" },
  { name: "Warranilla Avenue, Rosebud", anchor: "rosebud", year: "2023" },
  { name: "Ascot Vale duplex", anchor: "ascot-vale", year: "2020" },
];

export function projectsItemList() {
  return {
    "@type": "ItemList",
    name: "Completed projects",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE}/projects/#${p.anchor}`,
    })),
  };
}

export function jsonLd(graph: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
