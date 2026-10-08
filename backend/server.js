
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
    console.error("MongoDB connection failed");
    console.error(error.message);
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

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Message save error:", error);

    res.status(500).json({
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

    if (!amount || !service || !name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: "All payment details are required",
      });
    }

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment amount",
      });
    }

    const options = {
      amount: Math.round(numericAmount * 100),
      currency: "INR",
      receipt: `HDH_${Date.now()}`,
      notes: {
        service: service,
        customer_name: name,
        mobile: mobile,
        email: email,
      },
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      message: "Razorpay order created successfully",
      order: order,
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);

    res.status(500).json({
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
  amount,
} = req.body;


    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification details are missing",
      });
    }

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }
    
const newPayment = new Payment({
  name,
  mobile,
  email,
  service,
  amount: Number(amount),
  razorpayOrderId: razorpay_order_id,
  razorpayPaymentId: razorpay_payment_id,
  status: "Paid",
});

await newPayment.save();
console.log("Payment saved to MongoDB:", newPayment._id);


    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    res.status(500).json({
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
  console.log(`Server running on http://localhost:${PORT}`);
});
