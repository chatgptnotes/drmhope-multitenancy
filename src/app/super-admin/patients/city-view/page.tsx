'use client';

import { useState } from 'react';

export default function CityPatientViewPage() {
  // Sample patient data categorized by city
  const patients = [
    { 
      id: 'PAT001', 
      name: 'Rahul Sharma', 
      age: 45,
      gender: 'Male',
      phone: '9876543210',
      address: '123 Green Park',
      city: 'New Delhi',
      registerStatus: 'Unregistered',
      emergencyCount: 2,
      lastVisit: '2023-05-10'
    },
    { 
      id: 'PAT002', 
      name: 'Priya Patel', 
      age: 36,
      gender: 'Female',
      phone: '9876543211',
      address: '456 Andheri West',
      city: 'Mumbai',
      registerStatus: 'Unregistered',
      emergencyCount: 1,
      lastVisit: '2023-05-12'
    },
    { 
      id: 'PAT003', 
      name: 'Mohan Kumar', 
      age: 52,
      gender: 'Male',
      phone: '9876543212',
      address: '789 Indiranagar',
      city: 'Bangalore',
      registerStatus: 'Registered',
      emergencyCount: 3,
      lastVisit: '2023-05-05'
    },
    { 
      id: 'PAT004', 
      name: 'Aishwarya Reddy', 
      age: 28,
      gender: 'Female',
      phone: '9876543213',
      address: '101 T Nagar',
      city: 'Chennai',
      registerStatus: 'Unregistered',
      emergencyCount: 1,
      lastVisit: '2023-05-14'
    },
    { 
      id: 'PAT005', 
      name: 'Vikram Singh', 
      age: 65,
      gender: 'Male',
      phone: '9876543214',
      address: '202 Civil Lines',
      city: 'New Delhi',
      registerStatus: 'Registered',
      emergencyCount: 4,
      lastVisit: '2023-05-08'
    },
  ];

  // City statistics
  const cityStats = [
    { name: 'New Delhi', total: 238, emergency: 42, registered: 156, unregistered: 82 },
    { name: 'Mumbai', total: 195, emergency: 36, registered: 128, unregistered: 67 },
    { name: 'Bangalore', total: 182, emergency: 28, registered: 123, unregistered: 59 },
    { name: 'Chennai', total: 167, emergency: 31, registered: 112, unregistered: 55 },
    { name: 'Hyderabad', total: 146, emergency: 26, registered: 97, unregistered: 49 },
  ];

  // State for filters
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [registerFilter, setRegisterFilter] = useState('All Patients');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">City-Based Patient View</h1>
        <p className="text-gray-600">Manage patients categorized by city location</p>
      </div>

      {/* City Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {cityStats.map((city, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition ${
              selectedCity === city.name ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedCity(city.name === selectedCity ? 'All Cities' : city.name)}
          >
            <h3 className="font-semibold text-gray-800 mb-2">{city.name}</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Total Patients:</span>
                <span className="text-indigo-600 font-medium">{city.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Emergency Cases:</span>
                <span className="text-red-600 font-medium">{city.emergency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Registered:</span>
                <span className="text-green-600 font-medium">{city.registered}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Unregistered:</span>
                <span className="text-yellow-600 font-medium">{city.unregistered}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter and Actions */}
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
                placeholder="Search patient by name or ID"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select 
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="All Cities">All Cities</option>
              {cityStats.map((city, index) => (
                <option key={index} value={city.name}>{city.name}</option>
              ))}
            </select>
            
            <select 
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={registerFilter}
              onChange={(e) => setRegisterFilter(e.target.value)}
            >
              <option value="All Patients">All Patients</option>
              <option value="Registered">Registered</option>
              <option value="Unregistered">Unregistered</option>
            </select>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Patient
            </button>
            
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age/Gender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Emergency Visits
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients
                .filter(patient => (selectedCity === 'All Cities' || patient.city === selectedCity))
                .filter(patient => (registerFilter === 'All Patients' || patient.registerStatus === registerFilter))
                .map((patient) => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {patient.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {patient.age} / {patient.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {patient.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {patient.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {patient.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.registerStatus === 'Registered' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.registerStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.emergencyCount > 2 ? 'bg-red-100 text-red-800' : 
                      patient.emergencyCount > 0 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {patient.emergencyCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Edit
                      </button>
                      {patient.registerStatus === 'Unregistered' && (
                        <button className="text-green-600 hover:text-green-800">
                          Register
                        </button>
                      )}
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
              Showing <span className="font-medium">5</span> of <span className="font-medium">928</span> patients
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 