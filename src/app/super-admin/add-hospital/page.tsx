'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, 
  CheckCircle,
  Heart, 
  Hospital, 
  Phone, 
  ClipboardList, 
  Stethoscope, 
  Users, 
  MessageCircle,
  Ambulance,
  ScanSearch
} from 'lucide-react';

// Define modules for each facility type
const modules = {
  hospital: [
    { id: 'billing', name: 'Billing & Accounts', description: 'Complete billing solution with ESIC and CGHS integration' },
    { id: 'laboratory', name: 'Laboratory', description: 'Manage test orders, results and billing' },
    { id: 'pharmacy', name: 'Pharmacy', description: 'Inventory management and prescription fulfillment' },
    { id: 'emr', name: 'Electronic Medical Records', description: 'Digital patient records and history' },
    { id: 'patientPortal', name: 'Patient Portal', description: 'Online patient access to medical records, appointments and reports' },
    { id: 'callCenter', name: 'Call Center', description: '24/7 patient support and appointment scheduling' },
    { id: 'messaging', name: 'Bulk WhatsApp & Social Media', description: 'Patient communication and marketing' },
    { id: 'ambulance', name: 'Raftaar Ambulance', description: 'Fleet management and emergency dispatch' },
  ],
  enterprise: [
    { id: 'raftaar', name: 'Raftaar', description: 'Multi-facility management and oversight' },
    { id: 'patientPortal', name: 'Patient Portal', description: 'Centralized patient portal for all your facilities' },
    { id: 'callCenter', name: 'Call Center', description: 'Centralized appointment booking and patient support' },
    { id: 'onelife', name: 'One Scan One Life', description: 'Unified patient records across all facilities' },
  ],
  clinic: [
    { id: 'emr', name: 'Electronic Medical Records', description: 'Patient records and treatment history' },
    { id: 'billing', name: 'Billing', description: 'Simple billing and invoicing' },
    { id: 'patientPortal', name: 'Patient Portal', description: 'Easy-to-use portal for your patients to access records and appointments' },
    { id: 'onelife', name: 'One Scan One Life', description: 'Patient history access and sharing' },
    { id: 'messaging', name: 'Bulk WhatsApp & Social Media', description: 'Patient reminders and communication' },
  ]
};

export default function AddHospitalPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hospitalName: '',
    adminName: '',
    adminEmail: '',
    adminPhone: '',
    city: '',
    address: '',
    plan: 'basic',
    facilityType: 'hospital',
  });
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFacilityTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setFormData(prev => ({ ...prev, facilityType: newType }));
    // Clear selected modules when facility type changes
    setSelectedModules([]);
  };

  const handleModuleToggle = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare complete data with selected modules
    const completeData = {
      ...formData,
      modules: selectedModules
    };
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', completeData);
      setLoading(false);
      // Redirect to hospitals page
      router.push('/super-admin/hospitals');
    }, 1000);
  };

  // Get facility type label
  const getFacilityLabel = () => {
    switch (formData.facilityType) {
      case 'enterprise':
        return 'Enterprise Name';
      case 'clinic':
        return 'Clinic Name';
      default:
        return 'Hospital Name';
    }
  };

  // Get available modules based on facility type
  const availableModules = modules[formData.facilityType as keyof typeof modules];

  return (
    <div>
      <div className="mb-6 flex items-center">
        <Link 
          href="/super-admin/hospitals" 
          className="mr-4 text-indigo-600 hover:text-indigo-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Hospital</h1>
          <p className="text-gray-600">Create a new hospital account in the system</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Facility Information</h2>
            </div>

            {/* Facility Type */}
            <div>
              <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-1">
                Facility Type *
              </label>
              <select
                id="facilityType"
                name="facilityType"
                value={formData.facilityType}
                onChange={handleFacilityTypeChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              >
                <option value="hospital">Hospital</option>
                <option value="enterprise">Enterprise</option>
                <option value="clinic">Clinic</option>
              </select>
            </div>

            {/* Hospital Name */}
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-1">
                {getFacilityLabel()} *
              </label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            {/* Modules Selection */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Modules *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {availableModules.map((module) => (
                  <div 
                    key={module.id}
                    className={`
                      p-4 border rounded-md cursor-pointer
                      ${selectedModules.includes(module.id) 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-300 hover:border-indigo-300'}
                    `}
                    onClick={() => handleModuleToggle(module.id)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-2">
                        {selectedModules.includes(module.id) ? (
                          <CheckCircle className="h-5 w-5 text-indigo-500" />
                        ) : (
                          <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{module.name}</h3>
                        <p className="text-xs text-gray-500">{module.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {selectedModules.length === 0 && (
                <p className="text-sm text-red-500 mb-2">Please select at least one module</p>
              )}
            </div>

            {/* Subscription Plan */}
            <div className="col-span-2">
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                Subscription Plan *
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              >
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Basic: Up to 50 patients, 1 admin user, basic reporting
                <br />
                Premium: Unlimited patients, multiple users, advanced reporting
              </p>
            </div>

            <div className="col-span-2 border-t pt-6 mt-2">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Admin Information</h2>
            </div>

            {/* Admin Name */}
            <div>
              <label htmlFor="adminName" className="block text-sm font-medium text-gray-700 mb-1">
                Admin Name *
              </label>
              <input
                type="text"
                id="adminName"
                name="adminName"
                value={formData.adminName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            {/* Admin Email */}
            <div>
              <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Admin Email *
              </label>
              <input
                type="email"
                id="adminEmail"
                name="adminEmail"
                value={formData.adminEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            {/* Admin Phone */}
            <div>
              <label htmlFor="adminPhone" className="block text-sm font-medium text-gray-700 mb-1">
                Admin Phone *
              </label>
              <input
                type="tel"
                id="adminPhone"
                name="adminPhone"
                value={formData.adminPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                required
              />
            </div>

            <div className="col-span-2 mt-6">
              <div className="flex justify-end space-x-4">
                <Link 
                  href="/super-admin/hospitals" 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                  disabled={loading || selectedModules.length === 0}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    'Create Hospital'
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 