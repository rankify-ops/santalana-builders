import { BASE_PATH } from "@/lib/basePath";
import { ArrowUpRight, Phone } from "@/components/icons";

/**
 * Floating Call / Consultation dock. site-behaviour.js reveals it once the
 * hero buttons have scrolled away; on pages with no hero CTA it shows straight
 * away. `quoteHref` is the in-page form on the homepage, the contact page
 * everywhere else.
 */
export function Dock({ quoteHref }: { quoteHref?: string }) {
  return (
    <div className="dock">
      <a className="dock__btn dock__btn--call" href="tel:+61421258240">
        <Phone />
        Call
      </a>
      <a className="dock__btn dock__btn--quote" href={quoteHref ?? `${BASE_PATH}/contact/`}>
        Consultation
        <ArrowUpRight />
      </a>
    </div>
  );
}
