'use client';

import { useState } from 'react';

export default function MJPJAYTariffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhase, setSelectedPhase] = useState('All');
  
  // Sample MJPJAY tariff data
  const tariffItems = [
    { id: 'MJ001', packageCode: 'MJ-CAR-001', packageName: 'Coronary Angioplasty', category: 'Cardiology', phase: 'Phase I', mjpjayRate: 85000, privateRate: 150000 },
    { id: 'MJ002', packageCode: 'MJ-CAR-002', packageName: 'Pacemaker Implantation', category: 'Cardiology', phase: 'Phase I', mjpjayRate: 60000, privateRate: 120000 },
    { id: 'MJ003', packageCode: 'MJ-ORTH-001', packageName: 'Hip Replacement', category: 'Orthopedics', phase: 'Phase II', mjpjayRate: 90000, privateRate: 175000 },
    { id: 'MJ004', packageCode: 'MJ-ORTH-002', packageName: 'Knee Replacement', category: 'Orthopedics', phase: 'Phase II', mjpjayRate: 80000, privateRate: 160000 },
    { id: 'MJ005', packageCode: 'MJ-NEU-001', packageName: 'Brain Tumor Surgery', category: 'Neurosurgery', phase: 'Phase III', mjpjayRate: 100000, privateRate: 250000 },
    { id: 'MJ006', packageCode: 'MJ-NEU-002', packageName: 'Spinal Cord Surgery', category: 'Neurosurgery', phase: 'Phase III', mjpjayRate: 85000, privateRate: 180000 },
    { id: 'MJ007', packageCode: 'MJ-ONC-001', packageName: 'Cancer Chemotherapy', category: 'Oncology', phase: 'Phase I', mjpjayRate: 40000, privateRate: 80000 },
    { id: 'MJ008', packageCode: 'MJ-ONC-002', packageName: 'Radical Mastectomy', category: 'Oncology', phase: 'Phase II', mjpjayRate: 60000, privateRate: 130000 },
  ];
  
  // Get unique categories and phases for the filters
  const categories = ['All', ...new Set(tariffItems.map(item => item.category))];
  const phases = ['All', ...new Set(tariffItems.map(item => item.phase))];
  
  // Filter tariff items based on search term, category, and phase
  const filteredTariff = tariffItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.packageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.packageCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPhase = selectedPhase === 'All' || item.phase === selectedPhase;
    
    return matchesSearch && matchesCategory && matchesPhase;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">MJPJAY Tariff Master List</h1>
        <p className="text-gray-600">View and manage Mahatma Jyotiba Phule Jan Arogya Yojana tariff rates</p>
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
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-2 md:mt-0 w-full md:w-auto"
            >
              {phases.map(phase => (
                <option key={phase} value={phase}>{phase}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-2 md:mt-0 w-full md:w-auto">
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
                  Phase
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MJPJAY Rate (₹)
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
                      item.category === 'Neurosurgery' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'Oncology' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.phase === 'Phase I' ? 'bg-green-100 text-green-800' :
                      item.phase === 'Phase II' ? 'bg-orange-100 text-orange-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {item.phase}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ₹{item.mjpjayRate.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{item.privateRate.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-green-600 hover:text-green-900 mr-3">
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
            <button className="px-3 py-1 bg-green-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">MJPJAY Tariff Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">About MJPJAY</h3>
            <p className="text-sm text-gray-600">
              Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY) is a flagship healthcare scheme of Government of Maharashtra providing cashless treatment to eligible beneficiaries. The scheme covers over 1000 surgeries and therapies through a network of public and private hospitals.
            </p>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Tariff Update Schedule</h3>
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> January 10, 2023<br />
              <strong>Next Scheduled Update:</strong> January 10, 2024<br />
              <strong>Update Frequency:</strong> Annual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 