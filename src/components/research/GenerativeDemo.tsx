"use client";
import "./research-demos.css";
export default function GenerativeDemo() {
  return (
    <div className="navi-chat">
      <div className="navi-messages">
        <div className="msg human">
          Design a global enterprise AI rollout strategy.
        </div>

        <div className="msg ai">
          I can structure architecture, rollout phases, governance, and adoption
          playbooks. Should this prioritize speed or compliance?
        </div>

        <div className="msg human">
          Compliance-first with phased deployment.
        </div>

        <div className="msg ai">
          Understood. I’ll generate a compliant rollout plan with staged
          activation, audit checkpoints, and KPIs.
        </div>

        <div className="msg human">
          Include security reviews and data residency controls.
        </div>

        <div className="msg ai">
          Security assessments, regional data residency enforcement, and
          operational readiness reviews will be embedded at each phase.
        </div>

        <div className="msg human">
          How will access control and auditing work globally?
        </div>

        <div className="msg ai">
          Role-based access control, centralized identity, and immutable audit
          logs with region-specific compliance reporting.
        </div>
      </div>

      <div className="navi-input">
        <span className="navi-icon left">📎</span>
        <input
          type="text"
          className="navi-field"
          placeholder="Message nAvI…"
          disabled
        />
        <span className="navi-icon right">🎙</span>
      </div>
    </div>
  );
}
