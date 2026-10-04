import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Calendar } from 'lucide-react';
import { generateWhatsAppUrl } from '../data/vehiclesData';

export default function VehicleModal({ vehicle, onClose, onOpenTestRide }) {
  if (!vehicle) return null;

  const [selectedColor, setSelectedColor] = useState(vehicle.colors?.[0] || { name: 'Standard', hex: '#E63946' });

  // Update selected color when opening a different vehicle
  useEffect(() => {
    if (vehicle?.colors?.[0]) {
      setSelectedColor(vehicle.colors[0]);
    }
  }, [vehicle]);

  const activeImage = selectedColor?.image || vehicle.image;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-left-col">
            <div className="modal-img-holder">
              <img
                key={activeImage}
                src={activeImage}
                alt={`${vehicle.name} - ${selectedColor.name}`}
                className="modal-main-img"
              />
            </div>

            {/* Color Variant Selector */}
            <div className="modal-colors-wrap">
              <div className="modal-colors-label">Available Color Variants:</div>
              <div className="modal-colors-list">
                {vehicle.colors.map((c, i) => (
                  <div
                    key={i}
                    className={`color-circle ${selectedColor.name === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontWeight: 600 }}>
                Selected: <span style={{ color: 'var(--text-main)' }}>{selectedColor.name}</span>
              </p>
            </div>

            {/* Direct Actions to Owner */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={generateWhatsAppUrl(vehicle.name, `Hello Electric Vehicle Showroom! I am interested in ${vehicle.name} in ${selectedColor.name} color. Please provide showroom availability and best offer.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} fill="currentColor" />
                WhatsApp Dealer for Best Offer
              </a>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onOpenTestRide(vehicle.name);
                }}
                style={{ width: '100%' }}
              >
                <Calendar size={18} />
                Book Free Test Ride at Showroom
              </button>
            </div>
          </div>

          <div className="modal-right-col">
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                <span className="thumb-tag-badge">{vehicle.categoryLabel}</span>
                {vehicle.badge && (
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-orange)', background: '#FFF3E0', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {vehicle.badge}
                  </span>
                )}
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)' }}>
                {vehicle.name}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary)', fontWeight: 700 }}>
                {vehicle.subtitle}
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                {vehicle.shortDesc}
              </p>
            </div>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.6rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.2rem' }}>
              Key Technical Specifications
            </h4>

            <table className="modal-specs-table">
              <tbody>
                <tr><td>Motor Type</td><td>{vehicle.motor}</td></tr>
                <tr><td>Battery Technology</td><td>{vehicle.batteryType}</td></tr>
                <tr><td>Battery Capacity</td><td>{vehicle.batteryCapacity}</td></tr>
                <tr><td>Certified Range</td><td><span style={{ color: 'var(--accent-orange)', fontWeight: 800 }}>{vehicle.range}</span></td></tr>
                <tr><td>Top Speed</td><td>{vehicle.topSpeed}</td></tr>
                <tr><td>Charging Duration</td><td>{vehicle.chargingTime}</td></tr>
                <tr><td>Chassis & Body</td><td>{vehicle.bodyType}</td></tr>
                <tr><td>Braking Setup</td><td>{vehicle.brakes}</td></tr>
                <tr><td>Suspension</td><td>{vehicle.suspension}</td></tr>
                <tr><td>Official Warranty</td><td>{vehicle.warranty}</td></tr>
              </tbody>
            </table>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              Smart Showroom Features
            </h4>
            <div className="modal-features-list">
              {vehicle.features.map((f, idx) => (
                <div key={idx} className="modal-feature-item">
                  <Check size={16} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
