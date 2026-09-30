/**
 * Registration detail. The desktop utility strip carries this, but that bar is
 * hidden on mobile, so this strip repeats it under the hero at small widths.
 */
export function LicenceStrip() {
  return (
    <aside className="licence-strip">
      <div className="wrap">
        <span>Registered Building Practitioner</span>
        <span>DB-U 100456 &nbsp;/&nbsp; CB-U 100040</span>
        <span>$20M public liability</span>
      </div>
    </aside>
  );
}
