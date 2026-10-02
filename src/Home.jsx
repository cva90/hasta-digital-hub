import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-icon">H</div>

          <div>
            <h2>Hasta</h2>
            <span>Digital Hub</span>
          </div>
        </Link>

        <nav className={menuOpen ? "mobile-menu-open" : ""}>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/meditation"
            onClick={() => setMenuOpen(false)}
          >
            Meditation
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </nav>

        <Link
          to="/contact"
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Link>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <main id="home" className="hero">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <p className="eyebrow">
            DIGITAL • BUSINESS • WELLNESS
          </p>

          <h1>
            Your Digital World,
            <br />
            <span>Made Simple.</span>
          </h1>

          <p className="hero-description">
            Xerox & Digital Services, Professional Website Development,
            Online Payments and Meditation Classes — all under one roof.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="primary-btn">
              Explore Services
            </Link>

            <Link to="/contact" className="outline-btn">
              Contact Us
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>10+</strong>
              <span>Services</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Customers</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="visual-circle"></div>


          {/* MAIN CARD */}

          <div className="visual-card main-card">

            <div className="visual-card-top">
              <span>HASTA</span>
              <span>2026</span>
            </div>

            <div className="visual-logo">
              H
            </div>

            <h3>
              Digital Hub
            </h3>

            <p>
              Digital Services
              <br />
              Web Development
              <br />
              Wellness
            </p>

            <div className="visual-line"></div>

            <span className="visual-status">
              ● All Services Available
            </span>

          </div>


          {/* PRINTING */}

          <Link
            to="/printing"
            className="floating-card card-print"
          >

            <span className="floating-icon">
              🖨️
            </span>

            <div>
              <strong>Printing</strong>
              <small>Digital Services</small>
            </div>

          </Link>


          {/* WEB DEVELOPMENT */}

          <Link
            to="/web-development"
            className="floating-card card-web"
          >

            <span className="floating-icon">
              💻
            </span>

            <div>
              <strong>Web Development</strong>
              <small>Professional Websites</small>
            </div>

          </Link>


          {/* MEDITATION */}

          <Link
            to="/meditation"
            className="floating-card card-meditation"
          >

            <span className="floating-icon">
              🧘
            </span>

            <div>
              <strong>Meditation</strong>
              <small>Wellness Classes</small>
            </div>

          </Link>


          {/* PAYMENT */}

          <Link
            to="/payment"
            className="floating-card card-payment"
          >

            <span className="floating-icon">
              💳
            </span>

            <div>
              <strong>Payment</strong>
              <small>Secure & Easy</small>
            </div>

          </Link>

        </div>

      </main>


      {/* ================= ABOUT PREVIEW ================= */}

      <section className="about">

        <p className="section-tag">
          ABOUT HASTA
        </p>

        <h2>
          One Hub.
          <span> Multiple Solutions.</span>
        </h2>

        <p className="section-text">
          Hasta Digital Hub provides everyday digital services,
          professional web development and wellness experiences
          through one modern platform.
        </p>

        <div style={{ marginTop: "30px" }}>

          <Link to="/about" className="outline-btn">
            Learn About Us →
          </Link>

        </div>

      </section>


      {/* ================= SERVICES PREVIEW ================= */}

      <section className="services">

        <p className="section-tag">
          OUR SERVICES
        </p>

        <h2>
          Everything You Need,
          <span> In One Place.</span>
        </h2>

        <div className="service-grid">

          <Link
            to="/printing"
            className="service-card"
          >

            <div className="service-icon">
              🖨️
            </div>

            <h3>
              Xerox & Printing
            </h3>

            <p>
              B/W and colour printing, photocopy,
              scanning, lamination and binding.
            </p>

            <span>
              View Service →
            </span>

          </Link>


          <Link
            to="/web-development"
            className="service-card"
          >

            <div className="service-icon">
              💻
            </div>

            <h3>
              Website Development
            </h3>

            <p>
              Business websites, portfolios,
              landing pages and e-commerce solutions.
            </p>

            <span>
              View Service →
            </span>

          </Link>


          <Link
            to="/digital-services"
            className="service-card"
          >

            <div className="service-icon">
              📱
            </div>

            <h3>
              Digital Services
            </h3>

            <p>
              Online applications, document services,
              resume and digital assistance.
            </p>

            <span>
              View Service →
            </span>

          </Link>


          <Link
            to="/meditation"
            className="service-card"
          >

            <div className="service-icon">
              🧘
            </div>

            <h3>
              Meditation Classes
            </h3>

            <p>
              Guided meditation, breathing practice
              and online wellness sessions.
            </p>

            <span>
              View Classes →
            </span>

          </Link>

        </div>


        <div style={{ marginTop: "35px" }}>

          <Link
            to="/services"
            className="primary-btn"
          >
            View All Services →
          </Link>

        </div>

      </section>


      {/* ================= MEDITATION PREVIEW ================= */}

      <section className="meditation">

        <div className="meditation-content">

          <p className="section-tag">
            WELLNESS
          </p>

          <h2>
            Find Your
            <br />
            <span>Inner Balance.</span>
          </h2>

          <p>
            Join our meditation classes and build a simple,
            peaceful wellness routine.
          </p>

          <div className="meditation-list">

            <div>✓ Guided Meditation</div>
            <div>✓ Breathing Practice</div>
            <div>✓ Relaxation Sessions</div>
            <div>✓ Online Classes</div>

          </div>

          <Link
            to="/meditation"
            className="primary-btn"
          >
            Join Meditation Class
          </Link>

        </div>

      </section>


      {/* ================= PAYMENT ================= */}

      <section className="payment">

        <div>

          <p className="section-tag">
            ONLINE PAYMENT
          </p>

          <h2>
            Simple.
            <span> Secure.</span>
            <br />
            Fast.
          </h2>

          <p>
            Pay for your selected services and classes
            through our secure online payment system.
          </p>

        </div>

        <Link
          to="/payment"
          className="primary-btn payment-btn"
        >
          💳 Make a Payment
        </Link>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact">

        <p className="section-tag">
          GET IN TOUCH
        </p>

        <h2>
          Let's Build Something
          <span> Great.</span>
        </h2>

        <p>
          Need a website, digital service or meditation class?
          Contact Hasta Digital Hub today.
        </p>

        <div className="contact-buttons">

          <Link
            to="/contact"
            className="primary-btn"
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="outline-btn"
          >
            WhatsApp Us
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <Link
          to="/"
          className="footer-logo"
        >

          <div className="logo-icon">
            H
          </div>

          <div>
            <strong>Hasta</strong>
            <small>Digital Hub</small>
          </div>

        </Link>

        <p>
          © 2026 Hasta Digital Hub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;