
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const Message = require("./models/Message");
const Payment = require("./models/Payment");

const app = express();

app.use(cors());
app.use(express.json());

// ==================================================
// RAZORPAY
// ==================================================

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ==================================================
// MONGODB CONNECTION
// ==================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// ==================================================
// HOME / TEST ROUTE
// ==================================================

app.get("/", (req, res) => {
  res.json({
    message: "Hasta Digital Hub Backend is running",
  });
});

// ==================================================
// CONTACT MESSAGE API
// ==================================================

app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const newMessage = new Message({
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      message: message.trim(),
    });

    await newMessage.save();

    return res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Message save error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save message",
    });
  }
});

// ==================================================
// CREATE RAZORPAY ORDER
// ==================================================

app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { amount, service, name, mobile, email } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof mobile !== "string" ||
      !mobile.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof service !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "All payment details are required",
      });
    }

    let verifiedAmount;

    // Meditation fee is fixed on the server.
    if (service === "Meditation Classes") {
      verifiedAmount = 299;
    } else if (
      ["Xerox & Printing", "Digital Services", "Other Service"].includes(
        service
      )
    ) {
      const requestedAmount = Number(amount);

      if (
        !Number.isSafeInteger(requestedAmount) ||
        requestedAmount <= 0
      ) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid payment amount",
        });
      }

      verifiedAmount = requestedAmount;
    } else if (service === "Website Development") {
      return res.status(400).json({
        success: false,
        message:
          "Website Development requires an approved quotation before payment.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Unsupported payment service",
      });
    }

    const order = await razorpay.orders.create({
      amount: verifiedAmount * 100,
      currency: "INR",
      receipt: `HDH_${Date.now()}`,
      notes: {
        service,
        customer_name: name.trim(),
        mobile: mobile.trim(),
        email: email.trim(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Razorpay order created successfully",
      order,
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create payment order",
    });
  }
});

// ==================================================
// VERIFY RAZORPAY PAYMENT
// ==================================================

app.post("/api/payment/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      mobile,
      email,
      service,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !name ||
      !mobile ||
      !email ||
      !service
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification details are missing",
      });
    }

    // Retrieve the actual order from Razorpay.
    const order = await razorpay.orders.fetch(razorpay_order_id);

    if (!order || order.status !== "paid") {
      return res.status(400).json({
        success: false,
        message: "Razorpay order is not paid",
      });
    }

    // Verify the payment signature using the server secret.
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const receivedBuffer = Buffer.from(razorpay_signature, "hex");

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Confirm that the payment belongs to this Razorpay order.
    const paymentDetails = await razorpay.payments.fetch(
      razorpay_payment_id
    );

    if (
      paymentDetails.order_id !== razorpay_order_id ||
      paymentDetails.status !== "captured" ||
      paymentDetails.currency !== "INR"
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details could not be confirmed",
      });
    }

    // Check the service and amount against trusted order details.
    const orderService = order.notes?.service;

    if (orderService !== service) {
      return res.status(400).json({
        success: false,
        message: "Payment service does not match the order",
      });
    }

    if (
      service === "Meditation Classes" &&
      order.amount !== 29900
    ) {
      return res.status(400).json({
        success: false,
        message: "Meditation payment amount must be ₹299",
      });
    }

    if (
      service === "Website Development" ||
      ![
        "Meditation Classes",
        "Xerox & Printing",
        "Digital Services",
        "Other Service",
      ].includes(service)
    ) {
      return res.status(400).json({
        success: false,
        message: "Unsupported payment service",
      });
    }

    // Check customer details against the details attached to the order.
    if (
      order.notes?.customer_name !== name.trim() ||
      order.notes?.mobile !== mobile.trim() ||
      order.notes?.email !== email.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Customer details do not match the order",
      });
    }

    // Use the actual verified amount, not an amount supplied by the browser.
    const verifiedAmount = order.amount / 100;

    // Avoid creating duplicate payment records for the same Razorpay payment.
    const existingPayment = await Payment.findOne({
      razorpayPaymentId: razorpay_payment_id,
    });

    if (existingPayment) {
      return res.status(200).json({
        success: true,
        message: "Payment has already been verified",
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id,
      });
    }

    const newPayment = new Payment({
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      service,
      amount: verifiedAmount,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      status: "Paid",
    });

    await newPayment.save();

    console.log("Payment saved to MongoDB:", newPayment._id);

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment",
    });
  }
});

// ==================================================
// START SERVER
// ==================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
