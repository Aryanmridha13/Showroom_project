import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          {/* Brand Logo: MSD EV SHOWROOM */}
          <a href="#" className="brand-logo" aria-label="MSD EV Showroom Home">
            <div className="brand-emblem">
              <Zap size={18} fill="currentColor" />
            </div>
            <div className="brand-text">
              <span className="brand-title">
                MSD <span className="brand-ev-badge">EV</span> SHOWROOM
              </span>
              <span className="brand-sub">AUTHORIZED DEALER</span>
            </div>
          </a>

          {/* Responsive Nav Links Menu */}
          <div className={`nav-menu ${mobileMenuOpen ? 'mobile-active' : ''}`} id="nav-menu">
            <a href="#hero-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#catalog-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Models Catalog</a>
            <a href="#spare-parts-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Spare Parts</a>
            <a href="#overview-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>EV Overview</a>
            {/* <a href="#gallery-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a> */}
            <a href="#calculator-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Savings Calculator</a>
            <a href="#contact-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Dealer</a>
          </div>

          {/* Header Action: Responsive Mobile Menu Toggle */}
          <div className="header-actions">
            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
