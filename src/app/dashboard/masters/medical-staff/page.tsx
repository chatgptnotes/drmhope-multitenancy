'use client';

import { useState } from 'react';

export default function MedicalStaffMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Sample medical staff data
  const medicalStaff = [
    {
      id: 1,
      name: 'Sandeep Pandey',
      role: 'Staff Nurse',
      department: 'Emergency',
      qualification: 'B.Sc Nursing',
      experience: 8,
      contactNumber: '+91 95678 12345',
      email: 'sandeep.pandey@drmhope.com'
    },
    {
      id: 2,
      name: 'Rachana Mishra',
      role: 'Lab Technician',
      department: 'Pathology',
      qualification: 'DMLT',
      experience: 5,
      contactNumber: '+91 95678 12346',
      email: 'rachana.mishra@drmhope.com'
    },
    {
      id: 3,
      name: 'Vijay Prakash',
      role: 'Pharmacist',
      department: 'Pharmacy',
      qualification: 'B.Pharm',
      experience: 7,
      contactNumber: '+91 95678 12347',
      email: 'vijay.prakash@drmhope.com'
    },
    {
      id: 4,
      name: 'Preeti Verma',
      role: 'Staff Nurse',
      department: 'ICU',
      qualification: 'GNM',
      experience: 4,
      contactNumber: '+91 95678 12348',
      email: 'preeti.verma@drmhope.com'
    },
    {
      id: 5,
      name: 'Mohit Agarwal',
      role: 'Radiographer',
      department: 'Radiology',
      qualification: 'DMRD',
      experience: 6,
      contactNumber: '+91 95678 12349',
      email: 'mohit.agarwal@drmhope.com'
    },
  ];

  // Get unique roles for filter
  const roles = ['All', ...new Set(medicalStaff.map(staff => staff.role))];

  // Filter staff based on search term and role
  const filteredStaff = medicalStaff.filter(staff => 
    (staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     staff.department.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (roleFilter === 'All' || staff.role === roleFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Medical Staff Master</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="search" 
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Medical Staff Master</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Upload Excel/CSV
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Staff
            </button>
          </div>
          <div>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qualification
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStaff.map((staff) => (
                  <tr key={staff.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.qualification}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.experience} years
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.contactNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 