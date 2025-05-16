'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { X, Phone, ChevronDown, CheckIcon, Check } from 'lucide-react';

export default function ActivateTrialPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const type = searchParams.get('type');
  const modules = searchParams.get('modules')?.split(',') || [];
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [locationError, setLocationError] = useState(false);
  const [businessCategory, setBusinessCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  // Business categories
  const categories = [
    'Hospital',
    'Enterprises',
    'Clinics',
    'Ambulance'
  ];

  // Clinic specialties
  const clinicSpecialties = [
    'Dentist',
    'Surgeon',
    'Physician',
    'Physiotherapist',
    'Dietician'
  ];

  const handleLocationChange = (value: string) => {
    setBusinessLocation(value);
    setLocationError(false);
  };

  const handleCategorySelect = (category: string) => {
    setBusinessCategory(category);
    setShowCategoryDropdown(false);
    
    // Reset specialties when changing category
    if (category !== 'Clinics') {
      setSelectedSpecialties([]);
    }
  };

  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  const handleSpecialtyToggle = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleActivate = () => {
    if (!businessLocation) {
      setLocationError(true);
      return;
    }
    
    // In a real app, we would submit the form data to a server
    // For this demo, redirect to login after "activation"
    router.push('/login');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-amber-500">Activate 15-days free trial</h2>
            <p className="text-gray-500">by filling the details below</p>
          </div>
          <button 
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 mb-1 required">
              Mobile number
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          
          {/* Business Location */}
          <div>
            <label className="block text-gray-600 mb-1">
              Business location
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Please select you location"
              className={`w-full p-2 border ${locationError ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              value={businessLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
              required
            />
            {locationError && (
              <p className="text-red-500 text-sm mt-1">Please select valid city name</p>
            )}
          </div>
          
          {/* Business Category */}
          <div className="relative">
            <label className="block text-gray-600 mb-1">
              Business category
              <span className="text-red-500">*</span>
            </label>
            <div 
              className="w-full p-2 border border-gray-300 rounded flex justify-between items-center cursor-pointer"
              onClick={toggleCategoryDropdown}
            >
              <span className={businessCategory ? 'text-gray-800' : 'text-gray-400'}>
                {businessCategory || 'Select your business category'}
              </span>
              <ChevronDown className="text-gray-400" size={18} />
            </div>
            
            {showCategoryDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Clinic Specialties - Only show if Clinics is selected */}
          {businessCategory === 'Clinics' && (
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <label className="block text-gray-600 mb-3 font-medium">
                Select specialty
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {clinicSpecialties.map(specialty => (
                  <div 
                    key={specialty}
                    className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSpecialtyToggle(specialty)}
                  >
                    <div className="flex-shrink-0 mr-3">
                      {selectedSpecialties.includes(specialty) ? (
                        <div className="h-5 w-5 bg-indigo-500 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Business Name */}
          <div>
            <label className="block text-gray-600 mb-1">
              Name of your business
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Add your business name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>
          
          {/* Email Address */}
          <div>
            <label className="block text-gray-600 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Add your email ID"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Terms and Privacy */}
          <div className="text-center text-sm text-gray-500 mt-4">
            By activating Free Trial, you agree to our <Link href="#" className="text-gray-700 underline">Terms</Link> & <Link href="#" className="text-gray-700 underline">Privacy</Link> Policy. You also allow us to reach out to you for marketing purposes.
          </div>
          
          {/* Activate Button */}
          <button
            onClick={handleActivate}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded"
          >
            Activate trial
          </button>
          
          {/* Free Trial Features Link */}
          <div className="text-center">
            <Link href="#" className="text-gray-500 hover:text-gray-700 underline">
              See free trial features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 