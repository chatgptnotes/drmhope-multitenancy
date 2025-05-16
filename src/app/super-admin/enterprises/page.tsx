'use client';

import Link from 'next/link';

export default function EnterprisesPage() {
  // Sample enterprise data
  const enterprises = [
    { id: 'E001', name: 'Medicare Group', admin: 'Mr. Sanjay Malhotra', city: 'New Delhi', status: 'Active', hospitals: '12' },
    { id: 'E002', name: 'Healthcare Solutions', admin: 'Mrs. Meera Sharma', city: 'Mumbai', status: 'Active', hospitals: '8' },
    { id: 'E003', name: 'Wellness Enterprises', admin: 'Mr. Rajiv Verma', city: 'Bangalore', status: 'Active', hospitals: '5' },
    { id: 'E004', name: 'Medical Corporation', admin: 'Ms. Priya Singh', city: 'Chennai', status: 'Inactive', hospitals: '3' },
    { id: 'E005', name: 'Health Partners', admin: 'Mr. Sunil Gupta', city: 'Hyderabad', status: 'Active', hospitals: '7' },
    { id: 'E006', name: 'Caregivers Ltd', admin: 'Mrs. Anita Kumar', city: 'Kolkata', status: 'Active', hospitals: '4' },
    { id: 'E007', name: 'LifeCare Group', admin: 'Mr. Ravi Patel', city: 'Pune', status: 'Active', hospitals: '9' },
    { id: 'E008', name: 'VitalCare Systems', admin: 'Ms. Deepa Menon', city: 'Jaipur', status: 'Pending Approval', hospitals: '2' },
  ];

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Enterprises</h1>
          <p className="text-gray-600">Manage all registered healthcare enterprises in the system</p>
        </div>
        <Link 
          href="/super-admin/add-enterprise" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Enterprise
        </Link>
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
                placeholder="Search enterprises..."
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Sizes</option>
              <option value="small">Small (1-5)</option>
              <option value="medium">Medium (6-10)</option>
              <option value="large">Large (10+)</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending Approval</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enterprises Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enterprise ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enterprise Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admin
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospitals
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enterprises.map((enterprise) => (
                <tr key={enterprise.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {enterprise.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {enterprise.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {enterprise.admin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {enterprise.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      enterprise.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      enterprise.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {enterprise.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {enterprise.hospitals}
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
              Showing <span className="font-medium">8</span> of <span className="font-medium">8</span> enterprises
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