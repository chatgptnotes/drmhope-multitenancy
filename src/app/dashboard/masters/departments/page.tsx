'use client';

import { useState } from 'react';

export default function DepartmentsMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    type: '',
    hod: '',
    location: '',
    staffCount: '',
    status: 'Active'
  });

  // Sample departments data
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: 'Cardiology',
      type: 'Clinical',
      hod: 'Dr. Anand Kumar',
      location: 'Building A, 3rd Floor',
      staffCount: 12,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Emergency',
      type: 'Critical Care',
      hod: 'Dr. Rajesh Mehta',
      location: 'Building A, Ground Floor',
      staffCount: 25,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Pediatrics',
      type: 'Clinical',
      hod: 'Dr. Priya Sharma',
      location: 'Building B, 2nd Floor',
      staffCount: 15,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Radiology',
      type: 'Diagnostic',
      hod: 'Dr. Shalini Gupta',
      location: 'Building A, 1st Floor',
      staffCount: 8,
      status: 'Active'
    },
    {
      id: 5,
      name: 'Laboratory',
      type: 'Diagnostic',
      hod: 'Dr. Vikram Singh',
      location: 'Building B, 1st Floor',
      staffCount: 10,
      status: 'Active'
    },
    {
      id: 6,
      name: 'Pharmacy',
      type: 'Support',
      hod: 'Vijay Prakash',
      location: 'Building A, Ground Floor',
      staffCount: 6,
      status: 'Active'
    },
    {
      id: 7,
      name: 'Physiotherapy',
      type: 'Rehabilitation',
      hod: 'Dr. Amit Kapoor',
      location: 'Building C, 1st Floor',
      staffCount: 7,
      status: 'Inactive'
    },
    {
      id: 8,
      name: 'Orthopedics',
      type: 'Clinical',
      hod: 'Dr. Rajesh Mehta',
      location: 'Building B, 3rd Floor',
      staffCount: 9,
      status: 'Active'
    },
  ]);

  // Get unique department types for filter
  const types = ['All', ...new Set(departments.map(dept => dept.type))];

  // Filter departments based on search term and type
  const filteredDepartments = departments.filter(dept => 
    (dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     dept.hod.toLowerCase().includes(searchTerm.toLowerCase()) ||
     dept.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (typeFilter === 'All' || dept.type === typeFilter)
  );

  // Handle input change for new department
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewDepartment({
      ...newDepartment,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new department object
    const newDepartmentObj = {
      id: departments.length + 1,
      name: newDepartment.name,
      type: newDepartment.type,
      hod: newDepartment.hod,
      location: newDepartment.location,
      staffCount: parseInt(newDepartment.staffCount),
      status: newDepartment.status
    };
    
    // Add to departments array
    setDepartments([...departments, newDepartmentObj]);
    
    // Reset form and close modal
    setNewDepartment({
      name: '',
      type: '',
      hod: '',
      location: '',
      staffCount: '',
      status: 'Active'
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Departments Master</h1>
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
        <h2 className="text-xl font-bold text-gray-800 mb-4">Departments Master</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export List
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Department
            </button>
          </div>
          <div>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
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
                    Department Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Head of Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Staff Count
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
                {filteredDepartments.map((department) => (
                  <tr key={department.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.hod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.staffCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${department.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {department.status}
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

      {/* Add Department Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Add New Department</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Department Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newDepartment.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
                    Type
                  </label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={newDepartment.type}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hod">
                    Head of Department
                  </label>
                  <input
                    type="text"
                    id="hod"
                    name="hod"
                    value={newDepartment.hod}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newDepartment.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="staffCount">
                    Staff Count
                  </label>
                  <input
                    type="number"
                    id="staffCount"
                    name="staffCount"
                    value={newDepartment.staffCount}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={newDepartment.status}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 