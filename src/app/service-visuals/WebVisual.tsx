"use client";

import "./servicevisuals.css";

export default function WebVisual() {
  return (
    <div className="web-visual">
      <div className="web-visual-frame">
        {/* HERO BAR */}
        <div className="web-visual-header">
          <div className="web-visual-brand">DotPhenix</div>
          <nav className="web-visual-nav">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </nav>
        </div>

        {/* HERO CONTENT */}
        <div className="web-visual-hero">
          <h3>Build Faster. Scale Smarter.</h3>
          <p>
            Enterprise-grade web applications designed for performance,
            security, and long-term growth.
          </p>

          <div className="web-visual-actions">
            <button className="web-visual-primary">Get Started</button>
            <button className="web-visual-secondary">View Work</button>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="web-visual-features">
          <div className="web-visual-feature">
            <span className="web-visual-feature-title">Scalable</span>
            <span className="web-visual-feature-desc">Cloud-native</span>
          </div>

          <div className="web-visual-feature">
            <span className="web-visual-feature-title">Secure</span>
            <span className="web-visual-feature-desc">Enterprise security</span>
          </div>

          <div className="web-visual-feature">
            <span className="web-visual-feature-title">Performant</span>
            <span className="web-visual-feature-desc">Optimized for speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
