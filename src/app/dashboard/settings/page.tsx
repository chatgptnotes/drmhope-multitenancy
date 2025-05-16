'use client';

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account and system preferences</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Profile Information</h3>
            <p className="text-sm text-gray-500 mb-4">Update your name, email, and profile picture</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Password</h3>
            <p className="text-sm text-gray-500 mb-4">Change your account password</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Change Password
            </button>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500 mb-4">Enhance your account security with 2FA</p>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">System Preferences</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Notifications</h3>
            <p className="text-sm text-gray-500 mb-4">Configure your notification preferences</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Manage Notifications
            </button>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Theme</h3>
            <p className="text-sm text-gray-500 mb-4">Change the visual theme of your dashboard</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Light
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                Dark
              </button>
            </div>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="text-md font-medium text-gray-700 mb-2">Language</h3>
            <p className="text-sm text-gray-500 mb-4">Select your preferred language</p>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="gu">Gujarati</option>
              <option value="te">Telugu</option>
              <option value="ta">Tamil</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 