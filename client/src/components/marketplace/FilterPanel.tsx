import React from 'react';
import { Filter, Check } from 'lucide-react';
import type { FilterOptions } from '../../types/marketplace';

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const projectTypes = ['forestry', 'renewable', 'agriculture', 'industrial'];
  const standards = ['Verra', 'Gold Standard', 'Other'];

  const handleTypeChange = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    onFilterChange({ ...filters, type: newTypes });
  };

  const handleStandardChange = (standard: string) => {
    const newStandards = filters.standard.includes(standard)
      ? filters.standard.filter(s => s !== standard)
      : [...filters.standard, standard];
    onFilterChange({ ...filters, standard: newStandards });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Project Type</h3>
          <div className="space-y-2">
            {projectTypes.map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Standard</h3>
          <div className="space-y-2">
            {standards.map(standard => (
              <label key={standard} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.standard.includes(standard)}
                  onChange={() => handleStandardChange(standard)}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span>{standard}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)]
              })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) => onFilterChange({
                ...filters,
                verified: e.target.checked
              })}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <span>Verified Projects Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;