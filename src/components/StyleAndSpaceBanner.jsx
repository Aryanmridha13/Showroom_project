import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Eye, Shield, Phone, MessageSquare } from 'lucide-react';
import { generateWhatsAppUrl, SHOWROOM_INFO } from '../data/vehiclesData';

export default function StyleAndSpaceBanner({ onOpenTestRide }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 'headlamp',
      title: 'Aerodynamic Crystal LED Headlamp',
      desc: 'Wide-angle futuristic beam designed for piercing darkness and maximum night road visibility.',
      top: '42%',
      left: '50%'
    },
    {
      id: 'mirrors',
      title: 'Aero-Wing Rearview Mirrors',
      desc: 'Carbon textured angular mirrors engineered to reduce aerodynamic drag.',
      top: '20%',
      left: '32%'
    },
    {
      id: 'cockpit',
      title: 'Spacious Ergonomic Cockpit',
      desc: 'Generous legroom with wide textured footboard and USB quick charging dock.',
      top: '68%',
      left: '50%'
    }
  ];

  return (
    <section className="style-space-section" id="style-space-section">
      <div className="style-space-bg-glow"></div>

      <div className="container style-space-container">
        {/* Main Title (Matching Photo 2 Reference: "STYLE & SPACE / FOR THE FUTURE") */}
        <motion.div
          className="style-space-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="style-space-giant-title"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            STYLE & SPACE
          </motion.h2>

          <h3 className="style-space-sub-title">
            FOR THE FUTURE
          </h3>

          <p className="style-space-caption">
            Glide through city streets with a high-torque electric motor that delivers a smooth and responsive ride.
          </p>
        </motion.div>

        {/* Visual Cockpit / Frontal Scooter Showcase with Interactive Hotspots (Photo 2 Reference) */}
        <div className="style-space-visual-wrap">
          <motion.div
            className="style-space-image-frame"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <img
              src="/assets/images/mg-pro.png"
              alt="Electric Vehicle Showroom Scooter Style & Space Cockpit"
              className="style-space-front-img"
              loading="lazy"
            />

            {/* Glowing DRL Ambient Lighting effect */}
            <div className="headlight-glow-fx" />

            {/* Interactive Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="interactive-hotspot-pin"
                style={{ top: spot.top, left: spot.left }}
                onMouseEnter={() => setActiveHotspot(spot)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
              >
                <div className="hotspot-pulse-ring" />
                <div className="hotspot-dot" />

                {activeHotspot?.id === spot.id && (
                  <motion.div
                    className="hotspot-card-popup"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <h5 className="hotspot-popup-title">{spot.title}</h5>
                    <p className="hotspot-popup-desc">{spot.desc}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Callout Bar */}
        <motion.div
          className="style-space-bottom-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="style-space-action-box">
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>
                Experience Next-Gen Smooth EV Commute
              </h4>
              <p style={{ color: '#CBD5E1', fontSize: '0.88rem' }}>
                Visit Electric Vehicle Showroom for a live demonstration of silent power and smart digital cockpit.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenTestRide('X-ONE')}
              >
                Book Test Ride
              </button>
              <a
                href={generateWhatsAppUrl('X-ONE', 'Hello Electric Vehicle Showroom! I saw the STYLE & SPACE feature and would like to visit the showroom.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} fill="currentColor" />
                WhatsApp Dealer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
