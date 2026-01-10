"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Company", href: "/company" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" data-menu-open={open ? "true" : "false"}>
      <div className="header-inner">
        <div className="brand">
          <Link href="/" className="logo" aria-label="DotPhenix home">
            🐦‍🔥 Dot Phenix
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden>
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile overlay + nav */}
      <div
        className="mobile-nav-wrap"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mobile-nav-overlay" onClick={() => setOpen(false)} />
        <nav className="nav-mobile" aria-label="Mobile navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link-mobile"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
