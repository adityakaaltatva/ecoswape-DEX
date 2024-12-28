import React from 'react';
import { BarChart2, Leaf, TrendingUp } from 'lucide-react';
import type { Portfolio } from '../../types/payment';

interface PortfolioSummaryProps {
  portfolio: Portfolio;
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ portfolio }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <BarChart2 className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Portfolio Value</p>
            <p className="text-2xl font-bold">${portfolio.totalValue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-full">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Carbon Credits</p>
            <p className="text-2xl font-bold">{portfolio.carbonCredits} tCO2e</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Monthly Offset</p>
            <p className="text-2xl font-bold">{portfolio.monthlyOffset} tCO2e</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;