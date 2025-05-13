
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  image?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "Sign Language Recognition using Deep Learning",
      description: "Developed a sign language recognition system using LSTM-based deep learning models for real-time hand gesture detection. Captured and preprocessed video frames of hand gestures using OpenCV and MediaPipe. Designed and trained a sequential LSTM neural network with visualization for gesture confidence levels.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow/Keras", "NumPy", "Scikit-Learn"],
      github: "https://github.com/WhitePegasis/Sign-Language-Recognition",
      image: "/lovable-uploads/acfd2549-514f-42ac-b9f5-3e3be11c9e44.png",
      featured: true
    },
    {
      title: "House Price Prediction using Polynomial Regression",
      description: "Developed a polynomial regression model to predict house prices based on factors such as square footage, bedrooms, and location. Preprocessed real estate data, applied one-hot encoding for categorical variables, and evaluated performance using MSE and R-squared metrics.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      github: "https://github.com/WhitePegasis",
      image: "/lovable-uploads/houseprediction.png",
      featured: true
    },
    {
      title: "Job-App Microservices",
      description: "Developed a microservices app with three microservices: Job Service, User Service, and Rating Service. Used OpenFeign for seamless communication between services. Implemented Service Registry (Spring Cloud Eureka) for dynamic service discovery. Added distributed tracing with Zipkin and circuit breaking with Resilience4j. Containerized the app using Docker and used RabbitMQ for asynchronous data flow.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "OpenFeign", "Eureka", "Zipkin", "Resilience4j", "RabbitMQ"],
      github: "https://github.com/WhitePegasis/Jobstore-Mocroservices",
      image: "/lovable-uploads/jobapp.png",
      featured: true
    }
  ];

  const otherProjects: Project[] = [
    {
      title: "Player-Bidder",
      description: "Built a player bidding website using React.js and Google Sheets as a database via AppScript APIs. Implemented state management, UI components, and performance optimizations.",
      technologies: ["React.js", "Node.js", "AppScript", "Google Sheets API"],
      github: "https://github.com/WhitePegasis/MCL-Auction-2023"
    },
    {
      title: "Node.js JWT Auth",
      description: "Developed a JWT authentication system with secure API endpoints. Used bcrypt for password hashing and implemented middleware for route protection.",
      technologies: ["React.js", "Node.js", "JWT", "bcrypt"],
      github: "https://github.com/WhitePegasis/Nodejs-JWTAuth-Example"
    },
    // {
    //   title: "LangChain Bug Fix Contribution",
    //   description: "Fixed and merged a bug fix PR in LangChain's Chroma vector store (addimages method).",
    //   technologies: ["Python", "LangChain", "Open Source", "Vector Databases"],
    //   github: "https://github.com/langchain-ai/langchain/pull/17964"
    // },
    {
      title: "GenAI Document Intelligence Platform",
      description: "Deployed a full-fledged document intelligence platform with entity extraction and classification capabilities.",
      technologies: ["Python", "LangChain", "Azure OpenAI", "PDF Processing"]
    },
    {
      title: "On-device LLM Inference",
      description: "Implemented voice-to-text and text-to-text POC using Transformer.js for on-device LLM inference.",
      technologies: ["JavaScript", "Transformer.js", "LLMs", "Web Technologies"]
    },
    {
      title: "Multi-agent Collaboration System",
      description: "Researched and developed multi-agent collaboration systems using Model Context Protocol and A2A protocol.",
      technologies: ["Python", "LangGraph", "LangChain", "LLMs"]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="heading">Some Things I've Built</h2>
      
      {/* Featured Projects */}
      <div className="space-y-24 mt-10">
        {featuredProjects.map((project, index) => (
          <div key={project.title} className={cn(
            "relative grid md:grid-cols-12 gap-4 items-center",
            index % 2 === 0 ? "text-left" : "md:text-right"
          )}>
            {/* Project Image */}
            <div className={cn(
              "md:col-span-7 relative z-10",
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            )}>
              <a href={project.external || project.github || "#"} target="_blank" rel="noopener noreferrer">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded">
                    <AspectRatio ratio={16/9} className="bg-navy-light">
                      <div className="absolute inset-0 bg-green opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Project Content */}
            <div className={cn(
              "md:col-span-7 md:col-start-1 md:row-start-1 relative z-20",
              index % 2 === 0 ? "md:col-start-6 md:text-right" : "md:col-end-8 md:text-left"
            )}>
              <p className="font-mono text-sm text-green mb-1">Featured Project</p>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <div className="bg-navy-light p-6 rounded-md shadow-xl">
                <p>{project.description}</p>
              </div>
              
              {/* Tech Stack */}
              <ul className={cn(
                "flex flex-wrap gap-x-4 gap-y-2 mt-6 mb-8 text-sm font-mono",
                index % 2 === 0 ? "justify-end" : "justify-start"
              )}>
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              
              {/* Links */}
              <div className={cn(
                "flex gap-4",
                index % 2 === 0 ? "justify-end" : "justify-start"
              )}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Other Projects */}
      <h3 className="font-bold text-white text-xl mt-32 mb-8 text-center">Other Noteworthy Projects</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {otherProjects.map(project => (
          <div key={project.title} className="bg-navy-light rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-between mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-slate mb-6 flex-grow">{project.description}</p>
            
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono mt-auto pt-4">
              {project.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
