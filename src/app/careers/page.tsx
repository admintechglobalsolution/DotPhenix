import "./careers.css";

export const metadata = {
  title: "Careers — Dot Phenix Solutions",
  description:
    "Explore career opportunities at Dot Phenix Solutions across Web, Mobile, SaaS, AI Automation, and Digital Marketing.",
};

export default function CareersPage() {
  return (
    <main className="careers-wrapper">
      {/* =====================
         HEADER
      ====================== */}
      <header className="careers-header">
        <h1>Careers at Dot Phenix Solutions</h1>
        <p>
          Join Dot Phenix Solutions and work on cutting-edge digital platforms,
          AI-driven automation, and scalable enterprise systems that impact
          businesses globally.
        </p>
      </header>

      {/* =====================
         OPEN POSITIONS
      ====================== */}
      <section className="careers-list">
        {/* Web */}
        <article className="career-role">
          <h2>Web Application Developer</h2>
          <p className="role-desc">
            Build scalable, secure, and high-performance web platforms tailored
            to modern business requirements.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Design and develop modern web applications</li>
            <li>Collaborate with UI/UX and backend teams</li>
            <li>Ensure performance, security, and scalability</li>
            <li>Maintain and enhance existing systems</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>React, Next.js</li>
            <li>TypeScript, JavaScript (ES6+)</li>
            <li>HTML5, CSS3</li>
            <li>REST APIs</li>
            <li>Git, CI/CD pipelines</li>
          </ul>
        </article>

        {/* Mobile */}
        <article className="career-role">
          <h2>Mobile Application Developer</h2>
          <p className="role-desc">
            Develop native and cross-platform mobile applications focused on
            usability, speed, and long-term growth.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Build mobile applications for Android and iOS</li>
            <li>Integrate mobile apps with backend services</li>
            <li>Optimize app performance and responsiveness</li>
            <li>Participate in release and deployment cycles</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>React Native / Flutter</li>
            <li>Android SDK / iOS SDK</li>
            <li>REST & GraphQL APIs</li>
            <li>Firebase / App analytics</li>
            <li>Git, App Store deployment tools</li>
          </ul>
        </article>

        {/* SaaS */}
        <article className="career-role">
          <h2>SaaS Product Engineer</h2>
          <p className="role-desc">
            Build end-to-end SaaS products from architecture to deployment,
            focusing on scalability and reliability.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Design scalable SaaS architectures</li>
            <li>Develop multi-tenant applications</li>
            <li>Implement subscription and billing logic</li>
            <li>Ensure platform reliability and uptime</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Node.js, APIs</li>
            <li>Cloud platforms (AWS / GCP / Azure)</li>
            <li>Databases (PostgreSQL, MongoDB)</li>
            <li>Docker, CI/CD</li>
            <li>Monitoring & logging tools</li>
          </ul>
        </article>

        {/* AI */}
        <article className="career-role">
          <h2>AI & Intelligent Automation Engineer</h2>
          <p className="role-desc">
            Build AI-powered systems that automate workflows, analyze data, and
            drive intelligent decision-making.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop AI-driven automation workflows</li>
            <li>Analyze and process structured data</li>
            <li>Integrate AI models into applications</li>
            <li>Optimize and monitor AI system performance</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Python</li>
            <li>Machine Learning frameworks</li>
            <li>Data processing pipelines</li>
            <li>APIs and system integrations</li>
            <li>Cloud AI services</li>
          </ul>
        </article>

        {/* Marketing */}
        <article className="career-role">
          <h2>Digital Marketing Specialist</h2>
          <p className="role-desc">
            Drive data-driven digital marketing strategies integrated with
            automation for measurable business growth.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Plan and execute digital marketing campaigns</li>
            <li>Analyze campaign performance and metrics</li>
            <li>Optimize SEO and content strategies</li>
            <li>Collaborate with product and design teams</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Google Analytics & Search Console</li>
            <li>SEO & keyword research tools</li>
            <li>Marketing automation platforms</li>
            <li>Content management systems</li>
          </ul>
        </article>
      </section>

      {/* =====================
         APPLY
      ====================== */}
      <section className="careers-cta">
        <h2>Ready to Build the Future?</h2>
        <p>
          Send your resume and portfolio to our team and take the next step in
          your career with Dot Phenix Solutions.
        </p>
        <a href="mailto:careers@dotphenix.com" className="cta-button">
          Apply Now
        </a>
      </section>
    </main>
  );
}
