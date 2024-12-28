import React from 'react';
import { Shield, MapPin, Star } from 'lucide-react';
import type { CarbonProject } from '../../types/marketplace';

interface ProjectCardProps {
  project: CarbonProject;
  onSelect: (project: CarbonProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {project.location}
            </div>
          </div>
          {project.verified && (
            <Shield className="h-5 w-5 text-green-600" />
          )}
        </div>

        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < project.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <p className="text-sm text-gray-600">Price per Credit</p>
            <p className="text-xl font-bold text-green-600">
              ${project.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => onSelect(project)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Trade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;