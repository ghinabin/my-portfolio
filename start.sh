#!/bin/bash

# Nabin Ghimire Portfolio - Quick Start Script
# This script starts a local development server

echo "🚀 Starting Nabin Ghimire Portfolio..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✓ Using Python 3 server"
    echo "📂 Opening http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "✓ Using Node.js http-server"
    echo "📂 Opening http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    npx http-server -p 8000 -o
else
    echo "❌ Neither Python 3 nor Node.js found."
    echo ""
    echo "Please install one of the following:"
    echo "  • Python 3: https://www.python.org/downloads/"
    echo "  • Node.js: https://nodejs.org/"
    echo ""
    echo "Or simply open index.html directly in your browser."
    exit 1
fi
