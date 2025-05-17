'use client';

import { useState } from 'react';

export default function UserManagementPage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  
  // Sample users data
  const users = [
    {
      id: 'U001',
      name: 'bk murali',
      email: 'pmd@hopehospital.com',
      status: 'Active',
      lastLogin: 'Over a year ago',
      usage: '12.19 GB'
    },
    {
      id: 'U002',
      name: 'Dr Murali',
      email: 'cmd@hopehospital.com',
      status: 'Active',
      lastLogin: '1 day ago',
      usage: '16.06 GB'
    },
    {
      id: 'U003',
      name: 'Info Hope',
      email: 'info2@hopehospital.com',
      status: 'Active',
      lastLogin: '4 years ago',
      usage: '11.91 GB'
    },
    {
      id: 'U004',
      name: 'Info Hope',
      email: 'info@hopehospital.com',
      status: 'Active',
      lastLogin: '4 days ago',
      usage: '19.5 GB'
    },
    {
      id: 'U005',
      name: 'md Murali',
      email: 'md@hopehospital.com',
      status: 'Active',
      lastLogin: 'Over a year ago',
      usage: '13.64 GB'
    },
    {
      id: 'U006',
      name: 'Murali BK',
      email: 'MuraliBK@hopehospital.com',
      status: 'Active',
      lastLogin: '2 years ago',
      usage: '0.47 GB'
    },
    {
      id: 'U007',
      name: 'ru by',
      email: 'management@hopehospital.com',
      status: 'Active',
      lastLogin: '8 years ago',
      usage: '14.48 GB'
    },
    {
      id: 'U008',
      name: 'Ru by',
      email: 'mgmt@hopehospital.com',
      status: 'Active',
      lastLogin: '4 days ago',
      usage: '13.83 GB'
    },
    {
      id: 'U009',
      name: 'Shripad Manjule',
      email: 'Shripad@hopehospital.com',
      status: 'Active',
      lastLogin: '4 months ago',
      usage: '14.69 GB'
    },
    {
      id: 'U010',
      name: 'Tushar Chikhalkar',
      email: 'Finance@hopehospital.com',
      status: 'Active',
      lastLogin: '4 days ago',
      usage: '2.86 GB'
    }
  ];
  
  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });
  
  // Stats for summary cards
  const activeUsers = users.filter(user => user.status === 'Active').length;
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-600">Showing all users</p>
      </div>
      
      {/* Card with actions */}
      <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-gray-600">Add or manage users</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700">Active</h3>
          <div className="text-5xl font-bold mt-2 mb-4">{activeUsers}</div>
        </div>
        
        <div className="space-y-6">
          <button className="block text-indigo-600 font-medium text-lg hover:text-indigo-500">
            Add a user
          </button>
          <button className="block text-indigo-600 font-medium text-lg hover:text-indigo-500">
            Delete a user
          </button>
          <button className="block text-indigo-600 font-medium text-lg hover:text-indigo-500">
            Update a user's name or email
          </button>
          <button className="block text-indigo-600 font-medium text-lg hover:text-indigo-500">
            Create an alternate email address
          </button>
        </div>
        
        <div className="mt-8 text-right">
          <button className="text-indigo-600 font-medium px-4 py-2 border border-indigo-300 rounded-md hover:bg-indigo-50">
            Manage
          </button>
        </div>
      </div>
      
      {/* Users list */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium">Users</h2>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500">Showing all users</span>
          </div>
          
          <div className="flex space-x-2">
            <button className="text-indigo-600 hover:text-indigo-800 px-4 py-2">Add new user</button>
            <button className="text-indigo-600 hover:text-indigo-800 px-4 py-2">Bulk update users</button>
            <button className="text-indigo-600 hover:text-indigo-800 px-4 py-2">Download users</button>
            <div className="relative">
              <button className="text-indigo-600 hover:text-indigo-800 px-4 py-2 flex items-center">
                More options 
                <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <div className="relative">
            <button className="flex items-center text-gray-600 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add a filter
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Name
                  <svg className="h-5 w-5 ml-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Last sign in
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email usage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.usage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                      >
                        Reset password
                      </button>
                      <span className="text-gray-300">|</span>
                      <button 
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                      >
                        Rename user
                      </button>
                      <span className="text-gray-300">|</span>
                      <div className="relative inline-block text-left">
                        <button className="text-indigo-600 hover:text-indigo-900 font-medium flex items-center">
                          More options
                          <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Rows per page: 
            <select className="ml-2 border-none bg-transparent text-gray-700 font-medium focus:outline-none">
              <option>30</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">
              Page 1 of 1
            </span>
            <div className="flex items-center space-x-1">
              <button className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 