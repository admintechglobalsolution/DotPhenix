"use client";

import "./servicevisuals.css";

export default function MobileVisual() {
  return (
    <div className="mobile-visual">
      <div className="phone-frame">
        {/* Status Bar */}
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App Header */}
        <div className="app-header">
          <div>
            <h4>Hello, Alex 👋</h4>
            <p>Welcome back</p>
          </div>
          <div className="avatar">A</div>
        </div>

        {/* Search */}
        <div className="search-bar">
          🔍 <span>Search products</span>
        </div>

        {/* Categories */}
        <div className="categories">
          <div className="category active">🛍️ Shop</div>
          <div className="category">👕 Fashion</div>
          <div className="category">📱 Tech</div>
          <div className="category">🏠 Home</div>
        </div>

        {/* Featured Card */}
        <div className="featured-card">
          {/* LEFT CONTENT */}
          <div className="featured-content">
            <h5>Summer Sale</h5>
            <p>Up to 40% OFF</p>
            <button>Explore</button>
          </div>

          {/* RIGHT SVG ILLUSTRATION */}
          <div className="featured-visual">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Background Circle */}
              <circle cx="60" cy="60" r="50" fill="rgba(255,255,255,0.15)" />

              {/* Shopping Bag */}
              <path d="M40 50h40l-4 42H44l-4-42z" fill="white" opacity="0.9" />
              <path
                d="M50 50v-6a10 10 0 0120 0v6"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Discount Tag */}
              <rect
                x="58"
                y="64"
                width="28"
                height="14"
                rx="3"
                fill="#0f172a"
              />
              <text
                x="72"
                y="74"
                textAnchor="middle"
                fontSize="8"
                fill="white"
                fontWeight="700"
              >
                -40%
              </text>
            </svg>
          </div>
        </div>

        {/* Product List */}
        <div className="product-row">
          <div className="product-card">
            <p>Smart Watch</p>
            <span>$149</span>
          </div>

          <div className="product-card">
            <p>Headphones</p>
            <span>$89</span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <span className="nav-item active" aria-label="Home">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-10.5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="nav-item" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="nav-item" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="21" r="1.5" fill="currentColor" />
              <circle cx="18" cy="21" r="1.5" fill="currentColor" />
            </svg>
          </span>

          <span className="nav-item" aria-label="Profile">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
