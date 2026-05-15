import { SpecAccordion } from "../specifications/SpecAccordion.jsx";

const SPEC_IMAGE =
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80";

export function SpecificationsSection() {
  return (
    <section className="section section--specs" id="specifications" aria-labelledby="specs-heading">
      <div className="container">
        <header className="section-header section-header--left">
          <h2 id="specs-heading" className="heading-serif">
            Specifications
          </h2>
        </header>
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-6">
            <div className="specs-visual rounded-4 shadow overflow-hidden">
              <img src={SPEC_IMAGE} alt="Interior architectural detail" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-6">
            <SpecAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
