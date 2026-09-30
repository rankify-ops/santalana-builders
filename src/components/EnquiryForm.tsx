import { ArrowUpRight } from "@/components/icons";

export const INTERESTS = [
  "New home or custom build",
  "Duplex or multi-dwelling development",
  "Renovation and extension",
  "Office or shop fit-out",
  "Design and build",
  "Something else",
];

/**
 * Staged enquiry form. The .fstep blocks are plain markup on purpose: with
 * scripting off the browser shows every stage as one long form and the single
 * submit still works. site-behaviour.js adds the progress bar and navigation.
 *
 * `idPrefix` must be unique per form on a page, since labels bind by id.
 */
export function EnquiryForm({
  idPrefix,
  variant = "light",
  heading = "Request a consultation",
  sub = "One business day response, every time.",
  defaultInterest,
}: {
  idPrefix: string;
  variant?: "light" | "dark";
  heading?: string;
  sub?: string;
  defaultInterest?: string;
}) {
  const btn = variant === "dark" ? "btn--light" : "btn--solid";
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <div className={`enquiry${variant === "dark" ? " enquiry--dark" : ""}`}>
      <div className="enquiry__head">
        <h2>{heading}</h2>
        <p>{sub}</p>
      </div>

      <form className="js-enquiry" noValidate>
        <div className="fstep" data-step="1" data-title="Project">
          <div className="field">
            <label htmlFor={id("interest")}>What can we help with?</label>
            <div className="select-wrap">
              <select
                id={id("interest")}
                name="interest"
                required
                defaultValue={defaultInterest ?? ""}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {INTERESTS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor={id("detail")}>Project details</label>
            <textarea
              id={id("detail")}
              name="detail"
              placeholder="Suburb, stage of planning, rough scope or budget..."
            />
          </div>
        </div>

        <div className="fstep" data-step="2" data-title="Contact">
          <div className="field">
            <label htmlFor={id("name")}>Your name</label>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              required
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor={id("phone")}>Phone</label>
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="04..."
                required
              />
            </div>
            <div className="field">
              <label htmlFor={id("email")}>Email</label>
              <input
                id={id("email")}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        </div>

        <p className="fstatus" data-fstatus="" aria-live="polite" />

        <div className="fnav">
          <button className="btn btn--quiet" type="button" data-back="" hidden>
            Back
          </button>
          <button className={`btn ${btn} btn--grow`} type="button" data-next="">
            Continue
          </button>
          <button className={`btn ${btn} btn--grow`} type="submit" data-send="">
            Send enquiry
            <ArrowUpRight />
          </button>
        </div>
      </form>
    </div>
  );
}
