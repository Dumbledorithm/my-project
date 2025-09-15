import React from 'react';
import { BentoGridItem } from './BentoGridItem';
import type { Testimonial } from '../data/mockData';

/**
 * Displays a horizontally scrolling list of testimonials.
 */
export const TestimonialsSection: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => (
  <BentoGridItem className="p-6 lg:col-span-4">
    <h3 className="text-xl font-bold text-white mb-4">TESTIMONIALS</h3>
    <div className="testimonial-container flex overflow-x-auto space-x-6 pb-4">
      {testimonials.map((t, i) => (
        <div key={i} className="flex-shrink-0 w-72 bg-[#2a2a2a] p-5 rounded-lg">
          <p className="text-sm text-gray-300">"{t.quote}"</p>
          <div className="mt-4">
            <p className="font-bold text-white">{t.name}</p>
            <p className="text-xs text-gray-400">{t.title}{t.company && ` at ${t.company}`}</p>
          </div>
        </div>
      ))}
    </div>
  </BentoGridItem>
);
