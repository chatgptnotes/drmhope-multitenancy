'use client';

import Link from 'next/link';

export default function InsurancePlansPage() {
  // Sample insurance plans data
  const insurancePlans = [
    { id: 'IP001', name: 'Premium Health Care', provider: 'Star Health', coverage: '₹5,00,000', premium: '₹12,000/yr', active: true },
    { id: 'IP002', name: 'Family Floater', provider: 'HDFC ERGO', coverage: '₹10,00,000', premium: '₹15,000/yr', active: true },
    { id: 'IP003', name: 'Senior Citizen Plan', provider: 'Apollo Munich', coverage: '₹3,00,000', premium: '₹9,000/yr', active: true },
    { id: 'IP004', name: 'Critical Illness Cover', provider: 'ICICI Lombard', coverage: '₹20,00,000', premium: '₹18,000/yr', active: true },
    { id: 'IP005', name: 'Mediclaim Policy', provider: 'New India Assurance', coverage: '₹2,00,000', premium: '₹5,000/yr', active: true },
    { id: 'IP006', name: 'Group Health Plan', provider: 'Bajaj Allianz', coverage: '₹7,50,000', premium: '₹8,000/yr', active: false },
    { id: 'IP007', name: 'Corona Kavach', provider: 'SBI General', coverage: '₹1,00,000', premium: '₹2,500/yr', active: true },
    { id: 'IP008', name: 'Diabetes Care Plus', provider: 'Max Bupa', coverage: '₹4,00,000', premium: '₹10,000/yr', active: true },
  ];

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insurance Plans</h1>
          <p className="text-gray-600">Manage all insurance plans in the system</p>
        </div>
        <button 
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Insurance Plan
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
                placeholder="Search insurance plans..."
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Providers</option>
              <option value="star">Star Health</option>
              <option value="hdfc">HDFC ERGO</option>
              <option value="apollo">Apollo Munich</option>
              <option value="icici">ICICI Lombard</option>
              <option value="newIndia">New India Assurance</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Insurance Plans Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coverage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium
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
              {insurancePlans.map((plan) => (
                <tr key={plan.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {plan.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {plan.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.provider}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.coverage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.premium}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plan.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {plan.active ? 'Active' : 'Inactive'}
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
              Showing <span className="font-medium">8</span> of <span className="font-medium">8</span> insurance plans
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