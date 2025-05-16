'use client';

import { useState } from 'react';

export default function SettingsPage() {
  // Sample settings state
  const [settings, setSettings] = useState({
    // System Settings
    systemName: 'HMIS Cloud',
    defaultCurrency: 'INR',
    timezone: 'Asia/Kolkata',
    maintenanceMode: false,
    
    // Email Settings
    emailServer: 'smtp.hmiscloud.com',
    emailPort: '587',
    emailUsername: 'notifications@hmiscloud.com',
    emailSender: 'HMIS Cloud <notifications@hmiscloud.com>',
    
    // Billing Settings
    invoicePrefix: 'INV-',
    autoGenerateInvoice: true,
    paymentGracePeriod: '15',
    reminderDays: '3,7,14',
    
    // Security Settings
    twoFactorAuth: true,
    passwordExpiry: '90',
    sessionTimeout: '30',
    loginAttempts: '5',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    systemNotifications: true,
  });

  // Handle changes to form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent, section: string) => {
    e.preventDefault();
    
    // In a real app, we would save to database here
    console.log(`Saving ${section} settings:`, settings);
    
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>
        <p className="text-gray-600">Configure system-wide settings and preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b">
          <nav className="flex -mb-px">
            <a href="#general" className="py-4 px-6 border-b-2 border-indigo-500 text-indigo-600 font-medium text-sm">
              General
            </a>
            <a href="#email" className="py-4 px-6 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
              Email
            </a>
            <a href="#billing" className="py-4 px-6 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
              Billing
            </a>
            <a href="#security" className="py-4 px-6 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
              Security
            </a>
            <a href="#notifications" className="py-4 px-6 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
              Notifications
            </a>
          </nav>
        </div>
      </div>

      {/* General Settings */}
      <div id="general" className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">General Settings</h2>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'General')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="systemName" className="block text-sm font-medium text-gray-700 mb-1">
                  System Name
                </label>
                <input
                  type="text"
                  id="systemName"
                  name="systemName"
                  value={settings.systemName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="defaultCurrency" className="block text-sm font-medium text-gray-700 mb-1">
                  Default Currency
                </label>
                <select
                  id="defaultCurrency"
                  name="defaultCurrency"
                  value={settings.defaultCurrency}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                >
                  <option value="INR">Indian Rupee (₹)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={settings.timezone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                >
                  <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">America/New York (EST)</option>
                  <option value="Europe/London">Europe/London (GMT)</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                  Enable Maintenance Mode
                </label>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save General Settings
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Email Settings */}
      <div id="email" className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Email Settings</h2>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Email')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emailServer" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Server
                </label>
                <input
                  type="text"
                  id="emailServer"
                  name="emailServer"
                  value={settings.emailServer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="emailPort" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Port
                </label>
                <input
                  type="text"
                  id="emailPort"
                  name="emailPort"
                  value={settings.emailPort}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="emailUsername" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Username
                </label>
                <input
                  type="text"
                  id="emailUsername"
                  name="emailUsername"
                  value={settings.emailUsername}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="emailSender" className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Name
                </label>
                <input
                  type="text"
                  id="emailSender"
                  name="emailSender"
                  value={settings.emailSender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Test Email Configuration
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save Email Settings
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Billing Settings */}
      <div id="billing" className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Billing Settings</h2>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Billing')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="invoicePrefix" className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Prefix
                </label>
                <input
                  type="text"
                  id="invoicePrefix"
                  name="invoicePrefix"
                  value={settings.invoicePrefix}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="paymentGracePeriod" className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Grace Period (Days)
                </label>
                <input
                  type="number"
                  id="paymentGracePeriod"
                  name="paymentGracePeriod"
                  value={settings.paymentGracePeriod}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="reminderDays" className="block text-sm font-medium text-gray-700 mb-1">
                  Reminder Days (comma separated)
                </label>
                <input
                  type="text"
                  id="reminderDays"
                  name="reminderDays"
                  value={settings.reminderDays}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Days before due date to send reminders (e.g., 3,7,14)
                </p>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="autoGenerateInvoice"
                  name="autoGenerateInvoice"
                  checked={settings.autoGenerateInvoice}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="autoGenerateInvoice" className="ml-2 block text-sm text-gray-700">
                  Auto-generate monthly invoices
                </label>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save Billing Settings
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Security Settings */}
      <div id="security" className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Security Settings</h2>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Security')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="twoFactorAuth"
                  name="twoFactorAuth"
                  checked={settings.twoFactorAuth}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-700">
                  Require Two-Factor Authentication
                </label>
              </div>
              
              <div>
                <label htmlFor="passwordExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Password Expiry (Days)
                </label>
                <input
                  type="number"
                  id="passwordExpiry"
                  name="passwordExpiry"
                  value={settings.passwordExpiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700 mb-1">
                  Session Timeout (Minutes)
                </label>
                <input
                  type="number"
                  id="sessionTimeout"
                  name="sessionTimeout"
                  value={settings.sessionTimeout}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
              
              <div>
                <label htmlFor="loginAttempts" className="block text-sm font-medium text-gray-700 mb-1">
                  Max Login Attempts
                </label>
                <input
                  type="number"
                  id="loginAttempts"
                  name="loginAttempts"
                  value={settings.loginAttempts}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save Security Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 