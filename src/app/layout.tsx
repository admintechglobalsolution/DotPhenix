import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dot Phenix Solutions | Web, Mobile, SaaS & AI Automation Company",
  description:
    "Dot Phenix Solutions builds web applications, mobile apps, SaaS dashboards, payroll systems, automation solutions, and AI-powered agents for modern businesses.",
  keywords: [
    "Web Application Development",
    "Mobile App Development",
    "SaaS Solutions",
    "AI Automation",
    "Payroll Systems",
    "Digital Transformation",
    "AI Agents",
    "Business Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
