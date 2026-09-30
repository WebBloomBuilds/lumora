import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { galleryImages } from '../data/cafeData';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [revealedItems, setRevealedItems] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal items sequentially
          galleryImages.forEach((_, idx) => {
            setTimeout(() => {
              setRevealedItems(prev => [...prev, idx]);
            }, idx * 110);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

  return (
    <section id="gallery" className="gallery-section" ref={galleryRef}>
      <div className="container">
        {/* Header */}
        <div className="gallery-header">
          <span className="eyebrow-tag centered">VISUAL ARCHIVE</span>
          <h2 className="gallery-title">Moments at Lumora</h2>
          <p className="gallery-desc">
            A visual documentation of morning rituals, steaming portafilters, quiet sun rays, and our community in Hyderabad.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => {
            const isRevealed = revealedItems.includes(idx);
            return (
              <div 
                key={img.id} 
                className="gallery-item"
                onClick={() => openLightbox(idx)}
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s`
                }}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="gallery-img" 
                  loading="lazy"
                />
                
                <div className="gallery-item-overlay">
                  <div className="gallery-view-indicator">
                    <span>View</span>
                  </div>

                  <div className="gallery-item-info">
                    <span className="gallery-item-cat">{img.category}</span>
                    <h3 className="gallery-item-title">{img.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div 
          className="gallery-lightbox-modal"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="lightbox-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close image lightbox"
            >
              <X size={20} />
            </button>

            <div className="lightbox-image-wrap">
              <img 
                src={currentImage.url} 
                alt={currentImage.title} 
                className="lightbox-img" 
              />
            </div>

            <div className="lightbox-caption-bar">
              <div className="lightbox-text">
                <span className="eyebrow-tag" style={{ marginBottom: '0.4rem' }}>
                  {currentImage.category} • {selectedImageIndex + 1} of {galleryImages.length}
                </span>
                <h3>{currentImage.title}</h3>
                <p>{currentImage.caption}</p>
              </div>

              <div className="lightbox-nav-buttons">
                <button 
                  className="lightbox-nav-btn"
                  onClick={prevImage}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="lightbox-nav-btn"
                  onClick={nextImage}
                  aria-label="Next photograph"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
