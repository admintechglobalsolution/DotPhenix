import "./services.css";
import { ReactNode } from "react";

import WebVisual from "../service-visuals/WebVisual";
import SaasVisual from "../service-visuals/SaasVisual";
import MobileVisual from "../service-visuals/MobileVisual";
import DigitalVisual from "../service-visuals/DigitalVisual";
import PayrollVisual from "../service-visuals/PayrollVisual";
import AiVisual from "../service-visuals/AiVisual";
/* =====================
   METADATA
===================== */
export const metadata = {
  title: "Services — Dot Phenix Solutions",
  description:
    "Enterprise digital services including Web, Mobile, SaaS, AI Automation, Digital Marketing, and Payroll & Enterprise Systems.",
};

/* =====================
   SERVICE BLOCK
===================== */
type ServiceBlockProps = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  visual: ReactNode;
};

const ServiceBlock = ({
  id,
  title,
  intro,
  items,
  visual,
}: ServiceBlockProps) => {
  return (
    <section id={id} className="service-section service-split">
      {/* LEFT — CONTENT */}
      <div className="service-content">
        <h2>{title}</h2>
        <p className="service-intro">{intro}</p>

        <h3>What We Do</h3>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT — VISUAL */}
      <div className="service-visual">{visual}</div>
    </section>
  );
};

/* =====================
   PAGE
===================== */
export default function ServicesPage() {
  return (
    <main className="services-wrapper">
      {/* =====================
         INTRO
      ====================== */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Dot Phenix Solutions delivers secure, scalable, and intelligent
          digital solutions engineered for modern enterprises and fast-growing
          businesses.
        </p>
      </header>

      {/* =====================
         SERVICES LIST
      ====================== */}
      <section className="services-list">
        {/* WEB */}
        <ServiceBlock
          id="web"
          title="Web Application Development"
          intro="We build secure, high-performance web platforms designed for scalability and long-term maintainability."
          items={[
            "Custom enterprise web applications",
            "Cloud-native & API-first architectures",
            "Performance, security, and scalability optimization",
            "Responsive and accessible UI/UX systems",
          ]}
          visual={<WebVisual />}
        />

        {/* MOBILE */}
        <ServiceBlock
          id="mobile"
          title="Mobile Application Development"
          intro="We design and develop mobile applications optimized for usability, performance, and growth."
          items={[
            "Android & iOS native development",
            "Cross-platform mobile solutions",
            "Backend & API integrations",
            "App lifecycle management & deployment",
          ]}
          visual={<MobileVisual />}
        />

        {/* SAAS */}
        <ServiceBlock
          id="saas"
          title="SaaS Product Development"
          intro="From idea to launch, we build SaaS products focused on reliability, scalability, and business impact."
          items={[
            "SaaS architecture & system design",
            "Multi-tenant platform development",
            "Subscription & billing systems",
            "Cloud deployment & scaling strategies",
          ]}
          visual={<SaasVisual />}
        />

        {/* AI */}
        <ServiceBlock
          id="ai"
          title="AI & Intelligent Automation"
          intro="We leverage AI to automate workflows, extract insights, and improve decision-making."
          items={[
            "Workflow & process automation",
            "Data intelligence & analytics",
            "AI model integration",
            "Operational efficiency optimization",
          ]}
          visual={<AiVisual />}
        />

        {/* DIGITAL MARKETING */}
        <ServiceBlock
          id="marketing"
          title="Digital Marketing"
          intro="Data-driven marketing strategies integrated with automation for consistent growth."
          items={[
            "Performance & growth marketing",
            "SEO & analytics optimization",
            "Marketing automation",
            "Conversion-focused campaigns",
          ]}
          visual={<DigitalVisual />}
        />

        {/* PAYROLL / ENTERPRISE */}
        <ServiceBlock
          id="enterprise"
          title="Payroll & Enterprise Systems"
          intro="Enterprise-grade systems designed for compliance, security, and operational efficiency."
          items={[
            "Payroll processing & compliance",
            "Internal enterprise automation",
            "Reporting & analytics dashboards",
            "Secure role-based access control",
          ]}
          visual={<PayrollVisual />}
        />
      </section>

      {/* =====================
         CTA
      ====================== */}
      <section className="services-cta">
        <h2>Let’s Work Together</h2>
        <p>
          Partner with Dot Phenix Solutions to build secure, scalable, and
          future-ready digital platforms.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo →
        </a>
      </section>
    </main>
  );
}
