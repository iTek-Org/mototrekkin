import React, { useState } from 'react';
import { Calendar, Clock, Bike, User, Shield, FileText, CheckCircle } from 'lucide-react';
import CalendarPicker from './CalendarPicker';

const HireBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Step 1: Date Selection
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: '',
    
    // Step 2: Bike Selection
    selectedBike: '',
    
    // Step 3: Gear Selection
    gearOption: 'bike-only', // 'bike-only' | 'bike-gear'
    gearSelectionType: 'package', // 'package' | 'individual' (when gearOption is bike-gear)
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

  // Detailed specifications for preview panel
  const bikeSpecsById = {
    crf250: {
      displacement: '250 cc',
      fuelTank: '10.1 L',
      cooling: 'Liquid Cooled',
      driveType: 'Chain Drive',
      maxPower: '23 hp @ 8500 rpm',
      maxTorque: '21.3 Nm @ 7000 rpm',
      exhaust: 'Single Exhaust',
      engineType: 'Single Cylinder, 4-Stroke, 4-Valve, Liquid-Cooled, DOHC'
    },
    bmw310: {
      displacement: '313 cc',
      fuelTank: '11.5 L',
      cooling: 'Liquid Cooled',
      driveType: 'Chain Drive',
      maxPower: '34 hp @ 9250 rpm',
      maxTorque: '28 Nm @ 7500 rpm',
      exhaust: 'Single Exhaust',
      engineType: 'Single Cylinder, 4-Stroke, 4-Valve, Liquid Cooled'
    },
    cb500x: {
      displacement: '471 cc',
      fuelTank: '17.7 L',
      cooling: 'Liquid Cooled',
      driveType: 'Chain Drive',
      maxPower: '46.9 hp @ 8500 rpm',
      maxTorque: '43.2 Nm @ 7000 rpm',
      exhaust: '2 in 1 Exhaust',
      engineType: '2 Cylinder, 4-Stroke, 8-Valve, DOHC Liquid-cooled Engine'
    }
  };

  // State/Region lists
  const AU_STATES = ['ACT','NSW','VIC','QLD','NT','WA','TAS','SA'];
  const NZ_REGIONS = ['AUK','BOP','CAN','GIS','HKB','MWT','MBH','NSN','NTL','OTA','STL','TKI','WKO','WGN','WTC'];

  const handleCountryChange = (value) => {
    setFormData(prev => ({ ...prev, country: value, state: '' }));
  };

  // Rental Agreement PDF served from public/pdfs
  const rentalAgreementPdfUrl = '/pdfs/MDP 2025 v.1.01.022.pdf';

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
    if (formData.gearOption === 'bike-gear') {
      if (formData.gearSelectionType === 'package') {
        total += 100 * days;
      } else if (formData.gearSelectionType === 'individual') {
        Object.entries(formData.selectedGear).forEach(([gear, selected]) => {
          if (selected) {
            total += gearOptions[gear].price * days;
          }
        });
      }
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
    setCurrentStep(prev => Math.min(prev + 1, 6));
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
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '16%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 1 of 6 - 16%</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalendarPicker
            label="Pickup Date"
            value={formData.pickupDate}
            onChange={(value) => handleInputChange('pickupDate', value)}
            required={true}
          />
          {errors.pickupDate && (
            <p className="text-sm text-red-600 mt-1 md:col-span-1">{errors.pickupDate}</p>
          )}

          <CalendarPicker
            label="Return Date"
            value={formData.returnDate}
            onChange={(value) => handleInputChange('returnDate', value)}
            required={true}
          />
          {errors.returnDate && (
            <p className="text-sm text-red-600 mt-1 md:col-span-1">{errors.returnDate}</p>
          )}

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
              {Array.from({length: 11}, (_, i) => {
                const hour = 7 + i; // 7 AM through 5 PM
                const time = hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour-12}:00 PM`;
                return <option key={time} value={time}>{time}</option>;
              })}
            </select>
            {errors.pickupTime && <p className="text-sm text-red-600 mt-1">{errors.pickupTime}</p>}
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
              {Array.from({length: 11}, (_, i) => {
                const hour = 7 + i; // 7 AM through 5 PM
                const time = hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour-12}:00 PM`;
                return <option key={time} value={time}>{time}</option>;
              })}
            </select>
            {errors.returnTime && <p className="text-sm text-red-600 mt-1">{errors.returnTime}</p>}
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
            onClick={() => {
              const stepErrors = {};
              if (!formData.pickupDate) stepErrors.pickupDate = 'Pickup date is required.';
              if (!formData.returnDate) stepErrors.returnDate = 'Return date is required.';
              if (!formData.pickupTime) stepErrors.pickupTime = 'Pickup time is required.';
              if (!formData.returnTime) stepErrors.returnTime = 'Return time is required.';
              setErrors(prev => ({ ...prev, ...stepErrors }));
              if (Object.keys(stepErrors).length === 0) nextStep();
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Hire Bike</h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '33%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 2 of 6 - 33%</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bikes.map((bike) => (
            <div 
              key={bike.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 transition-all cursor-pointer ${
                formData.selectedBike === bike.id ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleInputChange('selectedBike', bike.id)}
            >
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
                
                {formData.selectedBike === bike.id && (
                  <div className="flex items-center text-green-600 font-semibold">
                    <CheckCircle size={20} className="mr-2" />
                    Selected
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Preview panel when a bike is selected */}
        {formData.selectedBike && (
          <div className="mb-10">
            {(() => {
              const selected = bikes.find(b => b.id === formData.selectedBike);
              const specs = bikeSpecsById[formData.selectedBike] || {};
              return (
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col items-center">
                    <img src={selected.image} alt={selected.name} className="w-full max-w-3xl object-contain mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{selected.name} - ${selected.price}/day</h3>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                      <div className="text-sm text-gray-600 border-t pt-2">
                        <div className="flex justify-between py-1"><span className="font-medium">Displacement</span><span>{specs.displacement}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Fuel Tank Capacity (litres)</span><span>{specs.fuelTank}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Cooling System</span><span>{specs.cooling}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Drive Type</span><span>{specs.driveType}</span></div>
                      </div>
                      <div className="text-sm text-gray-600 border-t pt-2">
                        <div className="flex justify-between py-1"><span className="font-medium">Max Power</span><span>{specs.maxPower}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Max Torque</span><span>{specs.maxTorque}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Exhaust Pipes</span><span>{specs.exhaust}</span></div>
                        <div className="flex justify-between py-1"><span className="font-medium">Engine Type</span><span className="text-right">{specs.engineType}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Choose to Hire Gear */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose to Hire Gear</h2>
          
          {/* Choose your preferred option */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your preferred option</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gearOption"
                  value="bike-only"
                  checked={formData.gearOption === 'bike-only'}
                  onChange={(e) => handleInputChange('gearOption', e.target.value)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-700">Bike hire only</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gearOption"
                  value="bike-gear"
                  checked={formData.gearOption === 'bike-gear'}
                  onChange={(e) => handleInputChange('gearOption', e.target.value)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-700">Bike hire + gear</span>
              </label>
            </div>
          </div>

          {/* Gear sub-options shown only when bike-gear is selected */}
          {formData.gearOption === 'bike-gear' && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose how you want gear</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gearSelectionType"
                    value="package"
                    checked={formData.gearSelectionType === 'package'}
                    onChange={(e) => {
                      handleInputChange('gearSelectionType', e.target.value);
                      // Set all gear included and lock them
                      handleNestedInputChange('selectedGear','helmet', true);
                      handleNestedInputChange('selectedGear','jacket', true);
                      handleNestedInputChange('selectedGear','gloves', true);
                    }}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">Package Option - $100/day</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gearSelectionType"
                    value="individual"
                    checked={formData.gearSelectionType === 'individual'}
                    onChange={(e) => {
                      handleInputChange('gearSelectionType', e.target.value);
                      // Reset gear to unchecked and allow selection
                      handleNestedInputChange('selectedGear','helmet', false);
                      handleNestedInputChange('selectedGear','jacket', false);
                      handleNestedInputChange('selectedGear','gloves', false);
                    }}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">Individually</span>
                </label>
              </div>

              {/* Gear Included (package) */}
              {formData.gearSelectionType === 'package' && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-2">Gears Included</h4>
                  <div className="space-y-2 text-gray-700">
                    <label className="flex items-center opacity-70">
                      <input type="checkbox" checked readOnly className="mr-3 h-4 w-4" /> Helmet
                    </label>
                    <label className="flex items-center opacity-70">
                      <input type="checkbox" checked readOnly className="mr-3 h-4 w-4" /> Jacket
                    </label>
                    <label className="flex items-center opacity-70">
                      <input type="checkbox" checked readOnly className="mr-3 h-4 w-4" /> Gloves
                    </label>
                  </div>
                </div>
              )}

              {/* Individual pricing options */}
              {formData.gearSelectionType === 'individual' && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-2">Gears</h4>
                  <div className="space-y-2 text-gray-700">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.selectedGear.helmet}
                        onChange={(e)=>handleNestedInputChange('selectedGear','helmet', e.target.checked)}
                        className="mr-3 h-4 w-4"
                      />
                      Helmet - $45/day
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.selectedGear.jacket}
                        onChange={(e)=>handleNestedInputChange('selectedGear','jacket', e.target.checked)}
                        className="mr-3 h-4 w-4"
                      />
                      Jacket - $65/day
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.selectedGear.gloves}
                        onChange={(e)=>handleNestedInputChange('selectedGear','gloves', e.target.checked)}
                        className="mr-3 h-4 w-4"
                      />
                      Gloves - $25/day
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add-on Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ADD-ON OPTIONS</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.addOns.excessReduction}
                  onChange={(e) => handleNestedInputChange('addOns', 'excessReduction', e.target.checked)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">Excess Reduction - $32/day</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.addOns.tyreProtection}
                  onChange={(e) => handleNestedInputChange('addOns', 'tyreProtection', e.target.checked)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">Tyre Protection - $23/day</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.addOns.touringWindscreen}
                  onChange={(e) => handleNestedInputChange('addOns', 'touringWindscreen', e.target.checked)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">Touring Windscreen (Tall) - $10/day</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const stepErrors = {};
              if (!formData.selectedBike) stepErrors.selectedBike = 'Please select a bike.';
              setErrors(prev => ({ ...prev, ...stepErrors }));
              if (Object.keys(stepErrors).length === 0) nextStep();
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rider Details</h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 3 of 6 - 50%</p>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender <span className="text-red-500">(Required)</span></label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={(e) => handleInputChange('gender', e.target.value)} className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={(e) => handleInputChange('gender', e.target.value)} className="mr-2" />
                Female
              </label>
            </div>
            {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
          </div>
          <div></div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">(Required)</span></label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Email <span className="text-red-500">(Required)</span></label>
            <input
              type="email"
              value={formData.confirmEmail}
              onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmEmail && <p className="mt-1 text-sm text-red-600">{errors.confirmEmail}</p>}
          </div>

          {/* Birthday */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Birthday <span className="text-red-500">(Required)</span></label>
            <div className="grid grid-cols-3 gap-4">
              <select
                value={formData.birthday.day}
                onChange={(e) => handleNestedInputChange('birthday', 'day', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                value={formData.birthday.month}
                onChange={(e) => handleNestedInputChange('birthday', 'month', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Month</option>
                {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m, idx) => (
                  <option key={m} value={idx + 1}>{m}</option>
                ))}
              </select>
              <select
                value={formData.birthday.year}
                onChange={(e) => handleNestedInputChange('birthday', 'year', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Year</option>
                {Array.from({ length: 90 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            {errors.birthday && <p className="mt-1 text-sm text-red-600">{errors.birthday}</p>}
          </div>

          {/* Occupation and Phones */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Occupation <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.occupation && <p className="mt-1 text-sm text-red-600">{errors.occupation}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number <span className="text-red-500">(Required)</span></label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Landline</label>
            <input
              type="tel"
              value={formData.landline}
              onChange={(e) => handleInputChange('landline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div></div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address Line 2</label>
            <input
              type="text"
              value={formData.address2}
              onChange={(e) => handleInputChange('address2', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Post Code <span className="text-red-500">(Required)</span></label>
            <input
              type="text"
              value={formData.postCode}
              onChange={(e) => handleInputChange('postCode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.postCode && <p className="mt-1 text-sm text-red-600">{errors.postCode}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country <span className="text-red-500">(Required)</span></label>
            <select
              value={formData.country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">CHOOSE YOUR COUNTRY</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
            </select>
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
          </div>
          {formData.country && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State <span className="text-red-500">(Required)</span></label>
              <select
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{formData.country === 'New Zealand' ? 'CHOOSE YOUR STATE/REGION' : 'CHOOSE YOUR STATE'}</option>
                {(formData.country === 'New Zealand' ? NZ_REGIONS : AU_STATES).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => {
              // Validate required fields before proceeding
              const newErrors = {};
              const requiredString = ['firstName','lastName','gender','email','confirmEmail','occupation','mobile','address','city','postCode','country','state'];
              requiredString.forEach((field) => {
                if (!String(formData[field] || '').trim()) newErrors[field] = 'This field is required.';
              });
              // Birthday validation
              if (!formData.birthday.day || !formData.birthday.month || !formData.birthday.year) {
                newErrors.birthday = 'Please select day, month, and year.';
              }
              // Email match + simple format
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (formData.email && !emailRegex.test(formData.email)) {
                newErrors.email = 'Enter a valid email address.';
              }
              if (formData.email !== formData.confirmEmail) {
                newErrors.confirmEmail = 'Emails do not match.';
              }
              setErrors(newErrors);
              if (Object.keys(newErrors).length === 0) nextStep();
            }}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Contact Details</h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '66%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 4 of 6 - 66%</p>
        </div>

        {/* NOK 1 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Next of Kin / Emergency Contact 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">(Required)</span></label>
              <input
                type="text"
                value={formData.emergency1.firstName}
                onChange={(e) => handleNestedInputChange('emergency1','firstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emergency1FirstName && <p className="mt-1 text-sm text-red-600">{errors.emergency1FirstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">(Required)</span></label>
              <input
                type="text"
                value={formData.emergency1.lastName}
                onChange={(e) => handleNestedInputChange('emergency1','lastName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emergency1LastName && <p className="mt-1 text-sm text-red-600">{errors.emergency1LastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">(Required)</span></label>
              <input
                type="email"
                value={formData.emergency1.email}
                onChange={(e) => handleNestedInputChange('emergency1','email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emergency1Email && <p className="mt-1 text-sm text-red-600">{errors.emergency1Email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number <span className="text-red-500">(Required)</span></label>
              <input
                type="tel"
                value={formData.emergency1.mobile}
                onChange={(e) => handleNestedInputChange('emergency1','mobile', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emergency1Mobile && <p className="mt-1 text-sm text-red-600">{errors.emergency1Mobile}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Landline</label>
              <input
                type="tel"
                value={formData.emergency1.landline}
                onChange={(e) => handleNestedInputChange('emergency1','landline', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Relationship <span className="text-red-500">(Required)</span></label>
              <input
                type="text"
                value={formData.emergency1.relationship}
                onChange={(e) => handleNestedInputChange('emergency1','relationship', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emergency1Relationship && <p className="mt-1 text-sm text-red-600">{errors.emergency1Relationship}</p>}
            </div>
          </div>
        </div>


        {/* Driver's Licence Details */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Driver's Licence Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Is your licence currently valid? <span className="text-red-500">(Required)</span></label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input type="radio" name="licenseValid" value="Yes" checked={formData.licenseValid === 'Yes'} onChange={(e)=>handleInputChange('licenseValid', e.target.value)} className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input type="radio" name="licenseValid" value="No" checked={formData.licenseValid === 'No'} onChange={(e)=>handleInputChange('licenseValid', e.target.value)} className="mr-2" />
                  No
                </label>
              </div>
              {errors.licenseValid && <p className="mt-1 text-sm text-red-600">{errors.licenseValid}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Licence Number <span className="text-red-500">(Required)</span></label>
              <input type="text" value={formData.licenseNumber} onChange={(e)=>handleInputChange('licenseNumber', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.licenseNumber && <p className="mt-1 text-sm text-red-600">{errors.licenseNumber}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Licence Expiry Date <span className="text-red-500">(Required)</span></label>
              <div className="grid grid-cols-3 gap-4">
                <select value={formData.licenseExpiry.day} onChange={(e)=>handleNestedInputChange('licenseExpiry','day', e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">DD</option>
                  {Array.from({length:31},(_,i)=>i+1).map(d=> <option key={d} value={d}>{d}</option>)}
                </select>
                <select value={formData.licenseExpiry.month} onChange={(e)=>handleNestedInputChange('licenseExpiry','month', e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">MM</option>
                  {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m,idx)=> <option key={m} value={idx+1}>{m}</option>)}
                </select>
                <select value={formData.licenseExpiry.year} onChange={(e)=>handleNestedInputChange('licenseExpiry','year', e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">YYYY</option>
                  {Array.from({length:30},(_,i)=> new Date().getFullYear()+i).map(y=> <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              {errors.licenseExpiry && <p className="mt-1 text-sm text-red-600">{errors.licenseExpiry}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State of Issue <span className="text-red-500">(Required)</span></label>
              <select value={formData.licenseState} onChange={(e)=>handleInputChange('licenseState', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">CHOOSE YOUR STATE</option>
                {AU_STATES.map(s=> <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.licenseState && <p className="mt-1 text-sm text-red-600">{errors.licenseState}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload ID <span className="text-red-500">(Required)</span></label>
              <div className="flex items-center space-x-3">
                <input
                  id="idUpload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e)=>handleInputChange('idUpload', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                  className="hidden"
                />
                <label
                  htmlFor="idUpload"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  Choose File
                </label>
                <span className="text-sm text-gray-700">
                  {formData.idUpload ? formData.idUpload.name : 'No file chosen'}
                </span>
              </div>
              {errors.idUpload && <p className="mt-1 text-sm text-red-600">{errors.idUpload}</p>}
              <p className="text-xs text-gray-500 mt-1">Accepted file types: jpg, png, pdf, jpeg. Max file size: 256 MB.</p>
              <p className="text-xs text-gray-600 mt-1">Please note: you must have a valid driver's licence which is current at the time of commencing the event.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const newErrors = {};
              if (!String(formData.emergency1.firstName || '').trim()) newErrors.emergency1FirstName = 'This field is required.';
              if (!String(formData.emergency1.lastName || '').trim()) newErrors.emergency1LastName = 'This field is required.';
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!String(formData.emergency1.email || '').trim() || !emailRegex.test(formData.emergency1.email)) newErrors.emergency1Email = 'Enter a valid email address.';
              if (!String(formData.emergency1.mobile || '').trim()) newErrors.emergency1Mobile = 'This field is required.';
              if (!String(formData.emergency1.relationship || '').trim()) newErrors.emergency1Relationship = 'This field is required.';
              // Remove NOK2 requirements
              // Licence validation
              if (!String(formData.licenseValid || '').trim()) newErrors.licenseValid = 'Please choose Yes or No.';
              if (!String(formData.licenseNumber || '').trim()) newErrors.licenseNumber = 'This field is required.';
              if (!formData.licenseExpiry.day || !formData.licenseExpiry.month || !formData.licenseExpiry.year) newErrors.licenseExpiry = 'Please select expiry date.';
              if (!String(formData.licenseState || '').trim()) newErrors.licenseState = 'Please choose a state.';
              if (!formData.idUpload) newErrors.idUpload = 'Please upload your ID.';
              setErrors(newErrors);
              if (Object.keys(newErrors).length === 0) nextStep();
            }}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Moto Trekkin Rental Agreement</h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '83%'}}></div>
          </div>
          <p className="text-sm text-gray-600">Step 5 of 6 - 83%</p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700">Please read our Rental Agreement and confirm your acceptance to proceed. The agreement outlines responsibilities, insurance, damage excess, cancellation terms and safe riding requirements.</p>

          {/* PDF Preview */}
          <div className="border rounded-md overflow-hidden">
            <iframe
              title="Rental Agreement Preview"
              src={rentalAgreementPdfUrl}
              className="w-full h-[70vh]"
            />
          </div>

          <div className="flex items-center">
            <input
              id="termsAgreed"
              type="checkbox"
              checked={formData.termsAgreed}
              onChange={(e)=>handleInputChange('termsAgreed', e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-3"
            />
            <label htmlFor="termsAgreed" className="text-gray-800">
              I have read and agree to the Rental Agreement
            </label>
          </div>
          {errors.termsAgreed && <p className="text-sm text-red-600">{errors.termsAgreed}</p>}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const newErrors = {};
                if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to continue.';
                setErrors(newErrors);
                if (Object.keys(newErrors).length === 0) nextStep();
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep6 = () => {
    const selectedBike = bikes.find((b) => b.id === formData.selectedBike);
    const days = formData.pickupDate && formData.returnDate
      ? Math.max(1, Math.ceil((new Date(formData.returnDate) - new Date(formData.pickupDate)) / (1000 * 60 * 60 * 24)))
      : 1;
    const bikeSubtotal = selectedBike ? selectedBike.price * days : 0;
    const addOnLines = Object.entries(formData.addOns)
      .filter(([_, v]) => v)
      .map(([k]) => ({ key: k, name: addOnOptions[k].name, pricePerDay: addOnOptions[k].price, total: addOnOptions[k].price * days }));
    const addOnsTotal = addOnLines.reduce((s, l) => s + l.total, 0);
    const grandTotal = bikeSubtotal + addOnsTotal;

    const currency = (n) => `$${n.toFixed(2)}`;

    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchase Summary</h1>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
            <p className="text-sm text-gray-600">Step 6 of 6 - 100%</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="border rounded-md p-6">
                <h3 className="text-lg font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
                  {selectedBike && (
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{selectedBike.name}</p>
                        <p className="text-sm text-gray-600">{currency(selectedBike.price)} /day × {days} day(s)</p>
                      </div>
                      <div className="font-semibold">{currency(bikeSubtotal)}</div>
                    </div>
                  )}
                  {addOnLines.map((line) => (
                    <div key={line.key} className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{line.name}</p>
                        <p className="text-sm text-gray-600">{currency(line.pricePerDay)} /day × {days} day(s)</p>
                      </div>
                      <div className="font-semibold">{currency(line.total)}</div>
                    </div>
                  ))}
                  {addOnLines.length === 0 && (
                    <p className="text-sm text-gray-600">No add-ons selected.</p>
                  )}
                </div>
              </div>

              <div className="mt-6 border rounded-md p-6">
                <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Pickup Date</p>
                    <p className="font-medium">{formData.pickupDate || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Return Date</p>
                    <p className="font-medium">{formData.returnDate || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Pickup Time</p>
                    <p className="font-medium">{formData.pickupTime || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Return Time</p>
                    <p className="font-medium">{formData.returnTime || '-'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Totals and Payment */}
            <div className="lg:col-span-1">
              <div className="border rounded-md p-6">
                <h3 className="text-lg font-semibold mb-4">Totals</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Bike hire</span><span>{currency(bikeSubtotal)}</span></div>
                  <div className="flex justify-between"><span>Add-ons</span><span>{currency(addOnsTotal)}</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-gray-900"><span>Grand Total</span><span>{currency(grandTotal)}</span></div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Option (Required)</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Full Payment</option>
                  </select>
                </div>
                <div className="mt-6 flex justify-between">
                  <button onClick={prevStep} className="px-4 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">Previous</button>
                  <button className="px-4 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">Submit Booking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="book" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">START HERE</h2>
          <h3 className="text-xl text-orange-500 font-semibold border-b-2 border-orange-500 inline-block pb-1">STEP ONE</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-6">
              {[
                { number: 1, label: 'Bike Hire' },
                { number: 2, label: 'Hire Gear' },
                { number: 3, label: 'Rider Details' },
                { number: 4, label: 'NOK Details' },
                { number: 5, label: 'Rental Agreement' },
                { number: 6, label: 'Summary' }
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    {/* Number Circle */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                      index + 1 === currentStep 
                        ? 'bg-gray-300 text-black' 
                        : 'bg-white border-2 border-gray-300 text-black'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Text Label */}
                    <span 
                      className={`text-sm font-medium transition-colors duration-200 ${
                        index + 1 === currentStep 
                          ? 'text-black' 
                          : 'text-black underline'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < 5 && (
                    <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderStep6()}
          {/* Additional steps will be added here */}
        </div>
      </div>
    </div>
  );
};

export default HireBookingForm;
