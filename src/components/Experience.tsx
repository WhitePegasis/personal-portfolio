
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
  certificate?: string;
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs: Job[] = [
    {
      company: "Persistent Systems",
      title: "Software Engineer",
      period: "September 2023 - Present",
      description: [
        "Developed high-quality web applications using Next.js, React Query, and Zustand for state management.",
        "Built a chat playground with Next.js and Vite, implementing SSR for improved performance and responsiveness.",
        "Optimized API routes and data fetching strategies, reducing load times and improving user experience.",
        "Integrated UI frameworks like MUI and Tailwind CSS to enhance component styling and usability.",
        "Implemented RESTful APIs and authentication flows, including Azure Directory SSO using MSAL.",
        "Ensured security best practices by implementing JWT authentication, API rate limiting, and proper CORS handling.",
        "Migrated Angular frontend to React, improving maintainability and user experience.",
        "Developed and hosted Docker images on Azure Container Apps and Azure Container Registry.",
        "Implemented on-device LLM inference (voice-to-text and text-to-text) POC using Transformer.js.",
        "Developed a document intelligence POC including PDF text extraction, requirement grouping, and LLM-based classification.",
        "Built GenAI Agentic RAG solutions using Python, Langchain, and LlamaIndex.",
        "Fine-tuned open-source LLM Florence-2-base using synthetic data via GPT-4o for DocVQA using QLoRA.",
        "Implemented performance optimizations, reducing response times by 50% using Redis for semantic caching."
      ]
    },
    {
      company: "Persistent Systems",
      title: "Software Engineer Intern",
      period: "January 2023 - June 2023",
      certificate: "https://drive.google.com/file/d/1SQV7h21AbkEtWHkFqO38jA7zNOoNJZXp/view",
      description: [
        "Worked on full-stack web applications using Spring Boot, React, and PostgreSQL.",
        "Built RESTful APIs, integrated frontend with backend, and optimized database queries."
      ]
    },
    {
      company: "Coding Ninjas",
      title: "Teaching Assistant, DSA in C++",
      period: "September 2022 - December 2022",
      certificate: "https://drive.google.com/file/d/1pusiA59m4jq6mgXrBMaoF9BO7BeOZHZZ/view",
      description: [
        "Solved 600+ DSA doubts with a 4.89/5 rating, covering topics like Recursion, Trees, and Graphs."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="heading">Where I've Worked</h2>
      <div className="md:grid md:grid-cols-12 gap-4 mt-10">
        {/* Tabs - with no scrollbar */}
        <div className="md:col-span-3 mb-6 md:mb-0">
          <div className="flex md:flex-col overflow-x-auto no-scrollbar">
            {jobs.map((job, index) => (
              <button
                key={`${job.company}-${job.title}`}
                className={cn(
                  'px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 font-mono text-sm text-left whitespace-nowrap',
                  index === activeTab ? 
                  'text-green border-green bg-navy-lighter md:bg-navy-light' : 
                  'text-slate border-navy-lighter hover:bg-navy-light hover:text-green'
                )}
                onClick={() => setActiveTab(index)}
              >
                {job.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
          <div>
            <h3 className="text-xl text-white">
              <span>{jobs[activeTab].title}</span>
              <span className="text-green"> @ {jobs[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-slate mt-1">{jobs[activeTab].period}</p>
            {jobs[activeTab].certificate && (
              <a 
                href={jobs[activeTab].certificate} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-2 text-sm text-green hover:underline"
              >
                View Certificate
              </a>
            )}
            <ul className="mt-6 space-y-4">
              {jobs[activeTab].description.map((point, index) => (
                <li key={index} className="flex">
                  <span className="text-green mr-2 mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
