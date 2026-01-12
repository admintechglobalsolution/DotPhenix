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
  description: string;
  items: string[];
  visual: ReactNode;
};

const ServiceBlock = ({
  id,
  title,
  intro,
  description,
  items,
  visual,
}: ServiceBlockProps) => {
  return (
    <section id={id} className="service-section">
      <div className="service-split">
        {/* CONTENT */}
        <div className="service-content">
          <h2>{title}</h2>

          <p className="service-intro">{intro}</p>

          <p className="service-description">{description}</p>

          <h3>Core Capabilities</h3>

          <ul className="service-list">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* VISUAL */}
        <div className="service-visual">{visual}</div>
      </div>
    </section>
  );
};

/* =====================
   PAGE
===================== */
export default function ServicesPage() {
  return (
    <main className="services-wrapper">
      {/* HEADER */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Dot Phenix Solutions delivers secure, scalable, and intelligent
          digital solutions built for modern enterprises, with performance,
          compliance, and long-term sustainability at the core of every platform
          we engineer.
        </p>
      </header>

      {/* SERVICES */}
      <section className="services-list">
        <ServiceBlock
          id="web"
          title="Web Application Development"
          intro="High-performance web platforms engineered for security and scalability.
Built to support growth, resilience, and long-term success."
          description="We engineer robust web applications that support complex workflows, customer engagement, and enterprise-scale operations. Our systems are designed for long-term maintainability, performance optimization, and seamless cloud integration."
          items={[
            "Custom enterprise web platforms",
            "API-first & cloud-native architectures",
            "Security hardening & performance tuning",
            "Accessible, responsive UI engineering",
          ]}
          visual={<WebVisual />}
        />

        <ServiceBlock
          id="mobile"
          title="Mobile Application Development"
          intro="User-centric mobile applications built for performance and stability.
Designed to scale seamlessly as your product and users grow."
          description="From consumer apps to internal enterprise tools, we build mobile solutions that deliver seamless experiences across devices while maintaining secure backend connectivity and lifecycle scalability."
          items={[
            "Android & iOS native development",
            "Cross-platform mobile solutions",
            "Backend & third-party integrations",
            "Deployment & app lifecycle management",
          ]}
          visual={<MobileVisual />}
        />

        <ServiceBlock
          id="saas"
          title="SaaS Product Development"
          intro="End-to-end SaaS platforms engineered for reliability and scalability.
Built to support commercial growth and long-term success."
          description="We help businesses transform ideas into scalable SaaS products with strong architectural foundations, subscription models, and cloud-native infrastructure that supports rapid growth."
          items={[
            "Multi-tenant SaaS architecture",
            "Subscription & billing systems",
            "Cloud deployment & scaling strategies",
            "Product security & compliance",
          ]}
          visual={<SaasVisual />}
        />

        <ServiceBlock
          id="ai"
          title="AI & Intelligent Automation"
          intro="AI-powered systems that automate workflows and optimize operations.
Enabling faster, smarter, data-driven decision-making."
          description="We integrate AI-driven automation into enterprise workflows to reduce manual effort, improve operational efficiency, and unlock actionable insights across business processes."
          items={[
            "Workflow & process automation",
            "AI model & data pipeline integration",
            "Predictive analytics & insights",
            "Operational efficiency optimization",
          ]}
          visual={<AiVisual />}
        />

        <ServiceBlock
          id="marketing"
          title="Digital Marketing"
          intro="Performance-driven digital strategies powered by data and insights.
Accelerated through intelligent automation and continuous optimization."
          description="Our digital marketing solutions combine analytics, automation, and growth strategies to drive consistent engagement, visibility, and measurable business outcomes."
          items={[
            "Performance & growth marketing",
            "SEO & analytics optimization",
            "Marketing automation systems",
            "Conversion-focused campaigns",
          ]}
          visual={<DigitalVisual />}
        />

        <ServiceBlock
          id="enterprise"
          title="Payroll & Enterprise Systems"
          intro="Enterprise-grade payroll systems built for compliance and security.
Ensuring accurate, efficient, and timely payroll operations."
          description="We develop internal enterprise systems that streamline payroll, compliance, reporting, and operational workflows while maintaining strict security and access controls."
          items={[
            "Payroll processing & compliance",
            "Enterprise workflow automation",
            "Reporting & analytics dashboards",
            "Secure role-based access control",
          ]}
          visual={<PayrollVisual />}
        />
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Let’s Build Something Scalable</h2>
        <p>
          Partner with Dot Phenix Solutions to design and deliver secure,
          future-ready digital platforms that grow with your business.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo →
        </a>
      </section>
    </main>
  );
}
