import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  Zap,
  CheckCircle2,
  MessageSquare,
  Phone,
  X,
  Store,
  Sparkles,
  MapPin,
  Clock,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  SPARE_PARTS_DATA,
  ACCESSORIES_CATEGORIES,
  generatePartWhatsAppUrl
} from '../data/accessoriesData';
import { SHOWROOM_INFO } from '../data/vehiclesData';

export default function GenuinePartsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPart, setSelectedPart] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 6;

  const filteredParts = activeCategory === 'all'
    ? SPARE_PARTS_DATA
    : SPARE_PARTS_DATA.filter(p => p.category === activeCategory);

  const visibleParts = showAll ? filteredParts : filteredParts.slice(0, INITIAL_LIMIT);
  const hasMore = filteredParts.length > INITIAL_LIMIT;

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  return (
    <section className="parts-section" id="spare-parts-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ background: 'rgba(255, 103, 0, 0.12)', color: 'var(--accent-orange)' }}>
            <Wrench size={14} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
            Showroom Spares & Accessories Desk
          </span>
          <h2 className="section-title">
            100% Genuine EV <span className="highlight-orange">Spare Parts</span> & Accessories
          </h2>
          <p className="section-subtitle">
            Keep your electric scooter running in peak factory performance with authorized lithium powerpacks, high-frequency smart chargers, precision controls, and genuine electronic components.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="parts-filter-tabs">
          {ACCESSORIES_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`parts-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePartsTabIndicator"
                    className="parts-tab-indicator"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="parts-tab-text">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Parts Cards Grid */}
        <motion.div
          layout
          className="parts-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {visibleParts.map((part) => (
              <motion.div
                key={part.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.4 }}
                className="part-card"
              >
                {/* Top Badge */}
                <div className="part-card-topbar">
                  <span className="part-badge">{part.badge}</span>
                </div>

                {/* Image Stage */}
                <div
                  className="part-img-stage"
                  onClick={() => setSelectedPart(part)}
                  title="Click to view full specifications"
                >
                  <div className="part-glow-aura" />
                  <motion.img
                    src={part.image}
                    alt={part.name}
                    className="part-stage-img"
                    whileHover={{ scale: 1.07, y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    loading="lazy"
                  />
                  <div className="part-inspect-hint">
                    <Sparkles size={14} />
                    <span>Quick Specs</span>
                  </div>
                </div>

                {/* Part Info */}
                <div className="part-card-body">
                  <h3 className="part-title" onClick={() => setSelectedPart(part)}>
                    {part.name}
                  </h3>
                  <p className="part-tagline">{part.tagline}</p>

                  <div className="part-compat-box">
                    <span className="part-compat-label">Compatibility:</span>
                    <span className="part-compat-value">{part.compatibility}</span>
                  </div>

                  {/* Specs Quick Strip */}
                  <div className="part-quick-specs">
                    {part.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="part-quick-spec-item">
                        <span className="part-spec-lbl">{spec.label}</span>
                        <span className="part-spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="part-card-footer">
                    <div className="part-action-buttons" style={{ width: '100%' }}>
                      <button
                        type="button"
                        className="btn btn-outline part-details-btn"
                        style={{ flex: 1, justifyContent: 'center' }}
                        onClick={() => setSelectedPart(part)}
                      >
                        Details
                      </button>
                      <a
                        href={generatePartWhatsAppUrl(part.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp part-wa-btn"
                        style={{ flex: 2, justifyContent: 'center' }}
                        title="Enquire on WhatsApp"
                      >
                        <MessageSquare size={16} fill="currentColor" />
                        <span>Enquire Spares</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less Toggle Button */}
        {hasMore && (
          <div className="parts-view-more-wrap">
            <button
              type="button"
              className="btn-parts-view-more"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
            >
              <span>{showAll ? 'Show Less Spare Parts' : `View More Spare Parts (+${filteredParts.length - INITIAL_LIMIT} More)`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}

        {/* Showroom Parts Guarantee Strip */}
        <motion.div
          className="parts-guarantee-strip"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="guarantee-item">
            <div className="guarantee-icon"><ShieldCheck size={24} /></div>
            <div>
              <h5>100% Genuine OEM</h5>
              <p>Direct manufacturer certified components.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon"><Wrench size={24} /></div>
            <div>
              <h5>Instant Fitting & Testing</h5>
              <p>On-spot battery load testing and installation.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon"><Zap size={24} /></div>
            <div>
              <h5>Old Battery Exchange</h5>
              <p>Instant buyback value on used batteries.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon"><Phone size={24} /></div>
            <div>
              <h5>Showroom Parts Helpline</h5>
              <p>Call our spares desk for instant part lookup.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Banner: Visit Store for More Parts or Contact Dealer */}
        <motion.div
          className="parts-store-banner"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="parts-store-content">
            <div className="parts-store-info">
              <div className="parts-store-tag">
                <Store size={14} />
                <span>Visit Showroom & Spare Parts Desk</span>
              </div>
              <h3 className="parts-store-title">
                Visit Store For More Spare Parts & Accessories Or Contact The Dealer
              </h3>
              <p className="parts-store-desc">
                Looking for body guards, customized seats, extra storage boxes, wiring harnesses, controllers, or rare spare parts? Visit our showroom store to browse our complete inventory or contact our dealer directly for instant price quotes, stock checks, and quick fitting.
              </p>
              <div className="parts-store-meta">
                <div className="parts-store-meta-item">
                  <MapPin size={15} />
                  <span>{SHOWROOM_INFO.address.fullAddress}</span>
                </div>
                <div className="parts-store-meta-item">
                  <Clock size={15} />
                  <span>{SHOWROOM_INFO.timing.serviceHours}</span>
                </div>
              </div>
            </div>

            <div className="parts-store-actions">
              <a
                href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.4rem', justifyContent: 'center' }}
              >
                <PhoneCall size={18} />
                <span>Contact Dealer ({SHOWROOM_INFO.phonePrimary})</span>
              </a>
              <a
                href={generatePartWhatsAppUrl('', 'Hello Mridha & Sons Showroom! I would like to inquire about more EV spare parts and accessories availability at your store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.85rem 1.4rem', justifyContent: 'center' }}
              >
                <MessageSquare size={18} fill="currentColor" />
                <span>WhatsApp Spares Inquiry</span>
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                style={{ padding: '0.75rem 1.4rem', justifyContent: 'center' }}
              >
                <Store size={16} />
                <span>Visit Showroom Store</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Part Details Lightbox Modal */}
      {selectedPart && (
        <div className="modal-backdrop" onClick={() => setSelectedPart(null)}>
          <motion.div
            className="modal-card part-modal-card"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedPart(null)}
              aria-label="Close specifications"
            >
              <X size={20} />
            </button>

            <div className="part-modal-grid">
              {/* Left Column: Big Product Showcase */}
              <div className="part-modal-visual">
                <span className="part-badge" style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  {selectedPart.badge}
                </span>
                <img
                  src={selectedPart.image}
                  alt={selectedPart.name}
                  className="part-modal-img"
                />
                <div className="part-modal-price-box" style={{ textAlign: 'center' }}>
                  <span style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.95rem' }}>100% Genuine OEM Spares</span>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.35rem' }}>
                    Available for direct pickup & on-site fitting at our showroom.
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Specs & Description */}
              <div className="part-modal-content">
                <span className="hero-badge-wrap" style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
                  OEM Certified Spare Part
                </span>

                <h3 className="part-modal-title">{selectedPart.name}</h3>
                <p className="part-modal-tagline">{selectedPart.tagline}</p>
                <p className="part-modal-desc">{selectedPart.shortDesc}</p>

                {/* Compatibility Info */}
                <div className="part-modal-compat">
                  <strong>Vehicle Fitment:</strong> {selectedPart.compatibility}
                </div>

                {/* Full Technical Specifications Table */}
                <h4 className="part-modal-section-h4">Technical Specifications</h4>
                <div className="part-specs-table">
                  {selectedPart.specs.map((s, idx) => (
                    <div key={idx} className="part-specs-row">
                      <span className="part-specs-name">{s.label}</span>
                      <span className="part-specs-data">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features & Safety Checklist */}
                <h4 className="part-modal-section-h4">Key Features & Engineering</h4>
                <div className="part-features-list">
                  {selectedPart.features.map((feat, fIdx) => (
                    <div key={fIdx} className="part-feature-bullet">
                      <CheckCircle2 size={16} className="part-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Modal CTA Buttons */}
                <div className="part-modal-actions">
                  <a
                    href={generatePartWhatsAppUrl(selectedPart.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <MessageSquare size={18} fill="currentColor" />
                    <span>Order / Enquire on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="btn btn-outline"
                    style={{ justifyContent: 'center' }}
                  >
                    <Phone size={16} />
                    <span>Call Spares Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
