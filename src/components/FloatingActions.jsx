import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { SHOWROOM_INFO, generateWhatsAppUrl } from '../data/vehiclesData';

export default function FloatingActions() {
  return (
    <div className="floating-actions-bar">
      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-btn-whatsapp"
        aria-label="Chat with Showroom on WhatsApp"
      >
        <MessageSquare size={28} fill="currentColor" />
        <span className="float-tooltip">Chat with Owner</span>
      </a>
      <a
        href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`}
        className="float-btn float-btn-call"
        aria-label="Call Showroom Owner"
      >
        <Phone size={24} />
        <span className="float-tooltip">Call Showroom</span>
      </a>
    </div>
  );
}
