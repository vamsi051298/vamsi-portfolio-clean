#!/bin/bash

echo "🚀 Setting up Vamsi's Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create a placeholder background image if it doesn't exist
if [ ! -f "public/bg-aurora.jpg" ]; then
    echo "⚠️  Background image not found!"
    echo "Please add your aurora/starry night background image as 'public/bg-aurora.jpg'"
    echo "Recommended size: 2400px wide, ~400-800 KB"
    echo ""
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Email service configuration (optional)
# Uncomment and configure if you want to use the contact form

# EMAIL_SERVICE_API_KEY=your_api_key_here
# EMAIL_FROM=your_email@domain.com
# EMAIL_TO=recipient@domain.com
EOF
fi

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your background image as 'public/bg-aurora.jpg'"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For production deployment:"
echo "1. Push to GitHub"
echo "2. Connect to Vercel"
echo "3. Deploy automatically"
