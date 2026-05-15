export function IntroSection() {
  return (
    <section className="section section--intro py-5" aria-labelledby="intro-heading">
      <div className="container container--narrow">
        <div className="card border-0 shadow rounded-4 bg-white">
          <div className="card-body p-4 p-md-5 text-center">
            <h2 id="intro-heading" className="heading-serif heading-serif--center mb-3">
              An Ode to the Artistry of Life
            </h2>
            <p className="text-body text-body--center mb-4">
              Thoughtfully planned residences where light, landscape, and luxury meet—crafted for
              families who value space, serenity, and a refined everyday rhythm.
            </p>
            <a className="btn btn-outline-dark rounded-pill px-4" href="#amenities">
              Make yourself at home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
