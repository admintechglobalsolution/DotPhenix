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
              Scalable, secure, and high-performance web platforms tailored to
              modern business needs.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Smartphone className="service-icon" />
              <h3>Mobile Application Development</h3>
            </div>
            <p>
              Native and cross-platform mobile apps designed for usability,
              speed, and growth.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Layers className="service-icon" />
              <h3>SaaS Product Development</h3>
            </div>
            <p>
              End-to-end SaaS solutions from architecture to deployment, built
              for scale and reliability.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <BrainCircuit className="service-icon" />
              <h3>AI & Intelligent Automation</h3>
            </div>
            <p>
              AI-powered systems that analyze data, automate workflows, and
              drive intelligent decision-making.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Megaphone className="service-icon" />
              <h3>Digital Marketing</h3>
            </div>
            <p>
              Data-driven digital marketing strategies integrated with
              automation for measurable growth.
            </p>
          </Card>

          <Card className="service-card">
            <div className="service-row">
              <Building2 className="service-icon" />
              <h3>Payroll & Enterprise Systems</h3>
            </div>
            <p>
              Robust payroll and enterprise platforms with compliance, security,
              and operational efficiency.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Services;
