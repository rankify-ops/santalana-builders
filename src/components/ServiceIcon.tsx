/*
 * One icon per service, keyed by slug, plus the timing options used by the
 * hero enquiry form.
 *
 * Each entry carries its own viewBox. The artwork was drawn at slightly
 * different heights inside a shared 0 0 48 48 box, so measured optical centres
 * ranged from y=23 to y=27.5 and the icons did not line up with each other in
 * a row of tiles. Shifting the viewBox vertically per icon pulls every optical
 * centre onto y=24. Keep that in mind when adding one: measure the path bounds
 * and offset the viewBox rather than nudging the artwork.
 */

type Icon = {
  /** Offset viewBox that centres this artwork optically. */
  viewBox: string;
  paths: string[];
  circles?: { cx: number; cy: number; r: number }[];
};

const ICONS: Record<string, Icon> = {
  "new-homes": {
    // art centre y=23, so the box shifts up by 1
    viewBox: "0 -1 48 48",
    paths: ["M6 22 24 8l18 14", "M10 20v18h28V20", "M20 38V27h8v11"],
  },
  duplex: {
    viewBox: "0 0 48 48",
    paths: [
      "M6 40V16l10-8 10 8v24",
      "M26 40V22l8-6 8 6v18",
      "M13 40v-9h6v9",
      "M33 40v-8h6v8",
    ],
  },
  renovations: {
    // art centre y=26
    viewBox: "0 2 48 48",
    paths: ["M8 40V12h20v28", "M28 24h12v16H28", "M14 20h8M14 28h8M34 32h2"],
  },
  commercial: {
    // art centre y=27
    viewBox: "0 3 48 48",
    paths: ["M6 40h36", "M10 40V14h28v26", "M17 22h6v6h-6zM25 22h6v6h-6z", "M21 40v-6h6v6"],
  },
  "design-build": {
    viewBox: "0 0 48 48",
    paths: ["M10 6h20l8 8v28H10z", "M30 6v8h8", "M17 24h14M17 31h14"],
  },
  "project-management": {
    viewBox: "0 0 48 48",
    paths: ["M24 6v6M24 36v6M6 24h6M36 24h6", "m20 24 3 3 6-6"],
    circles: [{ cx: 24, cy: 24, r: 11 }],
  },
  /* "Something else" was previously a question mark only 10 units wide, which
     read as a rendering fault beside artwork three times the size. Redrawn as
     a speech bubble at the same visual weight as the rest. */
  other: {
    // art centre y=27
    viewBox: "0 3 48 48",
    paths: ["M8 12h32v22H24l-10 8v-8H8z", "M17 22h.02M24 22h.02M31 22h.02"],
  },

  /* Timing options. Same construction, drawn to match the service icons. */
  asap: {
    viewBox: "0 0 48 48",
    paths: ["M26 6 12 28h9l-3 14 14-22h-9l3-14z"],
  },
  "1-3-months": {
    viewBox: "0 0 48 48",
    paths: ["M9 13h30v27H9z", "M18 7v8M30 7v8", "M9 23h30", "M16 31h6"],
  },
  "3-6-months": {
    viewBox: "0 0 48 48",
    paths: ["M9 13h30v27H9z", "M18 7v8M30 7v8", "M9 23h30", "M15 31h5M24 31h5M33 31h.02"],
  },
  planning: {
    viewBox: "0 0 48 48",
    paths: ["M24 9a11 11 0 0 0-6 20v4h12v-4a11 11 0 0 0-6-20z", "M20 39h8"],
  },
};

export function ServiceIcon({ slug, size = 42 }: { slug: string; size?: number }) {
  const icon = ICONS[slug];
  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {(icon.circles ?? []).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
      {icon.paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
