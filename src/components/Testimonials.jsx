import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../data/cafeData';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="eyebrow-tag centered">GUEST REFLECTIONS</span>
          <h2 className="testimonials-title">People Love Lumora.</h2>
          <p className="testimonials-subtitle">
            Words from the architects, designers, travelers, and morning regulars who call Lumora their second home.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div>
                <div className="testimonial-quote-icon">“</div>
                <div className="testimonial-stars" aria-label="5 star rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-quote">
                  "{item.quote}"
                </p>
              </div>

              <div className="testimonial-author-box">
                <div className="testimonial-avatar">
                  {item.author.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">— {item.author}</span>
                  <span className="testimonial-author-meta">{item.role}</span>
                  <span className="testimonial-favorite">Loves: {item.favorite}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
