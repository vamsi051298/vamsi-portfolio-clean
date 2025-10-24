# Vamsi Krishna Chirala - Portfolio

A modern, interactive portfolio website built with Next.js, React Three Fiber, and Framer Motion. Features a stunning 3D aurora background, smooth animations, and a responsive design.

## 🚀 Features

- **3D Interactive Background**: Starry aurora scene with Three.js
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Glass morphism effects and glowing elements
- **Contact Form**: Functional contact form with API integration
- **Performance Optimized**: Next.js 14 with optimized imports

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vamsi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your background image:
   - Place your aurora/starry night image as `public/bg-aurora.jpg`
   - Recommended size: 2400px wide, ~400-800 KB

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Profile Information
Edit `data/profile.ts` to update:
- Personal information
- Experience details
- Project descriptions
- Skills and technologies
- Education background

### Styling
- Colors and themes: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Individual component files

### Contact Form
The contact form is set up with a placeholder API route. To make it functional:

1. Choose an email service (SendGrid, Resend, etc.)
2. Update `app/api/contact/route.ts`
3. Add environment variables for API keys

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── components/
│   ├── ContactForm.tsx         # Contact form component
│   ├── HeroIntro.tsx           # Landing intro
│   ├── MetricBadge.tsx         # Metric display
│   ├── NavMenu.tsx             # Navigation menu
│   ├── ProjectCard.tsx         # Project display
│   ├── Section.tsx             # Section wrapper
│   └── ThreeBackground.tsx     # 3D background
├── data/
│   └── profile.ts              # Profile data
├── public/
│   ├── bg-aurora.jpg           # Background image (add your own)
│   └── README.txt              # Image requirements
└── ...config files
```

## 🎯 Performance

- Optimized Three.js rendering
- Lazy loading for 3D components
- Reduced motion support for accessibility
- Image optimization with Next.js

## 🔧 Environment Variables

For production, you may need:

```env
# Email service (if using contact form)
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=your_email@domain.com
EMAIL_TO=recipient@domain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: VkCh051298@gmail.com
- **LinkedIn**: [vssvamsikrishnachirala](https://www.linkedin.com/in/vssvamsikrishnachirala)
- **GitHub**: [vamsi051298](https://github.com/vamsi051298)

---

Built with ❤️ by Vamsi Krishna Chirala