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
   DATA (8 INDUSTRY SECTIONS)
===================== */
const sections: Section[] = [
  {
    title: "Technology",
    headline: "Technology & Product Platforms",
    description:
      "We design technology platforms that become the foundation of modern digital businesses — scalable, secure, and built for continuous growth.",
    valuePoints: [
      "Accelerates product launches and iterations",
      "Supports rapid scaling without re-architecture",
      "Reduces long-term technical and operational costs",
      "Transforms ideas into sustainable digital products",
    ],
    emphasisLine: "Strong platforms don’t support growth — they enable it.",
  },
  {
    title: "Business & Legal",
    headline: "Business Process & Legal Solutions",
    description:
      "We design systems that simplify complex business and legal workflows, improving efficiency, compliance, and decision-making.",
    valuePoints: [
      "Streamlined workflows across departments",
      "Reduced manual effort and operational risk",
      "Improved compliance and audit readiness",
      "Faster approvals and process visibility",
    ],
    emphasisLine: "Efficiency is not optional — it’s a competitive advantage.",
  },
  {
    title: "FinTech",
    headline: "Financial Services & FinTech Systems",
    description:
      "We build FinTech platforms designed for trust, performance, and regulatory readiness in high-volume financial environments.",
    valuePoints: [
      "Secure transaction and data handling",
      "High-performance systems for real-time operations",
      "Compliance-ready architecture",
      "Designed for rapid feature expansion",
    ],
    emphasisLine: "In finance, reliability defines reputation.",
  },
  {
    title: "Healthcare",
    headline: "Healthcare & Medical Systems",
    description:
      "We design healthcare systems that improve operational efficiency while maintaining the highest standards of data security and reliability.",
    valuePoints: [
      "Improved patient data accessibility",
      "Operational efficiency for medical teams",
      "Secure handling of sensitive information",
      "Systems designed for regulatory compliance",
    ],
    emphasisLine: "Healthcare systems must perform when it matters most.",
  },
  {
    title: "Insurance",
    headline: "Insurance Platforms",
    description:
      "We design insurance platforms that handle complex policies, claims, and customer journeys with speed and accuracy.",
    valuePoints: [
      "Faster claims and policy processing",
      "Improved customer experience",
      "Scalable systems for growing portfolios",
      "Reduced operational bottlenecks",
    ],
    emphasisLine: "Speed and trust define modern insurance.",
  },
  {
    title: "Retail",
    headline: "Retail & E-commerce Solutions",
    description:
      "We design retail and e-commerce systems that convert traffic into revenue and customers into loyal brand advocates.",
    valuePoints: [
      "Optimized user journeys and checkout flows",
      "Scalable systems for peak traffic periods",
      "Integrated inventory and order management",
      "Data-driven insights for smarter decisions",
    ],
    emphasisLine: "Every interaction is an opportunity to convert.",
  },
  {
    title: "Manufacturing",
    headline: "Manufacturing & Industrial Systems",
    description:
      "We design industrial platforms that connect processes, data, and teams to improve productivity and operational visibility.",
    valuePoints: [
      "Improved production visibility",
      "Reduced downtime and inefficiencies",
      "Integrated data across operations",
      "Systems designed for long-term scalability",
    ],
    emphasisLine: "Operational clarity drives industrial growth.",
  },
  {
    title: "Education",
    headline: "Education & Research Platforms",
    description:
      "We design education and research systems that support digital learning, collaboration, and knowledge growth at scale.",
    valuePoints: [
      "Engaging digital learning experiences",
      "Scalable platforms for growing audiences",
      "Secure data and content management",
      "Designed for continuous evolution",
    ],
    emphasisLine: "Education platforms shape future generations.",
  },
];

/* =====================
   COMPONENT
===================== */
export default function Solutions() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =====================
     SCROLL OBSERVER
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
        threshold: 0.25,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="solutions-wrapper">
        {sections.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            className={`solution-slide ${
              activeIndex === index ? "active" : "inactive"
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

              <p className="solution-emphasis">{item.emphasisLine}</p>
            </div>
          </div>
        ))}
      </section>

      <WhyChoose />
    </main>
  );
}
