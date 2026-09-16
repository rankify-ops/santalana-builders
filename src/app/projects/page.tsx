import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { RedirectHome } from "@/components/RedirectHome";

// Converted 1:1 from projects.html. Markup, classes and copy are unchanged.
// Temporarily hidden: only the homepage is being shared with the client.
// Remove <RedirectHome /> and the robots line to bring this page back.
export const metadata: Metadata = {
  title: { absolute: "Projects | Santa'lana Builders, Melbourne & Mornington Peninsula" },
  description: "Selected builds by Santa'lana Builders: luxury homes, duplexes and renovations in Brighton, Aberfeldie, Strathmore, Ascot Vale, Rosebud and Mornington.",
  alternates: { canonical: "https://www.santalana.com.au/projects.html" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Projects | Santa'lana Builders",
    description: "Luxury homes, duplexes and renovations across Melbourne and the Mornington Peninsula.",
    images: [asset("/assets/img/projects/brighton-facade-dusk.jpg")],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <RedirectHome />
      {" "}
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {" "}
      <div className="utility">
        {" "}
        <div className="wrap utility__inner">
          {" "}
          <span className="utility__licence">
            {"Registered Building Practitioner  /  DB-U 100456  /  CB-U 100040"}
          </span>
          {" "}
          <div className="utility__links">
            {" "}
            <a className="utility__item" href="tel:+61421258240">
              {"0421 258 240"}
            </a>
            {" "}
            <a className="utility__item" href="mailto:stefan@santalana.com.au">
              {"stefan@santalana.com.au"}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="site-header" id="siteHeader">
        {" "}
        <div className="wrap site-header__inner">
          {" "}
          <a className="brandmark" href={`${BASE_PATH}/`} aria-label="Santa'lana Builders home">
            {" "}
            <img className="brandmark__light" src={asset("/assets/img/brand/logo-white.png")} alt="Santa'lana Builders" width="2001" height="833" />
            {" "}
            <img className="brandmark__dark" src={asset("/assets/img/brand/logo-dark.png")} alt="Santa'lana Builders" width="2000" height="833" />
            {" "}
          </a>
          {" "}
          <nav className="nav" id="primaryNav" aria-label="Primary">
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/`}>
              {"Home"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/projects/`} aria-current="page">
              {"Projects"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/services/`}>
              {"Services"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/about/`}>
              {"About"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/contact/`}>
              {"Contact"}
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header-actions">
            {" "}
            <a className="header-phone" href="tel:+61421258240">
              {"0421 258 240"}
            </a>
            {" "}
            <a className="btn btn--solid" href={`${BASE_PATH}/contact/`}>
              {"Start your build"}
            </a>
            {" "}
            <button className="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navPanel" aria-label="Menu">
              {" "}
              <span />
              <span />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {/* Full-screen mobile menu. Hidden from assistive tech until opened. */}
      {" "}
      <div className="navpanel" id="navPanel" role="dialog" aria-modal="true" aria-label="Menu" inert>
        {" "}
        <div className="wrap navpanel__top">
          {" "}
          <a className="brandmark" href={`${BASE_PATH}/`} aria-label="Santa'lana Builders home">
            {" "}
            <img className="brandmark__light" src={asset("/assets/img/brand/logo-white.png")} alt="Santa'lana Builders" width="2001" height="833" />
            {" "}
            <img className="brandmark__dark" src={asset("/assets/img/brand/logo-dark.png")} alt="Santa'lana Builders" width="2000" height="833" />
            {" "}
          </a>
          {" "}
        </div>
        {" "}
        <nav className="wrap navpanel__body" aria-label="Mobile">
          {" "}
          <a className="nav__link" style={{ "--i": "0" }} href={`${BASE_PATH}/`}>
            {"Home"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "1" }} href={`${BASE_PATH}/projects/`} aria-current="page">
            {"Projects"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "2" }} href={`${BASE_PATH}/services/`}>
            {"Services"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "3" }} href={`${BASE_PATH}/about/`}>
            {"About"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "4" }} href={`${BASE_PATH}/contact/`}>
            {"Contact"}
          </a>
          {" "}
        </nav>
        {" "}
        <div className="wrap navpanel__foot">
          {" "}
          <div className="navpanel__contact">
            {" "}
            <a href="tel:+61421258240">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              {" 0421 258 240"}
            </a>
            {" "}
            <a href="mailto:stefan@santalana.com.au">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              {" stefan@santalana.com.au"}
            </a>
            {" "}
          </div>
          {" "}
          <a className="btn btn--light btn--wide" href={`${BASE_PATH}/contact/`}>
            {"Request a consultation"}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <main id="main">
        {" "}
        {/* ======================= Page hero ======================= */}
        {" "}
        <section className="pagehero">
          {" "}
          <div className="pagehero__media">
            {" "}
            <img src={asset("/assets/img/projects/ascotvale-rear-lawn-dusk.jpg")} alt="Ascot Vale duplex viewed from the rear lawn at dusk, with a double-height glazed living space glowing warmly." width="1260" height="837" fetchPriority="high" />
            {" "}
          </div>
          {" "}
          <div className="wrap pagehero__inner">
            {" "}
            <nav className="crumbs" aria-label="Breadcrumb">
              {" "}
              <a href={`${BASE_PATH}/`}>
                {"Home"}
              </a>
              <span>
                {"Projects"}
              </span>
              {" "}
            </nav>
            {" "}
            <h1>
              {"Our projects"}
            </h1>
            {" "}
            <p>
              {" Luxury homes, duplexes and full-scale renovations delivered across Melbourne's bayside and inner-north suburbs and the Mornington Peninsula. Every project below was built by Santa'lana Builders. "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* Registration detail. Sits in the utility strip on desktop; on a phone that
           bar is too crowded, so it reappears here under the hero instead. */}
        {" "}
        <aside className="licence-strip">
          {" "}
          <div className="wrap">
            {" "}
            <span>
              {"Registered Building Practitioner"}
            </span>
            {" "}
            <span>
              {"DB-U 100456  /  CB-U 100040"}
            </span>
            {" "}
            <span>
              {"$20M public liability"}
            </span>
            {" "}
          </div>
          {" "}
        </aside>
        {" "}
        <section className="statbar" aria-label="Portfolio at a glance">
          {" "}
          <div className="wrap">
            {" "}
            <div className="statbar__grid">
              {" "}
              <div className="statbar__item">
                {" "}
                <div className="statbar__figure">
                  {"15+"}
                </div>
                {" "}
                <div className="statbar__label">
                  {"Years building"}
                  <br />
                  {"in Victoria"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="statbar__item">
                {" "}
                <div className="statbar__figure">
                  {"80"}
                  <span style={{ fontSize: ".5em", letterSpacing: ".05em" }}>
                    {" SQ"}
                  </span>
                </div>
                {" "}
                <div className="statbar__label">
                  {"Largest single"}
                  <br />
                  {"residence"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="statbar__item">
                {" "}
                <div className="statbar__figure">
                  {"2020-25"}
                </div>
                {" "}
                <div className="statbar__label">
                  {"Projects shown"}
                  <br />
                  {"below"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="statbar__item">
                {" "}
                <div className="statbar__figure">
                  {"$20M"}
                </div>
                {" "}
                <div className="statbar__label">
                  {"Public liability"}
                  <br />
                  {"insurance"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="wrap">
            {" "}
            {/* ============ Brighton ============ */}
            {" "}
            <article className="projectblock reveal" id="brighton">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Brighton"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Head Street"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2023"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"New home"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Size"}
                      <strong>
                        {"80+ squares"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Completed"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" An architecturally designed luxury home showcasing timeless elegance blended with contemporary coastal living. Spanning over 80 squares, the residence is defined by its clean lines, premium finishes and seamless indoor-outdoor integration. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" From the moment you approach, its striking façade of natural stone, timber cladding and custom steelwork makes a bold impression. Inside, a grand double-height entry with a floating staircase and skylight sets the tone for the light-filled spaces that follow. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-7">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-facade-dusk.jpg")} alt="Brighton home at dusk. Natural stone and timber-clad façade, white vertical batten fence and an uplit travertine entry path leading to a double-height entry." width="1304" height="865" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Street façade at dusk. Stone, timber cladding and custom steelwork."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-5">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-living-dining.jpg")} alt="Open-plan living and dining space with a full-length stone island bench, timber floors and a decorative screen dividing the zones." width="1304" height="865" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Open-plan living and dining, anchored by a full-length stone island."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-5">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-stone-detail.jpg")} alt="Stacked slabs of natural stone on site, waiting to be installed as the home's façade and interior surfaces." width="920" height="1150" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Stone selected slab by slab before installation."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-7">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-pool-alfresco.jpg")} alt="Rear of the Brighton home with a fully tiled pool, glass balustrade and a timber-battened alfresco pergola off the living space." width="1304" height="861" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Pool and alfresco, the indoor-outdoor transition at the rear."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {/* ============ Mornington ============ */}
            {" "}
            <article className="projectblock reveal" id="mornington">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Mornington"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Karella Crescent"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2025"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"Duplex"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Under construction"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" Positioned in one of Mornington's most sought-after pockets, this duplex project promises unmatched coastal luxury. With elevated bay views, each residence is designed to embrace natural light, sea breezes and open-plan living at its finest. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" High end finishes, expansive balconies and premium detailing throughout make this build a true standout on the Peninsula. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-12">
                  {" "}
                  <img src={asset("/assets/img/projects/mornington-render-street.jpg")} alt="Street elevation render of the Mornington duplex showing two mirrored white rendered residences with vertical timber garage doors, stone feature column and native landscaping." width="2000" height="1332" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Street elevation with white rendered forms and timber and stone detailing."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
              {/* TODO(client): swap in the completed photography and the walkthrough video
                 from 15 Karella Crescent once available. See HANDOVER.md. */}
              {" "}
            </article>
            {" "}
            {/* ============ Aberfeldie ============ */}
            {" "}
            <article className="projectblock reveal" id="aberfeldie">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Aberfeldie"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Aberfeldie residence"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2021"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"Renovation & extension"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Completed"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" A beautifully transformed residence blending classic charm with contemporary luxury. A full-scale renovation and rear extension have delivered open-plan living, soaring ceilings and seamless indoor-outdoor flow. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" Featuring a bespoke kitchen with butler's pantry, polished timber floors and a sun-drenched alfresco entertaining area, this home balances heritage detail with modern design. Every element was worked through to get the form and the function right. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-8">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-facade-dusk.jpg")} alt="Aberfeldie rear extension at dusk. Contemporary two-storey form with charcoal rendered walls, a timber deck and warm light spilling from full-height glazing." width="1260" height="837" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"The contemporary rear extension, lit at dusk."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-4">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-kitchen.jpg")} alt="Bespoke kitchen with a waterfall stone island, integrated appliances and a single sculptural stool." width="768" height="960" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Bespoke kitchen with butler's pantry behind."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-4">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-hallway-detail.jpg")} alt="Hallway detail showing a fluted timber feature wall running the length of the corridor beside a flush cabinetry line." width="1260" height="837" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Fluted timber joinery lining the main corridor."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-8">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-pool-dusk.jpg")} alt="Rear garden at dusk with a lap pool reflecting the lit extension, paved surrounds and established planting." width="1260" height="834" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Lap pool and alfresco entertaining area."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {/* ============ Strathmore ============ */}
            {" "}
            <article className="projectblock reveal" id="strathmore">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Strathmore"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Strathmore custom home"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2022"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"New home"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Site"}
                      <strong>
                        {"Tight access"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Completed"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" A stunning custom home that stands as a testament to precision, perseverance and craftsmanship. Built on a tight-access site with major logistical challenges, it proves no site is too difficult when you build with experience. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" Santa'lana Builders delivered with trademark quality and attention to detail. A beautifully designed family home with high end finishes, open-plan living and striking architectural elements. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-7">
                  {" "}
                  <img src={asset("/assets/img/projects/strathmore-facade-dusk.jpg")} alt="Strathmore custom home at dusk with a gabled white and charcoal façade with a recessed entry, set behind a dark vertical batten fence." width="1296" height="861" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Gabled street façade behind a dark batten fence."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-5">
                  {" "}
                  <img src={asset("/assets/img/projects/strathmore-living-fluted.jpg")} alt="Living room with a dark fluted feature wall, integrated fireplace and a staircase rising beyond the seating zone." width="1027" height="680" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Fluted feature wall and integrated fireplace."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/strathmore-living-curtains.jpg")} alt="Sitting room with full-height sheer curtains, a linear gas fireplace and a round upholstered ottoman on pale timber floors." width="1260" height="836" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Sheer-curtained sitting room with a linear fireplace."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/strathmore-lounge-hearth.jpg")} alt="Second lounge area with a stone hearth, wall-mounted television and built-in joinery either side of the opening." width="1260" height="830" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Stone hearth and built-in joinery in the second lounge."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {/* ============ Rosebud ============ */}
            {" "}
            <article className="projectblock reveal" id="rosebud">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Rosebud"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Warranilla Avenue"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2023"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"Duplex"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Completed"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" A beautifully crafted duplex in sandy Rosebud that captures the essence of relaxed coastal living. Designed for year-round comfort, each home offers a light-filled beach vibe perfect for summer days. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" Warm textures and clever design make it an equally cosy winter retreat. From open-plan interiors to breezy outdoor spaces, this build combines laid-back style with quality craftsmanship, the perfect beachside escape. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-7">
                  {" "}
                  <img src={asset("/assets/img/projects/rosebud-facade-dusk.jpg")} alt="Rosebud duplex at dusk with mirrored white and charcoal gabled forms with vertical timber garage doors, a gravel driveway and concrete steppers through native planting." width="1296" height="868" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Twin gabled forms with timber garage doors."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-5">
                  {" "}
                  <img src={asset("/assets/img/projects/rosebud-bathroom.jpg")} alt="Bathroom with a freestanding stone bath, a walk-in shower behind a glass screen and warm minimal tiling." width="494" height="660" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Freestanding stone bath and walk-in shower."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/rosebud-living-fireplace.jpg")} alt="Open-plan living area with a stacked stone fireplace, view through to the kitchen and a marble coffee table on pale floors." width="1440" height="798" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Living area opening to the kitchen, anchored by a stone fireplace."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/rosebud-alfresco.jpg")} alt="Covered alfresco area with an outdoor dining setting, dark floor tiles and a sliding glass wall connecting it to the living space." width="1295" height="866" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Covered alfresco, open to the living space."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {/* ============ Ascot Vale ============ */}
            {" "}
            <article className="projectblock reveal" id="ascot-vale">
              {" "}
              <div className="projectblock__head">
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Ascot Vale"}
                  </p>
                  {" "}
                  <h2 className="h-xl">
                    {"Ascot Vale duplex"}
                  </h2>
                  {" "}
                  <div className="projectblock__facts">
                    {" "}
                    <div>
                      {"Year"}
                      <strong>
                        {"2020"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Type"}
                      <strong>
                        {"Duplex"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Feature"}
                      <strong>
                        {"Rear laneway access"}
                      </strong>
                    </div>
                    {" "}
                    <div>
                      {"Status"}
                      <strong>
                        {"Completed"}
                      </strong>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p className="lede">
                    {" Just moments from Melbourne's CBD, this impressive duplex combines smart design with spacious living. Each home features a generous open-plan layout, high end finishes and abundant natural light throughout. "}
                  </p>
                  {" "}
                  <p style={{ color: "var(--slate)" }}>
                    {" With rare rear laneway access, secure garages and private outdoor zones, this build offers the perfect balance of inner-city convenience and suburban lifestyle. Modern, functional and built to exceed expectations. "}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="gallery">
                {" "}
                <figure className="g-7">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-facade-dusk.jpg")} alt="Ascot Vale duplex street façade at dusk with rendered and brick two-storey forms with a recessed entry and warm interior lighting." width="1260" height="835" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Street façade at dusk."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-5">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-facade-day.jpg")} alt="The same duplex in daylight with a cream rendered and brick elevation with a driveway, lawn and low front planting." width="980" height="649" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Daylight elevation from the street."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-12">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-rear-lawn-dusk.jpg")} alt="Rear lawn at dusk looking back at a double-height glazed living space glowing against the evening sky." width="1260" height="837" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Private rear yard and double-height glazing."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-bathroom-marble.jpg")} alt="Main bathroom fully lined in grey marble, with a freestanding tub, wall-hung vanity and a slim awning window." width="1260" height="836" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Marble-lined main bathroom with freestanding tub."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
                <figure className="g-6">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-ensuite.jpg")} alt="Ensuite with a double stone-topped vanity, twin vessel basins and a mirrored cabinet above." width="1296" height="867" loading="lazy" />
                  {" "}
                  <figcaption>
                    {"Ensuite with a double stone-topped vanity."}
                  </figcaption>
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ======================= Coming soon ======================= */}
        {" "}
        <section className="section section--cloud section--tight">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal" style={{ marginBottom: "30px" }}>
              {" "}
              <p className="eyebrow">
                {"Also on the books"}
              </p>
              {" "}
              <h2 className="h-lg">
                {"More projects being photographed now."}
              </h2>
              {" "}
              <p style={{ color: "var(--slate)", marginTop: "16px", maxWidth: "60ch" }}>
                {" Recent and current Santa'lana builds across Melbourne. Full galleries are being added as professional photography is completed. "}
              </p>
              {" "}
            </div>
            {" "}
            <ul className="areas reveal">
              {" "}
              <li>
                {"Park Crescent, Moonee Ponds"}
              </li>
              {" "}
              <li>
                {"St Leonards"}
              </li>
              {" "}
              <li>
                {"Roseberry"}
              </li>
              {" "}
              <li>
                {"Brunel"}
              </li>
              {" "}
              <li>
                {"Combermere"}
              </li>
              {" "}
              <li>
                {"Placadena"}
              </li>
              {" "}
            </ul>
            {" "}
            <div className="stack-cta">
              {" "}
              <a className="link-arrow" href="https://www.instagram.com/santalanabuilders/" target="_blank" rel="noopener noreferrer">
                {" Follow the builds on Instagram "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ======================= CTA ======================= */}
        {" "}
        <section className="cta">
          {" "}
          <div className="wrap cta__inner">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Let's talk"}
              </p>
              {" "}
              <h2>
                {"Have a site, a plan, or just an idea?"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "20px" }}>
                {" Tell us what you're thinking and we'll give you an honest read on what it takes to get it built. "}
              </p>
              {" "}
              <ul className="cta__contacts">
                {" "}
                <li>
                  <a href="tel:+61421258240">
                    {"0421 258 240"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:stefan@santalana.com.au">
                    {"stefan@santalana.com.au"}
                  </a>
                </li>
                {" "}
                <li>
                  <span>
                    {"12 Nelson Place, South Melbourne VIC"}
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="enquiry reveal" style={{ "--d": "120ms" }}>
              {" "}
              <div className="enquiry__head">
                {" "}
                <h2>
                  {"Request a consultation"}
                </h2>
                {" "}
                <p>
                  {"One business day response, every time."}
                </p>
                {" "}
              </div>
              {" "}
              <form className="js-enquiry" noValidate>
                {" "}
                <div className="fstep" data-step="1" data-title="Project">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="p-interest">
                      {"What can we help with?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="p-interest" name="interest" required defaultValue="">
                        <option value="" disabled>
                          {"Select an option"}
                        </option>
                        <option>
                          {"New home or custom build"}
                        </option>
                        <option>
                          {"Duplex or multi-dwelling development"}
                        </option>
                        <option>
                          {"Renovation and extension"}
                        </option>
                        <option>
                          {"Office or shop fit-out"}
                        </option>
                        <option>
                          {"Design and build"}
                        </option>
                        <option>
                          {"Something else"}
                        </option>
                      </select>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="p-detail">
                      {"Project details"}
                    </label>
                    {" "}
                    <textarea id="p-detail" name="detail" placeholder="Suburb, stage of planning, rough scope or budget..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="p-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="p-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="p-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="p-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="p-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="p-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="fstatus" data-fstatus="" aria-live="polite" />
                {" "}
                <div className="fnav">
                  {" "}
                  <button className="btn btn--quiet" type="button" data-back="" hidden>
                    {"Back"}
                  </button>
                  {" "}
                  <button className="btn btn--solid btn--grow" type="button" data-next="">
                    {"Continue"}
                  </button>
                  {" "}
                  <button className="btn btn--solid btn--grow" type="submit" data-send="">
                    {"Send enquiry"}
                  </button>
                  {" "}
                </div>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="wrap">
          {" "}
          <div className="site-footer__grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <img src={asset("/assets/img/brand/logo-white.png")} alt="Santa'lana Builders" width="2001" height="833" loading="lazy" />
              {" "}
              <p>
                {"Domestic and commercial builders delivering high end residential projects across Melbourne and Victoria."}
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="https://www.instagram.com/santalanabuilders/" target="_blank" rel="noopener noreferrer" aria-label="Santa'lana Builders on Instagram">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="tel:+61421258240" aria-label="Call Santa'lana Builders">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="mailto:stefan@santalana.com.au" aria-label="Email Santa'lana Builders">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                {"Explore"}
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/`}>
                    {"Home"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/projects/`}>
                    {"Projects"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/services/`}>
                    {"Services"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/about/`}>
                    {"About"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/contact/`}>
                    {"Contact"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                {"Projects"}
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#brighton">
                    {"Brighton"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#mornington">
                    {"Mornington"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#aberfeldie">
                    {"Aberfeldie"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#strathmore">
                    {"Strathmore"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#rosebud">
                    {"Rosebud"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#ascot-vale">
                    {"Ascot Vale"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                {"Contact"}
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="tel:+61421258240">
                    {"0421 258 240"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:stefan@santalana.com.au">
                    {"stefan@santalana.com.au"}
                  </a>
                </li>
                {" "}
                <li>
                  {"12 Nelson Place"}
                  <br />
                  {"South Melbourne VIC 3205"}
                </li>
                {" "}
                <li>
                  <a href="https://www.instagram.com/santalanabuilders/" target="_blank" rel="noopener noreferrer">
                    {"@santalanabuilders"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="site-footer__base">
            {" "}
            <p>
              {"© "}
              <span id="year">
                {"2026"}
              </span>
              {" Santa'lana Builders. All rights reserved."}
            </p>
            {" "}
            <p className="licence-line">
              {"DB-U 100456  /  CB-U 100040  /  $20M public liability"}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {/* Floating dock: call and consultation are the two actions that matter for a
         builder, plus the theme control. Becomes a bottom bar on a phone. */}
      {" "}
      <div className="dock">
        {" "}
        <button className="dock__icon" id="themeToggle" type="button" aria-label="Switch between light and dark theme">
          {" "}
          <svg className="i-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
          </svg>
          {" "}
          <svg className="i-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 13.2A9 9 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z" />
          </svg>
          {" "}
        </button>
        {" "}
        <a className="dock__btn dock__btn--call" href="tel:+61421258240">
          {" "}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          {" Call "}
        </a>
        {" "}
        <a className="dock__btn dock__btn--quote" href={`${BASE_PATH}/contact/`}>
          {" "}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M8 2v3M16 2v3" />
            <rect x="3" y="5" width="18" height="17" rx="2" />
            <path d="M3 10h18M8 15h5" />
          </svg>
          {" Consultation "}
        </a>
        {" "}
      </div>
      {" "}
      {" "}
    </>
  );
}
