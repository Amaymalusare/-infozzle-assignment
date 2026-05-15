import { useState } from "react";
import { LEGEND_ENTRIES, MASTER_PLAN_IMAGE } from "../../data/masterPlanData.js";
import { MasterPlanLegend } from "../masterPlan/MasterPlanLegend.jsx";
import { MasterPlanMap } from "../masterPlan/MasterPlanMap.jsx";

export function MasterPlanSection() {
  const [activeZone, setActiveZone] = useState(null);

  return (
    <section className="section section--master" id="master-plan" aria-labelledby="master-heading">
      <div className="container">
        <header className="section-header section-header--left">
          <h2 id="master-heading" className="heading-serif">
            Master Plan
          </h2>
          <p className="section-sub">The blueprint to your artful life.</p>
        </header>
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-8">
            <MasterPlanMap
              imageSrc={MASTER_PLAN_IMAGE}
              imageAlt="Illustrative master plan layout"
              entries={LEGEND_ENTRIES}
              activeZone={activeZone}
            />
          </div>
          <div className="col-lg-4">
            <MasterPlanLegend
              entries={LEGEND_ENTRIES}
              activeZone={activeZone}
              onActiveZoneChange={setActiveZone}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
