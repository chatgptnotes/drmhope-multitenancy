'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RegisterPage() {
  const [facilityName, setFacilityName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [facilityType, setFacilityType] = useState('hospital');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get facility type from URL parameters
    const type = searchParams.get('type');
    if (type && ['hospital', 'enterprise', 'clinic'].includes(type)) {
      setFacilityType(type);
    }
    
    // Get selected modules from URL parameters
    const modules = searchParams.get('modules');
    if (modules) {
      setSelectedModules(modules.split(','));
    }
  }, [searchParams]);
  
  // Get title text based on facility type
  const getTitleText = () => {
    switch (facilityType) {
      case 'enterprise':
        return 'Register Your Enterprise';
      case 'clinic':
        return 'Register Your Clinic';
      default:
        return 'Register Your Hospital';
    }
  };
  
  // Get subtitle text based on facility type
  const getSubtitleText = () => {
    switch (facilityType) {
      case 'enterprise':
        return 'Create an account for your healthcare enterprise';
      case 'clinic':
        return 'Create an account for your medical clinic';
      default:
        return 'Create an account for your hospital';
    }
  };
  
  // Get label text based on facility type
  const getFacilityLabelText = () => {
    switch (facilityType) {
      case 'enterprise':
        return 'Enterprise Name';
      case 'clinic':
        return 'Clinic Name';
      default:
        return 'Hospital Name';
    }
  };
  
  // Get placeholder text based on facility type
  const getFacilityPlaceholder = () => {
    switch (facilityType) {
      case 'enterprise':
        return 'ABC Healthcare Group';
      case 'clinic':
        return 'City Medical Clinic';
      default:
        return 'City General Hospital';
    }
  };
  
  // Get button text based on facility type
  const getButtonText = () => {
    switch (facilityType) {
      case 'enterprise':
        return loading ? 'Registering...' : 'Register Enterprise';
      case 'clinic':
        return loading ? 'Registering...' : 'Register Clinic';
      default:
        return loading ? 'Registering...' : 'Register Hospital';
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }
    
    try {
      // This is a placeholder - we'll connect to Supabase later
      console.log('Registering facility:', facilityType, facilityName, email, 'Modules:', selectedModules);
      
      // Simulate registration success and redirect
      setTimeout(() => {
        // For new registrations, we'll display a pending approval message
        router.push('/register/success');
      }, 1000);
      
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">{getTitleText()}</h1>
          <p className="text-gray-600 mt-2">{getSubtitleText()}</p>
        </div>
        
        {selectedModules.length > 0 && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-blue-700 mb-2">Selected Modules:</h3>
            <ul className="text-sm text-blue-800">
              {selectedModules.map((module, index) => (
                <li key={index} className="mb-1 flex items-center">
                  <span className="mr-2">•</span>
                  {module}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="facilityName" className="block text-gray-700 text-sm font-bold mb-2">
              {getFacilityLabelText()}
            </label>
            <input
              id="facilityName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              placeholder={getFacilityPlaceholder()}
              value={facilityName}
              onChange={(e) => setFacilityName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Admin Email Address
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              placeholder="admin@yourfacility.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {getButtonText()}
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 