'use client';

export default function SystemPage() {
  // Sample system data
  const systemData = {
    uptime: '99.8%',
    lastRestart: '2023-05-01 02:30 AM',
    currentVersion: 'v1.2.5',
    nextMaintenance: '2023-06-15 03:00 AM',
  };

  // Sample service status
  const serviceStatus = [
    { name: 'Database', status: 'Operational', lastIssue: 'None', color: 'bg-green-500' },
    { name: 'API Gateway', status: 'Operational', lastIssue: 'None', color: 'bg-green-500' },
    { name: 'Auth Service', status: 'Operational', lastIssue: 'None', color: 'bg-green-500' },
    { name: 'Billing Service', status: 'Degraded', lastIssue: '2023-05-12 10:45 AM', color: 'bg-yellow-500' },
    { name: 'Notification Service', status: 'Operational', lastIssue: 'None', color: 'bg-green-500' },
    { name: 'File Storage', status: 'Operational', lastIssue: 'None', color: 'bg-green-500' },
  ];

  // Sample system logs
  const systemLogs = [
    { timestamp: '2023-05-15 09:32:45', level: 'INFO', service: 'Database', message: 'Daily backup completed successfully' },
    { timestamp: '2023-05-14 15:45:12', level: 'WARNING', service: 'Billing Service', message: 'High CPU usage detected' },
    { timestamp: '2023-05-14 12:18:30', level: 'INFO', service: 'Auth Service', message: 'User role update batch completed' },
    { timestamp: '2023-05-13 22:05:18', level: 'ERROR', service: 'Billing Service', message: 'Payment gateway timeout error' },
    { timestamp: '2023-05-13 18:30:55', level: 'INFO', service: 'API Gateway', message: 'Rate limiting adjusted for high traffic' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">System Management</h1>
        <p className="text-gray-600">Monitor and manage system health and performance</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* System Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">System Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-gray-600">System Uptime</span>
              <span className="font-medium text-green-600">{systemData.uptime}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-gray-600">Last System Restart</span>
              <span className="font-medium">{systemData.lastRestart}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-gray-600">Current Version</span>
              <span className="font-medium">{systemData.currentVersion}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Next Scheduled Maintenance</span>
              <span className="font-medium text-yellow-600">{systemData.nextMaintenance}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              View Details
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Check for Updates
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0h11.9m0 0l-3.6-3.6M4.582 9l3.6 3.6" />
              </svg>
              Restart Services
            </button>
            <button className="p-4 bg-green-50 text-green-700 rounded-md hover:bg-green-100 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Backup Data
            </button>
            <button className="p-4 bg-red-50 text-red-700 rounded-md hover:bg-red-100 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cache
            </button>
            <button className="p-4 bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Logs
            </button>
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Service Status</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Issue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {serviceStatus.map((service, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {service.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`h-3 w-3 ${service.color} rounded-full mr-2`}></div>
                      <span className={`text-sm ${service.status === 'Operational' ? 'text-green-800' : 'text-yellow-800'}`}>
                        {service.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {service.lastIssue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        Details
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Restart
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent System Logs */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recent System Logs</h2>
          <div>
            <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-indigo-300">
              <option value="all">All Levels</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {systemLogs.map((log, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      log.level === 'INFO' ? 'bg-blue-100 text-blue-800' : 
                      log.level === 'WARNING' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {log.service}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {log.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t text-right">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View Full Logs →
          </button>
        </div>
      </div>
    </div>
  );
} 