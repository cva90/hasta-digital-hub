
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";

function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Website Development"
      subtitle="Modern, responsive websites designed for businesses, professionals and personal brands."
    >
      {/* Introduction */}
      <div className="page-card">
        <p className="section-tag">WEB DEVELOPMENT</p>

        <h2>Build Your Digital Presence.</h2>

        <p>
          We create modern, responsive websites designed to help
          businesses, professionals and personal brands establish
          a strong presence online.
        </p>
      </div>

      {/* Website Services */}
      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >
        <div className="page-card">
          <div className="page-icon">🏢</div>
          <h3>Business Website</h3>
          <p>
            Professional websites to showcase your business,
            services, contact information and online presence.
          </p>
        </div>

        <div className="page-card">
          <div className="page-icon">👤</div>
          <h3>Portfolio Website</h3>
          <p>
            Modern portfolio websites for developers, designers,
            freelancers and other professionals.
          </p>
        </div>

        <div className="page-card">
          <div className="page-icon">🛒</div>
          <h3>E-Commerce Website</h3>
          <p>
            Online stores with product displays, shopping cart,
            checkout, orders and payment integration.
          </p>
        </div>

        <div className="page-card">
          <div className="page-icon">🚀</div>
          <h3>Landing Page</h3>
          <p>
            Focused landing pages for businesses, products,
            services, campaigns and special offers.
          </p>
        </div>

        <div className="page-card">
          <div className="page-icon">🔧</div>
          <h3>Website Maintenance</h3>
          <p>
            Website updates, improvements, bug fixes and ongoing
            technical support.
          </p>
        </div>
      </div>

      {/* Features */}
      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px",
        }}
      >
        <p className="section-tag">OUR APPROACH</p>

        <h2>Designed for the Modern Web.</h2>

        <p>
          Our websites are built with responsive layouts so they
          can work across desktop, laptop, tablet and mobile devices.
        </p>

        <p>
          We focus on clean design, clear navigation and practical
          features that help visitors understand your business
          and services.
        </p>
      </div>

      {/* Website Order / Quotation CTA */}
      <div
        className="page-card"
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <p className="section-tag">START YOUR PROJECT</p>

        <h2>Ready to Build Your Website?</h2>

        <p>
          Tell us about your website requirements. We will discuss
          your needs and provide a custom quotation before payment.
        </p>

        <button
          type="button"
          className="page-button"
          onClick={() =>
            navigate("/payment?service=website-development")
          }
        >
          Order a Website →
        </button>

        <p style={{ marginTop: "16px" }}>
          Prefer to contact us first?
        </p>

        <Link to="/contact" className="page-button">
          Contact Us →
        </Link>
      </div>
    </PageLayout>
  );
}

export default WebDevelopment;
