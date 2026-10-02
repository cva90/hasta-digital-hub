import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function Printing() {
  return (
    <PageLayout
      title="Xerox & Printing Services"
      subtitle="Fast, reliable and convenient printing and document services for students, individuals and businesses."
    >

      {/* Introduction */}

      <div className="page-card">
        <p className="section-tag">
          PRINTING & DOCUMENT SERVICES
        </p>

        <h2>
          Your Everyday Document Needs, Made Simple.
        </h2>

        <p>
          From photocopying and printing to scanning, lamination and
          binding, Hasta Digital Hub provides practical document
          services for everyday and professional needs.
        </p>
      </div>


      {/* Services */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

        {/* B&W Xerox */}

        <div className="page-card">
          <div className="page-icon">📄</div>

          <h3>
            Black & White Xerox
          </h3>

          <p>
            Clear and affordable black & white photocopy services
            for documents, notes, forms and study materials.
          </p>
        </div>


        {/* Colour Printing */}

        <div className="page-card">
          <div className="page-icon">🌈</div>

          <h3>
            Colour Printing
          </h3>

          <p>
            Quality colour printing for projects, presentations,
            documents, certificates and business materials.
          </p>
        </div>


        {/* Scanning */}

        <div className="page-card">
          <div className="page-icon">📑</div>

          <h3>
            Document Scanning
          </h3>

          <p>
            Convert important paper documents into digital files
            for easy storage and sharing.
          </p>
        </div>


        {/* Lamination */}

        <div className="page-card">
          <div className="page-icon">🪪</div>

          <h3>
            Lamination
          </h3>

          <p>
            Protect certificates, documents, cards and important
            papers with durable lamination.
          </p>
        </div>


        {/* Binding */}

        <div className="page-card">
          <div className="page-icon">📚</div>

          <h3>
            Spiral Binding
          </h3>

          <p>
            Neat and professional binding for projects, reports,
            assignments and other documents.
          </p>
        </div>

      </div>


      {/* Suitable For */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px"
        }}
      >

        <p className="section-tag">
          WHO CAN USE OUR SERVICES?
        </p>

        <h2>
          For Students, Individuals & Businesses.
        </h2>

        <p>
          Whether you need copies of study materials, printed
          documents for your business, scanned files or a neatly
          bound project, our printing services are designed for
          everyday convenience.
        </p>

      </div>


      {/* Contact CTA */}

      <div
        style={{
          marginTop: "35px"
        }}
      >
        <Link
          to="/contact"
          className="page-button"
        >
          Contact Us for Printing →
        </Link>
      </div>

    </PageLayout>
  );
}

export default Printing;