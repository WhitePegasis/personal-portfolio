
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-md mx-auto text-center">
        <p className="font-mono text-green mb-4">04. What's Next?</p>
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="mb-8">
          Whether you have a question about web development, AI solutions, LLM implementations, or just want to say hi, 
          I'll try my best to get back to you! Feel free to reach out if you're looking for a 
          developer with expertise in modern web technologies and AI.
        </p>
        
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <a href="mailto:whitepegasus1603@gmail.com" className="hover:text-green transition-colors">whitepegasus1603@gmail.com</a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <a href="https://linkedin.com/in/sourav-pradhan-17124221b/" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">linkedin.com/in/sourav-pradhan-17124221b</a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+919732221759" className="hover:text-green transition-colors">+91 9732221759</a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <a href="https://github.com/WhitePegasis" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">github.com/WhitePegasis</a>
          </div>
        </div>
        
        <a 
          href="mailto:whitepegasus1603@gmail.com" 
          className="button px-8 py-4 text-lg inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
