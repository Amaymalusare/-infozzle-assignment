export function AmenityTabBar({ tabs, activeId, onChange }) {
  return (
    <nav
      className="nav nav-pills amenities-nav-pills flex-wrap gap-2 my-3"
      role="tablist"
      aria-label="Amenity categories"
    >
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`nav-link rounded-pill px-3 py-2${activeId === id ? " active" : ""}`}
          role="tab"
          aria-selected={activeId === id}
          id={`tab-${id}`}
          aria-controls={`panel-${id}`}
          onClick={() => onChange(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
