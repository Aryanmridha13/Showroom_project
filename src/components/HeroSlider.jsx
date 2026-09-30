import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, MessageSquare, Calendar } from 'lucide-react';
import { generateWhatsAppUrl } from '../data/vehiclesData';

export default function HeroSlider({ onOpenVehicleModal, onOpenTestRide }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "mg-pro",
      badge: "Flagship Metal Body",
      modelTitle: "MG PRO",
      subtitle: "HEAVY METAL BODY + FIRE-PROOF LiFePO4 BATTERIES",
      tagline: "A premium combination for the ultimate LifeProof Electric Scooter with 60-85 KM range.",
      specs: [
        { label: "Certified Range", val: "60 - 85 KM" },
        { label: "Battery Pack", val: "LiFePO4 Safe Tech" },
        { label: "Body Chassis", val: "Heavy Metal Body" }
      ],
      image: "/assets/images/mg-pro.png",
      modelName: "MG PRO"
    },
    {
      id: "x3",
      badge: "Sport EV Launch",
      modelTitle: "X3",
      subtitle: "TWIN LED PROJECTOR HEADLAMPS + DYNAMIC SPORT COWLING",
      tagline: "Sleek aerodynamic lines and instant electric acceleration for effortless city cruising.",
      specs: [
        { label: "Certified Range", val: "60 - 80 KM" },
        { label: "Speed Category", val: "Low Speed Non-RTO" },
        { label: "Charging Time", val: "3 - 3.5 Hours" }
      ],
      image: "/assets/images/x3-blue.png",
      modelName: "X3"
    },
    {
      id: "x-one",
      badge: "Style & Space Bestseller",
      modelTitle: "X-ONE",
      subtitle: "FULL PERIMETER STEEL CRASH GUARDS + HIGH TORQUE HUB",
      tagline: "The best affordable electric scooter with maximum footboard space and heavy perimeter protection.",
      specs: [
        { label: "Certified Range", val: "60 - 85 KM" },
        { label: "Safety Armor", val: "Perimeter Guards" },
        { label: "Registration", val: "No License Req." }
      ],
      image: "/assets/images/x-one-black.png",
      modelName: "X-ONE"
    },
    {
      id: "se",
      badge: "High Speed Family Edition",
      modelTitle: "SE",
      subtitle: "1.8 KW HIGH-OUTPUT MOTOR + CHROME GUARDRAILS",
      tagline: "Engineered for absolute family comfort, dual disc braking, and reliable highway commute.",
      specs: [
        { label: "Top Speed", val: "55 - 65 KM/H" },
        { label: "Riding Range", val: "65 - 85 KM" },
        { label: "Brakes", val: "Dual Disc (CBS)" }
      ],
      image: "/assets/images/se-blue.png",
      modelName: "SE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="hero-slider-section" id="hero-section">
      <div className="hero-geo-bg"></div>
      <div className="container">
        <div className="hero-slide">
          <div className="hero-slide-content">
            <div className="hero-text-col">
              <div className="hero-badge-wrap">
                <Star size={14} fill="currentColor" />
                {slide.badge}
              </div>
              <h1 className="hero-title">
                KOMAKI <span className="highlight-orange">{slide.modelTitle}</span>
              </h1>
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <p className="hero-tagline">{slide.tagline}</p>

              {/* Performance Specs Strip (Notice: Strictly NO PRICE) */}
              <div className="hero-specs-strip">
                {slide.specs.map((spec, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="spec-strip-divider" />}
                    <div className="spec-strip-item">
                      <span className="spec-strip-label">{spec.label}</span>
                      <span className="spec-strip-value">{spec.val}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className="hero-cta-group">
                <button
                  type="button"
                  onClick={() => onOpenVehicleModal(slide.id)}
                  className="btn btn-primary"
                >
                  Explore {slide.modelName} Specs
                  <ChevronRight size={16} />
                </button>
                <a
                  href={generateWhatsAppUrl(slide.modelName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} fill="currentColor" />
                  Enquire with Dealer
                </a>
                <button
                  type="button"
                  onClick={() => onOpenTestRide(slide.modelName)}
                  className="btn btn-outline"
                >
                  <Calendar size={16} />
                  Book Test Ride
                </button>
              </div>
            </div>

            <div className="hero-visual-col">
              <img
                src={slide.image}
                alt={slide.modelName}
                className="hero-scooter-img"
                key={slide.id}
              />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="hero-controls">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
