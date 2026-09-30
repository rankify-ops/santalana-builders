import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { ArrowUpRight } from "@/components/icons";
import { breadcrumb, jsonLd, servicesItemList, SITE } from "@/lib/schema";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Dock } from "@/components/Dock";
import { LicenceStrip } from "@/components/LicenceStrip";

// Converted 1:1 from services.html. Markup, classes and copy are unchanged.
export const metadata: Metadata = {
  title: { absolute: "Building Services Melbourne | Santa'lana Builders" },
  description: "New homes, duplexes, renovations, office and shop fit-outs, design and build and project management from a registered Melbourne builder.",
  alternates: { canonical: "https://www.santalana.com.au/services.html" },
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
      <script
        type="application/ld+json"
        // Static, author-controlled JSON.
        dangerouslySetInnerHTML={{ __html: jsonLd([{ "@type": "CollectionPage", "@id": `${SITE}/services/#page`, name: "Building services", url: `${SITE}/services/` }, servicesItemList(), breadcrumb([{ name: "Services", path: "/services/" }])]) }}
      />
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {" "}
      <SiteHeader current="services" />
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
                <a className="btn btn--solid" href={`${BASE_PATH}/services/new-homes/`}>
                  More on new homes
                  <ArrowUpRight />
                </a>
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
                <a className="btn btn--solid" href={`${BASE_PATH}/services/duplex/`}>
                  More on duplex and multi-dwelling
                  <ArrowUpRight />
                </a>
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
                <a className="btn btn--solid" href={`${BASE_PATH}/services/renovations/`}>
                  More on renovations and extensions
                  <ArrowUpRight />
                </a>
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
                <a className="btn btn--solid" href={`${BASE_PATH}/services/commercial/`}>
                  More on office and shop fit-outs
                  <ArrowUpRight />
                </a>
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
                <a className="btn btn--solid" href={`${BASE_PATH}/services/design-build/`}>
                  More on design and build
                  <ArrowUpRight />
                </a>
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
        
              <div className="stack-cta">
                <a className="btn btn--solid" href={`${BASE_PATH}/services/project-management/`}>
                  More on project management
                  <ArrowUpRight />
                </a>
              </div>
</section>
        {" "}
        {/* ============ Process ============ */}
        {" "}
        {/* Registration detail. Sits in the utility strip on desktop; on a phone that
           bar is too crowded, so it reappears here under the hero instead. */}
        {" "}
        <LicenceStrip />
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
      <SiteFooter />
      {" "}
      {/* Floating dock: call and consultation are the two actions that matter for a
         builder, plus the theme control. Becomes a bottom bar on a phone. */}
      {" "}
      <Dock />
      {" "}
      {" "}
    </>
  );
}
