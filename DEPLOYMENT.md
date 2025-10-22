# 🚀 Job Portal Deployment Guide

This guide will help you deploy your MERN stack Job Portal application to production.

## 📋 Prerequisites

- Node.js installed on your system
- Git repository set up
- MongoDB Atlas account (for production database)
- Cloudinary account (for file uploads)
- Deployment platform accounts (Railway/Render for backend, Vercel/Netlify for frontend)

## 🗄️ Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (free tier)

2. **Configure Database Access**
   - Create a database user
   - Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
   - Get your connection string

3. **Update Environment Variables**
   - Copy `env.example` to `.env` in backend folder
   - Update `DB_URL` with your MongoDB Atlas connection string

## ☁️ File Storage Setup (Cloudinary)

1. **Create Cloudinary Account**
   - Go to [Cloudinary](https://cloudinary.com)
   - Create a free account
   - Get your cloud name, API key, and API secret

2. **Update Environment Variables**
   - Add Cloudinary credentials to your `.env` file

## 🔧 Backend Deployment (Railway)

### Option 1: Railway (Recommended)

1. **Prepare Repository**
   ```bash
   cd react-job-portal/backend
   git init
   git add .
   git commit -m "Initial backend commit"
   ```

2. **Deploy to Railway**
   - Go to [Railway](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Choose the backend folder

3. **Configure Environment Variables**
   - In Railway dashboard, go to Variables tab
   - Add all variables from your `.env` file:
     - `DB_URL`
     - `PORT`
     - `FRONTEND_URL` (update after frontend deployment)
     - `JWT_SECRET`
     - `JWT_EXPIRE`
     - `CLOUDINARY_CLOUD_NAME`
     - `CLOUDINARY_API_KEY`
     - `CLOUDINARY_API_SECRET`

4. **Deploy**
   - Railway will automatically deploy your backend
   - Note the generated URL (e.g., `https://your-app.railway.app`)

### Option 2: Render

1. **Prepare Repository**
   ```bash
   cd react-job-portal/backend
   git init
   git add .
   git commit -m "Initial backend commit"
   ```

2. **Deploy to Render**
   - Go to [Render](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Choose the backend folder

3. **Configure Settings**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables

## 🎨 Frontend Deployment (Vercel)

### Option 1: Vercel (Recommended)

1. **Prepare Repository**
   ```bash
   cd react-job-portal/frontend
   git init
   git add .
   git commit -m "Initial frontend commit"
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Choose the frontend folder

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `VITE_API_URL` with your backend URL

4. **Deploy**
   - Vercel will automatically build and deploy
   - Note the generated URL (e.g., `https://your-app.vercel.app`)

### Option 2: Netlify

1. **Build Locally**
   ```bash
   cd react-job-portal/frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

## 🔄 Update URLs

After both deployments:

1. **Update Backend CORS**
   - In Railway/Render dashboard
   - Update `FRONTEND_URL` environment variable with your frontend URL

2. **Update Frontend API URL**
   - In Vercel/Netlify dashboard
   - Update `VITE_API_URL` environment variable with your backend URL

## 🧪 Testing Deployment

1. **Test Backend**
   - Visit `https://your-backend-url.railway.app/api/v1/user/getuser`
   - Should return an error (expected without authentication)

2. **Test Frontend**
   - Visit your frontend URL
   - Try registering a new account
   - Test job posting and application features

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files to Git
   - Use strong, unique JWT secrets
   - Rotate secrets regularly

2. **CORS Configuration**
   - Only allow your frontend domain
   - Remove localhost URLs in production

3. **Database Security**
   - Use MongoDB Atlas IP whitelisting
   - Enable database authentication

## 📊 Monitoring

1. **Railway/Render**
   - Monitor logs and performance
   - Set up alerts for errors

2. **Vercel/Netlify**
   - Monitor build status
   - Check analytics and performance

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Check `FRONTEND_URL` in backend environment variables
   - Ensure URLs match exactly

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings

3. **File Upload Issues**
   - Verify Cloudinary credentials
   - Check file size limits

4. **Build Failures**
   - Check Node.js version compatibility
   - Review build logs for errors

## 📞 Support

If you encounter issues:
1. Check the deployment platform logs
2. Verify all environment variables are set
3. Test API endpoints individually
4. Check browser console for frontend errors

---

**Happy Deploying! 🎉**
