'use client';

import { useState } from 'react';

export default function LabTechniciansRolePage() {
  // Sample lab technicians data
  const [labTechnicians, setLabTechnicians] = useState([
    { 
      id: 1, 
      name: 'Vikram Mehta', 
      email: 'vikram.mehta@hospital.com', 
      specialization: 'Hematology',
      department: 'Pathology',
      lastActive: '2023-05-15 08:45 AM',
      permissions: ['lab_tests', 'sample_processing', 'test_results', 'blood_bank']
    },
    { 
      id: 2, 
      name: 'Kavita Joshi', 
      email: 'kavita.joshi@hospital.com', 
      specialization: 'Microbiology',
      department: 'Pathology',
      lastActive: '2023-05-15 11:30 AM',
      permissions: ['lab_tests', 'sample_processing', 'test_results', 'culture_testing']
    },
    { 
      id: 3, 
      name: 'Deepak Singh', 
      email: 'deepak.singh@hospital.com', 
      specialization: 'Biochemistry',
      department: 'Pathology',
      lastActive: '2023-05-14 02:15 PM',
      permissions: ['lab_tests', 'sample_processing', 'test_results', 'equipment_management']
    },
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Lab Technician Role Management</h1>
        <p className="text-gray-600">Manage lab technician permissions and access rights</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Lab Technicians</h2>
          <button 
            className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Lab Technician
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
                  Specialization
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
              {labTechnicians.map((tech) => (
                <tr key={tech.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{tech.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">{tech.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {tech.specialization}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tech.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {tech.permissions.slice(0, 2).map((permission, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {permission.replace(/_/g, ' ')}
                        </span>
                      ))}
                      {tech.permissions.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{tech.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tech.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-yellow-600 hover:text-yellow-900 mr-3">
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