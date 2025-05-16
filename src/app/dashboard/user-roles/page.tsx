'use client';

import Link from 'next/link';

export default function UserRolesPage() {
  // Sample data about user roles
  const roles = [
    {
      name: 'Administrators',
      path: '/dashboard/user-roles/administrators',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Users with complete or limited administrative access to hospital system controls.',
      color: 'bg-blue-50 text-blue-600',
      count: 3,
      permissions: ['System Settings', 'User Management', 'Finance Controls', 'Hospital Management']
    },
    {
      name: 'Doctors',
      path: '/dashboard/user-roles/doctors',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: 'Physicians with access to patient records, medical histories, and treatment tools.',
      color: 'bg-green-50 text-green-600',
      count: 12,
      permissions: ['Patient Records', 'Prescriptions', 'Medical History', 'Lab Results']
    },
    {
      name: 'Nurses',
      path: '/dashboard/user-roles/nurses',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'Nursing staff with access to patient care tools, vital recording, and medications.',
      color: 'bg-red-50 text-red-600',
      count: 18,
      permissions: ['Patient Vitals', 'Medication Administration', 'Care Plans', 'Patient Notes']
    },
    {
      name: 'Receptionists',
      path: '/dashboard/user-roles/receptionists',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      description: 'Front desk staff with access to appointments, registrations, and basic patient info.',
      color: 'bg-purple-50 text-purple-600',
      count: 8,
      permissions: ['Appointments', 'Patient Registration', 'Visitor Management', 'Basic Patient Info']
    },
    {
      name: 'Lab Technicians',
      path: '/dashboard/user-roles/lab-technicians',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Laboratory staff with access to test ordering, processing, and result management.',
      color: 'bg-yellow-50 text-yellow-600',
      count: 6,
      permissions: ['Lab Tests', 'Sample Processing', 'Test Results', 'Equipment Management']
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Roles & Access Management</h1>
        <p className="text-gray-600">Manage all user roles and their permissions in your hospital system</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Role Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Link 
              key={role.name} 
              href={role.path}
              className={`block p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow ${role.color.split(' ')[0]}`}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${role.color}`}>
                  {role.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">{role.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{role.description}</p>
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-medium">{role.count} Users</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-500 font-semibold mb-1">Key Permissions</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.slice(0, 3).map((permission, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {permission}
                        </span>
                      ))}
                      {role.permissions.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{role.permissions.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Role-Based Access Control (RBAC)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Access Management</h3>
            <p className="text-sm text-gray-600">
              Our hospital system uses role-based access control to ensure that users only have access to the 
              information and features they need to perform their specific roles. This enhances security and 
              maintains patient data privacy.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Custom Roles</h3>
            <p className="text-sm text-gray-600">
              In addition to standard roles, administrators can create custom roles with specific permission sets 
              for specialized positions within the hospital. This flexibility allows for precise access control
              tailored to your hospital's unique organizational structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 