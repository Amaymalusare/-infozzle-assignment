import { useState } from "react";
import { AMENITY_INTRO, AMENITY_LISTS, AMENITY_TABS } from "../../data/amenitiesData.js";
import { AmenityTabBar } from "../amenities/AmenityTabBar.jsx";
import { AmenityTabPanels } from "../amenities/AmenityTabPanels.jsx";
import { AmenitiesTabGallery } from "../amenities/AmenitiesTabGallery.jsx";

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(AMENITY_TABS[0].id);

  return (
    <section className="section section--amenities" id="amenities" aria-labelledby="amenities-heading">
      <div className="container">
        <header className="section-header section-header--left amenities-header-reveal">
          <h2 id="amenities-heading" className="heading-serif">
            Amenities
          </h2>
          <p className="section-sub">Explore the joys of the luxe life.</p>
        </header>
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-6">
            <div className="amenities-copy">
              <p key={activeTab} className="text-body amenities-intro-motion">
                {AMENITY_INTRO[activeTab]}
              </p>
              <AmenityTabBar tabs={AMENITY_TABS} activeId={activeTab} onChange={setActiveTab} />
              <AmenityTabPanels tabs={AMENITY_TABS} activeId={activeTab} lists={AMENITY_LISTS} />
            </div>
          </div>
          <div className="col-lg-6">
            <AmenitiesTabGallery key={activeTab} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
