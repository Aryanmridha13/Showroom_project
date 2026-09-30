import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { SHOWROOM_INFO, VEHICLES_DATA } from '../data/vehiclesData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('General Showroom Enquiry');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `*NEW SHOWROOM ENQUIRY - MRIDHA & SONS*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `🏙️ *Customer City/Area:* ${city || 'Local'}\n` +
      `🛵 *Interested In:* ${model}\n` +
      `💬 *Message:* ${message || 'Interested in availability, test ride, and showroom quote.'}\n\n` +
      `Looking forward to hearing from you.`;

    const waUrl = `https://wa.me/${SHOWROOM_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setSent(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSent(false);
      setName('');
      setPhone('');
      setCity('');
      setMessage('');
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Contact</span>
          <h2 className="section-title">Connect with Showroom Owner</h2>
          <p className="section-subtitle">
            Reach out directly via phone, WhatsApp, or visit our dealership showroom for personal guidance and the best offers.
          </p>
        </div>

        <div className="contact-grid">
          {/* Owner Info & Details */}
          <div className="contact-info-card">
            <div className="owner-direct-box">
              <div className="owner-direct-header">
                <div className="owner-avatar">M</div>
                <div className="owner-titles">
                  <h3>{SHOWROOM_INFO.name}</h3>
                  <p>{SHOWROOM_INFO.division}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Speak directly with our showroom team for spot bookings, color availability, battery warranty consultation, and best exchange offers.
              </p>
              <div className="contact-actions-row">
                <a
                  href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="btn btn-primary"
                >
                  <Phone size={18} />
                  Call: {SHOWROOM_INFO.phonePrimary}
                </a>
                <a
                  href={`https://wa.me/${SHOWROOM_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={18} fill="currentColor" />
                  WhatsApp Owner
                </a>
              </div>
            </div>

            <div className="info-cards-list">
              <div className="info-item-row">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-details">
                  <h4>Showroom Location</h4>
                  <p>{SHOWROOM_INFO.address.fullAddress}</p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div className="info-details">
                  <h4>Working Hours</h4>
                  <p>{SHOWROOM_INFO.timing.weekdays} (Open All 7 Days)</p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-details">
                  <h4>Email Address</h4>
                  <p>
                    <a href={`mailto:${SHOWROOM_INFO.email}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {SHOWROOM_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Enquiry Form (Client Side - No DB Needed) */}
          <div className="enquiry-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={54} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                <h3 className="form-title">Enquiry Generated!</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  Opening direct WhatsApp chat with Mridha and Sons Showroom...
                </p>
              </div>
            ) : (
              <>
                <h3 className="form-title">Send Instant Enquiry</h3>
                <p className="form-subtitle">
                  Fill your details below to directly message the showroom owner on WhatsApp.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="enq-name">Your Full Name *</label>
                    <input
                      type="text"
                      id="enq-name"
                      className="form-control"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-phone">Your Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="enq-phone"
                      className="form-control"
                      placeholder="e.g. 98300 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-model">Select Vehicle of Interest</label>
                    <select
                      id="enq-model"
                      className="form-control"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    >
                      <option value="General Showroom Enquiry">General Showroom Enquiry</option>
                      {VEHICLES_DATA.map((v) => (
                        <option key={v.id} value={v.name}>{v.name} ({v.categoryLabel})</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-city">Your City / Location</label>
                    <input
                      type="text"
                      id="enq-city"
                      className="form-control"
                      placeholder="e.g. Chopna / Betul / Nearby Area"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-msg">Message / Questions</label>
                    <textarea
                      id="enq-msg"
                      className="form-control"
                      placeholder="Ask about test ride, battery life, color availability, exchange offer..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '1rem' }}
                  >
                    <Send size={18} />
                    Send Direct WhatsApp Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
