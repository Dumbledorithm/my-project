'use client';

import React, { useEffect, useState } from 'react';
import { BentoGridItem } from './BentoGridItem';

/**
 * The main introduction/hero section of the portfolio.
 */
export const Introduction = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isClient) return;
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <BentoGridItem className="p-6 lg:col-span-2 flex flex-col justify-between" id="about">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">SHARDENDU MISHRA</h2>
        <p className="text-base text-gray-400">Hey, I'm Shardendu Mishra, a full-stack developer from Lucknow who blends modern web tech with a passion for AI. I build smart, user-friendly applications.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="bg-[#2a2a2a] p-4 rounded-xl flex justify-between items-center hover:bg-[#3a3a3a] transition-colors cursor-pointer"
        >
          <span className="font-medium text-white">Wanna get in touch?</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
        <a href="mailto:shardendumukul@gmail.com" className="bg-[#2a2a2a] p-4 rounded-xl flex justify-center items-center hover:bg-[#3a3a3a] transition-colors"><span className="font-medium text-white">EMAIL ME</span></a>
      </div>
    </BentoGridItem>
  );
};
