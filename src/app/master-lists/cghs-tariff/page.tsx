'use client';

import { useState } from 'react';

export default function CGHSTariffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample CGHS tariff data with NABH and non-NABH rates
  const tariffItems = [
    { id: 'CGH001', procedureCode: 'CARD-101', procedureName: 'ECG', category: 'Cardiology', nabhRate: 300, nonNabhRate: 250 },
    { id: 'CGH002', procedureCode: 'CARD-102', procedureName: 'Echocardiography', category: 'Cardiology', nabhRate: 1200, nonNabhRate: 1000 },
    { id: 'CGH003', procedureCode: 'ORTH-101', procedureName: 'X-Ray (Single Part)', category: 'Orthopaedics', nabhRate: 250, nonNabhRate: 200 },
    { id: 'CGH004', procedureCode: 'ORTH-102', procedureName: 'Plaster Cast (Small)', category: 'Orthopaedics', nabhRate: 500, nonNabhRate: 400 },
    { id: 'CGH005', procedureCode: 'LAB-101', procedureName: 'Complete Blood Count', category: 'Pathology', nabhRate: 350, nonNabhRate: 300 },
    { id: 'CGH006', procedureCode: 'LAB-102', procedureName: 'Lipid Profile', category: 'Pathology', nabhRate: 800, nonNabhRate: 700 },
    { id: 'CGH007', procedureCode: 'DENT-101', procedureName: 'Dental Filling', category: 'Dental', nabhRate: 600, nonNabhRate: 500 },
    { id: 'CGH008', procedureCode: 'DENT-102', procedureName: 'Root Canal Treatment', category: 'Dental', nabhRate: 2500, nonNabhRate: 2000 },
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
        <h1 className="text-2xl font-bold text-gray-800">CGHS Tariff Master List</h1>
        <p className="text-gray-600">View and manage CGHS tariff rates for procedures and services</p>
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
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
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
                      item.category === 'Pathology' ? 'bg-green-100 text-green-800' :
                      item.category === 'Dental' ? 'bg-purple-100 text-purple-800' :
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
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
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
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">CGHS Tariff Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">About CGHS Tariff</h3>
            <p className="text-sm text-gray-600">
              The Central Government Health Scheme (CGHS) tariff provides standardized rates for medical services, procedures, and treatments for eligible beneficiaries. NABH-accredited hospitals receive higher reimbursement rates compared to non-NABH hospitals.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">NABH Accreditation</h3>
            <p className="text-sm text-gray-600">
              NABH (National Accreditation Board for Hospitals & Healthcare Providers) is a constituent board of Quality Council of India that sets benchmarks for quality healthcare. Hospitals with NABH accreditation are eligible for higher reimbursement rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 