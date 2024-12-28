import React from 'react';
import { User, Mail, Phone, Globe } from 'lucide-react';

const ProfileSettings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <select className="pl-10 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
