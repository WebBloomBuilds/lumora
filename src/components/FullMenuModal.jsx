import React, { useState } from 'react';
import { X, Sparkles, Coffee, UtensilsCrossed } from 'lucide-react';
import { allExtendedMenu } from '../data/cafeData';

export default function FullMenuModal({ isOpen, onClose, initialItem, onOpenReserve }) {
  const [activeCategory, setActiveCategory] = useState('all');

  if (!isOpen) return null;

  const displayItems = activeCategory === 'all' 
    ? allExtendedMenu 
    : allExtendedMenu.filter(item => item.category === activeCategory);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <div className="res-modal-header">
          <div>
            <span className="eyebrow-tag" style={{ marginBottom: '0.35rem' }}>ARTISANAL REPERTOIRE</span>
            <h2 className="res-modal-title">Lumora Café Menu</h2>
            <p className="res-modal-subtitle">Handcrafted single-origin drinks & fresh daily bakery creations.</p>
          </div>
          <button className="res-close-btn" onClick={onClose} aria-label="Close menu modal">
            <X size={18} />
          </button>
        </div>

        {/* Categories Bar */}
        <div style={{
          padding: '1rem 2.5rem',
          display: 'flex',
          gap: '0.75rem',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--color-cream)'
        }}>
          <button 
            className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Items ({allExtendedMenu.length})
          </button>
          <button 
            className={`filter-tab ${activeCategory === 'coffee' ? 'active' : ''}`}
            onClick={() => setActiveCategory('coffee')}
          >
            Espresso & Pour-Over
          </button>
          <button 
            className={`filter-tab ${activeCategory === 'bakery' ? 'active' : ''}`}
            onClick={() => setActiveCategory('bakery')}
          >
            French Viennoiserie
          </button>
          <button 
            className={`filter-tab ${activeCategory === 'tea' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tea')}
          >
            Botanicals & Teas
          </button>
        </div>

        {/* Menu Items List */}
        <div className="res-modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {displayItems.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid rgba(28, 22, 18, 0.07)',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    flexShrink: 0
                  }}
                />

                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-espresso)' }}>
                        {item.name}
                      </h4>
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '2px',
                        backgroundColor: 'var(--color-gold-subtle)',
                        color: 'var(--color-gold)',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                      }}>
                        {item.badge}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: 'var(--color-gold)'
                    }}>
                      {item.price}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    {item.description}
                  </p>
                  
                  {item.details && (
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                      Notes: {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reserve table CTA inside menu */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: 'var(--color-espresso)',
            borderRadius: '4px',
            color: 'var(--color-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-cream)' }}>
                Joining Us for Coffee & Pastries?
              </h5>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)' }}>
                Reserve your preferred seat ahead of time.
              </span>
            </div>
            <button 
              className="btn-gold"
              onClick={() => {
                onClose();
                onOpenReserve();
              }}
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.8rem' }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
