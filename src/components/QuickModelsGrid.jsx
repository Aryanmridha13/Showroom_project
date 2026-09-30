import React from 'react';
import { VEHICLES_DATA } from '../data/vehiclesData';

export default function QuickModelsGrid({ onSelectVehicle }) {
  return (
    <section className="quick-models-section" id="quick-models-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Showroom Lineup</span>
          <h2 className="section-title">Explore by Model Name</h2>
          <p className="section-subtitle">
            Click any model below to inspect detailed specifications, color options, and contact the showroom owner directly.
          </p>
        </div>

        {/* 10 Model Quick Grid (Photo 1 Reference) */}
        <div className="quick-thumbs-grid">
          {VEHICLES_DATA.map((v) => (
            <div
              key={v.id}
              className="quick-thumb-card"
              onClick={() => onSelectVehicle(v.id)}
            >
              {v.badge && <span className="thumb-tag-badge">{v.badge}</span>}
              <img src={v.image} alt={v.name} className="quick-thumb-img" loading="lazy" />
              <h4 className="quick-thumb-name">{v.name}</h4>
              <span className="quick-thumb-category">{v.categoryLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
