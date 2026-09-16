import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { RedirectHome } from "@/components/RedirectHome";

// Converted 1:1 from services.html. Markup, classes and copy are unchanged.
// Temporarily hidden: only the homepage is being shared with the client.
// Remove <RedirectHome /> and the robots line to bring this page back.
export const metadata: Metadata = {
  title: { absolute: "Services | Santa'lana Builders, New Homes, Duplexes & Renovations" },
  description: "Santa'lana Builders services: custom new homes, duplex and multi-dwelling developments, renovations and extensions, office and shop fit-outs, design & build and project management across Melbourne.",
  alternates: { canonical: "https://www.santalana.com.au/services.html" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Services | Santa'lana Builders",
    description: "Custom homes, duplexes, renovations, commercial fit-outs and design & build across Melbourne.",
    images: [asset("/assets/img/interiors/living-glazing-render.jpg")],
  },
};

export default function ServicesPage() {
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
            <a className="nav__link" href={`${BASE_PATH}/projects/`}>
              {"Projects"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/services/`} aria-current="page">
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
          <a className="nav__link" style={{ "--i": "1" }} href={`${BASE_PATH}/projects/`}>
            {"Projects"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "2" }} href={`${BASE_PATH}/services/`} aria-current="page">
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
        <section className="pagehero">
          {" "}
          <div className="pagehero__media">
            {" "}
            <img src={asset("/assets/img/interiors/living-glazing-render.jpg")} alt="Living and dining space framed by black steel-framed glazing, with a fireplace and warm timber floors." width="1904" height="848" fetchPriority="high" />
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
                {"Services"}
              </span>
              {" "}
            </nav>
            {" "}
            <h1>
              {"What we build"}
            </h1>
            {" "}
            <p>
              {" With over 15 years in the Victorian construction industry, Santa'lana Builders specialises in high end residential, from boutique renovations and office fit-outs through to large-scale builds. "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ New homes ============ */}
        {" "}
        <section className="section" id="new-homes">
          {" "}
          <div className="wrap split">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Service 01"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"New homes & custom builds"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Architecturally designed residences built to the highest standard. We work from your architect's documentation, or bring in our own team, to deliver homes defined by clean lines, premium finishes and seamless indoor-outdoor integration. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" We've delivered single residences over 80 squares, and homes on sites with tight access and serious logistical challenges. No site is too difficult when you build with experience. "}
              </p>
              {" "}
              <ul className="areas" style={{ marginTop: "26px" }}>
                {" "}
                <li>
                  {"Luxury custom homes"}
                </li>
                <li>
                  {"Knock-down rebuild"}
                </li>
                <li>
                  {"Tight-access sites"}
                </li>
                {" "}
                <li>
                  {"Natural stone & custom steelwork"}
                </li>
                <li>
                  {"Pools & alfresco"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/projects/#brighton`}>
                  {"See a new home build"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split__media reveal" style={{ "--d": "100ms" }}>
              {" "}
              <img src={asset("/assets/img/projects/brighton-facade-dusk.jpg")} alt="Brighton luxury home at dusk with a stone and timber-clad façade, an uplit travertine entry path and white batten fencing." width="1304" height="865" loading="lazy" style={{ aspectRatio: "4/3", objectFit: "cover" }} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Duplex ============ */}
        {" "}
        <section className="section section--cloud" id="duplex">
          {" "}
          <div className="wrap split split--media-first">
            {" "}
            <div className="split__media reveal">
              {" "}
              <img src={asset("/assets/img/projects/rosebud-facade-dusk.jpg")} alt="Rosebud duplex at dusk with mirrored white and charcoal gabled forms, vertical timber garage doors and a gravel driveway." width="1296" height="868" loading="lazy" style={{ aspectRatio: "4/3", objectFit: "cover" }} />
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ "--d": "100ms" }}>
              {" "}
              <p className="eyebrow">
                {"Service 02"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Duplex & multi-dwelling"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Side-by-side and dual-occupancy developments that make the most of a site without compromising on design or liveability. Each residence gets a generous open-plan layout, high end finishes and abundant natural light. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" We've built duplexes from inner-city Ascot Vale, working with rare rear laneway access and secure garaging, through to beachside Rosebud and the Mornington Peninsula. "}
              </p>
              {" "}
              <ul className="areas" style={{ marginTop: "26px" }}>
                {" "}
                <li>
                  {"Dual occupancy"}
                </li>
                <li>
                  {"Townhouses"}
                </li>
                <li>
                  {"Small developments"}
                </li>
                {" "}
                <li>
                  {"Laneway & battle-axe sites"}
                </li>
                <li>
                  {"Investor & owner-occupier"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/projects/#rosebud`}>
                  {"See a duplex build"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Renovations ============ */}
        {" "}
        <section className="section" id="renovations">
          {" "}
          <div className="wrap split">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Service 03"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Renovations & extensions"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Full-scale renovations and rear extensions that blend classic charm with contemporary luxury. Open-plan living, soaring ceilings and seamless indoor-outdoor flow behind a heritage façade. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" Bespoke kitchens with butler's pantries, polished timber floors, sun-drenched alfresco entertaining. Every detail resolved before it got built. "}
              </p>
              {" "}
              <ul className="areas" style={{ marginTop: "26px" }}>
                {" "}
                <li>
                  {"Rear extensions"}
                </li>
                <li>
                  {"Second-storey additions"}
                </li>
                <li>
                  {"Full refurbishment"}
                </li>
                {" "}
                <li>
                  {"Kitchens & bathrooms"}
                </li>
                <li>
                  {"Heritage-sensitive work"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/projects/#aberfeldie`}>
                  {"See a renovation"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split__media reveal" style={{ "--d": "100ms" }}>
              {" "}
              <div className="media-stack">
                {" "}
                <div className="media-stack__main">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-facade-dusk.jpg")} alt="Aberfeldie rear extension at dusk. Charcoal rendered contemporary form with a timber deck and full-height glazing." width="1260" height="837" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="media-stack__inset">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-kitchen.jpg")} alt="Bespoke kitchen with a waterfall stone island and integrated appliances." width="768" height="960" loading="lazy" />
                  {" "}
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
        {/* ============ Commercial ============ */}
        {" "}
        <section className="section section--cloud" id="commercial">
          {" "}
          <div className="wrap split split--media-first">
            {" "}
            <div className="split__media reveal">
              {" "}
              <img src={asset("/assets/img/interiors/alfresco-outdoor-kitchen-bw.jpg")} alt="Covered outdoor kitchen and dining area under a deep eave, with built-in joinery and stone benchtops." width="1303" height="859" loading="lazy" style={{ aspectRatio: "4/3", objectFit: "cover" }} />
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ "--d": "100ms" }}>
              {" "}
              <p className="eyebrow">
                {"Service 04"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Office & shop fit-outs"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Commercial fit-outs delivered to programme. Workplaces, retail and hospitality spaces finished to the same standard as our homes, with the same attention to detail and the same site discipline. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" As a registered commercial builder we handle compliance, trades and staging, including work that has to happen around an operating business. "}
              </p>
              {" "}
              <ul className="areas" style={{ marginTop: "26px" }}>
                {" "}
                <li>
                  {"Office fit-out"}
                </li>
                <li>
                  {"Retail & hospitality"}
                </li>
                <li>
                  {"Refurbishment"}
                </li>
                {" "}
                <li>
                  {"Make-good works"}
                </li>
                <li>
                  {"Staged delivery"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/contact/`}>
                  {"Discuss a fit-out"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Design & build ============ */}
        {" "}
        <section className="section" id="design-build">
          {" "}
          <div className="wrap split">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Service 05"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Design & build"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" One team from first sketch to handover. We coordinate design, documentation, permits and construction under a single point of contact, so nothing falls between your architect, your engineer and your builder. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" It's the fastest route from idea to site, and the one where cost surprises are least likely: the design is resolved against a real build budget from the start. "}
              </p>
              {" "}
              <ul className="areas" style={{ marginTop: "26px" }}>
                {" "}
                <li>
                  {"Concept to completion"}
                </li>
                <li>
                  {"Town planning & permits"}
                </li>
                {" "}
                <li>
                  {"Documentation"}
                </li>
                <li>
                  {"Fixed-price contract"}
                </li>
                <li>
                  {"Single point of contact"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/contact/`}>
                  {"Start a design & build"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split__media reveal" style={{ "--d": "100ms" }}>
              {" "}
              <img src={asset("/assets/img/interiors/stair-steel-bw.jpg")} alt="Blackened steel floating staircase beside full-height steel-framed glazing in a double-height entry." width="960" height="1201" loading="lazy" style={{ aspectRatio: "4/5", objectFit: "cover" }} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Project management ============ */}
        {" "}
        <section className="section section--dark" id="project-management">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                {"Service 06"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Project management"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Our refined project management system keeps trades, timelines and budget aligned, and keeps you informed at every stage. We expertly manage every aspect of your project, ensuring a smooth and efficient process from concept to completion. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="pillars reveal">
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"Programme"}
                </div>
                {" "}
                <h3>
                  {"Sequencing that holds"}
                </h3>
                {" "}
                <p>
                  {"Trades booked in the right order, materials on site before they're needed, and a programme you can plan your life around."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"Budget"}
                </div>
                {" "}
                <h3>
                  {"No surprises"}
                </h3>
                {" "}
                <p>
                  {"Itemised contracts, variations documented before work proceeds, and honest advice when a decision will move the number."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"Safety"}
                </div>
                {" "}
                <h3>
                  {"Licensed & trained"}
                </h3>
                {" "}
                <p>
                  {"We place high importance on worksite safety and make sure any contractor accessing your home is fully licensed and trained."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"Comms"}
                </div>
                {" "}
                <h3>
                  {"You always know"}
                </h3>
                {" "}
                <p>
                  {"We prioritise clear communication, keeping you informed from start to finish for complete peace of mind."}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Process ============ */}
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
        <section className="section">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                {"How we work"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Five stages, one point of contact."}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="process reveal">
              {" "}
              <div className="process__step">
                {" "}
                <div className="process__num">
                  {"01"}
                </div>
                {" "}
                <h3>
                  {"Consultation"}
                </h3>
                {" "}
                <p>
                  {"We meet on site or over your plans to understand the scope, the site and what you're trying to achieve, then tell you honestly whether it stacks up."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="process__step">
                {" "}
                <div className="process__num">
                  {"02"}
                </div>
                {" "}
                <h3>
                  {"Design & documentation"}
                </h3>
                {" "}
                <p>
                  {"We work alongside your architect or ours, refining drawings and specifications so the build is fully resolved before anyone picks up a tool."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="process__step">
                {" "}
                <div className="process__num">
                  {"03"}
                </div>
                {" "}
                <h3>
                  {"Fixed-price proposal"}
                </h3>
                {" "}
                <p>
                  {"A detailed, itemised contract with a clear programme. You know the number and the dates before we start."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="process__step">
                {" "}
                <div className="process__num">
                  {"04"}
                </div>
                {" "}
                <h3>
                  {"Construction"}
                </h3>
                {" "}
                <p>
                  {"Licensed trades, a safe and tidy site, and regular updates at every milestone."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="process__step">
                {" "}
                <div className="process__num">
                  {"05"}
                </div>
                {" "}
                <h3>
                  {"Handover & warranty"}
                </h3>
                {" "}
                <p>
                  {"A thorough defect walkthrough, all documentation and manuals, and ongoing support well after you've moved in."}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ CTA ============ */}
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
                {"Not sure which one you need?"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "20px" }}>
                {" Most projects don't fit neatly in a box. Tell us about the site and what you want out of it, and we'll tell you the most sensible way to get there. "}
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
                    <label htmlFor="s-interest">
                      {"What can we help with?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="s-interest" name="interest" required defaultValue="">
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
                    <label htmlFor="s-detail">
                      {"Project details"}
                    </label>
                    {" "}
                    <textarea id="s-detail" name="detail" placeholder="Suburb, stage of planning, rough scope or budget..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="s-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="s-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="s-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="s-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="s-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="s-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
                {"Services"}
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#new-homes">
                    {"New homes"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#duplex">
                    {"Duplex & multi-dwelling"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#renovations">
                    {"Renovations & extensions"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#commercial">
                    {"Office & shop fit-outs"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#design-build">
                    {"Design & build"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#project-management">
                    {"Project management"}
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
