'use client';

import { useState } from 'react';

export default function UserManagementPage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  // Sample users data
  const users = [
    {
      id: 'U001',
      name: 'Dr. Rajesh Sharma',
      email: 'rajesh.sharma@cityhospital.com',
      phone: '9876543210',
      role: 'Doctor',
      hospital: 'City General Hospital',
      status: 'Active',
      lastLogin: '2023-05-15 09:30 AM',
    },
    {
      id: 'U002',
      name: 'Priya Patel',
      email: 'priya.patel@cityhospital.com',
      phone: '9876543211',
      role: 'Nurse',
      hospital: 'City General Hospital',
      status: 'Active',
      lastLogin: '2023-05-15 08:45 AM',
    },
    {
      id: 'U003',
      name: 'Amit Verma',
      email: 'amit.verma@wellnesshospital.com',
      phone: '9876543212',
      role: 'Admin',
      hospital: 'Wellness Hospital',
      status: 'Active',
      lastLogin: '2023-05-15 10:15 AM',
    },
    {
      id: 'U004',
      name: 'Sunita Reddy',
      email: 'sunita.reddy@metrohealthcare.com',
      phone: '9876543213',
      role: 'Receptionist',
      hospital: 'Metro Healthcare',
      status: 'Inactive',
      lastLogin: '2023-05-10 11:20 AM',
    },
    {
      id: 'U005',
      name: 'Dr. Vikram Singh',
      email: 'vikram.singh@apollohospitals.com',
      phone: '9876543214',
      role: 'Doctor',
      hospital: 'Apollo Hospitals',
      status: 'Active',
      lastLogin: '2023-05-15 09:10 AM',
    },
    {
      id: 'U006',
      name: 'Rahul Mehta',
      email: 'rahul.mehta@lifepointmedical.com',
      phone: '9876543215',
      role: 'Billing Officer',
      hospital: 'Lifepoint Medical',
      status: 'Active',
      lastLogin: '2023-05-15 08:30 AM',
    },
    {
      id: 'U007',
      name: 'Neha Kapoor',
      email: 'neha.kapoor@wellnesshospital.com',
      phone: '9876543216',
      role: 'Nurse',
      hospital: 'Wellness Hospital',
      status: 'Pending',
      lastLogin: 'Never',
    },
  ];
  
  // Filter users based on search query and filters
  const filteredUsers = users.filter((user) => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Role filter
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
    
    // Status filter
    const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });
  
  // Get unique roles for the filter dropdown
  const roles = ['All Roles', ...Array.from(new Set(users.map(user => user.role)))];
  
  // Stats for summary cards
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'Active').length;
  const inactiveUsers = users.filter(user => user.status === 'Inactive').length;
  const pendingUsers = users.filter(user => user.status === 'Pending').length;
  
  // Handler for user action menu
  const handleUserAction = (action, user) => {
    if (action === 'view') {
      setSelectedUser(user);
    } else if (action === 'edit') {
      // In a real app, this would open an edit modal with user details
      alert(`Edit user: ${user.name}`);
    } else if (action === 'deactivate') {
      if (confirm(`Are you sure you want to deactivate ${user.name}?`)) {
        // In a real app, this would make an API call to deactivate the user
        alert(`User ${user.name} has been deactivated`);
      }
    } else if (action === 'activate') {
      // In a real app, this would make an API call to activate the user
      alert(`User ${user.name} has been activated`);
    } else if (action === 'reset-password') {
      if (confirm(`Are you sure you want to reset password for ${user.name}?`)) {
        // In a real app, this would trigger a password reset email
        alert(`Password reset email sent to ${user.email}`);
      }
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <p className="text-gray-600">Manage users, roles, and permissions across all hospital facilities</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center text-xl">
              👥
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Total Users</h2>
              <p className="text-2xl font-semibold">{totalUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-800 flex items-center justify-center text-xl">
              ✅
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Active Users</h2>
              <p className="text-2xl font-semibold">{activeUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-xl">
              🚫
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Inactive Users</h2>
              <p className="text-2xl font-semibold">{inactiveUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center text-xl">
              ⏳
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Pending Activations</h2>
              <p className="text-2xl font-semibold">{pendingUsers}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
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
                placeholder="Search users by name, email, ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <select
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            
            <select
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
            
            <button 
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center justify-center"
              onClick={() => setShowAddUserModal(true)}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New User
            </button>
          </div>
        </div>
        
        {/* User Count Information */}
        <div className="text-sm text-gray-600">
          Showing {filteredUsers.length} of {totalUsers} users
        </div>
      </div>
      
      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-700 font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-sm text-gray-500">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'Doctor' ? 'bg-blue-100 text-blue-800' :
                      user.role === 'Nurse' ? 'bg-green-100 text-green-800' :
                      user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'Receptionist' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.hospital}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      user.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative inline-block text-left dropdown">
                      <button 
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                        onClick={() => handleUserAction('view', user)}
                      >
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <div className="flex space-x-1 ml-2">
                        <button 
                          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                          onClick={() => handleUserAction('edit', user)}
                        >
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        {user.status === 'Active' ? (
                          <button 
                            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            onClick={() => handleUserAction('deactivate', user)}
                          >
                            <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        ) : (
                          <button 
                            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            onClick={() => handleUserAction('activate', user)}
                          >
                            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{totalUsers}</span> users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* User Detail Modal - simplified version */}
      {selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">User Details</h3>
              <button onClick={() => setSelectedUser(null)}>
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-700 font-medium text-xl">
                    {selectedUser.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-medium text-gray-900">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{selectedUser.id}</p>
                  <div className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedUser.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    selectedUser.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedUser.status}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-700"><span className="font-medium">Email:</span> {selectedUser.email}</p>
                    <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Phone:</span> {selectedUser.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Role & Hospital</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-700"><span className="font-medium">Role:</span> {selectedUser.role}</p>
                    <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Hospital:</span> {selectedUser.hospital}</p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Activity</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-700"><span className="font-medium">Last Login:</span> {selectedUser.lastLogin}</p>
                    <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Account Created:</span> May 1, 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => handleUserAction('reset-password', selectedUser)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  Reset Password
                </button>
                <button 
                  onClick={() => handleUserAction('edit', selectedUser)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                >
                  Edit User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add User Modal - Would be implemented in a real application */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Add New User</h3>
              <button onClick={() => setShowAddUserModal(false)}>
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-center text-gray-600 mb-4">
                User creation form would be implemented here with fields for name, email, role, etc.
              </p>
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    alert('User would be created here');
                    setShowAddUserModal(false);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 