# Deployment Guide

## 🚀 Quick Start

1. **Add your background image**:
   - Place your aurora/starry night image as `public/bg-aurora.jpg`
   - Recommended: 2400px wide, ~400-800 KB

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

4. **Open**: http://localhost:3000

## 🌐 Deploy to Vercel (Recommended)

### Option 1: GitHub + Vercel (Automatic)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## 🔧 Environment Variables (Optional)

If you want to use the contact form, add these in Vercel:

1. Go to your project settings in Vercel
2. Add environment variables:
   ```
   EMAIL_SERVICE_API_KEY=your_api_key
   EMAIL_FROM=your_email@domain.com
   EMAIL_TO=recipient@domain.com
   ```

## 📧 Contact Form Setup

The contact form is currently a placeholder. To make it functional:

1. **Choose an email service**:
   - [SendGrid](https://sendgrid.com/)
   - [Resend](https://resend.com/)
   - [AWS SES](https://aws.amazon.com/ses/)

2. **Update the API route** (`app/api/contact/route.ts`):
   ```typescript
   import { NextRequest, NextResponse } from "next/server";
   
   export async function POST(req: NextRequest) {
     const body = await req.json();
     
     // Add your email service integration here
     // Example with SendGrid:
     // await sendEmail(body);
     
     return NextResponse.json({ ok: true });
   }
   ```

## 🎨 Customization

### Update Profile Information
Edit `data/profile.ts` to customize:
- Personal details
- Experience
- Projects
- Skills
- Education

### Styling
- Colors: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Individual component files

## 📱 Performance Tips

1. **Optimize images**:
   - Use WebP format when possible
   - Compress images to reduce file size
   - Use appropriate dimensions

2. **Monitor performance**:
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Optimize 3D rendering if needed

## 🔍 SEO Optimization

1. **Update metadata** in `app/layout.tsx`:
   ```typescript
   export const metadata: Metadata = {
     title: "Your Name — Portfolio",
     description: "Your custom description",
     openGraph: {
       title: "Your Name — Portfolio",
       description: "Your custom description",
       images: ["/og.jpg"]
     }
   };
   ```

2. **Add social media images**:
   - `public/og.jpg` (1200x630px)
   - `public/favicon.ico` (32x32px)

## 🛠️ Troubleshooting

### Common Issues

1. **Build errors**:
   ```bash
   npm run build
   ```

2. **TypeScript errors**:
   ```bash
   npm run lint
   ```

3. **Missing background image**:
   - Ensure `public/bg-aurora.jpg` exists
   - Check file permissions

### Support

- Check the [README.md](README.md) for detailed setup instructions
- Review the [Next.js documentation](https://nextjs.org/docs)
- Check [Vercel documentation](https://vercel.com/docs) for deployment issues

## 🎉 Success!

Once deployed, your portfolio will be live and accessible to the world. Share your new portfolio URL and start networking!

---

**Need help?** Contact: VkCh051298@gmail.com
