"use client";

import { useEffect, useRef, useState } from "react";
import "./solutions.css";
import WhyChoose from "@/components/WhyChoose";

/* =====================
   TYPES
===================== */
type Section = {
  title: string;
  headline: string;
  description: string;
  valuePoints: string[];
  emphasisLine: string;
};

/* =====================
   DATA
===================== */
const sections: Section[] = [
  {
    title: "Technology",
    headline: "Technology & Product Platforms",
    description:
      "We design core technology platforms that become the backbone of digital businesses — engineered for scale, resilience, and long-term growth.",
    valuePoints: [
      "Future-proof architecture that reduces rework and accelerates feature delivery",
      "CI/CD pipelines and automated testing for safe, frequent releases",
      "Modular APIs and microservices to enable parallel development",
      "Built-in observability (logs, metrics, tracing) for fast incident resolution",
      "Security-by-design: identity, encryption, and least-privilege access",
      "Cost optimization through autoscaling and resource governance",
      "Developer experience (DX) tooling to increase team productivity",
    ],
    emphasisLine: "Strong platforms don’t support growth — they enable it.",
  },
  {
    title: "Business & Legal",
    headline: "Business Process & Legal Systems",
    description:
      "We simplify complex business and legal workflows with intelligent systems that improve efficiency, compliance, and visibility.",
    valuePoints: [
      "End-to-end workflow automation to remove manual handoffs",
      "Role-based access and approvals for governance and security",
      "Audit trails and tamper-evident logs for compliance readiness",
      "Contract lifecycle management with automated expiry/renewal alerts",
      "Business rules engine for fast policy changes without engineering",
      "Operational dashboards for SLA, bottleneck, and exception tracking",
      "Integration-ready connectors to ERPs, CRMs, and legal repositories",
    ],
    emphasisLine: "Efficiency is not optional — it’s a competitive advantage.",
  },
  {
    title: "FinTech",
    headline: "Financial Services & FinTech Platforms",
    description:
      "We build secure, high-performance financial platforms designed for trust, scale, and regulatory confidence.",
    valuePoints: [
      "Low-latency, secure transaction processing for real-time operations",
      "Robust reconciliation and ledger consistency across systems",
      "KYC/KYB and AML integration for regulatory compliance",
      "Fraud detection and anomaly scoring to protect revenue",
      "High-availability design with disaster recovery and failover",
      "Regulatory reporting automation to reduce audit overhead",
      "Pluggable payments & settlement modules for rapid market entry",
    ],
    emphasisLine: "In finance, reliability defines reputation.",
  },
  {
    title: "Healthcare",
    headline: "Healthcare & Medical Systems",
    description:
      "We design healthcare platforms that improve outcomes, streamline operations, and protect sensitive data.",
    valuePoints: [
      "EHR/EMR integration for consolidated patient records",
      "Secure patient portals and consent-managed data access",
      "Telemedicine and asynchronous care workflows",
      "Compliance-first design (HIPAA, GDPR where applicable)",
      "Clinical decision support and outcome-focused analytics",
      "Interoperability using standards (HL7/FHIR) for data exchange",
      "Operational tooling for scheduling, resource allocation, and capacity planning",
    ],
    emphasisLine: "Healthcare systems must perform when it matters most.",
  },
  {
    title: "Insurance",
    headline: "Insurance Platforms",
    description:
      "We design insurance systems that simplify policy management, claims, and customer journeys at scale.",
    valuePoints: [
      "End-to-end policy lifecycle and quoting automation",
      "Claims intake, triage, and automated adjudication workflows",
      "Underwriting engines with configurable rating rules",
      "Customer self-service portals for faster issue resolution",
      "Fraud detection and case-management integration",
      "Broker & partner integrations for distribution scale",
      "Regulatory compliance, audit trails, and reporting",
    ],
    emphasisLine: "Speed and trust define modern insurance.",
  },
  {
    title: "Retail",
    headline: "Retail & E-commerce Platforms",
    description:
      "We build commerce platforms that convert traffic into revenue and customers into loyal advocates.",
    valuePoints: [
      "Personalization and recommendations to lift conversion",
      "Frictionless checkout and payment integrations",
      "Real-time inventory sync across channels and warehouses",
      "Omnichannel experiences for consistent brand journeys",
      "Promotions & pricing engine for rapid campaign execution",
      "Performance engineering to handle peak seasonal load",
      "Customer analytics and CRM integration for retention",
    ],
    emphasisLine: "Every interaction is an opportunity to convert.",
  },
  {
    title: "Manufacturing",
    headline: "Manufacturing & Industrial Systems",
    description:
      "We connect industrial operations with intelligent platforms that deliver clarity, efficiency, and growth.",
    valuePoints: [
      "IIoT integrations for real-time equipment telemetry",
      "Predictive maintenance to reduce unplanned downtime",
      "MES/MRP integrations for production planning accuracy",
      "Supply chain visibility and vendor collaboration tools",
      "Automated quality-control workflows and traceability",
      "Shopfloor scheduling optimization to increase throughput",
      "Energy and resource monitoring for operational efficiency",
    ],
    emphasisLine: "Operational clarity drives industrial growth.",
  },
  {
    title: "Education",
    headline: "Education & Research Platforms",
    description:
      "We design digital learning platforms that support collaboration, engagement, and scale.",
    valuePoints: [
      "Scalable LMS with course authoring and delivery tools",
      "Assessment, grading automation, and academic integrity checks",
      "Collaborative learning spaces and group-workflows",
      "Content management and versioning for curriculum teams",
      "Learner analytics to track outcomes and personalize learning",
      "Integrations with SIS, calendaring, and single-sign-on (SSO)",
      "Offline-first and low-bandwidth support for wider reach",
    ],
    emphasisLine: "Education platforms shape future generations.",
  },
];

export default function SolutionsPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =====================
     WINDOW SCROLL PROGRESS
  ===================== */
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(total > 0 ? scrolled / total : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================
     ACTIVE SECTION
  ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "0px 0px -30% 0px",
      },
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="solutionspage">
      <header className="solutionspage-header">
        <h1>Dot Phenix Solutions</h1>
        <p className="solutionspage-intro">
          We design and deliver secure, scalable digital platforms that help
          organizations operate efficiently, grow confidently, and adapt without
          friction.
        </p>
      </header>

      <section className="solutionspage-wrapper">
        <div className="solutionspage-layout">
          {/* LEFT RAIL */}
          <aside className="solutionspage-rail">
            <div className="rail-line" />
            <div
              className="rail-indicator"
              style={{ transform: `translateY(${progress * 60}vh)` }}
            />
          </aside>

          {/* CONTENT */}
          <section className="solutions-wrapper">
            {sections.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                className={`solution-slide ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="solution-content">
                  <span className="solution-tag">{item.title}</span>
                  <h2 className="solution-headline">{item.headline}</h2>
                  <p className="solution-description">{item.description}</p>

                  <ul className="solution-points">
                    {item.valuePoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <button
                    className="solutionspage-button"
                    onClick={() =>
                      window.dispatchEvent(new Event("open-sidebar"))
                    }
                  >
                    Request a Demo →
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <WhyChoose />
    </main>
  );
}
