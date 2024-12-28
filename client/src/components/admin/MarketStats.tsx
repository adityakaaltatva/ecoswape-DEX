import React from 'react';
import { BarChart2, TrendingUp, Users, AlertCircle } from 'lucide-react';

const MarketStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <BarChart2 className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Volume</p>
            <p className="text-2xl font-bold">$2.4M</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Active Trades</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-3 rounded-full">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-bold">45.2K</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending KYC</p>
            <p className="text-2xl font-bold">23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
