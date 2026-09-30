import React, { useState } from 'react';
import './SignatureMenu.css';
import { menuItems } from '../data/cafeData';
import { ArrowUpRight, Plus, Sparkles, BookOpen } from 'lucide-react';

export default function SignatureMenu({ onOpenFullMenu, onSelectItem }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <span className="eyebrow-tag centered">SIGNATURE CURATIONS</span>
          <h2 className="menu-title">Made With Intention.</h2>
          <p className="menu-subtitle">
            From your first morning coffee to your last sweet bite.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="menu-filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Signatures (4)
          </button>
          <button 
            className={`filter-tab ${filter === 'coffee' ? 'active' : ''}`}
            onClick={() => setFilter('coffee')}
          >
            Coffee & Cold Brew
          </button>
          <button 
            className={`filter-tab ${filter === 'bakery' ? 'active' : ''}`}
            onClick={() => setFilter('bakery')}
          >
            Artisan Bakery
          </button>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article 
              key={item.id} 
              className="menu-card"
              onClick={() => onSelectItem ? onSelectItem(item) : onOpenFullMenu()}
            >
              <div className="menu-card-image-wrap">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-card-img" 
                  loading="lazy"
                />
                <div className="menu-card-overlay"></div>
                <span className="menu-card-badge">{item.badge}</span>
                <span className="menu-card-number">{item.id}</span>
              </div>

              <div className="menu-card-body">
                <div className="menu-card-top-row">
                  <h3 className="menu-card-name">{item.name}</h3>
                  <span className="menu-card-price">{item.price}</span>
                </div>
                
                <p className="menu-card-desc">{item.description}</p>

                <div className="menu-card-footer">
                  <span className="menu-card-cta">
                    View Tasting Notes <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="menu-view-all-wrap">
          <button 
            className="btn-outline-dark"
            onClick={onOpenFullMenu}
          >
            <BookOpen size={16} />
            <span>Explore Full Café Menu & Pairings</span>
          </button>
        </div>
      </div>
    </section>
  );
}
