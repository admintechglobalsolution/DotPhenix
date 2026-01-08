"use client";

import { Card, Container, Text } from "./ui";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

export default function Process() {
  return (
    <section className="process-vertical">
      <Container>
        <Text as="h2" className="process-title">
          How DotPhenix Works
        </Text>

        <div className="vertical-flow">
          {/* 1 */}
          <div className="flow-item">
            {/* ===== Laptop / Desktop ONLY ===== */}
            <div className="flow-cards-row desktop-only">
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

            {/* ===== Mobile ONLY ===== */}
            <div className="mobile-only">
              <Card className="flow-card">
                <span className="flow-icon">📄</span>
              </Card>
              <div className="flow-message">
                <strong>Business Task and Data</strong>
                <span>
                  {" "}
                  Structured and unstructured data from
                  <br />
                  business processes and operational systems.
                </span>
              </div>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* 2 */}
          <div className="flow-item">
            <Card className="flow-card flow-card-phenix">
              <span className="flow-icon">🐦‍🔥</span>
            </Card>

            <div className="flow-message">
              <strong>Dot Phenix Solutions</strong>
              <span>
                {" "}
                An AI-driven platform that transforms
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
          {/* 3 */}
          <div className="flow-item">
            <Card className="flow-card automation">
              <span className="flow-icon">
                <DocumentScannerRoundedIcon />
              </span>
            </Card>

            <div className="flow-message">
              <strong>Data Analysis</strong>
              <span>
                {" "}
                Business data is analyzed to generate
                <br />
                accurate and actionable insights.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>
          {/* 4 */}
          <div className="flow-item">
            <Card className="flow-card automation">
              <span className="flow-icon">
                <AutoAwesomeIcon />
              </span>
            </Card>

            <div className="flow-message">
              <strong>AI Processing</strong>
              <span>
                {" "}
                Insights processed through AI models
                <br />
                to enable intelligent decision-making.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* 5 */}
          <div className="flow-item">
            <Card className="flow-card automation">
              <span className="flow-icon">
                <MemoryRoundedIcon />
              </span>
            </Card>

            <div className="flow-message">
              <strong>Automation programming</strong>
              <span>
                AI-driven decisions are converted into
                <br />
                reliable, automated workflows.
              </span>
            </div>
          </div>

          <div className="flow-line">
            <svg viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>

          {/* 5 */}
          <div className="flow-item">
            <Card className="flow-card automation">
              <span className="flow-icon">
                <RocketLaunchSharpIcon />
              </span>
            </Card>
            <div className="flow-message">
              <strong>Enterprise Execution</strong>
              <span>
                {" "}
                Production grade automation with
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
