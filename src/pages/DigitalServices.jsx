import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function DigitalServices() {
  return (
    <PageLayout
      title="Digital Services"
      subtitle="Convenient digital assistance for documents, applications and everyday online needs."
    >

      {/* Introduction */}

      <div className="page-card">
        <p className="section-tag">
          DIGITAL ASSISTANCE
        </p>

        <h2>
          Everyday Digital Tasks, Made Easier.
        </h2>

        <p>
          We provide practical assistance with common online and
          digital tasks, helping individuals, students and businesses
          handle documents and online services more conveniently.
        </p>
      </div>


      {/* Services */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

        {/* Online Applications */}

        <div className="page-card">
          <div className="page-icon">📝</div>

          <h3>
            Online Applications
          </h3>

          <p>
            Assistance with online applications, digital forms and
            form submission for selected services.
          </p>
        </div>


        {/* Resume */}

        <div className="page-card">
          <div className="page-icon">📄</div>

          <h3>
            Resume Services
          </h3>

          <p>
            Resume preparation, formatting and document support
            for students, job seekers and professionals.
          </p>
        </div>


        {/* Documents */}

        <div className="page-card">
          <div className="page-icon">💻</div>

          <h3>
            Document Services
          </h3>

          <p>
            Digital document preparation, file conversion,
            printing, scanning and related assistance.
          </p>
        </div>


        {/* Online Assistance */}

        <div className="page-card">
          <div className="page-icon">🌐</div>

          <h3>
            Online Assistance
          </h3>

          <p>
            Support with everyday online tasks and digital
            services that require practical assistance.
          </p>
        </div>

      </div>


      {/* Who We Help */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px"
        }}
      >

        <p className="section-tag">
          PRACTICAL SUPPORT
        </p>

        <h2>
          Support When You Need It.
        </h2>

        <p>
          Whether you are a student preparing documents, a job seeker
          creating a resume or someone who needs help with an online
          task, Hasta Digital Hub provides convenient digital assistance.
        </p>

      </div>


      {/* Contact CTA */}

      <div style={{ marginTop: "35px" }}>
        <Link
          to="/contact"
          className="page-button"
        >
          Enquire About a Service →
        </Link>
      </div>

    </PageLayout>
  );
}

export default DigitalServices;