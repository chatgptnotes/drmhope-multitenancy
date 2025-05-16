'use client';

import { useState } from 'react';

export default function PMJAYTariffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPackageType, setSelectedPackageType] = useState('All');
  
  // Sample PMJAY tariff data
  const tariffItems = [
    { id: 'PM001', packageCode: 'PM-NEO-C1', packageName: 'Neonatal Care Level 1', category: 'Neonatology', packageType: 'Secondary', pmjayRate: 5000, privateRate: 8000 },
    { id: 'PM002', packageCode: 'PM-NEO-C2', packageName: 'Neonatal Care Level 2', category: 'Neonatology', packageType: 'Secondary', pmjayRate: 9000, privateRate: 15000 },
    { id: 'PM003', packageCode: 'PM-CAR-A1', packageName: 'Coronary Angiography', category: 'Cardiology', packageType: 'Tertiary', pmjayRate: 10000, privateRate: 18000 },
    { id: 'PM004', packageCode: 'PM-CAR-A2', packageName: 'PTCA (Single Vessel)', category: 'Cardiology', packageType: 'Tertiary', pmjayRate: 40000, privateRate: 85000 },
    { id: 'PM005', packageCode: 'PM-ONC-C1', packageName: 'Chemotherapy (Cycle 1)', category: 'Oncology', packageType: 'Tertiary', pmjayRate: 15000, privateRate: 25000 },
    { id: 'PM006', packageCode: 'PM-ONC-R1', packageName: 'Radiotherapy (Basic)', category: 'Oncology', packageType: 'Tertiary', pmjayRate: 20000, privateRate: 35000 },
    { id: 'PM007', packageCode: 'PM-ORT-J1', packageName: 'Joint Replacement', category: 'Orthopedics', packageType: 'Tertiary', pmjayRate: 50000, privateRate: 120000 },
    { id: 'PM008', packageCode: 'PM-ORT-F1', packageName: 'Fracture Management', category: 'Orthopedics', packageType: 'Secondary', pmjayRate: 15000, privateRate: 30000 },
  ];
  
  // Get unique categories and package types for the filters
  const categories = ['All', ...new Set(tariffItems.map(item => item.category))];
  const packageTypes = ['All', ...new Set(tariffItems.map(item => item.packageType))];
  
  // Filter tariff items based on search term, category, and package type
  const filteredTariff = tariffItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.packageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.packageCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPackageType = selectedPackageType === 'All' || item.packageType === selectedPackageType;
    
    return matchesSearch && matchesCategory && matchesPackageType;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">PMJAY Tariff Master List</h1>
        <p className="text-gray-600">View and manage PM-JAY tariff rates for procedures and services</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by package name or code..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
          
          <div className="flex flex-wrap space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full md:w-auto"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedPackageType}
              onChange={(e) => setSelectedPackageType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-2 md:mt-0 w-full md:w-auto"
            >
              {packageTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 mt-2 md:mt-0 w-full md:w-auto">
              Add New Package
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
                  Package Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Package Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Package Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PMJAY Rate (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Private Rate (₹)
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
                    {item.packageCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.packageName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.category === 'Cardiology' ? 'bg-red-100 text-red-800' :
                      item.category === 'Orthopedics' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Oncology' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'Neonatology' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.packageType === 'Tertiary' ? 'bg-orange-100 text-orange-800' : 'bg-teal-100 text-teal-800'
                    }`}>
                      {item.packageType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ₹{item.pmjayRate.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{item.privateRate.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-yellow-600 hover:text-yellow-900 mr-3">
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
            Showing {filteredTariff.length} of {tariffItems.length} package items
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-yellow-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">PMJAY Tariff Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">About PM-JAY</h3>
            <p className="text-sm text-gray-600">
              Pradhan Mantri Jan Arogya Yojana (PM-JAY) is India's flagship health insurance scheme providing financial risk protection to over 10.74 crore poor and vulnerable families. These standardized package rates ensure quality healthcare services at affordable rates.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Tariff Update Schedule</h3>
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> March 20, 2023<br />
              <strong>Next Scheduled Update:</strong> March 20, 2024<br />
              <strong>Update Frequency:</strong> Annual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 