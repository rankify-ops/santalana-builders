import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";

// Converted 1:1 from index.html. Markup, classes and copy are unchanged.
export const metadata: Metadata = {
  title: { absolute: "Santa'lana Builders | High End Residential Builders Melbourne" },
  description: "Santa'lana Builders are registered Melbourne builders with 15+ years delivering high end new homes, duplexes, boutique renovations and commercial fit-outs across Victoria. HIA and MBA members.",
  alternates: { canonical: "https://www.santalana.com.au/" },
  openGraph: {
    type: "website",
    title: "Santa'lana Builders | High End Residential Builders Melbourne",
    description: "Registered Melbourne builders with 15+ years delivering high end homes, duplexes and boutique renovations across Victoria.",
    locale: "en_AU",
    images: [asset("/assets/img/projects/mornington-render-street.jpg")],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Santa'lana Builders",
  "description": "High end residential builders specialising in new homes, duplexes, boutique renovations, and commercial fit-outs across Melbourne and Victoria.",
  "url": "https://www.santalana.com.au/",
  "telephone": "+61421258240",
  "email": "stefan@santalana.com.au",
  "founder": {
    "@type": "Person",
    "name": "Stefan DiRienzo",
    "jobTitle": "Director / Builder"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Nelson Place",
    "addressLocality": "South Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": [
    "Melbourne",
    "Brighton",
    "Moonee Ponds",
    "Aberfeldie",
    "Strathmore",
    "Ascot Vale",
    "Rosebud",
    "Mornington Peninsula",
    "Victoria"
  ],
  "sameAs": [
    "https://www.instagram.com/santalanabuilders/"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled JSON.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {" "}
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {" "}
      {/* ======================= Utility strip ======================= */}
      {" "}
      <div className="utility">
        {" "}
        <div className="wrap utility__inner">
          {" "}
          {/* TODO(client): confirm registration numbers before launch. The capability
             statement and the email signature disagree. See HANDOVER.md. */}
          {" "}
          <span className="utility__licence">
            {"Registered Building Practitioner  /  DB-U 100456  /  CB-U 100040"}
          </span>
          {" "}
          <div className="utility__links">
            {" "}
            <a className="utility__item" href="tel:+61421258240">
              {" "}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              {" 0421 258 240 "}
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
      {/* ======================= Header ======================= */}
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
            <a className="nav__link" href={`${BASE_PATH}/`} aria-current="page">
              {"Home"}
            </a>
            {" "}
            <a className="nav__link" href="#projects">
              {"Projects"}
            </a>
            {" "}
            <a className="nav__link" href="#services">
              {"Services"}
            </a>
            {" "}
            <a className="nav__link" href="#about">
              {"About"}
            </a>
            {" "}
            <a className="nav__link" href="#enquire">
              {"Contact"}
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header-actions">
            {" "}
            <a className="header-phone" href="tel:+61421258240">
              {" "}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              {" 0421 258 240 "}
            </a>
            {" "}
            <a className="btn btn--solid" href="#enquire">
              {"Start your build "}
              <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
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
          <a className="nav__link" style={{ "--i": "0" }} href={`${BASE_PATH}/`} aria-current="page">
            {"Home"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "1" }} href="#projects">
            {"Projects"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "2" }} href="#services">
            {"Services"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "3" }} href="#about">
            {"About"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "4" }} href="#enquire">
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
          <a className="btn btn--light btn--wide" href="#enquire">
            {"Request a consultation "}
            <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <main id="main">
        {" "}
        {/* ======================= Hero ======================= */}
        {" "}
        <section className="hero">
          {" "}
          <div className="hero__media">
            {" "}
            <img src={asset("/assets/img/projects/mornington-render-street.jpg")} alt="Karella Crescent, Mornington: a duplex of two mirrored white rendered residences with vertical timber garage doors, a stone feature column and native landscaping to the street." width="2000" height="1332" fetchPriority="high" />
            {" "}
          </div>
          {" "}
          <div className="wrap hero__inner">
            {" "}
            <div className="hero__copy">
              {" "}
              <p className="eyebrow">
                {"High end residential builders, Melbourne"}
              </p>
              {" "}
              <h1>
                {"Built to the highest standard."}
                <em>
                  {"On time. On budget."}
                </em>
              </h1>
              {" "}
              <p className="hero__lede">
                {" Santa'lana Builders is a registered Victorian building company led by Stefan DiRienzo. For more than 15 years we've delivered architectural homes, duplexes and boutique renovations across Melbourne, managing every stage from concept to completion. "}
              </p>
              {" "}
              <div className="hero__cta">
                {" "}
                <a className="btn btn--light" href="#enquire">
                  {"Request a consultation "}
                  <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
                {" "}
                <a className="btn btn--glass" href="#projects">
                  {"View our projects "}
                  <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
                {" "}
              </div>
              {" "}
              <ul className="hero__proof">
                {" "}
                <li>
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2 4 5.5v6c0 5 3.4 9.2 8 10.5 4.6-1.3 8-5.5 8-10.5v-6L12 2Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {" Fully licensed & insured "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M8.2 12.5 7 22l5-3 5 3-1.2-9.5" />
                  </svg>
                  {" HIA & MBA members "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                  {" 15+ years in Victoria "}
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            {/* Inline enquiry panel, kept in the first screen so the phone number is
               never the only way to make contact. */}
            {" "}
            <div className="enquiry enquiry--dark" id="enquire">
              {" "}
              <div className="enquiry__head">
                {" "}
                <h2>
                  {"Start your build"}
                </h2>
                {" "}
                <p>
                  {"Two quick steps and Stefan will be in touch to arrange a consultation."}
                </p>
                {" "}
              </div>
              {" "}
              <form id="enquiryForm" noValidate>
                {" "}
                <div className="fstep" data-step="1" data-title="Project">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="f-interest">
                      {"What can we help with?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="f-interest" name="interest" required defaultValue="">
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
                    <label htmlFor="f-suburb">
                      {"Project suburb"}
                    </label>
                    {" "}
                    <input id="f-suburb" name="suburb" type="text" placeholder="e.g. Brighton" />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="f-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="f-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="f-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="f-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
                  <button className="btn btn--light btn--grow" type="button" data-next="">
                    {"Continue"}
                  </button>
                  {" "}
                  <button className="btn btn--light btn--grow" type="submit" data-send="">
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
        {/* ======================= Trust bar ======================= */}
        {" "}
        <section className="statbar" aria-label="At a glance">
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
              <div className="statbar__item">
                {" "}
                <div className="statbar__figure">
                  {"HIA & MBA"}
                </div>
                {" "}
                <div className="statbar__label">
                  {"Industry body"}
                  <br />
                  {"members"}
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
                  {"residence delivered"}
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
        {/* ======================= Who we are ======================= */}
        {" "}
        <section className="section" id="about">
          {" "}
          <div className="wrap split">
            {" "}
            <div className="split__copy reveal">
              {" "}
              <p className="eyebrow">
                {"Who we are"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"A builder you can hand the whole thing to."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "24px" }}>
                {" Choosing the right team to bring your vision to life can feel overwhelming. Your project is one of the most significant investments you'll make, and we're committed to making the experience as seamless and stress-free as possible. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" Stefan DiRienzo leads Santa'lana Builders with extensive experience managing a wide range of construction projects, from complex builds to boutique renovations. With deep industry knowledge we manage every aspect of your project, ensuring a smooth and efficient process from concept to completion. "}
              </p>
              {" "}
              <p style={{ color: "var(--slate)", maxWidth: "62ch" }}>
                {" Our tradesmen take great pride in delivering outstanding results. We focus on understanding your specific needs and work closely with you so every detail is executed to perfection. We place high importance on worksite safety and make sure any contractor accessing your home is fully licensed and trained. That is how we protect you, your family and our team. "}
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
            <div className="split__media reveal" style={{ "--d": "120ms" }}>
              {" "}
              <div className="media-stack">
                {" "}
                <div className="media-stack__main">
                  {" "}
                  <img src={asset("/assets/img/interiors/dining-pendant-bw.jpg")} alt="Formal dining room with a stone table, dark fluted timber feature wall and a sculptural glass pendant light above." width="1024" height="683" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="media-stack__inset">
                  {" "}
                  <img src={asset("/assets/img/interiors/stair-steel-bw.jpg")} alt="Blackened steel floating staircase beside full-height steel-framed glazing." width="960" height="1201" loading="lazy" />
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
        {/* ======================= Capabilities / services ======================= */}
        {" "}
        <section className="section section--cloud" id="services">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                {"Our capabilities"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"From boutique renovations to large-scale builds."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" With over 15 years in the Victorian construction industry, Santa'lana Builders specialises in high end residential. We've earned a reputation for excellence across new homes, multi-dwelling developments and commercial fit-outs. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="cards reveal">
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M6 22 24 8l18 14" />
                    <path d="M10 20v18h28V20" />
                    <path d="M20 38V27h8v11" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"New homes & custom builds"}
                </h3>
                {" "}
                <p>
                  {"Architecturally designed residences built to the highest standard, with premium finishes and seamless indoor-outdoor integration."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Luxury homes"}
                  </li>
                  <li>
                    {"Knock-down rebuild"}
                  </li>
                  <li>
                    {"Tight-access sites"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M6 40V16l10-8 10 8v24" />
                    <path d="M26 40V22l8-6 8 6v18" />
                    <path d="M13 40v-9h6v9" />
                    <path d="M33 40v-8h6v8" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Duplex & multi-dwelling"}
                </h3>
                {" "}
                <p>
                  {"Side-by-side and dual-occupancy developments that maximise a site's value without compromising on design or liveability."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Dual occupancy"}
                  </li>
                  <li>
                    {"Townhouses"}
                  </li>
                  <li>
                    {"Developments"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M8 40V12h20v28" />
                    <path d="M28 24h12v16H28" />
                    <path d="M14 20h8M14 28h8M34 32h2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Renovations & extensions"}
                </h3>
                {" "}
                <p>
                  {"Full-scale renovations and rear extensions that blend heritage character with contemporary luxury and open-plan living."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Rear extensions"}
                  </li>
                  <li>
                    {"Second storey"}
                  </li>
                  <li>
                    {"Full refurbishment"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M6 40h36" />
                    <path d="M10 40V14h28v26" />
                    <path d="M17 22h6v6h-6zM25 22h6v6h-6z" />
                    <path d="M21 40v-6h6v6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Office & shop fit-outs"}
                </h3>
                {" "}
                <p>
                  {"Commercial fit-outs delivered to programme. Workplaces and retail spaces finished to the same standard as our homes."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Office fit-out"}
                  </li>
                  <li>
                    {"Retail & hospitality"}
                  </li>
                  <li>
                    {"Refurbishment"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M10 6h20l8 8v28H10z" />
                    <path d="M30 6v8h8" />
                    <path d="M17 24h14M17 31h14" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Design & build"}
                </h3>
                {" "}
                <p>
                  {"One team from first sketch to handover. We coordinate design, documentation, permits and construction under a single point of contact."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Concept to completion"}
                  </li>
                  <li>
                    {"Permits"}
                  </li>
                  <li>
                    {"Fixed-price contract"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
              <article className="card">
                {" "}
                <div className="card__icon">
                  {" "}
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
                    <circle cx="24" cy="24" r="11" />
                    <path d="m20 24 3 3 6-6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Project management"}
                </h3>
                {" "}
                <p>
                  {"Our refined project management system keeps trades, timelines and budget aligned, and keeps you informed at every stage."}
                </p>
                {" "}
                <ul className="card__list">
                  <li>
                    {"Programme control"}
                  </li>
                  <li>
                    {"Trade coordination"}
                  </li>
                  <li>
                    {"Site safety"}
                  </li>
                </ul>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ======================= Featured projects ======================= */}
        {" "}
        <section className="section" id="projects">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                {"Selected work"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Recent builds across Melbourne and the Peninsula."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" A selection of completed and current projects. Each one was delivered with the same attention to detail, whatever the scale of the site. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="projects reveal">
              {" "}
              <div className="project project--wide">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/brighton-facade-dusk.jpg")} alt="Brighton luxury home at dusk: natural stone and timber-clad façade with a double-height entry and uplit travertine path." width="1304" height="865" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Brighton"}
                    </span>
                    <span>
                      {"2023"}
                    </span>
                    <span>
                      {"New home"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Head Street"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"Over 80 squares of timeless coastal luxury. Clean lines, a stone and timber façade with custom steelwork, and a grand double-height entry with a floating staircase."}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/mornington-render-street.jpg")} alt="Street view render of the Mornington duplex: white rendered forms, vertical timber garage doors and landscaped native planting." width="2000" height="1332" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <span className="project__status">
                  {"Under construction"}
                </span>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Mornington"}
                    </span>
                    <span>
                      {"2025"}
                    </span>
                    <span>
                      {"Duplex"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Karella Crescent"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"A duplex in one of Mornington's most sought-after pockets, with elevated bay views, expansive balconies and premium detailing throughout."}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/aberfeldie-facade-dusk.jpg")} alt="Aberfeldie residence at dusk: contemporary rear extension with charcoal rendered walls, a timber deck and warm interior lighting." width="1260" height="837" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Aberfeldie"}
                    </span>
                    <span>
                      {"2021"}
                    </span>
                    <span>
                      {"Renovation & extension"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Aberfeldie residence"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"A full-scale renovation and rear extension delivering open-plan living, soaring ceilings and a sun-drenched alfresco area behind a classic façade."}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/strathmore-facade-dusk.jpg")} alt="Strathmore custom home at dusk: gabled white and charcoal façade behind a dark vertical batten fence." width="1296" height="861" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Strathmore"}
                    </span>
                    <span>
                      {"2022"}
                    </span>
                    <span>
                      {"New home"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Strathmore custom home"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"Built on a tight-access site with major logistical challenges. Proof that no site is too difficult when you build with experience."}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/rosebud-facade-dusk.jpg")} alt="Rosebud duplex at dusk: white and charcoal gabled forms with timber garage doors, gravel driveway and concrete steppers." width="1296" height="868" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Rosebud"}
                    </span>
                    <span>
                      {"2023"}
                    </span>
                    <span>
                      {"Duplex"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Warranilla Avenue"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"A beachside duplex built for year-round comfort. Light-filled and breezy in summer, warm and textural through winter."}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project project--wide">
                {" "}
                <div className="project__media">
                  {" "}
                  <img src={asset("/assets/img/projects/ascotvale-rear-lawn-dusk.jpg")} alt="Ascot Vale duplex from the rear lawn at dusk, with a double-height glazed living space glowing against the evening sky." width="1260" height="837" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project__body">
                  {" "}
                  <div className="project__meta">
                    <span>
                      {"Ascot Vale"}
                    </span>
                    <span>
                      {"2020"}
                    </span>
                    <span>
                      {"Duplex"}
                    </span>
                  </div>
                  {" "}
                  <div className="project__title">
                    {"Ascot Vale duplex"}
                  </div>
                  {" "}
                  <p className="project__desc">
                    {"Moments from the CBD, with rare rear laneway access, secure garaging and private outdoor zones. Inner-city convenience with a suburban lifestyle."}
                  </p>
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
        {/* ======================= Quote band ======================= */}
        {" "}
        <section className="quoteband">
          {" "}
          <div className="quoteband__media">
            {" "}
            <img src={asset("/assets/img/projects/brighton-pool-alfresco.jpg")} alt="" aria-hidden="true" width="1304" height="861" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="wrap quoteband__inner">
            {" "}
            <blockquote>
              {" “Renowned for our attention to detail and tailored approach, we deliver each project to the highest standard, on time and within budget.” "}
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
        {/* ======================= Why choose us ======================= */}
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
                  {"Our team combines expertise, creativity and a keen eye for detail on every project, bringing your ideas to life with exceptional results."}
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
                  {"Efficient building processes mean we complete your project quickly, without ever compromising on quality."}
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
                  {"A refined project management system keeps every trade, delivery and milestone in the right order."}
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
        {/* ======================= Process ======================= */}
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
                  {"Licensed trades, a safe and tidy site, and regular updates at every milestone. Our project management system keeps the programme on track."}
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
        {/* ======================= Credentials ======================= */}
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
                {" We stand apart from cheaper, non-reputable builders by being fully licensed and insured. Our commitment to professionalism and strict adherence to Australian standards ensures your project is in expert hands. "}
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
              </ul>
              {" "}
              <p style={{ fontSize: "13.5px", color: "var(--steel)", marginTop: "16px" }}>
                {" All contractors accessing your home are fully licensed and trained. That is how we protect you, your family and our team. "}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {/* ======================= Areas ======================= */}
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
                {"Ready to build something worth keeping?"}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "20px" }}>
                {" Come to us with finished plans, or just a site and an idea. Either way you get an honest read on what it takes to build it. "}
              </p>
              {" "}
              <ul className="cta__contacts">
                {" "}
                <li>
                  <a href="tel:+61421258240">
                    {" "}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                    </svg>
                    {" 0421 258 240"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:stefan@santalana.com.au">
                    {" "}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 6 10-6" />
                    </svg>
                    {" stefan@santalana.com.au"}
                  </a>
                </li>
                {" "}
                <li>
                  <span>
                    {" "}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {" 12 Nelson Place, South Melbourne VIC"}
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
                    <label htmlFor="c-interest">
                      {"What can we help with?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="c-interest" name="interest" required defaultValue="">
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
                    <label htmlFor="c-detail">
                      {"Project details"}
                    </label>
                    {" "}
                    <textarea id="c-detail" name="detail" placeholder="Suburb, stage of planning, rough scope or budget..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="c-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="c-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="c-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="c-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
      {/* ======================= Footer ======================= */}
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
                  <a href="#projects">
                    {"Projects"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#services">
                    {"Services"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#about">
                    {"About"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#enquire">
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
                  <a href="#services">
                    {"New homes"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#services">
                    {"Duplex & multi-dwelling"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#services">
                    {"Renovations & extensions"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#services">
                    {"Office & shop fit-outs"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#services">
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
         builder. Becomes a bottom bar on a phone. */}
      {" "}
      <div className="dock">
        {" "}
        <a className="dock__btn dock__btn--call" href="tel:+61421258240">
          {" "}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          {" Call "}
        </a>
        {" "}
        <a className="dock__btn dock__btn--quote" href="#enquire">
          {" Consultation "}
          <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
      {" "}
    </>
  );
}
