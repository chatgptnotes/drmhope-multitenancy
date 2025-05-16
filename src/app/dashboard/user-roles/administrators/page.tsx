'use client';

import { useState } from 'react';

export default function AdministratorsRolePage() {
  // Sample admin users data
  const [administrators, setAdministrators] = useState([
    { 
      id: 1, 
      name: 'Dr. Rajesh Kumar', 
      email: 'rajesh.kumar@hospital.com', 
      role: 'Super Admin',
      department: 'Administration',
      lastActive: '2023-05-15 09:30 AM',
      permissions: ['all']
    },
    { 
      id: 2, 
      name: 'Dr. Priya Sharma', 
      email: 'priya.sharma@hospital.com', 
      role: 'Hospital Admin',
      department: 'Administration',
      lastActive: '2023-05-15 11:45 AM',
      permissions: ['billing', 'staff', 'patients', 'reports']
    },
    { 
      id: 3, 
      name: 'Mr. Aman Gupta', 
      email: 'aman.gupta@hospital.com', 
      role: 'Finance Admin',
      department: 'Finance',
      lastActive: '2023-05-14 04:15 PM',
      permissions: ['billing', 'reports']
    },
  ]);

  // All available permissions
  const allPermissions = [
    { id: 'all', name: 'All Permissions', description: 'Full access to all system features' },
    { id: 'billing', name: 'Billing Management', description: 'Create and manage patient bills' },
    { id: 'staff', name: 'Staff Management', description: 'Manage hospital staff accounts' },
    { id: 'patients', name: 'Patient Records', description: 'Access and manage patient data' },
    { id: 'reports', name: 'Reports & Analytics', description: 'Generate and view reports' },
    { id: 'settings', name: 'System Settings', description: 'Configure system settings' },
  ];

  // State for the new admin form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: 'Hospital Admin',
    department: '',
    permissions: [] as string[]
  });

  // Toggle permission in the new admin form
  const togglePermission = (permission: string) => {
    if (permission === 'all') {
      // If 'all' is selected, clear other permissions
      setNewAdmin({
        ...newAdmin,
        permissions: newAdmin.permissions.includes('all') ? [] : ['all']
      });
    } else {
      // If another permission is selected, remove 'all' if it's there
      const updatedPermissions = newAdmin.permissions.includes(permission)
        ? newAdmin.permissions.filter(p => p !== permission)
        : [...newAdmin.permissions.filter(p => p !== 'all'), permission];
      
      setNewAdmin({
        ...newAdmin,
        permissions: updatedPermissions
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAdminWithId = {
      ...newAdmin,
      id: administrators.length + 1,
      lastActive: 'Just now'
    };
    setAdministrators([...administrators, newAdminWithId]);
    setNewAdmin({
      name: '',
      email: '',
      role: 'Hospital Admin',
      department: '',
      permissions: []
    });
    setShowAddForm(false);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Administrator Role Management</h1>
        <p className="text-gray-600">Manage users with administrator access to your hospital system</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Administrators</h2>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Administrator
          </button>
        </div>
        
        {showAddForm && (
          <div className="p-4 border-b bg-blue-50">
            <h3 className="text-md font-medium text-gray-800 mb-3">Add New Administrator</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAdmin.name}
                    onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role Type</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAdmin.role}
                    onChange={(e) => setNewAdmin({...newAdmin, role: e.target.value})}
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Hospital Admin">Hospital Admin</option>
                    <option value="Finance Admin">Finance Admin</option>
                    <option value="Department Admin">Department Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAdmin.department}
                    onChange={(e) => setNewAdmin({...newAdmin, department: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {allPermissions.map(permission => (
                    <div key={permission.id} className="flex items-start">
                      <input 
                        type="checkbox" 
                        id={`permission-${permission.id}`}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={newAdmin.permissions.includes(permission.id)}
                        onChange={() => togglePermission(permission.id)}
                        disabled={permission.id !== 'all' && newAdmin.permissions.includes('all')}
                      />
                      <label htmlFor={`permission-${permission.id}`} className="ml-2 block text-sm text-gray-700">
                        <span className="font-medium">{permission.name}</span>
                        <p className="text-xs text-gray-500">{permission.description}</p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button 
                  type="button"
                  onClick={() => setShowAddForm(false)} 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Administrator
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {administrators.map((admin) => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{admin.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                        <div className="text-sm text-gray-500">{admin.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${admin.role === 'Super Admin' ? 'bg-purple-100 text-purple-800' : 
                        admin.role === 'Hospital Admin' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'}`}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.permissions.includes('all') ? (
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">All Permissions</span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {admin.permissions.map(permission => (
                          <span key={permission} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {allPermissions.find(p => p.id === permission)?.name || permission}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">About Administrator Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Administrator Access Levels</h3>
            <p className="text-sm text-gray-600">
              Administrators have high-level access to manage hospital resources, settings, and user accounts. 
              Different administrator roles have specific permission sets to ensure appropriate access control.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Security Best Practices</h3>
            <p className="text-sm text-gray-600">
              For maximum security, grant administrator access only to trusted individuals and regularly review
              account access. Use role-based permissions to limit each user to only the functionality they need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 