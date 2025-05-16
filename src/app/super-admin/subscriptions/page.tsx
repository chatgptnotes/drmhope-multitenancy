'use client';

export default function SubscriptionsPage() {
  // Sample subscription data
  const subscriptions = [
    { 
      id: 'S001', 
      hospital: 'City General Hospital', 
      plan: 'Premium', 
      startDate: '2023-01-15', 
      endDate: '2024-01-15', 
      status: 'Active', 
      amount: '₹9,999/month',
      autoRenew: true
    },
    { 
      id: 'S002', 
      hospital: 'Care Medical Center', 
      plan: 'Basic', 
      startDate: '2023-02-10', 
      endDate: '2024-02-10', 
      status: 'Active', 
      amount: '₹4,999/month',
      autoRenew: true
    },
    { 
      id: 'S003', 
      hospital: 'Wellness Hospital', 
      plan: 'Premium', 
      startDate: '2023-03-05', 
      endDate: '2024-03-05', 
      status: 'Active', 
      amount: '₹9,999/month',
      autoRenew: false
    },
    { 
      id: 'S004', 
      hospital: 'Life Line Hospital', 
      plan: 'Basic', 
      startDate: '2023-04-20', 
      endDate: '2023-12-15', 
      status: 'Expiring Soon', 
      amount: '₹4,999/month',
      autoRenew: false
    },
    { 
      id: 'S005', 
      hospital: 'Metro Healthcare', 
      plan: 'Premium', 
      startDate: '2023-05-01', 
      endDate: '2024-05-01', 
      status: 'Active', 
      amount: '₹9,999/month',
      autoRenew: true
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Subscription Management</h1>
        <p className="text-gray-600">Manage hospital subscriptions and billing</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-xl">
              ✅
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Active Subscriptions</h2>
              <p className="text-2xl font-semibold">22</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-xl">
              ⚠️
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Expiring Soon</h2>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
              💰
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Monthly Revenue</h2>
              <p className="text-2xl font-semibold">₹1,64,975</p>
            </div>
          </div>
        </div>
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
                placeholder="Search by hospital or ID"
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Plans</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="expiring">Expiring Soon</option>
              <option value="expired">Expired</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Generate Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscription ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auto Renew
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscriptions.map((subscription) => (
                <tr key={subscription.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {subscription.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {subscription.hospital}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      subscription.plan === 'Premium' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {subscription.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {subscription.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {subscription.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {subscription.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      subscription.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      subscription.status === 'Expiring Soon' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {subscription.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {subscription.autoRenew ? (
                      <span className="text-green-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Yes
                      </span>
                    ) : (
                      <span className="text-gray-600">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Renew
                      </button>
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
        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">5</span> of <span className="font-medium">25</span> subscriptions
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