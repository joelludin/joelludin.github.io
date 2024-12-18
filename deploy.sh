#!/bin/bash

# Exit on error
set -e

# Configuration
BRANCH="deploy-$(date +%Y%m%d-%H%M%S)"
MESSAGE="Deploy: $(date)"

echo "🔄 Creating new deployment branch: $BRANCH"
git checkout -b $BRANCH

echo "🏗️ Building project..."
npm run build

echo "📦 Committing changes..."
git add .
git commit -m "$MESSAGE"

echo "🚀 Pushing to GitHub..."
git push origin $BRANCH

echo "🔙 Switching back to main branch..."
git checkout main

echo "✅ Deployment complete!"
echo "Create a Pull Request from branch: $BRANCH"
echo "Visit https://joelludin.github.io to see your changes once merged" 