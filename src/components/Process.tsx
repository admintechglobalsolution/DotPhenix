"use client";

import { useEffect, useState } from "react";
import { Card, Container, Text } from "./ui";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";

const TOTAL_STEPS = 6; // INCLUDING FINAL STEP

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  /* ===============================
     AUTO STEP FLOW (1 → 6 → 1)
  ================================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === TOTAL_STEPS ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cardActive = (step) => (activeStep === step ? "flow-card-phenix" : "");

  const messageActive = (step) =>
    activeStep === step ? "flow-message-active" : "";

  return (
    <section className="process-vertical">
      <Container>
        <Text as="h2" className="process-title">
          How DotPhenix Works
        </Text>

        <div className="vertical-flow">
          {/* 1 */}
          <div className="flow-item desktop-only">
            {/* ===== Laptop / Desktop ONLY ===== */}
            <div className="flow-cards-row">
              <Card className="flow-card">
                <span className="flow-icon">📄</span>
                <span className="flow-label">Task 1</span>
              </Card>

              <Card className="flow-card">
                <span className="flow-icon">📄</span>
                <span className="flow-label">Task 2</span>
              </Card>

              <Card className="flow-card">
                <span className="flow-icon">📄</span>
                <span className="flow-label">Task 3</span>
              </Card>

              <Card className="flow-card">
                <span className="flow-icon">📄</span>
                <span className="flow-label">Task 4</span>
              </Card>

              <Card className="flow-card">
                <span className="flow-icon">📄</span>
                <span className="flow-label">Task 5</span>
              </Card>
            </div>
          </div>

          <div className="flow-line desktop-only">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 1 ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(1)}`}>
              <span className="flow-icon">
                <DocumentScannerRoundedIcon />
              </span>
            </Card>
            <div className={`flow-message ${messageActive(1)}`}>
              <strong>Business Task and Data</strong>
              <span>
                Complex data from multiple task systems
                <br />
                and interconnected workflows.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 2 ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(2)}`}>
              <span className="flow-icon">🐦‍🔥</span>
            </Card>
            <div className={`flow-message ${messageActive(2)}`}>
              <strong>Dot Phenix Solutions</strong>
              <span>
                AI-driven platform transforming
                <br />
                digital operations into automation.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 3 ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(3)}`}>
              <span className="flow-icon">
                <ViewInArRoundedIcon />
              </span>
            </Card>
            <div className={`flow-message ${messageActive(3)}`}>
              <strong>Data Analysis</strong>
              <span>
                Business data analyzed to generate
                <br />
                accurate, actionable insights.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 4 ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(4)}`}>
              <span className="flow-icon">
                <AutoAwesomeIcon />
              </span>
            </Card>
            <div className={`flow-message ${messageActive(4)}`}>
              <strong>AI Processing</strong>
              <span>
                Insights processed through AI
                <br />
                for intelligent decision-making.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 5 ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(5)}`}>
              <span className="flow-icon">
                <MemoryRoundedIcon />
              </span>
            </Card>
            <div className={`flow-message ${messageActive(5)}`}>
              <strong>Automation Programming</strong>
              <span>
                AI decisions converted into
                <br />
                reliable automated workflows.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* ================= STEP 6 (FINAL) ================= */}
          <div className="flow-item">
            <Card className={`flow-card automation ${cardActive(6)}`}>
              <span className="flow-icon">
                <RocketLaunchSharpIcon />
              </span>
            </Card>
            <div className={`flow-message ${messageActive(6)}`}>
              <strong>Enterprise Execution</strong>
              <span>
                Production-grade automation with
                <br />
                monitoring and continuous optimization.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
