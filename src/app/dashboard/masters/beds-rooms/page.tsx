'use client';

import { useState } from 'react';

export default function BedsRoomsMasterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBedRoom, setNewBedRoom] = useState({
    id: '',
    type: '',
    department: '',
    location: '',
    chargesPerDay: '',
    availability: 'Available',
    features: ''
  });

  // Sample beds and rooms data
  const [bedsRooms, setBedsRooms] = useState([
    {
      id: 'RM101',
      type: 'General Ward Bed',
      department: 'General Medicine',
      location: 'Building A, 1st Floor',
      chargesPerDay: 1200,
      availability: 'Available',
      lastOccupiedBy: '-',
      features: 'Standard Bed, Oxygen Supply'
    },
    {
      id: 'RM102',
      type: 'Semi-Private Room',
      department: 'Orthopedics',
      location: 'Building B, 2nd Floor',
      chargesPerDay: 3500,
      availability: 'Occupied',
      lastOccupiedBy: 'Ramesh Kumar (PID: PT10223)',
      features: 'Attached Bathroom, TV, AC'
    },
    {
      id: 'RM103',
      type: 'ICU Bed',
      department: 'Critical Care',
      location: 'Building A, Ground Floor',
      chargesPerDay: 8000,
      availability: 'Occupied',
      lastOccupiedBy: 'Sunita Sharma (PID: PT10225)',
      features: 'Ventilator, Monitoring, Isolation'
    },
    {
      id: 'RM104',
      type: 'Private Room',
      department: 'Cardiology',
      location: 'Building A, 3rd Floor',
      chargesPerDay: 5000,
      availability: 'Available',
      lastOccupiedBy: 'Vikram Patel (PID: PT10210)',
      features: 'Deluxe Room, Sofa, Refrigerator'
    },
    {
      id: 'RM105',
      type: 'Deluxe Suite',
      department: 'VIP Wing',
      location: 'Building C, 4th Floor',
      chargesPerDay: 12000,
      availability: 'Reserved',
      lastOccupiedBy: '-',
      features: 'Separate Living Area, Mini Kitchen'
    },
    {
      id: 'RM106',
      type: 'Emergency Bed',
      department: 'Emergency',
      location: 'Building A, Ground Floor',
      chargesPerDay: 2000,
      availability: 'Available',
      lastOccupiedBy: 'Deepak Sharma (PID: PT10235)',
      features: 'Emergency Equipment, Curtain Separation'
    },
    {
      id: 'RM107',
      type: 'Pediatric Bed',
      department: 'Pediatrics',
      location: 'Building B, 2nd Floor',
      chargesPerDay: 2500,
      availability: 'Under Maintenance',
      lastOccupiedBy: 'Ananya Singh (PID: PT10240)',
      features: 'Child-safe, Parent Accommodation'
    },
    {
      id: 'RM108',
      type: 'Post-Op Recovery',
      department: 'Surgery',
      location: 'Building A, 1st Floor',
      chargesPerDay: 4000,
      availability: 'Available',
      lastOccupiedBy: 'Rahul Gupta (PID: PT10242)',
      features: 'Monitoring Equipment, Nurse Call'
    },
  ]);

  // Get unique values for filters
  const types = ['All', ...new Set(bedsRooms.map(item => item.type))];
  const departments = ['All', ...new Set(bedsRooms.map(item => item.department))];
  const statuses = ['All', 'Available', 'Occupied', 'Reserved', 'Under Maintenance'];

  // Filter beds and rooms based on search term and filters
  const filteredBedsRooms = bedsRooms.filter(item => 
    (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.lastOccupiedBy.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (typeFilter === 'All' || item.type === typeFilter) &&
    (departmentFilter === 'All' || item.department === departmentFilter) &&
    (statusFilter === 'All' || item.availability === statusFilter)
  );

  // Function to determine availability badge color
  const getAvailabilityBadgeClass = (status: string): string => {
    switch(status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Occupied':
        return 'bg-red-100 text-red-800';
      case 'Reserved':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Maintenance':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  // Handle input change for new bed/room
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBedRoom({
      ...newBedRoom,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new bed/room object
    const newBedRoomObj = {
      id: newBedRoom.id,
      type: newBedRoom.type,
      department: newBedRoom.department,
      location: newBedRoom.location,
      chargesPerDay: parseInt(newBedRoom.chargesPerDay),
      availability: newBedRoom.availability,
      lastOccupiedBy: '-',
      features: newBedRoom.features
    };
    
    // Add to beds/rooms array
    setBedsRooms([...bedsRooms, newBedRoomObj]);
    
    // Reset form and close modal
    setNewBedRoom({
      id: '',
      type: '',
      department: '',
      location: '',
      chargesPerDay: '',
      availability: 'Available',
      features: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Beds & Rooms Master</h1>
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
        <h2 className="text-xl font-bold text-gray-800 mb-4">Beds & Rooms Master</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Bed Occupancy Chart
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Bed/Room
            </button>
          </div>
          <div className="flex space-x-2">
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
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
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Charges/Day
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Availability
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Features
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBedsRooms.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ₹{item.chargesPerDay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getAvailabilityBadgeClass(item.availability)}`}>
                        {item.availability}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.features}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Bed/Room Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Add New Bed/Room</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="id">
                    Room/Bed ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={newBedRoom.id}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
                    Type
                  </label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={newBedRoom.type}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="department">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={newBedRoom.department}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newBedRoom.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="chargesPerDay">
                    Charges Per Day (₹)
                  </label>
                  <input
                    type="number"
                    id="chargesPerDay"
                    name="chargesPerDay"
                    value={newBedRoom.chargesPerDay}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="availability">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={newBedRoom.availability}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Under Maintenance">Under Maintenance</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="features">
                    Features
                  </label>
                  <textarea
                    id="features"
                    name="features"
                    value={newBedRoom.features}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add Bed/Room
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 