'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReportsDashboard() {
  // State for date range picker
  const [startDate, setStartDate] = useState('2023-05-01');
  const [endDate, setEndDate] = useState('2023-05-31');
  
  // Sample recent reports data
  const recentReports = [
    { 
      id: 'R001', 
      name: 'Monthly Hospital Performance Summary', 
      type: 'Performance', 
      date: '2023-05-15', 
      format: 'PDF',
      size: '2.4 MB',
      generatedBy: 'Admin'
    },
    { 
      id: 'R002', 
      name: 'ESIC Billing Q1 2023', 
      type: 'Billing', 
      date: '2023-05-10', 
      format: 'Excel',
      size: '1.8 MB',
      generatedBy: 'System'
    },
    { 
      id: 'R003', 
      name: 'North Region Health Metrics', 
      type: 'Health', 
      date: '2023-05-08', 
      format: 'PDF',
      size: '3.2 MB',
      generatedBy: 'Admin'
    },
    { 
      id: 'R004', 
      name: 'User Activity Summary - April', 
      type: 'Users', 
      date: '2023-05-05', 
      format: 'PDF',
      size: '1.5 MB',
      generatedBy: 'System'
    },
    { 
      id: 'R005', 
      name: 'Ambulance Utilization Report', 
      type: 'Operations', 
      date: '2023-05-03', 
      format: 'Excel',
      size: '2.1 MB',
      generatedBy: 'Admin'
    },
  ];
  
  // Sample scheduled reports
  const scheduledReports = [
    { 
      id: 'S001', 
      name: 'Monthly Billing Summary', 
      frequency: 'Monthly', 
      nextRun: '2023-06-01',
      recipients: 'Finance Team, Admin'
    },
    { 
      id: 'S002', 
      name: 'Weekly Patient Admissions', 
      frequency: 'Weekly', 
      nextRun: '2023-05-22',
      recipients: 'Hospital Admins'
    },
    { 
      id: 'S003', 
      name: 'Quarterly Health Trends', 
      frequency: 'Quarterly', 
      nextRun: '2023-07-01',
      recipients: 'Health Ministry, Admin'
    },
  ];
  
  // Available report templates
  const reportTemplates = [
    { 
      id: 'T001', 
      name: 'Hospital Performance',
      description: 'Key metrics across hospitals including occupancy, revenue, and patient volume',
      icon: '📊',
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      id: 'T002', 
      name: 'Billing Reports',
      description: 'Financial summaries including ESIC and CGHS billing across facilities',
      icon: '💰',
      color: 'bg-green-100 text-green-800' 
    },
    { 
      id: 'T003', 
      name: 'Health Metrics',
      description: 'Disease prevalence, vaccination coverage, and demographic health data',
      icon: '🏥',
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      id: 'T004', 
      name: 'User Activity',
      description: 'System usage patterns and user engagement across the platform',
      icon: '👥',
      color: 'bg-indigo-100 text-indigo-800'
    },
    { 
      id: 'T005', 
      name: 'Custom Report',
      description: 'Build a custom report by selecting specific data points and visualizations',
      icon: '✨',
      color: 'bg-amber-100 text-amber-800'
    },
    { 
      id: 'T006', 
      name: 'Operational Overview',
      description: 'Ambulance usage, staff allocation, and resource utilization metrics',
      icon: '🚑',
      color: 'bg-red-100 text-red-800'
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports Dashboard</h1>
        <p className="text-gray-600">Generate, manage, and schedule comprehensive reports across the system</p>
      </div>
      
      {/* Date Range and Quick Actions */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                id="start-date"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                id="end-date"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Link 
              href="/super-admin/reports/generate" 
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Generate New Report
            </Link>
            
            <Link 
              href="/super-admin/reports/schedule" 
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Reports
            </Link>
          </div>
        </div>
      </div>
      
      {/* Report Template Cards */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Report Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTemplates.map((template) => (
            <Link 
              key={template.id}
              href={`/super-admin/reports/generate?template=${template.id}`} 
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center text-xl`}>
                  {template.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-semibold text-gray-800">{template.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Recent Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Format
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {report.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.type === 'Performance' ? 'bg-blue-100 text-blue-800' :
                      report.type === 'Billing' ? 'bg-green-100 text-green-800' :
                      report.type === 'Health' ? 'bg-purple-100 text-purple-800' :
                      report.type === 'Users' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.format}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Scheduled Reports */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Scheduled Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Run
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipients
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scheduledReports.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {schedule.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      schedule.frequency === 'Monthly' ? 'bg-blue-100 text-blue-800' :
                      schedule.frequency === 'Weekly' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {schedule.frequency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.nextRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.recipients}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Help Box */}
      <div className="bg-indigo-50 rounded-lg shadow p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">About Reports</h3>
            <div className="mt-2 text-sm text-indigo-700">
              <p>
                Reports can be generated on-demand or scheduled for regular delivery. All reports can be exported in multiple formats 
                including PDF, Excel, and CSV. For custom reports, you can select specific data points and visualizations.
              </p>
            </div>
            <div className="mt-3">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 