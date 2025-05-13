
import React from 'react';

interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
}

const Education: React.FC = () => {
  const educations: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Meghnad Saha Institute of Technology",
      period: "2019 - 2023",
      location: "Kolkata, WB, India",
      description: "CGPA: 9.2"
    }
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="heading">Education</h2>
      <div className="space-y-12 mt-8">
        {educations.map((education, index) => (
          <div key={index} className="relative grid md:grid-cols-12 gap-4 pb-8">
            {/* Timeline line */}
            {index !== educations.length - 1 && (
              <div className="absolute left-4 md:left-[2.5rem] top-16 bottom-0 w-px bg-navy-lighter"></div>
            )}
            
            {/* Dot */}
            <div className="relative md:col-span-2">
              <div className="absolute left-0 top-2 md:left-10 w-2 h-2 rounded-full bg-green"></div>
              <div className="pl-6 md:pl-0 text-slate font-mono text-sm">{education.period}</div>
            </div>
            
            {/* Content */}
            <div className="pl-6 md:pl-0 md:col-span-10">
              <h3 className="text-xl text-white">{education.degree}</h3>
              <div className="mt-1 text-green">{education.school}</div>
              <div className="mt-1 text-slate-light">{education.location}</div>
              <p className="mt-4">{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
