import React, { useState } from 'react';
import { X, MapPin, Navigation, Clock, Phone, Car, Copy, Check, ExternalLink } from 'lucide-react';
import { cafeInfo } from '../data/cafeData';

export default function DirectionsModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(cafeInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("24 Garden Avenue, Jubilee Hills, Hyderabad")}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <div className="res-modal-header">
          <div>
            <span className="eyebrow-tag" style={{ marginBottom: '0.35rem' }}>HOW TO FIND US</span>
            <h2 className="res-modal-title">Visit Lumora</h2>
            <p className="res-modal-subtitle">Jubilee Hills, Hyderabad</p>
          </div>
          <button className="res-close-btn" onClick={onClose} aria-label="Close directions modal">
            <X size={18} />
          </button>
        </div>

        <div className="res-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Stylized Architectural Map Card */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--color-espresso)',
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(197, 160, 89, 0.3)'
          }}>
            {/* Map lines graphic background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.18,
              backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px, 48px 48px, 48px 48px'
            }}></div>

            {/* Glowing Map Pin */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.25)',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold)',
                boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)'
              }}>
                <MapPin size={26} />
              </div>
              <span style={{
                marginTop: '0.65rem',
                fontSize: '0.82rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-cream)',
                fontWeight: 600
              }}>
                LUMORA CAFÉ & ROASTERY
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)' }}>
                Road No. 36 • Jubilee Hills
              </span>
            </div>
          </div>

          {/* Details list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <MapPin size={18} color="var(--color-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ flexGrow: 1 }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-espresso)' }}>Address</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {cafeInfo.address}
                </p>
              </div>
              <button 
                onClick={handleCopy}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  border: '1px solid var(--border-light-hover)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '2px',
                  color: 'var(--color-espresso)'
                }}
              >
                {copied ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Clock size={18} color="var(--color-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-espresso)' }}>Daily Hours</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {cafeInfo.hours.weekdays}<br/>
                  {cafeInfo.hours.weekends}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Car size={18} color="var(--color-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-espresso)' }}>Parking & Valet</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Complimentary valet parking available at the main entrance gate.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ flexGrow: 1, textDecoration: 'none' }}
            >
              <Navigation size={16} />
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>

            <button className="btn-outline-dark" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
