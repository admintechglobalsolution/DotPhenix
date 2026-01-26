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
  metadataBase: new URL("https://dotphenix.com"),

  title: {
    default: "Dot Phenix Solutions | AI-Driven Digital Automation",
    template: "%s | Dot Phenix Solutions",
  },

  description:
    "Dot Phenix Solutions is an AI-Driven Digital Automation Company delivering scalable, secure, and intelligent technology solutions for modern enterprises.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotphenix.com",
    siteName: "Dot Phenix Solutions",
    title: "Dot Phenix Solutions | AI-Driven Digital Automation",
    description:
      "Dot Phenix Solutions is an AI-Driven Digital Automation Company delivering scalable, secure, and intelligent technology solutions for modern enterprises.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dot Phenix Solutions | AI-Driven Digital Automation",
    description:
      "Dot Phenix Solutions is an AI-Driven Digital Automation Company delivering scalable, secure, and intelligent technology solutions for modern enterprises.",
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
          <main id="main-content" role="main">
            {children}
          </main>
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}
