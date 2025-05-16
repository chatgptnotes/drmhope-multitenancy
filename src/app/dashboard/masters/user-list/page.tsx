'use client';

import { useState } from 'react';
import { Key, Shield, FileText, Users, Stethoscope, Pill, Clipboard, Phone, MessageCircle, Ambulance, Building2, ScanSearch, X, Check, Save } from 'lucide-react';

export default function UserListMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [editingUser, setEditingUser] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  // Available modules by role
  const modulesByRole = {
    'Admin': ['billing', 'laboratory', 'pharmacy', 'emr', 'patientPortal', 'callCenter', 'messaging', 'ambulance', 'raftaar', 'onelife', 'userManagement', 'settings'],
    'Doctor': ['emr', 'laboratory', 'pharmacy', 'patientPortal'],
    'Nurse': ['emr', 'laboratory', 'patientPortal'],
    'Receptionist': ['patientPortal', 'billing'],
    'Lab Technician': ['laboratory', 'emr']
  };

  // Module info with names and icons
  const moduleInfo = {
    billing: { name: 'Billing & Accounts', icon: FileText },
    laboratory: { name: 'Laboratory', icon: Stethoscope },
    pharmacy: { name: 'Pharmacy', icon: Pill },
    emr: { name: 'Electronic Medical Records', icon: Clipboard },
    patientPortal: { name: 'Patient Portal', icon: Users },
    callCenter: { name: 'Call Center', icon: Phone },
    messaging: { name: 'Messaging', icon: MessageCircle },
    ambulance: { name: 'Ambulance', icon: Ambulance },
    raftaar: { name: 'Raftaar', icon: Building2 },
    onelife: { name: 'One Scan One Life', icon: ScanSearch },
    userManagement: { name: 'User Management', icon: Users },
    settings: { name: 'System Settings', icon: Shield }
  };

  // Sample users data with modules
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Rajat Kumar',
      username: 'rajat.kumar',
      email: 'rajat.kumar@drmhope.com',
      role: 'Admin',
      department: 'IT',
      lastLogin: '2 hours ago',
      status: 'Active',
      modules: ['billing', 'emr', 'patientPortal', 'userManagement', 'settings']
    },
    {
      id: 2,
      name: 'Anita Desai',
      username: 'anita.desai',
      email: 'anita.desai@drmhope.com',
      role: 'Doctor',
      department: 'Cardiology',
      lastLogin: '5 hours ago',
      status: 'Active',
      modules: ['emr', 'laboratory']
    },
    {
      id: 3,
      name: 'Vivek Sharma',
      username: 'vivek.sharma',
      email: 'vivek.sharma@drmhope.com',
      role: 'Nurse',
      department: 'Emergency',
      lastLogin: '1 day ago',
      status: 'Active',
      modules: ['emr', 'patientPortal']
    },
    {
      id: 4,
      name: 'Neha Patel',
      username: 'neha.patel',
      email: 'neha.patel@drmhope.com',
      role: 'Receptionist',
      department: 'Front Desk',
      lastLogin: '3 hours ago',
      status: 'Active',
      modules: ['billing', 'patientPortal']
    },
    {
      id: 5,
      name: 'Rahul Mehta',
      username: 'rahul.mehta',
      email: 'rahul.mehta@drmhope.com',
      role: 'Lab Technician',
      department: 'Laboratory',
      lastLogin: '2 days ago',
      status: 'Inactive',
      modules: ['laboratory']
    },
  ]);

  // Get unique roles for filter
  const roles = ['All', ...new Set(users.map(user => user.role))];

  // Filter users based on search term and role
  const filteredUsers = users.filter(user => 
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.username.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (roleFilter === 'All' || user.role === roleFilter)
  );

  // Open edit modal
  const openEditModal = (user: any) => {
    setEditingUser(user);
    setSelectedModules([...user.modules]);
    setShowEditModal(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingUser(null);
    setSelectedModules([]);
  };

  // Toggle module selection
  const handleModuleToggle = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Save modules changes
  const saveModules = () => {
    if (!editingUser) return;
    
    // Update the user modules
    const updatedUsers = users.map(user => {
      if (user.id === editingUser.id) {
        return {
          ...user,
          modules: selectedModules
        };
      }
      return user;
    });
    
    setUsers(updatedUsers);
    closeEditModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User List Master</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="search" 
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User List Master</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Users
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add User
            </button>
          </div>
          <div>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modules
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
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
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {user.modules.slice(0, 2).map((moduleId: string) => {
                          const module = moduleInfo[moduleId as keyof typeof moduleInfo];
                          const Icon = module?.icon;
                          return (
                            <div 
                              key={moduleId} 
                              className="flex items-center bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full" 
                              title={moduleId}
                            >
                              {Icon && <Icon className="h-3 w-3 mr-1" />}
                              <span>{module?.name}</span>
                            </div>
                          );
                        })}
                        {user.modules.length > 2 && (
                          <div className="flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            +{user.modules.length - 2} more
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button 
                        className="text-purple-600 hover:text-purple-900 p-1 rounded-md hover:bg-purple-50"
                        onClick={() => openEditModal(user)}
                      >
                        <Key className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modules Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full relative z-10">
              <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  Edit Permissions for {editingUser.name} ({editingUser.role})
                </h3>
                <button onClick={closeEditModal} className="text-white hover:text-gray-200">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                  <Key className="h-5 w-5 text-indigo-600 mr-2" />
                  <p className="text-gray-700">Select modules this user can access:</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {modulesByRole[editingUser.role as keyof typeof modulesByRole]?.map((moduleId) => {
                    const module = moduleInfo[moduleId as keyof typeof moduleInfo];
                    const Icon = module?.icon;
                    
                    return (
                      <div 
                        key={moduleId}
                        className={`
                          flex items-center p-3 border rounded-md cursor-pointer
                          ${selectedModules.includes(moduleId) 
                            ? 'border-indigo-500 bg-indigo-50' 
                            : 'border-gray-300 hover:border-indigo-300'}
                        `}
                        onClick={() => handleModuleToggle(moduleId)}
                      >
                        <div className="flex-shrink-0 mr-3">
                          {selectedModules.includes(moduleId) ? (
                            <div className="h-5 w-5 bg-indigo-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          ) : (
                            <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          {Icon && <Icon className="h-4 w-4 text-indigo-600 mr-2" />}
                          <span className="text-sm font-medium">{module?.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-end space-x-3 border-t pt-4">
                  <button
                    onClick={closeEditModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveModules}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 