/*
 * One icon per service, keyed by slug. These were previously inline in the
 * homepage cards only, so the dedicated service pages and the services index
 * had no icon at all. Keeping them here means all three render the same mark.
 */

const PATHS: Record<string, string[]> = {
  "new-homes": ["M6 22 24 8l18 14", "M10 20v18h28V20", "M20 38V27h8v11"],
  duplex: ["M6 40V16l10-8 10 8v24", "M26 40V22l8-6 8 6v18", "M13 40v-9h6v9", "M33 40v-8h6v8"],
  renovations: ["M8 40V12h20v28", "M28 24h12v16H28", "M14 20h8M14 28h8M34 32h2"],
  commercial: ["M6 40h36", "M10 40V14h28v26", "M17 22h6v6h-6zM25 22h6v6h-6z", "M21 40v-6h6v6"],
  "design-build": ["M10 6h20l8 8v28H10z", "M30 6v8h8", "M17 24h14M17 31h14"],
  "project-management": [
    "M24 6v6M24 36v6M6 24h6M36 24h6",
    "m20 24 3 3 6-6",
  ],
};

/** project-management also carries a circle, which paths alone cannot express. */
const CIRCLES: Record<string, { cx: number; cy: number; r: number }[]> = {
  "project-management": [{ cx: 24, cy: 24, r: 11 }],
};

export function ServiceIcon({ slug, size = 42 }: { slug: string; size?: number }) {
  const paths = PATHS[slug];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {(CIRCLES[slug] ?? []).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
