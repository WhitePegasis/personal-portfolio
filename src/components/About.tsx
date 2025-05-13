
import React from 'react';

const About: React.FC = () => {
  const skills = [
    'Python', 
    'LangChain', 
    'LlamaIndex', 
    'LangGraph', 
    'Java/Spring Boot',
    'React.js',
    'Tailwind CSS',
    'GenAI/LLMs',
    'RAG',
    'Docker/AWS/Azure'
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="heading">About Me</h2>
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4">
          <p>
            Hello! I'm Sourav, a software engineer based in India specializing in GenAI and LLM-based solutions. 
            I enjoy developing intelligent systems that can understand and process documents, collaborate as agents, 
            and deliver exceptional user experiences.
          </p>
          <p>
            I graduated from Meghnad Saha Institute of Technology in 2023 with a degree in Computer Science and Engineering
            and have been working at <a href="#" className="text-green hover:underline">Persistent Systems</a> since then.
            I've contributed to open-source projects like LangChain and have experience in building complex RAG solutions.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center font-mono text-sm">
                <span className="text-green mr-2">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="relative z-10 bg-navy-light rounded-md overflow-hidden">
            <img 
              src="/lovable-uploads/profile1.jpeg" 
              alt="Sourav Pradhan" 
              className="mix-blend-multiply grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-300"
            />
          </div>
          <div className="absolute inset-0 border-2 border-green rounded-md translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
