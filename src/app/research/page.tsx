"use client";

import React from "react";
import "./research.css";

export default function ResearchPage() {
  return (
    <main className="research-page">
      {/* HERO */}
      <section className="research-hero">
        <div className="research-hero-content">
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

      {/* SECTIONS */}
      <section className="research-sections">
        <ResearchBlock
          title={
            <span className="navi-title">
              n<span className="ai-highlight">A</span>v
              <span className="ai-highlight">I</span>
            </span>
          }
          description="NAVI AI is a generative intelligence platform engineered with advanced reasoning capabilities, continuous adaptation, and seamless integration into real-world workflows."
          points={[
            "LLM orchestration and reasoning pipelines",
            "Retrieval-augmented generation (RAG)",
            "Evaluation, alignment, and safety research",
            "Multi-modal generation across text and data",
          ]}
          variant="generative"
        />

        <ResearchBlock
          title="AI Agents"
          description="Autonomous agents capable of collaboration and long-horizon task execution."
          points={[
            "Multi-agent coordination protocols",
            "Autonomous planning and delegation",
            "Emergent collective intelligence",
            "Resilient communication models",
          ]}
          variant="agents"
        />

        <ResearchBlock
          title="AI Operating System"
          description="AI-native operating systems with intelligence embedded at execution level."
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
          description="Linux internals combined with adaptive AI-driven optimization."
          points={[
            "AI-driven resource optimization",
            "Predictive performance tuning",
            "Low-latency intelligence",
            "High-reliability infrastructure",
          ]}
          variant="linux"
        />
      </section>
    </main>
  );
}

/* =====================
   BLOCK
===================== */
function ResearchBlock({
  title,
  description,
  points,
  variant,
}: {
  title: React.ReactNode;
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
            {variant === "generative" ? (
              <div className="navi-chat">
                {/* HEADER */}

                {/* MESSAGES */}
                <div className="navi-messages">
                  <div className="msg human">
                    Create a high-impact product launch campaign using text,
                    visuals, and video.
                  </div>

                  <div className="msg ai">
                    I can generate integrated content across copy, visuals, and
                    short-form video. What audience and brand tone should I
                    follow?
                  </div>

                  <div className="msg human">
                    Target enterprise leaders with a clean, premium brand tone.
                  </div>

                  <div className="msg ai">
                    Understood. I’ll create refined messaging, visual concepts,
                    and video outlines, with human-in-the-loop review for
                    quality and brand alignment.
                  </div>
                </div>

                {/* INPUT */}
                <div className="navi-input">
                  <div className="navi-tools">
                    <span title="Voice">🎙</span>
                    <span title="Text">✍️</span>
                    <span title="Image">🖼</span>
                    <span title="Video">🎥</span>
                    <span title="Files">📎</span>
                  </div>
                  <div className="navi-placeholder">Message NAVI…</div>
                </div>
              </div>
            ) : (
              <div className="monitor-content" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
