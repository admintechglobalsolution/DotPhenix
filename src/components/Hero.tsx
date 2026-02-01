"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Button, Text, Container } from "./ui";
import "./hero.css";

const ModelViewer = dynamic(
  async () => {
    await import("@google/model-viewer");

    return function Viewer() {
      return React.createElement("model-viewer", {
        src: "/models/robot.glb",
        autoplay: true,
        "animation-name": "*",
        loading: "lazy",
        exposure: 1,
        "environment-image": "neutral",
        style: { width: "100%", height: "100%", display: "block" },
      });
    };
  },
  { ssr: false },
);

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowModel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (visualRef.current) observer.observe(visualRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <Container>
        <div className="hero-inner">
          <div className="hero-content">
            <Text as="h1" className="hero-title">
              <span className="hero-accent">AI-Driven</span>
              <br />
              Digital Automation
            </Text>

            <Text className="hero-description">
              Dot Phoenix Solutions is a platform that applies Artificial
              Intelligence to automate and scale digital operations, enabling
              organizations to move from Idea to Deployment with Speed, Scale,
              and Intelligence.
            </Text>

            <Button
              className="hero-button"
              onClick={() => window.dispatchEvent(new Event("open-sidebar"))}
            >
              Request a Demo →
            </Button>
          </div>

          <div ref={visualRef} className="hero-visual">
            {showModel ? (
              <ModelViewer />
            ) : (
              <div className="model-placeholder">Loading 3D…</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
