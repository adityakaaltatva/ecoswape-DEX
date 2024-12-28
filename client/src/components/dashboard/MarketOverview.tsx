import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-03-01', price: 22.4 },
  { date: '2024-03-02', price: 21.8 },
  { date: '2024-03-03', price: 23.2 },
  { date: '2024-03-04', price: 24.5 },
  { date: '2024-03-05', price: 25.1 },
  { date: '2024-03-06', price: 24.8 },
  { date: '2024-03-07', price: 25.5 }
];

const MarketOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis 
              dataKey="date" 
              tickFormatter={(str) => new Date(str).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => [`$${value}`, 'Price']}
              labelFormatter={(label) => new Date(label).toLocaleDateString()}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#16a34a"
              fill="#bbf7d0"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketOverview;