'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Pill,
  Stethoscope,
  FileText,
  Phone,
  MessageCircle,
  Ambulance,
  Building2,
  Users,
  ScanSearch,
  X,
  Check,
  Save
} from 'lucide-react';

// Define types for our data
type ModuleId = 'billing' | 'lab' | 'pharmacy' | 'emr' | 'portal' | 'callCenter' | 'messaging' | 'ambulance' | 'raftaar' | 'onelife';
type FacilityType = 'hospital' | 'clinic' | 'enterprise';

interface Hospital {
  id: string;
  name: string;
  admin: string;
  city: string;
  status: string;
  plan: string;
  type: FacilityType;
  modules: ModuleId[];
}

export default function HospitalsPage() {
  const [editingHospital, setEditingHospital] = useState<Hospital | null>(null);
  const [selectedModules, setSelectedModules] = useState<ModuleId[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);

  // Sample hospital data with modules
  const [hospitals, setHospitals] = useState<Hospital[]>([
    { 
      id: 'H001', 
      name: 'City General Hospital', 
      admin: 'Dr. Rajesh Kumar', 
      city: 'New Delhi', 
      status: 'Active', 
      plan: 'Premium',
      type: 'hospital',
      modules: ['billing', 'emr', 'pharmacy', 'portal'] 
    },
    { 
      id: 'H002', 
      name: 'Care Medical Center', 
      admin: 'Dr. Anita Singh', 
      city: 'Mumbai', 
      status: 'Active', 
      plan: 'Basic',
      type: 'clinic',
      modules: ['emr', 'billing'] 
    },
    { 
      id: 'H003', 
      name: 'Wellness Hospital', 
      admin: 'Dr. Vikram Joshi', 
      city: 'Bangalore', 
      status: 'Active', 
      plan: 'Premium',
      type: 'hospital',
      modules: ['lab', 'pharmacy', 'emr', 'callCenter'] 
    },
    { 
      id: 'H004', 
      name: 'Life Line Hospital', 
      admin: 'Dr. Priya Patel', 
      city: 'Chennai', 
      status: 'Inactive', 
      plan: 'Basic',
      type: 'hospital',
      modules: ['billing', 'emr'] 
    },
    { 
      id: 'H005', 
      name: 'Metro Healthcare', 
      admin: 'Dr. Suresh Menon', 
      city: 'Hyderabad', 
      status: 'Active', 
      plan: 'Premium',
      type: 'hospital',
      modules: ['lab', 'pharmacy', 'emr', 'portal', 'ambulance'] 
    },
    { 
      id: 'H006', 
      name: 'Prime Hospital', 
      admin: 'Dr. Meena Sharma', 
      city: 'Kolkata', 
      status: 'Active', 
      plan: 'Basic',
      type: 'clinic',
      modules: ['emr', 'patientPortal', 'messaging'] 
    },
    { 
      id: 'H007', 
      name: 'Apex Medical Center', 
      admin: 'Dr. Ramesh Verma', 
      city: 'Pune', 
      status: 'Active', 
      plan: 'Premium',
      type: 'hospital',
      modules: ['billing', 'laboratory', 'pharmacy', 'patientPortal', 'callCenter'] 
    },
    { 
      id: 'H008', 
      name: 'Healing Touch Hospital', 
      admin: 'Dr. Kavita Gupta', 
      city: 'Jaipur', 
      status: 'Pending Approval', 
      plan: 'N/A',
      type: 'hospital',
      modules: ['billing', 'emr', 'patientPortal'] 
    },
    { 
      id: 'E001', 
      name: 'HealthPlus Enterprise', 
      admin: 'Dr. Sanjay Mehta', 
      city: 'Delhi NCR', 
      status: 'Active', 
      plan: 'Premium',
      type: 'enterprise',
      modules: ['raftaar', 'patientPortal', 'callCenter', 'onelife'] 
    },
  ]);

  // Map of module IDs to display names and icons
  const moduleInfo = {
    billing: { name: 'Billing', icon: FileText },
    lab: { name: 'Lab', icon: Stethoscope },
    pharmacy: { name: 'Pharmacy', icon: Pill },
    emr: { name: 'EMR', icon: FileText },
    portal: { name: 'Portal', icon: Users },
    callCenter: { name: 'Call Center', icon: Phone },
    messaging: { name: 'Messaging', icon: MessageCircle },
    ambulance: { name: 'Ambulance', icon: Ambulance },
    raftaar: { name: 'Raftaar', icon: Building2 },
    onelife: { name: 'One Scan', icon: ScanSearch }
  };

  // Define available modules based on facility type
  const availableModulesByType = {
    hospital: [
      'billing', 'lab', 'pharmacy', 'emr', 'portal', 'callCenter', 'messaging', 'ambulance'
    ] as ModuleId[],
    enterprise: [
      'raftaar', 'portal', 'callCenter', 'onelife'
    ] as ModuleId[],
    clinic: [
      'emr', 'billing', 'portal', 'onelife', 'messaging'
    ] as ModuleId[]
  };

  const openEditModal = (hospital: Hospital) => {
    setEditingHospital(hospital);
    setSelectedModules([...hospital.modules]);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingHospital(null);
    setSelectedModules([]);
  };

  const handleModuleToggle = (moduleId: ModuleId) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const saveModules = () => {
    if (!editingHospital) return;
    
    // Update the hospital modules
    const updatedHospitals = hospitals.map(hospital => {
      if (hospital.id === editingHospital.id) {
        return {
          ...hospital,
          modules: selectedModules
        };
      }
      return hospital;
    });
    
    setHospitals(updatedHospitals);
    closeEditModal();
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hospitals</h1>
          <p className="text-gray-600">Manage all registered hospitals in the system</p>
        </div>
        <Link 
          href="/super-admin/add-hospital" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Hospital
        </Link>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring focus:border-indigo-300"
                placeholder="Search hospitals..."
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Plans</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending Approval</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hospitals Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admin
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modules
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hospitals.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {hospital.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {hospital.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hospital.admin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hospital.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      hospital.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : hospital.status === 'Inactive' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {hospital.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {hospital.modules.map(moduleId => {
                        const module = moduleInfo[moduleId];
                        if (!module) return null;
                        
                        const Icon = module.icon;
                        return (
                          <div key={moduleId} className="inline-flex items-center p-1 bg-gray-100 rounded text-xs">
                            <Icon className="h-4 w-4 mr-1" />
                            {module.name}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hospital.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                    <button 
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => alert(`View details for ${hospital.name}`)}
                    >
                      View
                    </button>
                    <button 
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => openEditModal(hospital)}
                    >
                      Edit
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete ${hospital.name}?`)) {
                          // In a real app, this would make an API call
                          alert(`${hospital.name} has been deleted`);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modules Modal */}
      {showEditModal && editingHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Edit Modules for {editingHospital.name}</h3>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={closeEditModal}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Facility Type: {editingHospital.type}</p>
              <div className="grid grid-cols-2 gap-2">
                {availableModulesByType[editingHospital.type].map((moduleId) => {
                  const module = moduleInfo[moduleId];
                  if (!module) return null;
                  
                  const Icon = module.icon;
                  const isSelected = selectedModules.includes(moduleId);
                  
                  return (
                    <div 
                      key={moduleId}
                      className={`p-3 border rounded-md flex items-center space-x-2 cursor-pointer ${
                        isSelected ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                      }`}
                      onClick={() => handleModuleToggle(moduleId)}
                    >
                      <div className={`p-2 rounded-md ${isSelected ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                        <Icon className={`h-5 w-5 ${isSelected ? 'text-indigo-600' : 'text-gray-500'}`} />
                      </div>
                      <span className={isSelected ? 'font-medium text-indigo-700' : 'text-gray-700'}>
                        {module.name}
                      </span>
                      {isSelected && (
                        <Check className="h-5 w-5 text-indigo-600 ml-auto" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={closeEditModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                onClick={saveModules}
              >
                <Save className="h-5 w-5 mr-1" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 