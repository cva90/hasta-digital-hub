const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Message = require("./models/Message");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
  });

// Home / Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Hasta Digital Hub Backend is running 🚀"
  });
});

// Contact Message API
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      message
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully ✅",
      data: newMessage
    });
  } catch (error) {
    console.error("Message save error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save message"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});