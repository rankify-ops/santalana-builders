import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_PATH, asset } from "@/lib/basePath";
import { SERVICES, getService } from "@/lib/services";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LicenceStrip } from "@/components/LicenceStrip";
import { Dock } from "@/components/Dock";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ArrowUpRight, Award, Check, Shield } from "@/components/icons";
import { ServiceIcon } from "@/components/ServiceIcon";

const SITE = "https://www.santalana.com.au";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `${SITE}/services/${service.slug}/`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [asset(service.heroImage.src)],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE}/services/${service.slug}/`;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  /* Three graphs rather than one: the breadcrumb trail, the service itself,
     and the FAQ block, which is what earns the expandable result. */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services/` },
          { "@type": "ListItem", position: 3, name: service.navLabel, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        description: service.metaDescription,
        serviceType: service.name,
        url,
        areaServed: [
          { "@type": "City", name: "Melbourne" },
          { "@type": "AdministrativeArea", name: "Mornington Peninsula" },
          { "@type": "State", name: "Victoria" },
        ],
        provider: {
          "@type": "GeneralContractor",
          name: "Santa'lana Builders",
          url: `${SITE}/`,
          telephone: "+61421258240",
          email: "stefan@santalana.com.au",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Nelson Place",
            addressLocality: "South Melbourne",
            addressRegion: "VIC",
            postalCode: "3205",
            addressCountry: "AU",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled JSON built from the service data above.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader current="services" />

      <main id="main">
        <section className="pagehero">
          <div className="pagehero__media">
            <img
              src={asset(service.heroImage.src)}
              alt={service.heroImage.alt}
              width="1600"
              height="1066"
              fetchPriority="high"
            />
          </div>
          <div className="wrap pagehero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={`${BASE_PATH}/`}>Home</a>
              <a href={`${BASE_PATH}/services/`}>Services</a>
              <span>{service.navLabel}</span>
            </nav>
            <div className="pagehero__icon">
              <ServiceIcon slug={service.slug} size={46} />
            </div>
            <h1>{service.h1}</h1>
            <p>{service.intro}</p>

            <div className="stack-cta">
              <a className="btn btn--light" href="#enquire">
                Request a consultation
                <ArrowUpRight />
              </a>
              <a className="btn btn--glass" href={`${BASE_PATH}/projects/#${service.proof.anchor}`}>
                {service.proof.label}
                <ArrowUpRight />
              </a>
            </div>

            <ul className="hero__proof">
              {service.chips.map((c, i) => (
                <li key={c}>
                  {i === 0 ? <Shield /> : i === 1 ? <Award /> : <Check size={15} />}
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LicenceStrip />

        {/* Sub-service sections. The middle one carries an image so the page
            does not run as three identical text blocks. */}
        {service.sections.map((sec, i) => {
          const withImage = i === 1;
          return (
            <section
              className={`section${i === 1 ? " section--cloud" : ""}`}
              id={`s${i + 1}`}
              key={sec.h2}
            >
              <div className={`wrap${withImage ? " split split--media-first" : ""}`}>
                {withImage && (
                  <div className="split__media reveal">
                    <img
                      src={asset(service.inlineImage.src)}
                      alt={service.inlineImage.alt}
                      width="1200"
                      height="800"
                      loading="lazy"
                      style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                    />
                  </div>
                )}
                <div className="reveal">
                  <p className="eyebrow">{sec.eyebrow}</p>
                  <h2 className="h-xl">{sec.h2}</h2>
                  {sec.body.map((p, k) => (
                    <p key={k} className={k === 0 ? "lede" : undefined} style={k === 0 ? { marginTop: 22 } : { color: "var(--slate)" }}>
                      {p}
                    </p>
                  ))}
                  <ul className="ticklist">
                    {sec.bullets.map((b) => (
                      <li key={b}>
                        <Check />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}

        <section className="section section--dark">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">Why choose us</p>
              <h2 className="h-xl">{service.whyHeading}</h2>
            </div>
            <div className="pillars reveal">
              {service.pillars.map((p, i) => (
                <div className="pillar" key={p.h3}>
                  <div className="pillar__num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{p.h3}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">Questions</p>
              <h2 className="h-xl">Frequently asked questions</h2>
            </div>
            <div className="faq reveal">
              {service.faqs.map((f) => (
                <details className="faq__item" key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cloud section--tight">
          <div className="wrap">
            <div className="section-head reveal" style={{ marginBottom: 30 }}>
              <p className="eyebrow">Other services</p>
              <h2 className="h-lg">What else we build</h2>
            </div>
            <ul className="areas reveal">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`${BASE_PATH}/services/${o.slug}/`}>{o.navLabel}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta" id="enquire">
          <div className="wrap cta__inner">
            <div className="reveal">
              <p className="eyebrow">Let&rsquo;s talk</p>
              <h2>Get a price on your {service.navLabel.toLowerCase()} project.</h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Come to us with finished plans, or just a site and an idea. Either way you
                get an honest read on what it takes to build it.
              </p>
              <ul className="cta__contacts">
                <li>
                  <a href="tel:+61421258240">0421 258 240</a>
                </li>
                <li>
                  <a href="mailto:stefan@santalana.com.au">stefan@santalana.com.au</a>
                </li>
                <li>
                  <span>12 Nelson Place, South Melbourne VIC</span>
                </li>
              </ul>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <EnquiryForm
                idPrefix={`sv-${service.slug}`}
                heading="Request a consultation"
                sub="One business day response, every time."
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Dock />
    </>
  );
}
