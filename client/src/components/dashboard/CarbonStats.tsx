import React from 'react';
import { Scale, TreePine, Wallet2 } from 'lucide-react';

const CarbonStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-full">
            <TreePine className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Carbon Offset</p>
            <p className="text-2xl font-bold">245.8 tCO2e</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <Scale className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Active Trades</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-3 rounded-full">
            <Wallet2 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Portfolio Value</p>
            <p className="text-2xl font-bold">$12,450</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonStats;