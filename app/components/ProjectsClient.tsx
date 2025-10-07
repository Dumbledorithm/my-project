'use client';

import React, { useState } from 'react';
import { projects, expertise } from '../data/mockData';
import { BentoGridItem } from './BentoGridItem';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../data/mockData.tsx';

export const ProjectsClient = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Row 3: Featured Projects */}
      <BentoGridItem className="lg:col-span-4 p-6" id="work">
        <h3 className="text-xl font-bold text-white mb-4">FEATURED PROJECTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <button key={index} className="group text-left" onClick={() => handleProjectClick(project)}>
              <div className="aspect-video rounded-lg overflow-hidden mb-2">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              </div>
              <h4 className="font-semibold text-white">{project.title}</h4>
              <p className="text-sm text-gray-400">{project.category}</p>
            </button>
          ))}
        </div>
      </BentoGridItem>

      {/* Row 4: Expertise */}
      <BentoGridItem className="lg:col-span-2 p-6">
        <h3 className="text-xl font-bold text-white mb-4">EXPERTISE</h3>
        <div className="space-y-6">
          {expertise.map((exp, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">◎</span>
              <div>
                <h4 className="font-semibold text-white">{exp.title}</h4>
                <p className="text-sm text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </BentoGridItem>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};