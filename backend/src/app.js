import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Create HTTP server
const server = createServer(app);

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/user", userRoutes);

connectDB();

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});