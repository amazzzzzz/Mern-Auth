import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

// Initialize the Express app
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

const allowedOrigins = ['http://localhost:5173']

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies from requests
app.use(cors({ origin: allowedOrigins, credentials: true })); // Allow cross-origin requests with credentials

// API Endpoints
app.get('/', (req, res) => res.send("API Working")); // Health check endpoint
app.use('/api/auth', authRouter) // Mount authentication routes
app.use('/api/user', userRouter)
// Start the server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
