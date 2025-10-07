import React from 'react';
import { experiences } from './data/mockData';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BentoGridItem } from './components/BentoGridItem';
import { BentoGridContainer } from './components/BentoGridContainer';
import { SkillsMarquee } from './components/SkillsMarquee';
import { FreelanceCard } from './components/OpenToWorkCard';
import { ProjectsClient } from './components/ProjectsClient';
import Image from 'next/image';

const App = () => {
  return (
    <div className="text-gray-300 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />

      <BentoGridContainer>
        {/* Row 1 */}
        <Introduction />

        <BentoGridItem className="overflow-hidden">
          <Image 
            src="/Anchit.jpg" 
            alt="Shardendu Mishra Profile Picture" 
            width={400}
            height={400}
            className="w-full h-full object-cover" 
            priority
          />
        </BentoGridItem>
        <ExperienceSection experiences={experiences} />

        {/* Row 2 */}
        <SkillsMarquee />
        <FreelanceCard />

        {/* Client Components for Interactive Features */}
        <ProjectsClient />
        
        <BentoGridItem className="lg:col-span-2">
          <ContactForm />
        </BentoGridItem>
      </BentoGridContainer>

      <Footer />
    </div>
  );
};

export default App;
