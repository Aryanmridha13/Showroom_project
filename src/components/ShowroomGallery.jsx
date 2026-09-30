import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, generateWhatsAppUrl } from '../data/vehiclesData';

export default function ShowroomGallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Showroom Gallery</span>
          <h2 className="section-title">Moments, Deliveries & Showcase</h2>
          <p className="section-subtitle">
            Glimpse into our state-of-the-art showroom display, happy customer deliveries, and lifestyle rides.
          </p>
        </div>

        {/* Gallery Grid (Photo 1 Reference) */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="gallery-card"
              onClick={() => setActiveImage(item)}
            >
              <div className="gallery-img-wrap">
                <span className="gallery-badge">Showroom Featured</span>
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
              </div>
              <div className="gallery-info-box">
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-caption">{item.caption}</p>
                <div className="gallery-card-footer">
                  <span className="gallery-view-link">Inspect Model & Specs →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="modal-backdrop" onClick={() => setActiveImage(null)}>
            <div className="modal-card" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  style={{ maxHeight: '500px', width: '100%', objectFit: 'contain', borderRadius: '12px', marginBottom: '1.25rem' }}
                />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {activeImage.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {activeImage.caption}
                </p>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} fill="currentColor" />
                  Enquire About Showroom Models
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
