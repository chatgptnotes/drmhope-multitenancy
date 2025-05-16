'use client';

import { useState } from 'react';

export default function ApprovalsMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Sample approvals data
  const approvals = [
    {
      id: 1,
      requestId: 'REQ-2023-1001',
      title: 'CGHS Surgery Approval - Knee Replacement',
      requestedBy: 'Dr. Anand Kumar',
      requestedFor: 'Rakesh Verma',
      requestedOn: '10 May 2023',
      approvalType: 'Surgery',
      status: 'Pending'
    },
    {
      id: 2,
      requestId: 'REQ-2023-1002',
      title: 'Medicine Purchase - Emergency Stock',
      requestedBy: 'Vijay Prakash',
      requestedFor: 'Pharmacy Dept',
      requestedOn: '12 May 2023',
      approvalType: 'Inventory',
      status: 'Approved'
    },
    {
      id: 3,
      requestId: 'REQ-2023-1003',
      title: 'Equipment Maintenance - MRI Machine',
      requestedBy: 'Mohit Agarwal',
      requestedFor: 'Radiology Dept',
      requestedOn: '08 May 2023',
      approvalType: 'Maintenance',
      status: 'Rejected'
    },
    {
      id: 4,
      requestId: 'REQ-2023-1004',
      title: 'MJPJAY Surgery Approval - Catract Surgery',
      requestedBy: 'Dr. Priya Sharma',
      requestedFor: 'Sunita Patil',
      requestedOn: '15 May 2023',
      approvalType: 'Surgery',
      status: 'Pending'
    },
    {
      id: 5,
      requestId: 'REQ-2023-1005',
      title: 'Staff Overtime Approval - ICU',
      requestedBy: 'Preeti Verma',
      requestedFor: 'ICU Staff',
      requestedOn: '14 May 2023',
      approvalType: 'HR',
      status: 'Approved'
    },
  ];

  // Get unique status values for filter
  const statuses = ['All', ...new Set(approvals.map(approval => approval.status))];

  // Filter approvals based on search term and status
  const filteredApprovals = approvals.filter(approval => 
    (approval.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     approval.requestId.toLowerCase().includes(searchTerm.toLowerCase()) ||
     approval.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
     approval.requestedFor.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'All' || approval.status === statusFilter)
  );

  // Function to determine status badge color
  const getStatusBadgeClass = (status: string): string => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Approvals Master</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="search" 
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Approvals Master</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create New Request
            </button>
          </div>
          <div>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested For
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested On
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
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
                {filteredApprovals.map((approval) => (
                  <tr key={approval.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.requestId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.requestedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.requestedFor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.requestedOn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {approval.approvalType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(approval.status)}`}>
                        {approval.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      {approval.status === 'Pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 