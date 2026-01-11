import "./services.css";

export const metadata = {
  title: "Services — Dot Phenix Solutions",
  description:
    "Enterprise digital services including Web, Mobile, SaaS, AI Automation, Digital Marketing, and Payroll & Enterprise Systems.",
};

export default function ServicesPage() {
  return (
    <main className="services-wrapper">
      {/* =====================
         INTRO
      ====================== */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Dot Phenix Solutions provides end-to-end digital services that enable
          organizations to design, build, automate, and scale secure,
          intelligent, and future-ready platforms.
        </p>
      </header>

      {/* =====================
         SERVICES
      ====================== */}
      <section className="services-list">
        {/* WEB */}
        <section id="web" className="service-section">
          <h2>Web Application Development</h2>
          <p className="service-intro">
            We build scalable, secure, and high-performance web platforms
            tailored to modern business workflows and enterprise requirements.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Custom enterprise web applications</li>
            <li>Cloud-native and API-first architectures</li>
            <li>Security, performance, and scalability optimization</li>
            <li>Responsive and accessible UI/UX</li>
          </ul>
        </section>

        {/* MOBILE */}
        <section id="mobile" className="service-section">
          <h2>Mobile Application Development</h2>
          <p className="service-intro">
            We create native and cross-platform mobile applications designed for
            usability, performance, and long-term growth.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Android and iOS application development</li>
            <li>Cross-platform mobile solutions</li>
            <li>Backend and API integrations</li>
            <li>App lifecycle and store deployment</li>
          </ul>
        </section>

        {/* SAAS */}
        <section id="saas" className="service-section">
          <h2>SaaS Product Development</h2>
          <p className="service-intro">
            We help organizations build SaaS products from concept to deployment
            with a focus on scalability, reliability, and business value.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Product architecture and system design</li>
            <li>Multi-tenant SaaS platforms</li>
            <li>Subscription and billing systems</li>
            <li>Scalable cloud deployment</li>
          </ul>
        </section>

        {/* AI */}
        <section id="ai" className="service-section">
          <h2>AI & Intelligent Automation</h2>
          <p className="service-intro">
            We apply Artificial Intelligence to automate workflows, analyze
            data, and drive intelligent decision-making.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Workflow and process automation</li>
            <li>Data analysis and intelligence systems</li>
            <li>AI model integration</li>
            <li>Operational efficiency optimization</li>
          </ul>
        </section>

        {/* MARKETING */}
        <section id="marketing" className="service-section">
          <h2>Digital Marketing</h2>
          <p className="service-intro">
            We deliver data-driven digital marketing strategies integrated with
            automation for measurable business growth.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Performance and growth marketing</li>
            <li>SEO and analytics optimization</li>
            <li>Marketing automation</li>
            <li>Conversion-focused campaigns</li>
          </ul>
        </section>

        {/* ENTERPRISE */}
        <section id="enterprise" className="service-section">
          <h2>Payroll & Enterprise Systems</h2>
          <p className="service-intro">
            We build enterprise-grade payroll and internal systems designed for
            compliance, security, and operational efficiency.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Payroll processing and compliance systems</li>
            <li>Enterprise workflow automation</li>
            <li>Reporting and analytics</li>
            <li>Secure access control</li>
          </ul>
        </section>
      </section>

      {/* =====================
         CTA
      ====================== */}
      <section className="services-cta">
        <h2>Let’s Work Together</h2>
        <p>
          Partner with Dot Phenix Solutions to build secure, scalable, and
          intelligent digital platforms.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo →
        </a>
      </section>
    </main>
  );
}
