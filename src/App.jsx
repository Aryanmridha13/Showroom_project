import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import XOneShowcase from './components/XOneShowcase';
import StyleAndSpaceBanner from './components/StyleAndSpaceBanner';
import QuickModelsGrid from './components/QuickModelsGrid';
import OverviewBanner from './components/OverviewBanner';
import VehicleCatalog from './components/VehicleCatalog';
import GenuinePartsSection from './components/GenuinePartsSection';
import VehicleModal from './components/VehicleModal';
import TestRideModal from './components/TestRideModal';
import SavingsCalculator from './components/SavingsCalculator';
import ShowroomGallery from './components/ShowroomGallery';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

import { VEHICLES_DATA } from './data/vehiclesData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [testRideOpen, setTestRideOpen] = useState(false);
  const [testRideDefaultModel, setTestRideDefaultModel] = useState('');

  const selectedVehicle = VEHICLES_DATA.find((v) => v.id === selectedVehicleId);

  const handleOpenVehicleModal = (id) => {
    setSelectedVehicleId(id);
  };

  const handleCloseVehicleModal = () => {
    setSelectedVehicleId(null);
  };

  const handleOpenTestRide = (modelName = '') => {
    setTestRideDefaultModel(modelName);
    setTestRideOpen(true);
  };

  const handleCloseTestRide = () => {
    setTestRideOpen(false);
  };

  return (
    <div className="app-container">
      {/* 1. Top Announcement Bar with Owner Helpline */}
      <AnnouncementBar onOpenTestRide={() => handleOpenTestRide()} />

      {/* 2. Master Navbar with Electric Vehicle Showroom branding & live search */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 3. Main Showroom Content */}
      <main>
        {/* Hero Slider (Ref: Photo 2 & 1) */}
        <HeroSlider
          onOpenVehicleModal={handleOpenVehicleModal}
          onOpenTestRide={handleOpenTestRide}
        />

        {/* 🌟 New Reference 3: X-ONE Multi-Color Customizer Showcase */}
        <XOneShowcase
          onOpenModal={handleOpenVehicleModal}
          onOpenTestRide={handleOpenTestRide}
        />

        {/* 🌟 New Reference 2: STYLE & SPACE FOR THE FUTURE Cinematic Section */}
        <StyleAndSpaceBanner
          onOpenTestRide={handleOpenTestRide}
        />

        {/* Full Vehicle Catalog & Specs (All Electric Vehicles) */}
        <VehicleCatalog
          searchQuery={searchQuery}
          onOpenModal={handleOpenVehicleModal}
        />

        {/* 🌟 100% Genuine Spare Parts & Accessories Showcase */}
        <GenuinePartsSection />

        {/* Low Speed & High Speed EV Overview (Ref: Photo 4) */}
        <OverviewBanner />

        {/* Deliveries & Showroom Gallery (Ref: Photo 1 Right Gallery) */}
        {/* <ShowroomGallery /> */}

        {/* Petrol vs. EV Savings Calculator */}
        <SavingsCalculator />

        {/* Why Choose Electric Vehicle Showroom */}
        <WhyChooseUs />

        {/* Direct Owner Contact & Showroom Visit Hub */}
        <ContactSection />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Floating Quick WhatsApp & Call Buttons */}
      <FloatingActions />

      {/* 6. Dynamic Modals */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={handleCloseVehicleModal}
          onOpenTestRide={handleOpenTestRide}
        />
      )}

      <TestRideModal
        isOpen={testRideOpen}
        defaultModel={testRideDefaultModel}
        onClose={handleCloseTestRide}
      />
    </div>
  );
}
