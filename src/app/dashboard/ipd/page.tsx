'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IPDDashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample IPD patient data
  const ipdPatients = [
    { 
      id: 'IPD-2023-5001', 
      patientId: 'ESIC-2023-1008', 
      name: 'Rajesh Kumar', 
      roomNo: '205-A', 
      admissionDate: '15 May 2023', 
      primaryDiagnosis: 'Pneumonia', 
      doctor: 'Dr. S. Mehta'
    },
    { 
      id: 'IPD-2023-5002', 
      patientId: 'ESIC-2023-1015', 
      name: 'Priya Sharma', 
      roomNo: '103-B', 
      admissionDate: '17 May 2023', 
      primaryDiagnosis: 'Appendicitis', 
      doctor: 'Dr. P. Gupta'
    },
    { 
      id: 'IPD-2023-5003', 
      patientId: 'ESIC-2023-1023', 
      name: 'Anil Verma', 
      roomNo: '307-C', 
      admissionDate: '18 May 2023', 
      primaryDiagnosis: 'Myocardial Infarction', 
      doctor: 'Dr. A. Kumar'
    },
    { 
      id: 'IPD-2023-5004', 
      patientId: 'ESIC-2023-1027', 
      name: 'Sunita Singh', 
      roomNo: '202-A', 
      admissionDate: '18 May 2023', 
      primaryDiagnosis: 'Cholecystitis', 
      doctor: 'Dr. P. Gupta'
    },
  ];

  // Filter patients based on search term
  const filteredPatients = ipdPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.primaryDiagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Today's IPD Dashboard</h1>
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

      <h2 className="text-xl font-bold text-gray-800 mb-4">Today's IPD Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-blue-700 mb-2">Total IPD Patients</h3>
          <div className="text-4xl font-bold text-gray-900">24</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-green-700 mb-2">Admissions Today</h3>
          <div className="text-4xl font-bold text-gray-900">8</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-purple-700 mb-2">Discharges Today</h3>
          <div className="text-4xl font-bold text-gray-900">5</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IPD VISIT ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PATIENT ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROOM NO.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ADMISSION DATE
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRIMARY DIAGNOSIS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DOCTOR
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/ipd/${patient.id}`} className="text-blue-600 hover:underline">
                    {patient.id}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.patientId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.roomNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.admissionDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.primaryDiagnosis}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.doctor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 