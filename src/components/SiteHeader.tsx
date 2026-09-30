import { BASE_PATH, asset } from "@/lib/basePath";
import { ArrowUpRight, Mail, Phone } from "@/components/icons";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";

export type NavKey = "home" | "projects" | "services" | "about" | "contact";

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects/" },
  { key: "services", label: "Services", href: "/services/" },
  { key: "about", label: "About", href: "/about/" },
  { key: "contact", label: "Contact", href: "/contact/" },
];

/* Both brand mark variants ship on every page; CSS picks one per theme, and
   the menu overlay always takes the white one because it sits on a dark panel. */
function BrandMark() {
  return (
    <a className="brandmark" href={`${BASE_PATH}/`} aria-label="Santa'lana Builders home">
      <img
        className="brandmark__light"
        src={asset("/assets/img/brand/logo-white.png")}
        alt="Santa'lana Builders"
        width="2001"
        height="833"
      />
      <img
        className="brandmark__dark"
        src={asset("/assets/img/brand/logo-dark.png")}
        alt="Santa'lana Builders"
        width="2000"
        height="833"
      />
    </a>
  );
}

/**
 * Utility strip, sticky header and the full-screen mobile menu.
 *
 * Services carries a submenu of the six service pages. It opens on hover and
 * on keyboard focus through CSS alone, and the parent link still goes to the
 * services index, so the menu needs no JavaScript to be usable.
 *
 * `ctaHref` differs on the homepage, where the button scrolls to the in-page
 * enquiry form instead of loading the contact page.
 */
export function SiteHeader({ current, ctaHref }: { current?: NavKey; ctaHref?: string }) {
  const cta = ctaHref ?? `${BASE_PATH}/contact/`;

  return (
    <>
      <div className="utility">
        <div className="wrap utility__inner">
          <span className="utility__licence">
            Registered Building Practitioner &nbsp;/&nbsp; DB-U 100456 &nbsp;/&nbsp; CB-U 100040
          </span>
          <div className="utility__links">
            <a className="utility__item" href="tel:+61421258240">
              <Phone size={13} />
              0421 258 240
            </a>
            <a className="utility__item" href="mailto:stefan@santalana.com.au">
              stefan@santalana.com.au
            </a>
          </div>
        </div>
      </div>

      <header className="site-header" id="siteHeader">
        <div className="wrap site-header__inner">
          <BrandMark />

          <nav className="nav" id="primaryNav" aria-label="Primary">
            {NAV.map((item) =>
              item.key === "services" ? (
                <div className="nav__group" key={item.key}>
                  <a
                    className="nav__link nav__link--parent"
                    href={`${BASE_PATH}${item.href}`}
                    aria-current={item.key === current ? "page" : undefined}
                  >
                    {item.label}
                    <svg
                      className="nav__caret"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </a>

                  <div className="submenu">
                    <a className="submenu__all" href={`${BASE_PATH}/services/`}>
                      All services
                      <ArrowUpRight size={13} />
                    </a>
                    <ul>
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <a href={`${BASE_PATH}/services/${s.slug}/`}>
                            <ServiceIcon slug={s.slug} size={20} />
                            <span>{s.navLabel}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={item.key}
                  className="nav__link"
                  href={`${BASE_PATH}${item.href}`}
                  aria-current={item.key === current ? "page" : undefined}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href="tel:+61421258240">
              <Phone />
              0421 258 240
            </a>
            <a className="btn btn--solid" href={cta}>
              Start your build
              <ArrowUpRight />
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-expanded="false"
              aria-controls="navPanel"
              aria-label="Menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu. inert until site-behaviour.js opens it. */}
      <div
        className="navpanel"
        id="navPanel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert
      >
        <div className="wrap navpanel__top">
          <BrandMark />
        </div>

        <nav className="wrap navpanel__body" aria-label="Mobile">
          {NAV.map((item, i) =>
            item.key === "services" ? (
              <div className="navpanel__group" style={{ "--i": String(i) }} key={item.key}>
                <a
                  className="nav__link"
                  href={`${BASE_PATH}${item.href}`}
                  aria-current={item.key === current ? "page" : undefined}
                >
                  {item.label}
                </a>
                <ul className="navpanel__sub">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <a href={`${BASE_PATH}/services/${s.slug}/`}>
                        <ServiceIcon slug={s.slug} size={18} />
                        <span>{s.navLabel}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                key={item.key}
                className="nav__link"
                style={{ "--i": String(i) }}
                href={`${BASE_PATH}${item.href}`}
                aria-current={item.key === current ? "page" : undefined}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="wrap navpanel__foot">
          <div className="navpanel__contact">
            <a href="tel:+61421258240">
              <Phone size={16} />
              0421 258 240
            </a>
            <a href="mailto:stefan@santalana.com.au">
              <Mail />
              stefan@santalana.com.au
            </a>
          </div>
          <a className="btn btn--light btn--wide" href={cta}>
            Request a consultation
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
}
