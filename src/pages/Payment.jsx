
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageLayout from "./PageLayout";

function Payment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service");

  const isMeditation = selectedService === "meditation";
  const isWebsiteDevelopment =
    selectedService === "website-development";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: isMeditation
      ? "Meditation Classes"
      : isWebsiteDevelopment
        ? "Website Development"
        : "",
    amount: isMeditation ? "299" : "",
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

    if (isWebsiteDevelopment) {
      navigate("/contact?service=website-development");
      return;
    }

    if (
      isMeditation &&
      Number(formData.amount) !== 299
    ) {
      alert("Meditation session fee is fixed at ₹299.");
      return;
    }

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      alert(
        "Razorpay configuration is missing. Please contact Hasta Digital Hub."
      );
      return;
    }

    try {
      setLoading(true);

      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        alert("Razorpay payment gateway could not be loaded.");
        setLoading(false);
        return;
      }

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

        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await fetch(
              "https://hasta-digital-hub.onrender.com/api/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,
                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,
                  razorpay_signature:
                    paymentResponse.razorpay_signature,
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
                  paymentResponse.razorpay_payment_id
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
              "Payment was completed, but verification could not be completed. Please contact Hasta Digital Hub."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (failureResponse) {
        console.error(
          "Razorpay payment failed:",
          failureResponse.error
        );

        alert("Payment failed. Please try again.");
        setLoading(false);
      });

      razorpay.open();
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
      <div className="page-card">
        <p className="section-tag">ONLINE PAYMENT</p>

        <h2>
          {isMeditation
            ? "Book Your Meditation Session."
            : isWebsiteDevelopment
              ? "Website Development Enquiry."
              : "Make a Secure Payment."}
        </h2>

        <p>
          {isMeditation
            ? "Complete your details to book a meditation session for ₹299."
            : isWebsiteDevelopment
              ? "Share your details and contact us to discuss your website requirements and receive a quotation."
              : "Please confirm your service details and payment amount before proceeding."}
        </p>
      </div>

      <div
        className="page-card"
        style={{
          maxWidth: "700px",
          margin: "40px auto 0",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isMeditation || isWebsiteDevelopment}
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
              <option value="Other Service">Other Service</option>
            </select>
          </div>

          {isWebsiteDevelopment ? (
            <div className="page-card">
              <h3>Project quotation</h3>

              <p>
                The project price will be confirmed after discussing
                your requirements. No payment is requested at this
                stage.
              </p>

              <button
                type="button"
                className="page-button"
                onClick={() =>
                  navigate("/contact?service=website-development")
                }
              >
                Contact Us for a Quote →
              </button>
            </div>
          ) : (
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
                step="1"
                required
                readOnly={isMeditation}
              />

              {isMeditation && (
                <small>
                  Fixed fee: ₹299 per meditation session.
                </small>
              )}
            </div>
          )}

          {!isWebsiteDevelopment && (
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
          )}
        </form>

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
