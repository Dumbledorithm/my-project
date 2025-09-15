'use client'; // Required for using state and effects

import React, { useState } from 'react';
import { experiences, projects, expertise } from './data/mockData';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BentoGridItem } from './components/BentoGridItem';
import { BentoGridContainer } from './components/BentoGridContainer';
import { SkillsMarquee } from './components/SkillsMarquee';
import { FreelanceCard } from './components/OpenToWorkCard';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/mockData.tsx';


const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="text-gray-300 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />

        <BentoGridContainer>
          {/* Row 1 */}
          
              <Introduction />

          <BentoGridItem className="overflow-hidden">
              <img src="/Anchit.jpg" alt="Shardendu Mishra Profile Picture" className="w-full h-full object-cover" />
          </BentoGridItem>
          <ExperienceSection experiences={experiences} />

          {/* Row 2 */}
          <SkillsMarquee />
          <FreelanceCard />


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

          {/* Row 4: Expertise and Contact */}
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
          <BentoGridItem className="lg:col-span-2">
            <ContactForm />
          </BentoGridItem>
        </BentoGridContainer>

        <Footer />
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default App;
