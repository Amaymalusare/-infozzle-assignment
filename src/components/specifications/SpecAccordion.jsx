import { SPEC_ITEMS } from "../../data/specItems.jsx";

export function SpecAccordion() {
  return (
    <div className="accordion accordion-flush" id="specAccordion">
      {SPEC_ITEMS.map(({ id, title, content }, index) => {
        const collapseId = `collapse-spec-${id}`;
        const headingId = `heading-spec-${id}`;
        const isFirst = index === 0;
        return (
          <div className="accordion-item border-0 border-bottom" key={id}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className={`accordion-button shadow-none ${isFirst ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isFirst ? "true" : "false"}
                aria-controls={collapseId}
              >
                {title}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
              data-bs-parent="#specAccordion"
              aria-labelledby={headingId}
            >
              <div className="accordion-body pt-0">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
