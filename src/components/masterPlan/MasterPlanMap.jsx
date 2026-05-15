export function MasterPlanMap({ imageSrc, imageAlt, entries, activeZone }) {
  return (
    <div className="master-map card border-0 shadow rounded-4 overflow-hidden" id="master-map">
      <img className="master-map__img" src={imageSrc} alt={imageAlt} width={1600} height={900} />
      <div className="master-map__hotspots" aria-hidden="true">
        {entries.map(({ zone, left, top }) => (
          <span
            key={zone}
            className={`hotspot${activeZone === zone ? " is-active" : ""}`}
            data-zone={zone}
            style={{ left, top }}
          />
        ))}
      </div>
    </div>
  );
}
