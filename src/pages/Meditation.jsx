import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function Meditation() {
  const navigate = useNavigate();
  return (
    <PageLayout
      title="Meditation Classes"
      subtitle="Simple guided practices to help you relax, breathe better and build a peaceful daily routine."
    >

      {/* Introduction */}

      <div className="page-card">
        <p className="section-tag">
          MEDITATION & WELLNESS
        </p>

        <h2>
          Create a Moment of Calm.
        </h2>

        <p>
          Our meditation sessions focus on simple, guided practices
          that can be incorporated into an everyday wellness routine.
        </p>

        <p>
          Sessions are designed to be approachable for beginners as
          well as people who already have a regular meditation practice.
        </p>
      </div>


      {/* Meditation Services */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

       {/* Guided Meditation */}

<div
  className="page-card"
  onClick={() => navigate("/guided-meditation")}
  style={{ cursor: "pointer" }}
>
  <div className="page-icon">🧘</div>

  <h3>
    Guided Meditation
  </h3>

  <p>
    Easy-to-follow guided sessions suitable for beginners
    and regular practitioners.
  </p>
</div>

        {/* Relaxation */}

        <div className="page-card">
          <div className="page-icon">🌿</div>

          <h3>
            Relaxation Practice
          </h3>

          <p>
            Simple relaxation practices designed to help you slow
            down and create a peaceful routine.
          </p>
        </div>


        {/* Breathing */}

        <div className="page-card">
          <div className="page-icon">🌬️</div>

          <h3>
            Breathing Practice
          </h3>

          <p>
            Guided breathing exercises that can be incorporated
            into a daily wellness routine.
          </p>
        </div>


        {/* Online Sessions */}

        <div className="page-card">
          <div className="page-icon">💻</div>

          <h3>
            Online Sessions
          </h3>

          <p>
            Join available meditation sessions online from the
            comfort of your home.
          </p>
        </div>

      </div>


      {/* Practice Approach */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px"
        }}
      >

        <p className="section-tag">
          SIMPLE PRACTICE
        </p>

        <h2>
          Start at Your Own Pace.
        </h2>

        <p>
          Meditation does not have to be complicated. A consistent,
          comfortable routine can begin with simple guided practices
          and gradually develop over time.
        </p>

      </div>


      {/* Contact CTA */}

      <div style={{ marginTop: "40px" }}>

        <h2>
          Start Your Wellness Journey
        </h2>

        <p>
          Contact Hasta Digital Hub to learn about available
          meditation sessions and timings.
        </p>

        <Link
          to="/contact"
          className="page-button"
        >
          Enquire About Classes →
        </Link>

      </div>

    </PageLayout>
  );
}

export default Meditation;