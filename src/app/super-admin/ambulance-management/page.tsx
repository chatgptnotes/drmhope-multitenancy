'use client';

import { useState } from 'react';

export default function AmbulanceManagementPage() {
  // Sample ambulance data
  const ambulances = [
    { 
      id: 'AMB001', 
      regNumber: 'DL01AB1234', 
      type: 'Advanced Life Support',
      driver: 'Raj Kumar',
      phone: '9876543210',
      city: 'New Delhi',
      location: 'Karol Bagh',
      status: 'Available',
      lastUpdated: '2023-05-15 10:30 AM'
    },
    { 
      id: 'AMB002', 
      regNumber: 'DL02CD5678', 
      type: 'Basic Life Support',
      driver: 'Suresh Singh',
      phone: '9876543211',
      city: 'New Delhi',
      location: 'Connaught Place',
      status: 'On Call',
      lastUpdated: '2023-05-15 11:15 AM'
    },
    { 
      id: 'AMB003', 
      regNumber: 'MH01EF9012', 
      type: 'Patient Transport',
      driver: 'Amit Patel',
      phone: '9876543212',
      city: 'Mumbai',
      location: 'Andheri',
      status: 'Available',
      lastUpdated: '2023-05-15 10:45 AM'
    },
    { 
      id: 'AMB004', 
      regNumber: 'KA01GH3456', 
      type: 'Advanced Life Support',
      driver: 'Venkat R',
      phone: '9876543213',
      city: 'Bangalore',
      location: 'Koramangala',
      status: 'Maintenance',
      lastUpdated: '2023-05-15 09:30 AM'
    },
    { 
      id: 'AMB005', 
      regNumber: 'TN01IJ7890', 
      type: 'Basic Life Support',
      driver: 'Karthik Raja',
      phone: '9876543214',
      city: 'Chennai',
      location: 'T Nagar',
      status: 'On Call',
      lastUpdated: '2023-05-15 11:30 AM'
    },
  ];

  // Active emergency calls
  const emergencyCalls = [
    {
      id: 'CALL001',
      caller: 'Priya Sharma',
      phone: '8765432109',
      location: 'Green Park, New Delhi',
      time: '2023-05-15 11:10 AM',
      status: 'Ambulance Dispatched',
      assignedTo: 'AMB002'
    },
    {
      id: 'CALL002',
      caller: 'Rahul Mehta',
      phone: '8765432108',
      location: 'Borivali, Mumbai',
      time: '2023-05-15 11:25 AM',
      status: 'Assigning Ambulance',
      assignedTo: null
    },
    {
      id: 'CALL003',
      caller: 'Sunita Iyer',
      phone: '8765432107',
      location: 'Anna Nagar, Chennai',
      time: '2023-05-15 11:28 AM',
      status: 'Ambulance Dispatched',
      assignedTo: 'AMB005'
    }
  ];

  // Summary statistics
  const summary = [
    { label: 'Total Ambulances', value: '42', icon: '🚑', color: 'bg-blue-100 text-blue-800' },
    { label: 'Available', value: '28', icon: '✅', color: 'bg-green-100 text-green-800' },
    { label: 'On Call', value: '10', icon: '🔔', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Maintenance', value: '4', icon: '🔧', color: 'bg-red-100 text-red-800' },
    { label: 'Active Calls', value: '8', icon: '📞', color: 'bg-purple-100 text-purple-800' },
  ];

  // State for selected city filter
  const [selectedCity, setSelectedCity] = useState('All Cities');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ambulance Management</h1>
        <p className="text-gray-600">Monitor and dispatch ambulances across all registered cities</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {summary.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">{stat.label}</h2>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Emergency Calls */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Active Emergency Calls</h2>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Emergency Call
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Call ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Caller
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {emergencyCalls.map((call) => (
                <tr key={call.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                    {call.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {call.caller}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {call.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {call.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {call.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      call.status === 'Ambulance Dispatched' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {call.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      {!call.assignedTo && (
                        <button className="text-green-600 hover:text-green-800">
                          Dispatch
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-800">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                placeholder="Search ambulance or driver"
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select 
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="All Cities">All Cities</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="on-call">On Call</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Ambulance
            </button>
          </div>
        </div>
      </div>

      {/* Ambulance List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ambulances
                .filter(amb => selectedCity === 'All Cities' || amb.city === selectedCity)
                .map((ambulance) => (
                <tr key={ambulance.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {ambulance.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {ambulance.regNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {ambulance.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {ambulance.driver}
                    <div className="text-xs text-gray-500">{ambulance.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {ambulance.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {ambulance.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ambulance.status === 'Available' ? 'bg-green-100 text-green-800' : 
                      ambulance.status === 'On Call' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {ambulance.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {ambulance.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      {ambulance.status === 'Available' && (
                        <button className="text-green-600 hover:text-green-800">
                          Dispatch
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-800">
                        Edit
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
              Showing <span className="font-medium">5</span> of <span className="font-medium">42</span> ambulances
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