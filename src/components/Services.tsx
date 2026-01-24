"use client";

import { Card, Container, Text } from "./ui";
import {
  Globe,
  Smartphone,
  Layers,
  BrainCircuit,
  Megaphone,
  Building2,
} from "lucide-react";
import "./services.css";
function Services() {
  return (
    <section className="services-section">
      <Container>
        <Text as="h2" className="services-title">
          Dot Phenix Services
        </Text>

        <div className="services-grid">
          <Card className="service-card">
            <div className="service-row">
              <Globe className="service-icon" />
              <h3>Web Application Development</h3>
            </div>
            <p>
              We design and develop scalable, secure, and high-performance web
              applications tailored to modern business needs.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Smartphone className="service-icon" />
              <h3>Mobile Application Development</h3>
            </div>
            <p>
              Native and cross-platform mobile applications engineered for
              usability, performance, security, and growth.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Layers className="service-icon" />
              <h3>SaaS Product Development</h3>
            </div>
            <p>
              End-to-end SaaS product development from architecture to
              deployment, optimized for scalability and reliability.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <BrainCircuit className="service-icon" />
              <h3>AI & Intelligent Automation</h3>
            </div>
            <p>
              AI-powered systems that analyze data, automate workflows, and
              enable intelligent, insight-driven decisions.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Megaphone className="service-icon" />
              <h3>Digital Marketing</h3>
            </div>
            <p>
              Data-driven digital marketing strategies combined with automation
              to increase visibility, engagement, and growth.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Building2 className="service-icon" />
              <h3>Payroll & Enterprise Systems</h3>
            </div>
            <p>
              Secure payroll and enterprise systems built for compliance,
              operational efficiency, and long-term scalability.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Services;
