import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vamsi Krishna Chirala — Portfolio",
  description: "Professional portfolio with spatial 3D, Apple-grade polish, and deep engineering case studies.",
  openGraph: {
    title: "Vamsi Krishna Chirala — Portfolio",
    description: "Systems that connect data and design. Spring Boot, Node.js, React, AWS, Kubernetes, Kafka, Redis.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
