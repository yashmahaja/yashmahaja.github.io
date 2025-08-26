#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    echo "📝 Adding changes to git..."
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy: $(date)"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment initiated! Check GitHub Actions for progress."
    echo "🌐 Your site will be available at: https://yashmahaja.github.io"
else
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi
