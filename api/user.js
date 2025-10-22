// Vercel serverless function for user routes
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import dbConnect from './lib/dbConnect.js';

// Import your existing route handlers
import userRouter from '../backend/routes/userRoutes.js';

const app = express();

// Load environment variables
config({ path: '../backend/config/config.env' });

// Connect to database
dbConnect();

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  method: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/user', userRouter);

export default app;
