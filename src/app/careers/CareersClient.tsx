"use client";

import { useEffect } from "react";

export default function CareersClient() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="careers-wrapper">
      {/* =====================
         HEADER
      ====================== */}
      <header className="careers-header reveal fade-up">
        <h1>Careers at Dot Phenix Solutions</h1>
        <p>
          Dot Phenix Solutions is growing—join us to grow your career while
          building impactful digital ecosystems for the world.
        </p>

        <p className="careers-sub">
          We welcome experienced professionals, fresh graduates, and interns who
          are passionate about technology, innovation, and building real-world
          digital products in a collaborative environment.
        </p>
      </header>

      {/* =====================
         OPEN POSITIONS
      ====================== */}
      <section className="careers-list">
        {/* Web */}
        <article className="career-role reveal slide-left">
          <h2>Web Application Developer</h2>
          <p className="role-desc">
            Design, build, and maintain scalable web applications that power
            modern digital experiences. You will work across the full web stack
            to deliver secure, high-performance solutions in collaboration with
            cross-functional teams.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop modern, responsive web applications</li>
            <li>Translate UI/UX designs into reusable components</li>
            <li>Integrate frontend applications with backend APIs</li>
            <li>Ensure performance, security, and scalability</li>
            <li>Write clean, maintainable, and documented code</li>
            <li>Debug and resolve functional and performance issues</li>
            <li>Continuously improve existing systems</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>React, Next.js</li>
            <li>TypeScript, JavaScript</li>
            <li>HTML5, CSS3</li>
            <li>REST APIs</li>
            <li>Git, CI/CD</li>
          </ul>
        </article>

        {/* Mobile */}
        <article className="career-role reveal slide-right">
          <h2>Mobile Application Developer</h2>
          <p className="role-desc">
            Build high-quality mobile applications that deliver seamless user
            experiences across Android and iOS platforms, focusing on
            performance, security, and long-term scalability.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop native and cross-platform mobile applications</li>
            <li>Convert UI/UX designs into responsive mobile interfaces</li>
            <li>Integrate mobile apps with backend services</li>
            <li>Optimize performance, memory usage, and responsiveness</li>
            <li>Implement secure authentication and data protection</li>
            <li>Fix crashes and production issues</li>
            <li>Participate in testing and release cycles</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>React Native / Flutter</li>
            <li>Android SDK / iOS SDK</li>
            <li>REST & GraphQL APIs</li>
            <li>Firebase</li>
            <li>App deployment tools</li>
          </ul>
        </article>

        {/* SaaS */}
        <article className="career-role reveal slide-left">
          <h2>SaaS Product Engineer</h2>
          <p className="role-desc">
            Build and scale SaaS platforms that serve global customers. This
            role focuses on designing robust architectures, developing core
            services, and ensuring reliability across the product lifecycle.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Design scalable, multi-tenant SaaS architectures</li>
            <li>Develop backend services and APIs</li>
            <li>Implement authentication and authorization</li>
            <li>Build subscription and billing systems</li>
            <li>Ensure system reliability and uptime</li>
            <li>Optimize database performance</li>
            <li>Collaborate across engineering teams</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Node.js</li>
            <li>AWS / GCP / Azure</li>
            <li>PostgreSQL / MongoDB</li>
            <li>Docker</li>
            <li>Monitoring tools</li>
          </ul>
        </article>

        {/* AI */}
        <article className="career-role reveal slide-right">
          <h2>AI & Intelligent Automation Engineer</h2>
          <p className="role-desc">
            Design and implement AI-powered automation systems that streamline
            workflows, analyze data, and enable intelligent decision-making for
            real-world business challenges.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop AI-driven automation pipelines</li>
            <li>Build data processing workflows</li>
            <li>Integrate machine-learning models into applications</li>
            <li>Monitor and improve model performance</li>
            <li>Deploy AI systems to cloud platforms</li>
            <li>Ensure ethical and secure AI usage</li>
            <li>Collaborate with engineering teams</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Python</li>
            <li>Machine-learning frameworks</li>
            <li>Data pipelines</li>
            <li>APIs</li>
            <li>Cloud AI services</li>
          </ul>
        </article>

        {/* Marketing */}
        <article className="career-role reveal slide-left">
          <h2>Digital Marketing Specialist</h2>
          <p className="role-desc">
            Drive measurable business growth through data-driven digital
            marketing strategies, combining creativity, analytics, and
            automation to build scalable campaigns.
          </p>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Plan and execute multi-channel marketing campaigns</li>
            <li>Analyze campaign performance and metrics</li>
            <li>Optimize SEO, SEM, and content strategies</li>
            <li>Manage marketing automation workflows</li>
            <li>Collaborate with design and product teams</li>
            <li>Create brand-aligned content</li>
            <li>Continuously improve marketing ROI</li>
          </ul>

          <h3>Tools & Technologies</h3>
          <ul className="skills">
            <li>Google Analytics</li>
            <li>SEO tools</li>
            <li>Marketing automation platforms</li>
            <li>CMS</li>
          </ul>
        </article>
      </section>

      {/* =====================
         APPLY
      ====================== */}
      <section className="careers-cta reveal fade-up">
        <div className="careers-cols">
          {/* Left column */}
          <div className="careers-col">
            <h2>Ready to Build the Future With Us?</h2>
          </div>

          {/* Right column */}
          <div className="careers-col careers-col-action">
            <p className="cta-inline">
              Send your resume and portfolio to{" "}
              <a href="mailto:info@dotphenix.com">info@dotphenix.com</a>
            </p>

            <a href="mailto:info@dotphenix.com" className="cta-button">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
