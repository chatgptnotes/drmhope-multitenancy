'use client';

import Link from 'next/link';

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <div className="mb-6">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration Successful!</h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for registering your hospital. Your application has been submitted 
          for review by our Super Admin. You will receive an email once your account 
          has been approved.
        </p>
        
        <div className="mb-6">
          <Link 
            href="/login" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Return to Login
          </Link>
        </div>
        
        <p className="text-sm text-gray-500">
          If you don't hear from us within 24 hours, please contact our support team.
        </p>
      </div>
    </div>
  );
} 