// Vercel serverless function for job routes
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { config } from 'dotenv';
import dbConnect from './lib/dbConnect.js';

// Import your existing route handlers
import jobRouter from '../backend/routes/jobRoutes.js';

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

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use('/api/v1/job', jobRouter);

export default app;
