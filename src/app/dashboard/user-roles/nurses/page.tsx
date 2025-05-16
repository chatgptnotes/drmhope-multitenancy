'use client';

import { useState } from 'react';

export default function NursesRolePage() {
  // Sample nurses data
  const [nurses, setNurses] = useState([
    { 
      id: 1, 
      name: 'Anjali Desai', 
      email: 'anjali.desai@hospital.com', 
      specialization: 'Critical Care',
      department: 'ICU',
      lastActive: '2023-05-15 09:20 AM',
      permissions: ['patient_vitals', 'medication_admin', 'care_plans', 'patient_notes']
    },
    { 
      id: 2, 
      name: 'Rajan Patel', 
      email: 'rajan.patel@hospital.com', 
      specialization: 'Pediatric',
      department: 'Pediatrics',
      lastActive: '2023-05-15 10:45 AM',
      permissions: ['patient_vitals', 'medication_admin', 'immunization']
    },
    { 
      id: 3, 
      name: 'Sunita Sharma', 
      email: 'sunita.sharma@hospital.com', 
      specialization: 'Surgical',
      department: 'Surgery',
      lastActive: '2023-05-14 03:30 PM',
      permissions: ['patient_vitals', 'medication_admin', 'pre_op_care', 'post_op_care']
    },
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Nurse Role Management</h1>
        <p className="text-gray-600">Manage nurse permissions and access rights</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Nurses</h2>
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Nurse
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
              {nurses.map((nurse) => (
                <tr key={nurse.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-red-100 text-red-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{nurse.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{nurse.name}</div>
                        <div className="text-sm text-gray-500">{nurse.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {nurse.specialization}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {nurse.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {nurse.permissions.slice(0, 2).map((permission, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {permission.replace(/_/g, ' ')}
                        </span>
                      ))}
                      {nurse.permissions.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{nurse.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {nurse.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-red-600 hover:text-red-900 mr-3">
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