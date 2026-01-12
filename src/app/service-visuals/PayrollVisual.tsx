"use client";

import React from "react";
import "./servicevisuals.css";

function PayrollVisual() {
  return (
    <div className="payroll-visual">
      <div className="payroll-dashboard">
        {/* Header */}
        <div className="payroll-header">
          <h4>Payroll Overview</h4>
          <span className="payroll-badge">Monthly</span>
        </div>

        {/* Summary Cards */}
        <div className="payroll-stats">
          <div className="payroll-card">
            <p>Total Employees</p>
            <h5>128</h5>
          </div>

          <div className="payroll-card">
            <p>Total Payout</p>
            <h5>$284,500</h5>
          </div>
        </div>

        {/* Payout Bar */}
        <div className="payout-section">
          <div className="payout-label">
            <span>Processed</span>
            <span>92%</span>
          </div>

          <div className="payout-bar">
            <div className="payout-progress" />
          </div>
        </div>

        {/* Employee List */}
        <div className="employee-list">
          <div className="employee">
            <span className="avatar">A</span>
            <div>
              <p>Alex Johnson</p>
              <small>Engineering</small>
            </div>
            <span className="amount">$4,200</span>
          </div>

          <div className="employee">
            <span className="avatar">M</span>
            <div>
              <p>Maria Lopez</p>
              <small>Marketing</small>
            </div>
            <span className="amount">$3,750</span>
          </div>

          <div className="employee">
            <span className="avatar">R</span>
            <div>
              <p>Rahul Verma</p>
              <small>Finance</small>
            </div>
            <span className="amount">$4,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollVisual;
