export interface CBDCBalance {
  currency: string;
  amount: number;
  symbol: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  amount: number;
  currency: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
  counterparty?: string;
}

export interface Portfolio {
  totalValue: number;
  carbonCredits: number;
  cbdcBalances: CBDCBalance[];
  monthlyOffset: number;
  impactScore: number;
}