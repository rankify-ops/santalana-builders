import { BASE_PATH, asset } from "@/lib/basePath";
import { Instagram, Mail, Phone } from "@/components/icons";
import { SERVICES } from "@/lib/services";

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div className="footer-brand">
            <img
              src={asset("/assets/img/brand/logo-white.png")}
              alt="Santa'lana Builders"
              width="2001"
              height="833"
              loading="lazy"
            />
            <p>
              Domestic and commercial builders delivering high end residential projects
              across Melbourne and Victoria.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/santalanabuilders/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santa'lana Builders on Instagram"
              >
                <Instagram />
              </a>
              <a href="tel:+61421258240" aria-label="Call Santa'lana Builders">
                <Phone size={18} />
              </a>
              <a href="mailto:stefan@santalana.com.au" aria-label="Email Santa'lana Builders">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <a href={`${BASE_PATH}${l.href}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href={`${BASE_PATH}/services/${s.slug}/`}>{s.navLabel}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+61421258240">0421 258 240</a>
              </li>
              <li>
                <a href="mailto:stefan@santalana.com.au">stefan@santalana.com.au</a>
              </li>
              <li>
                12 Nelson Place
                <br />
                South Melbourne VIC 3205
              </li>
              <li>
                <a
                  href="https://www.instagram.com/santalanabuilders/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @santalanabuilders
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__base">
          <p>
            &copy; <span id="year">2026</span> Santa&rsquo;lana Builders. All rights reserved.
          </p>
          <p className="licence-line">
            DB-U 100456 &nbsp;/&nbsp; CB-U 100040 &nbsp;/&nbsp; $20M public liability
          </p>
        </div>
      </div>
    </footer>
  );
}
