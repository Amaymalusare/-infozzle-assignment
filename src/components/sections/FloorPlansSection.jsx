export function FloorPlansSection() {
  return (
    <section className="section section--floor py-5" id="floor" aria-labelledby="floor-heading">
      <div className="container">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4 p-md-5">
            <header className="section-header section-header--left mb-0">
              <h2 id="floor-heading" className="heading-serif">
                Floor Plans
              </h2>
              <p className="section-sub">Layouts designed for light, airflow, and everyday ease.</p>
            </header>
            <p className="text-body mb-0 mt-3" style={{ maxWidth: "640px" }}>
              Add your exported floor-plan thumbnails or PDFs here to match the Figma frame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
