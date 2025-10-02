import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import motoFreestyle from '../assets/adventures/moto-freestyle.jpg';
import nzsiBanner1 from '../assets/adventures/2025/NZSI-BANNERS-DESKTOP-1.webp';
import roadRallye1 from '../assets/adventures/2025/ROAD-RALLYE-2025-DESKTOP.webp';
import roadRallye2 from '../assets/adventures/2025/ROAD-RALLYE-2025-DESKTOP-2.webp';

const EventCalendar2025Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      id: 1,
      title: "ROAD RALLYE",
      date: "June 20-22, 2025",
      status: "SOLD OUT",
      image: roadRallye1,
      description: "Experience the ultimate road rally adventure with scenic routes and professional guidance."
    },
    {
      id: 2,
      title: "ROAD RALLYE PHASE 2",
      date: "October 10-12, 2025",
      status: "SOLD OUT",
      image: roadRallye2,
      description: "The second phase of our road rally series with advanced routes and new challenges."
    },
    {
      id: 3,
      title: "NZSI RALLYE",
      date: "8th - 15th November 2025",
      status: "AVAILABLE",
      image: nzsiBanner1,
      description: "Join us for an epic New Zealand South Island adventure through breathtaking landscapes and challenging terrain."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${motoFreestyle})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider">
              2025 EVENT
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
              CALENDAR
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
              GET READY FOR AN EXHILARATING RIDE AS WE GEAR UP FOR THE MOTO TREKKIN 2025 EVENTS!
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Anticipation is running high as we prepare to roll into the next year with even more adrenaline-pumping action and unforgettable two-wheeled adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Our dedicated team has been hard at work crafting an electrifying lineup of off-road motorcycle events that will leave you on the edge of your seat.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The rumble of engines, the thrill of the trails, and the camaraderie of fellow riders await you. Join us on this epic ride at Moto Trekkin 2025 Events – it's time to rev up and make memories that will last a lifetime!
            </p>
          </div>

          {/* Events Grid - Vertical Layout */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Event Image - Full Size Display */}
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {event.status === "SOLD OUT" ? (
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                        SOLD OUT
                      </span>
                    ) : (
                      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                        AVAILABLE
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4 font-semibold">
                    {event.date}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {event.status === "SOLD OUT" ? (
                    <button 
                      disabled
                      className="w-full bg-gray-400 text-gray-600 font-bold py-3 px-6 rounded-lg cursor-not-allowed"
                    >
                      SOLD OUT
                    </button>
                  ) : (
                    <Link 
                      to="/adventures/nzsi-2025"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
                    >
                      Click here to view this event.
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Info */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Visit our physical store:</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-2">Address:</p>
                  <p className="text-gray-300">
                    Unit 4/46 Sandringham Ave,<br />
                    Thornton, NSW, 2322
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">Email Address:</p>
                  <a href="mailto:info@mototrekkin.com.au" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                    CLICK HERE TO EMAIL US
                  </a>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">Phone Number:</p>
                  <a href="tel:0240724511" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                    02 4072 4511
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Opening hours:</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Mon-Fri:</span>
                  <span className="text-yellow-500">8AM-5PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat:</span>
                  <span className="text-yellow-500">9AM-Noon</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun:</span>
                  <span className="text-red-500">Closed</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Visit us on:</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-500 hover:text-yellow-400 text-2xl transition-colors">
                    📘
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400 text-2xl transition-colors">
                    📷
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400 text-2xl transition-colors">
                    🐦
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400 text-2xl transition-colors">
                    📺
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventCalendar2025Page;
