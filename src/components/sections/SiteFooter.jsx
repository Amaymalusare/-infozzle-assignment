export function SiteFooter() {
  return (
    <footer className="footer" id="location">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">Assetz</p>
            <p className="footer__sublogo">miru &amp; miyo</p>
            <a className="btn btn-outline-light rounded-pill px-4 btn-sm" href="#">
              Download the brochure
            </a>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#master-plan">Master Plan</a>
              </li>
              <li>
                <a href="#floor">Floor Plans</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#amenities">Amenities</a>
              </li>
              <li>
                <a href="#specifications">Specifications</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__contact">
          <div>
            <span className="footer__icon" aria-hidden="true">
              ⌖
            </span>
            <div>
              <p className="footer__label">Site address</p>
              <p>Assetz Miru &amp; Miyo, Sarjapur Road, Bengaluru</p>
            </div>
          </div>
          <div>
            <span className="footer__icon" aria-hidden="true">
              ⌖
            </span>
            <div>
              <p className="footer__label">Corporate address</p>
              <p>Assetz Property Group, Bengaluru</p>
            </div>
          </div>
          <div>
            <span className="footer__icon" aria-hidden="true">
              ☎
            </span>
            <div>
              <p className="footer__label">Contact us</p>
              <p>
                <a href="tel:+919999999999">+91 99999 99999</a>
              </p>
              <p>
                <a href="mailto:hello@assetz.com">hello@assetz.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="social d-flex gap-2 justify-content-center flex-wrap" aria-label="Social links">
            <a className="btn btn-outline-light btn-sm rounded-circle footer-social-link" href="#" aria-label="Facebook">
              f
            </a>
            <a className="btn btn-outline-light btn-sm rounded-circle footer-social-link" href="#" aria-label="Instagram">
              in
            </a>
            <a className="btn btn-outline-light btn-sm rounded-circle footer-social-link" href="#" aria-label="YouTube">
              ▶
            </a>
            <a className="btn btn-outline-light btn-sm rounded-circle footer-social-link" href="#" aria-label="LinkedIn">
              Li
            </a>
          </div>
          <p className="footer__legal">
            RERA registration details to be updated as per project approval. Images are artistic
            impressions. Specifications subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
