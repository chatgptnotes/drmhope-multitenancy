'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HospitalAnalyticsDashboard() {
  // Filter states
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [regionFilter, setRegionFilter] = useState('All Regions');
  
  // Sample hospital performance data
  const hospitalPerformance = [
    { 
      id: 'H001', 
      name: 'City General Hospital', 
      location: 'New Delhi',
      occupancyRate: 78,
      avgStayDuration: 4.2,
      emergencyCases: 45,
      plannedAdmissions: 120,
      totalPatients: 165,
      revenue: '₹24,50,000',
      growth: 12
    },
    { 
      id: 'H003', 
      name: 'Wellness Hospital', 
      location: 'Mumbai',
      occupancyRate: 82,
      avgStayDuration: 3.8,
      emergencyCases: 52,
      plannedAdmissions: 140,
      totalPatients: 192,
      revenue: '₹28,75,000',
      growth: 15
    },
    { 
      id: 'H005', 
      name: 'Metro Healthcare', 
      location: 'Bangalore',
      occupancyRate: 65,
      avgStayDuration: 3.5,
      emergencyCases: 38,
      plannedAdmissions: 98,
      totalPatients: 136,
      revenue: '₹19,20,000',
      growth: 8
    },
    { 
      id: 'H006', 
      name: 'Apollo Hospitals', 
      location: 'Chennai',
      occupancyRate: 75,
      avgStayDuration: 4.0,
      emergencyCases: 42,
      plannedAdmissions: 110,
      totalPatients: 152,
      revenue: '₹22,30,000',
      growth: 10
    },
    { 
      id: 'H008', 
      name: 'Lifepoint Medical', 
      location: 'Hyderabad',
      occupancyRate: 70,
      avgStayDuration: 3.7,
      emergencyCases: 40,
      plannedAdmissions: 105,
      totalPatients: 145,
      revenue: '₹20,80,000',
      growth: 9
    },
  ];

  // Regional occupancy summary
  const regionalOccupancy = [
    { region: 'North India', totalBeds: 1200, occupiedBeds: 960, occupancyRate: 80 },
    { region: 'South India', totalBeds: 950, occupiedBeds: 665, occupancyRate: 70 },
    { region: 'East India', totalBeds: 750, occupiedBeds: 525, occupancyRate: 70 },
    { region: 'West India', totalBeds: 1050, occupiedBeds: 840, occupancyRate: 80 },
    { region: 'Central India', totalBeds: 650, occupiedBeds: 455, occupancyRate: 70 },
  ];

  // Common disease trends
  const diseaseTrends = [
    { disease: 'Respiratory Infections', cases: 450, change: 15, trend: 'increasing' },
    { disease: 'Cardiovascular Disease', cases: 380, change: 8, trend: 'increasing' },
    { disease: 'Diabetes', cases: 320, change: 5, trend: 'stable' },
    { disease: 'Gastrointestinal Disorders', cases: 280, change: -3, trend: 'decreasing' },
    { disease: 'Orthopedic Injuries', cases: 260, change: 10, trend: 'increasing' },
  ];

  // Monthly patient admission trends
  const admissionTrends = [
    { month: 'Jan', ipd: 845, opd: 2450 },
    { month: 'Feb', ipd: 880, opd: 2520 },
    { month: 'Mar', ipd: 940, opd: 2680 },
    { month: 'Apr', ipd: 980, opd: 2750 },
    { month: 'May', ipd: 1020, opd: 2880 },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hospital Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive analytics across all registered hospitals in the network</p>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Time Range</h2>
            <div className="flex space-x-2">
              {['Last 7 days', 'Last 30 days', 'Last 90 days', 'This Year'].map((range) => (
                <button
                  key={range}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === range 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Region</h2>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="All Regions">All Regions</option>
              <option value="North India">North India</option>
              <option value="South India">South India</option>
              <option value="East India">East India</option>
              <option value="West India">West India</option>
              <option value="Central India">Central India</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xl">
              🏥
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Total Hospitals</h2>
              <p className="text-2xl font-semibold">24</p>
              <span className="text-xs text-green-600">↑ 3 new this month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-800 flex items-center justify-center text-xl">
              🛏️
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Bed Occupancy</h2>
              <p className="text-2xl font-semibold">76%</p>
              <span className="text-xs text-green-600">↑ 5% from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center text-xl">
              👨‍⚕️
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Medical Staff</h2>
              <p className="text-2xl font-semibold">1,240</p>
              <span className="text-xs text-green-600">↑ 45 new hires</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-xl">
              🚑
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Emergency Rate</h2>
              <p className="text-2xl font-semibold">24%</p>
              <span className="text-xs text-red-600">↑ 3% this week</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hospital Performance Table */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Hospital Performance Metrics</h2>
          <p className="text-sm text-gray-600">Key performance indicators for top performing hospitals</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Occupancy
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Stay
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patients
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hospitalPerformance.map((hospital) => (
                <tr key={hospital.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-indigo-600">{hospital.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            hospital.occupancyRate > 80 ? 'bg-red-500' : 
                            hospital.occupancyRate > 70 ? 'bg-green-500' : 'bg-yellow-500'
                          }`} 
                          style={{ width: `${hospital.occupancyRate}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm text-gray-700">{hospital.occupancyRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {hospital.avgStayDuration} days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700">{hospital.totalPatients}</div>
                    <div className="text-xs text-gray-500">
                      {hospital.emergencyCases} emergency / {hospital.plannedAdmissions} planned
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                    {hospital.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      hospital.growth > 10 ? 'bg-green-100 text-green-800' : 
                      hospital.growth > 5 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      ↑ {hospital.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <span className="text-sm text-gray-600">Showing 5 of 24 hospitals</span>
          <Link href="/super-admin/hospitals" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View All Hospitals →
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Regional Capacity Utilization */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Regional Bed Capacity Utilization</h2>
          </div>
          <div className="p-4 space-y-4">
            {regionalOccupancy.map((region) => (
              <div key={region.region}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{region.region}</span>
                  <span className="text-sm text-gray-600">{region.occupiedBeds} of {region.totalBeds} beds</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      region.occupancyRate > 80 ? 'bg-red-500' : 
                      region.occupancyRate > 70 ? 'bg-green-500' : 'bg-yellow-500'
                    }`} 
                    style={{ width: `${region.occupancyRate}%` }}
                  ></div>
                </div>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500">{region.occupancyRate}% occupancy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Common Disease Trends */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Common Disease Trends</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Disease
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cases
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {diseaseTrends.map((disease) => (
                  <tr key={disease.disease}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {disease.disease}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {disease.cases}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        disease.trend === 'increasing' ? 'bg-red-100 text-red-800' : 
                        disease.trend === 'decreasing' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {disease.trend === 'increasing' ? '↑' : disease.trend === 'decreasing' ? '↓' : '→'} {Math.abs(disease.change)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Monthly Admission Trends */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Monthly Patient Admission Trends</h2>
        </div>
        <div className="p-6">
          <div className="h-64">
            {/* In a real app, this would be a Chart.js or similar chart */}
            <div className="h-full flex items-end justify-between">
              {admissionTrends.map((month) => (
                <div key={month.month} className="w-1/6 flex flex-col items-center">
                  <div className="w-full flex justify-center space-x-1">
                    <div 
                      className="w-8 bg-blue-500 rounded-t-md" 
                      style={{ height: `${(month.ipd / 1200) * 100}%` }}
                    ></div>
                    <div 
                      className="w-8 bg-indigo-300 rounded-t-md" 
                      style={{ height: `${(month.opd / 3000) * 100}%` }}
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
              <span className="text-sm text-gray-600">IPD Admissions</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-indigo-300 rounded mr-2"></div>
              <span className="text-sm text-gray-600">OPD Visits</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Need More Detailed Analysis?</h2>
            <p className="text-gray-600 mt-1">Generate comprehensive reports by region, disease type, or time period</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Link
              href="/super-admin/reports/generate"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Generate Custom Report
            </Link>
            <button
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Download Data (CSV)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 