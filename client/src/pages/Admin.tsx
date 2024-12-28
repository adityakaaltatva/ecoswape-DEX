import React from 'react';
import MarketStats from '../components/admin/MarketStats';
import UserManagement from '../components/admin/UserManagement';

const Admin: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      
      <MarketStats />
      <UserManagement />
    </div>
  );
};

export default Admin;
