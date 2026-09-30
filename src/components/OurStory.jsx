import React, { useRef, useEffect, useState } from 'react';
import './OurStory.css';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function OurStory({ onOpenStoryModal }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Subtle parallax offset
          setScrollYOffset((rect.top / window.innerHeight) * -15);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="story" className="story-section" ref={sectionRef}>
      <div className="container">
        <div className="story-grid">
          {/* Left: Large Café Image with Parallax & Accent Frame */}
          <div className="story-image-wrapper">
            <div className="story-image-accent"></div>
            <div className="story-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85" 
                alt="LUMORA Café Architectural Interior"
                className="story-image"
                style={{
                  transform: `translateY(${scrollYOffset}px) scale(1.02)`,
                  opacity: inView ? 1 : 0.8,
                  transition: 'transform 0.4s ease-out, opacity 0.8s ease-out'
                }}
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <div className="story-floating-badge">
              <span className="story-badge-year">Est. 2021</span>
              <p className="story-badge-caption">
                Crafted for quiet mornings, deep work, and unhurried conversation.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="story-content">
            <span className="eyebrow-tag">OUR STORY</span>

            <h2 className="story-heading">
              Made for slow mornings and meaningful moments.
            </h2>

            <div className="story-paragraphs">
              <p className="story-paragraph">
                LUMORA was born out of a quiet ambition: to build a sanctuary where coffee is honored as an artisanal craft, and time is given back to the senses. Nestled in Hyderabad’s quiet greenery, our sunlit space was sculpted using warm oak, limewash plaster, and botanical accents.
              </p>
              <p className="story-paragraph">
                Every bean is ethically cultivated from shade-grown micro-lots in southern India and slow-roasted each week to preserve fragile floral notes and chocolate undertones. We invite you to step away from the noise, breathe in the roasted aroma, and savor every sip.
              </p>
            </div>

            <button 
              className="story-cta-btn"
              onClick={onOpenStoryModal}
            >
              <span>Discover Our Story</span>
              <ArrowRight size={18} className="story-cta-arrow" />
            </button>

            {/* Highlight Metrics */}
            <div className="story-highlights">
              <div className="story-highlight-item">
                <h5>100%</h5>
                <span>Direct-Trade Arabica</span>
              </div>
              <div className="story-highlight-item">
                <h5>92°C</h5>
                <span>Precision Brew Temp</span>
              </div>
              <div className="story-highlight-item">
                <h5>18 hrs</h5>
                <span>Slow Cold Extraction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
