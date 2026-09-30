import type { Metadata } from "next";
import { BASE_PATH, asset } from "@/lib/basePath";
import { breadcrumb, jsonLd, SITE } from "@/lib/schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Dock } from "@/components/Dock";
import { LicenceStrip } from "@/components/LicenceStrip";

// Converted 1:1 from contact.html. Markup, classes and copy are unchanged.
export const metadata: Metadata = {
  title: { absolute: "Contact Santa'lana Builders | Melbourne" },
  description: "Contact Santa'lana Builders in South Melbourne. Call Stefan DiRienzo on 0421 258 240 or email stefan@santalana.com.au to arrange a consultation.",
  alternates: { canonical: "https://www.santalana.com.au/contact.html" },
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
      <script
        type="application/ld+json"
        // Static, author-controlled JSON.
        dangerouslySetInnerHTML={{ __html: jsonLd([{ "@type": "ContactPage", "@id": `${SITE}/contact/#page`, name: "Contact", url: `${SITE}/contact/` }, breadcrumb([{ name: "Contact", path: "/contact/" }])]) }}
      />
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
      <SiteHeader current="contact" ctaHref="#enquire" />
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
        <LicenceStrip />
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
                        <ServiceIcon slug="new-homes" size={18} />
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
                        <ServiceIcon slug="duplex" size={18} />
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
                        <ServiceIcon slug="renovations" size={18} />
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
                        <ServiceIcon slug="commercial" size={18} />
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
                        <ServiceIcon slug="design-build" size={18} />
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
                        <ServiceIcon slug="other" size={18} />
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
      <SiteFooter />
      {" "}
      {/* Floating dock: call and consultation are the two actions that matter for a
         builder, plus the theme control. Becomes a bottom bar on a phone. */}
      {" "}
      <Dock quoteHref="#enquire" />
      {" "}
      {" "}
    </>
  );
}
