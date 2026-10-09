
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageLayout from "./PageLayout";

function Contact() {
  const [searchParams] = useSearchParams();

  const isWebsiteEnquiry =
    searchParams.get("service") === "website-development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: isWebsiteEnquiry
      ? "Website Development Quotation Request\n\nWebsite type: \nProject requirements: \nPreferred budget: \nExpected completion date: "
      : "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://hasta-digital-hub.onrender.com/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus(
          "Message sent successfully! ✅ We will contact you about your enquiry."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Unable to connect to server ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout
      title="Contact Hasta Digital Hub"
      subtitle="Have a question, need a digital service or want to start a website project? Get in touch with us."
    >
      {/* Contact Information */}
      <div className="page-card-grid">
        <div className="page-card">
          <div className="page-icon">📞</div>
          <h3>Call Us</h3>
          <p>
            Contact us directly for service enquiries,
            website projects and other assistance.
          </p>
          <a href="tel:+919342438683" className="page-button">
            Call Now →
          </a>
        </div>

        <div className="page-card">
          <div className="page-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>
            Send us a message on WhatsApp and tell us
            what service you need.
          </p>
          <a
            href="https://wa.me/919342438683"
            target="_blank"
            rel="noreferrer"
            className="page-button"
          >
            WhatsApp Us →
          </a>
        </div>

        <div className="page-card">
          <div className="page-icon">📍</div>
          <h3>Our Location</h3>
          <p>Tenkasi, Tamil Nadu</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tenkasi%2C%20Tamil%20Nadu"
            target="_blank"
            rel="noreferrer"
            className="page-button"
          >
            View Location →
          </a>
        </div>

        <div className="page-card">
          <div className="page-icon">🌐</div>
          <h3>Website Services</h3>
          <p>
            Need a business website, portfolio or
            e-commerce website? Let's discuss your project.
          </p>
          <Link to="/web-development" className="page-button">
            View Web Services →
          </Link>
        </div>
      </div>

      {/* Contact / Quotation Form */}
      <div
        className="page-card"
        style={{
          marginTop: "40px",
          maxWidth: "800px",
        }}
      >
        <p className="section-tag">
          {isWebsiteEnquiry ? "PROJECT QUOTATION" : "SEND A MESSAGE"}
        </p>

        <h2>
          {isWebsiteEnquiry
            ? "Tell Us About Your Website."
            : "Let's Build Something Great."}
        </h2>

        <p>
          {isWebsiteEnquiry
            ? "Share your website type and project requirements. We will review your details and contact you with a custom quotation before payment."
            : "Tell us what you need and we will help you choose the right service."}
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="phone">Mobile Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />

          <label htmlFor="message">Project Details / Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            required
          />

          <button
            type="submit"
            className="page-button"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : isWebsiteEnquiry
                ? "Request a Quotation →"
                : "Send Message →"}
          </button>

          {status && (
            <p role="status" style={{ marginTop: "10px" }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </PageLayout>
  );
}

export default Contact;
