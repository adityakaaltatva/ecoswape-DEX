import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { CBDCBalance } from '../../types/payment';

interface CBDCBalanceProps {
  balances: CBDCBalance[];
  onSend: (currency: string) => void;
  onReceive: (currency: string) => void;
}

const CBDCBalance: React.FC<CBDCBalanceProps> = ({ balances, onSend, onReceive }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Wallet className="h-5 w-5 mr-2" />
        CBDC Balances
      </h2>
      <div className="space-y-4">
        {balances.map((balance) => (
          <div key={balance.currency} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{balance.currency}</p>
              <p className="text-2xl font-bold">
                {balance.symbol}{balance.amount.toLocaleString()}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onSend(balance.currency)}
                className="p-2 text-gray-600 hover:bg-gray-200 rounded-full"
                title="Send"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onReceive(balance.currency)}
                className="p-2 text-gray-600 hover:bg-gray-200 rounded-full"
                title="Receive"
              >
                <ArrowDownRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CBDCBalance;