import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';
import { statisticsData } from '../data/cafeData';

export default function Statistics() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    rating: 0,
    creations: 0,
    guests: 0,
    years: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 1800; // ms
    const startTime = performance.now();

    const frame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        rating: +(easeOut * 4.9).toFixed(1),
        creations: Math.floor(easeOut * 25),
        guests: Math.floor(easeOut * 10),
        years: Math.floor(easeOut * 3)
      });

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCounts({
          rating: 4.9,
          creations: 25,
          guests: 10,
          years: 3
        });
      }
    };

    requestAnimationFrame(frame);
  };

  const getDisplayValue = (index) => {
    switch (index) {
      case 0:
        return counts.rating.toFixed(1);
      case 1:
        return counts.creations;
      case 2:
        return counts.guests;
      case 3:
        return counts.years;
      default:
        return 0;
    }
  };

  return (
    <section className="stats-section" ref={sectionRef} aria-label="Café Milestones and Statistics">
      <div className="stats-glow-orb"></div>
      <div className="container">
        <div className="stats-grid">
          {statisticsData.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number-wrap">
                <span className="stat-number">
                  {hasAnimated ? getDisplayValue(idx) : "0"}
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-subtext">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
