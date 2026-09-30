import React from 'react';
import { X, Sparkles, MapPin, Coffee, Award } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <div className="res-modal-header">
          <div>
            <span className="eyebrow-tag" style={{ marginBottom: '0.35rem' }}>PHILOSOPHY & CRAFT</span>
            <h2 className="res-modal-title">The Story of Lumora</h2>
            <p className="res-modal-subtitle">Conscious sourcing, intentional roasting, and architectural calm.</p>
          </div>
          <button className="res-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="res-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-espresso)', marginBottom: '0.5rem' }}>
              01. Direct-Trade Origins
            </h4>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Rather than buying through commercial commodity exchanges, Lumora sources whole-crop micro-lots directly from third-generation coffee cultivators in Chikmagalur and the high-elevation slopes of the Araku Valley. We pay up to 45% above Fairtrade minimums, empowering estate workers and regenerative soil stewardship.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-espresso)', marginBottom: '0.5rem' }}>
              02. The Hyderabad Roastery
            </h4>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Inside our climate-controlled roastery in Jubilee Hills, green beans undergo sensory cupping before being loaded into our cast-iron drum roaster. We tailor individual roasting curves for every varietal, highlighting crisp bergamot and honey in our washed Ethiopians, and deep molten cacao in our Indian naturals.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-espresso)', marginBottom: '0.5rem' }}>
              03. Architecture of Slowness
            </h4>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              We worked with regional master artisans to sculpt an interior out of lime-wash walls, hand-thrown ceramics, raw teakwood benches, and floor-to-ceiling glass that brings the garden’s morning shadows indoors. It is an intentional haven engineered for slowing down.
            </p>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-cream)', borderRadius: '4px', border: '1px solid var(--border-gold)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Award size={28} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.9rem', color: 'var(--color-espresso)', display: 'block' }}>Best Specialty Roastery Concept 2024</strong>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Awarded for ethical sourcing & acoustic interior excellence.</span>
            </div>
          </div>

          <button className="btn-primary" onClick={onClose} style={{ alignSelf: 'center', marginTop: '0.5rem' }}>
            Return to Lumora Experience
          </button>
        </div>
      </div>
    </div>
  );
}
