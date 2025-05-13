
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm py-4',
      scrolled ? 'bg-navy-light/90 shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-green font-mono text-2xl">SP</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={cn(
                    'nav-link font-mono text-sm',
                    activeSection === item.href.substring(1) && 'active'
                  )}
                >
                  <span className="text-green mr-1">0{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18"></path>
              <path d="M3 6h18"></path>
              <path d="M3 18h18"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={cn(
        'md:hidden absolute w-full bg-navy-light transition-all duration-300',
        mobileMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
      )}>
        <ul className="flex flex-col space-y-4 px-6">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={cn(
                  'nav-link font-mono block text-sm py-2',
                  activeSection === item.href.substring(1) && 'active'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-green mr-1">0{index + 1}.</span> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
