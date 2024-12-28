export interface CarbonProject {
  id: string;
  name: string;
  location: string;
  type: 'forestry' | 'renewable' | 'agriculture' | 'industrial';
  standard: 'Verra' | 'Gold Standard' | 'Other';
  price: number;
  available: number;
  description: string;
  verified: boolean;
  rating: number;
  image: string;
}

export interface FilterOptions {
  type: string[];
  standard: string[];
  priceRange: [number, number];
  verified: boolean;
}