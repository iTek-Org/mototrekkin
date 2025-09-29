import React from 'react';
import AdventuresHero from '../components/adventures/AdventuresHero';
import AdventuresContent from '../components/adventures/AdventuresContent';
import AdventuresGallery from '../components/adventures/AdventuresGallery';
import AdventuresContact from '../components/adventures/AdventuresContact';

const AdventuresPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdventuresHero />
      <AdventuresContent />
      <AdventuresGallery />
      <AdventuresContact />
    </div>
  );
};

export default AdventuresPage;
