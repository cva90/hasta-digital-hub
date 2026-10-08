import { useState } from "react";
import PageLayout from "./PageLayout";

function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Load Razorpay Checkout
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        alert("Razorpay payment gateway could not be loaded.");
        setLoading(false);
        return;
      }

      // Create Razorpay order
      const response = await fetch(
        "https://hasta-digital-hub.onrender.com/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            service: formData.service,
            amount: formData.amount,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.message || "Unable to create payment order.");
        setLoading(false);
        return;
      }

      // Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "Hasta Digital Hub",

        description: formData.service,

        order_id: data.order.id,

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },

        theme: {
          color: "#ff0000",
        },

        // Verify payment on backend
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(
              "https://hasta-digital-hub.onrender.com/api/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,

                  name: formData.name,
                  mobile: formData.mobile,
                  email: formData.email,
                  service: formData.service,
                  amount: formData.amount,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              alert(
                "Payment verified successfully! ✅\n\nPayment ID: " +
                  response.razorpay_payment_id
              );
            } else {
              alert(
                "Payment verification failed ❌\n\n" +
                  (verifyData.message ||
                    "Please contact Hasta Digital Hub.")
              );
            }
          } catch (error) {
            console.error("Payment verification error:", error);

            alert(
              "Payment was completed, but verification could not be completed."
            );
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

      setLoading(false);
    } catch (error) {
      console.error("Payment error:", error);

      alert("Something went wrong while starting the payment.");

      setLoading(false);
    }
  };

  return (
    <PageLayout
      title="Online Payment"
      subtitle="Simple, secure and convenient payments for selected Hasta Digital Hub services."
    >
      {/* ================= PAYMENT INTRO ================= */}

      <div className="page-card">
        <p className="section-tag">ONLINE PAYMENT</p>

        <h2>Make a Secure Payment.</h2>

        <p>
          Use this payment form to pay for eligible Hasta Digital Hub
          services and classes.
        </p>

        <p>
          Please confirm your service details and payment amount before
          proceeding.
        </p>
      </div>

      {/* ================= PAYMENT FORM ================= */}

      <div
        className="page-card"
        style={{
          maxWidth: "700px",
          margin: "40px auto 0",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* NAME */}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* MOBILE */}

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>

            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* EMAIL */}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* SERVICE */}

          <div className="form-group">
            <label htmlFor="service">Select Service</label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>

              <option value="Xerox & Printing">
                Xerox & Printing
              </option>

              <option value="Website Development">
                Website Development
              </option>

              <option value="Digital Services">
                Digital Services
              </option>

              <option value="Meditation Classes">
                Meditation Classes
              </option>

              <option value="Other Service">
                Other Service
              </option>
            </select>
          </div>

          {/* AMOUNT */}

          <div className="form-group">
            <label htmlFor="amount">Payment Amount (₹)</label>

            <input
              id="amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>

          {/* PAYMENT BUTTON */}

          <button
            type="submit"
            className="primary-btn payment-btn"
            disabled={loading}
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            {loading ? "⏳ Processing..." : "💳 Pay Now"}
          </button>
        </form>

        {/* SECURITY NOTE */}

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          <p>🔒 Secure Online Payment</p>

          <small>
            Payments are securely processed through Razorpay.
          </small>
        </div>
      </div>
    </PageLayout>
  );
}

export default Payment;