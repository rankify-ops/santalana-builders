import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { RedirectHome } from "@/components/RedirectHome";

// Converted 1:1 from about.html. Markup, classes and copy are unchanged.
// Temporarily hidden: only the homepage is being shared with the client.
// Remove <RedirectHome /> and the robots line to bring this page back.
export const metadata: Metadata = {
  title: { absolute: "About Santa'lana Builders | Stefan DiRienzo, Melbourne Builder" },
  description: "Santa'lana Builders is led by Stefan DiRienzo, a registered Victorian builder with 15+ years delivering high end residential projects. Fully licensed, $20M insured, HIA and MBA members.",
  alternates: { canonical: "https://www.santalana.com.au/about.html" },
  robots: { index: false, follow: false },
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
            <a className="nav__link" href={`${BASE_PATH}/services/`}>
              {"Services"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/about/`} aria-current="page">
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
          <a className="nav__link" style={{ "--i": "2" }} href={`${BASE_PATH}/services/`}>
            {"Services"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "3" }} href={`${BASE_PATH}/about/`} aria-current="page">
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
                {" With deep industry knowledge, we expertly manage every aspect of your project, ensuring a smooth and efficient process from concept to completion. Renowned for our attention to detail and tailored approach, we deliver each project to the highest standard, on time and within budget. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" Choosing the right team to bring your vision to life can feel overwhelming. We understand that your project is one of the most significant investments you'll make, and we're committed to making the experience as seamless and stress-free as possible. From start to finish, we'll ensure you feel confident and informed, guiding you through every stage. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" Our team of highly skilled and qualified tradesmen take great pride in delivering outstanding results. We focus on understanding your specific needs and work closely with you to ensure every detail is executed to perfection. "}
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
                {" We stand apart from cheaper, non-reputable builders by being fully insured and licensed. Our commitment to professionalism and strict adherence to Australian standards ensures your project is in expert hands, prioritising quality, safety and customer satisfaction from start to finish. "}
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
            <div className="section-head section-head--center reveal" style={{ marginBottom: "34px" }}>
              {" "}
              <p className="eyebrow eyebrow--center">
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
                  <a href={`${BASE_PATH}/services/#new-homes`}>
                    {"New homes"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/services/#duplex`}>
                    {"Duplex & multi-dwelling"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/services/#renovations`}>
                    {"Renovations & extensions"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/services/#commercial`}>
                    {"Office & shop fit-outs"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href={`${BASE_PATH}/services/#design-build`}>
                    {"Design & build"}
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
