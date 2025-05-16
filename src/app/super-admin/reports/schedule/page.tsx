'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ScheduledReport {
  id: string;
  name: string;
  type: string;
  frequency: string;
  nextRun: string;
  recipients: string;
  lastSent: string;
  status: 'Active' | 'Paused';
}

export default function ScheduleReportsPage() {
  // Sample scheduled reports data
  const [scheduledReports, setScheduledReports] = useState<ScheduledReport[]>([
    { 
      id: 'S001', 
      name: 'Monthly Billing Summary', 
      type: 'Billing',
      frequency: 'Monthly', 
      nextRun: '2023-06-01',
      recipients: 'finance@hmis.com, admin@hmis.com',
      lastSent: '2023-05-01',
      status: 'Active'
    },
    { 
      id: 'S002', 
      name: 'Weekly Patient Admissions', 
      type: 'Performance',
      frequency: 'Weekly', 
      nextRun: '2023-05-22',
      recipients: 'hospitals@hmis.com',
      lastSent: '2023-05-15',
      status: 'Active'
    },
    { 
      id: 'S003', 
      name: 'Quarterly Health Trends', 
      type: 'Health',
      frequency: 'Quarterly', 
      nextRun: '2023-07-01',
      recipients: 'health.ministry@gov.in, admin@hmis.com',
      lastSent: '2023-04-01',
      status: 'Active'
    },
    { 
      id: 'S004', 
      name: 'Daily User Activity', 
      type: 'User',
      frequency: 'Daily', 
      nextRun: '2023-05-16',
      recipients: 'tech@hmis.com',
      lastSent: '2023-05-15',
      status: 'Paused'
    },
  ]);
  
  // State for the form
  const [showForm, setShowForm] = useState(false);
  const [reportName, setReportName] = useState('');
  const [reportType, setReportType] = useState('Billing');
  const [frequency, setFrequency] = useState('Monthly');
  const [recipients, setRecipients] = useState('');
  const [startDate, setStartDate] = useState('');
  
  // Toggle report status (Active/Paused)
  const toggleReportStatus = (reportId: string) => {
    setScheduledReports(reports => 
      reports.map(report => 
        report.id === reportId ? 
          {...report, status: report.status === 'Active' ? 'Paused' : 'Active'} : 
          report
      )
    );
  };
  
  // Delete a scheduled report
  const deleteReport = (reportId: string) => {
    if (confirm('Are you sure you want to delete this scheduled report?')) {
      setScheduledReports(reports => reports.filter(report => report.id !== reportId));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Generate a simple ID for the new report
    const newId = `S${(scheduledReports.length + 1).toString().padStart(3, '0')}`;
    
    // Calculate next run date based on frequency and start date
    const nextRunDate = new Date(startDate);
    
    // Create the new report
    const newReport: ScheduledReport = {
      id: newId,
      name: reportName,
      type: reportType,
      frequency: frequency,
      nextRun: nextRunDate.toISOString().split('T')[0],
      recipients: recipients,
      lastSent: 'Never',
      status: 'Active'
    };
    
    // Add to the list
    setScheduledReports([...scheduledReports, newReport]);
    
    // Reset the form
    setReportName('');
    setReportType('Billing');
    setFrequency('Monthly');
    setRecipients('');
    setStartDate('');
    setShowForm(false);
    
    // Show confirmation
    alert('New scheduled report has been created.');
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Schedule Reports</h1>
          <p className="text-gray-600">Set up recurring reports to be automatically generated and sent</p>
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
      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium text-gray-700">Scheduled Reports</h2>
            <p className="text-sm text-gray-500">{scheduledReports.length} reports scheduled</p>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Schedule
          </button>
        </div>
      </div>
      
      {/* Add Schedule Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Schedule New Report</h2>
            <button 
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label htmlFor="report-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Report Name
                  </label>
                  <input
                    type="text"
                    id="report-name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    required
                    placeholder="e.g. Monthly Billing Summary"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Report Type
                  </label>
                  <select
                    id="report-type"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <option value="Billing">Billing Reports</option>
                    <option value="Performance">Hospital Performance</option>
                    <option value="Health">Health Metrics</option>
                    <option value="User">User Activity</option>
                    <option value="Operations">Operational Overview</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <select
                    id="frequency"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                  </select>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="recipients" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipients (comma-separated emails)
                  </label>
                  <input
                    type="text"
                    id="recipients"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={recipients}
                    onChange={(e) => setRecipients(e.target.value)}
                    placeholder="admin@example.com, finance@example.com"
                    required
                  />
                </div>
                
                <div className="py-4 text-gray-600 text-sm">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Reports will be generated automatically according to the frequency you set and delivered to the recipients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Schedule Report
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Scheduled Reports Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Active Schedules</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Run
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Sent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scheduledReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{report.name}</div>
                    <div className="text-sm text-gray-500">ID: {report.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.type === 'Performance' ? 'bg-blue-100 text-blue-800' :
                      report.type === 'Billing' ? 'bg-green-100 text-green-800' :
                      report.type === 'Health' ? 'bg-purple-100 text-purple-800' :
                      report.type === 'User' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.frequency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.nextRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.lastSent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => toggleReportStatus(report.id)}
                        className={`${
                          report.status === 'Active' ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'
                        }`}
                        title={report.status === 'Active' ? 'Pause' : 'Activate'}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {report.status === 'Active' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          )}
                        </svg>
                      </button>
                      <Link 
                        href={`/super-admin/reports/edit-schedule?id=${report.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                      <button 
                        onClick={() => deleteReport(report.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
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
        {scheduledReports.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No scheduled reports found. Click "Add New Schedule" to create one.
          </div>
        )}
      </div>
      
      {/* Help Box */}
      <div className="bg-indigo-50 rounded-lg shadow p-6 mt-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">About Report Scheduling</h3>
            <div className="mt-2 text-sm text-indigo-700">
              <p>
                Scheduled reports are automatically generated according to the frequency you set and sent to the recipients.
                You can pause or resume schedules at any time. Reports are delivered in the format specified during configuration.
              </p>
            </div>
            <div className="mt-3">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Learn more about scheduling →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 