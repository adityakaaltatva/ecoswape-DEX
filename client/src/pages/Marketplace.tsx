import React, { useState } from 'react';
import FilterPanel from '../components/marketplace/FilterPanel';
import ProjectGrid from '../components/marketplace/ProjectGrid';
import type { CarbonProject, FilterOptions } from '../types/marketplace';

const mockProjects: CarbonProject[] = [
  {
    id: '1',
    name: 'Amazon Rainforest Conservation',
    location: 'Brazil',
    type: 'forestry',
    standard: 'Verra',
    price: 25.50,
    available: 1000,
    description: 'Protecting 10,000 hectares of pristine rainforest in the Amazon basin.',
    verified: true,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Wind Farm Project',
    location: 'India',
    type: 'renewable',
    standard: 'Gold Standard',
    price: 18.75,
    available: 500,
    description: 'Large-scale wind energy project generating clean electricity.',
    verified: true,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Sustainable Agriculture',
    location: 'Kenya',
    type: 'agriculture',
    standard: 'Other',
    price: 22.30,
    available: 750,
    description: 'Implementing sustainable farming practices to reduce emissions.',
    verified: false,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80'
  }
];

const Marketplace: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    type: [],
    standard: [],
    priceRange: [0, 100],
    verified: false
  });

  const filteredProjects = mockProjects.filter(project => {
    if (filters.type.length && !filters.type.includes(project.type)) return false;
    if (filters.standard.length && !filters.standard.includes(project.standard)) return false;
    if (project.price < filters.priceRange[0] || project.price > filters.priceRange[1]) return false;
    if (filters.verified && !project.verified) return false;
    return true;
  });

  const handleProjectSelect = (project: CarbonProject) => {
    console.log('Selected project:', project);
    // Handle project selection, e.g., open trade modal
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Carbon Credit Marketplace</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <FilterPanel
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>
        <div className="lg:col-span-3">
          <ProjectGrid
            projects={filteredProjects}
            onProjectSelect={handleProjectSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;