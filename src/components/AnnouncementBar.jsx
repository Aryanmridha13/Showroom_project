import React from 'react';
import { MapPin, Clock, Phone, PlayCircle } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/vehiclesData';

export default function AnnouncementBar({ onOpenTestRide }) {
  return (
    <aside className="announcement-bar">
      <div className="container">
        <div className="announcement-left">
          <span className="announcement-item">
            <MapPin size={14} />
            Mridha and Sons Showroom, Chopna, Madhya Pradesh
          </span>
          <span className="announcement-item">
            <Clock size={14} />
            Mon - Sun: 10:30 AM - 7:00 PM
          </span>
          <a href={`tel:${SHOWROOM_INFO.phonePrimary.replace(/\s+/g, '')}`} className="announcement-item">
            <Phone size={14} />
            Helpline: {SHOWROOM_INFO.phonePrimary}
          </a>
        </div>
        <div className="announcement-right">
          <button 
            type="button" 
            onClick={() => onOpenTestRide()} 
            className="announcement-cta"
          >
            <PlayCircle size={14} />
            Book Showroom Test Ride
          </button>
        </div>
      </div>
    </aside>
  );
}
