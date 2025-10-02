import React from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/adventures/2025/NZSI/thumbnail.png';

const NZSIVideo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster={thumbnail}
            >
              <source src="/src/assets/adventures/2025/NZSI/NZSI-PROMO-VIDEO-003-LATEST.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Click to Register Button */}
          <div className="text-center mt-8">
            <Link 
              to="/adventures/nzsi-2025/registration"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-xl text-2xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-green-500/50 animate-pulse hover:animate-none"
            >
              CLICK TO REGISTER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NZSIVideo;
