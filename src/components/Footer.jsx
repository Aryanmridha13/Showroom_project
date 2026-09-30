import React from 'react';
import { Zap, MessageSquare, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { SHOWROOM_INFO, generateWhatsAppUrl } from '../data/vehiclesData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-emblem" style={{ width: 40, height: 40 }}>
                <Zap size={20} fill="currentColor" />
              </div>
              <div className="brand-text">
                <span className="brand-title" style={{ color: '#fff', WebkitTextFillColor: '#fff' }}>
                  MRIDHA & SONS
                </span>
                <span className="brand-sub" style={{ color: '#94A3B8' }}>
                  SHOWROOM EV DIVISION
                </span>
              </div>
            </div>
            <p className="footer-desc">
              Authorized multi-model electric scooter & bike showroom. Offering zero-emission, cost-efficient personal and commercial mobility solutions with genuine spare parts and service support.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={16} fill="currentColor" />
                WhatsApp Showroom
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Vehicle Categories</h4>
            <div className="footer-links">
              <a href="#catalog-section">Low Speed Scooters (Non-RTO)</a>
              <a href="#catalog-section">High Speed Commuters</a>
              <a href="#catalog-section">Commercial Loaders & 3-Wheelers</a>
              <a href="#catalog-section">Cruiser Electric Bikes</a>
              {/* <a href="#gallery-section">Showroom Gallery</a> */}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#hero-section">Home</a>
              <a href="#quick-models-section">Popular Models</a>
              <a href="#catalog-section">Vehicle Catalog</a>
              <a href="#spare-parts-section">Genuine Spare Parts & Batteries</a>
              <a href="#overview-section">EV Technology</a>
              <a href="#calculator-section">Savings Calculator</a>
              <a href="#perks-section">Why Choose Us</a>
              <a href="#contact-section">Showroom Address & Phone</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Showroom Visit</h4>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>{SHOWROOM_INFO.address.fullAddress}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <a href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}>
                {SHOWROOM_INFO.phonePrimary}
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} />
              <span>{SHOWROOM_INFO.timing.weekdays}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <a href={`mailto:${SHOWROOM_INFO.email}`}>
                {SHOWROOM_INFO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 <strong>{SHOWROOM_INFO.name}</strong>. All Rights Reserved. Electric Vehicle Division.
          </div>
          {/* <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
            React 18 Dynamic Frontend | Direct Owner Contact Portal | Zero Database
          </div> */}
        </div>
      </div>
    </footer>
  );
}
