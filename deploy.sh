#!/bin/bash

# Job Portal Deployment Script
echo "🚀 Starting Job Portal Deployment Process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit for deployment"
fi

echo "✅ Project is ready for deployment!"
echo ""
echo "📋 Next Steps:"
echo "1. Set up MongoDB Atlas database"
echo "2. Create Cloudinary account for file uploads"
echo "3. Choose deployment platform:"
echo "   - Backend: Railway (recommended) or Render"
echo "   - Frontend: Vercel (recommended) or Netlify"
echo ""
echo "📖 Follow the detailed guide in DEPLOYMENT.md"
echo ""
echo "🔧 Quick Commands:"
echo "Backend: cd react-job-portal/backend && npm run build"
echo "Frontend: cd react-job-portal/frontend && npm run build"
echo ""
echo "Happy Deploying! 🎉"
