'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BillingReportsPage() {
  // Filter states
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [billingType, setBillingType] = useState('All Types');
  const [hospitalFilter, setHospitalFilter] = useState('All Hospitals');
  
  // Sample monthly billing data
  const monthlyBilling = [
    { month: 'January', esic: '₹1,45,000', cghs: '₹1,20,000', private: '₹2,10,000', total: '₹4,75,000' },
    { month: 'February', esic: '₹1,55,000', cghs: '₹1,25,000', private: '₹2,25,000', total: '₹5,05,000' },
    { month: 'March', esic: '₹1,60,000', cghs: '₹1,30,000', private: '₹2,40,000', total: '₹5,30,000' },
    { month: 'April', esic: '₹1,70,000', cghs: '₹1,40,000', private: '₹2,55,000', total: '₹5,65,000' },
    { month: 'May', esic: '₹1,80,000', cghs: '₹1,50,000', private: '₹2,70,000', total: '₹6,00,000' },
  ];
  
  // Sample hospital billing data
  const hospitalBilling = [
    { 
      id: 'H001', 
      name: 'City General Hospital', 
      esic: '₹42,500', 
      cghs: '₹38,200', 
      private: '₹65,000',
      total: '₹1,45,700', 
      pendingClaims: 12, 
      averageClaimValue: '₹8,500'
    },
    { 
      id: 'H003', 
      name: 'Wellness Hospital', 
      esic: '₹38,600', 
      cghs: '₹35,400', 
      private: '₹55,000',
      total: '₹1,29,000', 
      pendingClaims: 8, 
      averageClaimValue: '₹9,200'
    },
    { 
      id: 'H005', 
      name: 'Metro Healthcare', 
      esic: '₹35,200', 
      cghs: '₹31,500', 
      private: '₹50,300',
      total: '₹1,17,000', 
      pendingClaims: 15, 
      averageClaimValue: '₹7,800'
    },
    { 
      id: 'H006', 
      name: 'Apollo Hospitals', 
      esic: '₹40,100', 
      cghs: '₹36,800', 
      private: '₹60,100',
      total: '₹1,37,000', 
      pendingClaims: 10, 
      averageClaimValue: '₹9,500'
    },
    { 
      id: 'H008', 
      name: 'Lifepoint Medical', 
      esic: '₹33,600', 
      cghs: '₹28,100', 
      private: '₹48,300',
      total: '₹1,10,000', 
      pendingClaims: 7, 
      averageClaimValue: '₹8,300'
    },
  ];
  
  // Top procedures data
  const topProcedures = [
    { name: 'General Consultation', esicCount: 450, cghsCount: 380, revenue: '₹4,15,000' },
    { name: 'Blood Tests', esicCount: 320, cghsCount: 290, revenue: '₹3,05,000' },
    { name: 'X-Ray', esicCount: 210, cghsCount: 180, revenue: '₹1,95,000' },
    { name: 'Ultrasound', esicCount: 180, cghsCount: 150, revenue: '₹1,65,000' },
    { name: 'ECG', esicCount: 160, cghsCount: 130, revenue: '₹1,45,000' },
  ];
  
  // Claim status data for the chart
  const claimStatus = [
    { status: 'Approved', count: 850, percentage: 70 },
    { status: 'Pending', count: 240, percentage: 20 },
    { status: 'Rejected', count: 120, percentage: 10 },
  ];
  
  // Calculate total revenue
  const calculateTotal = (type: 'esic' | 'cghs' | 'private' | 'total') => {
    if (type === 'esic') {
      return monthlyBilling.reduce((total, month) => 
        total + parseInt(month.esic.replace(/[^\d]/g, '')), 0).toLocaleString('en-IN');
    } else if (type === 'cghs') {
      return monthlyBilling.reduce((total, month) => 
        total + parseInt(month.cghs.replace(/[^\d]/g, '')), 0).toLocaleString('en-IN');
    } else if (type === 'private') {
      return monthlyBilling.reduce((total, month) => 
        total + parseInt(month.private.replace(/[^\d]/g, '')), 0).toLocaleString('en-IN');
    } else {
      return monthlyBilling.reduce((total, month) => 
        total + parseInt(month.total.replace(/[^\d]/g, '')), 0).toLocaleString('en-IN');
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Billing Reports</h1>
          <p className="text-gray-600">Comprehensive view of ESIC, CGHS and private billing metrics</p>
        </div>
        <Link
          href="/super-admin/reports"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to Reports
        </Link>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <label htmlFor="time-range" className="block text-sm font-medium text-gray-700 mb-1">
              Time Range
            </label>
            <select
              id="time-range"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 90 days">Last 90 days</option>
              <option value="Last 180 days">Last 180 days</option>
              <option value="Last year">Last year</option>
              <option value="Year to date">Year to date</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="billing-type" className="block text-sm font-medium text-gray-700 mb-1">
              Billing Type
            </label>
            <select
              id="billing-type"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={billingType}
              onChange={(e) => setBillingType(e.target.value)}
            >
              <option value="All Types">All Types</option>
              <option value="ESIC">ESIC</option>
              <option value="CGHS">CGHS</option>
              <option value="Private">Private</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="hospital-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Hospital
            </label>
            <select
              id="hospital-filter"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
              value={hospitalFilter}
              onChange={(e) => setHospitalFilter(e.target.value)}
            >
              <option value="All Hospitals">All Hospitals</option>
              {hospitalBilling.map(hospital => (
                <option key={hospital.id} value={hospital.id}>{hospital.name}</option>
              ))}
            </select>
          </div>
          
          <div className="self-end">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Report
            </button>
          </div>
        </div>
      </div>
      
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xl">
              🏥
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">ESIC Revenue</h2>
              <p className="text-2xl font-semibold">₹{calculateTotal('esic')}</p>
              <span className="text-xs text-green-600">↑ 8.2% from previous period</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center text-xl">
              🏢
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">CGHS Revenue</h2>
              <p className="text-2xl font-semibold">₹{calculateTotal('cghs')}</p>
              <span className="text-xs text-green-600">↑ 7.1% from previous period</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-800 flex items-center justify-center text-xl">
              💼
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Private Revenue</h2>
              <p className="text-2xl font-semibold">₹{calculateTotal('private')}</p>
              <span className="text-xs text-green-600">↑ 9.3% from previous period</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
              💰
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Total Revenue</h2>
              <p className="text-2xl font-semibold">₹{calculateTotal('total')}</p>
              <span className="text-xs text-green-600">↑ 8.5% from previous period</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Billing Trend */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Monthly Billing Trend</h2>
          </div>
          <div className="p-4">
            <div className="h-64">
              {/* This would be an actual chart in a real application */}
              <div className="h-full flex items-end justify-between">
                {monthlyBilling.map((month) => (
                  <div key={month.month} className="w-1/6 flex flex-col items-center">
                    <div className="w-full flex justify-center space-x-1">
                      <div 
                        className="w-6 bg-blue-500 rounded-t-md" 
                        style={{ 
                          height: `${(parseInt(month.esic.replace(/[^\d]/g, '')) / 180000) * 100}%` 
                        }}
                      ></div>
                      <div 
                        className="w-6 bg-purple-500 rounded-t-md" 
                        style={{ 
                          height: `${(parseInt(month.cghs.replace(/[^\d]/g, '')) / 180000) * 100}%` 
                        }}
                      ></div>
                      <div 
                        className="w-6 bg-green-500 rounded-t-md" 
                        style={{ 
                          height: `${(parseInt(month.private.replace(/[^\d]/g, '')) / 270000) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">{month.month}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center mr-6">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">ESIC</span>
              </div>
              <div className="flex items-center mr-6">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">CGHS</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Private</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Claim Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Claim Status</h2>
          </div>
          <div className="p-4">
            <div className="mb-6">
              {/* This would be a pie chart in a real application */}
              <div className="flex h-64 items-center justify-center">
                <div className="w-48 h-48 rounded-full border-8 border-gray-200 relative">
                  {claimStatus.map((status, index) => {
                    // Calculate starting angle based on previous segments
                    const previousPercentage = claimStatus
                      .slice(0, index)
                      .reduce((sum, item) => sum + item.percentage, 0);
                    
                    // Convert percentage to degrees (0-360)
                    const startAngle = (previousPercentage / 100) * 360;
                    const endAngle = ((previousPercentage + status.percentage) / 100) * 360;
                    
                    // Generate clip path for this segment
                    return (
                      <div 
                        key={status.status}
                        className={`absolute inset-0 rounded-full ${
                          status.status === 'Approved' ? 'bg-green-500' : 
                          status.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{
                          clipPath: `polygon(50% 50%, 50% 0%, ${
                            50 + 50 * Math.cos((startAngle * Math.PI) / 180)}% ${
                            50 - 50 * Math.sin((startAngle * Math.PI) / 180)}%, ${
                            50 + 50 * Math.cos((endAngle * Math.PI) / 180)}% ${
                            50 - 50 * Math.sin((endAngle * Math.PI) / 180)}%)`
                        }}
                      ></div>
                    );
                  })}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-3xl font-bold">{claimStatus[0].percentage}%</span>
                      <span className="text-sm text-gray-500">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                {claimStatus.map(status => (
                  <div key={status.status} className="flex items-center mr-6">
                    <div className={`w-4 h-4 rounded mr-2 ${
                      status.status === 'Approved' ? 'bg-green-500' : 
                      status.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm text-gray-600">
                      {status.status} ({status.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hospital Billing Table */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Hospital-wise Billing</h2>
          <Link href="/super-admin/reports/billing/hospital-details" className="text-indigo-600 text-sm hover:text-indigo-800">
            View Detailed Breakdown →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ESIC Billing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CGHS Billing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Private Billing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pending Claims
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hospitalBilling.map((hospital) => (
                <tr key={hospital.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-indigo-600">
                          {hospital.name}
                        </div>
                        <div className="text-sm text-gray-500">{hospital.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                    {hospital.esic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium">
                    {hospital.cghs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    {hospital.private}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {hospital.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {hospital.pendingClaims} claims
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Top Procedures Table */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Top Procedures by Revenue</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Procedure
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ESIC Cases
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CGHS Cases
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProcedures.map((procedure, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {procedure.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {procedure.esicCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {procedure.cghsCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {procedure.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800">Billing Report Actions</h2>
            <p className="text-gray-600 mt-1">Generate specific reports or manage billing</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/super-admin/reports/generate?template=T002"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Custom Report
            </Link>
            <Link
              href="/super-admin/esic-overview"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ESIC Dashboard
            </Link>
            <Link
              href="/super-admin/cghs-overview"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              CGHS Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 