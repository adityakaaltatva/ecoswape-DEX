import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import type { Trade } from '../../types';

const mockTrades: Trade[] = [
  {
    id: '1',
    type: 'buy',
    creditId: 'amz-001',
    amount: 10,
    price: 25.50,
    status: 'completed',
    timestamp: new Date('2024-03-10T10:00:00')
  },
  {
    id: '2',
    type: 'sell',
    creditId: 'wind-002',
    amount: 5,
    price: 18.75,
    status: 'completed',
    timestamp: new Date('2024-03-09T15:30:00')
  }
];

const RecentTrades: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Recent Trades</h2>
      </div>
      <div className="divide-y">
        {mockTrades.map((trade) => (
          <div key={trade.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                trade.type === 'buy' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {trade.type === 'buy' ? (
                  <ArrowDownRight className={`h-5 w-5 text-green-600`} />
                ) : (
                  <ArrowUpRight className={`h-5 w-5 text-red-600`} />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.amount} tCO2e
                </p>
                <p className="text-sm text-gray-600">
                  {trade.timestamp.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${(trade.amount * trade.price).toFixed(2)}</p>
              <p className="text-sm text-gray-600">${trade.price}/tCO2e</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrades;