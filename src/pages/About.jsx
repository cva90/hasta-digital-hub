import PageLayout from "./PageLayout";

function About() {
  return (
    <PageLayout
      title="About Hasta Digital Hub"
      subtitle="Digital services, technology solutions and wellness experiences — brought together in one place."
    >

      {/* Introduction */}

      <div className="page-card">
        <p className="section-tag">
          WHO WE ARE
        </p>

        <h2>
          One Hub. Multiple Digital Solutions.
        </h2>

        <p>
          Hasta Digital Hub is a technology and digital services platform
          created to make everyday digital needs simple, accessible and
          convenient.
        </p>

        <p>
          From printing and digital assistance to professional website
          development, online payment support and meditation classes,
          we bring useful services together under one roof.
        </p>
      </div>


      {/* Our Focus */}

      <h2 style={{ marginTop: "50px" }}>
        What We Focus On
      </h2>

      <div className="page-card-grid">

        <div className="page-card">
          <div className="page-icon">🖨️</div>

          <h3>
            Digital Services
          </h3>

          <p>
            Xerox, printing, scanning, lamination, binding and
            practical digital assistance for everyday needs.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">💻</div>

          <h3>
            Website Development
          </h3>

          <p>
            Professional business websites, portfolios, landing pages
            and e-commerce solutions designed for the modern web.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">💳</div>

          <h3>
            Online Payments
          </h3>

          <p>
            Digital payment assistance designed to make online
            transactions easier and more convenient.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">🧘</div>

          <h3>
            Meditation & Wellness
          </h3>

          <p>
            Meditation classes and simple wellness practices that
            encourage calmness, awareness and balance.
          </p>
        </div>

      </div>


      {/* Our Approach */}

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
          Simple. Practical. Digital.
        </h2>

        <p>
          We believe technology should make life easier, not more
          complicated. Our goal is to provide practical digital
          solutions that individuals, students, professionals and
          businesses can understand and use comfortably.
        </p>

        <p>
          Whether you need a simple printing service or a complete
          website for your business, Hasta Digital Hub brings
          technology and human support together.
        </p>

      </div>


      {/* Why Hasta Digital Hub */}

      <h2 style={{ marginTop: "50px" }}>
        Why Hasta Digital Hub?
      </h2>

      <div className="page-card-grid">

        <div className="page-card">
          <div className="page-icon">⚡</div>

          <h3>
            Convenient
          </h3>

          <p>
            Multiple useful digital services available from one place.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">🎯</div>

          <h3>
            Practical
          </h3>

          <p>
            Solutions focused on real everyday and business needs.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">🤝</div>

          <h3>
            Support
          </h3>

          <p>
            Friendly assistance to help you choose the right service.
          </p>
        </div>

      </div>

    </PageLayout>
  );
}

export default About;