import { AMENITY_GALLERY_BY_TAB } from "../../data/amenitiesMedia.js";

function MasonryCell({ area, src, alt }) {
  return (
    <div className={`amenities-masonry__cell amenities-masonry__cell--${area}`}>
      <div className="amenities-masonry__inner">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}

export function AmenitiesTabGallery({ activeTab }) {
  const images = AMENITY_GALLERY_BY_TAB[activeTab] ?? [];

  if (activeTab === "recharge" && images.length === 5) {
    const [a, b, c, d, e] = images;
    return (
      <div className="amenities-gallery amenities-gallery--elevated amenities-gallery-motion rounded-4 overflow-hidden">
        <div className="amenities-masonry">
          <MasonryCell area="a" src={a.src} alt={a.alt} />
          <MasonryCell area="b" src={b.src} alt={b.alt} />
          <MasonryCell area="c" src={c.src} alt={c.alt} />
          <MasonryCell area="d" src={d.src} alt={d.alt} />
          <MasonryCell area="e" src={e.src} alt={e.alt} />
        </div>
      </div>
    );
  }

  return (
    <div className="amenities-gallery amenities-gallery--elevated amenities-gallery-motion rounded-4 overflow-hidden">
      <div className="row g-2 p-2">
        {images.map((img, index) => (
          <div key={img.src} className="col-6">
            <div
              className="amenities-tile ratio ratio-4x3 rounded-4 overflow-hidden"
              style={{ "--tile": index }}
            >
              <img src={img.src} alt={img.alt} className="object-fit-cover" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
