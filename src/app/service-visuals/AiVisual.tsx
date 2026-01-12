"use client";

import React from "react";
import "./servicevisuals.css";

function AiVisual() {
  return (
    <div className="ai-visual">
      <div className="ai-agent-panel">
        {/* Header */}
        <div className="ai-agent-header">
          <h4>AI Agent Network</h4>
          <span className="ai-agent-status">Connected</span>
        </div>

        {/* Agent Network */}
        <div className="ai-agent-network">
          <svg viewBox="0 0 300 200" aria-hidden="true">
            {/* Connections */}
            <line x1="150" y1="40" x2="80" y2="100" />
            <line x1="150" y1="40" x2="220" y2="100" />
            <line x1="80" y1="100" x2="220" y2="100" />
            <line x1="80" y1="100" x2="150" y2="160" />
            <line x1="220" y1="100" x2="150" y2="160" />

            {/* Central Orchestrator */}
            <circle cx="150" cy="40" r="20" className="agent-core" />
            <text x="150" y="44" textAnchor="middle">
              AI
            </text>

            {/* Agent Nodes */}
            <circle cx="80" cy="100" r="18" className="agent-node" />
            <text x="80" y="104" textAnchor="middle">
              A1
            </text>

            <circle cx="220" cy="100" r="18" className="agent-node" />
            <text x="220" y="104" textAnchor="middle">
              A2
            </text>

            <circle cx="150" cy="160" r="18" className="agent-node" />
            <text x="150" y="164" textAnchor="middle">
              A3
            </text>
          </svg>
        </div>

        {/* Capabilities */}
        <div className="ai-agent-tags">
          <span>Task Delegation</span>
          <span>Reasoning</span>
          <span>Automation</span>
        </div>
      </div>
    </div>
  );
}

export default AiVisual;
