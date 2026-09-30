import React from 'react';
import './FinalCTA.css';
import { Compass, Sparkles } from 'lucide-react';

export default function FinalCTA({ onVisitLumora }) {
  const scrollToVisit = () => {
    const el = document.getElementById('visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="final-cta-section">
      {/* Animated Background Atmosphere */}
      <div className="final-cta-glow"></div>
      <div className="final-cta-ring ring-outer"></div>
      <div className="final-cta-ring ring-inner"></div>

      <div className="container final-cta-content">
        <span className="eyebrow-tag centered">AN INVITATION TO SLOW DOWN</span>
        
        <h2 className="final-cta-heading">
          <span>Made For Moments.</span>
          <span>Built With Passion.</span>
        </h2>

        <div className="final-cta-btn-wrap">
          <button 
            className="btn-gold final-cta-btn"
            onClick={onVisitLumora || scrollToVisit}
          >
            <Compass size={17} />
            <span>Visit Lumora</span>
          </button>
        </div>
      </div>
    </section>
  );
}
