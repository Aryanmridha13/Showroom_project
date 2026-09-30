import React from 'react';
import { generateWhatsAppUrl } from '../data/vehiclesData';

export default function VehicleCard({ vehicle, onOpenModal }) {
  const motorShort = `${vehicle.motor.split(' ')[0]} ${vehicle.motor.split(' ')[1] || 'EV'}`;
  const batteryShort = vehicle.batteryType.split(' ')[0];
  const speedShort = vehicle.topSpeed.split(' ')[0];

  return (
    <article className="vehicle-card" data-id={vehicle.id}>
      {vehicle.badge && <span className="vehicle-badge">{vehicle.badge}</span>}
      
      <div 
        className="vehicle-img-wrap" 
        onClick={() => onOpenModal(vehicle.id)}
      >
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="vehicle-card-img"
          loading="lazy"
        />
      </div>

      <div className="vehicle-content">
        <div className="vehicle-header-info">
          <div className="vehicle-name-row">
            <h3 className="vehicle-name">{vehicle.name}</h3>
            <span className="vehicle-power-label">{motorShort}</span>
          </div>
          <p className="vehicle-subtitle">{vehicle.subtitle}</p>
        </div>

        {/* Specs Bar (Photo 3 Reference: Battery Type | Range | Top Speed) */}
        <div className="vehicle-specs-row">
          <div className="spec-box">
            <div className="spec-val">{batteryShort}</div>
            <div className="spec-key">Battery Type</div>
          </div>
          <div className="spec-box">
            <div className="spec-val" style={{ color: 'var(--accent-orange)' }}>{vehicle.range}</div>
            <div className="spec-key">Range</div>
          </div>
          <div className="spec-box">
            <div className="spec-val">{speedShort} KM/H</div>
            <div className="spec-key">Top Speed</div>
          </div>
        </div>

        <div className="card-actions">
          <button
            type="button"
            className="btn-card-details"
            onClick={() => onOpenModal(vehicle.id)}
          >
            View Specs & Colors
          </button>
          <a
            href={generateWhatsAppUrl(vehicle.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-dealer"
          >
            Enquire Dealer
          </a>
        </div>
      </div>
    </article>
  );
}
