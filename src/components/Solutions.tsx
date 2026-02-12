"use client";

import { Card, Container, Text } from "./ui";
import "./solutions.css";

export default function Solutions() {
  return (
    <section className="solutions-section">
      <Container>
        <Text as="h2" className="solutions-title">
          Do More With Us
        </Text>

        <div className="solutions-layout">
          <div className="solutions-list">
            <Card className="solution-item">
              Technology & Product Platforms
            </Card>
            <Card className="solution-item">
              Business Process & Legal Solutions
            </Card>
            <Card className="solution-item">
              Financial Services & FinTech Systems
            </Card>
            <Card className="solution-item">Healthcare & Medical Systems</Card>
          </div>

          <div className="solutions-center">
            <Text as="h3">Dot Phoenix Solutions</Text>
          </div>

          <div className="solutions-list">
            <Card className="solution-item">Insurance Platforms</Card>
            <Card className="solution-item">Retail & E-commerce Solutions</Card>
            <Card className="solution-item">
              Manufacturing & Industrial Systems
            </Card>
            <Card className="solution-item">
              Education, Training & Research Platforms
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
