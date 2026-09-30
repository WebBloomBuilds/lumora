import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { Coffee, Compass, Sparkles, RotateCcw } from 'lucide-react';

/* --------------------------------------------------------------------------
   1. Realistic Matte Gooseneck Kettle SVG
   -------------------------------------------------------------------------- */
function GooseneckKettle() {
  return (
    <svg 
      viewBox="0 0 280 220" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kettleBodyGrad" x1="0.1" y1="0.1" x2="0.9" y2="0.9">
          <stop offset="0%" stopColor="#3A3029" />
          <stop offset="45%" stopColor="#241D18" />
          <stop offset="85%" stopColor="#15110E" />
          <stop offset="100%" stopColor="#0B0907" />
        </linearGradient>
        <linearGradient id="kettleSpoutGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A3D34" />
          <stop offset="60%" stopColor="#251D18" />
          <stop offset="100%" stopColor="#130E0B" />
        </linearGradient>
        <linearGradient id="walnutHandle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#754B30" />
          <stop offset="50%" stopColor="#56351F" />
          <stop offset="100%" stopColor="#382112" />
        </linearGradient>
        <filter id="kettleShadow" x="-15%" y="-15%" width="135%" height="135%">
          <feDropShadow dx="8" dy="16" stdDeviation="12" floodColor="#000000" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#kettleShadow)">
        {/* Kettle Pot Body */}
        <path
          d="M 120 70 L 195 70 C 205 70, 218 80, 222 105 L 230 160 C 232 175, 220 185, 205 185 L 115 185 C 100 185, 88 175, 90 160 L 98 105 C 102 80, 110 70, 120 70 Z"
          fill="url(#kettleBodyGrad)"
          stroke="rgba(197, 160, 89, 0.25)"
          strokeWidth="1.2"
        />

        {/* Lid & Walnut Knob */}
        <ellipse cx="157" cy="70" rx="38" ry="10" fill="#2D231D" stroke="#483B32" strokeWidth="1" />
        <ellipse cx="157" cy="58" rx="8" ry="7" fill="url(#walnutHandle)" />

        {/* Precision Gooseneck Spout */}
        <path
          d="M 100 165 C 50 160, 25 105, 30 75 C 32 60, 18 50, 10 72"
          stroke="url(#kettleSpoutGrad)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 100 165 C 50 160, 25 105, 30 75 C 32 60, 18 50, 10 72"
          stroke="rgba(255, 255, 255, 0.16)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Ergonomic Walnut Handle */}
        <path
          d="M 220 95 C 265 95, 275 140, 245 170"
          stroke="url(#walnutHandle)"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 220 95 C 265 95, 275 140, 245 170"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   2. Continuous Smooth Coffee Stream SVG (Lands inside cup)
   -------------------------------------------------------------------------- */
function CoffeeStream() {
  return (
    <div className="hero-coffee-stream-svg" aria-hidden="true">
      <svg viewBox="0 0 40 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="streamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E1007" />
            <stop offset="40%" stopColor="#54301A" />
            <stop offset="70%" stopColor="#804E2B" />
            <stop offset="100%" stopColor="#2E170A" />
          </linearGradient>
        </defs>

        <path
          d="M 24 0 C 22 35, 19 70, 20 120"
          stroke="url(#streamGrad)"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M 25 0 C 23 35, 20 70, 21 120"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* --------------------------------------------------------------------------
   3. Ceramic Coffee Cup: Shows Empty Interior Initially,
      Progressive Liquid Rise & Delicate Crema Formation
   -------------------------------------------------------------------------- */
function TabletopCoffeeCup() {
  return (
    <svg 
      viewBox="0 0 400 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Artisan ceramic coffee cup on saucer"
    >
      <defs>
        {/* Saucer Gradients */}
        <radialGradient id="saucerBase" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2C231E" />
          <stop offset="70%" stopColor="#1C1612" />
          <stop offset="95%" stopColor="#120E0B" />
          <stop offset="100%" stopColor="#0B0907" />
        </radialGradient>
        <linearGradient id="saucerRimHighlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A3B32" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C5A059" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4A3B32" stopOpacity="0.4" />
        </linearGradient>

        {/* Cup Exterior Ceramic Gradients */}
        <linearGradient id="ceramicBody" x1="0.1" y1="0.2" x2="0.9" y2="0.8">
          <stop offset="0%" stopColor="#3C322B" />
          <stop offset="35%" stopColor="#2B221C" />
          <stop offset="70%" stopColor="#1E1713" />
          <stop offset="100%" stopColor="#140F0C" />
        </linearGradient>
        <linearGradient id="cupRimHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E8D3" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2A221C" stopOpacity="0.2" />
        </linearGradient>

        {/* Empty Cup Interior Shadows & Cavity */}
        <linearGradient id="emptyInteriorWalls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#231A14" />
          <stop offset="60%" stopColor="#17110C" />
          <stop offset="100%" stopColor="#0E0906" />
        </linearGradient>

        {/* Poured Coffee Liquid Gradient */}
        <radialGradient id="espressoLiquid" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A2814" />
          <stop offset="55%" stopColor="#2F180A" />
          <stop offset="100%" stopColor="#180C05" />
        </radialGradient>

        {/* Delicate Crema / Microfoam Gradient */}
        <radialGradient id="velvetCrema" cx="48%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#C48E58" />
          <stop offset="35%" stopColor="#9C6438" />
          <stop offset="75%" stopColor="#5E351A" />
          <stop offset="100%" stopColor="#301708" />
        </radialGradient>

        <linearGradient id="microfoamPetals" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="60%" stopColor="#F7EEDD" />
          <stop offset="100%" stopColor="#E6D3B6" />
        </linearGradient>

        {/* Handle Gradient */}
        <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3F342C" />
          <stop offset="60%" stopColor="#241D17" />
          <stop offset="100%" stopColor="#140E0B" />
        </linearGradient>

        {/* Mouth Aperture ClipPath for Progressive Liquid Filling */}
        <clipPath id="cupMouthClip">
          <ellipse cx="200" cy="120" rx="94" ry="30" />
        </clipPath>

        <filter id="cupShadowFilter" x="-15%" y="-15%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#000000" floodOpacity="0.7" />
        </filter>
      </defs>

      {/* --- 1. Saucer Plate --- */}
      <g filter="url(#cupShadowFilter)">
        <ellipse cx="200" cy="245" rx="175" ry="46" fill="url(#saucerBase)" />
        <ellipse cx="200" cy="245" rx="175" ry="46" stroke="url(#saucerRimHighlight)" strokeWidth="1.5" />
        <ellipse cx="200" cy="246" rx="115" ry="28" fill="#140F0C" />
        <ellipse cx="200" cy="246" rx="115" ry="28" stroke="rgba(197, 160, 89, 0.2)" strokeWidth="1" />
      </g>

      {/* --- 2. Ceramic Cup Handle --- */}
      <g>
        <path
          d="M 285 130 C 355 135, 360 215, 275 220"
          stroke="url(#handleGrad)"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M 286 130 C 348 135, 353 212, 278 218"
          stroke="rgba(255, 255, 255, 0.16)"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* --- 3. Ceramic Cup Body --- */}
      <g filter="url(#cupShadowFilter)">
        <path
          d="M 100 120 C 100 230, 140 252, 200 252 C 260 252, 300 230, 300 120 Z"
          fill="url(#ceramicBody)"
        />
        <path
          d="M 120 140 C 120 215, 145 235, 175 240 C 160 235, 138 210, 138 140 Z"
          fill="rgba(255, 255, 255, 0.06)"
        />
      </g>

      {/* --- 4. Cup Mouth Rim --- */}
      <ellipse cx="200" cy="120" rx="100" ry="34" fill="#241B15" />
      <ellipse cx="200" cy="120" rx="100" ry="34" stroke="url(#cupRimHighlight)" strokeWidth="2.5" />

      {/* --- 5. INITIAL STATE: COMPLETELY EMPTY CUP INTERIOR --- */}
      {/* Deep empty inner cavity visibly communicates no coffee yet */}
      <ellipse cx="200" cy="120" rx="94" ry="30" fill="url(#emptyInteriorWalls)" />
      <ellipse cx="200" cy="136" rx="66" ry="19" fill="#100B08" />
      <ellipse cx="200" cy="120" rx="94" ry="30" fill="none" stroke="rgba(0, 0, 0, 0.55)" strokeWidth="2.5" />

      {/* --- 6. PROGRESSIVE COFFEE FILLING (Masked inside mouth) --- */}
      <g clipPath="url(#cupMouthClip)">
        {/* Liquid level progressively fills from 0% to 100% */}
        <g className="cup-liquid-flow">
          <ellipse cx="200" cy="122" rx="94" ry="30" fill="url(#espressoLiquid)" />
          {/* Subtle liquid surface reflection ring */}
          <ellipse cx="200" cy="122" rx="84" ry="26" stroke="rgba(197, 160, 89, 0.25)" strokeWidth="1.2" fill="none" />
        </g>

        {/* --- 7. DELICATE CREMA / MICROFOAM BLOOM (4.0s - 4.6s) --- */}
        <g className="cup-crema-bloom">
          <ellipse cx="200" cy="122" rx="94" ry="30" fill="url(#velvetCrema)" />
          
          {/* Barista heart microfoam motif */}
          <g opacity="0.88">
            <path
              d="M 200 142 C 168 132, 140 122, 160 110 C 178 100, 196 116, 200 125 C 204 116, 222 100, 240 110 C 260 122, 232 132, 200 142 Z"
              fill="url(#microfoamPetals)"
            />
            <path
              d="M 200 134 C 176 126, 154 118, 170 108 C 184 100, 196 112, 200 120 C 204 112, 216 100, 230 108 C 246 118, 224 126, 200 134 Z"
              fill="url(#microfoamPetals)"
            />
            <path
              d="M 200 124 C 184 118, 170 112, 180 104 C 190 98, 198 106, 200 112 C 202 106, 210 98, 220 104 C 230 112, 216 118, 200 124 Z"
              fill="url(#microfoamPetals)"
            />
            <path
              d="M 200 102 L 200 144"
              stroke="#724322"
              strokeWidth="2.0"
              strokeLinecap="round"
            />
            {/* Specular Liquid Point */}
            <ellipse cx="165" cy="115" rx="8" ry="3" fill="rgba(255, 255, 255, 0.28)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   4. Rising Translucent Steam SVG (Activated 5.4s+)
   -------------------------------------------------------------------------- */
function SteamTrails({ isActive }) {
  return (
    <div className={`hero-steam-container ${isActive ? 'active' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <path
          d="M 35 110 C 20 85, 50 60, 30 30 C 20 15, 38 0, 25 -20"
          className="steam-path steam-path-1"
        />
        <path
          d="M 60 110 C 75 80, 40 55, 65 25 C 80 8, 55 -10, 70 -25"
          className="steam-path steam-path-2"
        />
        <path
          d="M 85 110 C 100 85, 75 60, 92 35 C 105 18, 85 0, 95 -20"
          className="steam-path steam-path-3"
        />
      </svg>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Hero Component
   -------------------------------------------------------------------------- */
export default function Hero({ onExploreMenu, onVisitLumora, onUiRevealed }) {
  // Cinematic Timeline Stages
  const [steamActive, setSteamActive] = useState(false);
  const [sunlightWarm, setSunlightWarm] = useState(false);
  const [brandRevealed, setBrandRevealed] = useState(false);
  const [taglineRevealed, setTaglineRevealed] = useState(false);
  const [uiRevealed, setUiRevealed] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Parallax Coordinates
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Accurate Timeline Orchestration
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSteamActive(true);
      setSunlightWarm(true);
      setBrandRevealed(true);
      setTaglineRevealed(true);
      setUiRevealed(true);
      if (onUiRevealed) onUiRevealed(true);
      return;
    }

    // Step 0.0s – 1.0s: Initial empty cup & quiet morning café
    setSteamActive(false);
    setSunlightWarm(false);
    setBrandRevealed(false);
    setTaglineRevealed(false);
    setUiRevealed(false);
    if (onUiRevealed) onUiRevealed(false);

    // Step 5.4s: Pot has left, steam begins rising, sunlight settles
    const steamTimer = setTimeout(() => {
      setSteamActive(true);
      setSunlightWarm(true);
    }, 5400);

    // Step 6.2s: CINEMATIC BRAND REVEAL ("LUMORA")
    const brandTimer = setTimeout(() => {
      setBrandRevealed(true);
    }, 6200);

    // Step 6.6s: Brand Tagline ("COFFEE. CRAFTED BEAUTIFULLY.")
    const taglineTimer = setTimeout(() => {
      setTaglineRevealed(true);
    }, 6600);

    // Step 7.2s: Website Content & Navigation Staggered Reveal
    const uiTimer = setTimeout(() => {
      setUiRevealed(true);
      if (onUiRevealed) onUiRevealed(true);
    }, 7200);

    return () => {
      clearTimeout(steamTimer);
      clearTimeout(brandTimer);
      clearTimeout(taglineTimer);
      clearTimeout(uiTimer);
    };
  }, [animKey, onUiRevealed]);

  // Desktop Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 960) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      setMouseOffset({ x: normX, y: normY });
    };

    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleReplay = () => {
    setAnimKey(prev => prev + 1);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax Offsets:
  // Background: 2-4px opposite
  const bgParallaxX = -mouseOffset.x * 3.5;
  const bgParallaxY = -mouseOffset.y * 3.5;

  // Table & Coffee cup: 3-6px with mouse, subtle downward scroll shift
  const cupParallaxX = mouseOffset.x * 5.0;
  const cupParallaxY = mouseOffset.y * 5.0 + scrollY * 0.1;
  const cupScrollOpacity = Math.max(0.2, 1 - scrollY / 700);

  // Sunlight: 1-3px with mouse
  const sunParallaxX = mouseOffset.x * 2.2;
  const sunParallaxY = mouseOffset.y * 2.2;

  return (
    <section 
      id="hero" 
      className={`hero-section ${uiRevealed ? 'hero-ui-revealed' : ''}`}
      ref={heroRef}
    >
      {/* 0.0s: Morning Café Window Environment (Camera Push-In 1.035 -> 1.0) */}
      <div 
        className="hero-bg-container"
        style={{
          transform: `translate3d(${bgParallaxX}px, ${bgParallaxY}px, 0)`
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85" 
          alt="LUMORA Café Window in Early Morning"
          className="hero-bg-image"
          loading="eager"
        />
      </div>

      {/* Atmospheric Overlays */}
      <div className="hero-overlay"></div>
      <div className="hero-grain"></div>

      {/* Morning Sunlight Beam Through Window */}
      <div 
        className={`hero-sunlight-beam ${sunlightWarm ? 'warm-active' : ''}`}
        style={{
          transform: `translate3d(${sunParallaxX}px, ${sunParallaxY}px, 0) rotate(-16deg) skewX(-12deg)`
        }}
      ></div>

      {/* Replay Pour Button for Portfolio Presentations */}
      <button 
        className="hero-replay-btn"
        onClick={handleReplay}
        title="Replay The Morning Pour cinematic sequence"
        aria-label="Replay hero cinematic sequence"
      >
        <RotateCcw size={13} />
        <span>Replay Pour</span>
      </button>

      {/* Main Editorial Container */}
      <div className="container">
        <div className="hero-editorial-grid">
          
          {/* Left Column: Brand Reveal & Hero Content */}
          <div className="hero-content">
            
            {/* Small Eyebrow Label (Reveals with UI) */}
            <div className="hero-badge hero-ui-item">
              <span className="hero-badge-dot"></span>
              <span>ARTISAN COFFEE • EST. 2021</span>
            </div>

            {/* PHASE 9: CINEMATIC BRAND REVEAL ("LUMORA") */}
            <div className={`hero-brand-block ${brandRevealed ? 'brand-revealed' : ''}`}>
              <div className="hero-brand-veil"></div>
              <h1 className="hero-brand-title">
                LUMORA
              </h1>
            </div>

            {/* PHASE 10: BRAND TAGLINE REVEAL */}
            <div className={`hero-brand-tagline ${taglineRevealed ? 'tagline-revealed' : ''}`}>
              <span>Coffee. Crafted Beautifully.</span>
              <span className="tagline-dot"></span>
              <span style={{ color: 'var(--color-cream)', opacity: 0.75, fontSize: '0.72rem' }}>Hyderabad</span>
            </div>

            {/* EXISTING HERO HEADING */}
            <h2 className="hero-heading hero-ui-item">
              <span className="hero-heading-line">
                Thoughtfully Sourced.
              </span>
              <span className="hero-heading-line">
                Handcrafted <span className="hero-heading-accent">Daily.</span>
              </span>
            </h2>

            {/* PHASE 11: HERO WEBSITE CONTENT */}
            <p className="hero-subtitle hero-ui-item">
              Thoughtfully sourced beans, handcrafted drinks, and an architectural space designed for slowing down.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button 
                className="btn-gold hero-btn-primary hero-ui-item"
                onClick={onExploreMenu || (() => scrollTo('menu'))}
              >
                <Coffee size={17} />
                <span>Explore Our Menu</span>
              </button>
              
              <button 
                className="btn-outline hero-btn-secondary hero-ui-item"
                onClick={onVisitLumora || (() => scrollTo('visit'))}
              >
                <Compass size={17} />
                <span>Visit Lumora</span>
              </button>
            </div>
          </div>

          {/* Right Column: Café Table Scene & The Pour Commercial */}
          <div className="hero-cinematic-stage">
            <div 
              className="hero-table-stage-wrap"
              style={{
                transform: `translate3d(${cupParallaxX}px, ${cupParallaxY}px, 0)`,
                opacity: cupScrollOpacity
              }}
            >
              {/* Cup, Kettle & Pour Group */}
              <div className="hero-cup-and-pour-group" key={`commercial-${animKey}`}>
                
                {/* 1.0s – 5.4s: Kettle arrives upright, pauses, tilts, pours, tilts back upright, exits */}
                <div className="hero-kettle-container">
                  <GooseneckKettle />
                </div>

                {/* 2.0s – 4.0s: Continuous Coffee Stream (Lands inside cup) */}
                <CoffeeStream />

                {/* 5.4s+: Thin Elegant Steam Trails */}
                <SteamTrails isActive={steamActive} />

                {/* Ground Contact Shadow on Table */}
                <div className="hero-cup-table-shadow"></div>

                {/* 0.0s+: Empty Ceramic Cup -> Fills 2.0-4.0s -> Crema blooms 4.0-4.6s */}
                <TabletopCoffeeCup />

                {/* Caption Detail on Table: "CRAFTED DAILY" */}
                <div className={`hero-cup-caption ${brandRevealed ? 'visible' : ''}`}>
                  <span className="hero-cup-caption-text">CRAFTED DAILY</span>
                  <span className="hero-cup-caption-line"></span>
                  <span className="hero-cup-caption-sub">92°C • EXTRACTION</span>
                </div>
              </div>

              {/* Wooden / Stone Table Surface */}
              <div className="hero-table-surface">
                <div className="hero-table-light-sheen"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Floating Card (Reveals at 7.2s+) */}
      <div className="hero-floating-card hero-ui-item">
        <div className="hero-floating-icon">
          <Sparkles size={17} />
        </div>
        <div className="hero-floating-text">
          <h4>Single-Origin Arabica</h4>
          <p>Micro-lot roasted weekly in Hyderabad</p>
        </div>
      </div>

      {/* Scroll Indicator (Reveals at 7.2s+) */}
      <div 
        className="hero-scroll-indicator hero-ui-item"
        onClick={() => scrollTo('story')}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to Our Story"
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line-container">
          <div className="scroll-line-animated"></div>
        </div>
      </div>
    </section>
  );
}
