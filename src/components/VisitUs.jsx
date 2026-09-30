import React from 'react';
import './VisitUs.css';
import { MapPin, Clock, Navigation, Calendar, Phone, Sparkles } from 'lucide-react';
import { cafeInfo } from '../data/cafeData';

export default function VisitUs({ onOpenReserveModal, onOpenDirectionsModal }) {
  return (
    <section id="visit" className="visit-section">
      <div className="visit-bg-overlay"></div>
      
      <div className="container">
        <div className="visit-grid">
          {/* Left Column: Info & Details */}
          <div className="visit-content">
            <span className="eyebrow-tag">PLAN YOUR VISIT</span>
            
            <h2 className="visit-title">Your Table Is Waiting.</h2>
            
            <p className="visit-subtitle">
              Come by for great coffee, beautiful moments, and a little time to slow down.
            </p>

            <div className="visit-details-box">
              {/* Hours */}
              <div className="visit-info-row">
                <div className="visit-icon-circle">
                  <Clock size={18} />
                </div>
                <div className="visit-info-text">
                  <h4>Opening Hours</h4>
                  <p>{cafeInfo.hours.weekdays}</p>
                  <span>{cafeInfo.hours.weekends}</span>
                </div>
              </div>

              {/* Location */}
              <div className="visit-info-row">
                <div className="visit-icon-circle">
                  <MapPin size={18} />
                </div>
                <div className="visit-info-text">
                  <h4>Location</h4>
                  <p>24 Garden Avenue</p>
                  <span>Jubilee Hills, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="visit-button-group">
              <button 
                className="btn-gold"
                onClick={onOpenReserveModal}
              >
                <Calendar size={17} />
                <span>Reserve a Table</span>
              </button>

              <button 
                className="btn-outline visit-btn-directions"
                onClick={onOpenDirectionsModal}
              >
                <Navigation size={17} />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Café Card */}
          <div className="visit-image-card">
            <img 
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=85" 
              alt="LUMORA Café Garden Veranda Twilight" 
              className="visit-image"
              loading="lazy"
            />
            <div className="visit-card-overlay"></div>

            <div className="visit-card-floating-badge">
              <div className="visit-badge-left">
                <h5>Lumora Atrium & Veranda</h5>
                <span>Quiet seating, high-speed fiber & valet parking</span>
              </div>
              <div className="visit-badge-status">
                <span className="status-pulsing-dot"></span>
                <span>Open Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
