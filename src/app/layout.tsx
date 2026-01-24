import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dot Phenix Solutions – AI & Digital Automation Company",
    template: "%s | Dot Phenix Solutions",
  },
  description:
    "Dot Phenix Solutions is an AI-driven digital automation company delivering scalable web, mobile, SaaS, and intelligent software solutions for modern businesses.",
  keywords: [
    "Dot Phenix Solutions",
    "AI digital automation company",
    "software development company",
    "web application development",
    "mobile app development",
    "SaaS development",
    "AI solutions company",
  ],
  authors: [{ name: "Dot Phenix Solutions" }],
  creator: "Dot Phenix Solutions",
  publisher: "Dot Phenix Solutions",
  metadataBase: new URL("https://dotphenix.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotphenix.com",
    siteName: "Dot Phenix Solutions",
    title: "Dot Phenix Solutions – AI & Digital Automation",
    description:
      "AI-powered digital automation platforms engineered for performance, scalability, and measurable business growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        <Header />
        <ClientLayout>
          <main id="main-content">{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
