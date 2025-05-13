
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center section-container pt-32">
      <div className="space-y-6">
        <p className={cn(
          'font-mono text-green mb-4 opacity-0 translate-y-4 transition-all duration-500 delay-300',
          isVisible && 'opacity-100 translate-y-0'
        )}>
          Hi, my name is
        </p>
        
        <h1 className={cn(
          'text-white text-5xl md:text-6xl lg:text-7xl font-bold opacity-0 translate-y-4 transition-all duration-500 delay-500',
          isVisible && 'opacity-100 translate-y-0'
        )}>
          Sourav Pradhan.
        </h1>
        
        <h2 className={cn(
          'text-slate text-3xl md:text-4xl lg:text-5xl font-bold opacity-0 translate-y-4 transition-all duration-500 delay-700',
          isVisible && 'opacity-100 translate-y-0'
        )}>
          I build GenAI solutions.
        </h2>
        
        <p className={cn(
          'text-slate max-w-lg opacity-0 translate-y-4 transition-all duration-500 delay-900',
          isVisible && 'opacity-100 translate-y-0'
        )}>
          I'm a software engineer specializing in building exceptional GenAI and LLM-based solutions.
          Currently, I'm focused on developing intelligent document processing systems and multi-agent collaborations at 
          <a href="#" className="text-green hover:underline ml-1">Persistent Systems</a>.
        </p>
        
        <div className={cn(
          'pt-6 opacity-0 translate-y-4 transition-all duration-500 delay-1000',
          isVisible && 'opacity-100 translate-y-0'
        )}>
          <a href="#contact" className="button">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
