import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { RedirectHome } from "@/components/RedirectHome";

// Converted 1:1 from contact.html. Markup, classes and copy are unchanged.
// Temporarily hidden: only the homepage is being shared with the client.
// Remove <RedirectHome /> and the robots line to bring this page back.
export const metadata: Metadata = {
  title: { absolute: "Contact Santa'lana Builders | Melbourne" },
  description: "Contact Santa'lana Builders in South Melbourne. Call Stefan DiRienzo on 0421 258 240 or email stefan@santalana.com.au to arrange a consultation.",
  alternates: { canonical: "https://www.santalana.com.au/contact.html" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Contact | Santa'lana Builders",
    description: "Call Stefan on 0421 258 240 or email stefan@santalana.com.au.",
    images: [asset("/assets/img/projects/mornington-render-street.jpg")],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Santa'lana Builders",
  "url": "https://www.santalana.com.au/",
  "telephone": "+61421258240",
  "email": "stefan@santalana.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Nelson Place",
    "addressLocality": "South Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3205",
    "addressCountry": "AU"
  }
};

export default function ContactPage() {
  return (
    <>
      <RedirectHome />
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
            <a className="nav__link" href={`${BASE_PATH}/about/`}>
              {"About"}
            </a>
            {" "}
            <a className="nav__link" href={`${BASE_PATH}/contact/`} aria-current="page">
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
            <a className="btn btn--solid" href="#enquire">
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
          <a className="nav__link" style={{ "--i": "3" }} href={`${BASE_PATH}/about/`}>
            {"About"}
          </a>
          {" "}
          <a className="nav__link" style={{ "--i": "4" }} href={`${BASE_PATH}/contact/`} aria-current="page">
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
            <img src={asset("/assets/img/projects/mornington-render-street.jpg")} alt="Street elevation render of the Mornington duplex showing white rendered forms with timber garage doors and native landscaping." width="2000" height="1332" fetchPriority="high" />
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
                {"Contact"}
              </span>
              {" "}
            </nav>
            {" "}
            <h1>
              {"Let's talk about your build"}
            </h1>
            {" "}
            <p>
              {" Come to us with finished plans, or just a site and an idea. Either way you get an honest read on what it takes to build it. "}
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
        {/* ============ Contact ============ */}
        {" "}
        <section className="section">
          {" "}
          <div className="wrap cta__inner" style={{ paddingBlock: "0" }}>
            {" "}
            <div className="reveal">
              {" "}
              <p className="eyebrow">
                {"Get in touch"}
              </p>
              {" "}
              <h2 className="h-xl">
                {"Speak to Stefan directly."}
              </h2>
              {" "}
              <p className="lede" style={{ marginTop: "22px" }}>
                {" Every enquiry comes straight to us. There is no call centre in between. We reply within one business day. "}
              </p>
              {" "}
              <ul className="creds__list" style={{ marginTop: "34px" }}>
                {" "}
                <li>
                  {" "}
                  <span className="k">
                    {"Phone"}
                  </span>
                  {" "}
                  <span className="v">
                    <a href="tel:+61421258240">
                      {"0421 258 240"}
                    </a>
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="k">
                    {"Email"}
                  </span>
                  {" "}
                  <span className="v">
                    <a href="mailto:stefan@santalana.com.au">
                      {"stefan@santalana.com.au"}
                    </a>
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="k">
                    {"Office"}
                  </span>
                  {" "}
                  <span className="v">
                    {"12 Nelson Place"}
                    <br />
                    {"South Melbourne VIC 3205"}
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="k">
                    {"Instagram"}
                  </span>
                  {" "}
                  <span className="v">
                    <a href="https://www.instagram.com/santalanabuilders/" target="_blank" rel="noopener noreferrer">
                      {"@santalanabuilders"}
                    </a>
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="k">
                    {"Registration"}
                  </span>
                  {" "}
                  <span className="v">
                    {"DB-U 100456 / CB-U 100040"}
                  </span>
                  {" "}
                </li>
                {" "}
              </ul>
              {" "}
              <div style={{ marginTop: "34px" }}>
                {" "}
                <p className="eyebrow">
                  {"Where we build"}
                </p>
                {" "}
                <ul className="areas">
                  {" "}
                  <li>
                    {"Melbourne"}
                  </li>
                  <li>
                    {"Bayside"}
                  </li>
                  <li>
                    {"Inner north"}
                  </li>
                  {" "}
                  <li>
                    {"Mornington Peninsula"}
                  </li>
                  <li>
                    {"Regional Victoria on request"}
                  </li>
                  {" "}
                </ul>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="enquiry reveal" id="enquire" style={{ "--d": "120ms" }}>
              {" "}
              <div className="enquiry__head">
                {" "}
                <h2>
                  {"Request a consultation"}
                </h2>
                {" "}
                <p>
                  {"Tell us about your project and Stefan will be in touch to arrange a time."}
                </p>
                {" "}
              </div>
              {" "}
              <form className="js-enquiry" noValidate>
                {" "}
                <div className="fstep" data-step="1" data-title="Project">
                  {" "}
                  <fieldset className="field fieldset">
                    {" "}
                    <legend>
                      {"What are you building?"}
                    </legend>
                    {" "}
                    <div className="choices">
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-new-home" name="interest" value="New home" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-new-home">
                        {" "}
                        <span className="choice__title">
                          {"New home"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Custom or knock-down rebuild"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-duplex" name="interest" value="Duplex" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-duplex">
                        {" "}
                        <span className="choice__title">
                          {"Duplex"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Dual occupancy or townhouses"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-renovation" name="interest" value="Renovation" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-renovation">
                        {" "}
                        <span className="choice__title">
                          {"Renovation"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Extension or full refurbishment"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-commercial" name="interest" value="Fit-out" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-commercial">
                        {" "}
                        <span className="choice__title">
                          {"Fit-out"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Office, retail or hospitality"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-design" name="interest" value="Design & build" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-design">
                        {" "}
                        <span className="choice__title">
                          {"Design & build"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Concept through to handover"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                      <input className="choice__input" type="radio" id="x-i-other" name="interest" value="Something else" required />
                      {" "}
                      <label className="choice" htmlFor="x-i-other">
                        {" "}
                        <span className="choice__title">
                          {"Something else"}
                        </span>
                        {" "}
                        <span className="choice__note">
                          {"Tell us what you have in mind"}
                        </span>
                        {" "}
                      </label>
                      {" "}
                    </div>
                    {" "}
                  </fieldset>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="x-suburb">
                      {"Project suburb"}
                    </label>
                    {" "}
                    <input id="x-suburb" name="suburb" type="text" placeholder="e.g. Brighton" />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="2" data-title="Detail">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="x-stage">
                      {"Where are you up to?"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="x-stage" name="stage" defaultValue="">
                        <option value="" disabled>
                          {"Select an option"}
                        </option>
                        <option>
                          {"Just an idea"}
                        </option>
                        <option>
                          {"Site secured, no plans yet"}
                        </option>
                        <option>
                          {"Working with an architect or designer"}
                        </option>
                        <option>
                          {"Plans complete, seeking quotes"}
                        </option>
                        <option>
                          {"Permits approved, ready to build"}
                        </option>
                      </select>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="x-budget">
                      {"Budget range (optional)"}
                    </label>
                    {" "}
                    <div className="select-wrap">
                      {" "}
                      <select id="x-budget" name="budget" defaultValue="">
                        <option value="" disabled>
                          {"Select an option"}
                        </option>
                        <option>
                          {"Under $500k"}
                        </option>
                        <option>
                          {"$500k to $1m"}
                        </option>
                        <option>
                          {"$1m to $2m"}
                        </option>
                        <option>
                          {"$2m to $4m"}
                        </option>
                        <option>
                          {"$4m and above"}
                        </option>
                        <option>
                          {"Not sure yet"}
                        </option>
                      </select>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="x-detail">
                      {"Anything else we should know?"}
                    </label>
                    {" "}
                    <textarea id="x-detail" name="detail" placeholder="Rough scope, timing, site constraints..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fstep" data-step="3" data-title="Contact">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="x-name">
                      {"Your name"}
                    </label>
                    {" "}
                    <input id="x-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    {" "}
                  </div>
                  {" "}
                  <div className="field-row">
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="x-phone">
                        {"Phone"}
                      </label>
                      {" "}
                      <input id="x-phone" name="phone" type="tel" autoComplete="tel" placeholder="04..." required />
                      {" "}
                    </div>
                    {" "}
                    <div className="field">
                      {" "}
                      <label htmlFor="x-email">
                        {"Email"}
                      </label>
                      {" "}
                      <input id="x-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
        {/* ============ Map ============ */}
        {" "}
        <section className="section section--tight section--cloud">
          {" "}
          <div className="wrap">
            {" "}
            <div className="section-head reveal" style={{ marginBottom: "28px" }}>
              {" "}
              <p className="eyebrow">
                {"Our office"}
              </p>
              {" "}
              <h2 className="h-lg">
                {"12 Nelson Place, South Melbourne"}
              </h2>
              {" "}
            </div>
            {" "}
            {/* Static link rather than an embedded iframe: no third-party cookies, and
               nothing to slow the page down. Swap for an embed if the client prefers. */}
            {" "}
            <a className="project reveal" style={{ display: "block" }} href="https://www.google.com/maps/search/?api=1&query=12+Nelson+Place+South+Melbourne+VIC+3205" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="project__media" style={{ aspectRatio: "21/9" }}>
                {" "}
                <img src={asset("/assets/img/projects/ascotvale-facade-day.jpg")} alt="Santa'lana Builders is based at 12 Nelson Place, South Melbourne." width="980" height="649" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="project__body">
                {" "}
                <div className="project__meta">
                  <span>
                    {"South Melbourne"}
                  </span>
                  <span>
                    {"VIC 3205"}
                  </span>
                </div>
                {" "}
                <div className="project__title">
                  {"Open in Google Maps"}
                </div>
                {" "}
              </div>
              {" "}
            </a>
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
