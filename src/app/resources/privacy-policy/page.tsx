export const metadata = {
  title: "Privacy Policy — Dot Phenix Solutions",
  description:
    "Privacy Policy for Dot Phenix Solutions explaining how personal data is collected, used, shared, and protected.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "January 11, 2026";

  return (
    <main className="policy-wrapper">
      <a className="skip-link" href="#policy-content">
        Skip to content
      </a>

      {/* =====================
         HEADER
      ====================== */}
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="muted">
          Effective date: <strong>{effectiveDate}</strong>
        </p>
        <p className="lead">
          This Privacy Policy explains how Dot Phenix Solutions (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;) collects, uses, shares, and protects
          personal information when you access our website, products, and
          services.
        </p>
      </header>

      {/* =====================
         TABLE OF CONTENTS
      ====================== */}

      <article id="policy-content" className="policy-content">
        <section id="collection" className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us and
            information that is collected automatically when you interact with
            our services.
          </p>

          <h3>Information you provide</h3>
          <ul>
            <li>Contact details (name, email address, phone number)</li>
            <li>Company and professional information</li>
            <li>Billing and payment details</li>
            <li>Support requests and communications</li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>Usage and interaction data</li>
            <li>Device, browser, and IP information</li>
            <li>Analytics and performance metrics</li>
          </ul>
        </section>

        <section id="use" className="policy-section">
          <h2>2. How We Use Information</h2>
          <ul>
            <li>Provide, operate, and improve our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Process transactions and subscriptions</li>
            <li>Improve security and prevent fraud</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section id="sharing" className="policy-section">
          <h2>3. Sharing &amp; Third Parties</h2>
          <p>
            We share personal information only when necessary and in the
            following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> hosting, analytics, payment,
              and operational support
            </li>
            <li>
              <strong>Legal obligations:</strong> compliance with applicable
              laws or lawful requests
            </li>
            <li>
              <strong>Business transactions:</strong> mergers, acquisitions, or
              asset transfers
            </li>
          </ul>
        </section>

        <section id="cookies" className="policy-section">
          <h2>4. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar technologies to operate our website,
            analyze usage, and improve user experience. Cookie preferences can
            be managed through browser settings.
          </p>
        </section>

        <section id="security" className="policy-section">
          <h2>5. Security</h2>
          <p>
            We apply industry-standard security measures including encryption,
            access controls, monitoring, and regular security reviews.
          </p>
        </section>

        <section id="retention" className="policy-section">
          <h2>6. Data Retention</h2>
          <p>
            Personal data is retained only for as long as necessary to fulfill
            the purposes outlined in this policy or meet legal obligations.
          </p>
        </section>

        <section id="transfers" className="policy-section">
          <h2>7. International Data Transfers</h2>
          <p>
            Data may be processed outside your country of residence. Appropriate
            safeguards are applied to ensure protection in accordance with
            applicable laws.
          </p>
        </section>

        <section id="rights" className="policy-section">
          <h2>8. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, restrict, or object to the processing of your
            personal data.
          </p>
        </section>

        <section id="legal-basis" className="policy-section">
          <h2>9. Legal Basis for Processing</h2>
          <p>
            Processing is based on consent, contractual necessity, legal
            obligations, and legitimate business interests.
          </p>
        </section>

        <section id="no-sale" className="policy-section">
          <h2>10. Sale of Personal Information</h2>
          <p>
            Dot Phenix Solutions does not sell or rent personal information and
            does not engage in cross-context behavioral advertising.
          </p>
        </section>

        <section id="children" className="policy-section">
          <h2>11. Children</h2>
          <p>
            Our services are not intended for children under 16. We do not
            knowingly collect personal data from children.
          </p>
        </section>

        <section id="contact" className="policy-section">
          <h2>12. Contact &amp; Updates</h2>
          <ul>
            <li>
              Email: <a href="mailto:info@dotphenix.com">info@dotphenix.com</a>
            </li>
            <li>
              Phone: <a href="tel:+919346622679">+91 9346622679</a>
            </li>
            <li>Address: Bangalore, Karnataka, India</li>
          </ul>
          <p>
            We may update this policy periodically. Changes will be reflected by
            updating the effective date on this page.
          </p>
        </section>
        <section id="liability" className="policy-section">
          <h2>Limitation of Liability & User Responsibility</h2>

          <p>
            While Dot Phenix Solutions implements industry-standard security
            measures to protect its systems and data, no digital platform can be
            completely secure. By using our services, you acknowledge and accept
            the inherent risks associated with online systems and digital
            operations.
          </p>

          <p>
            Dot Phenix Solutions shall not be held responsible for any loss,
            damage, unauthorized access, data breach, hacking incident, or
            misuse of information resulting from factors beyond our reasonable
            control, including but not limited to user negligence, compromised
            credentials, third-party attacks, malware, or force majeure events.
          </p>

          <p>
            Users are solely responsible for maintaining the confidentiality of
            their account credentials, implementing appropriate internal
            security controls, and ensuring lawful and appropriate use of our
            services. Any unauthorized use of accounts, systems, or data
            resulting from failure to follow security best practices shall be at
            the user’s own risk.
          </p>

          <p>
            To the maximum extent permitted by applicable law, Dot Phenix
            Solutions disclaims liability for indirect, incidental,
            consequential, or punitive damages arising from the use of, or
            inability to use, our services.
          </p>
        </section>
      </article>
    </main>
  );
}
