import React, { useState } from 'react';
import CBDCBalance from '../components/wallet/CBDCBalance';
import TransactionHistory from '../components/wallet/TransactionHistory';
import PaymentModal from '../components/wallet/PaymentModal';
import type { CBDCBalance as CBDCBalanceType, Transaction } from '../types/payment';

const mockBalances: CBDCBalanceType[] = [
  { currency: 'USD', amount: 1000, symbol: '$' },
  { currency: 'EUR', amount: 850, symbol: '€' },
  { currency: 'GBP', amount: 750, symbol: '£' }
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: 500,
    currency: 'USD',
    timestamp: new Date('2024-03-10'),
    status: 'completed'
  },
  {
    id: '2',
    type: 'send',
    amount: 200,
    currency: 'EUR',
    timestamp: new Date('2024-03-09'),
    status: 'completed'
  }
];

const Wallet: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'send' | 'receive';
    currency: string;
  }>({
    isOpen: false,
    type: 'send',
    currency: ''
  });

  const handleSend = (currency: string) => {
    setModalState({ isOpen: true, type: 'send', currency });
  };

  const handleReceive = (currency: string) => {
    setModalState({ isOpen: true, type: 'receive', currency });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Eco Wallet</h1>
      
      <CBDCBalance
        balances={mockBalances}
        onSend={handleSend}
        onReceive={handleReceive}
      />
      
      <TransactionHistory transactions={mockTransactions} />

      <PaymentModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
        currency={modalState.currency}
      />
    </div>
  );
};

export default Wallet;