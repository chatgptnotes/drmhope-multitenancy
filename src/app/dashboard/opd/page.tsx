'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OPDDashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample OPD patient data
  const opdPatients = [
    { 
      id: 'OPD-2023-2001', 
      tokenNumber: 'T-001', 
      patientId: 'ESIC-2023-1001', 
      name: 'Rahul Sharma', 
      timeSlot: '09:30 AM', 
      department: 'Cardiology', 
      doctor: 'Dr. A. Kumar', 
      status: 'Completed' 
    },
    { 
      id: 'OPD-2023-2002', 
      tokenNumber: 'T-002', 
      patientId: 'ESIC-2023-1012', 
      name: 'Mohan Patel', 
      timeSlot: '10:00 AM', 
      department: 'Orthopedics', 
      doctor: 'Dr. S. Mehta', 
      status: 'Completed' 
    },
    { 
      id: 'OPD-2023-2003', 
      tokenNumber: 'T-003', 
      patientId: 'ESIC-2023-1018', 
      name: 'Geeta Desai', 
      timeSlot: '10:30 AM', 
      department: 'General Medicine', 
      doctor: 'Dr. R. Singh', 
      status: 'In Progress' 
    },
    { 
      id: 'OPD-2023-2004', 
      tokenNumber: 'T-004', 
      patientId: 'ESIC-2023-1025', 
      name: 'Vikram Malhotra', 
      timeSlot: '11:00 AM', 
      department: 'ENT', 
      doctor: 'Dr. P. Gupta', 
      status: 'Waiting' 
    },
  ];

  // Filter patients based on search term
  const filteredPatients = opdPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to determine status badge color
  const getStatusBadgeClass = (status: string): string => {
    switch(status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Waiting':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Today's OPD Dashboard</h1>
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

      <h2 className="text-xl font-bold text-gray-800 mb-4">Today's OPD Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-blue-700 mb-2">Total OPD Patients</h3>
          <div className="text-4xl font-bold text-gray-900">42</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-green-700 mb-2">Morning Slot</h3>
          <div className="text-4xl font-bold text-gray-900">28</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-purple-700 mb-2">Evening Slot</h3>
          <div className="text-4xl font-bold text-gray-900">14</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                OPD VISIT ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TOKEN NO
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PATIENT ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TIME SLOT
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DEPARTMENT
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DOCTOR
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/opd/${patient.id}`} className="text-blue-600 hover:underline">
                    {patient.id}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.tokenNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.patientId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.timeSlot}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.doctor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(patient.status)}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-3 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">
                    OPD→IPD
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 