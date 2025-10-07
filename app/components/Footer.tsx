import React from 'react';

/**
 * The main footer component with social links and copyright.
 */
export const Footer = () => (
  <footer className="mt-12 text-center text-gray-500 text-sm">
    <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.linkedin.com/in/shardendu-mishra-192b3b249/" className="hover:text-white">LinkedIn</a>
        <a href="https://www.instagram.com/shardendu._.mishra" className="hover:text-white">Instagram</a>
        <a href="https://www.x.com/Shardendu_07" className="hover:text-white">X</a>
    </div>
    <p>&copy; 2025. All Rights Reserved. Designed & Built by Shardendu Mishra.</p>
  </footer>
);
