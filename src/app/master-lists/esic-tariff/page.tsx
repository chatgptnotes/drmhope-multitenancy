'use client';

import { useState } from 'react';

export default function ESICTariffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample ESIC tariff data with NABH and non-NABH rates
  const tariffItems = [
    { id: 'ESIC001', procedureCode: 'ES-CARD-01', procedureName: 'ECG', category: 'Cardiology', nabhRate: 250, nonNabhRate: 200 },
    { id: 'ESIC002', procedureCode: 'ES-CARD-02', procedureName: 'Stress Test', category: 'Cardiology', nabhRate: 1000, nonNabhRate: 800 },
    { id: 'ESIC003', procedureCode: 'ES-ORTH-01', procedureName: 'X-Ray Joint', category: 'Orthopaedics', nabhRate: 200, nonNabhRate: 160 },
    { id: 'ESIC004', procedureCode: 'ES-ORTH-02', procedureName: 'Knee Aspiration', category: 'Orthopaedics', nabhRate: 600, nonNabhRate: 480 },
    { id: 'ESIC005', procedureCode: 'ES-OPTH-01', procedureName: 'Vision Test', category: 'Ophthalmology', nabhRate: 150, nonNabhRate: 120 },
    { id: 'ESIC006', procedureCode: 'ES-OPTH-02', procedureName: 'Fundus Examination', category: 'Ophthalmology', nabhRate: 400, nonNabhRate: 320 },
    { id: 'ESIC007', procedureCode: 'ES-GAST-01', procedureName: 'Endoscopy', category: 'Gastroenterology', nabhRate: 1500, nonNabhRate: 1200 },
    { id: 'ESIC008', procedureCode: 'ES-GAST-02', procedureName: 'Liver Function Test', category: 'Gastroenterology', nabhRate: 500, nonNabhRate: 400 },
  ];
  
  // Get unique categories for the filter
  const categories = ['All', ...new Set(tariffItems.map(item => item.category))];
  
  // Filter tariff items based on search term and category
  const filteredTariff = tariffItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.procedureName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.procedureCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">ESIC Tariff Master List</h1>
        <p className="text-gray-600">View and manage ESIC tariff rates for procedures and services</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by procedure name or code..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add New Tariff Item
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Procedure Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Procedure Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NABH Rate (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Non-NABH Rate (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTariff.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.procedureCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.procedureName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.category === 'Cardiology' ? 'bg-red-100 text-red-800' :
                      item.category === 'Orthopaedics' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Ophthalmology' ? 'bg-yellow-100 text-yellow-800' :
                      item.category === 'Gastroenterology' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ₹{item.nabhRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{item.nonNabhRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing {filteredTariff.length} of {tariffItems.length} tariff items
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">ESIC Tariff Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">About ESIC Tariff</h3>
            <p className="text-sm text-gray-600">
              The Employees' State Insurance Corporation (ESIC) tariff provides coverage for medical treatments and procedures for insured employees. NABH-accredited hospitals receive higher reimbursement rates due to their quality standards and certifications.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">NABH Rate Difference</h3>
            <p className="text-sm text-gray-600">
              NABH-accredited hospitals typically receive approximately 15-20% higher reimbursement rates than non-NABH hospitals under the ESIC scheme, reflecting their compliance with national quality standards in healthcare delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 