import React, { useState } from 'react';
import { QrCode, Scan, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'send' | 'receive';
  currency: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, type, currency }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 capitalize">{type} {currency}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="0.00"
            />
          </div>

          {type === 'send' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipient Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter recipient address"
              />
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg">
              <QrCode className="h-5 w-5" />
              <span>QR Code</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg">
              <Scan className="h-5 w-5" />
              <span>Scan</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg">
              <Smartphone className="h-5 w-5" />
              <span>NFC</span>
            </button>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-2 border border-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-green-600 text-white rounded-lg"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;