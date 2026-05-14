import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { employeeRoutes } from "./APIs/employeeAPI.js";

// Load environment variables
dotenv.config();

const app = express();

// __dirname fix (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: ["http://localhost:5173"]
}));

app.use(express.json());

// Routes
app.use("/employee-api", employeeRoutes);

// Static frontend (React build)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Port
const PORT = process.env.PORT || 3000;

// MongoDB connection
async function connectDB() {
  try {
    const dbURL = process.env.DB_URL;

    if (!dbURL) {
      throw new Error("DB_URL is not defined in .env file");
    }

    await mongoose.connect(dbURL);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
  }
}

// Connect DB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend API running on port ${PORT}`);
});

// React fallback route
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/employee-api")) {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  } else {
    next();
  }
});

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
