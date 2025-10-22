# 🚀 Vercel Deployment Guide for Job Portal

This guide covers both deployment options for your MERN stack Job Portal on Vercel.

## 📋 Prerequisites

- Vercel account (free tier available)
- MongoDB Atlas account
- Cloudinary account
- GitHub repository

## 🎯 Option 1: Frontend on Vercel + Backend on Railway (Recommended)

### Why This Approach?
- ✅ **Better Performance:** Vercel excels at React hosting
- ✅ **Easier Setup:** Minimal code changes required
- ✅ **Cost Effective:** Both platforms have generous free tiers
- ✅ **Better for File Uploads:** Railway handles Express.js better

### Steps:

#### 1. Deploy Backend to Railway
```bash
# Navigate to backend
cd react-job-portal/backend

# Initialize git if not done
git init
git add .
git commit -m "Backend ready for Railway"

# Push to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

#### 2. Deploy Frontend to Vercel
```bash
# Navigate to frontend
cd react-job-portal/frontend

# Build locally to test
npm run build

# Push to GitHub (if not done)
git add .
git commit -m "Frontend ready for Vercel"
git push
```

#### 3. Vercel Deployment Steps
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. **Important:** Set Root Directory to `react-job-portal/frontend`
5. Add Environment Variable:
   - `VITE_API_URL` = `https://your-backend-url.railway.app`
6. Click "Deploy"

#### 4. Update Backend CORS
In Railway dashboard, update environment variable:
- `FRONTEND_URL` = `https://your-frontend-url.vercel.app`

---

## 🔧 Option 2: Full-Stack on Vercel (Advanced)

### Why This Approach?
- ✅ **Single Platform:** Everything on Vercel
- ✅ **Serverless:** Automatic scaling
- ⚠️ **Complex Setup:** Requires converting Express.js to serverless functions
- ⚠️ **File Upload Limitations:** May have issues with large file uploads

### Steps:

#### 1. Restructure Project for Vercel
Your project structure should look like:
```
react-job-portal/
├── api/                    # Serverless functions
│   ├── user.js
│   ├── job.js
│   └── application.js
├── frontend/               # React app
│   ├── src/
│   ├── package.json
│   └── vercel.json
├── backend/                 # Original backend (for reference)
└── vercel.json             # Root Vercel config
```

#### 2. Create Root Vercel Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "frontend/dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/index.html"
    }
  ]
}
```

#### 3. Update Frontend API Configuration
```javascript
// src/utils/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const API_ENDPOINTS = {
  USER_LOGIN: `${API_BASE_URL}/api/user/login`,
  USER_REGISTER: `${API_BASE_URL}/api/user/register`,
  // ... other endpoints
};
```

#### 4. Deploy to Vercel
1. Push entire project to GitHub
2. Import to Vercel
3. Set Root Directory to project root
4. Add Environment Variables:
   - `VITE_API_URL` = (leave empty for same domain)
   - `DB_URL` = MongoDB Atlas connection string
   - `JWT_SECRET` = your JWT secret
   - `CLOUDINARY_CLOUD_NAME` = your Cloudinary name
   - `CLOUDINARY_API_KEY` = your Cloudinary API key
   - `CLOUDINARY_API_SECRET` = your Cloudinary secret
   - `FRONTEND_URL` = your Vercel domain

---

## 🚨 Important Considerations

### File Upload Limitations
- **Vercel Functions:** 50MB payload limit
- **Cold Starts:** May cause delays for file uploads
- **Recommendation:** Use Option 1 for better file upload experience

### Database Connection
- **MongoDB Atlas:** Required for both options
- **Connection Pooling:** May need adjustment for serverless

### CORS Configuration
- **Option 1:** Configure CORS on Railway backend
- **Option 2:** Configure CORS in serverless functions

---

## 🎯 Quick Start (Recommended: Option 1)

### 1. Deploy Backend to Railway
```bash
# In your project root
cd react-job-portal/backend
git init
git add .
git commit -m "Backend ready"
git push origin main
```

### 2. Deploy Frontend to Vercel
```bash
# In your project root
cd react-job-portal/frontend
git add .
git commit -m "Frontend ready"
git push origin main
```

### 3. Configure Environment Variables
- **Railway:** Add all backend environment variables
- **Vercel:** Add `VITE_API_URL` pointing to Railway

### 4. Test Deployment
- Visit your Vercel frontend URL
- Test user registration and login
- Test job posting and applications

---

## 🔧 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

2. **API Connection Issues**
   - Verify `VITE_API_URL` is correct
   - Check CORS configuration

3. **File Upload Issues**
   - Check Cloudinary configuration
   - Verify file size limits

4. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings

---

## 📊 Performance Comparison

| Feature | Option 1 (Vercel + Railway) | Option 2 (Full Vercel) |
|---------|------------------------------|------------------------|
| Frontend Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Backend Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| File Uploads | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Setup Complexity | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Cost | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎉 Recommendation

**Go with Option 1** (Frontend on Vercel + Backend on Railway) because:
- Easier to set up and maintain
- Better performance for your use case
- More reliable file upload handling
- Both platforms have excellent free tiers

Would you like me to help you with the specific deployment steps for either option?
