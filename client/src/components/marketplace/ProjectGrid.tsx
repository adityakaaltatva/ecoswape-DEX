import React from 'react';
import ProjectCard from './ProjectCard';
import type { CarbonProject } from '../../types/marketplace';

interface ProjectGridProps {
  projects: CarbonProject[];
  onProjectSelect: (project: CarbonProject) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={onProjectSelect}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;