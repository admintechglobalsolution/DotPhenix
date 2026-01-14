"use client";

import React from "react";
import "./research.css";

export default function ResearchPage() {
  return (
    <main className="research-page">
      {/* HERO */}
      <section className="research-hero">
        <div className="research-hero-content">
          <span className="research-tag">Advanced AI Research</span>
          <h1 className="research-title">
            Researching the Foundations of
            <br />
            Next-Generation AI Systems
          </h1>
          <p className="research-subtitle">
            We explore deep, systems-level artificial intelligence — from
            autonomous agent networks and generative reasoning to AI-native
            operating systems built close to the kernel.
          </p>
        </div>
      </section>

      {/* RESEARCH SECTIONS */}
      <section className="research-sections">
        <ResearchBlock
          title="Generative AI Systems"
          description="We design and research generative intelligence that reasons, adapts, and integrates deeply into real-world workflows."
          points={[
            "LLM orchestration and reasoning pipelines",
            "Retrieval-augmented generation (RAG)",
            "Evaluation, alignment, and safety research",
            "Multi-modal generation across text and data",
          ]}
          variant="generative"
        />

        <ResearchBlock
          title="Agent-to-Agent Intelligence"
          description="Our research focuses on autonomous agents capable of collaboration, negotiation, and long-horizon task execution."
          points={[
            "Multi-agent coordination protocols",
            "Autonomous planning and delegation",
            "Emergent collective intelligence",
            "Resilient agent communication models",
          ]}
          variant="agents"
        />

        <ResearchBlock
          title="AI Operating System"
          description="We explore AI-native operating systems where intelligence is embedded directly into system execution and control."
          points={[
            "AI-aware process scheduling",
            "Secure AI execution environments",
            "System-level intelligence primitives",
            "Human-AI co-processing models",
          ]}
          variant="os"
        />

        <ResearchBlock
          title="Linux & Systems AI"
          description="Deep systems research combining Linux internals with adaptive AI-driven optimization and observability."
          points={[
            "AI-driven resource optimization",
            "Predictive performance tuning",
            "Low-latency system intelligence",
            "High-reliability infrastructure design",
          ]}
          variant="linux"
        />
      </section>
    </main>
  );
}

/* =====================
   BLOCK COMPONENT
===================== */
function ResearchBlock({
  title,
  description,
  points,
  variant,
}: {
  title: string;
  description: string;
  points: string[];
  variant: "generative" | "agents" | "os" | "linux";
}) {
  return (
    <div className="research-block">
      {/* LEFT – TEXT */}
      <div className="research-text">
        <h2>{title}</h2>
        <p className="research-desc">{description}</p>

        <ul className="research-points">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <button className="research-btn">Request a Demo →</button>
      </div>

      {/* RIGHT – MONITOR */}
      <div className={`research-monitor ${variant}`}>
        <div className="monitor-frame">
          <div className="monitor-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="monitor-title">{title}</span>
          </div>

          <div className="monitor-body">
            <div className="monitor-content" />
          </div>
        </div>
      </div>
    </div>
  );
}
