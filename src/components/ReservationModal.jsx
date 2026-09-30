import React, { useState } from 'react';
import './ReservationModal.css';
import { X, Check, Calendar, Users, Clock, MapPin, Sparkles } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('Today (Evening)');
  const [time, setTime] = useState('7:00 PM');
  const [seating, setSeating] = useState('Sunlit Atrium');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const seatingAreas = [
    { id: 'atrium', name: 'Sunlit Atrium', desc: 'Botanical flora & vaulted skylight' },
    { id: 'veranda', name: 'Garden Veranda', desc: 'Open-air shaded terrace' },
    { id: 'bar', name: 'Espresso Bar', desc: 'Front-row artisan barista craft' },
    { id: 'nook', name: 'Reading Nook', desc: 'Quiet library corner & armchairs' },
  ];

  const timeSlots = [
    '8:30 AM', '10:00 AM', '11:30 AM', 
    '1:00 PM', '3:30 PM', '5:00 PM', 
    '7:00 PM', '8:30 PM'
  ];

  const dates = [
    'Today', 'Tomorrow', 'This Friday', 'This Saturday', 'This Sunday'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name for the table reservation.');
      return;
    }
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingCode(`LUM-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleReset} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="res-modal-header">
          <div>
            <span className="eyebrow-tag" style={{ marginBottom: '0.35rem' }}>TABLE CONCIERGE</span>
            <h2 className="res-modal-title">Reserve at Lumora</h2>
            <p className="res-modal-subtitle">24 Garden Avenue, Jubilee Hills, Hyderabad</p>
          </div>
          <button className="res-close-btn" onClick={handleReset} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form className="res-modal-body res-form-grid" onSubmit={handleSubmit}>
            {/* Seating Area */}
            <div className="res-form-group">
              <label className="res-label">Preferred Atmosphere</label>
              <div className="res-seating-options">
                {seatingAreas.map((area) => (
                  <div 
                    key={area.id}
                    className={`res-seat-card ${seating === area.name ? 'selected' : ''}`}
                    onClick={() => setSeating(area.name)}
                  >
                    <span className="res-seat-name">{area.name}</span>
                    <span className="res-seat-desc">{area.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guests & Date Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {/* Guests */}
              <div className="res-form-group">
                <label className="res-label">Party Size</label>
                <div className="res-guests-counter">
                  <button 
                    type="button" 
                    className="counter-btn"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                  >
                    -
                  </button>
                  <span className="guest-count-val">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                  <button 
                    type="button" 
                    className="counter-btn"
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Date */}
              <div className="res-form-group">
                <label className="res-label">Reservation Date</label>
                <select 
                  className="res-input" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                >
                  {dates.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Slots */}
            <div className="res-form-group">
              <label className="res-label">Preferred Time Slot</label>
              <div className="time-slots-grid">
                {timeSlots.map((slot, idx) => (
                  <button 
                    type="button"
                    key={idx}
                    className={`time-chip ${time === slot ? 'selected' : ''}`}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div className="res-form-group">
                <label className="res-label">Primary Guest Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Radhika Sharma" 
                  className="res-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="res-form-group">
                <label className="res-label">Phone (for Confirmation)</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210" 
                  className="res-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Special Request */}
            <div className="res-form-group">
              <label className="res-label">Special Notes / Dietary (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Window table, anniversary, oat milk preference" 
                className="res-input"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn-gold res-submit-btn">
              <Sparkles size={16} />
              <span>Confirm Table Reservation</span>
            </button>
          </form>
        ) : (
          <div className="res-success-view">
            <div className="success-check-circle">
              <Check size={32} />
            </div>
            <h3 className="success-title">Your Table is Reserved</h3>
            <p className="success-subtitle">
              We look forward to hosting you, {name}. A confirmation SMS has been prepared for your visit.
            </p>

            <div className="res-receipt-card">
              <div className="receipt-row">
                <span className="receipt-label">Reservation Code</span>
                <span className="receipt-value" style={{ color: 'var(--color-gold)', letterSpacing: '0.1em' }}>
                  {bookingCode}
                </span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Atmosphere</span>
                <span className="receipt-value">{seating}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Guests</span>
                <span className="receipt-value">{guests} Person(s)</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Date & Time</span>
                <span className="receipt-value">{date} at {time}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Location</span>
                <span className="receipt-value">24 Garden Ave, Jubilee Hills</span>
              </div>
            </div>

            <button className="btn-primary" onClick={handleReset}>
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
