import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sentienta Labs — AI-First Software Consultancy",
  description:
    "We architect intelligent software solutions. From AI-powered automation to enterprise platforms, Sentienta Labs delivers precision-engineered technology that scales.",
  keywords: [
    "AI consultancy",
    "software development",
    "machine learning",
    "AI agents",
    "NLP solutions",
    "computer vision",
    "startup acceleration",
    "CTO as a service",
  ],
  openGraph: {
    title: "Sentienta Labs — AI-First Software Consultancy",
    description:
      "Precision-engineered AI solutions and intelligent software for forward-thinking organizations.",
    type: "website",
    locale: "en_US",
    siteName: "Sentienta Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentienta Labs — AI-First Software Consultancy",
    description:
      "Precision-engineered AI solutions and intelligent software for forward-thinking organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased noise-overlay`}>
        <div className="mesh-gradient" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
