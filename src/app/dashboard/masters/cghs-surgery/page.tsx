'use client';

import { useState } from 'react';

export default function CGHSSurgeryMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const surgeries = [
    { id: 1, code: 'CS1001', name: 'Coronary Artery Bypass Grafting (CABG)', category: 'Cardiac', nabhRate: 120000, nonNabhRate: 105000 },
    { id: 2, code: 'CS1002', name: 'Valve Replacement Surgery', category: 'Cardiac', nabhRate: 135000, nonNabhRate: 120000 },
    { id: 3, code: 'OS2001', name: 'Total Knee Replacement', category: 'Orthopedic', nabhRate: 90000, nonNabhRate: 80000 },
    { id: 4, code: 'OS2002', name: 'Total Hip Replacement', category: 'Orthopedic', nabhRate: 95000, nonNabhRate: 85000 },
    { id: 5, code: 'NS3001', name: 'Craniotomy', category: 'Neurosurgery', nabhRate: 110000, nonNabhRate: 95000 },
    { id: 6, code: 'NS3002', name: 'Laminectomy', category: 'Neurosurgery', nabhRate: 65000, nonNabhRate: 55000 },
    { id: 7, code: 'GS4001', name: 'Laparoscopic Cholecystectomy', category: 'Gastroenterology', nabhRate: 40000, nonNabhRate: 35000 },
    { id: 8, code: 'GS4002', name: 'Appendectomy', category: 'Gastroenterology', nabhRate: 30000, nonNabhRate: 25000 },
    { id: 9, code: 'US5001', name: 'Transurethral Resection of Prostate (TURP)', category: 'Urology', nabhRate: 45000, nonNabhRate: 40000 },
    { id: 10, code: 'US5002', name: 'Nephrectomy', category: 'Urology', nabhRate: 70000, nonNabhRate: 60000 },
  ];
  
  const filteredSurgeries = surgeries.filter(surgery => 
    surgery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surgery.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surgery.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const categories = [...new Set(surgeries.map(surgery => surgery.category))];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">CGHS Surgery Master</h1>
        <p className="text-gray-600">Manage CGHS approved surgeries and their rates</p>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="search" 
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Search surgeries..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Surgery
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Code</th>
                <th scope="col" className="px-6 py-3">Surgery Name</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">NABH Rate (₹)</th>
                <th scope="col" className="px-6 py-3">Non-NABH Rate (₹)</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSurgeries.map(surgery => (
                <tr key={surgery.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{surgery.code}</td>
                  <td className="px-6 py-4">{surgery.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      surgery.category === 'Cardiac' ? 'bg-red-100 text-red-800' :
                      surgery.category === 'Orthopedic' ? 'bg-blue-100 text-blue-800' :
                      surgery.category === 'Neurosurgery' ? 'bg-purple-100 text-purple-800' :
                      surgery.category === 'Gastroenterology' ? 'bg-yellow-100 text-yellow-800' :
                      surgery.category === 'Urology' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {surgery.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">₹{surgery.nabhRate.toLocaleString()}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">₹{surgery.nonNabhRate.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 hover:underline mr-3">Edit</button>
                    <button className="font-medium text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t">
          <nav className="flex items-center justify-between">
            <span className="text-sm text-gray-700">
              Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">50</span> surgeries
            </span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md">Next</button>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">About NABH Rates</h2>
        <p className="text-gray-600 mb-4">
          CGHS rates are categorized based on hospital accreditation status:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li><span className="font-semibold">NABH Rate:</span> The rate applicable for hospitals with NABH (National Accreditation Board for Hospitals & Healthcare Providers) accreditation.</li>
          <li><span className="font-semibold">Non-NABH Rate:</span> The rate applicable for hospitals without NABH accreditation.</li>
        </ul>
      </div>
    </div>
  );
} 