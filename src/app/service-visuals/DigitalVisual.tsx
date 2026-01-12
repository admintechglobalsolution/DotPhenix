"use client";

import "./servicevisuals.css";

export default function DigitalVisual() {
  return (
    <div className="digital-visual">
      <div className="marketing-dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <h4>Campaign Performance</h4>
          <span className="status">Live</span>
        </div>

        {/* KPI Row */}
        <div className="kpi-row">
          <div className="kpi-card">
            <p>CTR</p>
            <h5>4.8%</h5>
            <span className="up">▲ 12%</span>
          </div>

          <div className="kpi-card">
            <p>Leads</p>
            <h5>1,284</h5>
            <span className="up">▲ 8%</span>
          </div>

          <div className="kpi-card">
            <p>ROAS</p>
            <h5>3.2x</h5>
            <span className="up">▲ 5%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-card">
          <svg viewBox="0 0 320 160" aria-hidden="true">
            {/* Y-Axis Labels */}
            <text x="10" y="22" fontSize="8" fill="#94a3b8">
              $50k
            </text>
            <text x="10" y="52" fontSize="8" fill="#94a3b8">
              $40k
            </text>
            <text x="10" y="82" fontSize="8" fill="#94a3b8">
              $30k
            </text>
            <text x="10" y="112" fontSize="8" fill="#94a3b8">
              $20k
            </text>

            {/* Grid Lines */}
            <line
              x1="40"
              y1="22"
              x2="310"
              y2="22"
              stroke="rgba(255,255,255,0.08)"
            />
            <line
              x1="40"
              y1="52"
              x2="310"
              y2="52"
              stroke="rgba(255,255,255,0.08)"
            />
            <line
              x1="40"
              y1="82"
              x2="310"
              y2="82"
              stroke="rgba(255,255,255,0.08)"
            />
            <line
              x1="40"
              y1="112"
              x2="310"
              y2="112"
              stroke="rgba(255,255,255,0.08)"
            />

            {/* BASELINE (origin) */}
            <line
              x1="40"
              y1="120"
              x2="310"
              y2="120"
              stroke="rgba(255,255,255,0.15)"
            />

            {/* Bars — all start from y=120 */}
            <rect
              x="50"
              y="80"
              width="22"
              height="40"
              rx="4"
              fill="url(#barGradient)"
            />
            <rect
              x="95"
              y="65"
              width="22"
              height="55"
              rx="4"
              fill="url(#barGradient)"
            />
            <rect
              x="140"
              y="90"
              width="22"
              height="30"
              rx="4"
              fill="url(#barGradient)"
            />
            <rect
              x="185"
              y="55"
              width="22"
              height="65"
              rx="4"
              fill="url(#barGradient)"
            />
            <rect
              x="230"
              y="75"
              width="22"
              height="45"
              rx="4"
              fill="url(#barGradient)"
            />
            <rect
              x="275"
              y="45"
              width="22"
              height="75"
              rx="4"
              fill="url(#barGradient)"
            />

            {/* X-Axis Labels */}
            <text x="53" y="145" fontSize="8" fill="#94a3b8">
              Jan
            </text>
            <text x="98" y="145" fontSize="8" fill="#94a3b8">
              Feb
            </text>
            <text x="143" y="145" fontSize="8" fill="#94a3b8">
              Mar
            </text>
            <text x="188" y="145" fontSize="8" fill="#94a3b8">
              Apr
            </text>
            <text x="233" y="145" fontSize="8" fill="#94a3b8">
              May
            </text>
            <text x="278" y="145" fontSize="8" fill="#94a3b8">
              Jun
            </text>

            {/* Gradient */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Channels */}
        <div className="channel-row">
          <span>SEO</span>
          <span>Ads</span>
          <span>Email</span>
          <span>Social</span>
        </div>
      </div>
    </div>
  );
}
