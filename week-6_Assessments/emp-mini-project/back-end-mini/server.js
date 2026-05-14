import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { employeeRoutes } from "./APIs/employeeAPI.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://24-eg-109-a56.vercel.app"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/employee-api", employeeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend API Running Successfully 🚀");
});

// Port
const PORT = process.env.PORT || 3000;

// MongoDB connection
async function connectDB() {
  try {
    const dbURL = process.env.DB_URL;

    if (!dbURL) {
      throw new Error("DB_URL is not defined in environment variables");
    }

    await mongoose.connect(dbURL);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
  }
}

// Connect DB
connectDB();

// Global error handler
app.use((err, req, res, next) => {
  console.log("Error:", err.message);

  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid data format",
      error: err.message
    });
  }

  res.status(500).json({
    message: "Internal server error",
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend API running on port ${PORT}`);
});