import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import SignatureMenu from './components/SignatureMenu';
import Statistics from './components/Statistics';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import StoryModal from './components/StoryModal';
import DirectionsModal from './components/DirectionsModal';
import FullMenuModal from './components/FullMenuModal';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);
  const [isFullMenuModalOpen, setIsFullMenuModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isHeroUiRevealed, setIsHeroUiRevealed] = useState(false);

  const handleOpenReserve = () => {
    setIsReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveModalOpen(false);
  };

  const handleOpenStory = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStory = () => {
    setIsStoryModalOpen(false);
  };

  const handleOpenDirections = () => {
    setIsDirectionsModalOpen(true);
  };

  const handleCloseDirections = () => {
    setIsDirectionsModalOpen(false);
  };

  const handleOpenFullMenu = () => {
    setIsFullMenuModalOpen(true);
  };

  const handleCloseFullMenu = () => {
    setIsFullMenuModalOpen(false);
  };

  const handleSelectItem = (item) => {
    setSelectedMenuItem(item);
    setIsFullMenuModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lumora-app">
      {/* 1. Sticky Navigation */}
      <Navbar 
        onOpenReserveModal={handleOpenReserve}
        isNavRevealed={isHeroUiRevealed}
      />

      <main>
        {/* 2. Fullscreen Hero Section */}
        <Hero 
          onExploreMenu={() => scrollToSection('menu')}
          onVisitLumora={() => scrollToSection('visit')}
          onUiRevealed={setIsHeroUiRevealed}
        />

        {/* 3. Our Story Split Section */}
        <OurStory 
          onOpenStoryModal={handleOpenStory}
        />

        {/* 4. Signature Menu Section */}
        <SignatureMenu 
          onOpenFullMenu={handleOpenFullMenu}
          onSelectItem={handleSelectItem}
        />

        {/* 5. Minimal Dark Statistics Section */}
        <Statistics />

        {/* 6. The Experience Showcase Section */}
        <Experience />

        {/* 7. Gallery Section */}
        <Gallery />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Visit Us & Table Waiting Section */}
        <VisitUs 
          onOpenReserveModal={handleOpenReserve}
          onOpenDirectionsModal={handleOpenDirections}
        />

        {/* 10. Final Call to Action */}
        <FinalCTA 
          onVisitLumora={() => scrollToSection('visit')}
        />
      </main>

      {/* 11. Footer */}
      <Footer 
        onOpenContact={() => scrollToSection('visit')}
      />

      {/* Interactive Modals */}
      <ReservationModal 
        isOpen={isReserveModalOpen}
        onClose={handleCloseReserve}
      />

      <StoryModal 
        isOpen={isStoryModalOpen}
        onClose={handleCloseStory}
      />

      <DirectionsModal 
        isOpen={isDirectionsModalOpen}
        onClose={handleCloseDirections}
      />

      <FullMenuModal 
        isOpen={isFullMenuModalOpen}
        onClose={handleCloseFullMenu}
        initialItem={selectedMenuItem}
        onOpenReserve={handleOpenReserve}
      />
    </div>
  );
}
