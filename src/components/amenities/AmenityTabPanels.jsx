export function AmenityTabPanels({ tabs, activeId, lists }) {
  const activeTab = tabs.find((t) => t.id === activeId);
  const cols = activeTab?.listColumns ?? 2;
  const items = lists[activeId] ?? [];
  const listClass =
    cols === 3
      ? "amenity-grid-list amenity-grid-list--numbered amenity-grid-list--3"
      : "amenity-grid-list amenity-grid-list--numbered";

  return (
    <div className="amenities-tab-panels">
      <div
        key={activeId}
        className="amenities-panel-motion"
        role="tabpanel"
        id={`panel-${activeId}`}
        aria-labelledby={`tab-${activeId}`}
      >
        <ol className={listClass}>
          {items.map((item, index) => (
            <li key={item} className="amenity-stagger-item" style={{ "--stagger": index }}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
