import React from 'react';
import { Shield, Key, Smartphone } from 'lucide-react';

const SecuritySettings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Key className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-gray-600">Update your account password</p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700">Change</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Smartphone className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
          </div>
          <button className="text-green-600 hover:text-green-700">Enable</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">Security Questions</p>
              <p className="text-sm text-gray-600">Set up recovery questions</p>
            </div>
          </div>
          <button className="text-purple-600 hover:text-purple-700">Setup</button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
