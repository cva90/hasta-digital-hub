import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function Services() {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Explore practical digital, technology and wellness services available from Hasta Digital Hub."
    >

      {/* Services Introduction */}

      <div className="page-card">
        <p className="section-tag">
          WHAT WE OFFER
        </p>

        <h2>
          Everything You Need, Under One Roof.
        </h2>

        <p>
          From everyday digital assistance to professional website
          development and meditation classes, Hasta Digital Hub brings
          useful services together in one convenient place.
        </p>
      </div>


      {/* Main Services */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

        {/* Xerox */}

        <div className="page-card">
          <div className="page-icon">🖨️</div>

          <h3>
            Xerox & Printing
          </h3>

          <p>
            Black & white and colour printing, Xerox, scanning,
            lamination and binding services for everyday needs.
          </p>

          <Link
            to="/printing"
            className="page-button"
          >
            View Printing Services →
          </Link>
        </div>


        {/* Website Development */}

        <div className="page-card">
          <div className="page-icon">💻</div>

          <h3>
            Website Development
          </h3>

          <p>
            Professional business websites, portfolios, landing pages
            and e-commerce websites built for your digital presence.
          </p>

          <Link
            to="/web-development"
            className="page-button"
          >
            Explore Web Development →
          </Link>
        </div>


        {/* Digital Services */}

        <div className="page-card">
          <div className="page-icon">📱</div>

          <h3>
            Digital Services
          </h3>

          <p>
            Online applications, document services, resume preparation
            and other practical digital assistance.
          </p>

          <Link
            to="/digital-services"
            className="page-button"
          >
            View Digital Services →
          </Link>
        </div>


        {/* Meditation */}

        <div className="page-card">
          <div className="page-icon">🧘</div>

          <h3>
            Meditation Classes
          </h3>

          <p>
            Guided meditation, breathing practices and wellness
            sessions designed to support a calm and focused routine.
          </p>

          <Link
            to="/meditation"
            className="page-button"
          >
            Explore Meditation →
          </Link>
        </div>


        {/* Payment */}

        <div className="page-card">
          <div className="page-icon">💳</div>

          <h3>
            Online Payment
          </h3>

          <p>
            Convenient online payment options for selected services
            and classes.
          </p>

          <Link
            to="/payment"
            className="page-button"
          >
            Make a Payment →
          </Link>
        </div>

      </div>


      {/* Why Choose Our Services */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px"
        }}
      >

        <p className="section-tag">
          OUR APPROACH
        </p>

        <h2>
          Simple Digital Solutions.
        </h2>

        <p>
          We focus on making technology and digital services easier
          to understand and use. Whether you need a quick printing
          service or a complete website, our goal is to provide a
          practical solution for your needs.
        </p>

      </div>

    </PageLayout>
  );
}

export default Services;