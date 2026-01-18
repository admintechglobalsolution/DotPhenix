"use client";

import React from "react";
import "./research.css";
import { ReactNode } from "react";

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
              n<span className="navi-accent">A</span>v
              <span className="navi-accent">I</span>
            </span>
          }
          description="A generative intelligence platform designed for reasoning, adaptation, and real-world execution."
          points={[
            "LLM orchestration and reasoning pipelines",
            "Retrieval-augmented generation (RAG)",
            "Evaluation, alignment, and safety",
            "Multi-modal intelligence systems",
          ]}
          variant="generative"
        />

        <ResearchBlock
          title="AI Agents"
          description="Autonomous agents that collaborate, reason, and execute over long horizons."
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
      </section>
    </main>
  );
}

function ResearchBlock({
  title,
  description,
  points,
  variant,
}: {
  title: ReactNode;
  description: string;
  points: string[];
  variant: "generative" | "agents" | "os";
}) {
  return (
    <div className="research-block">
      {/* LEFT */}
      <div className="research-text">
        <h2>{title}</h2>
        <p className="research-desc">{description}</p>
        <ul className="research-points">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <button
          className="research-btn"
          onClick={() => window.dispatchEvent(new Event("open-sidebar"))}
        >
          Request a Demo →
        </button>
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
            {/* NAVI AI */}
            {variant === "generative" && (
              <div className="navi-chat">
                <div className="navi-messages">
                  <div className="msg human">
                    Design a global enterprise AI rollout strategy.
                  </div>
                  <div className="msg ai">
                    I can structure architecture, rollout phases, governance,
                    and adoption playbooks. Should this prioritize speed or
                    compliance?
                  </div>
                  <div className="msg human">
                    Compliance-first with phased deployment.
                  </div>
                  <div className="msg ai">
                    Understood. I’ll generate a compliant rollout plan with
                    staged activation, audit checkpoints, and KPIs.
                  </div>
                  <div className="msg human">
                    Include security reviews, data residency controls, and
                    operational readiness checks.
                  </div>

                  <div className="msg ai">
                    Acknowledged. I’ll embed mandatory security assessments,
                    regional data residency enforcement, and operational
                    readiness reviews at each phase of the rollout.
                  </div>

                  <div className="msg human">
                    How will access control and auditability be handled across
                    regions?
                  </div>

                  <div className="msg ai">
                    The platform will enforce role-based access control,
                    centralized identity management, and immutable audit logs,
                    with region-specific compliance reporting aligned to
                    regulatory requirements.
                  </div>

                  <div className="msg human">
                    Provide measurable success metrics for each deployment
                    phase.
                  </div>

                  <div className="msg ai">
                    Each phase will include KPIs covering compliance adherence,
                    system reliability, user adoption, security posture, and
                    operational efficiency, with automated reporting dashboards
                    for leadership visibility.
                  </div>
                </div>

                <div className="navi-input">
                  <span className="navi-icon left">📎</span>

                  <input
                    type="text"
                    className="navi-field"
                    placeholder="Message nAvI…"
                  />

                  <span className="navi-icon right">🎙</span>
                </div>
              </div>
            )}
            {/* AI AGENTS */}
            {variant === "agents" && (
              <div className="agents-console">
                <div className="agents-header">
                  <span>Multi-Agent Runtime</span>
                  <span className="agents-status">● Connected</span>
                </div>

                <div className="agents-body flow scroll">
                  {/* Intent */}
                  <div className="agent-step compact">
                    <div className="step-top">
                      <span className="step-agent">Intent Agent</span>
                      <span className="step-state success">Intent Parsed</span>
                    </div>

                    <div className="step-content">
                      <span className="step-label">User request received:</span>
                      <span className="step-value">
                        “Book a flight from NYC to London”
                      </span>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="agent-step compact">
                    <div className="step-top">
                      <span className="step-agent">Search Agent</span>
                      <span className="step-state success">
                        42 Options Found
                      </span>
                    </div>

                    <div className="step-content">
                      <span className="step-label">Searching:</span>
                      <span className="step-value">
                        Airlines, routes, schedules
                      </span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="agent-step compact">
                    <div className="step-top">
                      <span className="step-agent">Pricing Agent</span>
                      <span className="step-state success">
                        Best Fare Selected
                      </span>
                    </div>

                    <div className="step-content">
                      <span className="step-label">Evaluating:</span>
                      <span className="step-value">
                        Fare rules, baggage, cancellation
                      </span>
                    </div>
                  </div>

                  {/* Booking */}
                  <div className="agent-step compact">
                    <div className="step-top">
                      <span className="step-agent">Booking Agent</span>
                      <span className="step-state success">
                        Payment Approved
                      </span>
                    </div>

                    <div className="step-content">
                      <span className="step-label">Processing:</span>
                      <span className="step-value">
                        Seat reservation & payment
                      </span>
                    </div>
                  </div>

                  {/* Done */}
                  <div className="agent-step compact done">
                    <div className="step-top">
                      <span className="step-agent">Confirmation Agent</span>
                      <span className="step-state final">BOOKED ✔</span>
                    </div>

                    <div className="step-content">
                      <span className="step-label">Output:</span>
                      <span className="step-value">
                        E-ticket generated & sent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI OS */}
            {variant === "os" && (
              <div className="ai-os-terminal">
                <div className="ai-os-header">
                  <span>root@navi-os:/ai-kernel</span>
                  <span className="ai-os-status">AI ONLINE</span>
                </div>

                <div className="ai-os-body">
                  <div className="ai-os-line">
                    <span className="ai-os-prompt">navi@os $</span>
                    boot --ai-kernel
                  </div>

                  <div className="ai-os-output">
                    ✔ Cognitive scheduler active
                    <br />
                    ✔ Neural execution graph loaded
                    <br />✔ Secure sandbox initialized
                  </div>

                  <div className="ai-os-line">
                    <span className="ai-os-prompt">navi@os $</span>
                    run agent://planner
                  </div>

                  <div className="ai-os-output ai-os-ai">
                    Planner Agent running
                    <br />
                    Mode: Human-AI Co-processing
                  </div>

                  <div className="ai-os-line">
                    <span className="ai-os-prompt">navi@os $</span>
                    <span className="cursor" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
