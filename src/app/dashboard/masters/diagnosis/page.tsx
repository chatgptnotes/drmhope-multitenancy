'use client';

import { useState } from 'react';

export default function DiagnosisMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const diagnoses = [
    { id: 1, code: 'E11', name: 'Type 2 diabetes mellitus', category: 'Endocrine' },
    { id: 2, code: 'I10', name: 'Essential (primary) hypertension', category: 'Cardiovascular' },
    { id: 3, code: 'J45', name: 'Asthma', category: 'Respiratory' },
    { id: 4, code: 'K29', name: 'Gastritis and duodenitis', category: 'Digestive' },
    { id: 5, code: 'M54', name: 'Dorsalgia', category: 'Musculoskeletal' },
    { id: 6, code: 'G47', name: 'Sleep disorders', category: 'Neurological' },
    { id: 7, code: 'F41', name: 'Anxiety disorders', category: 'Psychiatric' },
    { id: 8, code: 'N39', name: 'Urinary tract infection', category: 'Genitourinary' },
    { id: 9, code: 'J02', name: 'Acute pharyngitis', category: 'Respiratory' },
    { id: 10, code: 'E78', name: 'Disorders of lipoprotein metabolism', category: 'Endocrine' },
  ];
  
  const filteredDiagnoses = diagnoses.filter(diagnosis => 
    diagnosis.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    diagnosis.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    diagnosis.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const categories = [...new Set(diagnoses.map(diagnosis => diagnosis.category))];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Diagnosis Master</h1>
        <p className="text-gray-600">Manage diagnostic codes and descriptions</p>
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
                placeholder="Search diagnoses..." 
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
              Add Diagnosis
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Code</th>
                <th scope="col" className="px-6 py-3">Diagnosis Name</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDiagnoses.map(diagnosis => (
                <tr key={diagnosis.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{diagnosis.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{diagnosis.code}</td>
                  <td className="px-6 py-4">{diagnosis.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      diagnosis.category === 'Cardiovascular' ? 'bg-red-100 text-red-800' :
                      diagnosis.category === 'Respiratory' ? 'bg-blue-100 text-blue-800' :
                      diagnosis.category === 'Endocrine' ? 'bg-green-100 text-green-800' :
                      diagnosis.category === 'Digestive' ? 'bg-yellow-100 text-yellow-800' :
                      diagnosis.category === 'Musculoskeletal' ? 'bg-purple-100 text-purple-800' :
                      diagnosis.category === 'Neurological' ? 'bg-indigo-100 text-indigo-800' :
                      diagnosis.category === 'Psychiatric' ? 'bg-pink-100 text-pink-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {diagnosis.category}
                    </span>
                  </td>
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
              Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">100</span> diagnoses
            </span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md">Next</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
} 