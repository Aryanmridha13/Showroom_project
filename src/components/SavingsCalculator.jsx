import React, { useState } from 'react';
import { generateWhatsAppUrl } from '../data/vehiclesData';

export default function SavingsCalculator() {
  const [dailyKm, setDailyKm] = useState(30);

  // Assumptions:
  // Petrol: ₹105/Ltr, 40 km/l mileage -> ~₹2.625 per KM
  // EV Electricity: ₹7/unit, 100 km per 3 units -> ~₹0.21 per KM
  const petrolCostPerKm = 2.625;
  const evCostPerKm = 0.21;

  const daysInMonth = 30;
  const daysInYear = 365;

  const monthlyPetrol = Math.round(dailyKm * petrolCostPerKm * daysInMonth);
  const monthlyEV = Math.round(dailyKm * evCostPerKm * daysInMonth);
  const monthlySavings = monthlyPetrol - monthlyEV;

  const annualPetrol = Math.round(dailyKm * petrolCostPerKm * daysInYear);
  const annualEV = Math.round(dailyKm * evCostPerKm * daysInYear);
  const annualSavings = annualPetrol - annualEV;

  return (
    <section className="calculator-section" id="calculator-section">
      <div className="container">
        <div className="calculator-card">
          <div className="calc-inputs-col">
            <span className="section-tag">Interactive Calculator</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Calculate Your Petrol Savings
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              See how much money you save every month and year by switching from a petrol scooter to an electric scooter from Mridha & Sons Showroom.
            </p>

            <div className="calc-inputs">
              <div className="calc-input-group">
                <label htmlFor="daily-km-slider">
                  <span>Your Daily Commute Distance:</span>
                  <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800 }}>
                    {dailyKm} KM / Day
                  </span>
                </label>
                <input
                  type="range"
                  id="daily-km-slider"
                  className="calc-slider"
                  min="10"
                  max="120"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  <span>10 KM (Short Errands)</span>
                  <span>60 KM (Office Travel)</span>
                  <span>120 KM (Commercial)</span>
                </div>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                💡 <strong>Calculation Note:</strong> Petrol at ₹105/Ltr (40 km/l) vs EV Electricity at ₹7/Unit (3 Units per 100 KM).
              </div>
            </div>
          </div>

          <div className="calc-results-box">
            <div className="calc-savings-title">Estimated Annual Savings</div>
            <div className="calc-savings-amount">₹{annualSavings.toLocaleString('en-IN')}</div>
            <div className="calc-savings-sub">₹{monthlySavings.toLocaleString('en-IN')} / Month</div>

            <div className="calc-breakdown">
              <div className="calc-breakdown-item">
                <div className="label">Petrol Scooter Cost/Yr</div>
                <div className="val" style={{ color: '#F87171' }}>₹{annualPetrol.toLocaleString('en-IN')}</div>
              </div>
              <div className="calc-breakdown-item">
                <div className="label">Mridha EV Cost/Yr</div>
                <div className="val" style={{ color: '#4ADE80' }}>₹{annualEV.toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={generateWhatsAppUrl('', `Hello Mridha & Sons Showroom! I used your website savings calculator for ${dailyKm} KM daily travel. I am interested in switching to an EV.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                Switch to EV Today - Contact Owner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
