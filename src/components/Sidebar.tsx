'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the sidebar items including MasterLists
const sidebarItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Super Admin', path: '/super-admin', icon: '👑' },
  { name: 'Call Center', path: '/call-center/dashboard', icon: '📞' },
  { name: 'User Management', path: '/super-admin/user-management', icon: '👥' },
  { name: 'Hospital Analytics', path: '/super-admin/hospital-analytics', icon: '🏥' }
];

// Define master list items
const masterListItems = [
  { name: 'Patients', path: '/master-lists/patients', icon: '🧑‍⚕️' },
  { name: 'Doctors', path: '/master-lists/doctors', icon: '👨‍⚕️' },
  { name: 'Departments', path: '/master-lists/departments', icon: '🏢' },
  { name: 'Medicines', path: '/master-lists/medicines', icon: '💊' },
  { name: 'Insurance Plans', path: '/master-lists/insurance', icon: '📝' },
  { name: 'Test Catalog', path: '/master-lists/tests', icon: '🔬' },
  { name: 'Procedures', path: '/master-lists/procedures', icon: '🩺' },
  { name: 'Hospitals', path: '/master-lists/hospitals', icon: '🏥' },
  // Add tariff items
  { name: 'CGHS Tariff', path: '/master-lists/cghs-tariff', icon: '💰' },
  { name: 'ESIC Tariff', path: '/master-lists/esic-tariff', icon: '💸' },
  { name: 'PMJAY Tariff', path: '/master-lists/pmjay-tariff', icon: '💼' },
  { name: 'MJPJAY Tariff', path: '/master-lists/mjpjay-tariff', icon: '💲' }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMasterListOpen, setIsMasterListOpen] = useState(false);

  // Check if current path is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col py-6 fixed left-0 top-0">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-bold">Raftaar</h1>
        <p className="text-xs text-gray-400">Hospital Management</p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
                  isActive(item.path)
                    ? 'bg-indigo-700 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Master Lists Section */}
        <div className="mt-6">
          <h2 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Master Lists
          </h2>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <button 
              className="w-full flex items-center justify-between px-3 py-2 text-gray-200 hover:bg-gray-700"
              onClick={() => setIsMasterListOpen(!isMasterListOpen)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">📋</span>
                <span>Master Lists</span>
              </div>
              <span>{isMasterListOpen ? '▼' : '►'}</span>
            </button>
            
            {isMasterListOpen && (
              <ul className="pl-6 pr-2 pb-2 pt-1 text-sm">
                {masterListItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                        isActive(item.path)
                          ? 'bg-indigo-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="px-6 mt-6 border-t border-gray-700 pt-4">
        <Link
          href="/logout"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800"
        >
          <span className="text-xl">🚪</span>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
} 