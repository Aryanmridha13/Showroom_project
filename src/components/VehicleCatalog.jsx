import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { VEHICLES_DATA } from '../data/vehiclesData';

export default function VehicleCatalog({ searchQuery, onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: `All Models (${VEHICLES_DATA.length})` },
    { id: 'low-speed', label: 'Low Speed (Non-RTO / No License)' },
    { id: 'high-speed', label: 'High Speed (Highway Series)' }
  ];

  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    const matchesCategory = activeCategory === 'all' || v.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      v.name.toLowerCase().includes(query) ||
      v.subtitle.toLowerCase().includes(query) ||
      v.categoryLabel.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-section" id="catalog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Showroom Inventory</span>
          <h2 className="section-title">All Electric Vehicles</h2>
          <p className="section-subtitle">
            Compare battery types, motor capacities, range, and top speeds. Click to request availability from the showroom owner.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="catalog-tabs-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="vehicles-grid" id="vehicles-grid">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3.5rem', background: '#fff', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No Models Found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We couldn't find any vehicle matching "{searchQuery}".
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setActiveCategory('all')}
            >
              Show All Models
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
