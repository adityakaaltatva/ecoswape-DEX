import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BarChart2, Wallet, Settings, Store } from 'lucide-react';

const Navigation: React.FC = () => {
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
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;