"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Text } from "./ui";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// Dynamic import so tsparticles code is not in initial bundle
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [stats, setStats] = useState([0, 0, 0]);
  const animationRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  /* Scroll reveal & decide whether to render particles */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Animated counters using requestAnimationFrame for smooth updates */
  useEffect(() => {
    if (!visible) return;

    const targets = [60, 7, 9];
    const duration = 900; // ms per counter

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - (startRef.current ?? 0);
      const progress = Math.min(elapsed / duration, 1);

      const next = targets.map((t) => Math.round(t * progress));
      setStats(next as [number, number, number]);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        startRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [visible]);

  return (
    <section ref={sectionRef} className="why-section">
      {/* Particles - lazy, throttled, and respects prefers-reduced-motion */}
      {visible &&
        typeof window !== "undefined" &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches && (
          <div className="particles-bg">
            <Particles
              init={particlesInit}
              options={{
                fullScreen: { enable: false },
                fpsLimit: 30,
                detectRetina: true,
                particles: {
                  number: { value: 40 },
                  color: { value: "#ff8c28" },
                  opacity: { value: 0.25 },
                  size: { value: 2 },
                  move: { enable: true, speed: 0.2 },
                },
              }}
            />
          </div>
        )}

      {/* Header */}
      <Container>
        <Text as="h1">Your One-Stop Solution</Text>
        <Text className="why-description">
          Dot Phenix Solutions Is a Trusted Digital Transformation Partner,
          Helping Global Organizations Design, Modernize, Optimize, and Scale
          Digital Solutions With Speed, Reliability, and Precision.
        </Text>
      </Container>

      {/* GRID */}
      <div className="why-grid">
        {/* LEFT — STATS */}
        <div className={`why-stats reveal ${visible ? "visible" : ""}`}>
          <span className="trust-line">
            Trusted by Startups and Enterprises Worldwide.
          </span>
          <div className="why-stats-footer"></div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats[0]}+</div>
              <div className="stat-label">Successful Projects Delivered</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">{stats[1]}+</div>
              <div className="stat-label">Countries Served Globally</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">{stats[2]}+</div>
              <div className="stat-label">Years of Industry Experience</div>
            </div>
          </div>
        </div>

        {/* RIGHT — FEATURES */}
        <div className={`why-left reveal ${visible ? "visible" : ""}`}>
          <div className="why-card">
            <span className="index">01</span>
            <h3>
              Uncompromised
              <br />
              Quality
            </h3>
            <p>
              High-quality solutions built with precision and best practices.
            </p>
          </div>

          <div className="why-card">
            <span className="index">02</span>
            <h3>
              Cost-Effective
              <br />
              Solutions
            </h3>
            <p>
              Smart automation that reduces cost without sacrificing results.
            </p>
          </div>

          <div className="why-card">
            <span className="index">03</span>
            <h3>
              Scalable
              <br />
              Architecture
            </h3>
            <p>Solutions designed to grow seamlessly with your business.</p>
          </div>

          <div className="why-card">
            <span className="index">04</span>
            <h3>
              Faster
              <br />
              Time-to-Market
            </h3>
            <p>Streamlined execution for quicker deployment and impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
