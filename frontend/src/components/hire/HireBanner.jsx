import React from 'react';

const HireBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full flex justify-center">
        <img
          src="/src/assets/hire/hire_banner.jpg"
          alt="Off-road Motorcycle Hire"
          className="max-w-full h-auto object-contain transform transition duration-700 ease-out hover:scale-[1.02]"
        />
      </div>
    </section>
  );
};

export default HireBanner;
