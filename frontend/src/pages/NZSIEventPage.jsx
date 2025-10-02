import React, { useEffect } from 'react';
import NZSIHero from '../components/nzsi/NZSIHero';
import NZSIDescription from '../components/nzsi/NZSIDescription';
import NZSIRegistration from '../components/nzsi/NZSIRegistration';
import NZSIDetails from '../components/nzsi/NZSIDetails';
import NZSIVideo from '../components/nzsi/NZSIVideo';
import NZSIGallery from '../components/nzsi/NZSIGallery';
import NZSIContact from '../components/nzsi/NZSIContact';

const NZSIEventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NZSIHero />
      <NZSIVideo />
      <NZSIDetails />
      <NZSIRegistration />
      <NZSIDescription />
      <NZSIRegistration />
      <NZSIVideo />
      <NZSIGallery />
      <NZSIContact />
    </div>
  );
};

export default NZSIEventPage;