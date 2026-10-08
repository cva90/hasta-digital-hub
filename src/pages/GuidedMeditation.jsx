import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function GuidedMeditation() {
  return (
    <PageLayout
      title="Guided Meditation"
      subtitle="Simple, calming meditation sessions designed for beginners and regular practitioners."
    >

      {/* Hero Image */}

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto 40px",
          borderRadius: "20px",
          overflow: "hidden"
        }}
      >
        <img
          src="/hasta-digital-hub/meditation.jpg"
          alt="Guided Meditation"
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>


      {/* Introduction */}

      <div className="page-card">

        <p className="section-tag">
          GUIDED MEDITATION
        </p>

        <h2>
          Create a Peaceful Moment.
        </h2>

        <p>
          Guided meditation provides a simple way to slow down,
          focus on your breathing and create a calm space in your
          daily routine.
        </p>

        <p>
          Each session is guided step-by-step, making the practice
          approachable for beginners while also being useful for
          people with previous meditation experience.
        </p>

      </div>


      {/* Benefits */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

        <div className="page-card">
          <div className="page-icon">🌿</div>

          <h3>
            Relaxation
          </h3>

          <p>
            Gentle guided practices designed to help you slow down
            and create a peaceful routine.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">🌬️</div>

          <h3>
            Breathing Awareness
          </h3>

          <p>
            Learn simple breathing awareness techniques as part
            of your meditation practice.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">🧘</div>

          <h3>
            Mindful Practice
          </h3>

          <p>
            Develop a simple habit of being present and attentive
            during your daily routine.
          </p>
        </div>


        <div className="page-card">
          <div className="page-icon">⏱️</div>

          <h3>
            Flexible Sessions
          </h3>

          <p>
            Sessions can be adapted to different schedules and
            experience levels.
          </p>
        </div>

      </div>


      {/* Session Details */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "900px"
        }}
      >

        <p className="section-tag">
          SESSION DETAILS
        </p>

        <h2>
          What You Can Expect
        </h2>

        <p>
          A guided session may include comfortable breathing,
          relaxation, gentle attention practices and a short period
          of quiet reflection.
        </p>

        <ul style={{ lineHeight: "2" }}>
          <li>🧘 Suitable for beginners</li>
          <li>🌿 Calm and simple guided practice</li>
          <li>🌬️ Breathing awareness</li>
          <li>⏱️ Flexible session duration</li>
          <li>💻 Online session options may be available</li>
        </ul>

      </div>


      {/* CTA */}

      <div style={{ marginTop: "40px" }}>

        <h2>
          Interested in Guided Meditation?
        </h2>

        <p>
          Contact Hasta Digital Hub to learn more about available
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

export default GuidedMeditation;