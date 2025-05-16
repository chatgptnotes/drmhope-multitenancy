'use client';

import Link from 'next/link';

export default function CghsOverviewPage() {
  // Sample CGHS billing data
  const cghsBilling = [
    { 
      id: 'C001', 
      hospital: 'City General Hospital', 
      patient: 'Ajay Singh', 
      cghsId: 'CGHS1234567890', 
      date: '2023-05-15', 
      amount: '₹5,500', 
      status: 'Approved' 
    },
    { 
      id: 'C002', 
      hospital: 'Wellness Hospital', 
      patient: 'Sonia Gupta', 
      cghsId: 'CGHS1234587891', 
      date: '2023-05-13', 
      amount: '₹4,200', 
      status: 'Approved' 
    },
    { 
      id: 'C003', 
      hospital: 'Metro Healthcare', 
      patient: 'Rajiv Khanna', 
      cghsId: 'CGHS1234597892', 
      date: '2023-05-10', 
      amount: '₹7,800', 
      status: 'Pending' 
    },
    { 
      id: 'C004', 
      hospital: 'Life Line Hospital', 
      patient: 'Priya Sharma', 
      cghsId: 'CGHS1234507893', 
      date: '2023-05-09', 
      amount: '₹2,950', 
      status: 'Approved' 
    },
    { 
      id: 'C005', 
      hospital: 'Care Medical Center', 
      patient: 'Arun Patel', 
      cghsId: 'CGHS1234517894', 
      date: '2023-05-07', 
      amount: '₹9,700', 
      status: 'Rejected' 
    },
  ];

  // Summary statistics
  const summary = [
    { label: 'Total CGHS Billings', value: '421', icon: '📝', color: 'bg-blue-100 text-blue-800' },
    { label: 'Approved Billings', value: '385', icon: '✅', color: 'bg-green-100 text-green-800' },
    { label: 'Pending Review', value: '29', icon: '⏳', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Rejected Billings', value: '7', icon: '❌', color: 'bg-red-100 text-red-800' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">CGHS Billing Overview</h1>
        <p className="text-gray-600">Monitor and manage all CGHS billings across hospitals</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                placeholder="Search by ID, patient or hospital"
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Hospitals</option>
              <option value="city-general">City General Hospital</option>
              <option value="wellness">Wellness Hospital</option>
              <option value="metro">Metro Healthcare</option>
              <option value="life-line">Life Line Hospital</option>
              <option value="care-medical">Care Medical Center</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* CGHS Billing Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Billing ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CGHS ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
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
              {cghsBilling.map((bill) => (
                <tr key={bill.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {bill.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {bill.hospital}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {bill.patient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {bill.cghsId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {bill.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {bill.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      bill.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View
                      </button>
                      {bill.status === 'Pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-800">
                            Approve
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            Reject
                          </button>
                        </>
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
              Showing <span className="font-medium">5</span> of <span className="font-medium">421</span> billings
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