import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dot Phenix Solutions | Web, Mobile, SaaS & AI Automation Company",
  description:
    "Dot Phenix Solutions builds modern web applications, mobile apps, SaaS platforms, and AI automation solutions.",
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
        {children}
      </body>
    </html>
  );
}
