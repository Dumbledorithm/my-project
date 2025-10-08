import * as React from 'react';
import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiLangchain,
} from 'react-icons/si';
export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
};

export type Expertise = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export type Project = {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export type Skill = {
  name: string;
  logo: IconType | React.FC<{ className?: string }>;
};

// Single experience record
export const experiences: Experience[] = [
  { 
    title: 'Associate Web Development Intern', 
    company: 'Infotact Solutions', 
    location: 'Remote,India', 
    period: 'Jun 2025 - Present', 
    description: 'Building and maintaining custom websites for high-end clients, focusing on user-friendly design and robust performance. I also work on projects with 3D elements and improved site performance with clean code and optimizations.' 
  },
  {
    title : 'Data Engineering Trainee',
    company : 'HCLTech',
    location : 'Lucknow',
    period : 'Oct 2024- Feb 2025',
    description : 'Completed a comprehensive training program covering data engineering concepts, tools, and best practices. Gained hands-on experience with ETL processes, data warehousing, and big data technologies.'
  },
];

// New list of featured projects
export const projects: Project[] = [
    {
        title: "SecureDrop",
        category: "Secure file-sharing website",
        imageUrl: "/secure-drop.png",
        description: 'A web application that allows users to securely share files with end-to-end encryption. Files are automatically deleted after download or after a set expiration time, ensuring privacy and security.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cryptography.js'],
        liveLink: 'https://secure-drop-v4.vercel.app/',
        githubLink: 'https://github.com/Dumbledorithm',
    },
    {
        title: "ShilpKart",
        category: "A handicraft e-commerce platform",
        imageUrl: "/shilpkart.png",
        description: 'An online marketplace for Indian artisans to sell their handcrafted goods. Features include product listings, a secure payment gateway, and an artisan dashboard for managing inventory and sales.',
        techStack: ['Next.js', 'TailwindCSS', 'Stripe', 'Firebase'],
        liveLink: 'https://shilpkart-ten.vercel.app/',
        githubLink: 'https://github.com/Dumbledorithm/ShilpKart',
    },
    {
        title: "Financial Analyst AI",
        category: "AI_powered financial analysis tool",
        imageUrl: "/FinancialAnalyst.png",
        description: 'An AI tool that leverages large language models to analyze financial documents, stock market data, and news sentiment. It provides summaries, key insights, and trend forecasts to aid in investment decisions.',
        techStack: ['Next.js', 'FastAPI', 'Langchain', 'ChromaDB', 'GroqAPI'],
        liveLink: '#',
        githubLink: 'https://github.com/Dumbledorithm/',
    },
    {
        title: "AI code reviewer",
        category: "A tool that reviews code using AI",
        imageUrl: "/AI-code-reviewer.png",
        description: 'An automated code review tool that uses AI to detect bugs, suggest performance improvements, and ensure code style consistency. It integrates directly with GitHub pull requests to streamline the development workflow.',
        techStack: ['CrewAI', 'LangGraph', 'Next.js', 'GitHub API'],
        liveLink: '#',
        githubLink: '#',
    }
]

export const expertise: Expertise[] = [
    {
        title: 'Full-Stack Development',
        description: 'Building robust applications with modern stacks, including React, Next.js, Node.js, and MongoDB.'
    },
    {
        title: 'AI & Machine Learning',
        description: 'Integrating intelligent features and custom AI agents using Python, Langchain, and CrewAI.'
    },
    {
        title: 'Responsive UI/UX',
        description: 'Creating intuitive, user-friendly interfaces with a focus on seamless performance across all devices.'
    },
    {
        title: 'Data & Analytics',
        description: 'Leveraging Pandas, Numpy, and Scikit-learn to process, analyze, and derive insights from complex datasets.'
    }
];

export const skills: Skill[] = [
  { name: 'Next.js', logo: SiNextdotjs },
  { name: 'React.js', logo: SiReact },
  { name: 'Node.js', logo: SiNodedotjs },
  { name: 'Express.js', logo: SiExpress },
  { name: 'TypeScript', logo: SiTypescript },
  { name: 'JavaScript', logo: SiJavascript },
  { name: 'TailwindCSS', logo: SiTailwindcss },
  { name: 'FastAPI', logo: SiFastapi },
  { name: 'Python', logo: SiPython },
  { name: 'MongoDB', logo: SiMongodb },
  { name: 'Git', logo: SiGit },
  { name: 'GitHub', logo: SiGithub },
  { name: 'Pandas', logo: SiPandas },
  { name: 'Numpy', logo: SiNumpy },
  { name: 'Scikit-learn', logo: SiScikitlearn },
  { name: 'Langchain', logo: SiLangchain },
];


// Testimonials remain the same
export const testimonials: Testimonial[] = [
  { quote: "I've collaborated with countless designers, but Wayne stands out for their innovative approach and seamless execution. Our project was elevated beyond expectations.", name: 'David Rodriguez', title: 'Lead Creative Director', company: 'Xbox' },
  { quote: "Wayne brought an incredible level of professionalism and creativity to our project. They understood our brand and delivered beyond what we had hoped for.", name: 'Jessica Parker', title: 'Marketing Manager', company: 'Activision' },
  { quote: "The precision and clarity in Wayne's design work left us impressed. The project was handled with great expertise, and we could not be happier with the outcome.", name: 'James Connor', title: 'Project Lead', company: 'Airbus' },
  { quote: "Wayne exceeded all expectations, stunning us with the final product and communicating inside the timeline. Fun and enjoyable.", name: 'Emily Carter', title: 'Head of Product', company: '' },
];

