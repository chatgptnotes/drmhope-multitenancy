'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
}

const SidebarLink = ({ href, icon, title, isActive }: SidebarLinkProps) => (
  <Link 
    href={href} 
    className={`flex items-center px-4 py-3 text-sm rounded-md ${
      isActive 
        ? 'bg-indigo-100 text-indigo-700' 
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{title}</span>
  </Link>
);

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Simple check if a path is active
  const isActive = (path: string) => {
    if (path === '/super-admin' && pathname === '/super-admin') {
      return true;
    }
    if (path !== '/super-admin' && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">HMS Super Admin</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-700">
            Super Admin
          </div>
          <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
            <span className="text-sm font-medium">SA</span>
          </div>
        </div>
      </nav>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white w-64 min-h-screen shadow-md transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static z-10`}>
          <div className="p-4">
            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Main</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/super-admin" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  } 
                  title="Dashboard" 
                  isActive={isActive('/super-admin')}
                />
                
                <SidebarLink 
                  href="/super-admin/hospital-analytics" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  } 
                  title="Hospital Analytics" 
                  isActive={isActive('/super-admin/hospital-analytics')}
                />
              </div>
            </div>
            
            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Hospital Management</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/super-admin/hospitals" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  } 
                  title="Hospitals" 
                  isActive={isActive('/super-admin/hospitals')}
                />
                
                <SidebarLink 
                  href="/super-admin/enterprises" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  } 
                  title="Enterprises" 
                  isActive={isActive('/super-admin/enterprises')}
                />
                
                <SidebarLink 
                  href="/super-admin/regional-health" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  } 
                  title="Regional Health Metrics" 
                  isActive={isActive('/super-admin/regional-health')}
                />
                
                <SidebarLink 
                  href="/super-admin/approvals" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  } 
                  title="Pending Approvals" 
                  isActive={isActive('/super-admin/approvals')}
                />
                
                <SidebarLink 
                  href="/super-admin/subscriptions" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  } 
                  title="Subscriptions" 
                  isActive={isActive('/super-admin/subscriptions')}
                />
              </div>
            </div>
            
            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Patient Management</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/super-admin/patients/city-view" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  } 
                  title="City-Based Patients" 
                  isActive={isActive('/super-admin/patients/city-view')}
                />

                <SidebarLink 
                  href="/super-admin/ambulance-management" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  } 
                  title="Ambulance Management" 
                  isActive={isActive('/super-admin/ambulance-management')}
                />
              </div>
            </div>
            
            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Billing Management</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/super-admin/billing-management" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  } 
                  title="Billing Management" 
                  isActive={isActive('/super-admin/billing-management')}
                />

                <SidebarLink 
                  href="/super-admin/esic-overview" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  } 
                  title="ESIC Overview" 
                  isActive={isActive('/super-admin/esic-overview')}
                />
                
                <SidebarLink 
                  href="/super-admin/cghs-overview" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  } 
                  title="CGHS Overview" 
                  isActive={isActive('/super-admin/cghs-overview')}
                />
              </div>
            </div>

            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Call Center</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/call-center/dashboard" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  } 
                  title="Call Center Dashboard" 
                  isActive={isActive('/call-center/dashboard')}
                />
              </div>
            </div>
            
            <div className="py-4">
              <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">System</h2>
              
              <div className="mt-3 space-y-1">
                <SidebarLink 
                  href="/super-admin/user-management" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  } 
                  title="User Management" 
                  isActive={isActive('/super-admin/user-management')}
                />
                
                <SidebarLink 
                  href="/super-admin/system" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  } 
                  title="System" 
                  isActive={isActive('/super-admin/system')}
                />

                <SidebarLink 
                  href="/super-admin/settings" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  } 
                  title="Settings" 
                  isActive={isActive('/super-admin/settings')}
                />
                
                <SidebarLink 
                  href="/logout" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  } 
                  title="Logout" 
                  isActive={false}
                />
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 