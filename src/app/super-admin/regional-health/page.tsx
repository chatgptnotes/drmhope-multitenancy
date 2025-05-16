'use client';

import { useState } from 'react';

export default function RegionalHealthMetrics() {
  // Filter states
  const [regionFilter, setRegionFilter] = useState('All Regions');
  const [timeRange, setTimeRange] = useState('Last 3 months');
  
  // Sample regional health data
  const regionHealthData = [
    {
      region: 'North India',
      metrics: {
        diseasePrevalence: [
          { disease: 'Respiratory Infections', value: 32.5, change: 4.2 },
          { disease: 'Diabetes', value: 12.8, change: 1.5 },
          { disease: 'Cardiovascular Disease', value: 18.3, change: -0.7 },
          { disease: 'Hypertension', value: 22.7, change: 2.1 },
          { disease: 'Tuberculosis', value: 5.2, change: -1.3 },
        ],
        hospitalMetrics: {
          patientVolume: 24500,
          averageStayDuration: 4.2,
          bedOccupancy: 78,
          emergencyCases: 3240,
          outpatientVisits: 18700
        },
        demographicData: {
          pediatric: 22,
          adult: 58,
          geriatric: 20
        }
      }
    },
    {
      region: 'South India',
      metrics: {
        diseasePrevalence: [
          { disease: 'Respiratory Infections', value: 28.3, change: 2.1 },
          { disease: 'Diabetes', value: 15.6, change: 3.2 },
          { disease: 'Cardiovascular Disease', value: 16.7, change: 0.5 },
          { disease: 'Hypertension', value: 19.8, change: 1.3 },
          { disease: 'Dengue', value: 7.2, change: 4.1 },
        ],
        hospitalMetrics: {
          patientVolume: 22700,
          averageStayDuration: 3.9,
          bedOccupancy: 74,
          emergencyCases: 2980,
          outpatientVisits: 17300
        },
        demographicData: {
          pediatric: 24,
          adult: 52,
          geriatric: 24
        }
      }
    },
    {
      region: 'East India',
      metrics: {
        diseasePrevalence: [
          { disease: 'Respiratory Infections', value: 30.1, change: 3.8 },
          { disease: 'Diabetes', value: 11.2, change: 0.9 },
          { disease: 'Cardiovascular Disease', value: 17.5, change: 1.2 },
          { disease: 'Hypertension', value: 21.3, change: 1.8 },
          { disease: 'Malaria', value: 8.7, change: -2.3 },
        ],
        hospitalMetrics: {
          patientVolume: 19800,
          averageStayDuration: 4.5,
          bedOccupancy: 72,
          emergencyCases: 2680,
          outpatientVisits: 15900
        },
        demographicData: {
          pediatric: 26,
          adult: 50,
          geriatric: 24
        }
      }
    },
    {
      region: 'West India',
      metrics: {
        diseasePrevalence: [
          { disease: 'Respiratory Infections', value: 31.6, change: 4.5 },
          { disease: 'Diabetes', value: 13.9, change: 2.1 },
          { disease: 'Cardiovascular Disease', value: 19.2, change: 0.8 },
          { disease: 'Hypertension', value: 23.4, change: 2.7 },
          { disease: 'Gastrointestinal Disorders', value: 10.3, change: 3.1 },
        ],
        hospitalMetrics: {
          patientVolume: 26300,
          averageStayDuration: 4.1,
          bedOccupancy: 80,
          emergencyCases: 3520,
          outpatientVisits: 19800
        },
        demographicData: {
          pediatric: 20,
          adult: 57,
          geriatric: 23
        }
      }
    },
    {
      region: 'Central India',
      metrics: {
        diseasePrevalence: [
          { disease: 'Respiratory Infections', value: 29.8, change: 3.4 },
          { disease: 'Diabetes', value: 10.7, change: 1.2 },
          { disease: 'Cardiovascular Disease', value: 16.4, change: 0.3 },
          { disease: 'Hypertension', value: 20.9, change: 1.5 },
          { disease: 'Hepatitis', value: 6.8, change: -1.7 },
        ],
        hospitalMetrics: {
          patientVolume: 18200,
          averageStayDuration: 4.3,
          bedOccupancy: 71,
          emergencyCases: 2450,
          outpatientVisits: 14600
        },
        demographicData: {
          pediatric: 25,
          adult: 51,
          geriatric: 24
        }
      }
    }
  ];
  
  // Vaccination coverage data
  const vaccinationData = [
    { region: 'North India', children: 88, adults: 72, elderly: 63 },
    { region: 'South India', children: 92, adults: 76, elderly: 68 },
    { region: 'East India', children: 85, adults: 69, elderly: 61 },
    { region: 'West India', children: 90, adults: 75, elderly: 67 },
    { region: 'Central India', children: 86, adults: 70, elderly: 62 },
  ];
  
  // Monthly trend data (simplified for multiple regions)
  const monthlyTrends = [
    { month: 'Jan', north: 1200, south: 1050, east: 920, west: 1180, central: 870 },
    { month: 'Feb', north: 1250, south: 1100, east: 950, west: 1220, central: 900 },
    { month: 'Mar', north: 1350, south: 1200, east: 1000, west: 1300, central: 950 },
    { month: 'Apr', north: 1400, south: 1250, east: 1050, west: 1380, central: 980 },
    { month: 'May', north: 1500, south: 1350, east: 1100, west: 1450, central: 1020 },
  ];
  
  // Filter data based on selected region
  const filteredRegions = regionFilter === 'All Regions' 
    ? regionHealthData 
    : regionHealthData.filter(data => data.region === regionFilter);
  
  // Helper function to calculate national average
  const calculateNationalAverage = (metricName) => {
    let sum = 0;
    let count = 0;
    
    regionHealthData.forEach(region => {
      if (metricName === 'patientVolume') sum += region.metrics.hospitalMetrics.patientVolume;
      if (metricName === 'averageStayDuration') sum += region.metrics.hospitalMetrics.averageStayDuration;
      if (metricName === 'bedOccupancy') sum += region.metrics.hospitalMetrics.bedOccupancy;
      if (metricName === 'emergencyCases') sum += region.metrics.hospitalMetrics.emergencyCases;
      count++;
    });
    
    return (sum / count).toFixed(metricName === 'averageStayDuration' ? 1 : 0);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Regional Health Metrics</h1>
        <p className="text-gray-600">Monitor health trends and metrics across different regions</p>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Region</h2>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="All Regions">All Regions</option>
              {regionHealthData.map(region => (
                <option key={region.region} value={region.region}>{region.region}</option>
              ))}
            </select>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Time Range</h2>
            <div className="flex space-x-2">
              {['Last month', 'Last 3 months', 'Last 6 months', 'Last year'].map((range) => (
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
          
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Report
          </button>
        </div>
      </div>
      
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xl">
              🏥
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Patient Volume</h2>
              <p className="text-2xl font-semibold">{regionFilter === 'All Regions' ? 
                calculateNationalAverage('patientVolume') : 
                filteredRegions[0]?.metrics.hospitalMetrics.patientVolume.toLocaleString()}</p>
              <span className="text-xs text-green-600">↑ 5.2% from previous period</span>
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
              <p className="text-2xl font-semibold">{regionFilter === 'All Regions' ? 
                calculateNationalAverage('bedOccupancy') : 
                filteredRegions[0]?.metrics.hospitalMetrics.bedOccupancy}%</p>
              <span className="text-xs text-green-600">↑ 3.1% from previous period</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center text-xl">
              ⏱️
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Avg. Stay Duration</h2>
              <p className="text-2xl font-semibold">{regionFilter === 'All Regions' ? 
                calculateNationalAverage('averageStayDuration') : 
                filteredRegions[0]?.metrics.hospitalMetrics.averageStayDuration} days</p>
              <span className="text-xs text-red-600">↑ 0.3 days from previous period</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-red-100 text-red-800 flex items-center justify-center text-xl">
              🚑
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Emergency Cases</h2>
              <p className="text-2xl font-semibold">{regionFilter === 'All Regions' ? 
                calculateNationalAverage('emergencyCases') : 
                filteredRegions[0]?.metrics.hospitalMetrics.emergencyCases.toLocaleString()}</p>
              <span className="text-xs text-red-600">↑ 7.4% from previous period</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disease Prevalence Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Disease Prevalence (%)</h2>
            <p className="text-sm text-gray-600">Top 5 prevalent conditions in the selected region</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Disease
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prevalence
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRegions.map((region) => (
                  region.metrics.diseasePrevalence.map((disease, index) => (
                    <tr key={`${region.region}-${disease.disease}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {disease.disease}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                disease.value > 25 ? 'bg-red-500' : 
                                disease.value > 15 ? 'bg-yellow-500' : 'bg-green-500'
                              }`} 
                              style={{ width: `${disease.value * 2}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm text-gray-700">{disease.value}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          disease.change > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {disease.change > 0 ? '↑' : '↓'} {Math.abs(disease.change)}%
                        </span>
                      </td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Demographics Chart */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Patient Demographics</h2>
            <p className="text-sm text-gray-600">Age group distribution of patients</p>
          </div>
          <div className="p-4">
            {filteredRegions.map((region) => (
              <div key={region.region} className="mb-6">
                <h3 className="text-md font-medium text-gray-700 mb-2">{region.region}</h3>
                <div className="flex items-center h-12 mb-2">
                  <div className="w-full flex rounded-md overflow-hidden">
                    <div 
                      className="bg-blue-500 h-12 flex items-center justify-center text-white text-sm font-medium"
                      style={{ width: `${region.metrics.demographicData.pediatric}%` }}
                    >
                      {region.metrics.demographicData.pediatric}%
                    </div>
                    <div 
                      className="bg-purple-500 h-12 flex items-center justify-center text-white text-sm font-medium"
                      style={{ width: `${region.metrics.demographicData.adult}%` }}
                    >
                      {region.metrics.demographicData.adult}%
                    </div>
                    <div 
                      className="bg-teal-500 h-12 flex items-center justify-center text-white text-sm font-medium"
                      style={{ width: `${region.metrics.demographicData.geriatric}%` }}
                    >
                      {region.metrics.demographicData.geriatric}%
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    Pediatric (0-18)
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    Adult (19-64)
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                    Geriatric (65+)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Vaccination Coverage */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Vaccination Coverage (%)</h2>
          <p className="text-sm text-gray-600">Percentage of population vaccinated by age group</p>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Children (0-18)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Adults (19-64)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Elderly (65+)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(regionFilter === 'All Regions' ? vaccinationData : vaccinationData.filter(data => data.region === regionFilter)).map((data) => (
                  <tr key={data.region} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              data.children > 90 ? 'bg-green-500' : 
                              data.children > 80 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${data.children}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-700">{data.children}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              data.adults > 75 ? 'bg-green-500' : 
                              data.adults > 65 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${data.adults}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-700">{data.adults}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              data.elderly > 65 ? 'bg-green-500' : 
                              data.elderly > 55 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${data.elderly}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-700">{data.elderly}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Monthly Trends */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Monthly Patient Volume Trends</h2>
          <p className="text-sm text-gray-600">Patient volume by region over the last 5 months</p>
        </div>
        <div className="p-6">
          <div className="h-64">
            {/* This would be a real chart in a production app, showing a simple representation here */}
            <div className="h-full flex items-end justify-between">
              {monthlyTrends.map((month) => (
                <div key={month.month} className="w-1/6 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    {regionFilter === 'All Regions' || regionFilter === 'North India' ? (
                      <div 
                        className="w-4 bg-red-500 rounded-t-sm mb-1" 
                        style={{ height: `${(month.north / 1500) * 100}%` }}
                      ></div>
                    ) : null}
                    {regionFilter === 'All Regions' || regionFilter === 'South India' ? (
                      <div 
                        className="w-4 bg-blue-500 rounded-t-sm mb-1" 
                        style={{ height: `${(month.south / 1500) * 100}%` }}
                      ></div>
                    ) : null}
                    {regionFilter === 'All Regions' || regionFilter === 'East India' ? (
                      <div 
                        className="w-4 bg-green-500 rounded-t-sm mb-1" 
                        style={{ height: `${(month.east / 1500) * 100}%` }}
                      ></div>
                    ) : null}
                    {regionFilter === 'All Regions' || regionFilter === 'West India' ? (
                      <div 
                        className="w-4 bg-purple-500 rounded-t-sm mb-1" 
                        style={{ height: `${(month.west / 1500) * 100}%` }}
                      ></div>
                    ) : null}
                    {regionFilter === 'All Regions' || regionFilter === 'Central India' ? (
                      <div 
                        className="w-4 bg-yellow-500 rounded-t-sm mb-1" 
                        style={{ height: `${(month.central / 1500) * 100}%` }}
                      ></div>
                    ) : null}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{month.month}</div>
                </div>
              ))}
            </div>
          </div>
          
          {regionFilter === 'All Regions' && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">North India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">South India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">East India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">West India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Central India</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Action Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Need Detailed Health Analysis?</h2>
            <p className="text-gray-600 mt-1">Generate comprehensive health report by region, disease type, or demographic</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Generate Detailed Report
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Schedule Regular Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 