import React from 'react';
import { Clock, ShieldCheck, CreditCard, Zap, Phone } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/vehiclesData';

export default function OverviewBanner() {
  return (
    <section className="overview-section" id="overview-section">
      <div className="container">
        <div className="overview-banner-box">
          <div className="overview-banner-inner">
            <div className="overview-text-col">
              <span className="hero-badge-wrap" style={{ background: 'rgba(255,103,0,0.2)', borderColor: 'rgba(255,103,0,0.4)', color: '#FF8833' }}>
                Smart Mobility Overview
              </span>
              <h2 className="overview-title">
                Low Speed & High Speed <span>Electric Scooter Overview</span>
              </h2>
              <p className="overview-desc">
                Our range of low-speed and high-speed electric scooters is ideal for short and daily runs to the market, school drops, office travel, and commercial deliveries. Mridha and Sons Showroom gives you an electric vehicle range that gives you the confidence to travel regular distances every single day with maximum savings.
              </p>

              <div className="overview-features-list">
                <div className="overview-feature-item">
                  <Clock size={18} />
                  <span>Fast 4-Hour Charging</span>
                </div>
                <div className="overview-feature-item">
                  <ShieldCheck size={18} />
                  <span>3 Years Official Warranty</span>
                </div>
                <div className="overview-feature-item">
                  <CreditCard size={18} />
                  <span>No License / No RTO Needed</span>
                </div>
                <div className="overview-feature-item">
                  <Zap size={18} />
                  <span>Huge Monthly Fuel Savings</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#catalog-section" className="btn btn-primary">
                  Explore Full Catalog
                </a>
                <a
                  href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="btn btn-outline"
                  style={{ background: 'transparent', color: '#fff', borderColor: '#475569' }}
                >
                  <Phone size={16} />
                  Call Dealer Helpline
                </a>
              </div>
            </div>

            <div className="overview-img-container">
              <img
                src="/assets/images/se-blue.png"
                alt="Electric Scooter Lineup Overview"
                className="overview-banner-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
