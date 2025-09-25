import React from 'react';
import hero from '../../assets/bikehire.webp';

const HireHero = () => {
  return (
    <section
      id="hire-hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>
      <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
            🏍️ Motorcycle Hire
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-6 drop-shadow-2xl leading-tight animate-fade-in-up animation-delay-200">
          ADVENTURE BIKE
          <span className="block text-white">HIRE</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
          Hire a capable off-road motorcycle and explore Australia with Moto Trekkin.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#bikes"
            className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            View Bikes
          </a>
          <a
            href="#book"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireHero;


