'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PatientDashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample patient data
  const patients = [
    { 
      id: 'ESIC-2023-1001', 
      name: 'Rahul Sharma', 
      ageGender: '42 / Male', 
      primaryDiagnosis: 'Type 2 Diabetes Mellitus', 
      surgery: 'Cataract Surgery', 
      status: 'Approved', 
      registration: '15 Jan 2023', 
      insurance: 'Active', 
      referee: 'Dr. Neha Patel' 
    },
    { 
      id: 'ESIC-2023-1002', 
      name: 'Amit Verma', 
      ageGender: '35 / Male', 
      primaryDiagnosis: 'Hypertension', 
      surgery: 'Appendectomy', 
      status: 'Pending', 
      registration: '20 Feb 2023', 
      insurance: 'Active', 
      referee: 'Dr. Vikram Singh' 
    },
    { 
      id: 'ESIC-2023-1003', 
      name: 'Suman Gupta', 
      ageGender: '29 / Female', 
      primaryDiagnosis: 'Coronary Artery Disease', 
      surgery: 'Coronary Angioplasty', 
      status: 'Rejected', 
      registration: '10 Mar 2023', 
      insurance: 'Expired', 
      referee: 'Dr. Anjali Gupta' 
    },
  ];

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.primaryDiagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.surgery.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.referee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to determine status badge color
  const getStatusBadgeClass = (status: string): string => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patient Dashboard</h1>
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

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Patient Dashboard</h2>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Patient Registration
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age/Gender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Primary Diagnosis
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Surgery
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registration
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Referee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/patient-dashboard/${patient.id}`} className="text-blue-600 hover:underline">
                    {patient.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.ageGender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.primaryDiagnosis}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.surgery}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(patient.status)}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.registration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.insurance === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {patient.insurance}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.referee}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
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