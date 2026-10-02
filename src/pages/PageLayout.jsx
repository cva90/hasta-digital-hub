import { Link } from "react-router-dom";
import { useState } from "react";

function PageLayout({ title, subtitle, children }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="inner-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar inner-navbar">

        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-icon">
            H
          </div>

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


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>


      {/* ================= PAGE HERO ================= */}

      <section className="page-hero">

        <p className="section-tag">
          HASTA DIGITAL HUB
        </p>

        <h1>
          {title}
        </h1>

        <p className="page-subtitle">
          {subtitle}
        </p>

      </section>


      {/* ================= PAGE CONTENT ================= */}

      <main className="page-content">
        {children}
      </main>


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
            <strong>
              Hasta
            </strong>

            <small>
              Digital Hub
            </small>
          </div>

        </Link>


        <p>
          © 2026 Hasta Digital Hub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default PageLayout;