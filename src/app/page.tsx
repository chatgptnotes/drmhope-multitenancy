'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Building2, 
  CheckCircle, 
  ChevronRight, 
  Heart, 
  Hospital, 
  Phone, 
  ClipboardList, 
  Stethoscope, 
  Users, 
  MessageCircle,
  Ambulance,
  ScanSearch,
  ArrowRight
} from 'lucide-react';

// Define modules for each customer type
const modules = {
  hospital: [
    { id: 'billing', name: 'Billing & Accounts', icon: ClipboardList, description: 'Complete billing solution with ESIC and CGHS integration' },
    { id: 'laboratory', name: 'Laboratory', icon: Stethoscope, description: 'Manage test orders, results and billing' },
    { id: 'pharmacy', name: 'Pharmacy', icon: Heart, description: 'Inventory management and prescription fulfillment' },
    { id: 'emr', name: 'Electronic Medical Records', icon: ClipboardList, description: 'Digital patient records and history' },
    { id: 'patientPortal', name: 'Patient Portal', icon: Users, description: 'Online patient access to medical records, appointments and reports' },
    { id: 'callCenter', name: 'Call Center', icon: Phone, description: '24/7 patient support and appointment scheduling' },
    { id: 'messaging', name: 'Bulk WhatsApp & Social Media', icon: MessageCircle, description: 'Patient communication and marketing' },
    { id: 'ambulance', name: 'Raftaar Ambulance', icon: Ambulance, description: 'Fleet management and emergency dispatch' },
  ],
  enterprise: [
    { id: 'raftaar', name: 'Raftaar', icon: Building2, description: 'Multi-facility management and oversight' },
    { id: 'patientPortal', name: 'Patient Portal', icon: Users, description: 'Centralized patient portal for all your facilities' },
    { id: 'callCenter', name: 'Call Center', icon: Phone, description: 'Centralized appointment booking and patient support' },
    { id: 'onelife', name: 'One Scan One Life', icon: ScanSearch, description: 'Unified patient records across all facilities' },
  ],
  clinic: [
    { id: 'emr', name: 'Electronic Medical Records', icon: ClipboardList, description: 'Patient records and treatment history' },
    { id: 'billing', name: 'Billing', icon: ClipboardList, description: 'Simple billing and invoicing' },
    { id: 'patientPortal', name: 'Patient Portal', icon: Users, description: 'Easy-to-use portal for your patients to access records and book appointments' },
    { id: 'onelife', name: 'One Scan One Life', icon: ScanSearch, description: 'Patient history access and sharing' },
    { id: 'messaging', name: 'Bulk WhatsApp & Social Media', icon: MessageCircle, description: 'Patient reminders and communication' },
  ]
};

// Customer types
const customerTypes = [
  {
    id: 'hospital',
    name: 'Hospital',
    icon: Hospital,
    description: 'For large healthcare facilities with multiple departments'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Building2,
    description: 'For healthcare organizations managing multiple facilities'
  },
  {
    id: 'clinic',
    name: 'Clinic',
    icon: Stethoscope,
    description: 'For small medical practices and clinics'
  }
];

export default function LandingPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  // Handle customer type selection
  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    setSelectedModules([]);
    setShowConfirmation(false);
  };

  // Handle module selection
  const handleModuleToggle = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Get available modules for selected type
  const availableModules = selectedType ? modules[selectedType as keyof typeof modules] : [];

  // Handle continue button click
  const handleContinue = () => {
    if (selectedModules.length > 0) {
      setShowConfirmation(true);
    }
  };

  // Handle confirmation
  const handleConfirm = () => {
    // Redirect to activate-trial page with selected modules as query parameters
    const moduleParams = selectedModules.join(',');
    const typeParam = selectedType;
    router.push(`/activate-trial?type=${typeParam}&modules=${moduleParams}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl mr-2">🏥</span>
            <div>
              <h1 className="text-xl font-bold text-blue-600">Raftaarhelp System</h1>
              <p className="text-xs text-gray-500">Complete Healthcare Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 1234567890</span>
            </span>
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {!showConfirmation ? (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Subscription Plan</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the type of healthcare facility you operate and the modules you need.
              </p>
            </div>

            {/* Customer Type Selection */}
            {!selectedType ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {customerTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-400 transition-all flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <type.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </button>
                ))}
              </div>
            ) : (
              <>
                {/* Back Button */}
                <button 
                  onClick={() => setSelectedType(null)}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ArrowRight className="h-4 w-4 mr-1 transform rotate-180" />
                  Back to Facility Types
                </button>

                {/* Selected Type */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {customerTypes.find(t => t.id === selectedType)?.name} Modules
                  </h2>
                  <p className="text-gray-600">
                    Select the modules you want to include in your subscription:
                  </p>
                </div>

                {/* Module Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {availableModules.map((module) => (
                    <div 
                      key={module.id}
                      className={`
                        bg-white p-6 rounded-lg shadow-md border 
                        ${selectedModules.includes(module.id) 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-blue-300'}
                        transition-all cursor-pointer
                      `}
                      onClick={() => handleModuleToggle(module.id)}
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <module.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{module.name}</h3>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                        <div className="ml-2">
                          {selectedModules.includes(module.id) ? (
                            <CheckCircle className="h-6 w-6 text-blue-500" />
                          ) : (
                            <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Button */}
                <div className="text-center">
                  <button
                    onClick={handleContinue}
                    disabled={selectedModules.length === 0}
                    className={`
                      px-8 py-3 text-white rounded-md font-medium flex items-center mx-auto
                      ${selectedModules.length === 0 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'}
                    `}
                  >
                    Continue
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </button>
                  {selectedModules.length === 0 && (
                    <p className="text-sm text-red-500 mt-2">Please select at least one module</p>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Confirm Your Subscription</h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Facility Type:</h3>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  {selectedType && (
                    <>
                      {(() => {
                        const selectedCustomerType = customerTypes.find(t => t.id === selectedType);
                        if (selectedCustomerType && selectedCustomerType.icon) {
                          const Icon = selectedCustomerType.icon;
                          return <Icon className="h-6 w-6 text-blue-600 mr-3" />;
                        }
                        return null;
                      })()}
                      <span className="text-blue-800 font-medium">
                        {customerTypes.find(t => t.id === selectedType)?.name}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Modules:</h3>
                <ul className="space-y-3 bg-gray-50 rounded-lg p-4">
                  {selectedType && selectedModules.map(moduleId => {
                    const module = modules[selectedType as keyof typeof modules].find(m => m.id === moduleId);
                    return module ? (
                      <li key={moduleId} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                        <div>
                          <span className="font-medium text-gray-800">{module.name}</span>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm Subscription
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Raftaarhelp System</h3>
              <p className="text-gray-300">
                Complete healthcare management solution for hospitals, clinics and healthcare enterprises.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 1234567890
                </li>
                <li>Email: contact@raftaarhelp.com</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/login" className="hover:text-white">Login</Link></li>
                <li><Link href="/register" className="hover:text-white">Register</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 Raftaarhelp System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
