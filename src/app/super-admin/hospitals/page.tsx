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

export default function HospitalsPage() {
  const [editingHospital, setEditingHospital] = useState<any>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);

  // Sample hospital data with modules
  const [hospitals, setHospitals] = useState([
    { 
      id: 'H001', 
      name: 'City General Hospital', 
      admin: 'Dr. Rajesh Kumar', 
      city: 'New Delhi', 
      status: 'Active', 
      plan: 'Premium',
      type: 'hospital',
      modules: ['billing', 'emr', 'pharmacy', 'patientPortal'] 
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
      modules: ['laboratory', 'pharmacy', 'emr', 'callCenter'] 
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
      modules: ['laboratory', 'pharmacy', 'emr', 'patientPortal', 'ambulance'] 
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
    laboratory: { name: 'Lab', icon: Stethoscope },
    pharmacy: { name: 'Pharmacy', icon: Pill },
    emr: { name: 'EMR', icon: FileText },
    patientPortal: { name: 'Portal', icon: Users },
    callCenter: { name: 'Call Center', icon: Phone },
    messaging: { name: 'Messaging', icon: MessageCircle },
    ambulance: { name: 'Ambulance', icon: Ambulance },
    raftaar: { name: 'Raftaar', icon: Building2 },
    onelife: { name: 'One Scan', icon: ScanSearch }
  };

  // Define available modules based on facility type
  const availableModulesByType = {
    hospital: [
      'billing', 'laboratory', 'pharmacy', 'emr', 'patientPortal', 'callCenter', 'messaging', 'ambulance'
    ],
    enterprise: [
      'raftaar', 'patientPortal', 'callCenter', 'onelife'
    ],
    clinic: [
      'emr', 'billing', 'patientPortal', 'onelife', 'messaging'
    ]
  };

  const openEditModal = (hospital: any) => {
    setEditingHospital(hospital);
    setSelectedModules([...hospital.modules]);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingHospital(null);
    setSelectedModules([]);
  };

  const handleModuleToggle = (moduleId: string) => {
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {hospital.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.admin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      hospital.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      hospital.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {hospital.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-wrap gap-1">
                      {hospital.modules.map((moduleId) => {
                        const module = moduleInfo[moduleId as keyof typeof moduleInfo];
                        const Icon = module?.icon;
                        return (
                          <div 
                            key={moduleId} 
                            className="flex items-center bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full" 
                            title={moduleId}
                          >
                            {Icon && <Icon className="h-3 w-3 mr-1" />}
                            <span>{module?.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {hospital.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => openEditModal(hospital)}
                      >
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{hospitals.length}</span> of <span className="font-medium">{hospitals.length}</span> hospitals
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modules Modal */}
      {showEditModal && editingHospital && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full relative z-10">
              <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Edit Modules for {editingHospital.name}</h3>
                <button onClick={closeEditModal} className="text-white hover:text-gray-200">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="px-6 py-4">
                <p className="text-gray-700 mb-4">Select the modules you want to enable for this facility:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {availableModulesByType[editingHospital.type as keyof typeof availableModulesByType].map((moduleId) => {
                    const module = moduleInfo[moduleId as keyof typeof moduleInfo];
                    const Icon = module?.icon;
                    
                    return (
                      <div 
                        key={moduleId}
                        className={`
                          flex items-center p-3 border rounded-md cursor-pointer
                          ${selectedModules.includes(moduleId) 
                            ? 'border-indigo-500 bg-indigo-50' 
                            : 'border-gray-300 hover:border-indigo-300'}
                        `}
                        onClick={() => handleModuleToggle(moduleId)}
                      >
                        <div className="flex-shrink-0 mr-3">
                          {selectedModules.includes(moduleId) ? (
                            <div className="h-5 w-5 bg-indigo-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          ) : (
                            <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          {Icon && <Icon className="h-4 w-4 text-indigo-600 mr-2" />}
                          <span className="text-sm font-medium">{module?.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-end space-x-3 border-t pt-4">
                  <button
                    onClick={closeEditModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveModules}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 