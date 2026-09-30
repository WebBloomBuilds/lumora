import React from 'react';
import './Footer.css';
import { cafeInfo } from '../data/cafeData';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, name, url) => {
    if (name === 'Contact') {
      e.preventDefault();
      const el = document.getElementById('visit');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (name === 'Privacy') {
      e.preventDefault();
      alert("Privacy Policy: LUMORA values your privacy. We never share or sell your reservation information.");
    }
  };

  return (
    <footer className="lumora-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <span className="footer-logo">LUMORA</span>
            <p className="footer-tagline">
              {cafeInfo.tagline} Thoughtfully sourced beans, handcrafted drinks, and an architectural space designed for slowing down.
            </p>
          </div>

          {/* Links: Instagram, Facebook, Contact, Privacy */}
          <ul className="footer-links-group">
            {cafeInfo.socials.map((item, idx) => (
              <li key={idx} className="footer-link">
                <a 
                  href={item.url}
                  target={item.url.startsWith('http') ? "_blank" : undefined}
                  rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleLinkClick(e, item.name, item.url)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p>© 2026 Lumora Café. All rights reserved.</p>

          <div className="footer-credit">
            <Sparkles size={14} />
            <span>Showcase by WebBloomBuilds</span>
          </div>

          <button 
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
