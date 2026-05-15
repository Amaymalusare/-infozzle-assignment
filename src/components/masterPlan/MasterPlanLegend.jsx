export function MasterPlanLegend({ entries, activeZone, onActiveZoneChange }) {
  const clearIfLeavingLegend = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onActiveZoneChange(null);
    }
  };

  return (
    <aside
      className="master-legend card border-0 shadow-sm rounded-4 h-100"
      aria-label="Master plan legend"
      onMouseLeave={() => onActiveZoneChange(null)}
      onBlur={clearIfLeavingLegend}
    >
      <ol className="legend-list card-body">
        {entries.map(({ zone, label }) => (
          <li key={zone}>
            <button
              type="button"
              className={`legend-item${activeZone === zone ? " is-active" : ""}`}
              data-zone={zone}
              aria-current={activeZone === zone ? "true" : undefined}
              onMouseEnter={() => onActiveZoneChange(zone)}
              onFocus={() => onActiveZoneChange(zone)}
            >
              {label}
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}
