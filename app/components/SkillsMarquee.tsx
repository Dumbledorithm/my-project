import React from 'react';
import { skills } from '../data/mockData'; 
import { BentoGridItem } from './BentoGridItem';

export const SkillsMarquee = () => {
  // We duplicate the skills array to create a seamless looping effect
  const extendedSkills = [...skills, ...skills];

  return (
    <BentoGridItem className="lg:col-span-2 p-6 overflow-hidden ">
      <h3 className="text-xl font-bold text-white mb-6">MY TOOLBOX</h3>
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap animate-marquee">
          {extendedSkills.map((skill, index) => {
            const IconComponent = skill.logo;
            return (
              <div key={index} className="flex-shrink-0 w-32 group flex flex-col items-center justify-center p-4">
                <IconComponent className="h-10 w-10 text-gray-400 group-hover:text-white transition-colors" />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </BentoGridItem>
  );
};
