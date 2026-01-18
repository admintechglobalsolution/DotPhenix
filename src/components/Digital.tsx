"use client";

import { Card, Container, Text } from "./ui";
import {
  Search,
  MousePointerClick,
  Share2,
  Mail,
  Users,
  Star,
} from "lucide-react";

import "./digital.css";

function Digital() {
  return (
    <section className="digital-marketing-section">
      <Container>
        <Text as="h2" className="digital-marketing-title">
          Digital Marketing
        </Text>

        <div className="digital-marketing-grid">
          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <Search className="digital-marketing-icon" />
              <h3>Search Engine Optimization (SEO)</h3>
            </div>
            <p>
              Content strategies designed to improve search visibility, keyword
              rankings, site performance.
            </p>
          </Card>

          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <MousePointerClick className="digital-marketing-icon" />
              <h3>Pay-Per-Click Advertising (PPC)</h3>
            </div>
            <p>
              ROI-focused paid campaigns with smart targeting, bidding, and
              conversion tracking.
            </p>
          </Card>

          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <Share2 className="digital-marketing-icon" />
              <h3>Social Media Marketing</h3>
            </div>
            <p>
              Strategic content and campaigns across social platforms to grow
              engagement and brand trust.
            </p>
          </Card>

          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <Mail className="digital-marketing-icon" />
              <h3>Email Marketing</h3>
            </div>
            <p>
              Automated email campaigns and lead nurturing flows that increase
              retention and conversions.
            </p>
          </Card>

          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <Users className="digital-marketing-icon" />
              <h3>Affiliate Marketing</h3>
            </div>
            <p>
              Performance-based affiliate programs to scale reach and revenue
              through trusted partners.
            </p>
          </Card>

          <Card className="digital-marketing-card">
            <div className="digital-marketing-row">
              <Star className="digital-marketing-icon" />
              <h3>Online Reputation Management</h3>
            </div>
            <p>
              Brand monitoring, review management, and credibility-building
              strategies.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Digital;
