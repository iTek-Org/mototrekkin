import React, { useState } from 'react';

// Import step components
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';
import Step9 from './steps/Step9';
import Step10 from './steps/Step10';
import Step11 from './steps/Step11';
import Step12 from './steps/Step12';

const NZSIRegistrationFormRefactored = () => {
  console.log('NZSIRegistrationFormRefactored component loaded');
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    confirmEmail: '',
    birthday: '',
    occupation: '',
    mobile: '',
    landline: '',
    address: '',
    address2: '',
    city: '',
    postCode: '',
    country: 'Australia',
    state: '',
    phonePlatform: '',
    phoneModel: '',
    hasGPS: '',
    hasFacebook: '',
    
    // Emergency Contacts
    emergency1FirstName: '',
    emergency1LastName: '',
    emergency1Email: '',
    emergency1Mobile: '',
    emergency1Landline: '',
    emergency1Relationship: '',
    emergency2FirstName: '',
    emergency2LastName: '',
    emergency2Email: '',
    emergency2Mobile: '',
    emergency2Landline: '',
    emergency2Relationship: '',
    
    // Medical Information
    hasMedicalCondition: '',
    medicalCondition: '',
    medications: '',
    hasMedicationAllergies: '',
    medicationAllergies: '',
    hasFoodAllergies: '',
    foodAllergies: '',
    dietaryRequirements: '',
    hasHealthFund: '',
    healthFundName: '',
    healthFundNumber: '',
    hasAmbulanceCover: '',
    medicareNumber: '',
    medicarePosition: '',
    
    // Experience
    hasTraining: '',
    recentTraining: '',
    trainingDetails: '',
    offRoadExperience: '',
    experienceLevel: '',
    confidenceAreas: '',
    
    // Motorcycle Selection
    hireOption: '',
    selectedMotorcycle: '',
    // Own Motorcycle Details
    ownBikeMake: '',
    ownBikeModel: '',
    ownBikeYear: '',
    ownBikeRegistrationNumber: '',
    ownBikeStateOrRegion: '',
    ownBikeOdometer: '',
    ownBikeServiceUpToDate: '', // 'Yes' | 'No'
    ownBikeServiceIntention: '', // required if service not up to date
    ownBikeHasUnresolvedIssues: '', // 'Yes' | 'No'
    ownBikeIssuesDetails: '', // required if unresolved issues is Yes
    ownBikeHasComprehensiveInsurance: '', // 'Yes' | 'No'
    ownBikeFuelCapacity: '', // e.g., '9L' to '30L+'
    ownBikeEstimatedRange: '',
    
    // Driver's Licence
    licenceValid: '',
    licenceNumber: '',
    licenceExpiryDate: '',
    licenceState: '',
    
    // Safety & Navigation Equipment
    hydration: [],
    electronicEquipment: [],
    upperProtective: [],
    lowerProtective: [],
    bootBrand: '',
    mechanicalRelated: [],
    
    // Shirt Size & Accommodation
    shirtSize: '',
    accommodationPreference: '',
    registerPartner: '',
    
    // Riding with a Group
    ridingWithGroup: '',
    groupMembers: '',
    giftVoucherCode: '',
    
    // Terms and Conditions
    agreeToTerms: false,
    termsAgreement: '',
    
    // Payment & Confirmation
    paymentOption: ''
  });

  const steps = [
    { number: 1, title: 'Introduction', completed: currentStep > 1 },
    { number: 2, title: 'Personal Details', completed: currentStep > 2 },
    { number: 3, title: 'Emergency Contacts', completed: currentStep > 3 },
    { number: 4, title: 'Medical Info', completed: currentStep > 4 },
    { number: 5, title: 'Experience', completed: currentStep > 5 },
    { number: 6, title: 'Motorcycle', completed: currentStep > 6 },
    { number: 7, title: 'Licence', completed: currentStep > 7 },
    { number: 8, title: 'Equipment', completed: currentStep > 8 },
    { number: 9, title: 'Accommodation', completed: currentStep > 9 },
    { number: 10, title: 'Group', completed: currentStep > 10 },
    { number: 11, title: 'Terms', completed: currentStep > 11 },
    { number: 12, title: 'Payment', completed: currentStep > 12 }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && (name === 'hydration' || name === 'electronicEquipment' || name === 'upperProtective' || name === 'lowerProtective' || name === 'mechanicalRelated')) {
      // Handle checkbox arrays for equipment categories
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 2: // Personal Details
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required to fill';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required to fill';
        if (!formData.gender) newErrors.gender = 'Gender is required to select';
        if (!formData.email.trim()) newErrors.email = 'Email is required to fill';
        if (!formData.confirmEmail.trim()) newErrors.confirmEmail = 'Confirm email is required to fill';
        if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match';
        if (!formData.birthday) newErrors.birthday = 'Birthday is required to fill';
        if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required to fill';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required to fill';
        if (!formData.address.trim()) newErrors.address = 'Address is required to fill';
        if (!formData.city.trim()) newErrors.city = 'City is required to fill';
        if (!formData.postCode.trim()) newErrors.postCode = 'Post code is required to fill';
        if (!formData.country) newErrors.country = 'Country is required to select';
        if ((formData.country === 'Australia' || formData.country === 'New Zealand') && !formData.state) {
          newErrors.state = 'State is required to select';
        }
        break;
        
      case 3: // Emergency Contacts
        if (!formData.emergency1FirstName.trim()) newErrors.emergency1FirstName = 'Emergency contact 1 first name is required';
        if (!formData.emergency1LastName.trim()) newErrors.emergency1LastName = 'Emergency contact 1 last name is required';
        if (!formData.emergency1Email.trim()) {
          newErrors.emergency1Email = 'Emergency contact 1 email is required';
        }
        if (!formData.emergency1Relationship.trim()) newErrors.emergency1Relationship = 'Emergency contact 1 relationship is required';
        if (!formData.emergency2FirstName.trim()) newErrors.emergency2FirstName = 'Emergency contact 2 first name is required';
        if (!formData.emergency2LastName.trim()) newErrors.emergency2LastName = 'Emergency contact 2 last name is required';
        if (!formData.emergency2Email.trim()) {
          newErrors.emergency2Email = 'Emergency contact 2 email is required';
        }
        if (!formData.emergency2Relationship.trim()) newErrors.emergency2Relationship = 'Emergency contact 2 relationship is required';
        break;
        
      case 4: // Medical Information
        if (!formData.hasMedicalCondition) newErrors.hasMedicalCondition = 'Medical condition question is required to answer';
        if (!formData.hasMedicationAllergies) newErrors.hasMedicationAllergies = 'Medication allergies question is required to answer';
        if (!formData.hasFoodAllergies) newErrors.hasFoodAllergies = 'Food allergies question is required to answer';
        break;
        
      case 5: // Experience
        if (!formData.hasTraining) newErrors.hasTraining = 'Training question is required to answer';
        if (formData.hasTraining === 'Yes' && !formData.recentTraining) {
          newErrors.recentTraining = 'Recent training question is required to answer';
        }
        if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required to select';
        break;
        
      case 6: // Motorcycle Selection
        if (!formData.hireOption) newErrors.hireOption = 'Hire option is required to select';
        if (formData.hireOption === 'Hire a Motorcycle') {
          if (!formData.selectedMotorcycle) newErrors.selectedMotorcycle = 'Motorcycle selection is required';
        } else if (formData.hireOption === 'Use my own motorcycle') {
          if (!formData.ownBikeMake.trim()) newErrors.ownBikeMake = 'Bike make is required';
          if (!formData.ownBikeModel.trim()) newErrors.ownBikeModel = 'Bike model is required';
          if (!formData.ownBikeYear) newErrors.ownBikeYear = 'Bike year is required';
          if (!formData.ownBikeRegistrationNumber.trim()) newErrors.ownBikeRegistrationNumber = 'Registration number is required';
          if (!formData.ownBikeStateOrRegion.trim()) newErrors.ownBikeStateOrRegion = 'State/Region is required';
          if (!formData.ownBikeOdometer) newErrors.ownBikeOdometer = 'Odometer reading is required';
          if (!formData.ownBikeServiceUpToDate) newErrors.ownBikeServiceUpToDate = 'Service schedule question is required';
          if (formData.ownBikeServiceUpToDate === 'No' && !formData.ownBikeServiceIntention) {
            newErrors.ownBikeServiceIntention = 'Please confirm your intention to service the bike';
          }
          if (!formData.ownBikeHasUnresolvedIssues) newErrors.ownBikeHasUnresolvedIssues = 'Unresolved issues question is required';
          if (formData.ownBikeHasUnresolvedIssues === 'Yes' && !formData.ownBikeIssuesDetails.trim()) {
            newErrors.ownBikeIssuesDetails = 'Please explain the mechanical issues';
          }
          if (!formData.ownBikeHasComprehensiveInsurance) newErrors.ownBikeHasComprehensiveInsurance = 'Insurance question is required';
          if (!formData.ownBikeFuelCapacity) newErrors.ownBikeFuelCapacity = 'Fuel capacity is required';
          if (!formData.ownBikeEstimatedRange) newErrors.ownBikeEstimatedRange = 'Estimated full fuel range is required';
        }
        break;
        
      case 7: // Driver's Licence Details
        if (!formData.licenceValid) newErrors.licenceValid = 'Licence validity is required to answer';
        if (!formData.licenceNumber.trim()) newErrors.licenceNumber = 'Licence number is required to fill';
        if (!formData.licenceExpiryDate) newErrors.licenceExpiryDate = 'Licence expiry date is required to fill';
        if (!formData.licenceState) newErrors.licenceState = 'Licence state is required to select';
        break;
        
      case 8: // Safety & Navigation Equipment
        if (formData.hydration.length === 0) newErrors.hydration = 'Hydration equipment is required to select';
        if (formData.electronicEquipment.length === 0) newErrors.electronicEquipment = 'Electronic equipment is required to select';
        if (formData.upperProtective.length === 0) newErrors.upperProtective = 'Upper protective equipment is required to select';
        if (formData.lowerProtective.length === 0) newErrors.lowerProtective = 'Lower protective equipment is required to select';
        if (!formData.bootBrand.trim()) newErrors.bootBrand = 'Boot brand is required to fill';
        if (formData.mechanicalRelated.length === 0) newErrors.mechanicalRelated = 'Mechanical equipment is required to select';
        break;
        
      case 9: // Shirt Size & Accommodation
        if (!formData.shirtSize) newErrors.shirtSize = 'Shirt size is required to select';
        if (!formData.accommodationPreference) newErrors.accommodationPreference = 'Accommodation preference is required to select';
        if (formData.accommodationPreference === '$4890 - PRIVATE ACCOMMODATION' && !formData.registerPartner) {
          newErrors.registerPartner = 'Partner registration question is required to answer';
        }
        break;
        
      case 10: // Riding with a Group
        if (!formData.ridingWithGroup) newErrors.ridingWithGroup = 'Group riding question is required to answer';
        if (formData.ridingWithGroup === 'Yes' && !formData.groupMembers.trim()) {
          newErrors.groupMembers = 'Group members information is required';
        }
        break;
        
      case 11: // Terms and Conditions
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        if (!formData.termsAgreement.trim()) {
          newErrors.termsAgreement = 'Terms agreement text is required';
        }
        break;
        
      case 12: // Payment & Confirmation
        if (!formData.paymentOption) newErrors.paymentOption = 'Payment option is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 12) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  const renderStepContent = () => {
    const stepProps = { formData, handleInputChange, errors };
    
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 {...stepProps} />;
      case 3:
        return <Step3 {...stepProps} />;
      case 4:
        return <Step4 {...stepProps} />;
      case 5:
        return <Step5 {...stepProps} />;
      case 6:
        return <Step6 {...stepProps} />;
      case 7:
        return <Step7 {...stepProps} />;
      case 8:
        return <Step8 {...stepProps} />;
      case 9:
        return <Step9 {...stepProps} />;
      case 10:
        return <Step10 {...stepProps} />;
      case 11:
        return <Step11 {...stepProps} />;
      case 12:
        return <Step12 {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-red-100 py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">Registration Form NZ South Island 2025</h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Step {currentStep} of 12</span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{Math.round((currentStep / 12) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 12) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-between mb-6 sm:mb-8 overflow-x-auto pb-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col items-center min-w-0 flex-1 px-1 sm:px-2 ${
                  currentStep === step.number ? 'text-green-600' : 
                  step.completed ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mb-1 sm:mb-2 ${
                  currentStep === step.number ? 'bg-green-500 text-white' : 
                  step.completed ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-500'
                }`}>
                  {step.completed ? '✓' : step.number}
                </div>
                <span className="text-xs sm:text-sm text-center leading-tight hidden sm:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 sm:mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              }`}
            >
              Previous
            </button>
            
            {currentStep < 12 ? (
              <button
                onClick={nextStep}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Submit Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NZSIRegistrationFormRefactored;
