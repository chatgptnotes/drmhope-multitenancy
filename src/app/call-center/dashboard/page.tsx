'use client';

import { useState } from 'react';

// Define types for our data
interface EmergencyCall {
  id: string;
  caller: string;
  phone: string;
  time: string;
  location: string;
  coordinates: string;
  emergency: string;
  priority: string;
  status: string;
  assignedTo: string | null;
  notes?: string;
  responseTime?: string;
}

interface Ambulance {
  id: string;
  regNumber: string;
  type: string;
  driver: string;
  phone: string;
  location: string;
  coordinates: string;
  distance: string;
  timeToReach: string;
  status: string;
}

interface CallForm {
  caller: string;
  phone: string;
  location: string;
  emergency: string;
  priority: string;
}

interface CallNote {
  text: string;
  time: string;
}

export default function CallCenterDashboardPage() {
  // Sample data for active emergency calls
  const [activeCalls, setActiveCalls] = useState<EmergencyCall[]>([
    {
      id: 'CALL001',
      caller: 'Priya Sharma',
      phone: '8765432109',
      time: '2023-05-15 11:10 AM',
      location: 'Green Park, New Delhi',
      coordinates: '28.5701° N, 77.2076° E',
      emergency: 'Cardiac Arrest',
      priority: 'Critical',
      status: 'Pending Assignment',
      assignedTo: null,
      responseTime: '2 min ago'
    },
    {
      id: 'CALL002',
      caller: 'Rahul Mehta',
      phone: '8765432108',
      time: '2023-05-15 11:05 AM',
      location: 'Borivali, Mumbai',
      coordinates: '19.2307° N, 72.8567° E',
      emergency: 'Traffic Accident',
      priority: 'High',
      status: 'Ambulance Dispatched',
      assignedTo: 'AMB003',
      responseTime: '5 min ago',
      notes: 'Multiple injuries reported. Police notified.'
    },
    {
      id: 'CALL003',
      caller: 'Sunita Iyer',
      phone: '8765432107',
      time: '2023-05-15 10:58 AM',
      location: 'Anna Nagar, Chennai',
      coordinates: '13.0878° N, 80.2051° E',
      emergency: 'Breathing Difficulty',
      priority: 'Medium',
      status: 'Ambulance Dispatched',
      assignedTo: 'AMB005',
      responseTime: '12 min ago'
    }
  ]);

  // Sample data for completed calls (new)
  const [completedCalls, setCompletedCalls] = useState<EmergencyCall[]>([
    {
      id: 'CALL000',
      caller: 'Aditya Patel',
      phone: '8765432106',
      time: '2023-05-15 10:30 AM',
      location: 'Malad, Mumbai',
      coordinates: '19.1862° N, 72.8479° E',
      emergency: 'Fall Injury',
      priority: 'Medium',
      status: 'Completed',
      assignedTo: 'AMB002',
      responseTime: '8 min',
      notes: 'Patient transported to Lilavati Hospital'
    },
    {
      id: 'CAL0099',
      caller: 'Meera Reddy',
      phone: '8765432105',
      time: '2023-05-15 10:15 AM',
      location: 'Koramangala, Bangalore',
      coordinates: '12.9352° N, 77.6245° E',
      emergency: 'Pregnancy Emergency',
      priority: 'High',
      status: 'Completed',
      assignedTo: 'AMB004',
      responseTime: '6 min',
      notes: 'Successful delivery in ambulance. Mother and baby transported to Apollo Hospital.'
    }
  ]);

  // Sample data for available ambulances
  const ambulances: Ambulance[] = [
    { 
      id: 'AMB001', 
      regNumber: 'DL01AB1234', 
      type: 'Advanced Life Support',
      driver: 'Raj Kumar',
      phone: '9876543210',
      location: 'Karol Bagh, New Delhi',
      coordinates: '28.6471° N, 77.1880° E',
      distance: '3.2 km',
      timeToReach: '8 mins',
      status: 'Available'
    },
    { 
      id: 'AMB002', 
      regNumber: 'DL02CD5678', 
      type: 'Basic Life Support',
      driver: 'Suresh Singh',
      phone: '9876543211',
      location: 'Connaught Place, New Delhi',
      coordinates: '28.6315° N, 77.2167° E',
      distance: '2.1 km',
      timeToReach: '6 mins',
      status: 'Available'
    },
    { 
      id: 'AMB003', 
      regNumber: 'MH01EF9012', 
      type: 'Advanced Life Support',
      driver: 'Amit Patel',
      phone: '9876543212',
      location: 'Andheri, Mumbai',
      coordinates: '19.1136° N, 72.8697° E',
      distance: '4.5 km',
      timeToReach: '12 mins',
      status: 'On Call'
    },
    { 
      id: 'AMB004', 
      regNumber: 'KA01GH3456', 
      type: 'Patient Transport',
      driver: 'Venkat R',
      phone: '9876543213',
      location: 'Koramangala, Bangalore',
      coordinates: '12.9352° N, 77.6245° E',
      distance: '1.8 km',
      timeToReach: '5 mins',
      status: 'Available'
    },
    { 
      id: 'AMB005', 
      regNumber: 'TN01IJ7890', 
      type: 'Advanced Life Support',
      driver: 'Karthik Raja',
      phone: '9876543214',
      location: 'T Nagar, Chennai',
      coordinates: '13.0419° N, 80.2338° E',
      distance: '3.7 km',
      timeToReach: '10 mins',
      status: 'On Call'
    },
  ];

  // State for call details form
  const [newCall, setNewCall] = useState<CallForm>({
    caller: '',
    phone: '',
    location: '',
    emergency: '',
    priority: 'Medium'
  });

  // State for selected call (for dispatch view)
  const [selectedCall, setSelectedCall] = useState<EmergencyCall | null>(null);
  
  // State for call notes (new)
  const [callNote, setCallNote] = useState<string>('');
  
  // State for call filter (new)
  const [priorityFilter, setPriorityFilter] = useState<string>('All Priorities');
  
  // State for view mode (new)
  const [viewMode, setViewMode] = useState<'active' | 'history'>('active');

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCall(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle new call submission
  const handleSubmitCall = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new call object
    const callId = `CALL${String(activeCalls.length + 1).padStart(3, '0')}`;
    const currentTime = new Date().toLocaleString();
    
    const newCallEntry: EmergencyCall = {
      id: callId,
      caller: newCall.caller,
      phone: newCall.phone,
      time: currentTime,
      location: newCall.location,
      coordinates: '28.6139° N, 77.2090° E', // This would be fetched from mapping service
      emergency: newCall.emergency,
      priority: newCall.priority,
      status: 'Pending Assignment',
      assignedTo: null,
      responseTime: 'Just now'
    };
    
    // Add to calls list
    setActiveCalls(prev => [newCallEntry, ...prev]);
    
    // Reset form
    setNewCall({
      caller: '',
      phone: '',
      location: '',
      emergency: '',
      priority: 'Medium'
    });
    
    // Show alert
    alert(`Emergency call ${callId} registered successfully!`);
  };

  // Handle ambulance dispatch
  const handleDispatchAmbulance = (callId: string, ambulanceId: string) => {
    // Update call status
    setActiveCalls(prev => prev.map(call => {
      if (call.id === callId) {
        return {
          ...call,
          status: 'Ambulance Dispatched',
          assignedTo: ambulanceId
        };
      }
      return call;
    }));
    
    // Clear selected call
    setSelectedCall(null);
    
    // Show alert
    alert(`Ambulance ${ambulanceId} has been dispatched to call ${callId}`);
  };
  
  // Handle adding notes to a call (new)
  const handleAddNote = () => {
    if (!selectedCall || !callNote.trim()) return;
    
    setActiveCalls(prev => prev.map(call => {
      if (call.id === selectedCall.id) {
        const existingNotes = call.notes || '';
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const newNote = `${existingNotes ? existingNotes + '\n\n' : ''}[${timestamp}] ${callNote}`;
        return {
          ...call,
          notes: newNote
        };
      }
      return call;
    }));
    
    // Also update selected call if it exists
    if (selectedCall) {
      const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const existingNotes = selectedCall.notes || '';
      const newNote = `${existingNotes ? existingNotes + '\n\n' : ''}[${timestamp}] ${callNote}`;
      setSelectedCall({
        ...selectedCall,
        notes: newNote
      });
    }
    
    // Clear note input
    setCallNote('');
  };
  
  // Handle SMS notification (new)
  const handleSendSMS = (phone: string, message: string) => {
    alert(`SMS message sent to ${phone}: "${message}"`);
  };
  
  // Handle completing a call (new)
  const handleCompleteCall = (callId: string) => {
    // Find the call to complete
    const callToComplete = activeCalls.find(call => call.id === callId);
    if (!callToComplete) return;
    
    // Move from active to completed
    setActiveCalls(prev => prev.filter(call => call.id !== callId));
    setCompletedCalls(prev => [
      {
        ...callToComplete,
        status: 'Completed'
      },
      ...prev
    ]);
    
    // Clear selected call if it was completed
    if (selectedCall && selectedCall.id === callId) {
      setSelectedCall(null);
    }
    
    alert(`Call ${callId} has been marked as completed`);
  };
  
  // Filter active calls based on priority (new)
  const filteredActiveCalls = activeCalls.filter(call => 
    priorityFilter === 'All Priorities' || call.priority === priorityFilter
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-red-600 shadow-sm px-4 py-3 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h1 className="text-xl font-bold">Emergency Call Center</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="font-semibold">Operator:</span> Anjali Gupta
            </div>
            <div className="h-8 w-8 rounded-full bg-white text-red-600 flex items-center justify-center">
              <span className="text-sm font-medium">AG</span>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - New Call Form */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Register New Emergency Call</h2>
            
            <form onSubmit={handleSubmitCall} className="space-y-4">
              <div>
                <label htmlFor="caller" className="block text-sm font-medium text-gray-700 mb-1">
                  Caller Name
                </label>
                <input
                  type="text"
                  id="caller"
                  name="caller"
                  value={newCall.caller}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                  placeholder="Enter caller's name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={newCall.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newCall.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                  placeholder="Enter location details"
                />
              </div>
              
              <div>
                <label htmlFor="emergency" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Description
                </label>
                <textarea
                  id="emergency"
                  name="emergency"
                  value={newCall.emergency}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                  placeholder="Describe the emergency"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={newCall.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Register Emergency Call
                </button>
              </div>
            </form>
          </div>
          
          {/* Middle Column - Active Calls */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {viewMode === 'active' ? 'Active Emergency Calls' : 'Call History'}
              </h2>
              
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${viewMode === 'active' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setViewMode('active')}
                >
                  Active
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${viewMode === 'history' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setViewMode('history')}
                >
                  History
                </button>
              </div>
            </div>
            
            {/* Filter options - New */}
            {viewMode === 'active' && (
              <div className="mb-4">
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-red-300"
                >
                  <option value="All Priorities">All Priorities</option>
                  <option value="Critical">Critical Only</option>
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>
            )}
            
            <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto">
              {viewMode === 'active' ? (
                filteredActiveCalls.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No active emergency calls
                  </div>
                ) : (
                  filteredActiveCalls.map((call) => (
                    <div 
                      key={call.id} 
                      className={`border rounded-lg p-3 ${
                        call.priority === 'Critical' ? 'border-red-500 bg-red-50' :
                        call.priority === 'High' ? 'border-orange-500 bg-orange-50' :
                        call.priority === 'Medium' ? 'border-yellow-500 bg-yellow-50' :
                        'border-blue-500 bg-blue-50'
                      } cursor-pointer hover:shadow-md transition`}
                      onClick={() => setSelectedCall(call)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800">{call.id} - {call.emergency}</h3>
                          <p className="text-sm text-gray-600">Caller: {call.caller} ({call.phone})</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          call.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          call.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          call.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {call.priority}
                        </span>
                      </div>
                      
                      <div className="mt-2 text-sm">
                        <p className="text-gray-600"><span className="font-medium">Location:</span> {call.location}</p>
                        <p className="text-gray-600"><span className="font-medium">Time:</span> {call.time}</p>
                        
                        {/* Response time badge - New */}
                        <div className="mt-1">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            {call.responseTime}
                          </span>
                        </div>
                        
                        {/* Notes preview - New */}
                        {call.notes && (
                          <div className="mt-1 bg-gray-50 p-1 rounded text-xs italic border-l-2 border-gray-300 pl-2">
                            {call.notes.split('\n')[0]}
                            {call.notes.includes('\n') && '...'}
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-2 flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          call.status === 'Ambulance Dispatched' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {call.status}
                        </span>
                        
                        <div className="flex space-x-2">
                          {/* SMS button - New */}
                          <button
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSendSMS(call.phone, "Your ambulance is on the way. Stay calm and follow operator instructions.");
                            }}
                          >
                            SMS
                          </button>
                          
                          {call.assignedTo ? (
                            <button
                              className="text-sm text-green-600 hover:text-green-800 font-medium"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCompleteCall(call.id);
                              }}
                            >
                              Complete
                            </button>
                          ) : (
                            <button
                              className="text-sm text-red-600 hover:text-red-800 font-medium"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCall(call);
                              }}
                            >
                              Dispatch
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )
              ) : (
                completedCalls.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No call history found
                  </div>
                ) : (
                  completedCalls.map((call) => (
                    <div 
                      key={call.id} 
                      className="border border-gray-300 rounded-lg p-3 bg-gray-50 hover:shadow-md transition"
                      onClick={() => setSelectedCall(call)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800">{call.id} - {call.emergency}</h3>
                          <p className="text-sm text-gray-600">Caller: {call.caller} ({call.phone})</p>
                        </div>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Completed
                        </span>
                      </div>
                      
                      <div className="mt-2 text-sm">
                        <p className="text-gray-600"><span className="font-medium">Location:</span> {call.location}</p>
                        <p className="text-gray-600"><span className="font-medium">Time:</span> {call.time}</p>
                        <p className="text-gray-600"><span className="font-medium">Ambulance:</span> {call.assignedTo}</p>
                        <p className="text-gray-600"><span className="font-medium">Response Time:</span> {call.responseTime}</p>
                        
                        {/* Notes preview */}
                        {call.notes && (
                          <div className="mt-1 bg-gray-100 p-1 rounded text-xs italic">
                            {call.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
          
          {/* Right Column - Dispatch Management */}
          <div className="bg-white rounded-lg shadow p-4">
            {selectedCall ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {selectedCall.status === 'Completed' ? 'Call Details' : 'Dispatch Ambulance'}
                  </h2>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setSelectedCall(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-800">{selectedCall.id} - {selectedCall.emergency}</h3>
                  <p className="text-sm text-gray-600 mt-1">Caller: {selectedCall.caller} ({selectedCall.phone})</p>
                  <p className="text-sm text-gray-600">Location: {selectedCall.location}</p>
                  <p className="text-sm text-gray-600">Coordinates: {selectedCall.coordinates}</p>
                  <p className="text-sm text-gray-600">Time: {selectedCall.time}</p>
                  
                  <div className="mt-2 flex">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedCall.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                      selectedCall.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                      selectedCall.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedCall.priority} Priority
                    </span>
                  </div>
                </div>
                
                {/* Call notes section - New */}
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">Call Notes</h3>
                  
                  {selectedCall.status !== 'Completed' && (
                    <div className="flex mb-2">
                      <input
                        type="text"
                        value={callNote}
                        onChange={(e) => setCallNote(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-red-300"
                        placeholder="Add notes about this call..."
                      />
                      <button
                        onClick={handleAddNote}
                        className="px-3 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700"
                      >
                        Add
                      </button>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700 max-h-32 overflow-y-auto whitespace-pre-line">
                    {selectedCall.notes || "No notes for this call."}
                  </div>
                </div>
                
                {/* Quick action buttons - New */}
                {selectedCall.status !== 'Completed' && (
                  <div className="flex space-x-2 mb-4">
                    <button
                      onClick={() => handleSendSMS(selectedCall.phone, "Your ambulance is on the way. Stay calm and follow operator instructions.")}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex-1"
                    >
                      Send SMS
                    </button>
                    {selectedCall.assignedTo && (
                      <button
                        onClick={() => handleCompleteCall(selectedCall.id)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex-1"
                      >
                        Complete Call
                      </button>
                    )}
                  </div>
                )}
                
                {selectedCall.status !== 'Completed' && !selectedCall.assignedTo && (
                  <>
                    <h3 className="font-medium text-gray-700 mb-2">Available Ambulances Nearby</h3>
                    
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {ambulances
                        .filter(amb => amb.status === 'Available')
                        .map((ambulance) => (
                        <div key={ambulance.id} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-800">{ambulance.id}</h4>
                            <span className="text-sm text-green-600 font-medium">{ambulance.status}</span>
                          </div>
                          
                          <p className="text-sm text-gray-600">{ambulance.type}</p>
                          <p className="text-sm text-gray-600">Driver: {ambulance.driver} ({ambulance.phone})</p>
                          <p className="text-sm text-gray-600">Current Location: {ambulance.location}</p>
                          
                          <div className="mt-2 flex justify-between items-center">
                            <div>
                              <span className="text-sm text-gray-600 mr-3">Distance: {ambulance.distance}</span>
                              <span className="text-sm text-gray-600">ETA: {ambulance.timeToReach}</span>
                            </div>
                            
                            <button
                              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                              onClick={() => handleDispatchAmbulance(selectedCall.id, ambulance.id)}
                            >
                              Dispatch
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {ambulances.filter(amb => amb.status === 'Available').length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No ambulances available in this area
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M4 7h16" />
                </svg>
                <p>Select an emergency call to dispatch an ambulance</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 