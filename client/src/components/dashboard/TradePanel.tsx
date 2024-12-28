import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

const TradePanel: React.FC = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Trade</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setTradeType('buy')}
            className={`flex-1 py-2 text-center rounded-l-lg ${
              tradeType === 'buy'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setTradeType('sell')}
            className={`flex-1 py-2 text-center rounded-r-lg ${
              tradeType === 'sell'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Sell
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Amount (tCO2e)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Current Price</span>
          <span className="font-medium">$25.50 / tCO2e</span>
        </div>

        <div className="flex items-center justify-between py-2 border-t">
          <span className="text-sm text-gray-600">Total</span>
          <span className="font-bold text-lg">
            ${amount ? (parseFloat(amount) * 25.5).toFixed(2) : '0.00'}
          </span>
        </div>

        <button className={`w-full py-3 rounded-lg text-white font-medium ${
          tradeType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
        }`}>
          {tradeType === 'buy' ? 'Buy Credits' : 'Sell Credits'}
        </button>
      </div>
    </div>
  );
};

export default TradePanel;