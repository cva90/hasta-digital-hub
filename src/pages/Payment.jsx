import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

function Payment() {
  return (
    <PageLayout
      title="Online Payment"
      subtitle="Simple and convenient payment options for selected Hasta Digital Hub services and classes."
    >

      {/* Introduction */}

      <div className="page-card">
        <p className="section-tag">
          ONLINE PAYMENT
        </p>

        <h2>
          Simple & Convenient Payments.
        </h2>

        <p>
          Hasta Digital Hub supports convenient digital payment
          options for eligible services and classes.
        </p>

        <p>
          Payment details can be provided after confirming the
          service or class you require.
        </p>
      </div>


      {/* Payment Features */}

      <div
        className="page-card-grid"
        style={{ marginTop: "40px" }}
      >

        {/* Secure */}

        <div className="page-card">
          <div className="page-icon">💳</div>

          <h3>
            Secure Payment
          </h3>

          <p>
            Payment details are shared through the appropriate
            payment method for the selected service.
          </p>
        </div>


        {/* Quick */}

        <div className="page-card">
          <div className="page-icon">⚡</div>

          <h3>
            Quick & Easy
          </h3>

          <p>
            Complete eligible payments conveniently without
            unnecessary steps.
          </p>
        </div>


        {/* UPI */}

        <div className="page-card">
          <div className="page-icon">📱</div>

          <h3>
            UPI Payment
          </h3>

          <p>
            Convenient UPI payment options may be available
            for eligible services.
          </p>
        </div>

      </div>


      {/* Payment Process */}

      <div
        className="page-card"
        style={{
          marginTop: "50px",
          maxWidth: "800px"
        }}
      >

        <p className="section-tag">
          HOW IT WORKS
        </p>

        <h2>
          Payment Process
        </h2>

        <p>
          <strong>1.</strong> Choose the service you need.
        </p>

        <p>
          <strong>2.</strong> Contact Hasta Digital Hub and confirm
          the service details.
        </p>

        <p>
          <strong>3.</strong> Receive the applicable payment details.
        </p>

        <p>
          <strong>4.</strong> Complete the payment using the
          available payment method.
        </p>

      </div>


      {/* Payment CTA */}

      <div style={{ marginTop: "40px" }}>

        <h2>
          Ready to Make a Payment?
        </h2>

        <p>
          Contact us first to confirm the service and payment details.
        </p>

        <Link
          to="/contact"
          className="page-button"
        >
          Contact for Payment →
        </Link>

      </div>

    </PageLayout>
  );
}

export default Payment;