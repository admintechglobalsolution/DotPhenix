"use client";

import { Button } from "./ui";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { dashboardChartData } from "./ui/chartData";

function Process() {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* LEFT — TEXT CONTENT */}
        <div className="process-content">
          <h2 className="process-heading">
            Intelligent Dashboards for <br />
            Modern Digital Operations
          </h2>
          <p className="process-description">
            Dot Phenix helps organizations visualize, automate, and scale their
            digital operations using intelligent, enterprise-grade dashboards.
          </p>
          <ul className="process-points">
            <li>Real-time operational insights</li>
            <li>AI-driven automation workflows</li>
            <li>Secure, enterprise-ready architecture</li>
          </ul>

          <div className="hero-actions">
            <Button className="hero-button">Request a Demo →</Button>
          </div>
        </div>

        {/* RIGHT — SAAS DASHBOARD */}
        <div className="process-visual">
          <div className="dashboard-mock">
            {/* SIDEBAR */}
            <aside className="dashboard-sidebar">
              <div className="sidebar-logo">RevenueDesk</div>
              <nav className="sidebar-nav">
                <span className="sidebar-item active">Dashboard</span>
                <span className="sidebar-item">Invoices</span>
                <span className="sidebar-item">Payments</span>
                <span className="sidebar-item">Subscriptions</span>
                <span className="sidebar-item">Customers</span>
                <span className="sidebar-item">Plans & Pricing</span>
                <span className="sidebar-item">Reports</span>
                <span className="sidebar-item">Settings</span>
              </nav>
            </aside>

            {/* MAIN */}
            <div className="dashboard-main">
              {/* TOP BAR */}
              <div className="dashboard-top">
                <div className="dashboard-title">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>

                <div className="dashboard-actions">
                  <div className="dashboard-user-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* KPI CARDS */}
              <div className="dashboard-cards">
                <div className="dashboard-metric">
                  <span className="metric-label">Revenue</span>
                  <span className="metric-value">$124k</span>
                </div>

                <div className="dashboard-metric">
                  <span className="metric-label">Orders</span>
                  <span className="metric-value">2,430</span>
                </div>

                <div className="dashboard-metric">
                  <span className="metric-label">Growth</span>
                  <span className="metric-value positive">+18%</span>
                </div>
              </div>

              {/* REAL LINE CHART */}
              <div className="dashboard-chart dashboard-chart-real">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dashboardChartData}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis
                      dataKey="month"
                      stroke="#9aa0a6"
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis
                      width={25}
                      stroke="#9aa0a6"
                      tick={{ fontSize: 10 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#6d9cff"
                      strokeWidth={2.5}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="rgba(120,160,255,0.6)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="growth"
                      stroke="hsla(0, 0%, 100%, 0.35)"
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
