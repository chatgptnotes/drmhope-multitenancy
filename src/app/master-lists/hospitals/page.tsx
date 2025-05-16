'use client';

import Link from 'next/link';

export default function HospitalsPage() {
  // Sample hospitals data
  const hospitals = [
    { id: 'H001', name: 'City General Hospital', address: 'MG Road, New Delhi', beds: 450, doctors: 75, facilities: 'ICU, Emergency, OT', active: true },
    { id: 'H002', name: 'Apollo Hospital', address: 'Bandra, Mumbai', beds: 650, doctors: 120, facilities: 'ICU, Emergency, OT, MRI', active: true },
    { id: 'H003', name: 'AIIMS', address: 'AIIMS Road, New Delhi', beds: 1200, doctors: 350, facilities: 'ICU, Emergency, OT, Cancer Center', active: true },
    { id: 'H004', name: 'Fortis Healthcare', address: 'Gurugram, Haryana', beds: 480, doctors: 90, facilities: 'ICU, Emergency, OT, Cardiology', active: true },
    { id: 'H005', name: 'Max Hospital', address: 'Saket, New Delhi', beds: 350, doctors: 65, facilities: 'ICU, Emergency, OT', active: false },
    { id: 'H006', name: 'Manipal Hospital', address: 'Whitefield, Bangalore', beds: 520, doctors: 105, facilities: 'ICU, Emergency, OT, Neurology', active: true },
    { id: 'H007', name: 'Narayana Health', address: 'Electronic City, Bangalore', beds: 580, doctors: 110, facilities: 'ICU, Emergency, OT, Cardiac Center', active: true },
    { id: 'H008', name: 'Medanta', address: 'Gurugram, Haryana', beds: 620, doctors: 130, facilities: 'ICU, Emergency, OT, Transplant Center', active: true },
  ];

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hospitals</h1>
          <p className="text-gray-600">Manage all hospitals in the system</p>
        </div>
        <button 
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Hospital
        </button>
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
              <option value="">All Cities</option>
              <option value="delhi">New Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="gurugram">Gurugram</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
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
                  Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Beds
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctors
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
              {hospitals.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {hospital.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {hospital.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.beds}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.doctors}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      hospital.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {hospital.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
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
              Showing <span className="font-medium">8</span> of <span className="font-medium">8</span> hospitals
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
    </div>
  );
} 