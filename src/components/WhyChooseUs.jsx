import React from 'react';
import { Zap, ShieldCheck, CreditCard, Wrench, Wallet, Truck } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/vehiclesData';

export default function WhyChooseUs() {
  const iconMap = {
    'zero-petrol': <Zap size={26} />,
    'warranty': <ShieldCheck size={26} />,
    'no-license': <CreditCard size={26} />,
    'service': <Wrench size={26} />,
    'finance': <Wallet size={26} />,
    'delivery': <Truck size={26} />
  };

  return (
    <section className="perks-section" id="perks-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Showroom Advantage</span>
          <h2 className="section-title">Why Choose Mridha and Sons Showroom?</h2>
          <p className="section-subtitle">
            We are committed to delivering the most reliable, transparent, and hassle-free electric vehicle buying experience.
          </p>
        </div>

        <div className="perks-grid">
          {SHOWROOM_INFO.perks.map((p) => (
            <div key={p.id} className="perk-card">
              <div className="perk-icon-wrap">
                {iconMap[p.id] || <Zap size={26} />}
              </div>
              <h3 className="perk-title">{p.title}</h3>
              <p className="perk-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
