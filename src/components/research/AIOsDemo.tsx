"use client";
import "./research-demos.css";

export default function AIOsDemo() {
  return (
    <div className="ai-os-terminal">
      <div className="ai-os-header">
        <span>root@navi-os:/ai-kernel</span>
        <span className="ai-os-status">AI ONLINE</span>
      </div>

      <div className="ai-os-body">
        <div className="ai-os-line">
          <span className="ai-os-prompt">navi@os $</span> boot --ai-kernel
        </div>

        <div className="ai-os-output">
          ✔ Cognitive scheduler initialized
          <br />
          ✔ Neural execution graph loaded
          <br />✔ Secure sandbox active
        </div>

        <div className="ai-os-line">
          <span className="ai-os-prompt">navi@os $</span> run agent://planner
        </div>

        <div className="ai-os-output ai-os-ai">Planner agent running</div>
        <div className="ai-os-output ai-os-ai">
          Mode: Human-AI Co-processing
        </div>

        <div className="ai-os-line">
          <span className="ai-os-prompt">navi@os $</span>
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
