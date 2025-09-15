import React from 'react';
import { BentoGridItem } from './BentoGridItem';

/**
 * The main introduction/hero section of the portfolio.
 */
export const Introduction = () => (
  <BentoGridItem className="p-6 lg:col-span-2 flex flex-col justify-between" id="about">
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">SHARDENDU MISHRA</h2>
      <p className="text-base text-gray-400">Hey, I'm Shardendu Mishra, a full-stack developer from Lucknow who blends modern web tech with a passion for AI. I build smart, user-friendly applications.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <a href="#contact" className="bg-[#2a2a2a] p-4 rounded-xl flex justify-between items-center hover:bg-[#3a3a3a]">
        <span className="font-medium text-white">Wanna get in touch?</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
      <a href="mailto:wayne_harkwood@supabento.com" className="bg-[#2a2a2a] p-4 rounded-xl flex justify-center items-center hover:bg-[#3a3a3a]"><span className="font-medium text-white">EMAIL ME</span></a>
    </div>
  </BentoGridItem>
);
