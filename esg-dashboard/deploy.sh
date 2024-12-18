#!/bin/bash

# Exit on error
set -e

# Define paths
TARGET_DIR="../joelludin.github.io/out/esg-dashboard"

echo "🏗️ Building project..."
NEXT_DISABLE_ESLINT=1 npm run build

echo "📦 Preparing deployment..."
mkdir -p "$TARGET_DIR"

echo "🚚 Copying build output..."
# Copy dashboard files to the correct location
cp -r out/* "$TARGET_DIR/"

echo "✅ Files copied to $TARGET_DIR"
echo "Now test at http://localhost:3000/esg-dashboard" 