import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle } from 'lucide-react';
import { VEHICLES_DATA, SHOWROOM_INFO } from '../data/vehiclesData';

export default function TestRideModal({ isOpen, defaultModel, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState(defaultModel || VEHICLES_DATA[0].name);
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `*NEW TEST RIDE BOOKING REQUEST*\n\n` +
      `👤 *Customer Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🛵 *Model Requested:* ${model}\n` +
      `📅 *Preferred Date:* ${date}\n` +
      `⏰ *Time Slot:* ${slot}\n` +
      `📍 *Location:* Mridha & Sons Showroom\n\n` +
      `Please confirm my test ride appointment. Thank you!`;

    const waUrl = `https://wa.me/${SHOWROOM_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ padding: '2.25rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle size={54} color="#10B981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Booking Request Ready!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Connecting directly with Mridha and Sons Showroom on WhatsApp...
              </p>
            </div>
          ) : (
            <>
              <span className="section-tag">Showroom Experience</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Book a Free Test Ride
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Experience the smooth, silent power of electric mobility at Mridha and Sons Showroom. Choose your model & convenient slot.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="tr-name">Full Name *</label>
                  <input
                    type="text"
                    id="tr-name"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tr-phone">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="tr-phone"
                    className="form-control"
                    placeholder="e.g. 98300 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tr-model">Select Vehicle Model</label>
                  <select
                    id="tr-model"
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    {VEHICLES_DATA.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="tr-date">Preferred Date *</label>
                    <input
                      type="date"
                      id="tr-date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tr-slot">Preferred Slot</label>
                    <select
                      id="tr-slot"
                      className="form-control"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10AM - 1PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1PM - 4PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  Confirm Test Ride on WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
