import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { breadcrumb, jsonLd, ORGANISATION, SITE } from "@/lib/schema";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Dock } from "@/components/Dock";
import { LicenceStrip } from "@/components/LicenceStrip";

// Converted 1:1 from about.html. Markup, classes and copy are unchanged.
export const metadata: Metadata = {
  title: { absolute: "About Santa'lana Builders | Melbourne Builder" },
  description: "Santa'lana Builders is led by Stefan DiRienzo, a registered Victorian builder with 15+ years in high end residential. HIA and MBA members, $20M insured.",
  alternates: { canonical: "https://www.santalana.com.au/about.html" },
  openGraph: {
    type: "website",
    title: "About | Santa'lana Builders",
    description: "Led by Stefan DiRienzo. 15+ years of high end residential building across Victoria.",
    images: [asset("/assets/img/interiors/dining-pendant-bw.jpg")],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled JSON.
        dangerouslySetInnerHTML={{ __html: jsonLd([{ "@type": "AboutPage", "@id": `${SITE}/about/#page`, name: "About Santa'lana Builders", url: `${SITE}/about/`, about: { "@id": `${SITE}/#organisation` } }, ORGANISATION, breadcrumb([{ name: "About", path: "/about/" }])]) }}
      />
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {" "}
      <SiteHeader current="about" />
      {" "}
      <main id="main">
        {" "}
        <section className="pagehero">
          {" "}
          <div className="pagehero__media">
            {" "}
            <img src={asset("/assets/img/projects/aberfeldie-facade-dusk.jpg")} alt="Aberfeldie rear extension at dusk. Charcoal rendered contemporary form with a timber deck and full-height glazing." width="1260" height="837" fetchPriority="high" />
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
                {"About"}
              </span>
              {" "}
            </nav>
            {" "}
            <h1>
              {"About Santa'lana"}
            </h1>
            {" "}
            <p>
              {" A registered Victorian building company specialising in high end residential, trusted with some of Melbourne's most considered homes. "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Who we are ============ */}
        {" "}
        {/* Registration detail. Sits in the utility strip on desktop; on a phone that
           bar is too crowded, so it reappears here under the hero instead. */}
        {" "}
        <LicenceStrip />
        {" "}
        <section className="section">
          {" "}
          <div className="wrap split">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Who we are"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Led from the site, not an office."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "24px" }}>
                {" As the founder of Santa'lana Builders, Stefan DiRienzo leads his team with extensive experience in managing a wide range of construction projects, from complex builds to boutique renovations. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" He has run everything from tight access custom builds to boutique renovations, and he still runs them from the site rather than an office. The programme, the trades and the budget sit in one place, which is why the dates you are given at the start are the dates you get. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" Choosing a builder comes down to who you trust with a very large sum of money and a long stretch of your life. We would rather over explain than leave you guessing, so you get straight answers on cost and programme, including when the answer is not the one you wanted. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" The trades we use are the trades we keep using. Most have been on our sites for years, they are licensed, and they know the standard is checked before the work is covered up rather than after. "}
              </p>
              {" "}
              <div className="signature">
                {" "}
                <div className="signature__name">
                  {"Stefan DiRienzo"}
                </div>
                {" "}
                <div className="signature__role">
                  {"Director / Builder"}
                </div>
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
                  <img src={asset("/assets/img/interiors/dining-pendant-bw.jpg")} alt="Formal dining room with a stone table, dark fluted timber feature wall and a sculptural glass pendant above." width="1024" height="683" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="media-stack__inset">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-stone-detail.jpg")} alt="Stacked slabs of natural stone on site before installation." width="920" height="1150" loading="lazy" />
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
        {/* ============ Safety ============ */}
        {" "}
        <section className="quoteband">
          {" "}
          <div className="quoteband__media">
            {" "}
            <img src={asset("/assets/img/projects/strathmore-facade-dusk.jpg")} alt="" aria-hidden="true" width="1296" height="861" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="wrap quoteband__inner">
            {" "}
            <blockquote>
              {" “We place high importance on worksite safety and make sure any contractor accessing your home is fully licensed and trained. This is our way of protecting you, your family, and our team.” "}
            </blockquote>
            {" "}
            <cite>
              {"Santa'lana Builders"}
            </cite>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Why choose us ============ */}
        {" "}
        <section className="section section--dark">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                {"Why choose us"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Four things you can count on."}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="pillars reveal">
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"01"}
                </div>
                {" "}
                <h3>
                  {"Our team"}
                </h3>
                {" "}
                <p>
                  {"Our team combines expertise, creativity and a keen eye for detail in every project. We bring your project ideas to life by delivering exceptional results."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"02"}
                </div>
                {" "}
                <h3>
                  {"Speedy service"}
                </h3>
                {" "}
                <p>
                  {"With our efficient building processes we're able to ensure speedy completion of your project without compromising on quality."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"03"}
                </div>
                {" "}
                <h3>
                  {"Project management"}
                </h3>
                {" "}
                <p>
                  {"With our refined project management system, we ensure your project is completed quickly without compromising on quality."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="pillar">
                {" "}
                <div className="pillar__num">
                  {"04"}
                </div>
                {" "}
                <h3>
                  {"Transparent communication"}
                </h3>
                {" "}
                <p>
                  {"You get one number to call and a straight answer on it. If a date slips or a cost changes, you hear it from us before you notice it yourself."}
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
        {/* ============ Capabilities ============ */}
        {" "}
        <section className="section">
          {" "}
          <div className="wrap split split--media-first">
            {" "}
            <div className="split__media reveal">
              {" "}
              <img src={asset("/assets/img/interiors/kitchen-butlers-bw.jpg")} alt="Kitchen with a stone island bench, a single stool and a dark vertical batten wall leading through to the butler's pantry." width="768" height="960" loading="lazy" style={{ aspectRatio: "4/5", objectFit: "cover" }} />
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ "--d": "100ms" }}>
              {" "}
              <p className="eyebrow">
                {"Our capabilities"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Fifteen years of high end residential."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" With over 15 years of experience in the construction industry in Victoria, Santa'lana Builders specialises in high end residential projects. From boutique renovations, office and shop fit-outs to large-scale builds, we've earned a reputation for excellence. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" That experience is what turns a set of drawings into a home worth what you put into it. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)" }}>
                {" Plenty of cheaper quotes come from builders who are not registered, not insured, or both. We are a registered building practitioner, we carry $20M public liability, and we build to the Australian standards. It is the part of a quote you cannot see, and the part you find out about later. "}
              </p>
              {" "}
              <div className="stack-cta">
                {" "}
                <a className="btn btn--ghost" href={`${BASE_PATH}/services/`}>
                  {"See what we build"}
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
        {/* ============ Credentials ============ */}
        {" "}
        <section className="section section--cloud">
          {" "}
          <div className="wrap creds">
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Memberships & certifications"}
              </p>
              {" "}
              <h2 className="h-lg">
                {"Backed by the industry's most respected bodies."}
              </h2>
              {" "}
              <p style={{ color: "var(--slate)", marginTop: "18px", maxWidth: "52ch" }}>
                {" Santa'lana Builders is a leader in the industry, backed by relevant certifications and memberships. We are proud members of both the Housing Industry Association (HIA) and the Master Builders Association (MBA), two of the most respected industry bodies in Australia. "}
              </p>
              {" "}
              <div className="creds__logos" style={{ marginTop: "32px" }}>
                {" "}
                <img src={asset("/assets/img/brand/hia-member.png")} alt="Housing Industry Association member" width="1080" height="1080" loading="lazy" />
                {" "}
                <div className="creds__logo-text">
                  {"MBA"}
                  <small>
                    {"Master Builders"}
                  </small>
                </div>
                {" "}
                <img src={asset("/assets/img/brand/australian-standard.png")} alt="Certified Product, Australian Standard" width="936" height="368" loading="lazy" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ "--d": "120ms" }}>
              {" "}
              <ul className="creds__list">
                {" "}
                <li>
                  <span className="k">
                    {"Domestic builder"}
                  </span>
                  <span className="v">
                    {"DB-U 100456"}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="k">
                    {"Commercial builder"}
                  </span>
                  <span className="v">
                    {"CB-U 100040"}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="k">
                    {"Public liability"}
                  </span>
                  <span className="v">
                    {"$20 million"}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="k">
                    {"Registration"}
                  </span>
                  <span className="v">
                    {"Publicly listed on the VBA register"}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="k">
                    {"Memberships"}
                  </span>
                  <span className="v">
                    {"HIA & Master Builders Association"}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="k">
                    {"Specialisation"}
                  </span>
                  <span className="v">
                    {"High end residential"}
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
              <p style={{ fontSize: "13.5px", color: "var(--steel)", marginTop: "16px" }}>
                {" Our licence information is publicly available on the Victorian Building Authority register. We hold $20 million in public liability insurance. That is how we protect you, your family and our team. "}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ============ Areas ============ */}
        {" "}
        <section className="section section--tight">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal" style={{ marginBottom: "34px" }}>
              {" "}
              <p className="eyebrow">
                {"Where we build"}
              </p>
              {" "}
              <h2 className="h-lg">
                {"Melbourne, the bayside suburbs and the Mornington Peninsula."}
              </h2>
              {" "}
            </div>
            {" "}
            <ul className="areas reveal" style={{ justifyContent: "center" }}>
              {" "}
              <li>
                {"Brighton"}
              </li>
              <li>
                {"Moonee Ponds"}
              </li>
              <li>
                {"Aberfeldie"}
              </li>
              <li>
                {"Ascot Vale"}
              </li>
              {" "}
              <li>
                {"Strathmore"}
              </li>
              <li>
                {"Essendon"}
              </li>
              <li>
                {"South Melbourne"}
              </li>
              <li>
                {"Port Melbourne"}
              </li>
              {" "}
              <li>
                {"Albert Park"}
              </li>
              <li>
                {"Hampton"}
              </li>
              <li>
                {"Sandringham"}
              </li>
              <li>
                {"Rosebud"}
              </li>
              {" "}
              <li>
                {"Mornington"}
              </li>
              <li>
                {"Mount Eliza"}
              </li>
              <li>
                {"Mount Martha"}
              </li>
              <li>
                {"Sorrento"}
              </li>
              {" "}
            </ul>
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
                {"Work with a builder who turns up."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "20px" }}>
                {" Tell us about your project and Stefan will be in touch to arrange a consultation. "}
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
                    <label htmlFor="a-interest">
                      {"What can we help with?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="a-interest" name="interest" required defaultValue="">
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
                    <label htmlFor="a-detail">
                      {"Project details"}
                    </label>
                    {" "}
                    <textarea id="a-detail" name="detail" placeholder="Suburb, stage of planning, rough scope or budget..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="a-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="a-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="a-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="a-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="a-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="a-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
