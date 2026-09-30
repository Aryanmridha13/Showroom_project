import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Shield, BatteryCharging, ChevronLeft, ChevronRight, MessageSquare, ExternalLink } from 'lucide-react';
import { VEHICLES_DATA, generateWhatsAppUrl } from '../data/vehiclesData';

export default function XOneShowcase({ onOpenModal, onOpenTestRide }) {
  // 4 Scooters: MG PRO (0), X3 (1), X-ONE (2), SE (3)
  const models = VEHICLES_DATA;
  const [activeModelIndex, setActiveModelIndex] = useState(2); // default X-ONE (matching photo)
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const activeModel = models[activeModelIndex] || models[0];
  const colors = activeModel.colors || [];
  const activeColor = colors[activeColorIndex] || colors[0];

  const handleSelectModel = (idx) => {
    setActiveModelIndex(idx);
    setActiveColorIndex(0);
  };

  const handlePrev = () => {
    setActiveModelIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
    setActiveColorIndex(0);
  };

  const handleNext = () => {
    setActiveModelIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
    setActiveColorIndex(0);
  };

  return (
    <section className="xone-showcase-section" id="xone-showcase">
      <div className="container">
        {/* Top Header Layout with Eyebrow, Big Title & Book Now Pill */}
        <div className="showcase-top-header">
          <motion.div
            className="showcase-header-left"
            key={activeModel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="xone-eyebrow">
              {activeModel.id === 'x-one' ? 'The Best Affordable Electric Scooter' : activeModel.subtitle}
            </span>
            <h2 className="xone-main-title">
              KOMAKI <span className="highlight-xone">{activeModel.name}</span>
            </h2>
          </motion.div>

          <div className="showcase-header-right">
            <button
              type="button"
              className="btn btn-dark-pill"
              onClick={() => onOpenTestRide(activeModel.name)}
            >
              Book Now
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => onOpenModal(activeModel.id)}
            >
              Full Specs
            </button>
            <a
              href={generateWhatsAppUrl(activeModel.name, `Hello Mridha & Sons Showroom! I am interested in KOMAKI ${activeModel.name} in ${activeColor?.name || 'Standard'} shade.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-pill"
            >
              <MessageSquare size={16} fill="currentColor" />
              WhatsApp Dealer
            </a>
          </div>
        </div>

        {/* 4-Model Switcher Tabs */}
        <div className="showcase-model-tabs-bar">
          {models.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              className={`showcase-model-tab-btn ${idx === activeModelIndex ? 'active' : ''}`}
              onClick={() => handleSelectModel(idx)}
            >
              <span>KOMAKI {m.name}</span>
              {m.badge && <span className="model-tab-badge">{m.badge}</span>}
            </button>
          ))}
        </div>

        {/* Interactive Lineup Stage */}
        <div className="showcase-lineup-stage">
          {/* Navigation Arrows for Slider */}
          <button
            type="button"
            className="showcase-arrow-btn prev"
            onClick={handlePrev}
            aria-label="Previous Scooter Model"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className="showcase-arrow-btn next"
            onClick={handleNext}
            aria-label="Next Scooter Model"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Focused Spotlight Scooter */}
          <div className="xone-focus-scooter">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeModel.id}-${activeColor?.id || 0}`}
                className="xone-img-motion-wrap"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={activeColor?.image || activeModel.image}
                  alt={`KOMAKI ${activeModel.name} in ${activeColor?.name || 'Standard'}`}
                  className="xone-hero-img"
                />
              </motion.div>
            </AnimatePresence>

            {/* Glowing Accent Glow Ring Behind Active Vehicle */}
            <div
              className="xone-glow-aura"
              style={{
                background: `radial-gradient(circle, ${activeColor?.accent || '#FF6700'}33 0%, rgba(255,255,255,0) 70%)`
              }}
            />
          </div>

          {/* Multi-Scooter Lineup Fleet (All 4 Scooters Lineup) */}
          <div className="showcase-fleet-row">
            {models.map((m, idx) => (
              <motion.div
                key={m.id}
                className={`showcase-fleet-item ${idx === activeModelIndex ? 'active' : ''}`}
                onClick={() => handleSelectModel(idx)}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                <img src={m.image} alt={m.name} className="fleet-scooter-thumb" />
                <span className="fleet-model-title">KOMAKI {m.name}</span>
                <span className="fleet-model-tag">{m.badge || m.categoryLabel}</span>
              </motion.div>
            ))}
          </div>

          {/* Color Switcher Bar for the active model */}
          <motion.div
            className="xone-color-picker-bar"
            key={`color-bar-${activeModel.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="xone-picker-label">Available Shade:</span>
            <div className="xone-swatches-list">
              {colors.map((c, idx) => (
                <button
                  key={c.id || idx}
                  type="button"
                  className={`xone-swatch-btn ${idx === activeColorIndex ? 'active' : ''}`}
                  style={{ '--swatch-color': c.hex }}
                  onClick={() => setActiveColorIndex(idx)}
                  title={c.name}
                  aria-label={`Select ${c.name}`}
                >
                  <span className="swatch-inner" style={{ backgroundColor: c.hex }} />
                  {idx === activeColorIndex && (
                    <motion.span
                      className="swatch-ring"
                      layoutId="showcaseSwatchRing"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="xone-active-color-name">
              {activeColor?.name || 'Standard'}
            </span>
          </motion.div>

          {/* Specs Strip */}
          <div className="xone-specs-grid">
            <div className="xone-spec-card">
              <Zap size={22} className="spec-icon-pulse" />
              <div className="spec-val">{activeModel.motor.split(' ')[0]} {activeModel.motor.split(' ')[1]}</div>
              <div className="spec-label">High Torque Motor</div>
            </div>

            <div className="xone-spec-card">
              <BatteryCharging size={22} className="spec-icon-pulse" />
              <div className="spec-val">{activeModel.range}</div>
              <div className="spec-label">Certified Range / Charge</div>
            </div>

            <div className="xone-spec-card">
              <Shield size={22} className="spec-icon-pulse" />
              <div className="spec-val">{activeModel.badge}</div>
              <div className="spec-label">Chassis & Safety Build</div>
            </div>

            <div className="xone-spec-card">
              <Sparkles size={22} className="spec-icon-pulse" />
              <div className="spec-val">{activeModel.category === 'low-speed' ? 'Non-RTO' : 'High Speed'}</div>
              <div className="spec-label">{activeModel.category === 'low-speed' ? 'No License / Reg. Req.' : 'Highway Performance'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
