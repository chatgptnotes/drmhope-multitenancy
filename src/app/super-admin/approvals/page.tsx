'use client';

export default function ApprovalsPage() {
  // Sample pending approvals data
  const pendingApprovals = [
    { id: 'H008', name: 'Healing Touch Hospital', admin: 'Dr. Kavita Gupta', email: 'kavita@healingtouch.com', city: 'Jaipur', registrationDate: '2023-05-14' },
    { id: 'H009', name: 'Green Valley Hospital', admin: 'Dr. Sanjay Mehta', email: 'sanjay@greenvalley.com', city: 'Ahmedabad', registrationDate: '2023-05-13' },
    { id: 'H010', name: 'Sunrise Medical Center', admin: 'Dr. Neha Reddy', email: 'neha@sunrisemedical.com', city: 'Lucknow', registrationDate: '2023-05-12' },
    { id: 'H011', name: 'Hope Healthcare', admin: 'Dr. Arjun Nair', email: 'arjun@hopehealthcare.com', city: 'Kochi', registrationDate: '2023-05-11' },
    { id: 'H012', name: 'Unity Hospital', admin: 'Dr. Preeti Sharma', email: 'preeti@unityhospital.com', city: 'Chandigarh', registrationDate: '2023-05-10' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pending Approvals</h1>
        <p className="text-gray-600">Review and approve new hospital registrations</p>
      </div>
      
      {/* Approvals Table */}
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
                  Admin
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registered On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingApprovals.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {hospital.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {hospital.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.admin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.registrationDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                        Reject
                      </button>
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Additional Info */}
      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                When approving a hospital, please verify their business registration and medical facilities license. 
                Once approved, an email will be automatically sent to the hospital admin with their login details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 