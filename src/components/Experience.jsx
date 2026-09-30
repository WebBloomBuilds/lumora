import React, { useRef, useEffect, useState } from 'react';
import './Experience.css';
import { Flame, Compass, Sparkles, Feather } from 'lucide-react';
import { experienceFeatures } from '../data/cafeData';

export default function Experience() {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffsetY((rect.top / window.innerHeight) * -12);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case 'feat-1':
        return <Flame size={16} />;
      case 'feat-2':
        return <Compass size={16} />;
      case 'feat-3':
        return <Feather size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="experience-header">
          <span className="eyebrow-tag centered">THE LUMORA ATMOSPHERE</span>
          <h2 className="experience-title">
            <span>Not Just Coffee.</span>
            <span>An Experience.</span>
          </h2>
          <p className="experience-desc">
            A sanctuary sculpted with natural materials, gentle acoustics, and the intoxicating warmth of freshly extracted espresso.
          </p>
        </div>

        {/* Large Immersive Image Showcase with Floating Cards */}
        <div className="experience-showcase-container">
          <img 
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=85" 
            alt="LUMORA Architectural Café Sanctuary" 
            className="experience-showcase-image"
            style={{
              transform: `translateY(${offsetY}px) scale(1.04)`
            }}
            loading="lazy"
          />
          <div className="experience-showcase-overlay"></div>

          {/* Floating Card 1: Freshly Roasted */}
          <div className="experience-floating-card card-roasted">
            <div className="floating-card-header">
              <div className="floating-card-icon">
                <Flame size={16} />
              </div>
              <h3 className="floating-card-title">Freshly Roasted</h3>
            </div>
            <div className="floating-card-tagline">Small Batch Craft</div>
            <p className="floating-card-desc">
              Weekly micro-lot roasts calibrated to extract nuanced jasmine and chocolate terroir.
            </p>
          </div>

          {/* Floating Card 2: Locally Sourced */}
          <div className="experience-floating-card card-sourced">
            <div className="floating-card-header">
              <div className="floating-card-icon">
                <Compass size={16} />
              </div>
              <h3 className="floating-card-title">Locally Sourced</h3>
            </div>
            <div className="floating-card-tagline">Single Estate Harvests</div>
            <p className="floating-card-desc">
              Direct-trade collaboration with shade-grown heritage estates in Chikmagalur & Araku.
            </p>
          </div>

          {/* Floating Card 3: Handcrafted Daily */}
          <div className="experience-floating-card card-daily">
            <div className="floating-card-header">
              <div className="floating-card-icon">
                <Feather size={16} />
              </div>
              <h3 className="floating-card-title">Handcrafted Daily</h3>
            </div>
            <div className="floating-card-tagline">Artisan Viennoiserie</div>
            <p className="floating-card-desc">
              Laminated French butter pastries and delicate confectioneries baked fresh every sunrise.
            </p>
          </div>
        </div>

        {/* Mobile Responsive Feature Cards (shown on small screens) */}
        <div className="experience-cards-mobile">
          {experienceFeatures.map((feat) => (
            <div key={feat.id} className="experience-floating-card" style={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto', bottom: 'auto', maxWidth: '100%' }}>
              <div className="floating-card-header">
                <div className="floating-card-icon">
                  {getIcon(feat.id)}
                </div>
                <h3 className="floating-card-title">{feat.title}</h3>
              </div>
              <div className="floating-card-tagline">{feat.tagline}</div>
              <p className="floating-card-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
