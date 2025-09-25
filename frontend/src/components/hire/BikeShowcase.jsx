import React from 'react';
import { Bike } from 'lucide-react';

const BikeShowcase = () => {
  const bikes = [
    {
      id: 'crf250',
      name: 'CRF250 RALLY',
      price: 205,
      image: '/src/assets/bikes/HONDA CRF250 RALLY.jpg',
      available: true
    },
    {
      id: 'bmw310',
      name: 'BMW G310 GS',
      price: 215,
      image: '/src/assets/bikes/BMW 310 GS.jpg',
      available: true
    },
    {
      id: 'cb500x',
      name: 'HONDA CB500X',
      price: 230,
      image: '/src/assets/bikes/HONDA CB500X.jpg',
      available: true
    },
  ];

  return (
    <div id="bikes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Check out our Motorcycles for Hire</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div key={bike.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">${bike.price}.00 /day</p>
                
                {!bike.available && (
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    SOLD OUT
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeShowcase;
