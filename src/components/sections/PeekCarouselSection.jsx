import { PEEK_SLIDES } from "../../data/peekSlidesData.js";
import { PeekCarousel } from "../peek/PeekCarousel.jsx";

export function PeekCarouselSection() {
  return (
    <section className="section section--peek" id="experience" aria-labelledby="peek-heading">
      <div className="container">
        <h2 id="peek-heading" className="heading-serif heading-serif--center mb-4">
          A peek into Assetz Miru &amp; Miyo
        </h2>
        <PeekCarousel slides={PEEK_SLIDES} autoplayInterval={5500} />
      </div>
    </section>
  );
}
