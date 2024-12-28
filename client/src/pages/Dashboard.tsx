import React from 'react';
import CarbonStats from '../components/dashboard/CarbonStats';
import TradePanel from '../components/dashboard/TradePanel';
import RecentTrades from '../components/dashboard/RecentTrades';
import MarketOverview from '../components/dashboard/MarketOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <CarbonStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MarketOverview />
        </div>
        <div>
          <TradePanel />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTrades />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;