"use client";
import "./research-demos.css";

export default function AgentsDemo() {
  return (
    <div className="agents-console">
      <div className="agents-header">
        <span>Multi-Agent Runtime</span>
        <span className="agents-status">● Connected</span>
      </div>

      <div className="agents-body flow scroll">
        <div className="agent-step compact">
          <div className="step-top">
            <span className="step-agent">Intent Agent</span>
            <span className="step-state success">Intent Parsed</span>
          </div>

          <div className="step-content">
            <span className="step-label">User request:</span>
            <span className="step-value">
              “Book a flight from NYC to London”
            </span>
          </div>
        </div>

        <div className="agent-step compact">
          <div className="step-top">
            <span className="step-agent">Search Agent</span>
            <span className="step-state success">42 Options Found</span>
          </div>

          <div className="step-content">
            <span className="step-label">Searching:</span>
            <span className="step-value">Airlines, routes, schedules</span>
          </div>
        </div>

        <div className="agent-step compact">
          <div className="step-top">
            <span className="step-agent">Pricing Agent</span>
            <span className="step-state success">Best Fare Selected</span>
          </div>

          <div className="step-content">
            <span className="step-label">Evaluating:</span>
            <span className="step-value">Fare rules and cancellation</span>
          </div>
        </div>

        <div className="agent-step compact">
          <div className="step-top">
            <span className="step-agent">Booking Agent</span>
            <span className="step-state success">Payment Approved</span>
          </div>

          <div className="step-content">
            <span className="step-label">Processing:</span>
            <span className="step-value">Booking in progress</span>
          </div>
        </div>

        <div className="agent-step compact done">
          <div className="step-top">
            <span className="step-agent">Confirmation Agent</span>
            <span className="step-state final">BOOKED ✔</span>
          </div>

          <div className="step-content">
            <span className="step-label">Output:</span>
            <span className="step-value">E-ticket generated & delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
