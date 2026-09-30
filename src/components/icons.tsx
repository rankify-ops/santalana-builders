/* Shared inline icons. Kept inline rather than loading an icon font or
   package: there are only a handful and they inherit currentColor. */

type IconProps = { size?: number; className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

/** The angled arrow used on CTA buttons. */
export function ArrowUpRight({ size = 15, className = "btn__arrow" }: IconProps) {
  return (
    <svg
      {...base}
      className={className}
      width={size}
      height={size}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Phone({ size = 15, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function Mail({ size = 16, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function Instagram({ size = 18, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size} strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Pin({ size = 17, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Shield({ size = 15, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M12 2 4 5.5v6c0 5 3.4 9.2 8 10.5 4.6-1.3 8-5.5 8-10.5v-6L12 2Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Award({ size = 15, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.2 12.5 7 22l5-3 5 3-1.2-9.5" />
    </svg>
  );
}

export function Clock({ size = 15, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function Check({ size = 16, className }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
