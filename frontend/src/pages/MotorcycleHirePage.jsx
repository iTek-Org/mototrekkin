import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle, Star, Shield, Bike, CreditCard } from 'lucide-react';
import HireHero from '../components/hire/HireHero';
import HireFeatureCards from '../components/hire/HireFeatureCards';
import HireBanner from '../components/hire/HireBanner';
import BikeShowcase from '../components/hire/BikeShowcase';
import HireBookingForm from '../components/hire/HireBookingForm';

const MotorcycleHirePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Date Selection
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: '',
    
    // Step 2: Bike Selection
    selectedBike: '',
    
    // Step 3: Gear Selection
    gearOption: 'bike-only', // 'bike-only', 'bike-gear', 'package'
    selectedGear: {
      helmet: false,
      jacket: false,
      gloves: false
    },
    addOns: {
      excessReduction: false,
      tyreProtection: false,
      touringWindscreen: false,
      softPanniers: false
    },
    
    // Step 4: Rider Details
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    confirmEmail: '',
    birthday: { day: '', month: '', year: '' },
    occupation: '',
    mobile: '',
    landline: '',
    address: '',
    address2: '',
    city: '',
    postCode: '',
    country: 'Australia',
    state: '',
    
    // Step 5: Emergency Contacts
    emergency1: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      landline: '',
      relationship: ''
    },
    emergency2: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      landline: '',
      relationship: ''
    },
    
    // Step 6: License Details
    licenseValid: '',
    licenseNumber: '',
    licenseExpiry: { day: '', month: '', year: '' },
    licenseState: '',
    idUpload: null,
    
    // Step 7: Agreement
    termsAgreed: false
  });

  const bikes = [
    {
      id: 'crf250',
      name: 'CRF250 RALLY',
      price: 205,
      image: '/src/assets/bikes/HONDA CRF250 RALLY.jpg',
      specs: {
        displacement: '250 cc',
        fuelTank: '10.1 L',
        cooling: 'Liquid Cooled',
        driveType: 'Chain Drive',
        maxPower: '23 hp @ 8500 rpm',
        maxTorque: '21.3 Nm @ 7000 rpm',
        exhaust: 'Single Exhaust',
        engineType: 'Single Cylinder, 4-Stroke, 4-Valve, Liquid-Cooled, DOHC'
      },
      available: true
    },
    {
      id: 'bmw310',
      name: 'BMW G310 GS',
      price: 215,
      image: '/src/assets/bikes/BMW 310 GS.jpg',
      specs: {
        displacement: '313 cc',
        fuelTank: '11.5 L',
        cooling: 'Liquid Cooled',
        driveType: 'Chain Drive',
        maxPower: '34 hp @ 9250 rpm',
        maxTorque: '28 Nm @ 7500 rpm',
        exhaust: 'Single Exhaust',
        engineType: 'Single Cylinder, 4-Stroke, 4-Valve, Liquid Cooled'
      },
      available: true
    },
    {
      id: 'cb500x',
      name: 'HONDA CB500X',
      price: 230,
      image: '/src/assets/bikes/HONDA CB500X.jpg',
      specs: {
        displacement: '471 cc',
        fuelTank: '17.7 L',
        cooling: 'Liquid Cooled',
        driveType: 'Chain Drive',
        maxPower: '46.9 hp @ 8500 rpm',
        maxTorque: '43.2 Nm @ 7000 rpm',
        exhaust: '2 in 1 Exhaust',
        engineType: '2 Cylinder, 4-Stroke, 8-Valve, DOHC Liquid-cooled Engine'
      },
      available: true
    },
  ];

  const gearOptions = {
    helmet: { price: 45, name: 'Helmet' },
    jacket: { price: 65, name: 'Jacket' },
    gloves: { price: 25, name: 'Gloves' }
  };

  const addOnOptions = {
    excessReduction: { price: 32, name: 'Excess Reduction' },
    tyreProtection: { price: 23, name: 'Tyre Protection' },
    touringWindscreen: { price: 10, name: 'Touring Windscreen (Tall)' },
    softPanniers: { price: 15, name: 'Soft Panniers' }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parentField, childField, value) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField],
        [childField]: value
      }
    }));
  };

  const calculateTotal = () => {
    const selectedBikeData = bikes.find(bike => bike.id === formData.selectedBike);
    if (!selectedBikeData) return 0;

    const days = Math.ceil((new Date(formData.returnDate) - new Date(formData.pickupDate)) / (1000 * 60 * 60 * 24)) || 1;
    
    let total = selectedBikeData.price * days;
    
    // Add gear costs
    if (formData.gearOption === 'package') {
      total += 100 * days; // Package option
    } else if (formData.gearOption === 'individual') {
      Object.entries(formData.selectedGear).forEach(([gear, selected]) => {
        if (selected) {
          total += gearOptions[gear].price * days;
        }
      });
    }
    
    // Add add-ons
    Object.entries(formData.addOns).forEach(([addOn, selected]) => {
      if (selected) {
        total += addOnOptions[addOn].price * days;
      }
    });
    
    return total;
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 7));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Hire Date</h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '14%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 1 of 7 - 14%</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Date <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => handleInputChange('pickupDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Date <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="date"
              value={formData.returnDate}
              onChange={(e) => handleInputChange('returnDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Time <span className="text-red-500">(Required)</span>
            </label>
            <select
              value={formData.pickupTime}
              onChange={(e) => handleInputChange('pickupTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">SELECT PICKUP TIME</option>
              {Array.from({length: 13}, (_, i) => {
                const hour = 7 + i;
                const time = hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour-12}:00 PM`;
                return <option key={time} value={time}>{time}</option>;
              })}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Time <span className="text-red-500">(Required)</span>
            </label>
            <select
              value={formData.returnTime}
              onChange={(e) => handleInputChange('returnTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">SELECT RETURN TIME</option>
              {Array.from({length: 13}, (_, i) => {
                const hour = 7 + i;
                const time = hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour-12}:00 PM`;
                return <option key={time} value={time}>{time}</option>;
              })}
            </select>
          </div>
        </div>

        {formData.pickupDate && formData.returnDate && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-semibold">
              Total Days: {Math.ceil((new Date(formData.returnDate) - new Date(formData.pickupDate)) / (1000 * 60 * 60 * 24)) || 1}
            </p>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <div></div>
          <button
            onClick={nextStep}
            disabled={!formData.pickupDate || !formData.returnDate || !formData.pickupTime || !formData.returnTime}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HireHero />

      {/* Promo Banner */}
      <HireBanner />

      {/* Three Feature Cards */}
      <HireFeatureCards />

      {/* Bike Showcase */}
      <BikeShowcase />

      {/* Booking Form */}
      <HireBookingForm />

      {/* Contact/CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* subtle decorative glows */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 transition duration-700 ease-out">
            Never Miss an Adventure
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-2">Moto Trekkin Motorcycle Hire</p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
            Hire one of our new off‑road adventure motorcycles and get ready to explore Australia. We offer airport
            transfers from Newcastle and Sydney.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group bg-white/5 border border-white/10 rounded-xl px-5 py-6 flex items-center justify-center gap-3 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <MapPin size={24} className="text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Airport Transfers Available</span>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-xl px-5 py-6 flex items-center justify-center gap-3 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <Star size={24} className="text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Weekend Specials</span>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-xl px-5 py-6 flex items-center justify-center gap-3 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <Bike size={24} className="text-emerald-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">New Off‑road Fleet</span>
            </div>
          </div>

          <div className="mt-10">
            <a href="#book" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">
              Start Your Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorcycleHirePage;
