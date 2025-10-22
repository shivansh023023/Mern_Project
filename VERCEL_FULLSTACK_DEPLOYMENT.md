# 🚀 Full-Stack Vercel Deployment Guide

Deploy your entire MERN stack Job Portal on Vercel using serverless functions!

## 📋 Prerequisites

- Vercel account (free tier available)
- MongoDB Atlas account
- Cloudinary account
- GitHub repository

## 🏗️ Project Structure

Your project should look like this:
```
react-job-portal/
├── api/                          # Serverless functions
│   ├── lib/
│   │   └── dbConnect.js          # Database connection utility
│   ├── user.js                   # User API routes
│   ├── job.js                    # Job API routes
│   └── application.js            # Application API routes
├── frontend/                     # React frontend
│   ├── src/
│   ├── package.json
│   └── vercel.json
├── backend/                      # Original backend (reference)
├── vercel.json                   # Root Vercel configuration
└── package.json                  # Root package.json
```

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Repository

```bash
# Navigate to your project root
cd react-job-portal

# Initialize git if not done
git init

# Add all files
git add .

# Commit changes
git commit -m "Full-stack Vercel deployment ready"

# Push to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Set Up MongoDB Atlas

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (free tier)

2. **Configure Database Access**
   - Create a database user
   - Whitelist IP address (use `0.0.0.0/0` for all IPs)
   - Get your connection string

### Step 3: Set Up Cloudinary

1. **Create Cloudinary Account**
   - Go to [Cloudinary](https://cloudinary.com)
   - Create a free account
   - Get your cloud name, API key, and API secret

### Step 4: Deploy to Vercel

1. **Go to Vercel Dashboard**
   - Visit [Vercel Dashboard](https://vercel.com/dashboard)
   - Sign up/login with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - **Important:** Keep the root directory as the project root

3. **Configure Build Settings**
   - Framework Preset: "Other"
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   In the Vercel dashboard, add these environment variables:
   
   ```env
   # Database
   DB_URL=mongodb+srv://username:password@cluster.mongodb.net/Job_Portal?retryWrites=true&w=majority
   
   # JWT Configuration
   JWT_SECRET=your_super_secure_jwt_secret_key_here_make_it_long_and_random
   JWT_EXPIRE=7d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Frontend URL (will be your Vercel domain)
   FRONTEND_URL=https://your-app-name.vercel.app
   
   # Frontend API URL (leave empty for same domain)
   VITE_API_URL=
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

### Step 5: Update Environment Variables

After deployment, update the `FRONTEND_URL` with your actual Vercel domain:
- Go to Project Settings → Environment Variables
- Update `FRONTEND_URL` with your deployed URL
- Redeploy if necessary

## 🧪 Testing Your Deployment

### 1. Test Frontend
- Visit your Vercel URL
- Check if the homepage loads correctly

### 2. Test Backend APIs
- Test user registration: `POST /api/user/register`
- Test user login: `POST /api/user/login`
- Test job listing: `GET /api/job/getall`

### 3. Test Full Functionality
- Register a new account
- Login with the account
- Post a job
- Apply to jobs
- Upload resume/CV

## 🔧 Troubleshooting

### Common Issues:

#### 1. **Build Failures**
```bash
# Check if all dependencies are installed
npm install

# Test build locally
cd frontend && npm run build
```

#### 2. **Database Connection Issues**
- Verify MongoDB Atlas connection string
- Check IP whitelist settings
- Ensure database user has proper permissions

#### 3. **API Route Issues**
- Check Vercel function logs
- Verify environment variables are set
- Test individual API endpoints

#### 4. **File Upload Issues**
- Verify Cloudinary credentials
- Check file size limits (Vercel has 50MB limit)
- Test with smaller files first

#### 5. **CORS Issues**
- Verify `FRONTEND_URL` environment variable
- Check if URLs match exactly

## 📊 Vercel Limitations

### File Upload Limits
- **Payload Size:** 50MB maximum
- **Execution Time:** 10 seconds (Hobby plan)
- **Cold Starts:** May cause delays

### Database Connections
- **Connection Pooling:** May need adjustment for serverless
- **Cold Starts:** Database connections may timeout

### Recommendations
- Use MongoDB Atlas connection string with `retryWrites=true`
- Implement connection caching (already done in `dbConnect.js`)
- Consider file size limits for resume uploads

## 🚀 Performance Optimization

### 1. Database Optimization
- Use MongoDB Atlas M0 (free) or M2+ for better performance
- Implement proper indexing
- Use connection pooling

### 2. Frontend Optimization
- Enable Vercel's automatic optimizations
- Use Vercel's CDN
- Implement proper caching

### 3. API Optimization
- Use Vercel's edge functions for simple operations
- Implement proper error handling
- Use environment variables efficiently

## 📈 Monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Monitor function execution times
- Check error rates

### Database Monitoring
- Use MongoDB Atlas monitoring
- Monitor connection counts
- Check query performance

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use strong, unique JWT secrets
- Rotate secrets regularly

### CORS Configuration
- Only allow your Vercel domain
- Remove localhost URLs in production

### Database Security
- Use MongoDB Atlas IP whitelisting
- Enable database authentication
- Use strong passwords

## 🎉 Success!

Once deployed, your full-stack Job Portal will be available at:
- **Frontend:** `https://your-app-name.vercel.app`
- **API:** `https://your-app-name.vercel.app/api/`

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify all environment variables
3. Test API endpoints individually
4. Check browser console for frontend errors
5. Review MongoDB Atlas logs

---

**Happy Deploying! 🎉**

Your entire MERN stack is now running on Vercel's serverless platform!
