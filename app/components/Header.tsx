import React from 'react';

/**
 * The main header navigation for the website.
 */
export const Header = () => (
  <header className="flex justify-between sticky items-center mb-8">
    <h1 className="text-xl font-bold text-white tracking-wider">SHARDENDU PORTFOLIO</h1>
    <nav className="hidden md:flex items-center space-x-4">
      <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">ABOUT</a>
      <a href="#work" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">WORK</a>
      <a href="#contact" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">CONTACT</a>
    </nav>
  </header>
);
