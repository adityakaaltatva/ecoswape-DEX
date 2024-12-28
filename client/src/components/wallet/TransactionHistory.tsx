import React from 'react';
import { Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Transaction } from '../../types/payment';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Clock className="h-5 w-5 mr-2" />
        Recent Transactions
      </h2>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                tx.type === 'receive' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {tx.type === 'receive' ? (
                  <ArrowDownRight className="h-5 w-5 text-green-600" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium capitalize">{tx.type}</p>
                <p className="text-sm text-gray-600">
                  {tx.timestamp.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">
                {tx.amount} {tx.currency}
              </p>
              <p className="text-sm text-gray-600 capitalize">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;