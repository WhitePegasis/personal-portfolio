
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  category: string;
  icon: React.ReactNode;
  items: Array<{
    title: string;
    link?: string;
  }>;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      category: "LangChain Contribution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green">
          <path d="M16 18l-4-4 4-4" />
          <path d="M8 18l-4-4 4-4" />
        </svg>
      ),
      items: [
        {
          title: "Fixed and merged a bug fix PR in LangChain's Chroma vector store (addimages method)",
          link: "https://github.com/langchain-ai/langchain/pull/17964"
        }
      ]
    },
    {
      category: "AI & LLM Courses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a4.2 4.2 0 0 0 4 4 4.2 4.2 0 0 1 4 4 4.2 4.2 0 0 1-4 4 4.2 4.2 0 0 0-4 4 4.2 4.2 0 0 1-4 4 4.2 4.2 0 0 1-4-4 4.2 4.2 0 0 0-4-4 4.2 4.2 0 0 1-4-4 4.2 4.2 0 0 1 4-4 4.2 4.2 0 0 0 4-4 4.2 4.2 0 0 1 4-4Z" />
        </svg>
      ),
      items: [
        {
          title: "LLMs Mastery: Complete Guide to Transformers and Generative AI",
          link: "https://leetcode.com/whitepegasus1603/"
        },
        {
          title: "Fine Tuning Large Language Models",
          link: "https://learn.deeplearning.ai/accomplishments/c8107d68-414e-4612-a979-461711cc0627?usp=sharing"
        },
        {
          title: "AI Agents in LangGraph",
          link: "https://learn.deeplearning.ai/accomplishments/fcb1132a-d204-4e78-9738-5e6b81728fea?usp=sharing"
        }
      ]
    },
    {
      category: "DSA Achievements",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green">
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
      items: [
        {
          title: "600+ doubts solved as TA with 4.89/5 rating",
          link: "https://drive.google.com/file/d/1OvDh1xWau55tqExGUrNPLMkCWLtjfybF/view"
        },
        {
          title: "450+ DSA questions solved on LeetCode",
          link: "https://leetcode.com/whitepegasus1603/"
        },
        {
          title: "350+ DSA questions solved on Coding Ninjas",
          link: "https://ninjasfiles.s3.amazonaws.com/certificate1830790414acd19f8cf13959a01b1ddeb8daaa9.pdf"
        },
        {
          title: "200+ DSA questions solved on GeeksForGeeks",
          link: "https://www.geeksforgeeks.org/user/whitepegasus1603/"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="section-container">
      <h2 className="heading">Key Accomplishments & Certifications</h2>
      
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={achievement.category} className="bg-navy-light border-navy-lighter hover:border-green transition-colors duration-300">
            <CardContent className="p-6">
              <div className="mb-6">
                {achievement.icon}
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4">{achievement.category}</h3>
              
              <ul className="space-y-4">
                {achievement.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green mr-2 mt-1">•</span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-light hover:text-green transition-colors duration-300"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16">
        <div className="bg-navy-light p-6 rounded-md">
          <h3 className="text-white text-xl font-bold mb-6">Technical Skills Overview</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-navy-lighter">
                  <td className="py-4 pr-4 text-green font-mono">Languages</td>
                  <td className="py-4">DSA, C++, Java, Python, JavaScript, TypeScript</td>
                </tr>
                <tr className="border-b border-navy-lighter">
                  <td className="py-4 pr-4 text-green font-mono">Frameworks</td>
                  <td className="py-4">Langchain, LlamaIndex, Langraph, Spring Boot, Node.js, Express.js, React.js, Next.js, Tailwind CSS</td>
                </tr>
                <tr className="border-b border-navy-lighter">
                  <td className="py-4 pr-4 text-green font-mono">Libraries</td>
                  <td className="py-4">Numpy, Pandas, scikit-learn, Matplotlib, PyPdf, pytesseract, OpenCV</td>
                </tr>
                <tr className="border-b border-navy-lighter">
                  <td className="py-4 pr-4 text-green font-mono">Databases</td>
                  <td className="py-4">MySQL, PostgreSQL, MongoDB, Firebase, Redis</td>
                </tr>
                <tr className="border-b border-navy-lighter">
                  <td className="py-4 pr-4 text-green font-mono">DevOps & Web</td>
                  <td className="py-4">Git, Docker, AWS, Azure, HTML, CSS, JavaScript, TypeScript, FastAPI, Flask</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-green font-mono">Others</td>
                  <td className="py-4">LLM (Large Language Model), Generative AI, RAG (Retrieval Augmented Generation), MCP, A2A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
