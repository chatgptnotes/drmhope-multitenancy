'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function GenerateReportPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  
  // State for form inputs
  const [reportName, setReportName] = useState('');
  const [reportType, setReportType] = useState(templateId ? templateId : 'T001');
  const [startDate, setStartDate] = useState('2023-05-01');
  const [endDate, setEndDate] = useState('2023-05-31');
  const [selectedRegions, setSelectedRegions] = useState(['All Regions']);
  const [selectedHospitals, setSelectedHospitals] = useState(['All Hospitals']);
  const [dataPoints, setDataPoints] = useState(['Patient Volume', 'Revenue', 'Occupancy Rate']);
  const [chartTypes, setChartTypes] = useState(['Bar Chart', 'Line Chart']);
  const [exportFormat, setExportFormat] = useState('PDF');
  const [isScheduled, setIsScheduled] = useState(false);
  const [frequency, setFrequency] = useState('Monthly');
  const [recipients, setRecipients] = useState('');
  const [isPreviewReady, setIsPreviewReady] = useState(false);
  
  // Report type options
  const reportTypes = [
    { id: 'T001', name: 'Hospital Performance', 
      description: 'Key metrics across hospitals including occupancy, revenue, and patient volume' },
    { id: 'T002', name: 'Billing Reports', 
      description: 'Financial summaries including ESIC and CGHS billing across facilities' },
    { id: 'T003', name: 'Health Metrics', 
      description: 'Disease prevalence, vaccination coverage, and demographic health data' },
    { id: 'T004', name: 'User Activity', 
      description: 'System usage patterns and user engagement across the platform' },
    { id: 'T005', name: 'Custom Report', 
      description: 'Build a custom report by selecting specific data points and visualizations' },
    { id: 'T006', name: 'Operational Overview', 
      description: 'Ambulance usage, staff allocation, and resource utilization metrics' },
  ];
  
  // Set a default name based on selected report type
  useEffect(() => {
    const selectedType = reportTypes.find(type => type.id === reportType);
    if (selectedType) {
      setReportName(`${selectedType.name} Report - ${new Date().toLocaleDateString()}`);
    }
  }, [reportType]);
  
  // Region options
  const regionOptions = [
    'All Regions', 'North India', 'South India', 'East India', 'West India', 'Central India'
  ];
  
  // Hospital options (sample data)
  const hospitalOptions = [
    'All Hospitals', 'City General Hospital', 'Wellness Hospital', 'Metro Healthcare', 
    'Apollo Hospitals', 'Lifepoint Medical'
  ];
  
  // Data point options based on report type
  const getDataPointOptions = () => {
    switch(reportType) {
      case 'T001': // Hospital Performance
        return [
          'Patient Volume', 'Revenue', 'Occupancy Rate', 'Average Stay Duration', 
          'Emergency Cases', 'Planned Admissions', 'Staff Availability'
        ];
      case 'T002': // Billing Reports
        return [
          'ESIC Billing', 'CGHS Billing', 'Out of Pocket', 'Insurance Claims', 
          'Pending Payments', 'Revenue by Department', 'Revenue Trend'
        ];
      case 'T003': // Health Metrics
        return [
          'Disease Prevalence', 'Vaccination Coverage', 'Age Demographics', 
          'Gender Distribution', 'Common Ailments', 'Treatment Outcomes'
        ];
      case 'T004': // User Activity
        return [
          'Login Frequency', 'Feature Usage', 'Active Users', 'Session Duration', 
          'Role-based Activity', 'Time of Day Usage'
        ];
      case 'T006': // Operational
        return [
          'Ambulance Response Time', 'Staff Allocation', 'Bed Turnover Rate', 
          'Resource Utilization', 'Stock Levels', 'Facility Management'
        ];
      default: // Custom
        return [
          'Patient Volume', 'Revenue', 'Occupancy Rate', 'Disease Prevalence', 
          'Login Frequency', 'ESIC Billing', 'CGHS Billing', 'Ambulance Response Time'
        ];
    }
  };
  
  // Chart type options
  const chartTypeOptions = [
    'Bar Chart', 'Line Chart', 'Pie Chart', 'Area Chart', 'Scatter Plot', 'Heatmap', 'Table'
  ];
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, this would submit to an API or backend
    console.log({
      reportName,
      reportType: reportTypes.find(type => type.id === reportType)?.name,
      dateRange: { startDate, endDate },
      regions: selectedRegions,
      hospitals: selectedHospitals,
      dataPoints,
      chartTypes,
      exportFormat,
      scheduling: isScheduled ? { frequency, recipients } : null
    });
    
    // Show preview
    setIsPreviewReady(true);
    
    // Simulate report generation
    alert('Report generated successfully! You can view and download it from the Reports Dashboard.');
  };
  
  // Handle multiple select changes
  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setState(selected);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Generate New Report</h1>
          <p className="text-gray-600">Create a customized report by selecting data points and visualization options</p>
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
      
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Report Configuration */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Report Configuration</h2>
              
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
                  {reportTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  {reportTypes.find(type => type.id === reportType)?.description}
                </p>
              </div>
              
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
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
                <div>
                  <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="regions" className="block text-sm font-medium text-gray-700 mb-1">
                  Regions
                </label>
                <select
                  id="regions"
                  multiple
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300 h-24"
                  value={selectedRegions}
                  onChange={(e) => handleMultiSelectChange(e, setSelectedRegions)}
                >
                  {regionOptions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Hold Ctrl/Cmd key to select multiple regions
                </p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="hospitals" className="block text-sm font-medium text-gray-700 mb-1">
                  Hospitals
                </label>
                <select
                  id="hospitals"
                  multiple
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300 h-24"
                  value={selectedHospitals}
                  onChange={(e) => handleMultiSelectChange(e, setSelectedHospitals)}
                >
                  {hospitalOptions.map((hospital) => (
                    <option key={hospital} value={hospital}>
                      {hospital}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Hold Ctrl/Cmd key to select multiple hospitals
                </p>
              </div>
            </div>
            
            {/* Data and Visualization */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Data and Visualization</h2>
              
              <div className="mb-4">
                <label htmlFor="data-points" className="block text-sm font-medium text-gray-700 mb-1">
                  Data Points to Include
                </label>
                <select
                  id="data-points"
                  multiple
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300 h-32"
                  value={dataPoints}
                  onChange={(e) => handleMultiSelectChange(e, setDataPoints)}
                >
                  {getDataPointOptions().map((point) => (
                    <option key={point} value={point}>
                      {point}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Hold Ctrl/Cmd key to select multiple data points
                </p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="chart-types" className="block text-sm font-medium text-gray-700 mb-1">
                  Chart Types
                </label>
                <select
                  id="chart-types"
                  multiple
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300 h-24"
                  value={chartTypes}
                  onChange={(e) => handleMultiSelectChange(e, setChartTypes)}
                >
                  {chartTypeOptions.map((chart) => (
                    <option key={chart} value={chart}>
                      {chart}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Hold Ctrl/Cmd key to select multiple chart types
                </p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="export-format" className="block text-sm font-medium text-gray-700 mb-1">
                  Export Format
                </label>
                <select
                  id="export-format"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                >
                  <option value="PDF">PDF</option>
                  <option value="Excel">Excel</option>
                  <option value="CSV">CSV</option>
                  <option value="JSON">JSON</option>
                </select>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="schedule-report"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={isScheduled}
                    onChange={(e) => setIsScheduled(e.target.checked)}
                  />
                  <label htmlFor="schedule-report" className="ml-2 block text-sm text-gray-700">
                    Schedule this report
                  </label>
                </div>
              </div>
              
              {isScheduled && (
                <div className="p-4 bg-gray-50 rounded-md mb-4">
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
                  
                  <div>
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
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t pt-4 mt-6 flex justify-end space-x-3">
            <Link
              href="/super-admin/reports"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Generate Report
            </button>
          </div>
        </form>
      </div>
      
      {isPreviewReady && (
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Report Preview</h2>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-2 text-sm text-gray-500">
              Your report has been generated and is ready to view.
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 