import React from 'react';
import ProfileSettings from '../components/settings/ProfileSettings';
import SecuritySettings from '../components/settings/SecuritySettings';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileSettings />
        <SecuritySettings />
      </div>
    </div>
  );
};
export default Settings;