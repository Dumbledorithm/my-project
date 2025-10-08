'use client';

import React from 'react';
import { BentoGridItem } from './BentoGridItem';
import type { Experience } from '../data/mockData';

/**
 * Displays a list of work experiences.
 */
export const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
  <BentoGridItem className="p-6 lg:row-span-2">
    <h3 className="text-xl font-bold text-white mb-4">EXPERIENCE</h3>
    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <div key={i}>
          <h4 className="font-semibold text-white">{exp.title}</h4>
          <p className="text-sm text-gray-400">{exp.company} - {exp.location}</p>
          <p className="text-xs text-gray-500">{exp.period}</p>
          <p className="text-sm text-gray-400 mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  </BentoGridItem>
);
