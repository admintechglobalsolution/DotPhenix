export const metadata = {
  title: "Terms & Conditions — Dot Phenix Solutions",
  description:
    "Terms and Conditions governing the use of Dot Phenix Solutions website, products, and services.",
};

export default function TermsAndConditionsPage() {
  const effectiveDate = "January 11, 2026";

  return (
    <main className="terms-wrapper">
      <a className="skip-link" href="#terms-content">
        Skip to content
      </a>

      {/* =====================
         HEADER
      ====================== */}
      <header className="terms-header">
        <h1>Terms &amp; Conditions</h1>
        <p className="muted">
          Effective date: <strong>{effectiveDate}</strong>
        </p>
        <p className="lead">
          These Terms &amp; Conditions govern your access to and use of the
          website, products, platforms, and services provided by Dot Phenix
          Solutions. By accessing or using our services, you agree to be bound
          by these terms.
        </p>
      </header>

      {/* =====================
         TABLE OF CONTENTS
      ====================== */}
      <article id="terms-content" className="terms-content">
        {/* =====================
           ACCEPTANCE
        ====================== */}
        <section id="acceptance" className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using any part of the Dot Phenix
            Solutions website or services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms &amp; Conditions
            and all applicable laws and regulations.
          </p>
        </section>

        {/* =====================
           SERVICES
        ====================== */}
        <section id="services" className="terms-section">
          <h2>2. Scope of Services</h2>
          <p>
            Dot Phenix Solutions provides digital transformation, software
            development, AI-driven automation, SaaS platforms, and related
            technology services. The scope, deliverables, timelines, and pricing
            for specific services may be governed by separate written agreements
            or statements of work.
          </p>
        </section>

        {/* =====================
           USER RESPONSIBILITY
        ====================== */}
        <section id="user" className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Use the services only for lawful and authorized purposes</li>
            <li>Provide accurate and complete information when required</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>
              Not attempt to disrupt, exploit, or misuse systems, data, or
              infrastructure
            </li>
          </ul>
        </section>

        {/* =====================
           ACCOUNTS & SECURITY
        ====================== */}
        <section id="accounts" className="terms-section">
          <h2>4. Accounts &amp; Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities conducted under your
            account. Dot Phenix Solutions shall not be responsible for
            unauthorized access resulting from user negligence, compromised
            credentials, or third-party actions beyond our reasonable control.
          </p>
        </section>

        {/* =====================
           INTELLECTUAL PROPERTY
        ====================== */}
        <section id="ip" className="terms-section">
          <h2>5. Intellectual Property</h2>
          <p>
            All content, software, trademarks, logos, and intellectual property
            associated with Dot Phenix Solutions are owned by or licensed to us
            and are protected by applicable intellectual property laws. No
            rights are granted except as expressly stated in writing.
          </p>
        </section>

        {/* =====================
           PAYMENTS
        ====================== */}
        <section id="payments" className="terms-section">
          <h2>6. Payments &amp; Billing</h2>
          <p>
            Fees, billing cycles, and payment terms are defined in applicable
            agreements or invoices. Failure to make timely payments may result
            in suspension or termination of services.
          </p>
        </section>

        {/* =====================
           LIMITATION OF LIABILITY
        ====================== */}
        <section id="liability" className="terms-section">
          <h2>7. Limitation of Liability &amp; User Risk</h2>
          <p>
            While Dot Phenix Solutions employs industry-standard security and
            operational safeguards, no digital system can be entirely secure.
            Use of our services is at your own risk.
          </p>
          <p>
            To the maximum extent permitted by law, Dot Phenix Solutions shall
            not be liable for any direct, indirect, incidental, consequential,
            or punitive damages arising from unauthorized access, hacking, data
            loss, service interruptions, or misuse of the platform, whether
            caused by user actions, third parties, or external events.
          </p>
        </section>

        {/* =====================
           DISCLAIMER
        ====================== */}
        <section id="disclaimer" className="terms-section">
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            Services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, whether
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
        </section>

        {/* =====================
           TERMINATION
        ====================== */}
        <section id="termination" className="terms-section">
          <h2>9. Termination</h2>
          <p>
            Dot Phenix Solutions reserves the right to suspend or terminate
            access to services at its discretion for violations of these terms,
            non-payment, or unlawful activity.
          </p>
        </section>

        {/* =====================
           GOVERNING LAW
        ====================== */}
        <section id="law" className="terms-section">
          <h2>10. Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in
            accordance with the laws applicable in India, without regard to
            conflict of law principles.
          </p>
        </section>

        {/* =====================
           CHANGES
        ====================== */}
        <section id="changes" className="terms-section">
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time.
            Continued use of the services after changes become effective
            constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* =====================
           CONTACT
        ====================== */}
        <section id="contact" className="terms-section">
          <h2>12. Contact Information</h2>
          <ul>
            <li>
              Email: <a href="mailto:info@dotphenix.com">info@dotphenix.com</a>
            </li>
            <li>
              Phone: <a href="tel:+919346622679">+91 9346622679</a>
            </li>
            <li>Address: Bangalore, Karnataka, India</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
