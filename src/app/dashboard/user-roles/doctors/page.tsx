'use client';

import { useState } from 'react';

export default function DoctorsRolePage() {
  // Sample doctors data
  const [doctors, setDoctors] = useState([
    { 
      id: 1, 
      name: 'Dr. Anand Patel', 
      email: 'anand.patel@hospital.com', 
      specialty: 'Cardiology',
      department: 'Cardiology',
      lastActive: '2023-05-15 08:15 AM',
      permissions: ['patient_records', 'medical_history', 'prescriptions', 'lab_results', 'appointments']
    },
    { 
      id: 2, 
      name: 'Dr. Meera Singh', 
      email: 'meera.singh@hospital.com', 
      specialty: 'Orthopedics',
      department: 'Orthopedics',
      lastActive: '2023-05-15 10:30 AM',
      permissions: ['patient_records', 'medical_history', 'prescriptions', 'surgery_schedule']
    },
    { 
      id: 3, 
      name: 'Dr. Suresh Menon', 
      email: 'suresh.menon@hospital.com', 
      specialty: 'Pediatrics',
      department: 'Pediatrics',
      lastActive: '2023-05-14 03:45 PM',
      permissions: ['patient_records', 'medical_history', 'prescriptions', 'immunization_records']
    },
  ]);

  // All available permissions for doctors
  const allPermissions = [
    { id: 'patient_records', name: 'Patient Records', description: 'View and edit patient information' },
    { id: 'medical_history', name: 'Medical History', description: 'Access patient medical history' },
    { id: 'prescriptions', name: 'Prescriptions', description: 'Create and manage prescriptions' },
    { id: 'lab_results', name: 'Lab Results', description: 'View laboratory test results' },
    { id: 'surgery_schedule', name: 'Surgery Schedule', description: 'Access surgery scheduling' },
    { id: 'immunization_records', name: 'Immunization Records', description: 'View and update immunization records' },
    { id: 'appointments', name: 'Appointments', description: 'Manage patient appointments' },
    { id: 'billing_view', name: 'Billing View', description: 'View patient billing information' }
  ];

  // State for the new doctor form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    email: '',
    specialty: '',
    department: '',
    permissions: [] as string[]
  });

  // Toggle permission in the new doctor form
  const togglePermission = (permission: string) => {
    const updatedPermissions = newDoctor.permissions.includes(permission)
      ? newDoctor.permissions.filter(p => p !== permission)
      : [...newDoctor.permissions, permission];
    
    setNewDoctor({
      ...newDoctor,
      permissions: updatedPermissions
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoctorWithId = {
      ...newDoctor,
      id: doctors.length + 1,
      lastActive: 'Just now'
    };
    setDoctors([...doctors, newDoctorWithId]);
    setNewDoctor({
      name: '',
      email: '',
      specialty: '',
      department: '',
      permissions: []
    });
    setShowAddForm(false);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Doctor Role Management</h1>
        <p className="text-gray-600">Manage doctors and their system access permissions</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Doctors</h2>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Doctor
          </button>
        </div>
        
        {showAddForm && (
          <div className="p-4 border-b bg-green-50">
            <h3 className="text-md font-medium text-gray-800 mb-3">Add New Doctor</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={newDoctor.name}
                    onChange={(e) => setNewDoctor({...newDoctor, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={newDoctor.email}
                    onChange={(e) => setNewDoctor({...newDoctor, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={newDoctor.specialty}
                    onChange={(e) => setNewDoctor({...newDoctor, specialty: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={newDoctor.department}
                    onChange={(e) => setNewDoctor({...newDoctor, department: e.target.value})}
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
                        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        checked={newDoctor.permissions.includes(permission.id)}
                        onChange={() => togglePermission(permission.id)}
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
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Add Doctor
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
                  Specialty
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
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-green-100 text-green-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{doctor.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                        <div className="text-sm text-gray-500">{doctor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {doctor.specialty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {doctor.permissions.slice(0, 2).map(permission => (
                        <span key={permission} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {allPermissions.find(p => p.id === permission)?.name || permission}
                        </span>
                      ))}
                      {doctor.permissions.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{doctor.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-green-600 hover:text-green-900 mr-3">
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
        <h2 className="text-lg font-semibold text-gray-800 mb-4">About Doctor Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Doctor Access Privileges</h3>
            <p className="text-sm text-gray-600">
              Doctors require specific access to patient medical records, treatment histories, and scheduling tools.
              Their permissions are specialized to their medical responsibilities and departments.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Department-Specific Access</h3>
            <p className="text-sm text-gray-600">
              Consider granting additional specialized permissions based on a doctor's department and specialty.
              For example, surgeons may need access to operating room schedules, while pediatricians need immunization records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 