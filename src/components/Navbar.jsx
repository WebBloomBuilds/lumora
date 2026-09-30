import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onOpenReserveModal, isNavRevealed = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for indicator
      const sections = ['hero', 'story', 'menu', 'experience', 'gallery', 'visit'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollTo = (id) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`lumora-navbar ${scrolled ? 'scrolled' : ''} ${isNavRevealed ? 'nav-revealed' : ''}`}>
        <div className="container-wide navbar-container">
          {/* Logo */}
          <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <span className="brand-title">LUMORA</span>
            <span className="brand-tagline-micro">Artisan Coffee • Est. 2021</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-desktop">
            <li className="nav-link-item">
              <a 
                href="#hero" 
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              >
                Home
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#story" 
                className={activeSection === 'story' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('story'); }}
              >
                Our Story
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#menu" 
                className={activeSection === 'menu' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}
              >
                Menu
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#gallery" 
                className={activeSection === 'gallery' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#visit" 
                className={activeSection === 'visit' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('visit'); }}
              >
                Visit Us
              </a>
            </li>
          </ul>

          {/* Right Group: Reserve Button & Mobile Toggle */}
          <div className="nav-right-group">
            <button 
              className="nav-reserve-btn"
              onClick={onOpenReserveModal}
            >
              Reserve a Table
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li className="mobile-nav-item">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
              01. Home
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('story'); }}>
              02. Our Story
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>
              03. Signature Menu
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
              04. The Experience
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>
              05. Gallery
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#visit" onClick={(e) => { e.preventDefault(); scrollTo('visit'); }}>
              06. Visit Us
            </a>
          </li>
        </ul>

        <div className="mobile-nav-bottom">
          <button 
            className="btn-gold mobile-reserve-btn"
            onClick={() => {
              closeMobileMenu();
              onOpenReserveModal();
            }}
          >
            Reserve a Table
          </button>

          <p className="mobile-info-text">
            24 Garden Avenue, Jubilee Hills, Hyderabad<br/>
            Mon – Sun | 8:00 AM – 10:00 PM
          </p>
        </div>
      </aside>
    </>
  );
}
