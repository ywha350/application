
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import TutorProfile from './components/TutorProfile';
import Curriculum from './components/Curriculum';
import Method from './components/Method';
import Pricing from './components/Pricing';
import ApplicationProcess from './components/ApplicationProcess';
import ApplicationModal from './components/ApplicationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('온라인 단기 과외');

  const openModal = (type?: string) => {
    if (typeof type === 'string') {
      setSelectedType(type);
    }
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onApplyClick={() => openModal()} />
      <main>
        {/* 1. White */}
        <Hero onApplyClick={() => openModal()} />
        {/* 2. Slate-50 (New) */}
        <TrustSection />
        {/* 3. White (Updated from Slate-50) */}
        <TutorProfile />
        {/* 4. Slate-50 (Updated from White) */}
        <Curriculum />
        {/* 5. White (Updated from Slate-50) */}
        <Method />
        {/* 6. Slate-50 (Updated from White) */}
        <Pricing onApplyClick={openModal} />
        {/* 7. White (Updated from Slate-50) */}
        <ApplicationProcess />
      </main>
      
      {isModalOpen && (
        <ApplicationModal 
          onClose={closeModal} 
          initialType={selectedType} 
        />
      )}
    </div>
  );
};

export default App;
