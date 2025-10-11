import React from 'react';

// Import bike images for Step12
import bmw1300GS from '../../../assets/adventures/2025/NZSI/Bikes/BMW-1300-GS-A-1.webp';
import bmwF750GS from '../../../assets/adventures/2025/NZSI/Bikes/BMW-F750GS_165031-scaled.webp';
import bmwF800GS from '../../../assets/adventures/2025/NZSI/Bikes/BMW-F800GS.webp';
import bmwF850GS from '../../../assets/adventures/2025/NZSI/Bikes/BMW-F850GS_165032-scaled.webp';
import bmwR1200GS from '../../../assets/adventures/2025/NZSI/Bikes/BMW-R1200GS_GSA-_165034-scaled.webp';
import bmwR1200GSLow from '../../../assets/adventures/2025/NZSI/Bikes/BMW R1200GS LOW.webp';
import bmwF850GSLowHigh from '../../../assets/adventures/2025/NZSI/Bikes/BMW F850GS LOW  HIGH SEAT.webp';
import hondaCB500X from '../../../assets/adventures/2025/NZSI/Bikes/Honda-CB500X_165042-scaled.webp';
import hondaNX500 from '../../../assets/adventures/2025/NZSI/Bikes/HONDA-NX500-1.webp';
import yamahaTenere700 from '../../../assets/adventures/2025/NZSI/Bikes/Yamaha-XTZ690-T7-Tenere-700_165048-scaled.webp';

const motorcycles = [
  { 
    name: 'BMW R1250GS ADV', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'BMW 1300 GS ADV', 
    price: 440, 
    available: true, 
    remaining: 1, 
    image: bmw1300GS,
    specs: {
      mileage: 'Not Available',
      displacement: '1300 cc',
      engineType: 'Air/Liquid-cooled Four Stroke Flat Twin Engine, Double Overhead Camshaft, One Balance Shaft and Variable Engine Timing System BMW Shiftcam.',
      cylinders: '2',
      maxPower: 'Not Available',
      maxTorque: 'Not Available',
      frontBrake: 'Not Available',
      rearBrake: 'Not Available',
      fuelCapacity: '19 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW R1250GS', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'BMW R1200GS', 
    price: 279, 
    available: true, 
    remaining: 11, 
    image: bmwR1200GS,
    specs: {
      mileage: '16 kmpl',
      displacement: '1170 cc',
      engineType: 'Air/Liquid-cooled Four Stroke Flat Twin Engine, Double Overhead Camshaft, One Balance Shaft and Variable Engine Timing System BMW Shiftcam.',
      cylinders: '2',
      maxPower: '125 PS @ 7750 rpm',
      maxTorque: '125 Nm @ 6500 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '20 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW R1200GS LOW', 
    price: 279, 
    available: true, 
    remaining: 2, 
    image: bmwR1200GSLow,
    specs: {
      mileage: '16 kmpl',
      displacement: '1170 cc',
      engineType: 'Air/Liquid-cooled Four Stroke Flat Twin Engine, Double Overhead Camshaft, One Balance Shaft and Variable Engine Timing System BMW Shiftcam.',
      cylinders: '2',
      maxPower: '125 PS @ 7750 rpm',
      maxTorque: '125 Nm @ 6500 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '20 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW R1200GS ADV', 
    price: 279, 
    available: true, 
    remaining: 1, 
    image: bmwR1200GS,
    specs: {
      mileage: '16 kmpl',
      displacement: '1170 cc',
      engineType: 'Air/Liquid-cooled Four Stroke Flat Twin Engine, Double Overhead Camshaft, One Balance Shaft and Variable Engine Timing System BMW Shiftcam.',
      cylinders: '2',
      maxPower: '125 PS @ 7750 rpm',
      maxTorque: '125 Nm @ 6500 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '20 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F850GS', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'BMW F850GS LOW / HIGH SEAT', 
    price: 259, 
    available: true, 
    remaining: 1, 
    image: bmwF850GSLowHigh,
    specs: {
      mileage: '24 kmpl',
      displacement: '853 cc',
      engineType: 'Water-cooled 4-Stroke In-line Two-cylinder Engine, Four Valves Per Cylinder, Two Overhead Camshafts, Dry Sump Lubrication',
      cylinders: '2',
      maxPower: '95.17 PS @ 8250 rpm',
      maxTorque: '92 Nm @ 6250 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '23 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F850GS LOW SEAT', 
    price: 259, 
    available: true, 
    remaining: 1, 
    image: bmwF850GS,
    specs: {
      mileage: '24 kmpl',
      displacement: '853 cc',
      engineType: 'Water-cooled 4-Stroke In-line Two-cylinder Engine, Four Valves Per Cylinder, Two Overhead Camshafts, Dry Sump Lubrication',
      cylinders: '2',
      maxPower: '95.17 PS @ 8250 rpm',
      maxTorque: '92 Nm @ 6250 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '23 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F750GS', 
    price: 229, 
    available: true, 
    remaining: 1, 
    image: bmwF750GS,
    specs: {
      mileage: '25 kmpl',
      displacement: '853 cc',
      engineType: 'Water-cooled 4-Stroke In-line Two-cylinder Engine, Four Valves Per Cylinder, Two Overhead Camshafts, Dry Sump Lubrication',
      cylinders: '2',
      maxPower: '77.49 PS @ 7500 rpm',
      maxTorque: '83 Nm @ 6000 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '15 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F750GS LOW', 
    price: 229, 
    available: true, 
    remaining: 2, 
    image: bmwF750GS,
    specs: {
      mileage: '25 kmpl',
      displacement: '853 cc',
      engineType: 'Water-cooled 4-Stroke In-line Two-cylinder Engine, Four Valves Per Cylinder, Two Overhead Camshafts, Dry Sump Lubrication',
      cylinders: '2',
      maxPower: '77.49 PS @ 7500 rpm',
      maxTorque: '83 Nm @ 6000 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '15 L',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F800GS', 
    price: 229, 
    available: true, 
    remaining: 1, 
    image: bmwF800GS,
    specs: {
      mileage: '---',
      displacement: '798 cc',
      engineType: 'Engine is liquid cooled with fuel injection',
      cylinders: '2',
      maxPower: '75 Bhp',
      maxTorque: '76 Nm',
      frontBrake: 'Double Disc',
      rearBrake: 'Disc',
      fuelCapacity: 'Not Available',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F800GS LOW', 
    price: 229, 
    available: true, 
    remaining: 2, 
    image: bmwF800GS,
    specs: {
      mileage: '---',
      displacement: '798 cc',
      engineType: 'Engine is liquid cooled with fuel injection',
      cylinders: '2',
      maxPower: '75 Bhp',
      maxTorque: '76 Nm',
      frontBrake: 'Double Disc',
      rearBrake: 'Disc',
      fuelCapacity: 'Not Available',
      bodyType: 'Adventure Tourer Bikes'
    }
  },
  { 
    name: 'BMW F800GS ADV', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'BMW F800GS ADV LOW', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'Honda CB500X', 
    price: 179, 
    available: true, 
    remaining: 1, 
    image: hondaCB500X,
    specs: {
      mileage: '28 kmpl',
      displacement: '471.03 cc',
      engineType: '4 Stroke, SI Engine (Parallel Twin)',
      cylinders: '2',
      maxPower: '47.58 PS @ 8500 rpm',
      maxTorque: '43.2 Nm @ 6500 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '17.7 L',
      bodyType: 'Adventure Tourer Bikes, Off Road Bikes'
    }
  },
  { 
    name: 'Honda NX500', 
    price: 179, 
    available: true, 
    remaining: 1, 
    image: hondaNX500,
    specs: {
      mileage: '28 kmpl',
      displacement: '471.03 cc',
      engineType: '4 Stroke, SI Engine (Parallel Twin)',
      cylinders: '2',
      maxPower: '47.58 PS @ 8500 rpm',
      maxTorque: '43.2 Nm @ 6500 rpm',
      frontBrake: 'Disc',
      rearBrake: 'Disc',
      fuelCapacity: '17.7 L',
      bodyType: 'Adventure Tourer Bikes, Off Road Bikes'
    }
  },
  { 
    name: 'Honda CB500X ADV', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'Yamaha Tenere 700', 
    price: 209, 
    available: true, 
    remaining: 1, 
    image: yamahaTenere700,
    specs: {
      mileage: 'Not Available',
      displacement: '689 cc',
      engineType: 'Liquid-cooled, 4-stroke, DOHC, 4 valve, 2-cylinder',
      cylinders: '2',
      maxPower: 'Not Available',
      maxTorque: 'Not Available',
      frontBrake: 'Not Available',
      rearBrake: 'Not Available',
      fuelCapacity: '16 L',
      bodyType: 'Adventure Tourer Bikes, Off Road Bikes'
    }
  },
  { 
    name: 'Yamaha Tenere 700 ADV', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'Yamaha Tenere 700 LOW', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  },
  { 
    name: 'Yamaha Tenere 700 ADV LOW', 
    price: 0, 
    available: false, 
    remaining: 0, 
    image: null,
    specs: null
  }
];

const Step12 = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Summary</h3>
      
      {/* Simple Purchase Summary */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">PURCHASE SUMMARY</h4>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h5 className="text-lg font-semibold text-gray-900 mb-2">EVENT PACKAGE</h5>
          <div className="bg-gray-200 p-3 rounded">
            <div className="flex justify-between items-center">
              <span className="font-medium">
                {formData.accommodationPreference === '$3699 - SHARED ACCOMMODATION' 
                  ? 'SHARED ACCOMMODATION' 
                  : formData.accommodationPreference === '$4890 - PRIVATE ACCOMMODATION'
                  ? 'PRIVATE ACCOMMODATION'
                  : 'ACCOMMODATION'
                }
              </span>
              <span className="text-lg font-bold">
                {formData.accommodationPreference === '$3699 - SHARED ACCOMMODATION' 
                  ? '$3,699.00' 
                  : formData.accommodationPreference === '$4890 - PRIVATE ACCOMMODATION'
                  ? '$4,890.00'
                  : '$0.00'
                }
              </span>
            </div>
          </div>
        </div>
        
        {formData.registerPartner === 'Yes' && (
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">Partner Fee</h5>
            <div className="bg-gray-200 p-3 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Partner Package</span>
                <span className="text-lg font-bold">$1,495.00</span>
              </div>
            </div>
          </div>
        )}
        
        {formData.selectedMotorcycle && (
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">Bike Hire</h5>
            
            {/* Small Bike Image */}
            <div className="mb-4">
              {(() => {
                // Get the selected bike image based on the motorcycle name
                const bikeImages = {
                  'BMW 1300 GS ADV': bmw1300GS,
                  'BMW R1200GS': bmwR1200GS,
                  'BMW F850GS': bmwF850GS,
                  'BMW F850GS LOW / HIGH SEAT': bmwF850GS,
                  'BMW F850GS LOW SEAT': bmwF850GS,
                  'BMW F750GS': bmwF750GS,
                  'BMW F750GS LOW': bmwF750GS,
                  'BMW F800GS': bmwF800GS,
                  'BMW F800GS LOW': bmwF800GS,
                  'BMW R1200GS LOW': bmwR1200GS,
                  'BMW R1200GS ADV': bmwR1200GS,
                  'Honda CB500X': hondaCB500X,
                  'Honda CB500X ADV': hondaCB500X,
                  'Yamaha Tenere 700': yamahaTenere700,
                  'Yamaha Tenere 700 LOW': yamahaTenere700,
                  'Yamaha Tenere 700 ADV': yamahaTenere700,
                  'Yamaha Tenere 700 ADV LOW': yamahaTenere700,
                  'Honda NX500': hondaNX500
                };
                
                const imageSrc = bikeImages[formData.selectedMotorcycle];
                
                if (imageSrc) {
                  return (
                    <div className="flex items-center space-x-4">
                      <img
                        src={imageSrc}
                        alt={formData.selectedMotorcycle}
                        className="w-48 h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300"
                        style={{ display: 'none' }}
                      >
                        <span className="text-gray-500 text-base">Image</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{formData.selectedMotorcycle}</p>
                        <p className="text-sm text-gray-600">8 days hire</p>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div className="flex items-center space-x-4">
                    <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                      <span className="text-gray-500 text-base">Image</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{formData.selectedMotorcycle}</p>
                      <p className="text-sm text-gray-600">8 days hire</p>
                    </div>
                  </div>
                );
              })()}
            </div>
            
            {/* Simple Bike Details */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h6 className="font-semibold text-gray-900 mb-3">Specifications</h6>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Motorcycle:</span>
                  <span>{formData.selectedMotorcycle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Hire Duration:</span>
                  <span>8 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Collection Date:</span>
                  <span>8th November 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Return Date:</span>
                  <span>15th November 2025</span>
                </div>
              </div>
            </div>
            
            {/* Dynamic Bike Hire Pricing */}
            <div className="bg-gray-200 p-3 rounded">
              {(() => {
                // Find the selected bike and get its price
                const selectedBike = motorcycles.find(bike => bike.name === formData.selectedMotorcycle);
                const dailyRate = selectedBike ? selectedBike.price : 0;
                const totalPrice = dailyRate * 8; // 8 days
                
                return (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Bike Hire - {formData.selectedMotorcycle}</span>
                      <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Daily Rate: ${dailyRate}/day | 8 days | Collect: 8th Nov 2025, Return: 15th Nov 2025
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
      
      {/* Dynamic Payment Summary */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">PAYMENT SUMMARY</h4>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          {(() => {
            // Calculate dynamic totals
            const eventPackage = formData.accommodationPreference === '$3699 - SHARED ACCOMMODATION' 
              ? 3699 
              : formData.accommodationPreference === '$4890 - PRIVATE ACCOMMODATION'
              ? 4890
              : 0;
            const partnerFee = formData.registerPartner === 'Yes' ? 1495 : 0;
            
            // Get selected bike price
            const selectedBike = motorcycles.find(bike => bike.name === formData.selectedMotorcycle);
            const bikeDailyRate = selectedBike ? selectedBike.price : 0;
            const bikeHire = bikeDailyRate * 8; // 8 days
            
            const subtotal = eventPackage + partnerFee + bikeHire;
            const discount = formData.paymentOption === 'Full Payment' ? 50 : 0;
            const afterDiscount = subtotal - discount;
            
            // Show basic summary if no payment option selected
            if (!formData.paymentOption) {
              return (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Event Package:</span>
                    <span>${eventPackage.toFixed(2)}</span>
                  </div>
                  
                  {partnerFee > 0 && (
                    <div className="flex justify-between">
                      <span>Partner Fee:</span>
                      <span>${partnerFee.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {bikeHire > 0 && (
                    <div className="flex justify-between">
                      <span>Bike Hire:</span>
                      <span>${bikeHire.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Different calculations based on payment option
            if (formData.paymentOption === 'Deposit') {
              // Deposit payment - fixed amounts (never change)
              const participantDeposit = 990;
              const partnerDeposit = formData.registerPartner === 'Yes' ? 990 : 0;
              const totalDeposits = participantDeposit + partnerDeposit;
              // Merchant fee is $16.83 for single participant, $33.66 for participant + partner
              const merchantFee = formData.registerPartner === 'Yes' ? 33.66 : 16.83;
              const amountToPay = totalDeposits + merchantFee;
              const remainingBalance = subtotal - totalDeposits;
              
              return (
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700">
                      Pay your $990 now to secure your place on the event. We will invoice you after registration and you can pay the balance anytime up until 60 days prior to the event.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-gray-900 mb-3">REQUIRED DEPOSIT</h5>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Participant Deposit:</span>
                        <span>${participantDeposit.toFixed(2)}</span>
                      </div>
                      
                      {partnerDeposit > 0 && (
                        <div className="flex justify-between">
                          <span>Partner Deposit:</span>
                          <span>${partnerDeposit.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span>Merchant Fee:</span>
                        <span>${merchantFee.toFixed(2)}</span>
                      </div>
                      
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-lg font-bold text-green-600">
                          <span>Amount to Pay:</span>
                          <span>${amountToPay.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Remaining Balance:</span>
                        <span>${remainingBalance.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // Full Payment or Three Payments - dynamic calculation
              let merchantFee = 0;
              if (formData.paymentOption === 'Full Payment') {
                // Calculate merchant fee as exactly 1.7% of amount after discount
                merchantFee = Math.round(afterDiscount * 0.017 * 100) / 100;
              } else if (formData.paymentOption === 'Three Payments') {
                // Three Payments calculation - subtotal = Event Package + Partner Fee + Bike Hire
                const total = eventPackage + partnerFee + bikeHire; // TOTAL = Event Package + Partner Fee + Bike Hire
                const installment = Math.ceil((total / 3) * 100) / 100; // INSTALLMENT = TOTAL ÷ 3 (rounded up)
                const merchantFeeAmount = installment * 0.017; // MERCHANT FEE = INSTALLMENT × 0.017
                const amountDueToday = installment + merchantFeeAmount; // AMOUNT DUE TODAY = INSTALLMENT + MERCHANT FEE
                const remainingBalance = installment * 2; // REMAINING BALANCE = INSTALLMENT × 2
                
                return (
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-semibold text-gray-900 mb-3">THREE PAYMENTS</h5>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Event Package:</span>
                          <span>${eventPackage.toFixed(2)}</span>
                        </div>
                        
                        {partnerFee > 0 && (
                          <div className="flex justify-between">
                            <span>Partner Fee:</span>
                            <span>${partnerFee.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {bikeHire > 0 && (
                          <div className="flex justify-between">
                            <span>Bike Hire:</span>
                            <span>${bikeHire.toFixed(2)}</span>
                          </div>
                        )}
                        
                        <div className="space-y-1 mt-3">
                          <div className="flex justify-between">
                            <span>PAYMENT 1 - DUE NOW:</span>
                            <span>${installment.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span>PAYMENT 2 - DUE 25TH MARCH 2025:</span>
                            <span>${installment.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span>PAYMENT 3 - DUE: 25TH JUNE 2025:</span>
                            <span>${installment.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="border-t pt-2">
                          <div className="flex justify-between">
                            <span>MERCHANT FEE:</span>
                            <span>${merchantFeeAmount.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex justify-between text-lg font-bold text-green-600">
                            <span>AMOUNT TO PAY TODAY:</span>
                            <span>${amountDueToday.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>REMAINING BALANCE:</span>
                            <span>${remainingBalance.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              const total = afterDiscount + merchantFee;
              
              return (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Event Package:</span>
                    <span>${eventPackage.toFixed(2)}</span>
                  </div>
                  
                  {partnerFee > 0 && (
                    <div className="flex justify-between">
                      <span>Partner Fee:</span>
                      <span>${partnerFee.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {bikeHire > 0 && (
                    <div className="flex justify-between">
                      <span>Bike Hire:</span>
                      <span>${bikeHire.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Subtotal:</span>
                      <span>${afterDiscount.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Full Payment Discount:</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Merchant Fee:</span>
                      <span>${merchantFee.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-xl font-bold text-green-600">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </div>
      
      {/* Payment Options */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-4">PAYMENT & CONFIRMATION</h4>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Payment Option (Required) *</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentOption"
                value="Full Payment"
                checked={formData.paymentOption === 'Full Payment'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span>Full Payment (SAVE $50)</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentOption"
                value="Deposit"
                checked={formData.paymentOption === 'Deposit'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span>$990 Deposit (Non-refundable)</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentOption"
                value="Three Payments"
                checked={formData.paymentOption === 'Three Payments'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span>Three Payments</span>
            </label>
          </div>
          {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
        </div>
      </div>
    </div>
  );
};

export default Step12;
