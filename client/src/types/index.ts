export interface CarbonCredit {
  id: string;
  name: string;
  standard: 'Verra' | 'Gold Standard' | 'Other';
  price: number;
  available: number;
  projectLocation: string;
  projectType: string;
  carbonOffset: number; // in metric tons
}

export interface Trade {
  id: string;
  type: 'buy' | 'sell';
  creditId: string;
  amount: number;
  price: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  kycStatus: 'pending' | 'verified' | 'unverified';
  carbonOffset: number;
  walletBalance: number;
}