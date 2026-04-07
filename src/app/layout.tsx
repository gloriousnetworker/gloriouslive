import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6d28d9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Iniubong Udofot | Fullstack Software Engineer",
  description:
    "Dynamic and highly skilled Full Stack Software Engineer with 6+ years of experience specializing in React.js, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Fullstack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Frontend Specialist",
    "Iniubong Udofot",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IU Portfolio",
  },
  openGraph: {
    title: "Iniubong Udofot | Fullstack Software Engineer",
    description:
      "Dynamic Full Stack Software Engineer specializing in React.js, Next.js, and TypeScript.",
    type: "website",
    url: "https://gloriouslive.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
      </head>
      <body className="font-sans antialiased">
        <div className="grain-overlay" />
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
