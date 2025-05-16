'use client';

import { useState } from 'react';

export default function ReceptionistsRolePage() {
  // Sample receptionists data
  const [receptionists, setReceptionists] = useState([
    { 
      id: 1, 
      name: 'Neha Kapoor', 
      email: 'neha.kapoor@hospital.com', 
      shift: 'Morning',
      department: 'Main Reception',
      lastActive: '2023-05-15 08:30 AM',
      permissions: ['appointments', 'patient_registration', 'visitor_management', 'basic_patient_info']
    },
    { 
      id: 2, 
      name: 'Rahul Verma', 
      email: 'rahul.verma@hospital.com', 
      shift: 'Evening',
      department: 'Emergency',
      lastActive: '2023-05-15 06:15 PM',
      permissions: ['appointments', 'patient_registration', 'emergency_triage']
    },
    { 
      id: 3, 
      name: 'Deepa Malhotra', 
      email: 'deepa.malhotra@hospital.com', 
      shift: 'Night',
      department: 'Main Reception',
      lastActive: '2023-05-15 12:20 AM',
      permissions: ['appointments', 'patient_registration', 'visitor_management', 'phone_support']
    },
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Receptionist Role Management</h1>
        <p className="text-gray-600">Manage receptionist permissions and access rights</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Receptionists</h2>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Receptionist
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shift
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {receptionists.map((receptionist) => (
                <tr key={receptionist.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{receptionist.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{receptionist.name}</div>
                        <div className="text-sm text-gray-500">{receptionist.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {receptionist.shift}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {receptionist.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {receptionist.permissions.slice(0, 2).map((permission, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {permission.replace(/_/g, ' ')}
                        </span>
                      ))}
                      {receptionist.permissions.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{receptionist.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {receptionist.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 