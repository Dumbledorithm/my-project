import React from 'react';
import { BentoGridItem } from './BentoGridItem';

export const FreelanceCard = () => {
  return (
    <BentoGridItem className="p-6 flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <span className="relative flex h-3 w-3 mb-2 mx-auto">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="font-medium text-white">AVAILABLE FOR FREELANCE</p>
      </div>
      <a 
        href="/Shardendu_Mishra_Resume.pdf" 
        download="Shardendu_Mishra_Resume.pdf" 
        className="w-full bg-white text-black p-3 rounded-lg flex justify-center items-center hover:bg-gray-200 transition-colors"
      >
        <span className="font-bold text-sm">DOWNLOAD RESUME</span>
      </a>
    </BentoGridItem>
  );
};