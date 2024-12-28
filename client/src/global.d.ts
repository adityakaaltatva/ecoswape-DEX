/* eslint-disable @typescript-eslint/no-explicit-any */
// global.d.ts
interface Window {
    ethereum?: {
      request: (args: { method: string; params?: Array<any> }) => Promise<any>;
      isMetaMask?: boolean;
      selectedAddress?: string;
      // Other MetaMask specific methods can be added here as needed
    };
  }
  