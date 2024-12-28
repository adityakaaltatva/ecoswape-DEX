import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BarChart2, Wallet, Settings, Store } from 'lucide-react';

const Navigation: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">EcoSwape</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/marketplace" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Store className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/wallet" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Wallet className="h-5 w-5" />
              <span>Wallet</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={connectWallet}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {connected ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
